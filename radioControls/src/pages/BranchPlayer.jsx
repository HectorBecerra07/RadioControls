import React from 'react';
import { useParams } from 'react-router-dom';
import UniversalPlayer from '../components/UniversalPlayer';
import WaveCursor from '../components/WaveCursor';
import { ShieldCheck, Info } from 'lucide-react';

const BranchPlayer = () => {
  const { branchSlug } = useParams();

  // En producción, aquí buscaríamos la URL asignada a este slug mediante un API call
  const branchData = {
    name: branchSlug.replace('-', ' ').toUpperCase(),
    streamUrl: "/audios/Tutiendahabla.mp3", // URL Dinámica (Local Fallback)
    stationName: "RadiOlea Ambient Mix"
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <WaveCursor />
      
      <div className="mb-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-neon-cyan/10 border border-neon-cyan/20 px-4 py-1.5 rounded-full text-neon-cyan text-xs font-bold uppercase tracking-widest mb-6">
          <ShieldCheck className="w-4 h-4" /> Terminal Autorizada
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-2">{branchData.name}</h1>
        <p className="text-gray-500 font-medium">RadiOleaControls Receiver Engine V2.0</p>
      </div>

      <div className="relative z-10 w-full flex justify-center">
        <UniversalPlayer 
          streamUrl={branchData.streamUrl} 
          stationName={branchData.stationName} 
        />
      </div>

      <div className="mt-12 max-w-md bg-white/5 border border-white/10 p-6 rounded-2xl relative z-10 backdrop-blur-md">
        <div className="flex gap-4 text-gray-400 text-sm">
          <Info className="w-6 h-6 shrink-0 text-neon-cyan" />
          <p>Esta terminal está configurada para uso exclusivo en sucursal. No comparta este enlace para evitar desconexiones por límites de concurrencia.</p>
        </div>
      </div>
    </div>
  );
};

export default BranchPlayer;
