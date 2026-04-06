import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#020811] border-t border-[#0d4fa8]/25 pt-16 pb-8 px-[4vw]">
      <div className="grid md:grid-cols-[2.5fr_1fr_1fr] gap-12 mb-12">
        <div>
          <div className="font-serif text-2xl font-bold text-white mb-1">Jemafer S.A.C.</div>
          <div className="font-mono text-[10px] text-[#3ab6f5] tracking-widest uppercase mb-4">Droguería</div>
          <p className="text-sm text-white/30 leading-relaxed max-w-xs">
            Distribución farmacéutica comprometida con la calidad, el cumplimiento regulatorio y la salud del Perú. Certificados por DIGEMID — BPA.
          </p>
        </div>
        
        <div>
          <div className="font-mono text-[11px] tracking-widest uppercase text-[#1a7fe8] mb-6">Navegación</div>
          <ul className="flex flex-col gap-3">
            {['Nosotros', 'Servicios', 'Regulatorio', 'Cobertura', 'Contacto'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-sm text-white/35 hover:text-white transition-colors">{item === 'Nosotros' ? 'Quiénes somos' : item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-mono text-[11px] tracking-widest uppercase text-[#1a7fe8] mb-6">Contacto</div>
          <ul className="flex flex-col gap-3">
            <li><a href="tel:51923171559" className="text-sm text-white/35 hover:text-white transition-colors">+51 923 171 559</a></li>
            <li><a href="mailto:ventas.drogueriajemafer@gmail.com" className="text-sm text-white/35 hover:text-white transition-colors break-all">ventas.drogueriajemafer@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-wrap justify-between items-center gap-4">
        <p className="text-xs text-white/15">© 2025 Droguería Jemafer S.A.C. · Todos los derechos reservados.</p>
        <div className="flex items-center gap-2 bg-[#d4a544]/5 border border-[#d4a544]/20 px-4 py-1.5 rounded-lg font-mono text-[10px] text-[#d4a544] tracking-wider uppercase">
          ✦ Autorizado DIGEMID · MINSA Perú · BPA
        </div>
      </div>
    </footer>
  );
};

export default Footer;