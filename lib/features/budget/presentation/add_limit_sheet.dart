import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../provider/budget_provider.dart';

class AddLimitSheet extends ConsumerStatefulWidget {
  final String? initialCategory;
  final double? initialLimit;
  const AddLimitSheet({super.key, this.initialCategory, this.initialLimit});

  @override
  ConsumerState createState() => _AddLimitSheetState();
}

class _AddLimitSheetState extends ConsumerState<AddLimitSheet> {
  final _catCtrl = TextEditingController();
  final _limitCtrl = TextEditingController();

  @override
  void initState() {
    super.initState();
    if (widget.initialCategory != null) _catCtrl.text = widget.initialCategory!;
    if (widget.initialLimit != null) _limitCtrl.text = widget.initialLimit!.toStringAsFixed(0);
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(
        left: 16,
        right: 16,
        top: 16,
        bottom: MediaQuery.of(context).viewInsets.bottom + 16,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(width: 44, height: 5, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(12))),
          const SizedBox(height: 14),
          const Text('Лимит по категории', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600)),
          const SizedBox(height: 14),
          TextField(
            controller: _catCtrl,
            decoration: const InputDecoration(labelText: 'Категория'),
          ),
          const SizedBox(height: 10),
          TextField(
            controller: _limitCtrl,
            decoration: const InputDecoration(labelText: 'Лимит, ₸'),
            keyboardType: TextInputType.number,
          ),
          const SizedBox(height: 18),
          ElevatedButton(
            onPressed: () {
              final cat = _catCtrl.text.trim();
              final limit = double.tryParse(_limitCtrl.text) ?? 0;
              if (cat.isEmpty) return;
              ref.read(budgetLimitsProvider.notifier).setLimit(cat, limit);
              Navigator.pop(context);
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.deepPurpleAccent,
              minimumSize: const Size(double.infinity, 50),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
            ),
            child: const Text('Сохранить'),
          ),
        ],
      ),
    );
  }
}
