import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
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
      const sortedImagePaths = Object.keys(imageFiles).sort((a, b) => {
        // Extract the number from filenames (e.g., MessageImage1.png -> 1)
        const aNum = parseInt(a.match(/MessageImage(\d+)\.png/)?.[1] || 0, 10);
        const bNum = parseInt(b.match(/MessageImage(\d+)\.png/)?.[1] || 0, 10);

        return aNum - bNum; // Ensure they are sorted correctly
      });

      const loadedImages = await Promise.all(
        config.messageGallery.map(async (galleryItem, index) => {
          const imagePath = sortedImagePaths[index];
          let Image = null;
          if (imagePath) {
            const imageModule = await imageFiles[imagePath]();
            Image = imageModule.default;
          } else {
            // Use the last available image as default if no specific image
            const lastImagePath = sortedImagePaths[sortedImagePaths.length - 1];
            if (lastImagePath) {
              const imageModule = await imageFiles[lastImagePath]();
              Image = imageModule.default;
            }
          }
          return {
            Image,
            title: galleryItem.title || 'No Title',
            description: galleryItem.description || 'No Description',
          };
        })
      );

      setPictures(loadedImages);
    };

    loadImages();
  }, []);

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
          {config.messageTitle}
        </h1>
        <Carousel>
          {pictures.map(({ Image, title, description }, index) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText={`Message image ${index + 1}`}
              title={title}
              description={description}
              size="small"
              position="right"
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
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
