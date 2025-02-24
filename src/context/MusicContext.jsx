import React, { createContext, useState, useRef } from 'react';
import { Howl } from 'howler';

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const soundRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);

  const playMusic = (songTitle) => {
    if (soundRef.current && soundRef.current.playing()) {
      soundRef.current.pause();
    }

    if (!soundRef.current || currentSong !== songTitle) {
      const songPath = getSongPath(songTitle);
      soundRef.current = new Howl({
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
      'Cleared': '/cleared.mp3',
      'Duvet': '/Duvet.mp3',
      'Flawed Mangoes': '/Flawed Mangoes.mp3',
      'Broken': '/Broken.mp3',
      'Be Happy': '/Be Happy.mp3',
      'Sailor Song': '/Sailor Song.mp3',
      'Teeth': '/teeth.mp3',
      'Endless Travel': '/Endless Travel.mp3',




    };
    return songMap[songTitle] || '/about you.mp3';


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
