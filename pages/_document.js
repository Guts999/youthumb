import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Your additional text content */}
          <div>
            <h1>YouTube Thumbnail Downloader</h1>
            <p>▷ Save YT Video Thumbnails</p>

            <p>
              Get free thumbnail image of any youtube videos in Full HD(1080),
              HD (720), SD, and also in small size. It's currently supported
              formats: YouTube (HD, HQ, 1080p, 4K) videos
            </p>

            {/* Add more content as needed */}
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
