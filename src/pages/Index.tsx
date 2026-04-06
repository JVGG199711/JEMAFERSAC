"use client";

import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Services from "@/components/Services";
import Regulatory from "@/components/Regulatory";
import Coverage from "@/components/Coverage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  useEffect(() => {
    // Simple Intersection Observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#fafcff]">
      {/* External Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      
      <Navbar />
      
      <main>
        <Hero />
        <Ticker />
        
        <div className="reveal">
          <About />
        </div>
        
        <div className="reveal">
          <Services />
        </div>
        
        <div className="reveal">
          <Regulatory />
        </div>
        
        <div className="reveal">
          <Coverage />
        </div>
        
        <div className="reveal">
          <Contact />
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;