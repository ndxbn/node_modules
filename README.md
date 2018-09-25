# ndxbn

This Mono-Repository managements my development box and small libraries.

「開発用の仮想マシンを作るやつ」とか「小さめのライブラリ」とかを管理しているモノレポ。

If you have some questions for me, you can use [ISSUE](https://github.com/ndxbn/ndxbn/issues/new?template=question.md).
Of course, you can [reply or send DM on Twitter](https://twitter.com/ndxbn), too.

@ndxbn に質問とかがしたければ、[ISSUE](https://github.com/ndxbn/ndxbn/issues/new?template=question.md) を使ってください。
当然、[Twitter でリプとか DM を送りつける](https://twitter.com/ndxbn)のでも良いです。

## Requirements

- Vagrant
- Oracle Virtual Box
- Node.js LTS or later
- Python 3 or later（for develop provision）
- PHP latest（for develop PHP library）

## Bootstrap

```
npm i
npm run bootstrap
```

## Build and Start Development Box

```
npm i
npm run bootstrap
vagrant up
```
