import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { q: "¿Cumplen con derechos de autor?", a: "Totalmente. Nuestras licencias AMPROFON cubren el cumplimiento legal para que tu marca opere sin riesgos de multas por derechos de autor en todo el territorio nacional." },
    { q: "¿Cómo se instala el sistema?", a: "Es un sistema 100% basado en la nube. Te proporcionamos links personalizados por sucursal que funcionan en cualquier navegador moderno (Chrome, Edge, Safari). No requieres hardware costoso, solo una PC o Tablet conectada a tus altavoces." },
    { q: "¿Puedo poner anuncios de mi propia marca?", a: "Sí, todos nuestros planes incluyen la capacidad de integrar spots publicitarios y avisos institucionales. Estos se programan para sonar con la frecuencia que tú decidas entre las pistas musicales." },
    { q: "¿Qué sucede ante fallos de internet?", a: "Nuestra tecnología Buffer-Pro almacena hasta 15 minutos de música en caché local. Si el internet sufre un micro-corte, la música sigue sonando sin interrupciones." },
    { q: "¿Tienen soporte técnico especializado?", a: "Contamos con un equipo de ingenieros de audio disponibles 24/7 para asegurar que tu atmósfera sonora nunca se detenga." },
    { q: "¿Qué garantía de ventas ofrecen?", a: "Nuestra promesa es clara: si tras implementar RadiOleaControls no notas un incremento de al menos el 15% en tus ventas medibles (en comparación con periodos similares), te devolvemos íntegramente tu inversión de suscripción." }
  ];

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-royal-blue-dark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-6 italic">Centro de <span className="text-neon-cyan">Ayuda</span></h1>
          <p className="text-xl text-gray-400">Todo lo que necesitas saber sobre RadiOleaControls.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-royal-blue border border-white/5 rounded-[32px] overflow-hidden transition-all hover:border-white/10 shadow-xl"
            >
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left font-bold text-2xl group transition-all"
              >
                <span className="pr-8">{faq.q}</span>
                <div className={`p-2 rounded-xl transition-all ${activeFaq === i ? 'bg-neon-cyan text-royal-blue-dark rotate-180' : 'bg-white/5 text-neon-cyan group-hover:bg-white/10'}`}>
                  <HelpCircle className="w-6 h-6" />
                </div>
              </button>
              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    className="px-8 pb-8 text-gray-400 text-lg leading-relaxed"
                  >
                    <div className="pt-4 border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
