import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppFloat = () => {
  return (
    <a 
      href="https://wa.me/51923171559?text=Hola%2C%20quiero%20conocer%20sus%20servicios" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] w-[60px] h-[60px] rounded-full bg-[#25d366] flex items-center justify-center shadow-[0_8px_28px_rgba(37,211,102,0.45)] hover:scale-110 hover:shadow-[0_14px_40px_rgba(37,211,102,0.55)] transition-all"
    >
      <MessageSquare className="text-white" size={30} fill="white" />
    </a>
  );
};

export default WhatsAppFloat;