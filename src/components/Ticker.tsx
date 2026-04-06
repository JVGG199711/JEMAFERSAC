import React from 'react';

const Ticker = () => {
  const items = [
    { label: "BPA", desc: "Buenas Prácticas de Almacenamiento" },
    { label: "DIGEMID", desc: "Ministerio de Salud Perú" },
    { label: "GSP", desc: "Good Storage Practice" },
    { label: "Distribución", desc: "Lima y Provincias" },
    { label: "Registros Sanitarios", desc: "Dispositivos Médicos" },
    { label: "Atención", desc: "Personalizada y Directa" },
  ];

  const tickerItems = [...items, ...items];

  return (
    <div className="bg-[#0d4fa8] py-4 overflow-hidden whitespace-nowrap border-y border-[#3ab6f5]/20">
      <div className="inline-flex animate-ticker">
        {tickerItems.map((item, i) => (
          <span key={i} className="font-mono text-xs tracking-widest uppercase text-white/65 px-8 border-r border-white/12 last:border-r-0">
            <b className="text-white mr-2">{item.label}</b> · {item.desc}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;