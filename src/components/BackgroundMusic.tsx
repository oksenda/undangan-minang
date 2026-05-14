import { useState, useEffect, useRef, useCallback } from 'react';
import { weddingDataV2 } from '../data/weddingV2';
import './BackgroundMusic.css';

interface BackgroundMusicProps {
  shouldPlay: boolean;
  onPlay: () => void;
}

export function BackgroundMusic({ shouldPlay, onPlay }: BackgroundMusicProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Get music path from wedding data
  const musicPath = weddingDataV2.assets.musikLatar;

  // Initialize audio element
  const initAudio = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio(musicPath);
      audio.loop = true;
      audio.volume = volume;
      audio.preload = 'auto';
      audioRef.current = audio;
    }
  }, [musicPath, volume]);

  // Watch for shouldPlay prop change and trigger playback
  useEffect(() => {
    if (shouldPlay) {
      initAudio();
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          onPlay(); // Notify parent that play started
        }).catch(err => {
          console.log('Autoplay was prevented, user must interact:', err);
          // If autoplay fails, the user can still click the music button
        });
      }
    }
  }, [shouldPlay, initAudio, onPlay]);

  // Update volume when it changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    initAudio();

    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(e => {
        console.log('Audio playback failed:', e);
      });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="background-music">
      <button
        className={`music-button ${isPlaying ? 'playing' : ''}`}
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>

      {isPlaying && (
        <div className="volume-control">
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="volume-slider"
          />
          <button
            className="mute-button"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? '🔇' : '🔊'}
          </button>
        </div>
      )}
    </div>
  );
}
