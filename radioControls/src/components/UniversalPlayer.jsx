import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { Play, Square, Volume2, VolumeX, Radio, Activity, Loader2 } from 'lucide-react';

const UniversalPlayer = ({ streamUrl, stationName = "Estación RadiOlea" }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, loading, playing, error
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    let hls;
    if (streamUrl && streamUrl.includes('.m3u8')) {
      if (Hls.isSupported()) {
        hls = new Hls({ enableWorker: true, lowLatencyMode: true });
        hls.loadSource(streamUrl);
        hls.attachMedia(audioRef.current);
        hls.on(Hls.Events.MANIFEST_PARSED, () => setStatus('ready'));
        hls.on(Hls.Events.ERROR, () => setStatus('error'));
      } else if (audioRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        audioRef.current.src = streamUrl;
      }
    } else {
      audioRef.current.src = streamUrl;
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, [streamUrl]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setStatus('idle');
    } else {
      setStatus('loading');
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setStatus('playing');
        })
        .catch(() => setStatus('error'));
    }
  };

  return (
    <div className="bg-royal-blue-dark/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 w-full max-w-xl shadow-2xl relative overflow-hidden">
      {/* Visual Feedback Overlay */}
      {status === 'playing' && (
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="flex items-end justify-center h-full gap-1">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i} 
                className="w-full bg-neon-cyan animate-pulse" 
                style={{ height: `${Math.random() * 100}%`, transition: 'height 0.2s' }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-2xl ${status === 'playing' ? 'bg-neon-cyan/20 animate-pulse' : 'bg-white/5'}`}>
              <Radio className={`w-8 h-8 ${status === 'playing' ? 'text-neon-cyan' : 'text-gray-400'}`} />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl">{stationName}</h3>
              <p className="text-gray-400 text-sm flex items-center gap-2">
                {status === 'playing' ? (
                  <><Activity className="w-3 h-3 text-neon-green" /> En vivo</>
                ) : status === 'loading' ? (
                  <><Loader2 className="w-3 h-3 animate-spin" /> Conectando...</>
                ) : (
                  'Listo para transmitir'
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <button
            onClick={togglePlay}
            className={`w-24 h-24 rounded-full flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 ${
              status === 'playing' 
              ? 'bg-neon-cyan text-royal-blue shadow-[0_0_40px_rgba(0,243,255,0.4)]' 
              : 'bg-white text-royal-blue hover:bg-gray-200'
            }`}
          >
            {status === 'loading' ? (
              <Loader2 className="w-10 h-10 animate-spin" />
            ) : status === 'playing' ? (
              <Square className="w-10 h-10 fill-current" />
            ) : (
              <Play className="w-10 h-10 fill-current ml-2" />
            )}
          </button>

          <div className="w-full space-y-2">
            <div className="flex justify-between text-xs text-gray-500 font-mono">
              <span>VOLUMEN</span>
              <span>{Math.round(volume * 100)}%</span>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => setIsMuted(!isMuted)}>
                {isMuted || volume === 0 ? <VolumeX className="text-red-400" /> : <Volume2 className="text-neon-cyan" />}
              </button>
              <input 
                type="range" 
                min="0" max="1" step="0.01" 
                value={volume}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setVolume(val);
                  audioRef.current.volume = val;
                }}
                className="w-full accent-neon-cyan h-1.5 bg-royal-blue rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <audio ref={audioRef} muted={isMuted} />
    </div>
  );
};

export default UniversalPlayer;
