import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageCircle, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { 
      q: "¿Cumplen con derechos de autor?", 
      a: "Totalmente. Nuestras licencias AMPROFON cubren el cumplimiento legal para que tu marca opere sin riesgos de multas por derechos de autor en todo el territorio nacional.",
      icon: <ShieldCheck className="w-5 h-5 text-neon-cyan" />
    },
    { 
      q: "¿Cómo se instala el sistema?", 
      a: "Es un sistema 100% basado en la nube. Te proporcionamos links personalizados por sucursal que funcionan en cualquier navegador moderno (Chrome, Edge, Safari). No requieres hardware costoso, solo una PC o Tablet conectada a tus altavoces.",
      icon: <Zap className="w-5 h-5 text-neon-cyan" />
    },
    { 
      q: "¿Puedo poner anuncios de mi propia marca?", 
      a: "Sí, todos nuestros planes incluyen la capacidad de integrar spots publicitarios y avisos institucionales. Estos se programan para sonar con la frecuencia que tú decidas entre las pistas musicales.",
      icon: <MessageCircle className="w-5 h-5 text-neon-cyan" />
    },
    { 
      q: "¿Qué sucede ante fallos de internet?", 
      a: "Nuestra tecnología Buffer-Pro almacena hasta 15 minutos de música en caché local. Si el internet sufre un micro-corte, la música sigue sonando sin interrupciones.",
      icon: <Sparkles className="w-5 h-5 text-neon-cyan" />
    },
    { 
      q: "¿Tienen soporte técnico especializado?", 
      a: "Contamos con un equipo de ingenieros de audio disponibles 24/7 para asegurar que tu atmósfera sonora nunca se detenga.",
      icon: <HelpCircle className="w-5 h-5 text-neon-cyan" />
    },
    { 
      q: "¿Qué garantía de ventas ofrecen?", 
      a: "Nuestra promesa es clara: si tras implementar RadiOleaControls no notas un incremento de al menos el 15% en tus ventas medibles (en comparación con periodos similares), te devolvemos íntegramente tu inversión de suscripción.",
      icon: <Sparkles className="w-5 h-5 text-neon-cyan" />
    }
  ];

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-royal-blue-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] -ml-48 -mb-48" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-neon-cyan font-black tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Preguntas Frecuentes
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter"
          >
            Centro de <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple italic">Ayuda</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Resolvemos tus dudas sobre legalidad, tecnología y cómo transformar tu negocio con el sonido correcto.
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 + 0.3 }}
              className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                activeFaq === i 
                  ? 'bg-white/10 border-neon-cyan/30 shadow-[0_0_30px_rgba(0,243,255,0.05)]' 
                  : 'bg-white/5 border-white/5 hover:border-white/10'
              }`}
            >
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <div className={`p-3 rounded-2xl transition-colors duration-500 ${activeFaq === i ? 'bg-neon-cyan text-royal-blue-dark' : 'bg-white/5 text-neon-cyan'}`}>
                    {faq.icon}
                  </div>
                  <span className={`font-bold text-lg md:text-xl transition-colors ${activeFaq === i ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                    {faq.q}
                  </span>
                </div>
                <div className={`shrink-0 ml-4 transition-transform duration-500 ${activeFaq === i ? 'rotate-180 text-neon-cyan' : 'text-gray-600'}`}>
                  <ChevronDown size={24} />
                </div>
              </button>
              
              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-8 md:ml-[76px] text-gray-400 text-base md:text-lg leading-relaxed border-t border-white/5 pt-6">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 p-10 md:p-12 rounded-[48px] bg-gradient-to-br from-royal-blue to-royal-blue-dark border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50" />
          <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter text-white">¿Aún tienes dudas?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">Nuestros expertos en ingeniería de audio están disponibles para asesorarte personalmente sin compromiso.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="bg-neon-cyan text-royal-blue-dark px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all">
              Hablar con un Experto
            </Link>
            <a href="https://wa.me/tu_numero" target="_blank" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
              WhatsApp Directo
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;