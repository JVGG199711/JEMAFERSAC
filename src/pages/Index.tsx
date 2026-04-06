"use client";

import React from 'react';

const Index = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-black">
      <iframe 
        src="/jemafer_web.html" 
        className="w-full h-full border-none"
        title="Droguería Jemafer S.A.C."
      />
    </div>
  );
};

export default Index;