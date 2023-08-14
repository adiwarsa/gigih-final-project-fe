import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ title, urlThumbnail, videoId}) => (
    <Link to={`/detail/${videoId}`} className="rounded overflow-hidden shadow-lg w-60 h-[28rem] mb-2 relative cursor-pointer">
        <img
          className="w-full h-full object-cover absolute top-0 left-0"
          src={urlThumbnail}
          alt="Video thumbnail"
        />
        <div className="bg-red-500 text-white text-xs font-bold p-1 ml-2 mt-3 absolute top-0 left-0 rounded">
          VIDEO
        </div>
        <div className="relative h-full">
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent text-white">
            <div className="text-white font-bold ">
              {title}
            </div>
          </div>
        </div>
    </Link>
);

export default VideoCard;
