import React, { useContext } from 'react';
import { ArrowRight, ArrowLeft, Message, Image, Music, Heart } from './icons';
import { useNavigate } from 'react-router-dom';
import config from './config';
import MusicContext from '../context/MusicContext';
import '../index.css';


function Recap() {
  const navigate = useNavigate();
  const { isPlaying, playMusic, pauseMusic } = useContext(MusicContext);



  const handleNavigation = (path) => {
    navigate(path);
  };


  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm sm:max-w-md text-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-white drop-shadow-lg">
          {config.recapTitle}
        </h1>

        {/* Play Music Button */}
        <button
          className={`w-full mb-8 px-4 py-2 flex justify-center items-center gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border rounded-lg transition-colors ${
            isPlaying ? 'bg-pink-500/50 border-pink-500' : 'bg-white/20 border-white/50'
          }`}
          onClick={() => {
            if (isPlaying) {
              pauseMusic();
            } else {
              playMusic('about you'); // Default song
            }
          }}


        >
          <Music color="#C67593" /> {isPlaying ? 'Pause Musik' : 'Tekan Dulu Mas'}
        </button>

        <div className="flex flex-wrap justify-center gap-10 mb-12"></div>
        <div className="flex flex-wrap justify-center gap-10 mb-12">
          {config.recapSections.map(({ label, path, icon }) => {
            const IconComponent = { Message, Image, Music }[icon];
            return (
              <div key={label} className="flex flex-col items-center">
                <button
                  className="relative group w-20 h-20 sm:w-24 sm:h-24"
                  onClick={() => handleNavigation(path)}
                >
                  <Heart className="absolute inset-0 w-full h-full z-0 shadow-svg" />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <IconComponent color="#C67593" />
                  </div>
                </button>
                <span className="mt-4 text-sm font-medium text-white animate-bounce">
                  {config.clickMeText}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between w-full mb-4">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
            onClick={() => handleNavigation(config.recapPreviousPage)}
          >
            <ArrowLeft /> {config.previousPageText}
          </button>
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
            onClick={() => handleNavigation(config.recapNextPage)}
          >
            {config.nextPageText} <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Recap;

