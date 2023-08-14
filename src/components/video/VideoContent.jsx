import React from 'react';
import VideoPlay from './VideoPlay'; // Update the path

const VideoContent = () => (
  <div className="flex-grow p-4 bg-white">
    {/* Render your video player(s) here */}
    <VideoPlay/>
    {/* You can add more video players here */}
  </div>
);

export default VideoContent;