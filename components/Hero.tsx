import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-400 ring-1 ring-white/10 hover:ring-white/20">
              Aprende a validar antes de construir. <a href="#" className="font-semibold text-lean-500"><span className="absolute inset-0" aria-hidden="true"></span>Leer más <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Construye. <span className="text-lean-500">Mide.</span> <span className="text-mvp-500">Aprende.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Deja de desperdiciar tiempo construyendo productos que nadie quiere. Descubre la metodología <strong>Lean Startup</strong> y domina el arte del <strong>MVP</strong>.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={onStart}
              className="rounded-md bg-lean-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lean-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lean-600 flex items-center gap-2 transition-all"
            >
              <Rocket size={20} />
              Comenzar Aprendizaje
            </button>
            <a href="#conceptos" className="text-sm font-semibold leading-6 text-white hover:text-lean-400 transition-colors">
              Ver conceptos clave <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lean-500/20 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-mvp-600/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
    </div>
  );
};

export default Hero;
