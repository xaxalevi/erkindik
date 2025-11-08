import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../data/models/transaction.dart';
import '../../dashboard/provider/dashboard_provider.dart';

final expensesProvider = StateNotifierProvider<ExpensesNotifier, List<TransactionModel>>((ref) {
  return ExpensesNotifier(ref);
});

class ExpensesNotifier extends StateNotifier<List<TransactionModel>> {
  final Ref ref;
  ExpensesNotifier(this.ref) : super([]);

  void addTransaction(TransactionModel tx) {
    // 1) Добавляем транзакцию
    state = [...state, tx];

    // 2) Находим счёт
    final accounts = ref.read(accountsProvider.notifier);

    if (tx.isIncome) {
      accounts.updateAccountBalance(tx.accountId, tx.amount); // доход → прибавляем
    } else {
      accounts.updateAccountBalance(tx.accountId, -tx.amount); // расход → вычитаем
    }
  }
}
