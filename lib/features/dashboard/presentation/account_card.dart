import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:erkindik/features/expenses/provider/expenses_provider.dart';
import '../../../../data/models/account.dart';
import '../../../../data/models/transaction.dart';

class AccountCard extends ConsumerWidget {
  final String name;
  final String id;
  final double balance;

  const AccountCard({
    super.key,
    required this.name,
    required this.id,
    required this.balance,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final transactions = ref.watch(expensesProvider)
        .where((tx) => tx.accountId == id)
        .toList();

    return Container(
      margin: const EdgeInsets.only(bottom: 18),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: const Color(0xFF151518),
        borderRadius: BorderRadius.circular(14),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Название и баланс
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(name, style: const TextStyle(fontSize: 16)),
              Text(
                "₸${balance.toStringAsFixed(0)}",
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: balance >= 0 ? Colors.greenAccent : Colors.redAccent,
                ),
              ),
            ],
          ),

          const SizedBox(height: 12),

          if (transactions.isEmpty)
            Text("Нет операций",
                style: TextStyle(color: Colors.white.withOpacity(0.4))),

          for (final tx in transactions.reversed.take(5)) ...[
            const SizedBox(height: 8),
            _TransactionItem(tx: tx),
          ],
        ],
      ),
    );
  }
}

class _TransactionItem extends StatelessWidget {
  final TransactionModel tx;
  const _TransactionItem({required this.tx});

  @override
  Widget build(BuildContext context) {
    final isIncome = tx.isIncome;
    final color = isIncome ? Colors.greenAccent : Colors.redAccent;
    final sign = isIncome ? "+" : "-";

    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(
          isIncome
              ? (tx.note?.isNotEmpty == true ? tx.note! : "Доход")
              : (tx.category ?? "—"),
          style: const TextStyle(fontSize: 14),
        ),
        Text(
          "$sign₸${tx.amount.toStringAsFixed(0)}",
          style: TextStyle(color: color, fontWeight: FontWeight.w600),
        ),
      ],
    );
  }
}
