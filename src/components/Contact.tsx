import React from 'react';
import { Phone, Mail, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-24 px-[4vw] bg-[#0c1825] relative overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-20 relative z-10">
        <div>
          <div className="inline-flex items-center gap-4 font-mono text-[11px] tracking-[0.14em] uppercase text-[#1a7fe8] mb-4">
            <span className="w-7 h-0.5 bg-[#0bbf72] rounded-full"></span>
            Contáctanos
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-10">
            Hablemos de<br />tu <em className="italic text-[#3ab6f5] not-italic">necesidad</em>
          </h2>

          <div className="flex flex-col gap-4 mb-10">
            {[
              { label: "WhatsApp / Teléfono", val: "+51 923 171 559", href: "https://wa.me/51923171559", icon: <Phone /> },
              { label: "Correo de ventas", val: "ventas.drogueriajemafer@gmail.com", href: "mailto:ventas.drogueriajemafer@gmail.com", icon: <Mail /> },
              { label: "Correo alternativo", val: "drogueria.jemafer@gmail.com", href: "mailto:drogueria.jemafer@gmail.com", icon: <Mail /> }
            ].map((item, i) => (
              <a key={i} href={item.href} className="flex items-center gap-5 bg-white/[0.03] border border-white/[0.06] p-5 rounded-2xl hover:border-[#3ab6f5]/30 hover:translate-x-1.5 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#0bbf72]/15 flex items-center justify-center text-[#0bbf72] flex-shrink-0">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-[#3ab6f5] mb-0.5">{item.label}</div>
                  <div className="text-white/80 font-medium">{item.val}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
            <div className="font-mono text-[11px] tracking-widest uppercase text-[#1a7fe8] mb-6 flex items-center gap-2">
              <Clock size={14} /> Horario de atención
            </div>
            <div className="flex flex-col gap-4">
              {['Lunes', 'Martes', 'Miércoles', 'Viernes'].map(day => (
                <div key={day} className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                  <span className="text-white/50">{day}</span>
                  <span className="bg-[#0bbf72]/15 text-[#0bbf72] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Disponible</span>
                </div>
              ))}
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                <span className="text-white/50">Jueves</span>
                <span className="bg-white/5 text-white/25 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">No disponible</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/50">Sábado — Domingo</span>
                <span className="bg-white/5 text-white/25 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Cerrado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-10 lg:p-12">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">¿Listo para empezar?</h3>
            <p className="text-white/45 leading-relaxed mb-10">Escríbenos por WhatsApp o correo. Nuestro equipo te responderá a la brevedad para atender tu consulta o pedido.</p>
            
            <div className="flex flex-col gap-4">
              <a href="https://wa.me/51923171559" className="flex items-center justify-center gap-3 bg-[#25d366] text-white font-semibold py-5 rounded-2xl hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(37,211,102,0.4)] transition-all">
                <MessageSquare size={22} fill="white" />
                Escribir por WhatsApp
              </a>
              <a href="mailto:ventas.drogueriajemafer@gmail.com" className="flex items-center justify-center gap-3 bg-transparent border border-[#3ab6f5]/30 text-[#3ab6f5] font-semibold py-5 rounded-2xl hover:bg-[#3ab6f5]/5 hover:border-[#3ab6f5] transition-all">
                <Mail size={22} />
                Enviar correo
              </a>
            </div>

            <div className="mt-10 p-6 bg-gradient-to-br from-[#0d4fa8]/20 to-[#0bbf72]/10 border border-white/10 rounded-2xl font-serif italic text-lg text-white/55 text-center">
              "Comprometidos con la salud y la calidad"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;