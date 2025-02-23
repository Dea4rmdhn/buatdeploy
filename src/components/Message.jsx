import React, { useState, useEffect } from 'react';
import { ImageCard } from './ImageCard';
import { ArrowLeft } from './icons';
import { useNavigate } from 'react-router-dom';
import config from './config';


// Dynamically import only the required message images
const imageFiles = import.meta.glob('../assets/MessageImage*.png');

function Message() {
  const navigate = useNavigate(); 
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
  const loadImages = async () => {
    try {

      const loadedImages = await Promise.all(
        Object.keys(imageFiles)
          .sort((a, b) => {
            // Extract the number from filenames (e.g., MessageImage1.png -> 1)
            const aNum = parseInt(a.match(/MessageImage(\d+)\.png/)?.[1] || 0, 10);
            const bNum = parseInt(b.match(/MessageImage(\d+)\.png/)?.[1] || 0, 10);
        
            return aNum - bNum; // Ensure they are sorted correctly
          })
          .slice(0, config.messageGallery.length) // Only take as many images as needed
          .map(async (path, index) => {
            const imageModule = await imageFiles[path]();
            return {
              Image: imageModule.default,
              title: config.messageGallery[index]?.title || 'No Title',
              description: config.messageGallery[index]?.description || 'No Description',
            };
          })
      );

      const validPictures = loadedImages.filter((picture) => picture !== null); // Remove null entries
      setPictures(validPictures);

    } catch (error) {
        console.error("Error loading images:", error);
    }
    };


    loadImages();
  }, []);

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          {config.messageTitle}
        </h1>
        {pictures.map(({ Image, title, description }, index) => (
          <div key={index} className="mb-8">
            <ImageCard
              imageUrl={Image}
              altText={`Message image ${index + 1}`}
              title={title}
              description={description}
              size="small"
              position="right"
            />
          </div>
        ))}


        <div className="flex justify-center w-full mt-8">
          <button
            className="px-6 py-3 flex justify-center items-center bg-gray-800 gap-2 hover:bg-gray-700 text-white text-sm font-medium border border-gray-700 rounded-lg transition-colors"
            onClick={() => navigate(config.recapRedirectPath)}
          >
            <ArrowLeft /> {config.previousPageText}
          </button>
        </div>

      </div>
    </div>
  );
}

export default Message;
