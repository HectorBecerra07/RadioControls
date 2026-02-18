import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Link2, Monitor, Activity, Settings, Plus, Globe, Key } from 'lucide-react';

const Admin = () => {
  const [terminals, setTerminals] = useState([
    { id: 1, store: 'Coppel - Sucursal 045', url: 'https://stream.radiocontrols.com/coppel_045', status: 'Activo', lastPing: 'Hace 5s' },
    { id: 2, store: 'Puma - Centro Histórico', url: 'https://stream.radiocontrols.com/puma_ch', status: 'Activo', lastPing: 'Hace 12s' },
    { id: 3, store: 'Sears - Santa Fe', url: 'https://stream.radiocontrols.com/sears_sf', status: 'Inactivo', lastPing: 'Hace 2h' },
  ]);

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
          <ShieldCheck className="inline-block w-10 h-10 md:w-14 md:h-14 text-neon-cyan mr-4 mb-2" />
          Terminales
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl">Asigna y gestiona las URLs de streaming para cada punto de venta.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Listado de Conexiones */}
        <div className="lg:col-span-2">
          <div className="bg-gray-900/50 border border-gray-800 rounded-3xl overflow-hidden backdrop-blur-md">
            <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-gray-800/20">
              <h2 className="font-bold text-white flex items-center gap-2">
                <Monitor className="w-5 h-5 text-cyan-400" /> Terminales en Línea
              </h2>
              <button className="text-xs bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                <Plus className="w-3 h-3" /> Nueva Terminal
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="text-xs uppercase text-gray-500 bg-black/30">
                  <tr>
                    <th className="px-6 py-4">Punto de Venta</th>
                    <th className="px-6 py-4">URL de Conexión</th>
                    <th className="px-6 py-4">Estado</th>
                    <th className="px-6 py-4 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {terminals.map((t) => (
                    <tr key={t.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-medium text-white">{t.store}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 group">
                          <code className="text-xs text-cyan-400 bg-cyan-950/30 px-2 py-1 rounded border border-cyan-900/50">{t.url}</code>
                          <Link2 className="w-3 h-3 text-gray-600 group-hover:text-cyan-400 cursor-pointer" />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5">
                          <div className={`w-1.5 h-1.5 rounded-full ${t.status === 'Activo' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-red-500'}`} />
                          <span className={`text-xs ${t.status === 'Activo' ? 'text-green-400' : 'text-red-400'}`}>{t.status}</span>
                        </div>
                        <p className="text-[10px] text-gray-600">{t.lastPing}</p>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-gray-500 hover:text-white transition-colors"><Settings className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar: Seguridad y Monitor */}
        <div className="space-y-6">
          <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-3xl backdrop-blur-md">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <Key className="w-5 h-5 text-yellow-500" /> Token de Acceso
            </h3>
            <p className="text-gray-400 text-sm mb-4">Usa este token para autorizar nuevos receptores en tienda.</p>
            <div className="bg-black p-4 rounded-xl border border-gray-800 font-mono text-xs text-yellow-500/80 mb-4 break-all">
              RC_PRO_8829_XQ_2026_POLANCO
            </div>
            <button className="w-full py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-xl text-xs font-bold transition-all border border-gray-700">
              Regenerar Token
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-950/20 to-purple-950/20 border border-cyan-900/30 p-8 rounded-3xl">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400" /> Tráfico de Red
            </h3>
            <div className="space-y-6">
                <div className="flex justify-between items-end h-12 gap-1">
                    {[40, 70, 45, 90, 65, 80, 40, 60, 85, 50].map((h, i) => (
                        <motion.div 
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ repeat: Infinity, duration: 1, delay: i * 0.1, repeatType: 'reverse' }}
                            className="w-full bg-cyan-500/40 rounded-t-sm"
                        />
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-2 bg-black/40 rounded-lg">
                        <p className="text-[10px] text-gray-500 uppercase">Bitrate</p>
                        <p className="text-sm font-bold text-white">320 kbps</p>
                    </div>
                    <div className="p-2 bg-black/40 rounded-lg">
                        <p className="text-[10px] text-gray-500 uppercase">Latency</p>
                        <p className="text-sm font-bold text-white">45ms</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;