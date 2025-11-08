import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../expenses/provider/expenses_provider.dart';
import '../../../../data/models/transaction.dart';

class TransactionListSection extends ConsumerWidget {
  const TransactionListSection({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final transactions = ref.watch(expensesProvider);

    if (transactions.isEmpty) {
      return Padding(
        padding: const EdgeInsets.only(top: 32),
        child: Text(
          "Пока нет транзакций",
          textAlign: TextAlign.center,
          style: TextStyle(color: Colors.white.withOpacity(0.6)),
        ),
      );
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const SizedBox(height: 28),
        const Text(
          "Последние операции",
          style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
        ),
        const SizedBox(height: 12),

        for (final tx in transactions.reversed)
          _TransactionTile(tx: tx),
      ],
    );
  }
}

class _TransactionTile extends ConsumerWidget {
  final TransactionModel tx;
  const _TransactionTile({required this.tx});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final color = tx.isIncome ? Colors.greenAccent : Colors.redAccent;
    final sign = tx.isIncome ? "+" : "-";
    final icon = tx.isIncome ? Icons.add_circle : Icons.remove_circle;

    // ✅ Текст заголовка
    final titleText = tx.isIncome
        ? (tx.note?.isNotEmpty == true ? tx.note! : "Доход")
        : (tx.category ?? "Расход");

    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Row(
        children: [
          Container(
            width: 38,
            height: 38,
            decoration: BoxDecoration(
              color: color.withOpacity(0.15),
              shape: BoxShape.circle,
            ),
            alignment: Alignment.center,
            child: Icon(icon, color: color, size: 22),
          ),

          const SizedBox(width: 12),

          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  titleText,
                  style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w600),
                ),
                if (!tx.isIncome && tx.note?.isNotEmpty == true)
                  Text(
                    tx.note!,
                    style: TextStyle(fontSize: 12, color: Colors.white.withOpacity(0.6)),
                  ),
              ],
            ),
          ),

          Text(
            "$sign₸${tx.amount.toStringAsFixed(0)}",
            style: TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: color),
          ),
        ],
      ),
    );
  }
}
