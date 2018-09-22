# my_windows_builder

my windows working environment build scripts

開発環境のセットアップすることは、「マシンを 1 台セットアップする」ことに他ならないので、[Provisioning Toolchain](https://conferences.oreilly.com/velocity/velocity-mar2010/public/schedule/detail/14180)の概念に則って説明する。

- `Bootstraping` は、[Bootstraping](#bootstraping) を参照
- `Configuration` は、 [Installation](#installation) を参照
- `Orchestration` は、いまのところ、ない

# Bootstraping

いくつかのディレクトリの作成や、構成の変更などを行う。
これらは、ソフトウェアのインストールや Windows の挙動そのものを変更するものが含まれるため、最初に行う。

## D:ドライブがある場合

もし、複数台の補助記憶装置がマウントされている場合、マイドキュメントやマイピクチャなどの「ライブラリ」ディレクトリを貼り直すべきである。
この作業は、セーフモードで起動して行う必要がある。
事前にどのディレクトリをどのようにマップし直すかを検討し、実施する。

普段は、「ライブラリ」にあるディレクトリすべてを、 `D:\Users\%UserName%` へ移動し、シンボリックリンクを作成している。
「ライブラリ」のディレクトリ以外は、キャッシュなどの都合で頻繁にアクセスされるため、より高速であることが期待される C:ドライブ に残しておくことが多い。

ディスクのマウントは、管理者権限のあるユーザで行うが、ディレクトリの構成変更は、セーフモードで実施する必要がある。
理由は、ユーザのログインそのものに影響するため。

# Installation

常用している各種ソフトウェアやライブラリなどのインストールをする。

- [Chocolatey をインストールし、Chocolatey でインストール](#install-via-chocolatey)
- [いくつかのソフトウェアを、手動でインストール](#install-manually)

## Install via Chocolatey

Chocolatey 自体のインストールと、Chocolatey を用いたインストールをする手順を説明する。
[Chocolatey の公式ページはこちら](https://chocolatey.org/install)。

### 管理者権限で PowerShell を起動

PowerShell を管理者権限で起動する。
スタートボタンを右クリック もしくは <kbd>Win</kbd> + <kbd>x</kbd> から起動できる。

### Execution Policy を Chocolatey のインストール時のみ、ゆるめておく

開いている PowerShell のプロセスでのみ、 `RemoteSigned` にしておく。
ネット上のパッケージをダウンロード・インストールするために、設定する必要がある。

```posershell
Set-ExecutionPolicy RemoteSigned -Scope Process
```

### Chocolatey 本体のインストール

いくつかのパッケージがチェックサムをちゃんと提供してくれていないようなので、`allow empty checksums` オプションをデフォルトでつけるようにしておく。

```powershell
iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex
choco feature enable -n allowEmptyChecksums
```

### Install Command and Library Packages

以下のコードをコピペして実行する。
このコードは 1 行になっているため、トリプルクリックで全体を選択することができる。

```powershell
cinst -y 7zip ChromeDriver2 ffmpeg git greenshot javaruntime jdk8 linkshellextension mysql.workbench nodejs plantuml php powershell python rapidee rsync ruby screentogif specialfoldersview sysinternals vagrant virtualbox winmerge-jp yumi
```

### node-gyp を動くようにする

npm の `windows-build-tools` をインストールする。

管理者権限で、

```
npm i --global windows-build-tools
```

## Install Manually

諸事情で Chocolatey を使用せずに手動でインストールするものを説明する。

### Self Update できるもの

以下のソフトウェアは、ソフトウェア自身で self update できるため、 手動でインストールする。
Chocolatey によるバージョン管理配下から外すことを目的としている。

- [astah](http://astah.change-vision.com/ja/)
- [Google IME](https://www.google.co.jp/ime/)
- [Jetbrains Toolbox App](https://www.jetbrains.com/toolbox/app/)（IntelliJ などの IDE は、toolbox 経由で管理）
- [SAO Util](http://www.gpbeta.com/ja/post/develop/sao-utils/)
- [Source Tree](https://www.sourcetreeapp.com/)
- [Notepad++](https://notepad-plus-plus.org/download/)

### Chocolatey でインストールできないもの

以下のソフトウェアは、 chocolatey でインストール出来ないため、手動でインストールする。

- [composer](https://getcomposer.org/)
- [OBS Studio](https://obsproject.com/)
- [wireshark](https://www.wireshark.org/)

## 各ソフトウェアの設定

インストールしたソフトウェアの設定を行う。

### GreenShot

以下の画像のような設定にする。
設定ファイルには、設定のみならず、キャッシュやヒストリーなどの情報も含まれており、バージョン管理の対象に含めるべきではなかった。

![2017-07-06_16-18-00_000044](https://user-images.githubusercontent.com/2140131/27899813-bd16fd68-6266-11e7-8be6-c6d1a3ca7759.png)
![2017-07-06_16-18-01_000045](https://user-images.githubusercontent.com/2140131/27899815-bd1f0468-6266-11e7-8a1e-03e066817dd4.png)
![2017-07-06_16-18-01_000046](https://user-images.githubusercontent.com/2140131/27899814-bd1ab778-6266-11e7-8328-904da78d991f.png)
![2017-07-06_16-18-02_000047](https://user-images.githubusercontent.com/2140131/27899816-bd35786a-6266-11e7-978f-dc302d86a731.png)
![2017-07-06_16-17-57_000041](https://user-images.githubusercontent.com/2140131/27899817-bd3791c2-6266-11e7-8151-936a6bd6aa97.png)
![2017-07-06_16-17-58_000042](https://user-images.githubusercontent.com/2140131/27899818-bd3a17ee-6266-11e7-9e18-df942ed158d1.png)
![2017-07-06_16-17-59_000043](https://user-images.githubusercontent.com/2140131/27899819-bd3b0dd4-6266-11e7-910c-cecc068a68e0.png)

## 環境変数

- `Path`: `%USERPROFILE%\bin;%USERPROFILE%\go\bin;%APPDATA%\npm;%APPDATA%\Composer\vendor\bin;C:\Program Files\Oracle\VirtualBox;%USERPROFILE%\AppData\Local\Microsoft\WindowsApps`