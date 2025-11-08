import 'package:flutter_riverpod/flutter_riverpod.dart';

/// Ключ = category, значение = лимит по категории (в тенге)
class BudgetLimitsNotifier extends StateNotifier<Map<String, double>> {
  BudgetLimitsNotifier() : super({});

  void setLimit(String category, double amount) {
    if (amount <= 0) {
      state = {...state}..remove(category);
    } else {
      state = {...state, category: amount};
    }
  }

  void removeLimit(String category) {
    state = {...state}..remove(category);
  }
}

final budgetLimitsProvider =
    StateNotifierProvider<BudgetLimitsNotifier, Map<String, double>>(
  (ref) => BudgetLimitsNotifier(),
);
