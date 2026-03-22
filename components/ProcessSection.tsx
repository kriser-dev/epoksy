"use client";
import React, { useState } from 'react';
import { MessageSquare, Search, ClipboardCheck, HardHat } from 'lucide-react';

const ProcessSection = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  
  const processSteps = [
    { title: "Kontakt", icon: MessageSquare, step: "01", detail: "Szybki audyt potrzeb i wstępny kosztorys." },
    { title: "Pomiar", icon: Search, step: "02", detail: "Badanie twardości i wilgotności podłoża CM." },
    { title: "Projekt", icon: ClipboardCheck, step: "03", detail: "Dobór odpowiedniej chemii i kolorystyki." },
    { title: "Montaż", icon: HardHat, step: "04", detail: "Aplikacja systemu i oddanie do użytku." }
  ];

  return (
    <section id="proces" className="py-32 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-24">Profesjonalny <span className="text-blue-500">Proces</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {processSteps.map((item, i) => (
            <div key={i} className="relative group cursor-default" onMouseEnter={() => setHoveredStep(i)} onMouseLeave={() => setHoveredStep(null)}>
              {i < 3 && <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-blue-600/50 to-transparent z-0"></div>}
              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-8 border-2 transition-all duration-500 ${hoveredStep === i ? 'bg-blue-600 border-blue-400 -translate-y-4 shadow-[0_0_40px_rgba(37,99,235,0.4)]' : 'bg-slate-900 border-slate-800'}`}>
                  <item.icon className={`w-10 h-10 ${hoveredStep === i ? 'text-white' : 'text-slate-500'}`} />
                </div>
                <div className="absolute -top-12 text-8xl font-black text-white/5 select-none transition-all duration-500 group-hover:text-blue-600/10">
                  {item.step}
                </div>
                <h4 className="text-xl font-black uppercase tracking-widest mb-4">{item.title}</h4>
                <p className={`text-sm leading-relaxed transition-all duration-500 ${hoveredStep === i ? 'text-slate-200' : 'text-slate-500'}`}>
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;