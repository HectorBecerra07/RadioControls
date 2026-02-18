import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Music, Users, Sparkles, Building2, Coffee, Utensils, HeartPulse, Dumbbell, ShoppingBag } from 'lucide-react';

const Gallery = () => {
  const categories = [
    { 
      title: "Retail & Grandes Almacenes", 
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000", 
      span: "md:col-span-2",
      icon: <ShoppingBag className="w-6 h-6" />,
      benefit: "Aumenta el tiempo de permanencia en tienda mediante ritmos calculados.",
      details: ["Coordinación con campañas", "Zonificación por departamentos", "Publicidad instantánea"]
    },
    { 
      title: "Fitness & High Energy Gyms", 
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000", 
      span: "md:col-span-1",
      icon: <Dumbbell className="w-6 h-6" />,
      benefit: "Motivación máxima con BPMs sincronizados al entrenamiento.",
      details: ["Energía constante", "Sin micro-cortes", "Ambiente motivador"]
    },
    { 
      title: "Alta Gastronomía & Cafés", 
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000", 
      span: "md:col-span-1",
      icon: <Utensils className="w-6 h-6" />,
      benefit: "Privacidad conversacional y atmósferas relajantes.",
      details: ["Control de volumen inteligente", "Jazz & Chill curado", "Ambiente exclusivo"]
    },
    { 
      title: "Plazas & Centros Comerciales", 
      img: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80&w=1000", 
      span: "md:col-span-2",
      icon: <Building2 className="w-6 h-6" />,
      benefit: "Cobertura total en pasillos y áreas comunes con fidelidad cristalina.",
      details: ["Gestión masiva", "Anuncios de emergencia", "Programación horaria"]
    },
    { 
      title: "Hoteles & Lobbies de Lujo", 
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000", 
      span: "md:col-span-1",
      icon: <Sparkles className="w-6 h-6" />,
      benefit: "Bienvenida sensorial que define la experiencia del huésped.",
      details: ["Sonido invisible", "Elegancia acústica", "Multi-zona WiFi"]
    },
    { 
      title: "Corporativos & Oficinas", 
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000", 
      span: "md:col-span-1",
      icon: <Users className="w-6 h-6" />,
      benefit: "Mejora la productividad y reduce el estrés laboral.",
      details: ["Enfoque profundo", "Ruido blanco integrado", "Zonas de descanso"]
    },
    { 
      title: "Spas & Wellness Centers", 
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000", 
      span: "md:col-span-1",
      icon: <HeartPulse className="w-6 h-6" />,
      benefit: "Inmersión total en estados de relajación profunda.",
      details: ["Frecuencias Solfeggio", "Transiciones suaves", "Zen audio engine"]
    },
  ];

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-royal-blue-dark relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,243,255,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-neon-cyan font-black tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Casos de Aplicación
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter text-white"
          >
            Sectores que <span className="text-neon-cyan italic">Transformamos</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            No solo ponemos música; diseñamos la identidad sonora de marcas líderes en múltiples industrias. Descubre el potencial de tu espacio.
          </motion.p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${cat.span} group relative rounded-[48px] overflow-hidden bg-royal-blue border border-white/5 h-[500px] shadow-2xl transition-all hover:border-neon-cyan/30`}
            >
              {/* Image with overlay */}
              <div className="absolute inset-0">
                <img 
                  src={cat.img} 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000 ease-out" 
                  alt={cat.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-blue-dark via-royal-blue-dark/20 to-transparent transition-all group-hover:via-royal-blue-dark/40" />
              </div>

              {/* Content Container */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                {/* Icon & Category */}
                <div className="flex items-center gap-3 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="p-3 bg-neon-cyan rounded-2xl text-royal-blue-dark shadow-[0_0_20px_rgba(0,243,255,0.4)]">
                    {cat.icon}
                  </div>
                  <div className="h-px w-8 bg-white/20" />
                </div>

                {/* Main Info */}
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4 leading-none transition-colors group-hover:text-neon-cyan">
                  {cat.title}
                </h3>
                
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 transform opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {cat.benefit}
                </p>

                {/* Detailed Features (Hidden by default, shown on hover) */}
                <div className="space-y-2 transform opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                  {cat.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest text-neon-cyan/80">
                      <CheckCircle2 size={12} /> {detail}
                    </div>
                  ))}
                </div>

                {/* Animated Accent Line */}
                <div className="w-12 h-1.5 bg-neon-cyan mt-8 rounded-full transition-all duration-500 group-hover:w-32" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-12 rounded-[60px] bg-white/5 border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
          <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tighter italic text-white">¿No ves tu sector aquí?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">Nuestra tecnología es adaptable a cualquier espacio que requiera una atmósfera controlada y profesional.</p>
          <button className="bg-neon-cyan text-royal-blue-dark px-10 py-5 rounded-2xl font-black text-lg hover:shadow-[0_0_40px_rgba(0,243,255,0.5)] transition-all uppercase">Solicitar Consultoría Acústica</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;