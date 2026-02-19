import React from 'react';
import { motion } from 'framer-motion';
import { Music, Radio } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <Radio className="w-24 h-24 text-light-accent dark:text-dark-accent mx-auto mb-4 animate-pulse" />
        <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-light-accent to-blue-600 dark:from-dark-accent dark:to-purple-600 mb-4">
          RadiOleaControls
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Música ambiental para cada espacio. Controla la atmósfera de tu entorno con transmisión continua.
        </p>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => document.getElementById('player-section')?.scrollIntoView({ behavior: 'smooth' })}
        className="px-8 py-4 bg-gradient-to-r from-light-accent to-blue-600 dark:from-cyan-500 dark:to-blue-600 rounded-full text-white dark:text-black text-lg font-semibold shadow-lg hover:shadow-light-accent/50 dark:hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
      >
        <Music className="w-5 h-5" />
        Start Listening
      </motion.button>

      <div className="absolute bottom-10 animate-bounce">
        <svg 
          className="w-6 h-6 text-gray-400 dark:text-gray-500" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
