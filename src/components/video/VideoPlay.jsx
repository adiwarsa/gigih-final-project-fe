import React from 'react';
import ReactPlayer from 'react-player'; // Import the ReactPlayer component

const VideoPlayer = ({ src, title }) => (
  <div className="mb-4">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <div className="relative w-full aspect-w-16 aspect-h-9">
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <ReactPlayer
          url={src} 
          controls 
          width="100%" 
          height="100%" 
          style={{ position: 'absolute', top: 0, left: 0 }} 
        />
      </div>
    </div>
  </div>
);

export default VideoPlayer;
