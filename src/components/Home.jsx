import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import VideoCard from './video/VideoCard';
import Container from './Container';
import axios from 'axios';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [videoData, setVideoData] = useState([]); // Initialize with an empty array

  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  useEffect(() => {
    axios.get('https://gigih-api-production.up.railway.app/api/videos')
      .then((response) => {
        console.log('API response:', response.data);
        setVideoData(response.data.video);
      })
      .catch((error) => {
        console.error('Error fetching video data:', error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar onSearch={handleSearch} />
      <Container>
        <div className="flex flex-wrap items-start gap-3 p-2">
          {videoData
            .filter((video) =>
              video.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((video, index) => (
              <VideoCard key={index} {...video} />
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
