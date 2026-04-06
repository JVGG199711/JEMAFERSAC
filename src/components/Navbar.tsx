"use client";

import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[4vw] h-[72px] transition-all duration-300",
      isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
    )}>
      <a href="#" className="flex items-center gap-3 no-underline group">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0bbf72] to-[#07895a] flex items-center justify-center relative overflow-hidden">
          <div className="absolute w-5 h-1 bg-white rounded-sm"></div>
          <div className="absolute h-5 w-1 bg-white rounded-sm"></div>
        </div>
        <div className="flex flex-col leading-[1.1]">
          <span className="font-serif text-lg font-bold text-white tracking-wide">Jemafer S.A.C.</span>
          <span className="font-mono text-[10px] text-[#3ab6f5] tracking-[0.18em] uppercase mt-1">Droguería</span>
        </div>
      </a>
      
      <div className="hidden md:flex items-center gap-8">
        {['Nosotros', 'Servicios', 'Regulatorio', 'Cobertura'].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[13px] font-medium tracking-wider uppercase text-white/50 hover:text-white transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#0bbf72] transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
        <a 
          href="#contacto" 
          className="font-mono text-[11px] font-medium tracking-widest uppercase bg-[#0bbf72] text-[#04090f] px-6 py-2.5 rounded-lg hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(11,191,114,0.35)] transition-all"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
};

export default Navbar;