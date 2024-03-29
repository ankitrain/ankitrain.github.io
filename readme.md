# Anki Train とは

管理者が電車の中で大学受験用の「暗記」をできるように作り, GitHub経由でスマホで見れるようにするためだけのいわば自己満足。

命名理由は簡単で, 電車(Train)の中で自身を強化(Train)できるから, というものである。

# Anki Train 特有のスタイル

## 赤文字部分
```<span id="a[number]">[contents]</span>```

この書き方をすることで, 暗記のいわゆる赤文字部分を作ることができる。`[number]`は一意の自然数(ただし900未満), `[contents]`は隠す文字を示す。

## ファイル編集する場合

基本は`<main>`タグ内のみをいじることになり, `<main>`タグ外は, `<header>`内の`<h1>`の編集, `<head>`内の`<title>`のあたりしかいじることはない。

# ファイル構造

ルートディレクトリ直下のみこの場で説明する。

## 1. `css`フォルダ
メインのCSS(`style.css`)と, 数式専用CSS(`math.css`)を格納

## 2. `js`フォルダ
赤文字部分の挙動などを定義したJavaScriptファイルを格納。

`app.js`は過去の名残。
現在メインで利用しているのは`app2.js`。

## 3. `ico`フォルダ
アプリアイコン(`icon.png`)を格納。

## 4. `img`フォルダ
ボタンのアイコン画像を格納。

## 5. `ee`フォルダ
入試対策系のHTMLファイルを教科ごとに分けて格納。

`ee`は *Entrance Exam* の略。

## 6. `st`フォルダ
考査対策系のHTMLファイルを教科ごとに分けて格納予定。

`st`は *School Test* の略。

## 7. `kn`フォルダ
おまけ。ただの雑学でしかないものを格納している。

`kn`は *knowledge* の略。

## 8. `katex`フォルダ
KaTeX(数式ライブラリ, cf. [KaTeX](https://katex.org/))のスクリプトを格納しているフォルダ

# 更新履歴

詳細は[更新履歴](./releasenote.md)を参照のこと。

# お借りしたモノ

## UI アイコン
Microsoft Fluent UI System Icons ([GitHub](https://github.com/microsoft/fluentui-system-icons))

## 数式表示ライブラリ
[KaTeX](https://katex.org/)

## 数式フォント
STIX Two Text ([Google Fonts](https://fonts.google.com/specimen/STIX+Two+Text))