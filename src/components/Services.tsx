import React from 'react';
import { Truck, Users, FileText, AlertTriangle, Star, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    { num: "01", title: "Distribución y Comercialización", desc: "Medicamentos, dispositivos médicos y productos sanitarios en todo el Perú.", icon: <Truck />, color: "bg-[#e8f4ff] text-[#1356a0]" },
    { num: "02", title: "Atención Personalizada", desc: "Asesoría directa y dedicada para cada cliente con soluciones a medida.", icon: <Users />, color: "bg-[#e6faf3] text-[#0bbf72]" },
    { num: "03", title: "Gestión de Registros Sanitarios", desc: "Tramitamos autorizaciones ante DIGEMID para el ingreso al mercado.", icon: <FileText />, color: "bg-[#fff9eb] text-[#d4a544]", dark: true },
    { num: "04", title: "Actualización Regulatoria", desc: "Adaptamos documentación ante cualquier cambio en la normativa sanitaria.", icon: <AlertTriangle />, color: "bg-[#fff0eb] text-[#d45a20]" },
    { num: "05", title: "Certificación en BPA", desc: "Acompañamiento completo para obtener y mantener la certificación BPA.", icon: <Star />, color: "bg-[#f0ebff] text-[#7c3aed]" },
    { num: "06", title: "Envíos Lima y Provincias", desc: "Logística confiable que asegura la integridad de los productos.", icon: <Globe />, color: "bg-[#e6f7ff] text-[#0284c7]" }
  ];

  return (
    <section id="servicios" className="py-24 px-[4vw] bg-[#eef4fb] relative overflow-hidden">
      <div className="absolute top-[-300px] right-[-300px] w-[800px] h-[800px] rounded-full bg-radial-gradient from-[#0d4fa8]/5 to-transparent pointer-events-none"></div>
      
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-4 font-mono text-[11px] tracking-[0.14em] uppercase text-[#1a7fe8] mb-4">
          <span className="w-7 h-0.5 bg-[#0bbf72] rounded-full"></span>
          Nuestros servicios
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#04090f] leading-tight mb-4">
          Todo lo que<br />tu negocio <em className="italic text-[#0d4fa8] not-italic">necesita</em>
        </h2>
        <p className="text-lg text-[#5a7898] leading-relaxed max-w-xl mx-auto">
          Soluciones integrales para el sector farmacéutico y sanitario, respaldadas por certificaciones oficiales.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
        {services.map((srv, i) => (
          <div key={i} className={`p-8 rounded-2xl border border-[#0d4fa8]/10 relative overflow-hidden group transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(13,79,168,0.12)] ${srv.dark ? 'bg-[#071a30] text-white border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.4)]' : 'bg-white'}`}>
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#0d4fa8] to-[#0bbf72] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <div className={`font-serif text-5xl font-black mb-[-12px] opacity-10 group-hover:opacity-20 transition-opacity ${srv.dark ? 'text-[#3ab6f5]' : 'text-[#0d4fa8]'}`}>{srv.num}</div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${srv.color}`}>
              {React.cloneElement(srv.icon as React.ReactElement, { size: 24, strokeWidth: 1.8 })}
            </div>
            <h3 className={`text-[17px] font-semibold mb-3 ${srv.dark ? 'text-white' : 'text-[#04090f]'}`}>{srv.title}</h3>
            <p className={`text-[15px] leading-relaxed ${srv.dark ? 'text-white/45' : 'text-[#5a7898]'}`}>{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;