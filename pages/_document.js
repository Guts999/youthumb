// pages/_document.js (or wherever your custom Document component is located)

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
            <p>How to Download YouTube Thumbnail in a Few Seconds</p>
            <p>
              A free tool for instantly grabbing and downloading any YouTube thumbnail.
            </p>
            <p>
              Add YouTube Video URL
            </p>
            <p>
              Just add the YouTube video URL in the corresponding field.
            </p>
            <p>
              Auto-Generate
            </p>
            <p>
              The YouTube video thumbnail will be generated automatically as soon as you add the URL.
            </p>
            <p>
              Download
            </p>
            <p>
              Hit the Download button to store the YouTube thumbnail image on your device in .JPG format.
            </p>
            <p>
              About YouTube Thumbnail Downloader
            </p>
            <p>
              The video thumbnail that’s attached to the video on such platforms as YouTube is the face of the video and can play an important role in a user's decision to click on it. Very often you might need the thumbnail of a video separately for a variety of uses: to make a collage of different video thumbnails for your blog post, design a cover image for your channel using various video thumbnails, use it in a social media post in case it’s not generated automatically, and so on.
            </p>
            <p>
              In any case, it’s great to have a tool that allows quickly grabbing and downloading the thumbnail on your device. Our YouTube Thumbnail Downloader does exactly that. It allows you to generate the thumbnail of any YouTube video and download it in just a few seconds.
            </p>
            <p>
              That’s it. You have the video thumbnail and can use it anywhere. However, some images may be subject to copyright, so make sure to get this aspect sorted before using the image publicly. You might need to ask for the author’s permission, provide an attribution, and so on. Enjoy!
            </p>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
