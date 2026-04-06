import React from 'react';
import { FileText, Truck, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="nosotros" className="py-24 px-[4vw] bg-[#04090f] overflow-hidden relative">
      <div className="grid lg:grid-cols-[5fr_4fr] gap-20 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-4 font-mono text-[11px] tracking-[0.14em] uppercase text-[#1a7fe8] mb-4">
            <span className="w-7 h-0.5 bg-[#0bbf72] rounded-full"></span>
            Quiénes somos
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-8">
            Comprometidos<br />con <em className="italic text-[#3ab6f5] not-italic">la salud</em><br />del Perú
          </h2>
          <p className="text-white/45 leading-relaxed mb-6">
            Droguería Jemafer S.A.C. es una distribuidora comprometida con el abastecimiento de medicamentos, dispositivos médicos y productos sanitarios de alta calidad. Trabajamos para brindar soluciones confiables a farmacias, boticas, clínicas y centros de salud en todo el Perú.
          </p>
          <p className="text-white/35 text-[15px] leading-relaxed mb-10">
            Nuestra operación se sustenta en procesos certificados, atención personalizada y un equipo especializado en asuntos regulatorios, garantizando el cumplimiento de las normativas vigentes.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 border-l-2 border-l-[#0bbf72] p-6 rounded-xl hover:bg-white/[0.08] transition-all">
              <div className="font-mono text-[10px] tracking-widest uppercase text-[#0bbf72] mb-2">Misión</div>
              <p className="text-sm text-white/45 leading-relaxed">Proporcionar productos y servicios de calidad con eficacia comprobada, sustentada en el mejoramiento continuo de nuestras actividades.</p>
            </div>
            <div className="bg-white/5 border border-white/10 border-l-2 border-l-[#0bbf72] p-6 rounded-xl hover:bg-white/[0.08] transition-all">
              <div className="font-mono text-[10px] tracking-widest uppercase text-[#0bbf72] mb-2">Visión</div>
              <p className="text-sm text-white/45 leading-relaxed">Ser la droguería líder a nivel nacional, sustentada en servicios innovadores, eficaces y un adecuado manejo empresarial.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {[
            { title: "Certificación BPA — DIGEMID", desc: "Almacenes certificados en Buenas Prácticas de Almacenamiento por la DIGEMID.", icon: "BPA", color: "from-[#f5c842] to-[#b07808]", iconType: "text" },
            { title: "Registros Sanitarios", desc: "Gestión completa de inscripción ante DIGEMID para dispositivos médicos.", icon: <FileText className="text-white" size={24} />, color: "from-[#1a7fe8] to-[#0d4fa8]", iconType: "svg" },
            { title: "Distribución Nacional", desc: "Red logística que cubre Lima y todas las regiones del país.", icon: <Truck className="text-white" size={24} />, color: "from-[#0bbf72] to-[#067a47]", iconType: "svg" },
            { title: "Atención Personalizada", desc: "Asesoría directa y continua adaptada a sus necesidades específicas.", icon: <Users className="text-white" size={24} />, color: "from-[#1a7fe8] to-[#0d4fa8]", iconType: "svg" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-xl p-5 hover:translate-x-1.5 hover:border-[#1a7fe8]/30 transition-all group">
              <div className={`w-[50px] h-[50px] rounded-xl flex-shrink-0 flex items-center justify-center font-serif font-bold bg-gradient-to-br ${item.color}`}>
                {item.iconType === "text" ? <span className="text-[13px] text-[#5c3400]">{item.icon}</span> : item.icon}
              </div>
              <div>
                <h4 className="text-[15px] font-medium text-white mb-0.5">{item.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;