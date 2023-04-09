import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import "./frontend.css";

const apiKey = process.env.apikey //dotenv file in file structure. Also bundled by vite in the config file

const Frontend = ({ type }) => {
  const [videoList, setVideoList] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [completedVideos, setCompletedVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${type}&type=video&key=${apiKey}`
      );
      const json = await response.json();
      setVideoList(json.items);
    };
    fetchVideos();
  }, [type]);

  const handleVideoEnd = (videoId) => {
    setCompletedVideos([...completedVideos, videoId]);
  };

  const handleVideoPlay = (videoId) => {
    setActiveVideo(videoId);
  };

  const renderVideoList = () => {
    return videoList.map((video) => (
      <div
        className={`tutorial-video ${
          activeVideo === video.id.videoId ? "active" : ""
        } ${completedVideos.includes(video.id.videoId) ? "completed" : ""}`}
        key={video.id.videoId}
        onClick={() => handleVideoPlay(video.id.videoId)}
      >
        <div className="thumbnail-container">
          <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
          {completedVideos.includes(video.id.videoId) && (
            <div className="completed-overlay">
              <i className="fas fa-check"></i>
            </div>
          )}
        </div>
        <p>{video.snippet.title}</p>
      </div>
    ));
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="tutorial-container">
      <div className="tutorial-list">
        <h2>Tutorial List</h2>
        <ul>
          <li onClick={() => setType("html")}>HTML Tutorial</li>
          <li onClick={() => setType("css")}>CSS Tutorial</li>
          <li onClick={() => setType("reactjs")}>ReactJS Tutorial</li>
        </ul>
      </div>
      <div className="tutorial-videos">
        <div className="video-list">{renderVideoList()}</div>
        <div className="video-player">
          {activeVideo && (
            <YouTube
              videoId={activeVideo}
              opts={opts}
              onEnd={() => handleVideoEnd(activeVideo)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
