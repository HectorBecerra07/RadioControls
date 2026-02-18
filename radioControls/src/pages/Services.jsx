import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, MessageSquare, TrendingUp, ArrowRight, Radio } from 'lucide-react';

const services = [
  {
    icon: <Zap />,
    title: "Psicología del Sonido",
    description: "Ingeniería de audio para crear listas de reproducción que influyen positivamente en el comportamiento de compra y mejoran el ambiente laboral.",
  },
  {
    icon: <ShieldCheck />,
    title: "AMPROFON Legal",
    description: "Gestión integral de licencias de derechos de autor. Protegemos tu marca contra multas y problemas legales relacionados con la música.",
  },
  {
    icon: <MessageSquare />,
    title: "Publicidad Localizada",
    description: "Integramos tus mensajes promocionales y anuncios de forma orgánica en el flujo musical de cada sucursal para un marketing efectivo.",
  },
  {
    icon: <TrendingUp />,
    title: "Control Centralizado",
    description: "Administra todas tus tiendas desde un solo panel. Asigna diferentes géneros o mensajes según la zona geográfica o el horario.",
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-royal-blue-dark text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] z-0"></div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-royal-blue-dark bg-[radial-gradient(#00f3ff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h2 className="text-sm font-bold text-neon-cyan uppercase tracking-[0.3em] mb-4">Soluciones Integrales</h2>
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
              Nuestros <span className="text-neon-cyan italic">Servicios</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Tecnología sonora de vanguardia diseñada para transformar y maximizar el potencial de tu espacio comercial.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative flex flex-col bg-royal-blue/80 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-neon-cyan/50 hover:shadow-2xl hover:shadow-neon-cyan/10"
              >
                <div className="p-8 flex-grow">
                  <div className="w-16 h-16 flex items-center justify-center bg-royal-blue-dark rounded-2xl mb-6 border-2 border-neon-cyan/50 text-neon-cyan group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    {React.cloneElement(service.icon, { className: 'w-8 h-8' })}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
                <div className="px-8 py-4 bg-royal-blue-dark/50 text-neon-cyan flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider">Saber más</span>
                  <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-24 text-center"
          >
            <div className="inline-block bg-royal-blue/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-neon-cyan to-neon-purple rounded-2xl shadow-[0_0_20px_rgba(0,243,255,0.3)]">
                  <Radio className="w-10 h-10 text-royal-blue-dark" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">¿Listo para transformar tu negocio?</h3>
                  <p className="text-gray-400 mb-6 max-w-md">Descubre cómo nuestra tecnología de audio puede impulsar tus ventas y mejorar la experiencia de tus clientes.</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-neon-cyan text-royal-blue-dark px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all"
                  >
                    Contactar a un experto
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Services;
