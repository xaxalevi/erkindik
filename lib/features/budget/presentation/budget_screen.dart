import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:fl_chart/fl_chart.dart';

import '../../dashboard/provider/dashboard_provider.dart';
import '../../expenses/provider/expenses_provider.dart';
import '../provider/budget_provider.dart';
import '../provider/budget_selectors.dart';
import 'add_limit_sheet.dart';

class BudgetScreen extends ConsumerStatefulWidget {
  const BudgetScreen({super.key});

  @override
  ConsumerState<BudgetScreen> createState() => _BudgetScreenState();
}

class _BudgetScreenState extends ConsumerState<BudgetScreen> with SingleTickerProviderStateMixin {
  String? _accountId; 
  BudgetPeriod _period = BudgetPeriod.month;
  late final TabController _tabs;

  @override
  void initState() {
    super.initState();
    _tabs = TabController(length: 2, vsync: this);
  }

  @override
  Widget build(BuildContext context) {
    final accounts = ref.watch(accountsProvider);
    final limits = ref.watch(budgetLimitsProvider);
    final spends = ref.watch(spendByCategoryProvider((accountId: _accountId, period: _period)));
    final total = spends.fold<double>(0, (s, c) => s + c.amount);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Бюджет'),
        centerTitle: true,
        backgroundColor: Colors.transparent,
        elevation: 0,
        bottom: TabBar(
          controller: _tabs,
          indicatorColor: Colors.deepPurpleAccent,
          tabs: const [
            Tab(text: 'Статистика'),
            Tab(text: 'Лимиты'),
          ],
        ),
      ),

      floatingActionButton: _tabs.index == 1
          ? FloatingActionButton(
              backgroundColor: Colors.deepPurpleAccent,
              child: const Icon(Icons.add),
              onPressed: () {
                showModalBottomSheet(
                  context: context,
                  isScrollControlled: true,
                  backgroundColor: const Color(0xFF1A1A1D),
                  shape: const RoundedRectangleBorder(
                    borderRadius: BorderRadius.vertical(top: Radius.circular(26)),
                  ),
                  builder: (_) => const AddLimitSheet(),
                );
              },
            )
          : null,

      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            // Фильтры (счета + период)
            Row(
              children: [
                Expanded(
                  child: DropdownButton<String?>(
                    value: _accountId,
                    isExpanded: true,
                    dropdownColor: const Color(0xFF1A1A1D),
                    items: <DropdownMenuItem<String?>>[
                      const DropdownMenuItem(value: null, child: Text('Все счета')),
                      ...accounts.map((a) => DropdownMenuItem(value: a.id, child: Text(a.name))),
                    ],
                    onChanged: (v) => setState(() => _accountId = v),
                  ),
                ),
                const SizedBox(width: 12),
                SegmentedButton<BudgetPeriod>(
                  segments: const [
                    ButtonSegment(value: BudgetPeriod.month, label: Text('Месяц')),
                    ButtonSegment(value: BudgetPeriod.all, label: Text('Все')),
                  ],
                  selected: {_period},
                  onSelectionChanged: (s) => setState(() => _period = s.first),
                ),
              ],
            ),

            const SizedBox(height: 16),

