import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, ShieldCheck } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-royal-blue-dark relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-neon-cyan font-black tracking-[0.3em] uppercase text-xs mb-3 block"
          >
            Contacto Directo
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase"
          >
            Hagamos sonar <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">tu éxito</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Nuestro equipo de ingenieros de audio está listo para transformar tu espacio comercial. Respuesta garantizada en menos de 2 horas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            {[
              { 
                icon: <Mail className="w-6 h-6" />, 
                label: "Correo Electrónico", 
                value: "hola@radioleacontrols.com",
                desc: "Consultas generales y soporte técnico.",
                color: "text-neon-cyan"
              },
              { 
                icon: <Phone className="w-6 h-6" />, 
                label: "Teléfono / WhatsApp", 
                value: "+52 (55) 1234-5678",
                desc: "Lunes a Viernes, 9:00 AM - 18:00 PM",
                color: "text-neon-green"
              },
              { 
                icon: <MapPin className="w-6 h-6" />, 
                label: "Oficinas Centrales", 
                value: "Av. Homero 1425, Polanco",
                desc: "Miguel Hidalgo, 11540 CDMX, México",
                color: "text-neon-purple"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                whileHover={{ x: 10 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center gap-6 group transition-all hover:bg-white/10 hover:border-white/20"
              >
                <div className={`p-4 rounded-2xl bg-black/40 ${item.color} shadow-lg group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-white mb-1">{item.value}</p>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Support Info Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 border border-neon-cyan/20 rounded-3xl p-8 mt-12"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-tighter">
                <Clock className="w-5 h-5 text-neon-cyan" /> Soporte Premium 24/7
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Nuestros clientes activos cuentan con una línea de soporte prioritaria para emergencias técnicas y ajustes de programación en tiempo real.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-royal-blue-dark bg-gray-700" />
                  ))}
                </div>
                <p className="text-xs font-bold text-neon-cyan uppercase tracking-widest">Ingenieros en línea</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-7 bg-white/5 border border-white/10 rounded-[48px] p-8 md:p-12 backdrop-blur-xl shadow-2xl relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />
            
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-500 ml-4 tracking-widest">Nombre Completo</label>
                  <input 
                    type="text" 
                    placeholder="Ej. Juan Pérez" 
                    className="w-full bg-black/40 border border-white/10 rounded-2xl py-5 px-8 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all text-white text-base placeholder:text-gray-700" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-500 ml-4 tracking-widest">Empresa / Marca</label>
                  <input 
                    type="text" 
                    placeholder="Ej. Retail Group" 
                    className="w-full bg-black/40 border border-white/10 rounded-2xl py-5 px-8 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all text-white text-base placeholder:text-gray-700" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-500 ml-4 tracking-widest">Correo Corporativo</label>
                  <input 
                    type="email" 
                    placeholder="juan@empresa.com" 
                    className="w-full bg-black/40 border border-white/10 rounded-2xl py-5 px-8 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all text-white text-base placeholder:text-gray-700" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-500 ml-4 tracking-widest">Número de Sucursales</label>
                  <select className="w-full bg-black/40 border border-white/10 rounded-2xl py-5 px-8 focus:outline-none focus:border-neon-cyan transition-all text-white text-base appearance-none cursor-pointer">
                    <option value="" className="bg-royal-blue-dark">Seleccionar rango...</option>
                    <option value="1-5" className="bg-royal-blue-dark">1 - 5 sucursales</option>
                    <option value="6-20" className="bg-royal-blue-dark">6 - 20 sucursales</option>
                    <option value="21-100" className="bg-royal-blue-dark">21 - 100 sucursales</option>
                    <option value="100+" className="bg-royal-blue-dark">Más de 100</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-500 ml-4 tracking-widest">¿En qué podemos ayudarte?</label>
                <textarea 
                  placeholder="Cuéntanos sobre tu proyecto sonora..." 
                  rows="4" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-5 px-8 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all text-white text-base placeholder:text-gray-700 resize-none"
                ></textarea>
              </div>

              <div className="pt-4">
                <button className="w-full py-6 bg-neon-cyan text-royal-blue-dark rounded-[24px] font-black text-xl hover:shadow-[0_0_50px_rgba(0,243,255,0.4)] transition-all flex items-center justify-center gap-3 active:scale-[0.98] uppercase tracking-tighter group">
                  ENVIAR SOLICITUD DE INGENIERÍA 
                  <Send className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
                <p className="text-center text-[10px] text-gray-600 mt-6 uppercase tracking-widest font-bold">
                  Al enviar aceptas nuestras políticas de tratamiento de datos personales.
                </p>
              </div>
            </form>
          </motion.div>

        </div>

        {/* Floating Action Links */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 border-t border-white/5 pt-12">
          <div className="flex items-center gap-3 text-gray-500 group cursor-pointer hover:text-white transition-all">
            <MessageCircle className="w-5 h-5 text-neon-green" />
            <span className="text-xs font-black uppercase tracking-widest">Chat en Vivo</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500 group cursor-pointer hover:text-white transition-all">
            <Globe className="w-5 h-5 text-neon-cyan" />
            <span className="text-xs font-black uppercase tracking-widest">Cobertura Nacional</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500 group cursor-pointer hover:text-white transition-all">
            <ShieldCheck className="w-5 h-5 text-neon-purple" />
            <span className="text-xs font-black uppercase tracking-widest">Privacidad Garantizada</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;