import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Download high-quality thumbnails from YouTube videos. Just paste the URL of the thumbnail video in the below input and click Download Thumbnails."
        canonical="https://www.youtubethumbsdownload.com/"
        openGraph={{
          url: "https://www.youtubethumbsdownload.com/",
          title: "Youtube Thumbnail Downloader",
          description: "Download high-quality thumbnails from YouTube videos. Just paste the URL of the thumbnail video in the below input and click Download Thumbnails",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
