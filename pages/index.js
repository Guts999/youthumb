import React, { useState, useEffect } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    let countdownTimer;
    if (timer > 0) {
      countdownTimer = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(countdownTimer);
      getYouTubeThumbnail(videoURL);
    }

    return () => clearInterval(countdownTimer);
  }, [timer, videoURL]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setTimer(0); // Reset timer
    } else {
      setThumbnailOptions([]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Youtube Thumbnail Downloader - Download High-Quality Thumbnails from YouTube Videos
        </h1>
        <p className="text-gray-600">
          Use our free YouTube Thumbnail Downloader to instantly grab and download high-quality thumbnails from any YouTube video. Just paste the video URL and download the thumbnails in HD JPG format.
        </p>
      </header>
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Paste YouTube URL here..."
          value={videoURL}
          onChange={(e) => {
            setVideoURL(e.target.value);
            setTimer(10); // Reset timer when user pastes a new URL
          }}
        />
        <button
          className="btn-blue mt-2"
          onClick={() => {
            if (timer === 0) {
              getYouTubeThumbnail(videoURL);
            }
          }}
          disabled={timer > 0}
        >
          {timer > 0 ? `Generating Thumbnail in ${timer} seconds` : "Download Thumbnails"}
        </button>
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <a href={option.url} target="_blank" rel="noopener noreferrer">
                  <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
