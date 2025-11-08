import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../data/models/account.dart';
import '../../expenses/provider/expenses_provider.dart';
import '../../../data/models/account.dart'; // убедись, что импорт есть


class AccountsNotifier extends StateNotifier<List<AccountModel>> {
  AccountsNotifier() : super([]);

  void addAccount(AccountModel account) {
    state = [...state, account];
  }

  void updateBalance(String id, double newBalance) {
    state = [
      for (final acc in state)
        if (acc.id == id) acc.copyWith(balance: newBalance) else acc
    ];
  }
  void updateAccountBalance(String id, double change) {
  state = [
    for (final acc in state)
      if (acc.id == id)
        acc.copyWith(balance: acc.balance + change)
      else
        acc
  ];
}

}


final accountsProvider = StateNotifierProvider<AccountsNotifier, List<AccountModel>>((ref) {
  return AccountsNotifier();
});

// общий баланс
final totalBalanceProvider = Provider<double>((ref) {
  final accounts = ref.watch(accountsProvider);
  return accounts.fold(0, (sum, acc) => sum + acc.balance);
});

