import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja-JP">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#68d391" /> {/* 好きな色を入力 */}
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon192.png" />
          {!(process.env.NODE_ENV === "production") && (
            <meta key="robots" name="robots" content="noindex" />
          )}
        </Head>
        <body className="font-body text-primary">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default CustomDocument;
