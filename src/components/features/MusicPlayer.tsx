import { useRef, useEffect, useCallback, useState } from 'react';
import AudioControls from './AudioControls';
import { weddingConfig } from '@/config/wedding-config';
import { track } from 'framer-motion/client';

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export default function MusicPlayer({ isPlaying, setIsPlaying }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const playlist = weddingConfig.music.tracks;
  const currentTrack = playlist[0]
  const [hasInteracted, setHasInteracted] = useState(false);

  const trackSrc =currentTrack.src ; // replace with your own if needed
  console.log(trackSrc,"sd")
  // Load event
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlayThrough = () => {
      setIsLoaded(true);
    };

    audio.addEventListener('canplaythrough', handleCanPlayThrough);
    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, []);

  // Play/Pause logic
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !isLoaded) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          if (err.name === 'NotAllowedError' && !hasInteracted) {
            const handleInteraction = () => {
              setHasInteracted(true);
              audio.play().catch(() => setIsPlaying(false));
              window.removeEventListener('click', handleInteraction);
              window.removeEventListener('touchstart', handleInteraction);
            };
            window.addEventListener('click', handleInteraction);
            window.addEventListener('touchstart', handleInteraction);
          } else {
            setIsPlaying(false);
          }
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, isLoaded, hasInteracted, setIsPlaying]);

  const handleTogglePlayback = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying, setIsPlaying]);

  return (
    <>
      <audio ref={audioRef} src={trackSrc} preload="auto" />
      <AudioControls isPlaying={isPlaying} onToggle={handleTogglePlayback} />
    </>
  );
}
