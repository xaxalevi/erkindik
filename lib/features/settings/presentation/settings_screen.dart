import 'package:flutter/material.dart';

class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  bool _darkTheme = true;
  bool _notifications = true;
  bool _biometrics = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Settings'),
        centerTitle: true,
        backgroundColor: Colors.transparent,
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          _Section(
            title: 'Account',
            children: [
              _Tile(
                icon: Icons.send_rounded,
                title: 'Connect Telegram',
                subtitle: 'Получайте уведомления о транзакциях',
                trailing: ElevatedButton(
                  onPressed: () {}, // заглушка
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.deepPurpleAccent,
                    padding:
                        const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                  ),
                  child: const Text('Connect'),
                ),
              ),
              _Tile(
                icon: Icons.language_rounded,
                title: 'Language',
                subtitle: 'Русский',
                onTap: () {}, // заглушка
              ),
            ],
          ),

          const SizedBox(height: 12),

          _Section(
            title: 'Preferences',
            children: [
              SwitchListTile.adaptive(
                value: _darkTheme,
                onChanged: (v) => setState(() => _darkTheme = v),
                title: const Text('Тёмная тема'),
                secondary: const Icon(Icons.dark_mode_rounded),
              ),
              SwitchListTile.adaptive(
                value: _notifications,
                onChanged: (v) => setState(() => _notifications = v),
                title: const Text('Уведомления'),
                secondary: const Icon(Icons.notifications_active_rounded),
              ),
              SwitchListTile.adaptive(
                value: _biometrics,
                onChanged: (v) => setState(() => _biometrics = v),
                title: const Text('Авторизация по биометрии'),
                secondary: const Icon(Icons.fingerprint_rounded),
              ),
            ],
          ),

          const SizedBox(height: 12),

          _Section(
            title: 'About',
            children: const [
              _Tile(
                icon: Icons.verified_rounded,
                title: 'Версия',
                subtitle: '1.0.0',
              ),
              _Tile(
                icon: Icons.description_rounded,
                title: 'Пользовательское соглашение',
              ),
              _Tile(
                icon: Icons.privacy_tip_rounded,
                title: 'Политика конфиденциальности',
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _Section extends StatelessWidget {
  final String title;
  final List<Widget> children;
  const _Section({required this.title, required this.children});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFF151518),
        borderRadius: BorderRadius.circular(16),
      ),
      child: Column(
        children: [
          Padding(
            padding:
                const EdgeInsets.symmetric(horizontal: 16).copyWith(top: 14),
            child: Row(
              children: [
                Text(
                  title,
                  style: TextStyle(
                    color: Colors.white.withOpacity(0.8),
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 8),
          ...children,
          const SizedBox(height: 8),
        ],
      ),
    );
  }
}

class _Tile extends StatelessWidget {
  final IconData icon;
  final String title;
  final String? subtitle;
  final Widget? trailing;
  final VoidCallback? onTap;
  const _Tile({
    required this.icon,
    required this.title,
    this.subtitle,
    this.trailing,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final tile = ListTile(
      leading: Container(
        width: 40,
        height: 40,
        decoration: BoxDecoration(
          color: Colors.white.withOpacity(0.08),
          borderRadius: BorderRadius.circular(12),
        ),
        child: Icon(icon),
      ),
      title: Text(title),
      subtitle:
          subtitle != null ? Text(subtitle!, style: const TextStyle()) : null,
      trailing: trailing ?? const Icon(Icons.chevron_right_rounded),
      onTap: onTap,
    );

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 6),
      child: tile,
    );
  }
}
