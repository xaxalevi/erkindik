import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../data/models/transaction.dart';
import '../../dashboard/provider/dashboard_provider.dart';
import '../provider/expenses_provider.dart';

class AddExpenseSheet extends ConsumerStatefulWidget {
  const AddExpenseSheet({super.key});

  @override
  ConsumerState createState() => _AddExpenseSheetState();
}

class _AddExpenseSheetState extends ConsumerState<AddExpenseSheet> {
  final _amountCtrl = TextEditingController();
  final _noteCtrl = TextEditingController();

  String? selectedAccountId;
  String selectedCategory = 'Еда';
  bool isIncome = false;

  @override
  Widget build(BuildContext context) {
    final accounts = ref.watch(accountsProvider);

    return Padding(
      padding: EdgeInsets.only(
        left: 16,
        right: 16,
        bottom: MediaQuery.of(context).viewInsets.bottom + 20,
        top: 22,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Center(
            child: Container(
              width: 42,
              height: 4,
              decoration: BoxDecoration(
                color: Colors.white.withOpacity(0.25),
                borderRadius: BorderRadius.circular(20),
              ),
            ),
          ),
          const SizedBox(height: 20),

          const Text("Добавить операцию", style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
          const SizedBox(height: 18),

          TextField(
            controller: _amountCtrl,
            keyboardType: TextInputType.number,
            decoration: const InputDecoration(labelText: "Сумма"),
          ),

          const SizedBox(height: 16),

          DropdownButton<String>(
            value: selectedAccountId,
            hint: const Text("Выберите счёт"),
            isExpanded: true,
            items: accounts.map((acc) {
              return DropdownMenuItem(
                value: acc.id,
                child: Text(acc.name),
              );
            }).toList(),
            onChanged: (v) => setState(() => selectedAccountId = v),
          ),

          const SizedBox(height: 16),

          // Категория отображается только если это расход
          if (!isIncome)
            DropdownButton<String>(
              value: selectedCategory,
              isExpanded: true,
              items: ["Еда", "Транспорт", "Аренда", "Кафе", "Покупки"].map(
                (e) => DropdownMenuItem(value: e, child: Text(e)),
              ).toList(),
              onChanged: (v) => setState(() => selectedCategory = v!),
            ),

          const SizedBox(height: 16),

          TextField(
            controller: _noteCtrl,
            decoration: const InputDecoration(labelText: "Комментарий (необязательно)"),
          ),

          const SizedBox(height: 16),

          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text("Доход", style: TextStyle(fontSize: 15)),
              Switch(
                value: isIncome,
                activeColor: Colors.greenAccent,
                onChanged: (v) => setState(() => isIncome = v),
              ),
            ],
          ),

          const SizedBox(height: 22),

          ElevatedButton(
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.deepPurpleAccent,
              minimumSize: const Size(double.infinity, 50),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
            ),
            onPressed: () {
              final amount = double.tryParse(_amountCtrl.text) ?? 0;
              if (amount <= 0 || selectedAccountId == null) return;

              final tx = TransactionModel(
                id: DateTime.now().microsecondsSinceEpoch.toString(),
                accountId: selectedAccountId!,
                amount: amount,
                date: DateTime.now(),
                isIncome: isIncome,
                category: isIncome ? null : selectedCategory,
                note: _noteCtrl.text.trim().isEmpty ? null : _noteCtrl.text.trim(),
              );

ref.read(expensesProvider.notifier).addTransaction(tx);
              Navigator.pop(context);
            },
            child: const Text("Сохранить", style: TextStyle(fontSize: 16)),
          ),
        ],
      ),
    );
  }
}
