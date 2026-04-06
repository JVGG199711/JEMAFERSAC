"use client";

import React from 'react';
import { ChevronRight, MessageSquare } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen grid lg:grid-cols-2 items-center px-[4vw] pt-[72px] bg-[#04090f] overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full bg-radial-gradient from-[#0d4fa8]/70 to-transparent blur-[80px] opacity-40"></div>
        <div className="absolute bottom-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full bg-radial-gradient from-[#0bbf72]/35 to-transparent blur-[80px] opacity-40"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(58,182,245,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(58,182,245,0.04)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 lg:pr-12 py-20 text-center lg:text-left">
        <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.16em] uppercase text-[#0bbf72] border border-[#0bbf72]/25 bg-[#0bbf72]/5 px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0bbf72] animate-pulse"></span>
          Certificados DIGEMID · BPA · GSP
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[6rem] font-black leading-[0.95] text-white tracking-tight mb-8">
          Salud que<br />
          <span className="italic bg-gradient-to-r from-[#1a7fe8] to-[#3ab6f5] bg-clip-text text-transparent">llega lejos</span>
          <span className="block font-normal italic text-white/35 text-[60%] tracking-normal mt-2">Distribución farmacéutica de confianza</span>
        </h1>

        <p className="text-lg text-white/55 leading-relaxed max-w-lg mb-10 mx-auto lg:mx-0">
          Medicamentos, dispositivos médicos y productos sanitarios distribuidos en todo el Perú. Con certificación oficial, cumplimiento regulatorio total y atención personalizada.
        </p>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-14">
          <a href="https://wa.me/51923171559" className="inline-flex items-center gap-2.5 bg-gradient-to-br from-[#0bbf72] to-[#07895a] text-white font-medium px-8 py-4 rounded-lg hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,191,114,0.4)] transition-all">
            <MessageSquare size={18} />
            Escribir ahora
          </a>
          <a href="#servicios" className="inline-flex items-center gap-2.5 border border-white/18 text-white/75 px-8 py-4 rounded-lg hover:bg-white/5 hover:border-white/35 transition-all">
            Ver servicios
            <ChevronRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-3 border border-white/10 rounded-xl overflow-hidden max-w-lg mx-auto lg:mx-0">
          <div className="bg-white/5 p-4 text-center border-r border-white/10">
            <div className="font-serif text-2xl font-bold text-white leading-none">BPA<span className="text-[#0bbf72] text-sm ml-0.5">✓</span></div>
            <div className="text-[11px] text-white/40 uppercase tracking-wider mt-1">Certificado</div>
          </div>
          <div className="bg-white/5 p-4 text-center border-r border-white/10">
            <div className="font-serif text-2xl font-bold text-white leading-none">Perú<span className="text-[#0bbf72] text-sm ml-0.5">+</span></div>
            <div className="text-[11px] text-white/40 uppercase tracking-wider mt-1">Cobertura</div>
          </div>
          <div className="bg-white/5 p-4 text-center">
            <div className="font-serif text-2xl font-bold text-white leading-none">100<span className="text-[#0bbf72] text-sm ml-0.5">%</span></div>
            <div className="text-[11px] text-white/40 uppercase tracking-wider mt-1">Regulatorio</div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center h-full py-20">
        <div className="relative w-[36vw] max-w-[420px] aspect-square">
          <div className="absolute inset-[-30px] bg-[radial-gradient(circle_at_50%,rgba(212,165,68,0.25),transparent_65%)] rounded-full animate-[pulse_3s_ease-in-out_infinite] opacity-60"></div>
          
          {/* Animated Rings */}
          <div className="absolute inset-[5%] rounded-full border border-dashed border-[#3ab6f5]/20 animate-[spin_35s_linear_infinite]"></div>
          <div className="absolute inset-[13%] rounded-full border border-dashed border-[#0bbf72]/20 animate-[spin_24s_linear_infinite_reverse]"></div>
          <div className="absolute inset-[21%] rounded-full border border-dashed border-[#d4a544]/20 animate-[spin_18s_linear_infinite]"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 aspect-square rounded-full bg-gradient-to-br from-[#f8e07a] via-[#c8880a] to-[#8a5a02] flex flex-col items-center justify-center shadow-[inset_-10px_-10px_25px_rgba(0,0,0,0.45),inset_5px_5px_14px_rgba(255,255,255,0.3),0_0_60px_rgba(200,136,10,0.25),0_20px_60px_rgba(0,0,0,0.5)] border-[3px] border-[#f8e07a]/40 animate-bounce transition-all">
            <div className="font-serif text-4xl font-black text-[#4a2800] leading-none">BPA</div>
            <div className="w-[65%] h-px bg-[#4a2800]/30 my-2"></div>
            <div className="font-mono text-[8px] text-[#4a2800]/65 uppercase text-center leading-relaxed">DIGEMID · MINSA PERÚ</div>
            <div className="w-[65%] h-px bg-[#4a2800]/30 my-2"></div>
            <div className="font-serif text-2xl font-bold text-[#5c3400]">GSP</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;