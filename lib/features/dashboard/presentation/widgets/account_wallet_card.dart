import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../../data/models/account.dart';
import '../../../expenses/provider/expenses_provider.dart';

class AccountWalletCard extends ConsumerWidget {
  final AccountModel account;
  final VoidCallback onTap;

  const AccountWalletCard({
    super.key,
    required this.account,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final transactions = ref.watch(expensesProvider)
        .where((tx) => tx.accountId == account.id)
        .toList()
        .reversed
        .take(4) // Покажем только последние 4
        .toList();

    return Container(
      margin: const EdgeInsets.symmetric(vertical: 12),
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [
            Color(0xFF2A2A52),
            Color(0xFF181830),
          ],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        borderRadius: BorderRadius.circular(18),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.4),
            blurRadius: 12,
            offset: const Offset(0, 6),
          ),
        ],
      ),

      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Название счёта
          Text(account.name,
              style: const TextStyle(fontSize: 16, color: Colors.white70)),

          const SizedBox(height: 6),

          // Баланс
          Text(
            "₸ ${account.balance.toStringAsFixed(0)}",
            style: const TextStyle(
              fontSize: 26,
              fontWeight: FontWeight.bold,
              color: Colors.white,
            ),
          ),

          const SizedBox(height: 12),

          // Транзакции
          for (final tx in transactions) ...[
            Row(
              children: [
                Icon(
                  tx.isIncome ? Icons.add_circle : Icons.remove_circle,
                  color: tx.isIncome ? Colors.greenAccent : Colors.redAccent,
                  size: 18,
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: Text(
                    tx.isIncome
                        ? (tx.note?.isNotEmpty == true ? tx.note! : "Доход")
                        : (tx.category ?? "—"),
                    style: TextStyle(color: Colors.white.withOpacity(0.85)),
                  ),
                ),
                Text(
                  "${tx.isIncome ? '+' : '-'}₸${tx.amount.toStringAsFixed(0)}",
                  style: TextStyle(
                    color:
                        tx.isIncome ? Colors.greenAccent : Colors.redAccent,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 6),
          ],

          if (transactions.isEmpty)
            Text("Нет транзакций",
                style: TextStyle(color: Colors.white.withOpacity(0.4))),
        ],
      ),
    );
  }
}
