# Types Directory Guide

このディレクトリは Next.js(App Router) プロジェクトにおける**アプリケーション全体の共通型定義** を集約するための場所です。

目的は以下の通りです：

- 型定義の分散を防ぎ、見つけやすくする
- API レスポンス型とアプリ内部で使う型を分離して明確化
- テーブルなど UI コンポーネント向けの型を再利用可能にする
- `index.ts` でエクスポートをまとめ、呼び出し側をシンプルにする

---

## 📁 ディレクトリ構成

```
src/
└── app/
└── types/
├── api.ts
├── post.ts
├── table.ts
├── index.ts
└── README.md ← このファイル
```

---

## 📄 ファイルごとの役割

### `api.ts`

外部 API（FastAPI / microCMS など）の**レスポンスそのままの型** を定義します。

API 変更を検知しやすくするため、基本的に「API の JSON を正確に表す型」を書きます。

例：

```ts
export type PostResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
```

### post.ts

アプリケーション内部で扱うために整形したドメイン型（アプリケーション用モデル） を定義します。

API 型とは別にする理由：

API変更の影響を最小限にできる

アプリ内の型を自由に改善しやすい（リネーム・追加など）

ロジックで扱いやすい

例：

```ts
export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
```

### table.ts

テーブル(UI コンポーネント)で使用する汎用的な Column 型 を定義します。

任意のデータ型に対して再利用できるように設計します。

```ts
export type Column<T = unknown> = {
  key: keyof T;
  label?: string;
  width?: string | number;
};
```

### index.ts

このディレクトリ内のすべての型をまとめて export するバレルファイル です。

```ts
export * from "./api";
export * from "./post";
export * from "./table";
```

他の場所での使い方：

```ts
import type { Post, Column, PostResponse } from "@/app/types";
```

## 🧩 型追加のルール

### ✔ 新しい API を追加したい

api.ts に API 用レスポンス型を追加します。

```ts
export type UserResponse = {
  id: number;
  name: string;
};
```

### ✔ アプリ内部で使用する型（整形後）を追加したい

xxx.ts ファイルを追加するか、既存のドメインファイルに追加します。

理由：

import 統一で検索しやすい

変更時に 1 箇所で管理できる

## 🧭 命名の指針

API の型：${Name}Response

ドメイン型：${Name}（アプリ側で使うデータ）

UI 用汎用型：Column<T> など用途基準の名前

新規モデルは基本的に xxx.ts を追加して管理

## 📝 このフォルダに置かないもの

- Zod / Valibot のスキーマ（/lib/schemas などに分ける）
- コンポーネント内でしか使わないローカル型
- 一時的な型、フック専用の型（フックと同じフォルダに置く）
