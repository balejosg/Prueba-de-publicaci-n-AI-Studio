import React, { useState } from 'react';
import { Settings, BarChart3, Lightbulb, ArrowRight } from 'lucide-react';

const BuildMeasureLearn: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: "Construir (Build)",
      icon: <Settings className="w-8 h-8 text-white" />,
      description: "Convierte ideas en productos. Crea un MVP (Producto Mínimo Viable) lo más rápido posible para probar tus hipótesis.",
      color: "bg-lean-600",
      action: "Código"
    },
    {
      title: "Medir (Measure)",
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      description: "Observa cómo los clientes usan tu producto. Recolecta datos cualitativos y cuantitativos reales, no métricas vanidosas.",
      color: "bg-mvp-600",
      action: "Datos"
    },
    {
      title: "Aprender (Learn)",
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      description: "¿Pivotar o perseverar? Usa los datos para validar o invalidar tus hipótesis y decide el siguiente paso estratégico.",
      color: "bg-emerald-600",
      action: "Ideas"
    }
  ];

  return (
    <div className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">El Ciclo de Feedback</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Visualization Circle */}
          <div className="relative flex justify-center items-center h-96">
            {/* Connecting Lines (Simulated Circle) */}
            <div className="absolute inset-0 rounded-full border-4 border-slate-700/50 border-dashed animate-spin-slow" style={{ animationDuration: '60s' }}></div>
            
            {steps.map((step, index) => {
               // Calculate position in circle
               const angle = (index * 120 - 90) * (Math.PI / 180);
               const radius = 140;
               const x = Math.cos(angle) * radius;
               const y = Math.sin(angle) * radius;

               return (
                 <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`absolute w-24 h-24 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 border-4 ${activeStep === index ? 'border-white scale-110 z-20' : 'border-slate-800 z-10 opacity-70'} ${step.color}`}
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                 >
                   {step.icon}
                 </button>
               )
            })}
            
            {/* Center Hub */}
            <div className="absolute w-32 h-32 bg-slate-900 rounded-full flex items-center justify-center border border-slate-700 z-0">
               <span className="text-slate-500 text-xs font-mono uppercase tracking-widest">Iteración</span>
            </div>

             {/* Arrows between nodes (Cosmetic) */}
             <ArrowRight className="absolute top-[20%] right-[25%] text-slate-600 rotate-45 w-8 h-8" />
             <ArrowRight className="absolute bottom-[20%] right-[25%] text-slate-600 rotate-[135deg] w-8 h-8" />
             <ArrowRight className="absolute left-[15%] top-[50%] text-slate-600 rotate-[270deg] w-8 h-8" />

          </div>

          {/* Info Panel */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-2xl relative overflow-hidden min-h-[300px]">
            <div className={`absolute top-0 left-0 w-1 h-full ${steps[activeStep].color} transition-colors duration-500`}></div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              {steps[activeStep].title}
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {steps[activeStep].description}
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800">
              <span className="text-sm text-slate-500 uppercase tracking-widest">Salida:</span>
              <span className={`ml-2 font-mono font-bold ${steps[activeStep].color.replace('bg-', 'text-')}`}>
                {steps[activeStep].action}
              </span>
            </div>
            
            <div className="mt-8 flex gap-2">
                {steps.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`h-1 flex-1 rounded-full transition-colors duration-300 ${idx === activeStep ? steps[idx].color : 'bg-slate-800'}`}
                    />
                ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BuildMeasureLearn;
