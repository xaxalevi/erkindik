'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".dart_tool/dartpad/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/flutter_build/fbe145716b6d3ebe7d069631db503ea8/app.dill": "ded85fe0abec58dca70be0217772d76d",
".dart_tool/flutter_build/fbe145716b6d3ebe7d069631db503ea8/app.dill.deps": "d9e99902cb670b840f4528346f3a9afb",
".dart_tool/flutter_build/fbe145716b6d3ebe7d069631db503ea8/dart2js.d": "5999478de2866b5da9e488af2afd8bea",
".dart_tool/flutter_build/fbe145716b6d3ebe7d069631db503ea8/dart2js.stamp": "f52de00368e2ead7841f7946cf1fa93f",
".dart_tool/flutter_build/fbe145716b6d3ebe7d069631db503ea8/dart2wasm.stamp": "586f6c6512a5091fff7ec2db8f108083",
".dart_tool/flutter_build/fbe145716b6d3ebe7d069631db503ea8/flutter_assets.d": "2f4a764cbb472d74bf5c69fcc106038e",
".dart_tool/flutter_build/fbe145716b6d3ebe7d069631db503ea8/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/fbe145716b6d3ebe7d069631db503ea8/main.dart": "deb872c31e219fb6cfad387242707ce6",
".dart_tool/flutter_build/fbe145716b6d3ebe7d069631db503ea8/main.dart.js": "a8be425a0303fee7cd0145665d67be9f",
".dart_tool/flutter_build/fbe145716b6d3ebe7d069631db503ea8/main.dart.js.deps": "c734188cc3ba1f1a4d464a83cecb1592",
".dart_tool/flutter_build/fbe145716b6d3ebe7d069631db503ea8/outputs.json": "895c0d919c01b0840077456722c463c7",
".dart_tool/flutter_build/fbe145716b6d3ebe7d069631db503ea8/service_worker.d": "9157a14ab0fd23ee668a7ecbd16f81bd",
".dart_tool/flutter_build/fbe145716b6d3ebe7d069631db503ea8/web_entrypoint.stamp": "b578b573a65c9e422e4b604a9144c6ec",
".dart_tool/flutter_build/fbe145716b6d3ebe7d069631db503ea8/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/flutter_build/fbe145716b6d3ebe7d069631db503ea8/web_release_bundle.stamp": "cc4211e82707742ab580e50061d321e6",
".dart_tool/flutter_build/fbe145716b6d3ebe7d069631db503ea8/web_resources.d": "f22d65b96a1bf2c353180158ebdc4806",
".dart_tool/flutter_build/fbe145716b6d3ebe7d069631db503ea8/web_service_worker.stamp": "c29c414ae067c2fd9b8634cfa532db83",
".dart_tool/flutter_build/fbe145716b6d3ebe7d069631db503ea8/web_static_assets.stamp": "4ed86af8e0c8a7ccf701df60a4f6c185",
".dart_tool/flutter_build/fbe145716b6d3ebe7d069631db503ea8/web_templated_files.stamp": "adc23fce43d325f146e0ebf75da3e04c",
".dart_tool/package_config.json": "9b78601554a943c39ef9cb2962cf44c0",
".dart_tool/package_graph.json": "073e7aa0ef4f25f5952e385f54338363",
".dart_tool/version": "d58b92224d70d37ccb1619380822a339",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "b57714001fe78b6fed5b68dfe8cb752e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cb762b29f578e86d9ff06d61c45acf08",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "27e542355321fd7a73d799d9c48c78bb",
".git/logs/refs/heads/main": "7aa2d55fd6cd8ec54acd6eee6f1e479e",
".git/logs/refs/remotes/origin/main": "c1109e2cfd15ba859b329c602213fd6a",
".git/objects/00/2a11cb4ac555266ad8bbbbc0e3d74ca480e55c": "e0aab0852b296581fb54abe759706117",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/03/b7c93ecb9257a748eb62ae8cea2d5c6ed86dd1": "7e5e3f5e715c2fa08336e6f4a26c4a3b",
".git/objects/03/bc810b69f2434f812109040a7baed42f4a0a1d": "70e7ecb116adb4290babf1547db3f53b",
".git/objects/04/23aba54b59ebdae6c0c67c0556861587e7b7a6": "4072e5b7e906f3fd855a28a3760d0c4c",
".git/objects/04/67bf12aa4d28f374bb26596605a46dcbb3e7c8": "49dba9cdefacac2602a7af98a656e661",
".git/objects/05/4723806a153c6c8894ea6021d9ec13150c7e3b": "6261ead23eff5e957c5b5fabc034802e",
".git/objects/06/952be745f9fa6fa75196e830d9578eb2ee631d": "cb6848767aab99a89a4ec04efbc00625",
".git/objects/07/b0a0e038f6ef4805011880009f8d0c2f412383": "260b6f3ce29c36f4d8a12084851fae01",
".git/objects/09/88e65c4035c7d73815911264fe285cb0826be1": "54df0ae7375e4d9709064e358fc725e1",
".git/objects/09/d4391482be68e9e4a07fab769b5de337d16eb1": "a603712ac5534497bc4fd35ebd46b0b7",
".git/objects/0a/3f5fa40fb3d1e0710331a48de5d256da3f275d": "15924b1217c401aba33f13069f7d81d5",
".git/objects/0b/edcf2fd46788ae3a01a423467513ff59b5c120": "23a6b285e31cde5ab29a2fc1ebfdb935",
".git/objects/0d/2902135caece481a035652d88970c80e29cc7e": "dfc8c4c4b7d0a1b6dbadc04d9fa6e6f1",
".git/objects/0e/c303439225b78712f49115768196d8d76f6790": "383f775ddf0900dd9fe74e867c012ba4",
".git/objects/11/607366585015d5c07675a19b0590fd6bd42281": "900eac32c8e2edce53405ea087014c4a",
".git/objects/13/b35eba55c6dabc3aac36f33d859266c18fa0d0": "ccb5b80ef3b4fb1030a8a4f520f3f5e8",
".git/objects/13/ff3eb160148ca308ac0d08e0212117c20dbea6": "05cc60f86b6368e9795e25669ae1416e",
".git/objects/14/8da3098986ea6c098d5a7b1f8e9cbf6b427b56": "9bfb32c54891d8b9226a37dddd010698",
".git/objects/15/3653e8d67f81b901d28257a65908f3278e058d": "753c81a6f016d29eb4605decbac41935",
".git/objects/17/6a0a515ba071a0403b6f447860ab738bf24050": "491fa72e074bf6dc4147a92d4025d89f",
".git/objects/17/7923464c04b34cb276e8d562ab4b532c6de7ab": "8f4e75ab926efd0b4c5450bd21eb3b14",
".git/objects/17/987b79bb8a35cc66c3c1fd44f5a5526c1b78be": "f47de426b1d6c272d2659c734c9de80f",
".git/objects/17/e9516a74074fad22bac3e52e39131886697622": "2cccf0b2cd7b787a1f969f9552b76de3",
".git/objects/18/d981003d68d0546c4804ac2ff47dd97c6e7921": "318597cf2655c5770342bae4ab7b90a3",
".git/objects/1b/6050e80e4559ee5984ff0ba7a367d040d0b72c": "1e7b74fca53606e10efdfa6ecae3f3de",
".git/objects/1c/4cfdd96a89b0095dbd29a6ca194e41ad77b4fd": "941033f2f51333a5217c535046bbd8e2",
".git/objects/1d/526a16ed0f1cd0c2409d848bf489b93fefa3b2": "12bcdfd9683b55567627456d0773a4e5",
".git/objects/1d/c6cf7652bad3d20b93a4d3e324c3d5dada2345": "4f6b6a82ff923975ff5de1c5707fcae5",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/c4462b79288fe10768cc571a36732ce5726025": "3e3cf5fc8864e978934ad77759390731",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2e/1de87a7eb61e17463f7406106f6c413533cecf": "f4970286a19c04f87217910d26430ddf",
".git/objects/2f/1632cfddf3d9dade342351e627a0a75609fb46": "eebc09df6f2f2370e95a1eb0bc1fb2c5",
".git/objects/30/4732f8842013497e14bd02f67a55f2614fb8f7": "76eb293b5c9304707852ee681a90e8fc",
".git/objects/30/8a2a560b42f17aaf3c36e4e9c8cd07182fbb7e": "bc183808cfc617fa9474743616eb4aee",
".git/objects/31/d146fab25b91bf069696c06a95f2abadf66d19": "4066ceb6a34079ac15069534250eb336",
".git/objects/32/1773cd857a8a0f0c9c7d3dc3f5ff4fb298dc10": "aa6f1636c8ce237c3c416d222abf03da",
".git/objects/32/6c0e72c9d820600887813b3b98d0dd69c5d4e8": "3030e2c76fcd41356672eee54ca3bd94",
".git/objects/34/7139c48727d4f32a2b9bac862fb4793356cc63": "f12c4e44afc2ef65f4df0d401fdf25b5",
".git/objects/36/b0fd9464f45b33f482e64bea579787e142affa": "9d308f3efbc512e2b01277fb7565acef",
".git/objects/36/cbce676bcfbddfa689b9d0abf23ac40fd2e60b": "8c963983d40f36e775abdac45c7810e0",
".git/objects/38/20a95c65c3e5983cc66d481e2e68706a750090": "75ff997c33a1c519a1a869376af24550",
".git/objects/38/79d54755798567f0f318d63340508d5668eb96": "cfe50cd405acbf1c250baa58cfe6b9ed",
".git/objects/38/a0aad2de777bc1404b6e1b3a305f50f84f628c": "b11cf852a5cbed9b252d6035da4dfab5",
".git/objects/39/4917c053a04daa76d8b94f0a02db0bd99e1034": "bbdd537b090d83597a791f77deacff5c",
".git/objects/39/9f6981d5d35475eb18e6068ae67cdd7c731978": "d78434eb583745d7bf880eb7c4b9f3e2",
".git/objects/3a/0b46511a71b464dac72d693faae6ea0f7e3b2e": "351d4fd0e3a9a4bc304d0a579290669b",
".git/objects/3a/d2b9332a8706632d0e88062ee838bb3987afb4": "2359fd1f2745143002f59829ee698541",
".git/objects/3a/f93b882364ddc13fefa4826038d2c851bf5ea1": "e87d124937e3bd3d761e6be5e6312868",
".git/objects/3c/c05eb23491684aae1c51ce94668a142bad5125": "d7b0579a2c9bbcd5f15d386f2b10ecbd",
".git/objects/3d/a32cfdd002ffc496bc4bb7e6fe30c6802839a7": "7a9c28f0c34456fd86b7bae1fcd29686",
".git/objects/3d/f3d1a91dec9f419bbf32c7dbd7ffe3049577b7": "2da7aed2720fec500109845fe6130ee3",
".git/objects/41/dffd916c819ce639f0636e55bb4082214acca3": "34adfc33311d3bfdfe5547bb15f7b79f",
".git/objects/42/bcbf4780b187e80025b7917058bcb882012aa1": "d13c60a94845ee93e5124ec90980bb48",
".git/objects/43/2c3ebea02dbf202395ee7cb975e30abcfaa2f2": "d4722caa4462c6397bc480ba7d45bbdd",
".git/objects/46/b726bd53d47e61ba941eb355b9c8633ebbaa20": "480b1cf7af4c452e5722818c06aca052",
".git/objects/47/5a0a701918c55f4eb8d0292bdfd0ca6f1df93e": "ffa0b1a822b402057141fcb3d24d85b7",
".git/objects/47/89daa6a443eefa7f3f729164a18351e06e9800": "3c2dcd6a17cdfc0957293d41ef712d24",
".git/objects/47/af9f1eec692caa3a630c5053af817335492498": "fd7cbe8ed4458e333cdb993120fa1a3b",
".git/objects/48/20298b504b79786b523aadcba60deb5ae2c6a1": "b9537459a4f9013cc57cbcbb068c33af",
".git/objects/49/142ddac27e6c76f029d29b8e1c26dbe73c8e5a": "1179bd5e66887af8d324a2e978e62a94",
".git/objects/4c/d7b0099ca80c806f8fe495613e8d6c69460d76": "171b7f459d8f957102dab0e55cc51039",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/2f463a9bc882b461c96aadf492d1729e49e725": "b4ba046789856764dffa013b321284b3",
".git/objects/51/58e5fd006b4bc8b6f7636e3cd1ef3d1411c2dc": "3396a01c4337162038dd957cad89473f",
".git/objects/51/90a0011ec14b7e947dffad667fd7436202d1f4": "714a6605fecaffe1adb7e05a8d2ea3bf",
".git/objects/54/b2abd8e80d356d4bb8012980dccae316a41992": "facd6e3ead265ffe65bd1f062142f04c",
".git/objects/59/2ceee85b89bd111b779db6116b130509ab6d4b": "348329ef452b809389b6496387db6913",
".git/objects/5a/88276a7b36980d2efa2689a410aebb67aa65b8": "3f57df6a0c0d74a105194c1575657bd0",
".git/objects/5f/e870d115e43af5dcd677e297becc97a9ca5bbb": "cf3d7c56e5a8fe55efdfe6172af28459",
".git/objects/60/608d0fe5bff3a7a7e05d5a232944a1a8effe5f": "e213f83927c2a4c19aa1b864a19eb852",
".git/objects/60/85a59aa2ee890c8941202e83d56dfdb4d75aa1": "e143bcc39fb429f15bc3db111203fc4f",
".git/objects/60/e389d03df863eca70d57c680662ee3a046d9ed": "2acfeccd3960bc518d261434c66c169a",
".git/objects/60/f4ecf4c4c2748d2f29fd4aabf4e44a746633c6": "e4549318dd1634bb1f85125912e7d82b",
".git/objects/61/f3bd1fc504c3b78271416d8cfd14faa1dae2b4": "dfaf637924edb3f7b2913e26f2a71152",
".git/objects/62/653f933f70e1612dd7067ef78b9b92da43e975": "8d032c203555a50ab625c114b0327671",
".git/objects/62/6664468b8914efda0addf1322b12b8c0071710": "7a5c26b39c23a8312a631dd693b7dbdc",
".git/objects/66/a65d1e4a79f230031ec0e0959a721039e7282f": "2a87e723b46c44522c16c0968efa0152",
".git/objects/68/f28c9ca80600eb5f9b9170ef53a1996d202969": "62727d7b44c0166ead9a51de38d62b74",
".git/objects/69/0dbba97f29a0d912cb5f24e1591c2883d489da": "efe79b3600ee5ddf8649e80f229a4f5a",
".git/objects/6c/8e736c9131cbed40246aad6c478f4be38fbd3f": "f2b1e79be5b3a72ec8b64640a7d3e089",
".git/objects/6d/a0652f05f28fc6950cec20ebdfbae89b665479": "fccd5f0f0fbfe5ead1a5622148fb8d74",
".git/objects/6e/7738df3c8bb12fd8284000b72acbded22e8b68": "940279bab1e49b9ca52c666b220c46a6",
".git/objects/6e/d2d933e1120817fe9182483a228007b18ab6ae": "e67768e46e6cb02c375dcbe6443df2e5",
".git/objects/6f/e4c243b4463622e535526bd4ebfcde52f9ecd4": "b338dc3c462b7e59b4a83f469a8a238d",
".git/objects/70/a7d44a1c3f8c2899534282783b5bbfd9af1647": "8e2febe8935f1aa153fd45f6c171198e",
".git/objects/72/1d2932e7995d31f71b1aac26503077659b1b50": "8c36ba932ece876d7852bfc716657e9f",
".git/objects/72/271d5e41701cfbffad74d38640bf9cc7c1f7be": "e07153a480d4e159b70f80851f6a553d",
".git/objects/73/53c41ecf9ca08017312dc233d9830079b50717": "32c4c29220bb05d460a969e7df99412c",
".git/objects/74/6adbb6b9e14b7e685c91e280a4d37a672afbd8": "eba295c22165b01ec06a735e4dbb3a44",
".git/objects/75/48fd99055297bfc9705b69af7e86585d2af717": "ed074a8b9cde8ea730034eadd2268748",
".git/objects/76/4552d04450cf9967337cb6c8495ec104a9fd53": "e002582f631d403213ca9fa819ad1a6c",
".git/objects/76/e1789b06850f063df87b763f25be27996e1488": "c89d99a85cd4a01ccd99d8ccd5d82e85",
".git/objects/77/681f469c9b9a74f4b9c2acb5e4a76be617e44b": "76c325c24d397756430a0300e7d7077b",
".git/objects/79/7d452e458972bab9d994556c8305db4c827017": "009f1a67118a52459bbc67f56c2ffd4a",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7a/7f9873ad7dceb4dc17087fb06c800fa0191376": "91f6523d91623d19d122fea7b32a3db9",
".git/objects/7a/d6458080227e226f2895e21d50e7853e30b880": "215766cf9dd1610e673384e75df34d3d",
".git/objects/7b/24964210d49cc6819cb7320defea3152d45d3a": "07724c7dcb943c17b7969338a692d38d",
".git/objects/7b/7f5b6f36460d6a4055a66e380c8812997912bf": "741bc2dc70fc37594a406c2f6771aacf",
".git/objects/7c/1b8a7ad06519d3e61ddb1ef128dfce7df3b9d9": "e563308cb8fc50b0a0429c976876e91a",
".git/objects/7d/6c433a6a03e115158d4cef1896a64fd228e809": "ca05fc026e2011ed5f08c82a4fd0562c",
".git/objects/7f/c7725e781a50f924e2cfb2bb511f2c887088c8": "c4fee7af09f6ae48a54e8546ed05c962",
".git/objects/80/e867a4e06b4dc26d0a2b327cbd54041addc50a": "a256672b7db051545b2b39eb821c1510",
".git/objects/82/b6f9d9a33e198f5747104729e1fcef999772a5": "32d0349a1626c50624f6aab0900c31d8",
".git/objects/84/ac32ae7d989f82d5e46a60405adcc8279e8001": "a7755246641eb6f0ea897123c42e7eeb",
".git/objects/85/2fa1a4728ae4789e3bca55dd07caef3b41f2a5": "97bf964ac33d3f622d940921761e740c",
".git/objects/86/a7c3b1b6119f7dbdb8cec74f1b5b3e076bf949": "6a613891f55546675267dc93a78ff2c1",
".git/objects/88/a049174cbc9913362aefdf3eae92cadb8243eb": "671504f93df5bc486e024d9f43dff964",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/46caae40d2aeabc9edcfa860613f76b08760f3": "727d87ebe91520ed0e3d1bb60689ac5f",
".git/objects/89/53cba09064923c5daf2d37e7c3c836ccdd794b": "41d25b277c37a913abe0083c22f1e1b2",
".git/objects/89/c2725b70f1882be97f5214fafe22d27a0ec01e": "99b17ebd650decc04c5de3b0893b27f7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f96a2c8ade099adb3fca57791d512ff901fc4a": "d25ee2521973bcf7a4fc7ba6e7142677",
".git/objects/8b/6d4680af388f28db8742ef7fb8246e2bb1fffb": "4e20d4660135ff8d41852fa5b986bfb5",
".git/objects/8b/d06bdf095c809f80d639847440b06b0199a88c": "58d6dcf8e95c016f9f2dd6468f1fcdf1",
".git/objects/8e/af0ef74ddcdb4b009d99b780f51da4f561c371": "4b82dd0c4bbbf4e743b1f93d4bf40169",
".git/objects/8f/80cede342cf135b0f990b448f25c1cf1c8fe81": "3216f3ea3f487949329d2b8212ae1ee7",
".git/objects/90/3f4899d6fced0eb941e159f7322b21b320c40c": "83b7d85886d6c364db4cef0543e046ee",
".git/objects/91/9434a6254f0e9651f402737811be6634a03e9c": "6da5342c04a33ac2131fdae2e4a84892",
".git/objects/95/5ee3038f988929fac2dedb6a307ebd45dfcfd7": "84f4c0c3560baa9920ae37a5e8144c5e",
".git/objects/97/a4f03fbd0769efd43ec57d80566bb19ebfc455": "a5dfb0578e877b432f970894f161693a",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/125de0c0c4964a93bbf6b7be36c9d1ac2deca4": "7e10c7465d94ffaf5cfa0e2dd7e84e0b",
".git/objects/99/84d0a442204588b063e0dc05571d68280d261c": "267585242ef31a4ac5ede9eee48f7aeb",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9c/99814151a4c5ea0288d16d9fa81553946954b5": "3ad666ce138e35baf9dd7585fd9f459a",
".git/objects/9c/dd1a78dd3cd35a60f9049e153e8ac912d174f3": "ac9c72683f1e2b1d0b392155b5c8414b",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a2/ec33f19f110ebff51a23342d7bc29ec9a1aaa6": "48569d95657b1f4b8fad6b6e730d4334",
".git/objects/a5/74fb9e3907608e950927d928b60aed4a83795a": "7523ce0bb7bc23ef4659f02814cc43df",
".git/objects/a6/368af0ee7628fa194ef8fe3bbe4523113d6e05": "bafb07bb0e67f8a015ad7c670f7072fd",
".git/objects/a6/d32adeaabcd32d115e01b6c9fa33ba0cb9ac12": "05a7e07577eaa3208ebb86640d8ba69b",
".git/objects/a8/7eef84a5d29844f41176f808a797cea593616b": "bbe3fc3e1c5e6135804ae185063dc396",
".git/objects/a8/e64fdfeb26c1371bc1169043e31175cea36ef3": "ee36831733b04277c6a77d9ebfa7d16c",
".git/objects/ac/3b47926ee56b0efc39cbff3c532918abbf953f": "5c26b252964a52616a00ce474830af9c",
".git/objects/b0/2c4cb241bf88c7fc7b43af2f34e0f651c864fa": "fc809cf11bd5827961049d2c0e448f51",
".git/objects/b0/5da3252ebbb915b60d54cba6f073451344ffd6": "fcd9d81b5b28f77f97ff0a4612bf2403",
".git/objects/b1/1452d731000b01dd56f55587b1e5c22fb7f124": "35aa049dd41ed745cc64c56cdd588f7f",
".git/objects/b2/3ddf240b952c46cd1a85afad13ba4b82e117e2": "1b3d9745444017a2091eca1bccb57a83",
".git/objects/b3/0f1c5ba4d46fbcb9ddf84fe5ce4d487559b378": "8c98ae24ab3cf34ff4371939a53960fe",
".git/objects/b3/4bbbbb00ac52f661c8284d9cc2864581aa4504": "772c2f17ba96fec7b7fa86806c48544e",
".git/objects/b3/c176141221dbe2b40d3e36942b15068ba48677": "16f35ec3f336b484215d2ebbfaaad9fc",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3c4c30c16703f640bc38523e56204ade09399e": "d81d171c0590dfeb78e8d6c404330bb1",
".git/objects/ba/f3d77f76706dbc82162dd6bc9a1365ac5be830": "3fdbb77ecc95ce55cfcedebbe781f150",
".git/objects/bd/b57226d5f2bd20f11934f4903f16459cf52379": "3289c6c0ee8813484d2b33d6c6e1df10",
".git/objects/be/3943c96d8eed92e2a329ce8327616d5e7dc440": "3914e5aa863cbfdf927ed3de8f9e8d42",
".git/objects/be/6dd1cb72329fc45d60933493709d578d4b9aa3": "4baa0413cc4722d96b0fa3644c4453c6",
".git/objects/c0/4e20caf6370ebb9253ad831cc31de4a9c965f6": "5e216dece9f226a4ac045363fbbe142a",
".git/objects/c1/b51d33e1e16aba9e7eb5fe7f48dfdb560c06aa": "726ac4641d9a5e46a7dd11bf9a3cd585",
".git/objects/c2/efd0b608ba84712fb3e1d01122468a50c7fba1": "5841aa09610800cbb88a643fdc9ede63",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/3cc9b8ba4e4ae5c6df5ed5e3f199668b7fead0": "e70044978ca80324fbe375a7e1547ad3",
".git/objects/c4/3db629b58f3d425dd071cdcfcce513ef0f6fa5": "f1bfd4353fe142b2cbe9311be770d071",
".git/objects/c5/d8a2da5ad0f41cc74ba035615b37c2e5e0e8a2": "240632b9bce8be3b5bc4b28998b6caa8",
".git/objects/c6/0d48e3d3d87262c8af1f05ff7a028bd7a66dc7": "e2c36ab5895fbf222608a0b016059cff",
".git/objects/c8/2e7f1b8a6ad003e15851709b4746e6f08e31ca": "c0ca3806bfd99b5bbe0dee4c138cbad8",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/639aa1c2391856bc0ee4fb70dce6d0dc8117d3": "9789866d32bf186f1a3d42be608cca18",
".git/objects/cb/1ef88056edd1caf99a935e434e7ff6943a0ef6": "06da19129aec844c2a975f2175eb659b",
".git/objects/cb/db0b42e2f9060341eb73ab7fef6770586f0e99": "dc80bff81f99cbed86c53713074ee17a",
".git/objects/cc/cf817a52206e8a8eef501faed292993ff21a31": "1b4dd6ab7f4ca9073eac414dd6794fd6",
".git/objects/cc/fb5d6212bc120deb57fabb3a261299d992eee2": "bf2f7b8e3ecf877f5a36112fbefa9bda",
".git/objects/d0/651fda5fbc1e0e728fe38d2abc65f7250c177d": "6bc02ac128f6ce47d177770d0a6103f8",
".git/objects/d0/d718a4cd769158747b900599d00a1dd4fb5559": "30c292d835ff46c176962ec52d6a355f",
".git/objects/d3/366b9d6c6762f69bbbcb1aa1e11f6d236c763e": "6d60c61b3088746d5820faf0e5e8b05b",
".git/objects/d3/6b1fab2d9dea668a4f83df94d525897d9e68dd": "f19c13a91df6187b27767a0c81787173",
".git/objects/d3/896c98444fbe7288d434169a28c532258a4466": "65bd2275cf87203cd8cbaa19e4cce2fc",
".git/objects/d3/b9e0aafa70e7b518de6d7f36503def555e3867": "c4acea7ad0add3f7670f8bff8463c738",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/47c094ceab24ad7c7ca1bfb8bb30e92f630f83": "1ce2383c9d304a600695b6a339fb519b",
".git/objects/d4/92d0d98c8fdc9f93ad2543bb4f531803e9df72": "e3677ae8914304b8340d8db27e7db71a",
".git/objects/d5/bd01648a96d50136b2a97c8bb9aa5b711f6c39": "b52bbb3aa77140bdf2d47814158cba7d",
".git/objects/d5/f1c8d34e7a88e3f88bea192c3a370d44689c3c": "2e5a4148dc9ebc15b186574d9fb60432",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/61c53178cc135119f252e047fb2f6e08512ed0": "54c64d1a96d272170806761ec67134b6",
".git/objects/d9/537b8a437202fabb6b86d3e4517bc7df7e21ee": "885b6aee5330fc19b58c40745402d3b1",
".git/objects/db/150c6e3dc0f7eaaf0eba721a1efe272c2cf099": "12cf9194eee7191cb553ce2719f48818",
".git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "a2e10fc9c4f60ac00e2b9b1ed3a0b5ac",
".git/objects/db/ee657bb5b9158516486b3a1b47ef8b6fc72a2a": "2c019ef76f3ab00aa5187bbcff7ca0f8",
".git/objects/db/fd452a3c490e73efd9fe02512f24b6d8369485": "0e97324b8bd3cf6d712e7e09a6fc601c",
".git/objects/dc/139d85a93101cc0f6e9db03a3e1a9f68e8dd7e": "c815b8cd55031858470b95979194ad21",
".git/objects/dc/9ada4725e9b0ddb1deab583e5b5102493aa332": "e8022082c258e4c83e27519f77484618",
".git/objects/dd/db8a30c851e7ef5b16a9108934bd1217b6b43f": "e943b985c0fbc94ad354f2ada89b854d",
".git/objects/df/505ccd7ed6a92f03798fa08b5af98af4b530f2": "ebe493842f143e9ebc1c86c5c8229510",
".git/objects/df/bd3b8973f70d0ecbaeb3a39cf6d541e94486ab": "af5b187fb3f682a888c644a27ec7f3cf",
".git/objects/df/f4f49561c816f70eaea557d889d31cf63447ac": "fccf1f0ce075ef8d3a1ae932cbc31552",
".git/objects/e0/f0a47bc08f30b550b47b01de4c9206b6824dd9": "5ef61d56b6220833037adc3dc3871ecb",
".git/objects/e2/ab4cb486a971c90a1d38070ebd382dd6c51502": "8b0d201a0bba49460a30e013f6200ac9",
".git/objects/e3/3142e71bfc751ce1d7a7d46406235425786005": "71cc9d64983f89c56658f9ade44a4809",
".git/objects/e3/773d42e24c8bb3b9070fc9d10d62032787035e": "ba6ca702822bc0041504a523b78b2f4a",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e7/1a16d23d05881b554326e645083799ab9bfc5e": "35049fca5b8153e0c0cd520b5503c269",
".git/objects/e7/b69350113995ed71c25e25817a1915dd27d6c0": "5757202dac8cd0e6ce0b4a7193ebcb58",
".git/objects/e7/c5c54370372a4cdde7288a32733998d87bd767": "37c17914ddc243c1c81881069106b916",
".git/objects/e9/01dde684ea8ba25c50ea5dc7d5900da31a30d4": "8688207d9bdc19977b061c06f0972db7",
".git/objects/e9/7dabc7028e16c6d9ec74f1e2fb677a93ba81b5": "8be55bc32212fcdfd3d8ad05b8e0488f",
".git/objects/e9/f5fea27c705180eb716271f41b582e76dcbd90": "45a0061e76512ff597b88e29748f3ada",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ee/d1616503d2063c823d77ddbd03ce3e3e936889": "779646964d80a093209a922425c1378b",
".git/objects/ee/d56e364e24fe6d27dce035b009947d545a10b5": "e32cd9f36472b5b6d3aae2797a3543e5",
".git/objects/f0/18a61817f55e78bb92ce8df2dda423ec570a4a": "44e96829ee6f26cde6aaf8c2931e83ee",
".git/objects/f0/83318e09ca1b6b8484b1694a149f0c5d5cac1d": "541f4960a70ea9c895b2c21196ef40a7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/e259c7c9390ff69a6bbe1e0907e6dc366848e7": "094726a4a1cc307c0a019e65a323f850",
".git/objects/f3/46021e5e353f2f827b3a136a02d0f53631c785": "95dac5423c0c75a27b351527c71190cf",
".git/objects/f3/c28516fb38e64d88cfcf5fb1791175df078f2f": "bccf9d20d0adcc345fe8e5f4a745c4ae",
".git/objects/f4/f6dbdbfcfdc9ea12d45197049e9dabcf6850e3": "53e9b7a63d471fc2d8d4e6af3d43e8e0",
".git/objects/f5/8bb76100e82ec653e9b32a02d18d9232922d51": "e732ad2f094017daf1f16b50afd7c1d0",
".git/objects/f7/4085f3f6a2b995f8ad1f9ff7b2c46dc118a9e0": "c04177ec14f012cb2c99851a5e1ca941",
".git/objects/f9/b0d7c5ea15f194be85eb6ee8e6721a87ff4644": "db1ee38473c66e5ffa9d28f6dfe66938",
".git/objects/fb/605bc840f7bb713a721358bd422dd94c0755c2": "dd8482173eafdcd39aab86dcf4f9cf1a",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/730945a01f64a61e2235dbe3f45b08f7729182": "1dfc0ae4480d18f6ff6e8730ef3222d1",
".git/refs/heads/main": "d4f82b63611dda7ad7ea72c9952dac49",
".git/refs/remotes/origin/main": "d4f82b63611dda7ad7ea72c9952dac49",
".idea/libraries/Dart_SDK.xml": "12fe566384846920a7c5498623b33eaa",
".idea/libraries/KotlinJavaRuntime.xml": "de38cfadca3106f8aff5ab15dd81692f",
".idea/modules.xml": "3867275a5e85f3eb0ad5db7870554b38",
".idea/runConfigurations/main_dart.xml": "0ecf958af289efc3fc1927aa27a8442f",
".idea/workspace.xml": "25155dfb2368a7e35e1ebbecd505a418",
"analysis_options.yaml": "9e65f4b9beebb674c0dc252f70a5c177",
"android/app/build.gradle.kts": "5e02f883faeceb6b03e531e41f43d9db",
"android/app/src/debug/AndroidManifest.xml": "820c45a25b424dd5b7388330f7548d1f",
"android/app/src/main/AndroidManifest.xml": "5a546c174391d91cf3cdca6ef76032bc",
"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "5b3b418ce50367c33bded3c0df06d47f",
"android/app/src/main/kotlin/com/example/web/MainActivity.kt": "9df4af9a4fa3b2fe524f5efe80a18173",
"android/app/src/main/res/drawable/launch_background.xml": "12c379b886cbd7e72cfee6060a0947d4",
"android/app/src/main/res/drawable-v21/launch_background.xml": "bff4b9cd8e98754261159601bd94abd3",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/values/styles.xml": "f8b8cfbf977690d117f4dade5d27a789",
"android/app/src/main/res/values-night/styles.xml": "c22fb29c307f2a6ae4317b3a5e577688",
"android/app/src/profile/AndroidManifest.xml": "820c45a25b424dd5b7388330f7548d1f",
"android/build.gradle.kts": "803fe22651fbe96ed401eb0b66a492d1",
"android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"android/gradle/wrapper/gradle-wrapper.properties": "627d3c02fe399624ffc9b39b9a5a5656",
"android/gradle.properties": "177a9eb502bc9c110a72ff0fdfd0c845",
"android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"android/local.properties": "b804777db8b74adbc3f5919ab3937b54",
"android/settings.gradle.kts": "7e2b812e622b81575eb9060fa80d2ae2",
"android/web_android.iml": "273d851cbe25579b8e6ee48886fa4d6a",
"assets/AssetManifest.bin": "75eec839a142d2cbb41bb9cd5a267344",
"assets/AssetManifest.bin.json": "f26c1d930f5016333679164ef46ef23c",
"assets/AssetManifest.json": "df9a7ee4d6116c1f0e6d4974d7dc1f7c",
"assets/FontManifest.json": "78edb7b94f3ec0f4faa82568e50d5066",
"assets/fonts/MaterialIcons-Regular.otf": "89e0057f8cbfe981e87680f8eb28addf",
"assets/NOTICES": "19b6ec85098d944b0d78f4c3a169217c",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Bold.ttf": "4f59e81563e413635c57d78338d33b92",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Duotone.ttf": "e0b028909550eda3023ac5765bf8c16a",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Fill.ttf": "612af00267f5e8a429531399700db66e",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Light.ttf": "6c53da4ecc310dd5dbcfafe3d916a346",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Thin.ttf": "9ca0acf8bc84ec2421f96f835017f321",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor.ttf": "c2ecd49d10b76c3f9b9c072966cc0c3c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"build/web/.git/COMMIT_EDITMSG": "2866984f309e98828c0d22f63086eb46",
"build/web/.git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
"build/web/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"build/web/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"build/web/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"build/web/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"build/web/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"build/web/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"build/web/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"build/web/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"build/web/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"build/web/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"build/web/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"build/web/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"build/web/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"build/web/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"build/web/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"build/web/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"build/web/.git/index": "1c691fba8c0421041c56bc2647bcd692",
"build/web/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"build/web/.git/logs/HEAD": "4d609b6eb325f1cc4b8e007636231b9e",
"build/web/.git/logs/refs/heads/master": "4d609b6eb325f1cc4b8e007636231b9e",
"build/web/.git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
"build/web/.git/objects/03/8c2b5952a4187195f16bd37e298452048fed63": "44adc68856ca20ec31245290131efda2",
"build/web/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"build/web/.git/objects/07/ba84f1c495a1ccfd8a415c2bd8100081ac9957": "5b0a8bff45fd68774feb66674d553cc5",
"build/web/.git/objects/08/918c94183fbe4e1cc279fd41d8a7df20974b08": "f0eceb95d90340b50e51210325be44ba",
"build/web/.git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
"build/web/.git/objects/26/cf7e03cba5e91c05299aaf9ea982a72668c7ce": "3df684c4de43280900a000b930c0b96a",
"build/web/.git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
"build/web/.git/objects/2c/53071a8f6d50a6e25c3bc985a823643eac04e9": "d2b96056f8dc1c2459a969ebe5e2a519",
"build/web/.git/objects/34/c2bb62a4bd439d85cd34b538d36293fae295e3": "9a727ff217077f9905c7bec4e83cb910",
"build/web/.git/objects/41/8a9f044354a23369cc0a0fbead86e7ee886768": "16bfa7f462c5c00e17d1dda940593513",
"build/web/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"build/web/.git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
"build/web/.git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
"build/web/.git/objects/5c/dfce0eab7c7eb106f9e9fbf09f881ca19c30ab": "e7f21b35fc23c23204e1c6b4e8c6b2cc",
"build/web/.git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
"build/web/.git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
"build/web/.git/objects/6f/3884b3ea239be49e72270c14c0b0b0b545b4ff": "7d4960d45ed542e80a7fd98b3bff0aa8",
"build/web/.git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
"build/web/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"build/web/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"build/web/.git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
"build/web/.git/objects/97/2e2c07fa67239c99e968fb33a6a6f6dbf8bd12": "dfe19c25e64b54d6e19dbbfe69557549",
"build/web/.git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
"build/web/.git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
"build/web/.git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
"build/web/.git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
"build/web/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"build/web/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"build/web/.git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
"build/web/.git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
"build/web/.git/objects/ca/a760a5a6a47d29b2e7bbb80d311e8b76f98cfa": "cad5a068a758037a72e4605ceea9307b",
"build/web/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"build/web/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"build/web/.git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
"build/web/.git/objects/db/150c6e3dc0f7eaaf0eba721a1efe272c2cf099": "12cf9194eee7191cb553ce2719f48818",
"build/web/.git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
"build/web/.git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
"build/web/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"build/web/.git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
"build/web/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"build/web/.git/objects/f5/16f99bd28eeae1e87ff666549b656e97260fd5": "963f739110f7f8b0c455ae37d4f4a297",
"build/web/.git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
"build/web/.git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
"build/web/.git/refs/heads/master": "ae4902cbea54d522997b051d7ec9f7ae",
"build/web/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"build/web/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"build/web/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"build/web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"build/web/assets/fonts/MaterialIcons-Regular.otf": "deea0f5dba93813bade5621aec9b6b13",
"build/web/assets/NOTICES": "2d9920ddb30eaf878dd6d18e47d4559f",
"build/web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"build/web/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"build/web/canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"build/web/canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"build/web/canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"build/web/canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"build/web/canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"build/web/canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"build/web/canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"build/web/canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"build/web/canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"build/web/canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"build/web/canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"build/web/canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"build/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"build/web/flutter.js": "888483df48293866f9f41d3d9274a779",
"build/web/flutter_bootstrap.js": "8c52074162753bf45571832e226d4944",
"build/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"build/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"build/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"build/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"build/web/index.html": "0fb877bcafb50444a03c17a37f230ea4",
"build/web/main.dart.js": "a8be425a0303fee7cd0145665d67be9f",
"build/web/manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"build/web/version.json": "b3b87f9153d4406c14bc11865bbe1089",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "e384e778dfa75258b674dd7450ccdf93",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9bee3432b53353434a217ced708c9e99",
"/": "9bee3432b53353434a217ced708c9e99",
"ios/Flutter/AppFrameworkInfo.plist": "61f96692cf70fcbea30157a42fd66a70",
"ios/Flutter/Debug.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Flutter/ephemeral/flutter_lldbinit": "4c0c8550624ce117572c484ae3e7d9ce",
"ios/Flutter/ephemeral/flutter_lldb_helper.py": "98fc75412162af387e2e3461e4e58094",
"ios/Flutter/flutter_export_environment.sh": "90aac5d703ccad2da30dc8b38791909d",
"ios/Flutter/Generated.xcconfig": "27965a49127c81b0951a8a46ed654f5a",
"ios/Flutter/Release.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Runner/AppDelegate.swift": "e277c49e98c9f80e9e71c0524a5cb60f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "31a08e429403e265cabfb31b3d65f049",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "a2f8558fb1d42514111fbbb19fb67314",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "1b3b1538136316263c7092951e923e9d",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "be8887071dd7ec39cb754d236aa9584f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "043119ef4faa026ff82bd03f241e5338",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "2b1452c4c1bda6177b4fbbb832df217f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "8245359312aea1b0d2412f79a07b0ca5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "e419d22a37bc40ba185aca1acb6d4ac6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "36c0d7a7132bdde18898ffdfcfcdc4d2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "643842917530acf4c5159ae851b0baf2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "665cb5e3c5729da6d639d26eff47a503",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "b9e927ac17345f2d5f052fe68a3487f9",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "f7ee1b402881509d197f34963e569927",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "b428258a72232cdd2cc04136ec23e656",
"ios/Runner/Base.lproj/Main.storyboard": "2b4e6b099f6729340a5ecc272c06cff7",
"ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"ios/Runner/GeneratedPluginRegistrant.m": "f6079b630997f8fd4ae1ac639162419a",
"ios/Runner/Info.plist": "89fe97591c65fb6906af8ac5653fb487",
"ios/Runner/Runner-Bridging-Header.h": "7ad7b5cea096132de13ba526b2b9efbe",
"ios/Runner.xcodeproj/project.pbxproj": "6b69df499cbf0129993f8590d8a43014",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "77d69f353bbf342ad71a24f69ec331ff",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "843f15d9a62e0e2bda682102c02cabdc",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/RunnerTests/RunnerTests.swift": "24e5d095048eb86c30423f4e04b6e57b",
"lib/main.dart": "e6d34b783604845532fe6ac65931b479",
"linux/CMakeLists.txt": "9c4dbeef0f405b4ef17423014f98f724",
"linux/flutter/CMakeLists.txt": "2195470ce31675d31db5a37590d011f6",
"linux/flutter/generated_plugins.cmake": "e973b0a9c4bf1b7cba923da57b4fbf45",
"linux/flutter/generated_plugin_registrant.cc": "d07afe003d5837167bdd357d593f20a0",
"linux/flutter/generated_plugin_registrant.h": "d295462c9da9f7fef22dc86c34492318",
"linux/runner/CMakeLists.txt": "30cc1614b16214b66c014af09ba699eb",
"linux/runner/main.cc": "539395bcd63dba20afed0838d136189f",
"linux/runner/my_application.cc": "456e8f4005864e32feb366c56c58bf69",
"linux/runner/my_application.h": "f6b37d58752c8671078b6f660e33e8c1",
"macos/Flutter/ephemeral/Flutter-Generated.xcconfig": "5f4e9f8a7fd061ad3963863585a63246",
"macos/Flutter/ephemeral/flutter_export_environment.sh": "de7d9244c4eebfebe6e9cba89dc49341",
"macos/Flutter/Flutter-Debug.xcconfig": "f6991d7432e1664af118cc9531127016",
"macos/Flutter/Flutter-Release.xcconfig": "f6991d7432e1664af118cc9531127016",
"macos/Flutter/GeneratedPluginRegistrant.swift": "c840bc53b61279c2fb631741134c2ed7",
"macos/Runner/AppDelegate.swift": "4b52e0b89ebfef9baf45b04548c463d6",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "c9becc9105f8cabce934d20c7bfb6aac",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "3ded30823804caaa5ccc944067c54a36",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "8bf511604bc6ed0a6aeb380c5113fdcf",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "dfe2c93d1536ae02f085cc63faa3430e",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8e0ae58e362a6636bdfccbc04da2c58c",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "0ad44039155424738917502c69667699",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "04e7b6ef05346c70b663ca1d97de3ad5",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "1d48e925145d4b573a3b5d7960a1c585",
"macos/Runner/Base.lproj/MainMenu.xib": "85bdf02ea39336686f2e0ff5f52137cc",
"macos/Runner/Configs/AppInfo.xcconfig": "c30f92243a289af69a8b6c1c27dd072a",
"macos/Runner/Configs/Debug.xcconfig": "783e2b0e2aa72d8bc215462bb8d1569d",
"macos/Runner/Configs/Release.xcconfig": "709485d8ea7b78479bf23eb64281287d",
"macos/Runner/Configs/Warnings.xcconfig": "bbde97fb62099b5b9879fb2ffeb1a0a0",
"macos/Runner/DebugProfile.entitlements": "4ad77e84621dc5735c16180a0934fcde",
"macos/Runner/Info.plist": "9ffcbec0a18fdad9d3d606656fd46f9a",
"macos/Runner/MainFlutterWindow.swift": "93c22dae2d93f3dc1402e121901f582b",
"macos/Runner/Release.entitlements": "fc4ad575c1efec3d097fb9d40a0f702f",
"macos/Runner.xcodeproj/project.pbxproj": "feebf2950a5a61d77e987c534557042b",
"macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "7545cb7736f31b1b9e5ef91c87578d9c",
"macos/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"macos/RunnerTests/RunnerTests.swift": "8059f5d27a19c556eeafb49b3f9b7bdd",
"main.dart.js": "698bb6bec65bd299a9af58d20f2ceaa6",
"manifest.json": "e6fa4d7d9d2fb7b79c5fb78f7b5dde49",
"pubspec.lock": "7d83ff466c29e92e068babe8b6147665",
"pubspec.yaml": "e0af3ccc0dfe82776758faad2a628704",
"README.md": "f62eeaa7616cee091b7df40146427806",
"test/widget_test.dart": "32cade57813a89c74d8d3a269232f36e",
"version.json": "69881b0edfba4ca6ffacab8e71ac9534",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "478895dd9a65a777c656d2593ad5c7ef",
"web/manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"web.iml": "f9bf5c490675c84d098e6772a6f2a796",
"windows/CMakeLists.txt": "1ab2c7fa4021ddd68d915bb0085dd341",
"windows/flutter/CMakeLists.txt": "bbf66fed5180bd9ae8198b8d7c4a0001",
"windows/flutter/generated_plugins.cmake": "620906318e8c8297f3bc95b445ce4c47",
"windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
"windows/runner/CMakeLists.txt": "028602ab9754bffe716659ada7590d29",
"windows/runner/flutter_window.cpp": "2f463f9b7da67a2d692a012f9ea85e0c",
"windows/runner/flutter_window.h": "7defcc89d4a26d56e801241d624d48fb",
"windows/runner/main.cpp": "01bb7d9acfab1af72f17ad947706bf4f",
"windows/runner/resource.h": "1ade5dd15e613479a15e8832ed276f2b",
"windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"windows/runner/runner.exe.manifest": "298a0260a755c3959d2c3c8904298803",
"windows/runner/Runner.rc": "76938ef0891d07a6916a3bfd1289061d",
"windows/runner/utils.cpp": "432461b09d862a2f8dadf380ff0e34e5",
"windows/runner/utils.h": "fd81e143f5614eb6fd75efe539002853",
"windows/runner/win32_window.cpp": "571eb8234dbc2661be03aa5f2a4d2fca",
"windows/runner/win32_window.h": "7569387d58711ab975940f4df3b4bcda"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
