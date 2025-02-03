## プロジェクト概要

以下の学習を目的としたNext.js 14 App Router のToDoアプリケーションの実装です。

- Zodを使用したバリデーションの実装
- prismaを使用したデータベースの操作
- 最近触っていなかったReactの実装


## 環境構築手順

### 1. パッケージインストール(初回のみ実行)

```bash
npm install
```


### 2. DBを起動する

```bash
docker compose up -d
```


### 3. マイグレーションを実行する(初回のみ実行)

```bash
npx prisma migrate dev
```


### 4. データベースにテーブルを作成する(初回のみ実行)

```bash
npx prisma db push
```


### 5. サーバーを起動する

```bash
npm run dev
```


### 6. ブラウザでアクセスする

[http://localhost:3000](http://localhost:3000)


### 7. データベースのテーブルをWebで確認する

```bash
npx prisma studio
```

[http://localhost:5555](http://localhost:5555)
