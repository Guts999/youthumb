// pages/_document.js (or wherever your custom Document component is located)

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>

          {/*7searchppc ad code*/}

          <div id="7SAD156599FC152D800" data-7pub="7SAD156599FC152D800"></div>
                    <script src="https://code.adclickppc.com/7s-banner-ad.js"></script>
                    <script>
                    (function() {
                      initBannerAd(['7SAD156599FC152D800', 'banner'])
                      }())
                    </script>
                    

         {/* Google Analytics script */}
          {/* Google tag (gtag.js) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-23XRVGGWSN"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-23XRVGGWSN');
            `,
          }} />

{/* <!-- Google Tag Manager --> */}
<script dangerouslySetInnerHTML={{
__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PCRVNQP3');`,
}} />
{/* <!-- End Google Tag Manager --> */}


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
          
          <style>
            {`
              body {
                text-align: center;
                height: 100vh;
                margin: 0;
              }

              div {
                max-width: 600px;
                margin: 0 auto; /* Center the div itself */
              }
            `}
          </style>
        </Head>
        <body>

        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-PCRVNQP3"
    height="0"
    width="0"
    style={{ display: 'none', visibility: 'hidden' }}  
  ></iframe>
</noscript>


        {/* <!-- End Google Tag Manager (noscript) --> */}

          <Main />
          <NextScript />

          {/* Your additional text content */}
          <div>
            <h1>YouTube Thumbnail Downloader</h1>
            <p><strong><h2>How to Download YouTube Thumbnail in a Few Seconds</h2></strong></p>
            <p>
              <strong>A free tool for instantly grabbing and downloading any YouTube thumbnail.</strong>
            </p>
            <p>
              <strong>Add YouTube Video URL</strong><br />
              Just add the YouTube video URL in the corresponding field.
            </p>
            <p>
              <strong>Auto-Generate</strong><br />
              The YouTube video thumbnail will be generated automatically as soon as you add the URL.
            </p>
            <p>
              <strong>Download</strong><br />
              Hit the Download button to store the YouTube thumbnail image on your device in .JPG format.
            </p>
            <p>
              <strong>About YouTube Thumbnail Downloader</strong><br />
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
