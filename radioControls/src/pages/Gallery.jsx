import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const categories = [
    { title: "Retail & Moda", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-2" },
    { title: "Fitness & Gyms", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-1" },
    { title: "Restauración", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-1" },
    { title: "Plazas Comerciales", img: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-2" },
  ];

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-royal-blue-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white">Ambientes <span className="text-neon-cyan">RadiOlea</span></h1>
          <p className="text-xl text-gray-400">Descubre cómo transformamos distintos sectores comerciales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[1200px] md:h-[800px]">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`${cat.span} group relative rounded-[40px] overflow-hidden bg-royal-blue border border-white/10`}
            >
              <img 
                src={cat.img} 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                alt={cat.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-blue-dark via-transparent to-transparent p-12 flex flex-col justify-end">
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter">{cat.title}</h3>
                <div className="w-12 h-1 bg-neon-cyan mt-4 group-hover:w-24 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
