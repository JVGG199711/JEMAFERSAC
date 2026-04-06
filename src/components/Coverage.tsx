import React from 'react';
import { Home, Globe, Activity } from 'lucide-react';

const Coverage = () => {
  return (
    <section id="cobertura" className="py-24 px-[4vw] bg-white">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-4 font-mono text-[11px] tracking-[0.14em] uppercase text-[#1a7fe8] mb-4">
            <span className="w-7 h-0.5 bg-[#0bbf72] rounded-full"></span>
            Cobertura
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#04090f] leading-tight mb-6">
            Llegamos a<br /><em className="italic text-[#0d4fa8] not-italic">todo el Perú</em>
          </h2>
          <p className="text-lg text-[#5a7898] leading-relaxed mb-10 max-w-lg">
            Distribución nacional con logística confiable que asegura la integridad de los productos de origen a destino.
          </p>

          <div className="flex flex-col gap-6">
            {[
              { title: "Lima Metropolitana", desc: "Cobertura completa en todos los distritos con tiempos optimizados.", icon: <Home /> },
              { title: "Costa, Sierra y Selva", desc: "Distribución a farmacias y centros de salud en todas las regiones.", icon: <Globe /> },
              { title: "Instituciones de Salud", desc: "Abastecimiento a clínicas privadas, hospitales y centros públicos.", icon: <Activity /> }
            ].map((item, i) => (
              <div key={i} className="flex gap-5 pb-6 border-b border-[#0d4fa8]/10 last:border-b-0">
                <div className="w-10 h-10 rounded-xl bg-[#eef4fb] flex items-center justify-center flex-shrink-0 text-[#0bbf72]">
                  {React.cloneElement(item.icon, { size: 20, strokeWidth: 2 })}
                </div>
                <div>
                  <h5 className="font-semibold text-[#04090f] mb-1">{item.title}</h5>
                  <p className="text-sm text-[#5a7898] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#04090f] rounded-[2.5rem] p-12 shadow-[0_30_80px_rgba(7,26,48,0.18)] relative overflow-hidden">
          <div className="absolute bottom-8 right-8 font-serif text-6xl font-black text-white/5 pointer-events-none tracking-widest">PERÚ</div>
          
          <svg className="w-full max-w-[280px] mx-auto block drop-shadow-[0_0_20px_rgba(11,191,114,0.3)]" viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="pg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#0d4fa8', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#0bbf72', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path d="M55,15 L72,10 L88,12 L108,8 L128,14 L145,22 L158,38 L163,58 L162,80 L168,102 L170,125 L165,148 L160,170 L158,190 L152,208 L142,224 L132,238 L122,250 L112,262 L102,272 L90,278 L78,274 L68,262 L58,248 L50,232 L44,215 L40,198 L36,180 L32,162 L28,142 L26,120 L28,98 L32,76 L38,56 L45,38 Z" fill="url(#pg)" opacity=".85" />
            <path d="M55,15 L72,10 L88,12 L108,8 L128,14 L145,22 L158,38 L163,58 L162,80 L168,102 L170,125 L165,148 L160,170 L158,190 L152,208 L142,224 L132,238 L122,250 L112,262 L102,272 L90,278 L78,274 L68,262 L58,248 L50,232 L44,215 L40,198 L36,180 L32,162 L28,142 L26,120 L28,98 L32,76 L38,56 L45,38 Z" fill="none" stroke="rgba(58,182,245,0.4)" strokeWidth="1.5" />
            
            <g className="animate-pulse">
              <circle cx="88" cy="190" r="8" fill="rgba(11,191,114,0.25)" stroke="#0bbf72" strokeWidth="1.5" />
              <circle cx="88" cy="190" r="5" fill="#0bbf72" />
            </g>
            <text x="98" y="194" fontFamily="DM Mono, monospace" fontSize="8" fill="rgba(255,255,255,0.7)">Lima</text>
            
            <circle cx="100" cy="80" r="2.5" fill="#3ab6f5" />
            <circle cx="140" cy="130" r="2.5" fill="#3ab6f5" />
            <circle cx="108" cy="240" r="2.5" fill="#3ab6f5" />
            <circle cx="52" cy="155" r="2.5" fill="#3ab6f5" />
          </svg>

          <div className="mt-8 flex gap-6 justify-center">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-white/45 uppercase">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0bbf72]"></div> Lima
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-white/45 uppercase">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3ab6f5]"></div> Regiones
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;