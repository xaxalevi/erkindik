import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../expenses/provider/expenses_provider.dart';
import '../../dashboard/provider/dashboard_provider.dart';
import '../../../data/models/transaction.dart';

enum BudgetPeriod { month, all }

class CategorySpend {
  final String category;
  final double amount; // >0 = расход
  CategorySpend(this.category, this.amount);
}

/// Возвращает расходы по категориям для выбранного счёта и периода
final spendByCategoryProvider = Provider.family<
    List<CategorySpend>,
    ({String? accountId, BudgetPeriod period})>((ref, params) {
  final txs = ref.watch(expensesProvider);

  DateTime? from;
  if (params.period == BudgetPeriod.month) {
    final now = DateTime.now();
    from = DateTime(now.year, now.month, 1);
  }

  final filtered = txs.where((t) {
    if (params.accountId != null && t.accountId != params.accountId) return false;
    if (from != null && t.date.isBefore(from)) return false;
    // Нас интересуют ТОЛЬКО расходы
    return !t.isIncome && t.amount > 0;
  });

  final Map<String, double> agg = {};
  for (final t in filtered) {
    final cat = (t.category?.isNotEmpty == true) ? t.category! : 'Без категории';
    agg[cat] = (agg[cat] ?? 0) + t.amount;
  }

  return agg.entries
      .map((e) => CategorySpend(e.key, e.value))
      .toList()
    ..sort((a, b) => b.amount.compareTo(a.amount));
});
