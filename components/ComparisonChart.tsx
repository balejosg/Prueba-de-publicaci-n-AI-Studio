import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { time: 'Mes 0', riskTraditional: 100, riskLean: 100 },
  { time: 'Mes 1', riskTraditional: 95, riskLean: 80 },
  { time: 'Mes 2', riskTraditional: 90, riskLean: 60 },
  { time: 'Mes 3', riskTraditional: 85, riskLean: 45 },
  { time: 'Mes 4', riskTraditional: 80, riskLean: 35 },
  { time: 'Mes 5', riskTraditional: 75, riskLean: 20 },
  { time: 'Lanzamiento', riskTraditional: 70, riskLean: 10 },
];

const ComparisonChart: React.FC = () => {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-lg">
      <h3 className="text-lg font-bold text-white mb-2">Riesgo vs. Tiempo</h3>
      <p className="text-sm text-slate-400 mb-6">Desarrollo Tradicional vs. Lean Startup</p>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} label={{ value: 'Riesgo / Incertidumbre', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12 }} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
              itemStyle={{ color: '#f8fafc' }}
            />
            <Legend verticalAlign="top" height={36} />
            <Line 
              type="monotone" 
              dataKey="riskTraditional" 
              name="Tradicional (Cascada)" 
              stroke="#ef4444" 
              strokeWidth={3} 
              dot={{ r: 4, strokeWidth: 2 }} 
              activeDot={{ r: 6 }} 
            />
            <Line 
              type="stepAfter" 
              dataKey="riskLean" 
              name="Lean Startup (Iterativo)" 
              stroke="#0ea5e9" 
              strokeWidth={3} 
              dot={{ r: 4, strokeWidth: 2 }} 
              activeDot={{ r: 6 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-xs text-slate-500 italic text-center">
        * En Lean Startup, el riesgo disminuye drásticamente con cada experimento validado (MVP).
      </div>
    </div>
  );
};

export default ComparisonChart;
