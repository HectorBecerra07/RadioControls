import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, ListMusic, Radio } from 'lucide-react';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [streamUrl, setStreamUrl] = useState('');
  const [error, setError] = useState('');
  const audioRef = useRef(new Audio());

  const defaultStreams = [
    { name: 'Ambient Chill', url: 'https://stream.zeno.fm/0r0xa854rp8uv' }, 
    { name: 'Lo-Fi Beats', url: 'https://stream.zeno.fm/f3wvbbqmdg8uv' },
    { name: 'Smooth Jazz', url: 'https://stream.zeno.fm/un385d385d0uv' },
  ];

  useEffect(() => {
    const audio = audioRef.current;
    
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => {
        setError('Unable to play stream. Check URL or CORS restrictions.');
        setIsPlaying(false);
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);
    
    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
      audio.pause();
    };
  }, []);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    if (!streamUrl) {
        setError('Please enter a stream URL or select a preset.');
        return;
    }
    setError('');
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.src = streamUrl;
      audioRef.current.play().catch(e => {
        console.error("Play error:", e);
        setError('Error playing stream. It might be offline or blocked.');
      });
    }
  };

  const handlePresetSelect = (url) => {
    setStreamUrl(url);
    audioRef.current.src = url;
    setError('');
    // Auto play on select
    audioRef.current.play().catch(e => {
        console.error(e);
        setError('Error connecting to preset stream.');
    });
  };

  return (
    <section id="player-section" className="min-h-screen py-20 px-4 bg-gray-900/50 backdrop-blur-sm relative z-10 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-12 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
        Stream Controller
      </h2>
      
      <div className="bg-gray-800/80 p-8 rounded-3xl shadow-2xl w-full max-w-3xl border border-gray-700 relative overflow-hidden backdrop-blur-md">
        
        {/* Visualizer Background */}
        <div className="absolute inset-0 flex items-end justify-center gap-1 opacity-20 pointer-events-none pb-0 h-full">
             {[...Array(30)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-3 bg-cyan-500 rounded-t-sm transition-all duration-100 ease-in-out`}
                  style={{ 
                    height: isPlaying ? `${Math.random() * 60 + 10}%` : '5%',
                    opacity: isPlaying ? 0.8 : 0.2,
                    transitionDelay: `${i * 0.02}s`
                  }} 
                />
             ))}
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8">
            
            {/* Input Section */}
            <div className="w-full">
                <label className="block text-sm font-medium text-gray-400 mb-2">Stream URL</label>
                <div className="flex gap-2">
                    <input 
                        type="text" 
                        value={streamUrl}
                        onChange={(e) => setStreamUrl(e.target.value)}
                        placeholder="Paste your station URL here..."
                        className="flex-1 bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder-gray-600"
                    />
                </div>
                {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-8 py-4">
                <button 
                    onClick={togglePlay}
                    className={`w-24 h-24 rounded-full flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 ${isPlaying ? 'bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_40px_rgba(6,182,212,0.4)]' : 'bg-gray-700 hover:bg-gray-600 shadow-lg'}`}
                >
                    {isPlaying ? <Pause className="w-10 h-10 text-white fill-current" /> : <Play className="w-10 h-10 text-white fill-current ml-2" />}
                </button>
            </div>

            {/* Volume */}
            <div className="flex items-center gap-4 w-full max-w-xs bg-gray-900/50 p-3 rounded-full border border-gray-700">
                <button onClick={() => setVolume(volume === 0 ? 0.5 : 0)}>
                    {volume === 0 ? <VolumeX className="text-gray-400" /> : <Volume2 className="text-cyan-400" />}
                </button>
                <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.01" 
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-full accent-cyan-500 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
            </div>

            {/* Presets */}
            <div className="w-full mt-6 pt-6 border-t border-gray-700/50">
                <h3 className="text-sm font-semibold mb-4 flex items-center gap-2 text-gray-400 uppercase tracking-wider">
                    <ListMusic className="w-4 h-4"/> Featured Channels
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {defaultStreams.map((stream, idx) => (
                        <button 
                            key={idx}
                            onClick={() => handlePresetSelect(stream.url)}
                            className="bg-gray-900/80 p-3 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-all border border-gray-800 hover:border-cyan-500/50 group text-left"
                        >
                            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors shrink-0">
                                <Radio className="w-4 h-4 text-cyan-400" />
                            </div>
                            <div className="overflow-hidden">
                                <p className="font-medium text-white text-sm truncate">{stream.name}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Player;
