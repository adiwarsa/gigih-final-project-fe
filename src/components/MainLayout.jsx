import React, { useState, useEffect } from 'react';
import ProductSidebar from './product/ProductCardSidebar';
import VideoPlayer from './video/VideoPlay';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import CommentSection from './video/CommentSection'; // Import the CommentSection component

const MainLayout = () => {
  const { id } = useParams(); 
  const [productData, setProductData] = useState({});
  const [videoData, setVideoData] = useState({});

  useEffect(() => {
    axios.get(`https://gigih-api-production.up.railway.app/api/videos/${id}/product`)
      .then((response) => {
        console.log('Product data response:', response.data);
        setProductData(Object.values(response.data)); 
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });

    axios.get(`https://gigih-api-production.up.railway.app/api/videos/${id}`)
      .then((response) => {
        setVideoData(response.data.video);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching video data:', error);
      });
  }, [id]);

  return (
    <div className="flex h-screen bg-gray-100">
      <ProductSidebar productData={productData} />
      <div className="flex-grow p-4 bg-white flex">
      
        <div className="w-3/4 pr-4">
          <VideoPlayer
            src={videoData.link} 
            title={videoData.title} 
          />
          
        </div>
        <CommentSection videoId={id} /> 
      </div>
    </div>
  );
};

export default MainLayout;
