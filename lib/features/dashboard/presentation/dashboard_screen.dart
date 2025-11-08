import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../provider/dashboard_provider.dart';
import '../../expenses/provider/expenses_provider.dart';

import 'widgets/total_balance_card.dart';
import 'widgets/transaction_list.dart';
import 'account_card.dart';
import 'add_account_sheet.dart';
import 'package:erkindik/features/expenses/provider/expenses_provider.dart';
import 'widgets/account_wallet_card.dart';
import 'account_details_screen.dart';



class DashboardScreen extends ConsumerWidget {
  const DashboardScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final totalBalance = ref.watch(totalBalanceProvider);
    final accounts = ref.watch(accountsProvider);
    final transactions = ref.watch(expensesProvider);

    // ✅ реальные показатели
final income = transactions
    .where((tx) => tx.isIncome)
    .fold(0.0, (sum, tx) => sum + tx.amount);

final expense = transactions
    .where((tx) => !tx.isIncome)
    .fold(0.0, (sum, tx) => sum + tx.amount);


    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Dashboard",
          style: TextStyle(fontWeight: FontWeight.w600),
        ),
        centerTitle: true,
        backgroundColor: Colors.transparent,
        elevation: 0,
      ),

      // ✅ FAB: добавить счёт
      floatingActionButton: FloatingActionButton(
        backgroundColor: Colors.deepPurpleAccent,
        onPressed: () {
          showModalBottomSheet(
            context: context,
            isScrollControlled: true,
            backgroundColor: const Color(0xFF121214),
            shape: const RoundedRectangleBorder(
              borderRadius: BorderRadius.vertical(top: Radius.circular(22)),
            ),
            builder: (context) => const AddAccountSheet(),
          );
        },
        child: const Icon(Icons.add),
      ),

      body: Padding(
        padding: const EdgeInsets.all(16),
        child: ListView(
          children: [
            // ✅ Общий баланс
            TotalBalanceCard(
              total: totalBalance,
              income: income,
              expense: expense,
            ),

            const SizedBox(height: 20),

            // ✅ Блок транзакций
            

            const SizedBox(height: 26),

            // ✅ Заголовок "Счета"
            Text(
              "Счета",
              style: TextStyle(
                fontSize: 17,
                color: Colors.white.withOpacity(0.9),
                fontWeight: FontWeight.w600,
              ),
            ),
            const SizedBox(height: 10),

            // ✅ Динамические счета
            if (accounts.isEmpty)
              Padding(
                padding: const EdgeInsets.only(top: 40),
                child: Text(
                  "Счета пока не добавлены",
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.white.withOpacity(0.6)),
                ),
              ),

          // ↓ Вместо старых AccountCard

for (var acc in accounts)
  AccountWalletCard(
    account: acc,
    onTap: () {
      Navigator.push(
        context,
        MaterialPageRoute(
          builder: (_) => AccountDetailsScreen(account: acc),
        ),
      );
    },
  ),

          ],
        ),
      ),
    );
  }
}
