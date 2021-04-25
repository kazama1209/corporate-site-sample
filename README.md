# corporate-site-sample

![FireShot Capture 119 - Home - Corporate Site Sample - corporate-site-sample vercel app](https://user-images.githubusercontent.com/51913879/115986971-f1f30580-a5ed-11eb-9605-30d9890fe0c3.png)

https://corporate-site-sample.vercel.app/

コーポレートサイトのサンプル。

- トップページ
- 事業紹介ページ
- 会社情報ページ
- 採用ページ
- ブログページ
- お問い合わせページ

といった非常にシンプルな構成になっている。

## セットアップ

必要なパッケージのインストール。

```
$ npm install 
 # or 
$ yarn install
```

環境変数をセット。

```
$ cp .env.local.sample .env.local
```

- NEXT_PUBLIC_MICRO_CMS_SERVICE_ID=<micro CMSのサービスID(ドメインみたいな部分)>
- NEXT_PUBLIC_MICRO_CMS_API_KEY=<micro CMSのAPIキー>
- NEXT_PUBLIC_MICRO_CMS_WRITE_API_KEY=<X-WRITE-API-KEY>

起動。

```
$ npm run dev
 # or
$ yarn dev
```

http://localhost:3000/ にアクセスして正常に表示されればOK。

## デプロイ

Vercelがおすすめ。

詳しい手順は↓

https://qiita.com/kazama1209/items/e3934e304b4ccf0563dc
