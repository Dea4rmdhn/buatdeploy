import React, { createContext, useState, useRef } from 'react';
import { Howl } from 'howler';

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const soundRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);

    const playMusic = (songTitle) => {
        console.log(`Attempting to play: ${songTitle}`);

    if (soundRef.current && soundRef.current.playing()) {
      soundRef.current.pause();
    }

    if (!soundRef.current || currentSong !== songTitle) {
      const songPath = getSongPath(songTitle);
        soundRef.current = new Howl({
            onloaderror: (id, error) => {
                console.error('Failed to load audio:', error);
            },

        src: [songPath],

        html5: true,
        onplay: () => {
          setIsPlaying(true);
          setCurrentSong(songTitle);
        },
        onpause: () => setIsPlaying(false),
        onend: () => {
          setIsPlaying(false);
          setCurrentSong(null);
        },
      });
      setCurrentSong(songTitle);
    }

    soundRef.current.play();
  };

  const getSongPath = (songTitle) => {
    const songMap = {
      'Cleared': '/src/assets/music/cleared.mp3',
      'Duvet': '/src/assets/music/Duvet.mp3',
      'Flawed Mangoes' : '/src/assets/music/Flawed Mangoes.mp3',
      'Broken' : '/src/assets/music/Broken.mp3',
      'Be Happy': '/src/assets/music/Be Happy.mp3',
      'Sailor Song': '/src/assets/music/Sailor Song.mp3',
      'Teeth': '/src/assets/music/teeth.mp3',
      'Endless Travel': '/src/assets/music/Endless Travel.mp3',


    };
    return songMap[songTitle] || '/src/assets/music/about you.mp3';
  };


  const pauseMusic = () => {
    if (soundRef.current && soundRef.current.playing()) {
      soundRef.current.pause();
    }
  };

  return (
    <MusicContext.Provider value={{ isPlaying, playMusic, pauseMusic, currentSong }}>

      {children}
    </MusicContext.Provider>
  );
};

export default MusicContext;

