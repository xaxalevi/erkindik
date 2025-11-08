import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../expenses/provider/expenses_provider.dart';
import '../../../data/models/account.dart';

class AccountDetailsScreen extends ConsumerWidget {
  final AccountModel account;
  const AccountDetailsScreen({super.key, required this.account});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final transactions = ref.watch(expensesProvider)
        .where((tx) => tx.accountId == account.id)
        .toList()
        .reversed
        .toList();

    return Scaffold(
      appBar: AppBar(
        title: Text(account.name),
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: transactions.length,
        itemBuilder: (_, i) {
          final tx = transactions[i];
          final color = tx.isIncome ? Colors.greenAccent : Colors.redAccent;
          final sign = tx.isIncome ? "+" : "-";

          return ListTile(
            title: Text(tx.isIncome ? "Доход" : tx.category ?? "—"),
            subtitle: tx.note != null ? Text(tx.note!) : null,
            trailing: Text(
              "$sign₸${tx.amount.toStringAsFixed(0)}",
              style: TextStyle(color: color, fontWeight: FontWeight.w600),
            ),
          );
        },
      ),
    );
  }
}
