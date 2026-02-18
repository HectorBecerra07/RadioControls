import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Zap, Star, ShieldCheck, ArrowRight, HelpCircle, TrendingUp, Info } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Básico",
      price: "539",
      period: "/ mes",
      description: "Ideal para sucursales individuales que buscan profesionalizar su ambiente.",
      features: [
        "Acceso vía Link Sucursal",
        "Ingeniería de Audio Base",
        "Licencias AMPROFON",
        "Soporte vía Ticket",
        "Calidad Estándar (192kbps)"
      ],
      cta: "EMPEZAR AHORA",
      highlight: false,
      color: "from-gray-800 to-gray-900"
    },
    {
      name: "Profesional Anual",
      price: "5,390",
      period: "/ año",
      description: "Nuestra solución más popular. Maximiza tus ventas con ingeniería avanzada.",
      features: [
        "Todo lo del plan Mensual",
        "1 Mes Gratis Incluido",
        "Publicidad Personalizada",
        "Prioridad Técnica 24/7",
        "Calidad Premium (320kbps)",
        "Instalación Preferente"
      ],
      cta: "CONTRATAR ANUAL",
      highlight: true,
      badge: "EL MÁS ELEGIDO",
      color: "from-royal-blue to-royal-blue-dark"
    },
    {
      name: "Franquicias",
      price: "Custom",
      period: "",
      description: "Para cadenas con más de 10 sucursales que requieren control total.",
      features: [
        "Todo lo del plan Profesional",
        "Panel Multi-Cuentas",
        "API para Integraciones",
        "Gerente de Cuenta Dedicado",
        "Reportes de Audiencia Pro",
        "SLA Garantizado"
      ],
      cta: "CONTACTAR VENTAS",
      highlight: false,
      color: "from-purple-900/50 to-black"
    }
  ];

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-royal-blue-dark relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-neon-cyan font-black tracking-[0.3em] uppercase text-xs mb-3 block"
          >
            Inversión Inteligente
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase"
          >
            Planes de <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Alto Impacto</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Aumenta tus ventas un 15% o te devolvemos tu dinero. Sin letras chiquitas, solo resultados sonoros.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-[32px] p-0.5 ${plan.highlight ? 'bg-gradient-to-b from-neon-cyan to-neon-purple' : 'bg-white/10'}`}
            >
              <div className={`rounded-[30px] p-8 h-full flex flex-col bg-gradient-to-b ${plan.color} backdrop-blur-xl`}>
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-neon-cyan to-neon-purple text-royal-blue-dark px-4 py-1 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-black text-white uppercase mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    {plan.price !== "Custom" && <span className="text-lg font-bold text-gray-500">$</span>}
                    <span className="text-4xl md:text-5xl font-black text-white">{plan.price}</span>
                    <span className="text-gray-500 font-bold ml-1 text-sm">{plan.period}</span>
                  </div>
                  {plan.period === "/ año" && (
                    <p className="text-neon-cyan text-xs font-bold mt-1 animate-pulse">¡Pagas 11 meses, recibes 12!</p>
                  )}
                </div>

                <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs font-medium text-gray-300">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? 'text-neon-cyan' : 'text-gray-500'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-black text-base transition-all flex items-center justify-center gap-2 group ${
                  plan.highlight 
                  ? 'bg-neon-cyan text-royal-blue-dark hover:shadow-[0_0_30px_rgba(0,243,255,0.5)]' 
                  : 'bg-white/5 border border-white/10 text-white hover:bg-white hover:text-royal-blue-dark'
                }`}>
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-[60px] bg-gradient-to-r from-royal-blue to-royal-blue-dark border border-white/10 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl -mr-32 -mt-32 transition-all group-hover:bg-neon-cyan/10" />
          
          <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="w-32 h-32 bg-neon-cyan/10 rounded-[40px] flex items-center justify-center shrink-0 border border-neon-cyan/20">
              <ShieldCheck className="w-16 h-16 text-neon-cyan" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter">Garantía de Crecimiento RadiOlea</h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-4xl">
                Confiamos tanto en nuestra ingeniería de audio que si después de 6 meses de uso continuo no logras demostrar un <span className="text-white font-bold underline decoration-neon-cyan">aumento del 15% en tus KPIs de venta</span>, te devolvemos el 100% de lo invertido en la plataforma.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Comparison Table Link */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gray-800" />
            ¿Necesitas más información?
            <div className="h-px w-12 bg-gray-800" />
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <TrendingUp className="w-5 h-5 text-neon-cyan" />
              <span className="text-sm font-bold uppercase">Casos de Éxito</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <Info className="w-5 h-5 text-neon-cyan" />
              <span className="text-sm font-bold uppercase">Ingeniería de Audio</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <HelpCircle className="w-5 h-5 text-neon-cyan" />
              <span className="text-sm font-bold uppercase">Centro de Ayuda</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;