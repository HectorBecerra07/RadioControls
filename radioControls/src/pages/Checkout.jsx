import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, Lock, ArrowLeft, CheckCircle2, Sparkles, Radio } from 'lucide-react';
import WaveCursor from '../components/WaveCursor';

const plansData = {
  'basico': {
    name: "Plan Básico",
    price: "539",
    period: "mensual",
    features: ["Acceso vía Link Sucursal", "Ingeniería de Audio Base", "Licencias AMPROFON", "Soporte vía Ticket"]
  },
  'profesional': {
    name: "Plan Profesional",
    price: "5,390",
    period: "anual",
    features: ["Todo lo del plan Mensual", "1 Mes Gratis Incluido", "Publicidad Personalizada", "Prioridad Técnica 24/7", "Calidad Ultra Premium"]
  },
  'corporativo': {
    name: "Plan Corporativo",
    price: "Custom",
    period: "anual",
    features: ["Todo lo del plan Profesional", "Panel Multi-Cuentas Pro", "API para Integraciones", "Gerente de Cuenta Dedicado"]
  }
};

const Checkout = () => {
  const { planId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const plan = plansData[planId] || plansData['profesional'];

  const handlePayment = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simular procesamiento de pago
    setTimeout(() => {
      setIsLoading(false);
      alert('¡Pago procesado con éxito! Bienvenido a RadioControls.');
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="pt-40 pb-24 px-4 min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <WaveCursor />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <Link 
          to="/planes" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 font-black uppercase tracking-widest text-xs"
        >
          <ArrowLeft className="w-4 h-4" /> Volver a Planes
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Formulario de Pago */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-slate-900/40 border border-white/5 rounded-[48px] p-8 md:p-12 backdrop-blur-2xl shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-neon-cyan/10 rounded-2xl border border-neon-cyan/20">
                <CreditCard className="w-6 h-6 text-neon-cyan" />
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tighter">Detalles de Pago</h2>
            </div>

            <form onSubmit={handlePayment} className="space-y-8">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase text-slate-500 ml-4 tracking-widest">Nombre en la Tarjeta</label>
                <input 
                  required
                  type="text" 
                  placeholder="JUAN PÉREZ" 
                  className="w-full bg-slate-950 border border-white/10 rounded-2xl py-5 px-8 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all text-white font-medium placeholder:text-slate-800" 
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase text-slate-500 ml-4 tracking-widest">Número de Tarjeta</label>
                <div className="relative">
                  <input 
                    required
                    type="text" 
                    placeholder="0000 0000 0000 0000" 
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl py-5 px-8 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all text-white font-medium placeholder:text-slate-800" 
                  />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 flex gap-2">
                    <div className="w-8 h-5 bg-slate-800 rounded flex items-center justify-center text-[8px] font-black italic">VISA</div>
                    <div className="w-8 h-5 bg-slate-800 rounded flex items-center justify-center text-[8px] font-black italic">MC</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase text-slate-500 ml-4 tracking-widest">Vencimiento</label>
                  <input 
                    required
                    type="text" 
                    placeholder="MM / YY" 
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl py-5 px-8 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all text-white font-medium placeholder:text-slate-800" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase text-slate-500 ml-4 tracking-widest">CVC</label>
                  <input 
                    required
                    type="text" 
                    placeholder="000" 
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl py-5 px-8 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all text-white font-medium placeholder:text-slate-800" 
                  />
                </div>
              </div>

              <div className="pt-6">
                <button 
                  disabled={isLoading}
                  className="w-full py-6 bg-neon-cyan text-slate-950 rounded-[24px] font-black text-xl hover:shadow-[0_0_50px_rgba(0,243,255,0.4)] transition-all flex items-center justify-center gap-3 active:scale-[0.98] uppercase tracking-tighter group disabled:opacity-50"
                >
                  {isLoading ? 'PROCESANDO...' : `PAGAR $${plan.price} MXN`}
                  {!isLoading && <ShieldCheck className="w-6 h-6" />}
                </button>
                <div className="flex items-center justify-center gap-2 mt-6 text-slate-500">
                  <Lock className="w-3 h-3" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Pago encriptado SSL de 256 bits</span>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Resumen del Pedido */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-slate-900/40 border border-white/5 rounded-[48px] p-10 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 blur-3xl rounded-full -mr-16 -mt-16" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-950 rounded-2xl border border-white/5">
                  <Radio className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Resumen del Pedido</p>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">{plan.name}</h3>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-neon-cyan" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="h-px w-full bg-white/5 mb-8" />

              <div className="space-y-4">
                <div className="flex justify-between items-center text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                  <span>Subtotal</span>
                  <span>${plan.price} MXN</span>
                </div>
                <div className="flex justify-between items-center text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                  <span>Impuestos (IVA)</span>
                  <span>Incluido</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-sm font-black uppercase tracking-[0.2em] text-white">Total hoy</span>
                  <div className="text-right">
                    <div className="text-3xl font-black text-neon-cyan tracking-tighter">${plan.price}</div>
                    <div className="text-[8px] font-black uppercase text-slate-500 tracking-widest">Precios en Pesos Mexicanos</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Garantía */}
            <div className="bg-gradient-to-br from-neon-cyan/10 to-blue-600/10 border border-neon-cyan/20 rounded-[40px] p-8 flex gap-6 items-center">
              <div className="shrink-0 p-4 bg-slate-950 rounded-2xl shadow-xl">
                <Sparkles className="w-8 h-8 text-neon-cyan" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-neon-cyan tracking-[0.2em] mb-1">Garantía RadiOlea</p>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">
                  Si no estás satisfecho en los primeros 30 días, te devolvemos tu dinero sin preguntas.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
