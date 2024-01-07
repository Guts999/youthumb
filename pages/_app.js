import "../styles/index.css";
import { Fragment, useEffect } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  // Add the ad code using useEffect to ensure it runs on the client side
  useEffect(() => {
    // Check if initBannerAd is defined to avoid potential errors
    if (typeof initBannerAd === 'function') {
      initBannerAd(['7SAD156599FC152D800', 'banner']);
    } else {
      console.error("initBannerAd is not defined. Ad functionality might not work.");
      // You can provide a fallback behavior or display a message to the user
    }
  }, []);  

  return (
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Download high-quality thumbnails from YouTube videos."
        canonical="https://your-website-url.com"
        openGraph={{
          url: "https://your-website-url.com",
          title: "Youtube Thumbnail Downloader",
          description: "Download high-quality thumbnails from YouTube videos.",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />

      {/* 7searchppc ad code */}
      <div id="7SAD156599FC152D800" data-7pub="7SAD156599FC152D800"></div>
      <script src="https://code.adclickppc.com/7s-banner-ad.js"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              initBannerAd(['7SAD156599FC152D800', 'banner'])
            }())
          `,
        }}
      />

      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
