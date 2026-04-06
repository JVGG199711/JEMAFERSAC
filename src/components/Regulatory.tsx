import React from 'react';
import { Shield, Activity, RefreshCw, FileCheck } from 'lucide-react';

const Regulatory = () => {
  return (
    <section id="regulatorio" className="py-24 px-[4vw] bg-[#0c1825] relative overflow-hidden">
      <div className="absolute top-0 right-0 bottom-0 w-[45%] bg-gradient-to-br from-[#0d4fa8]/15 to-transparent pointer-events-none"></div>
      
      <div className="grid lg:grid-cols-2 gap-20 relative z-10">
        <div>
          <div className="inline-flex items-center gap-4 font-mono text-[11px] tracking-[0.14em] uppercase text-[#1a7fe8] mb-4">
            <span className="w-7 h-0.5 bg-[#0bbf72] rounded-full"></span>
            Asuntos regulatorios
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6">
            Cumplimiento<br /><em className="italic text-[#3ab6f5] not-italic">regulatorio</em><br />garantizado
          </h2>
          <p className="text-white/45 leading-relaxed mb-10 max-w-lg">
            Equipo especializado que gestiona todos los trámites para que tu operación cumpla la normativa vigente en el Perú.
          </p>

          <div className="flex flex-col gap-1">
            {[
              { num: "01", title: "Registro Sanitario de Dispositivos Médicos", desc: "Inscripción, reinscripción y modificación ante DIGEMID para clases I, II y III." },
              { num: "02", title: "Autorización de Funcionamiento", desc: "Tramitamos autorizaciones para droguerías y almacenes especializados." },
              { num: "03", title: "Actualización ante Cambios Normativos", desc: "Monitoreo permanente y adaptación documentaria ante modificaciones." },
              { num: "04", title: "Certificación BPA Completa", desc: "Acompañamiento integral para obtener y mantener la certificación." }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 py-6 border-b border-white/10 last:border-b-0 group">
                <div className="font-serif text-3xl font-bold text-white/10 group-hover:text-[#3ab6f5]/35 transition-colors">{step.num}</div>
                <div>
                  <h4 className="text-[15px] font-medium text-white/85 mb-1.5">{step.title}</h4>
                  <p className="text-sm text-white/35 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:pt-24">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center hover:border-[#d4a544]/35 transition-all group">
            <div className="w-20 h-20 rounded-full bg-radial-gradient from-[#f8e07a] to-[#b07808] mx-auto mb-4 flex items-center justify-center font-serif text-xl font-black text-[#5c3400] shadow-[0_0_30px_rgba(212,165,68,0.2),inset_-4px_-4px_10px_rgba(0,0,0,0.3)]">
              BPA
            </div>
            <h4 className="text-[#d4a544] font-semibold mb-1">Certificado DIGEMID</h4>
            <p className="text-sm text-white/35 leading-relaxed">Buenas Prácticas de Almacenamiento<br />Ministerio de Salud del Perú</p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center hover:border-[#3ab6f5]/35 transition-all">
            <div className="w-16 h-16 rounded-xl bg-[#1a7fe8]/20 mx-auto mb-4 flex items-center justify-center">
              <Shield className="text-[#3ab6f5]" size={28} />
            </div>
            <h4 className="text-[#3ab6f5] font-semibold mb-1">Marco Normativo</h4>
            <p className="text-sm text-white/35 leading-relaxed">Operamos bajo la Ley General de Medicamentos del Perú.</p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center hover:border-[#0bbf72]/35 transition-all">
            <div className="w-16 h-16 rounded-xl bg-[#0bbf72]/15 mx-auto mb-4 flex items-center justify-center">
              <Activity className="text-[#0bbf72]" size={28} />
            </div>
            <h4 className="text-[#0bbf72] font-semibold mb-1">Mejora Continua</h4>
            <p className="text-sm text-white/35 leading-relaxed">Procesos auditados para garantizar altos estándares de calidad.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regulatory;