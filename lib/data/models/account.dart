class AccountModel {
  final String id;
  final String name;
  final double balance;

  AccountModel({
    required this.id,
    required this.name,
    required this.balance,
  });

  AccountModel copyWith({
    String? id,
    String? name,
    double? balance,
  }) {
    return AccountModel(
      id: id ?? this.id,
      name: name ?? this.name,
      balance: balance ?? this.balance,
    );
  }
}
