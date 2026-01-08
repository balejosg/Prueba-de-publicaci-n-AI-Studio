import React, { useState } from 'react';
import { Sparkles, Loader2, Target, Zap, TrendingUp, AlertCircle } from 'lucide-react';
import { generateMVPStrategies } from '../services/geminiService';
import { MVPStrategy } from '../types';

const MVPGenerator: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [strategies, setStrategies] = useState<MVPStrategy[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim()) return;

    setLoading(true);
    setError(null);
    setStrategies([]);

    try {
      const results = await generateMVPStrategies(idea);
      setStrategies(results);
    } catch (err) {
      setError("Hubo un error al generar las estrategias. Por favor, intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 max-w-7xl mx-auto px-6" id="generator">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4 flex justify-center items-center gap-2">
          <Sparkles className="text-yellow-400" /> Generador de MVP con IA
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          ¿Tienes una idea de negocio? Describe tu visión y nuestra IA te sugerirá 3 formas de validar tu hipótesis con un Producto Mínimo Viable de bajo costo.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-slate-800 rounded-xl p-1 border border-slate-700 shadow-xl mb-12">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 p-2">
          <input
            type="text"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Ej: Una app para alquilar herramientas de jardinería entre vecinos..."
            className="flex-1 bg-slate-900 text-white placeholder-slate-500 border-0 rounded-lg px-4 py-3 focus:ring-2 focus:ring-lean-500 outline-none transition-all"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !idea.trim()}
            className="bg-lean-600 hover:bg-lean-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2 min-w-[160px]"
          >
            {loading ? <Loader2 className="animate-spin" /> : 'Generar Estrategias'}
          </button>
        </form>
      </div>

      {error && (
        <div className="max-w-3xl mx-auto mb-8 p-4 bg-red-900/20 border border-red-500/50 rounded-lg flex items-center gap-3 text-red-200">
          <AlertCircle size={20} />
          {error}
        </div>
      )}

      {strategies.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          {strategies.map((strategy, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-lean-500 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-lean-900/50 transition-colors text-lean-400">
                  {idx === 0 ? <Zap size={24} /> : idx === 1 ? <Target size={24} /> : <TrendingUp size={24} />}
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full border ${
                  strategy.effortLevel === 'Bajo' ? 'bg-green-900/30 border-green-700 text-green-400' :
                  strategy.effortLevel === 'Medio' ? 'bg-yellow-900/30 border-yellow-700 text-yellow-400' :
                  'bg-red-900/30 border-red-700 text-red-400'
                }`}>
                  Esfuerzo: {strategy.effortLevel}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{strategy.title}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {strategy.description}
              </p>
              
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>Valida: <span className="text-slate-300 font-semibold">{strategy.validationType}</span></span>
                <span className="font-mono text-lean-500 group-hover:underline cursor-pointer">Implementar &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MVPGenerator;
