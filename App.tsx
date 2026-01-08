import React from 'react';
import Hero from './components/Hero';
import BuildMeasureLearn from './components/BuildMeasureLearn';
import MVPGenerator from './components/MVPGenerator';
import ComparisonChart from './components/ComparisonChart';
import ChatMentor from './components/ChatMentor';
import { BookOpen, CheckCircle2, XCircle, Layout, ArrowUpRight } from 'lucide-react';

function App() {
  const scrollToGenerator = () => {
    const element = document.getElementById('generator');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-lean-500 selection:text-white">
      
      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-white">
            <div className="w-8 h-8 bg-gradient-to-br from-lean-500 to-mvp-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">L</span>
            </div>
            LeanLaunch
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#conceptos" className="hover:text-white transition-colors">Conceptos</a>
            <a href="#ciclo" className="hover:text-white transition-colors">Ciclo</a>
            <a href="#herramientas" className="hover:text-white transition-colors">Herramientas</a>
          </div>
          <button onClick={scrollToGenerator} className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors border border-white/10">
            Crear MVP
          </button>
        </div>
      </nav>

      <main>
        <Hero onStart={scrollToGenerator} />

        {/* Concepts Section */}
        <section id="conceptos" className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                ¿Qué es un <span className="text-mvp-500">MVP</span>?
              </h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                El <strong>Producto Mínimo Viable</strong> no es un producto "barato" o "mal hecho". Es la versión de un nuevo producto que permite a un equipo recolectar la máxima cantidad de aprendizaje validado sobre sus clientes con el menor esfuerzo posible.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-4 p-4 bg-green-900/20 border border-green-900/50 rounded-lg">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-green-400">Es un MVP</h4>
                    <p className="text-sm text-slate-400 mt-1">Una landing page para medir interés, un video explicativo, un servicio manual (Concierge).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-red-900/20 border border-red-900/50 rounded-lg">
                  <XCircle className="text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-red-400">No es un MVP</h4>
                    <p className="text-sm text-slate-400 mt-1">Un producto con bugs, una versión "lite" sin funcionalidad clave, o una excusa para código pobre.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
               <ComparisonChart />
               <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                  <h4 className="font-bold text-white flex items-center gap-2 mb-3">
                    <BookOpen size={18} className="text-lean-500"/> Definición Clave
                  </h4>
                  <blockquote className="border-l-4 border-lean-500 pl-4 italic text-slate-400">
                    "La única forma de ganar es aprender más rápido que nadie."
                    <footer className="mt-2 text-sm text-slate-500 font-normal not-italic">— Eric Ries</footer>
                  </blockquote>
               </div>
            </div>
          </div>
        </section>

        {/* Cycle Section */}
        <section id="ciclo" className="border-y border-slate-800 bg-slate-900/50">
          <BuildMeasureLearn />
        </section>

        {/* Tools Section */}
        <section id="herramientas" className="py-24 max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                 <MVPGenerator />
              </div>
              <div className="lg:col-span-1 flex flex-col justify-center">
                 <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Asistente Lean</h3>
                    <p className="text-slate-400">¿Dudas sobre cómo aplicar la metodología? Pregúntale a nuestra IA entrenada en los principios de Lean Startup.</p>
                 </div>
                 <ChatMentor />
                 
                 <div className="mt-8 p-6 bg-gradient-to-br from-mvp-900/40 to-slate-900 rounded-xl border border-mvp-900/50">
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                       <Layout size={18} className="text-mvp-400" />
                       Lean Canvas
                    </h4>
                    <p className="text-sm text-slate-400 mb-4">
                       El MVP es solo una parte. No olvides modelar todo tu negocio en una sola página.
                    </p>
                    <a href="https://leanstack.com/lean-canvas" target="_blank" rel="noreferrer" className="text-mvp-400 text-sm font-semibold hover:text-mvp-300 flex items-center gap-1">
                       Recurso externo <ArrowUpRight size={14} />
                    </a>
                 </div>
              </div>
           </div>
        </section>

      </main>

      <footer className="bg-slate-950 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; 2024 LeanLaunch. Construido con React y Gemini.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
