import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../data/models/account.dart';
import '../provider/dashboard_provider.dart';

class AddAccountSheet extends ConsumerStatefulWidget {
  const AddAccountSheet({super.key});

  @override
  ConsumerState createState() => _AddAccountSheetState();
}

class _AddAccountSheetState extends ConsumerState<AddAccountSheet> {
  final _nameCtrl = TextEditingController();
  final _balanceCtrl = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(
        left: 16,
        right: 16,
        bottom: MediaQuery.of(context).viewInsets.bottom + 20,
        top: 22,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          const Text(
            "Добавить счёт",
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
          ),

          const SizedBox(height: 18),

          TextField(
            controller: _nameCtrl,
            decoration: const InputDecoration(labelText: "Название счёта"),
          ),

          const SizedBox(height: 14),

          TextField(
            controller: _balanceCtrl,
            keyboardType: TextInputType.number,
            decoration: const InputDecoration(labelText: "Начальный баланс"),
          ),

          const SizedBox(height: 26),

          ElevatedButton(
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.deepPurpleAccent,
              minimumSize: const Size(double.infinity, 50),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
            ),
            onPressed: () {
              final account = AccountModel(
                id: DateTime.now().millisecondsSinceEpoch.toString(),
                name: _nameCtrl.text.trim(),
                balance: double.tryParse(_balanceCtrl.text) ?? 0,
              );

              ref.read(accountsProvider.notifier).addAccount(account);
              Navigator.pop(context);
            },
            child: const Text("Создать", style: TextStyle(fontSize: 16)),
          ),
        ],
      ),
    );
  }
}