            Expanded(
              child: TabBarView(
                controller: _tabs,
                children: [
                  _StatsTab(spends: spends, total: total),
                  _LimitsTab(spends: spends, limits: limits),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _StatsTab extends StatefulWidget {
  final List<CategorySpend> spends;
  final double total;
  const _StatsTab({required this.spends, required this.total});

  @override
  State<_StatsTab> createState() => _StatsTabState();
}

class _StatsTabState extends State<_StatsTab> {
  int? touchedIndex;

  @override
  Widget build(BuildContext context) {
    if (widget.spends.isEmpty) {
      return const Center(child: Text('Расходов пока нет'));
    }

    final colors = [
      Colors.deepPurpleAccent,
      Colors.tealAccent,
      Colors.amberAccent,
      Colors.pinkAccent,
      Colors.lightBlueAccent,
      Colors.greenAccent,
      Colors.orangeAccent,
    ];

    return Column(
      children: [
        const SizedBox(height: 12),

        // Animated Pie Chart
        SizedBox(
          height: 260,
          child: PieChart(
            PieChartData(
              pieTouchData: PieTouchData(
                touchCallback: (event, response) {
                  if (!event.isInterestedForInteractions || response == null || response.touchedSection == null) {
                    setState(() => touchedIndex = null);
                    return;
                  }
                  setState(() => touchedIndex = response.touchedSection!.touchedSectionIndex);
                },
              ),
              sectionsSpace: 0,
              centerSpaceRadius: 48,
              sections: [
                for (int i = 0; i < widget.spends.length; i++)
                  PieChartSectionData(
                    color: colors[i % colors.length],
                    value: widget.spends[i].amount,
                    radius: touchedIndex == i ? 85 : 70, // Увеличение радиуса
                    title: touchedIndex == i
                        ? "${((widget.spends[i].amount / widget.total) * 100).toStringAsFixed(0)}%"
                        : "",
                    titleStyle: const TextStyle(fontWeight: FontWeight.bold, fontSize: 14, color: Colors.white),
                  ),
              ],
            ),
            swapAnimationDuration: const Duration(milliseconds: 450),
            swapAnimationCurve: Curves.easeOutBack,
          ),
        ),

        const SizedBox(height: 12),

        // Центр отображения выбранной категории
        if (touchedIndex != null)
          Column(
            children: [
              Text(
                widget.spends[touchedIndex!].category,
                style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
              ),
              Text(
                "₸${widget.spends[touchedIndex!].amount.toStringAsFixed(0)}",
                style: const TextStyle(fontSize: 16, color: Colors.white70),
              ),
            ],
          ),

        const SizedBox(height: 16),

        // Легенда
        Expanded(
          child: ListView.builder(
            itemCount: widget.spends.length,
            itemBuilder: (_, i) {
              final c = widget.spends[i];
              final color = colors[i % colors.length];
              final selected = touchedIndex == i;

              return GestureDetector(
                onTap: () => setState(() => touchedIndex = i),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 250),
                  margin: const EdgeInsets.only(bottom: 12),
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: selected ? Colors.white.withOpacity(0.15) : Colors.white.withOpacity(0.06),
                    borderRadius: BorderRadius.circular(14),
                    border: selected
                        ? Border.all(color: color, width: 1.4)
                        : null,
                  ),
                  child: Row(
                    children: [
                      CircleAvatar(radius: 6, backgroundColor: color),
                      const SizedBox(width: 12),
                      Expanded(child: Text(c.category)),
                      Text("₸${c.amount.toStringAsFixed(0)}",
                          style: const TextStyle(fontWeight: FontWeight.w600)),
                    ],
                  ),
                ),
              );
            },
          ),
        ),
      ],
    );
  }
}


class _LimitsTab extends ConsumerWidget {
  final List<CategorySpend> spends;
  final Map<String, double> limits;
  const _LimitsTab({required this.spends, required this.limits});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final spentMap = {for (final s in spends) s.category: s.amount};
    final cats = {...limits.keys, ...spentMap.keys}.toList()..sort();

    if (cats.isEmpty) {
      return const Center(child: Text('Добавьте лимиты или совершите операции'));
    }

    return ListView.separated(
      itemCount: cats.length,
      separatorBuilder: (_, __) => const SizedBox(height: 12),
      itemBuilder: (_, i) {
        final cat = cats[i];
        final limit = limits[cat] ?? 0;
        final spent = spentMap[cat] ?? 0;
        final ratio = limit > 0 ? (spent / limit).clamp(0, 1) : 0.0;
        final over = limit > 0 && spent > limit;

        return Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: Colors.white.withOpacity(0.06),
            borderRadius: BorderRadius.circular(18),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Expanded(
                    child: Text(cat, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w600)),
                  ),
                  PopupMenuButton<String>(
                    itemBuilder: (_) => const [
                      PopupMenuItem(value: 'edit', child: Text('Изменить лимит')),
                      PopupMenuItem(value: 'remove', child: Text('Удалить лимит')),
                    ],
                    onSelected: (v) {
                      if (v == 'edit') {
                        showModalBottomSheet(
                          context: context,
                          isScrollControlled: true,
                          backgroundColor: const Color(0xFF1A1A1D),
                          shape: const RoundedRectangleBorder(
                            borderRadius: BorderRadius.vertical(top: Radius.circular(26)),
                          ),
                          builder: (_) => AddLimitSheet(initialCategory: cat, initialLimit: limit),
                        );
                      } else if (v == 'remove') {
                        ref.read(budgetLimitsProvider.notifier).removeLimit(cat);
                      }
                    },
                  ),
                ],
              ),

              const SizedBox(height: 10),

              ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: LinearProgressIndicator(
                  value: ratio.toDouble(),
                  minHeight: 8,
                  backgroundColor: Colors.white.withOpacity(0.12),
                  valueColor: AlwaysStoppedAnimation(over ? Colors.redAccent : Colors.greenAccent),
                ),
              ),

              const SizedBox(height: 6),

              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text("Потрачено: ₸${spent.toStringAsFixed(0)}",
                      style: TextStyle(color: over ? Colors.redAccent : Colors.white70)),
                  Text(
                    limit > 0 ? "Лимит: ₸${limit.toStringAsFixed(0)}" : "Лимит не задан",
                    style: TextStyle(color: Colors.white.withOpacity(0.6)),
                  ),
                ],
              ),
            ],
          ),
        );
      },
    );
  }
}
