import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, MessageSquare, TrendingUp } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-royal-blue-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-6">Nuestros <span className="text-neon-cyan">Servicios</span></h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Tecnología sonora diseñada para maximizar el potencial de tu espacio comercial.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Psicología del Sonido", desc: "Utilizamos ingeniería aplicada para crear listas de reproducción que influyen positivamente en el comportamiento de compra y mejoran el ambiente laboral.", icon: <Zap className="w-8 h-8"/> },
            { title: "AMPROFON Legal", desc: "Gestión integral de licencias de derechos de autor. Protegemos tu marca contra multas y problemas legales relacionados con la música pública.", icon: <ShieldCheck className="w-8 h-8"/> },
            { title: "Publicidad Localizada", desc: "Integramos tus mensajes promocionales y anuncios de marca de forma orgánica en el flujo musical de cada sucursal.", icon: <MessageSquare className="w-8 h-8"/> },
            { title: "Control Centralizado", desc: "Administra todas tus tiendas desde un solo panel. Asigna diferentes géneros o mensajes según la zona geográfica o el horario.", icon: <TrendingUp className="w-8 h-8"/> },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-12 rounded-[40px] bg-royal-blue border border-white/5 hover:border-neon-cyan/30 transition-all group"
            >
              <div className="w-16 h-16 bg-neon-cyan/10 rounded-2xl flex items-center justify-center text-neon-cyan mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-3xl font-bold mb-6 text-white">{item.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
