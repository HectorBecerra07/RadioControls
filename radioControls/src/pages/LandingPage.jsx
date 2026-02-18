import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import WaveCursor from '../components/WaveCursor';
import UniversalPlayer from '../components/UniversalPlayer';

const LandingPage = () => {
  return (
    <div className="bg-royal-blue-dark min-h-screen text-white">
      <WaveCursor />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-4 flex flex-col items-center text-center z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl">
          <span className="bg-neon-cyan/10 border border-neon-cyan/20 px-4 py-2 rounded-full text-neon-cyan text-sm font-black tracking-widest uppercase mb-8 inline-block shadow-[0_0_20px_rgba(0,243,255,0.1)]">
            RadiOleaControls - Audio Intelligence
          </span>
          <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
            Transforma tu <br/> <span className="text-neon-cyan italic">Experiencia</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Creamos el ambiente sonoro perfecto para que tus ventas crezcan exponencialmente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/planes" className="bg-neon-cyan text-royal-blue-dark px-12 py-6 rounded-2xl font-black text-xl hover:shadow-[0_0_40px_rgba(0,243,255,0.6)] transition-all flex items-center justify-center gap-3 hover:scale-105">
              CONTRATAR AHORA <ArrowRight className="w-6 h-6" />
            </Link>
            <Link to="/contacto" className="bg-white/5 backdrop-blur-md border border-white/10 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
              SOLICITAR COTIZACIÓN
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Mini Demo Section */}
      <section className="py-20 px-4 relative z-10 flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-2 uppercase tracking-tighter italic flex items-center justify-center gap-3">
            <Zap className="text-neon-cyan" /> Audio Demo
          </h2>
          <p className="text-gray-500 font-bold text-sm uppercase">Escucha la diferencia RadiOlea</p>
        </div>
        <UniversalPlayer streamUrl="https://stream.zeno.fm/un385d385d0uv" stationName="Demo Ambiental Mix" />
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
