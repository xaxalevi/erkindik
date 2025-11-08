class TransactionModel {
  final String id;
  final String accountId;
  final String? category;     // может быть null для дохода
  final double amount;
  final DateTime date;
  final bool isIncome;
  final String? note;         // ✅ добавили

  const TransactionModel({
    required this.id,
    required this.accountId,
    required this.amount,
    required this.date,
    required this.isIncome,
    this.category,
    this.note,                // ✅ добавили
  });

  TransactionModel copyWith({
    String? id,
    String? accountId,
    String? category,
    double? amount,
    DateTime? date,
    bool? isIncome,
    String? note,             // ✅ добавили
  }) {
    return TransactionModel(
      id: id ?? this.id,
      accountId: accountId ?? this.accountId,
      category: category ?? this.category,
      amount: amount ?? this.amount,
      date: date ?? this.date,
      isIncome: isIncome ?? this.isIncome,
      note: note ?? this.note, // ✅ добавили
    );
  }
}
