import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import WaveCursor from '../components/WaveCursor';
import UniversalPlayer from '../components/UniversalPlayer';

const LandingPage = () => {
  return (
    <div className="bg-royal-blue-dark min-h-screen text-white">
      <WaveCursor />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 flex flex-col items-center text-center z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl">
          <span className="bg-neon-cyan/10 border border-neon-cyan/20 px-4 py-2 rounded-full text-neon-cyan text-xs font-black tracking-widest uppercase mb-6 inline-block shadow-[0_0_20px_rgba(0,243,255,0.1)]">
            RadiOleaControls - Audio Intelligence
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tighter uppercase">
            Transforma tu <br/> <span className="text-neon-cyan italic">Experiencia</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Creamos el ambiente sonoro perfecto para que tus ventas crezcan exponencialmente con tecnología de streaming de alta fidelidad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/planes" className="bg-neon-cyan text-royal-blue-dark px-8 py-4 rounded-xl font-black text-base hover:shadow-[0_0_40px_rgba(0,243,255,0.6)] transition-all flex items-center justify-center gap-3 hover:scale-105">
              CONTRATAR AHORA <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contacto" className="bg-white/5 backdrop-blur-md border border-white/10 px-8 py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-all">
              SOLICITAR COTIZACIÓN
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. DEMO AUDIO SECTION - PRO DESIGN */}
      <section id="demo" className="py-32 px-4 relative z-10 overflow-hidden">
        {/* Abstract Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-royal-blue/20 rounded-full blur-[160px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
          <div className="text-center mb-16 space-y-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-neon-cyan/10 border border-neon-cyan/20 px-4 py-1.5 rounded-full text-neon-cyan text-xs font-black uppercase tracking-[0.2em]"
            >
              <Activity size={14} className="animate-pulse" /> Ingeniería Sonora Pro
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
              Escucha tu <span className="text-neon-cyan">Próxima Venta</span>
            </h2>
            <p className="text-gray-400 font-bold max-w-xl mx-auto text-sm md:text-lg">
              Prueba nuestro motor de ambiente inteligente. Sonido puro, legal y diseñado para convertir visitantes en clientes.
            </p>
          </div>

          <UniversalPlayer streamUrl="/audios/Tutiendahabla.mp3" stationName="Demo: Tu tienda habla" />
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500">
            <div className="flex flex-col items-center gap-2">
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Mastering</div>
              <div className="text-sm font-bold text-white">Digital Pro</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Sync</div>
              <div className="text-sm font-bold text-white">Cloud Low Latency</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Audio</div>
              <div className="text-sm font-bold text-white">High Fidelity</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Network</div>
              <div className="text-sm font-bold text-white">Buffer Pro</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access to other pages */}
      <section className="py-20 px-4 max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/servicios" className="group bg-royal-blue border border-white/5 p-12 rounded-[40px] hover:border-neon-cyan/30 transition-all">
          <h3 className="text-2xl font-black mb-4 uppercase group-hover:text-neon-cyan transition-colors">Nuestros Servicios</h3>
          <p className="text-gray-400">Ingeniería, licencias y publicidad para tu negocio.</p>
        </Link>
        <Link to="/galeria" className="group bg-royal-blue border border-white/5 p-12 rounded-[40px] hover:border-neon-cyan/30 transition-all">
          <h3 className="text-2xl font-black mb-4 uppercase group-hover:text-neon-cyan transition-colors">Galería</h3>
          <p className="text-gray-400">Mira cómo lucen los espacios RadiOlea.</p>
        </Link>
        <Link to="/faq" className="group bg-royal-blue border border-white/5 p-12 rounded-[40px] hover:border-neon-cyan/30 transition-all">
          <h3 className="text-2xl font-black mb-4 uppercase group-hover:text-neon-cyan transition-colors">Ayuda / FAQ</h3>
          <p className="text-gray-400">Resolvemos todas tus dudas legales y técnicas.</p>
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
