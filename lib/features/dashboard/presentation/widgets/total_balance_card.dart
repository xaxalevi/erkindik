import 'package:flutter/material.dart';

class TotalBalanceCard extends StatelessWidget {
  final double total;
  final double income;
  final double expense;

  const TotalBalanceCard({
    super.key,
    required this.total,
    required this.income,
    required this.expense,
  });

  @override
  Widget build(BuildContext context) {
    final trend = income - expense;
    final trendColor = trend > 0
        ? Colors.greenAccent
        : trend < 0
            ? Colors.redAccent
            : Colors.grey;

    final trendSign = trend > 0 ? "↑" : trend < 0 ? "↓" : "•";

    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        gradient: const LinearGradient(
          colors: [Color(0xFF2A2A3A), Color(0xFF1B1B25)],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
      ),
      child: Column(
        children: [
          Text(
            "Всего средств",
            style: TextStyle(
              color: Colors.white.withOpacity(0.6),
              fontSize: 14,
            ),
          ),
          const SizedBox(height: 8),
          Text(
            "₸ ${total.toStringAsFixed(0)}",
            textAlign: TextAlign.center,
            style: const TextStyle(
              fontSize: 36,
              fontWeight: FontWeight.bold,
              color: Colors.white,
            ),
          ),
          const SizedBox(height: 6),
          Text(
            "$trendSign ${trend.abs().toStringAsFixed(0)}",
            style: TextStyle(
              color: trendColor,
              fontSize: 16,
              fontWeight: FontWeight.w600,
            ),
          ),
          const SizedBox(height: 12),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              _smallStat("Доходы", income, Colors.greenAccent),
              _smallStat("Расходы", expense, Colors.redAccent),
            ],
          ),
        ],
      ),
    );
  }

  Widget _smallStat(String label, double amount, Color color) {
    return Column(
      children: [
        Text(label, style: TextStyle(color: Colors.white.withOpacity(0.7))),
        const SizedBox(height: 4),
        Text(
          "₸ ${amount.toStringAsFixed(0)}",
          style: TextStyle(
            color: color,
            fontWeight: FontWeight.w600,
            fontSize: 16,
          ),
        )
      ],
    );
  }
}
