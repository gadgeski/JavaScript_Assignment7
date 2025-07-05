# デジタル時計 プロジェクト

TypeScript や React にスケールする為の準備段階として作成されたシンプルなデジタル時計アプリケーションです。

## 📋 概要

リアルタイムで現在時刻を表示する Web アプリケーションです。美しい UI デザインとスムーズなホバーエフェクトが特徴です。

## 🛠️ 使用技術

- **HTML5**: セマンティックな構造
- **CSS3**: モダンなスタイリング、アニメーション
- **JavaScript (ES6)**: 時刻の動的更新

## 📁 ファイル構成

```
project/
├── index.html      # メインのHTMLファイル
├── style.css       # スタイルシート
├── script.js       # JavaScript機能
└── img/
    └── Cafe-Tea2025_7.png  # 背景画像
```

## 🎨 機能

### 基本機能

- **リアルタイム時刻表示**: 1 秒ごとに自動更新
- **24 時間形式**: HH:MM:SS フォーマット
- **レスポンシブデザイン**: 様々な画面サイズに対応

### UI/UX 機能

- **美しい背景**: カフェをテーマにした背景画像
- **インタラクティブなボックス**: ホバー時のアニメーション効果
- **モダンなタイポグラフィ**: 読みやすいフォント設定
- **影効果**: 立体感のあるデザイン

## 🔧 主要なコード解説

### HTML 構造

```html
<div class="box">現在の時刻</div>
<div class="clock-container">
  <span id="currentTime"></span>
</div>
```

- `box`: タイトル表示エリア（ホバーエフェクト付き）
- `clock-container`: 時刻表示コンテナ
- `currentTime`: 実際の時刻が表示される要素

### JavaScript 機能

```javascript
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  currentTimeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}
```

- `Date()`: 現在の日時を取得
- `padStart(2, "0")`: 2 桁表示のゼロパディング
- `setInterval()`: 1 秒間隔での自動更新

### CSS スタイリング

- **フレックスボックス**: 中央揃えレイアウト
- **疑似要素**: ホバー時の境界線アニメーション
- **transition**: スムーズなアニメーション効果
- **backdrop-filter**: ブラー効果

## 🚀 実行方法

1. プロジェクトファイルをダウンロード
2. `index.html` をブラウザで開く
3. 時計が自動的に動作開始

## 📦 将来のスケール計画

このプロジェクトは以下の技術への移行を想定して設計されています：

### TypeScript への移行

- 型安全性の向上
- インターフェース定義
- エラーの早期発見

## 🎯 学習ポイント

- **DOM 操作**: `getElementById`, `textContent`
- **日時処理**: `Date` オブジェクトの活用
- **定期実行**: `setInterval` の使用
- **文字列操作**: `padStart` による整形
- **CSS アニメーション**: `transition`, `::before`, `::after`
- **レスポンシブデザイン**: フレックスボックスレイアウト
