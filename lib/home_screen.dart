import 'package:flutter/material.dart';
import 'package:phosphor_flutter/phosphor_flutter.dart';

import 'features/dashboard/presentation/dashboard_screen.dart';
import 'features/expenses/presentation/expenses_screen.dart';
import 'features/budget/presentation/budget_screen.dart';
import 'features/settings/presentation/settings_screen.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int index = 0;

  final screens = const [
    DashboardScreen(),
    ExpensesScreen(),
    BudgetScreen(),
    SettingsScreen(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: screens[index],

      bottomNavigationBar: NavigationBar(
        height: 70,
        backgroundColor: const Color(0xFF0D0D0F),
        indicatorColor: Colors.deepPurpleAccent,
        selectedIndex: index,
        onDestinationSelected: (i) => setState(() => index = i),
        destinations: [
          NavigationDestination(
            icon: Icon(PhosphorIcons.gridFour()),
            label: "Dashboard",
          ),
          NavigationDestination(
            icon: Icon(PhosphorIcons.list()),
            label: "Expenses",
          ),
          NavigationDestination(
            icon: Icon(PhosphorIcons.chartPie()),
            label: "Budget",
          ),
          NavigationDestination(
            icon: Icon(PhosphorIcons.gearSix()),
            label: "Settings",
          ),
        ],
      ),
    );
  }
}
