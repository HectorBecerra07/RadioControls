import React from 'react';
import { Radio } from 'lucide-react';

const AuthSplitLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Columna Izquierda (Decorativa) */}
        <div className="relative hidden h-screen flex-col justify-between overflow-hidden p-12 text-white md:flex bg-gradient-to-br from-royal-blue to-blue-800">
          <div className="absolute inset-0 bg-grid-white/[0.05] z-0"></div>
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Radio className="h-8 w-8 text-neon-cyan" />
                <span className="text-2xl font-black">RadioControls</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight mt-10">
                Hello, Portal Clientes 👋
              </h1>
              <p className="mt-4 max-w-md text-lg text-blue-100">
                Gestiona tu audio, analiza el comportamiento de tus clientes y eleva la experiencia de tu marca a un nuevo nivel.
              </p>
            </div>

            <footer className="relative z-10 text-sm text-blue-200">
              © {new Date().getFullYear()} RadioControls S.A. de C.V.
            </footer>
          </div>
        </div>

        {/* Columna Derecha (Contenido del Formulario) */}
        <div className="flex min-h-screen items-center justify-center p-6 sm:p-12 bg-slate-100 dark:bg-dark-background">
          <div className="w-full max-w-md">
            {children}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthSplitLayout;
