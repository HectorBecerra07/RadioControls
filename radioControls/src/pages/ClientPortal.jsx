import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Store, Link2, Play, Plus, Search, LogOut, LayoutGrid, Settings, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ClientPortal = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock Data: Sucursales del cliente
  const [branches, setBranches] = useState([
    { id: 1, name: 'Polanco - Corporativo', station: 'Vibe Retail Pro', slug: 'polanco-corp', status: 'Online' },
    { id: 2, name: 'Santa Fe - Departamental', station: 'Morning Chill', slug: 'santa-fe', status: 'Offline' },
    { id: 3, name: 'Centro - Outlet', station: 'Pop Energy', slug: 'centro-outlet', status: 'Online' },
  ]);

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-royal-blue-dark border-r border-white/10 p-6 hidden lg:flex flex-col">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-neon-cyan rounded-xl flex items-center justify-center text-royal-blue font-black italic text-xl">R</div>
          <span className="font-black text-lg tracking-tighter uppercase">RadiOlea</span>
        </div>

        <nav className="flex-grow space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl text-neon-cyan font-bold"><LayoutGrid className="w-5 h-5" /> Sucursales</button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl transition-all"><Settings className="w-5 h-5" /> Configuración</button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl transition-all"><Shield className="w-5 h-5" /> Pagos & Plan</button>
        </nav>

        <button onClick={() => navigate('/')} className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all"><LogOut className="w-5 h-5" /> Cerrar Sesión</button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 lg:p-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black mb-2 tracking-tight">Bienvenido de nuevo</h1>
            <p className="text-gray-500">Gestiona la música de tus sucursales desde un solo lugar.</p>
          </div>
          <button className="bg-neon-cyan text-royal-blue-dark px-6 py-3 rounded-2xl font-black flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-neon-cyan/20">
            <Plus className="w-5 h-5" /> AÑADIR SUCURSAL
          </button>
        </header>

        {/* Search Bar */}
        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Buscar sucursal por nombre o ID..." 
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-neon-cyan/50 transition-all placeholder:text-gray-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {branches.filter(b => b.name.toLowerCase().includes(searchTerm.toLowerCase())).map(branch => (
            <motion.div 
              key={branch.id}
              whileHover={{ y: -5 }}
              className="bg-royal-blue-dark/50 border border-white/5 p-8 rounded-3xl group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-2xl ${branch.status === 'Online' ? 'bg-neon-cyan/10' : 'bg-gray-800'}`}>
                  <Store className={`w-6 h-6 ${branch.status === 'Online' ? 'text-neon-cyan' : 'text-gray-500'}`} />
                </div>
                <div className={`text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-tighter ${branch.status === 'Online' ? 'bg-neon-cyan text-royal-blue' : 'bg-gray-800 text-gray-500'}`}>
                  {branch.status}
                </div>
              </div>

              <h3 className="text-2xl font-black mb-1 group-hover:text-neon-cyan transition-colors">{branch.name}</h3>
              <p className="text-gray-500 text-sm mb-6 flex items-center gap-2 italic tracking-tight italic">
                Canal: <span className="text-gray-300 font-bold not-italic">{branch.station}</span>
              </p>

              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold hover:bg-white/10 transition-all group/link">
                  <Link2 className="w-4 h-4 text-gray-500 group-hover/link:text-neon-cyan transition-colors" /> COPIAR LINK RECEPTOR
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 rounded-xl text-sm font-bold hover:bg-neon-cyan hover:text-royal-blue transition-all">
                  <Play className="w-4 h-4 fill-current" /> ABRIR RECEPTOR
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ClientPortal;
