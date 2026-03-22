"use client";
import React, { useState } from 'react';
import { AlertTriangle, Hammer, Shield, ArrowRight } from 'lucide-react';

const ProblemSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  const problems = [
    { title: "Pylenie betonu", icon: AlertTriangle, desc: "Pył niszczy maszyny i produkt końcowy.", fix: "Zamykamy strukturę betonu, tworząc lustrzaną, czystą taflę." },
    { title: "Pęknięcia i ubytki", icon: Hammer, desc: "Nierówności to ryzyko dla wózków i BHP.", fix: "Stosujemy iniekcje wzmacniające i masy wyrównujące." },
    { title: "Brak odporności", icon: Shield, desc: "Beton nasiąka olejami i kwasami.", fix: "Warstwa ochronna odporna na chemię agresywną." }
  ];

  return (
    <section id="o-nas" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-10 -left-20 w-72 h-72 bg-slate-100 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Twoja posadzka <span className="text-blue-600">wymaga odnowienia?</span></h2>
          <p className="text-slate-500 text-lg">Przejdź kursorem nad kartą, aby zobaczyć jak Epoksy rozwiązuje Twój problem.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, i) => (
            <div 
              key={i} 
              className="group relative h-[320px] [perspective:1000px] cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 focus-visible:rounded-[2rem]" 
              onClick={() => setActiveCard(activeCard === i ? null : i)} 
              onMouseLeave={() => setActiveCard(null)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveCard(activeCard === i ? null : i);
                }
              }}
              aria-expanded={activeCard === i}
              role="button"
            >
              <div className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${activeCard === i ? '[transform:rotateY(10deg)] -translate-y-4' : 'lg:group-hover:[transform:rotateY(10deg)] lg:group-hover:-translate-y-4'}`}>
                <div className={`absolute inset-0 backdrop-blur-sm rounded-[2rem] p-10 flex flex-col items-center text-center justify-center border shadow-sm transition-colors ${activeCard === i ? 'bg-blue-50/80 border-blue-200' : 'bg-white/80 border-slate-100 lg:group-hover:border-blue-200 lg:group-hover:bg-blue-50/80'}`}>
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-colors ${activeCard === i ? 'bg-white text-blue-600' : 'bg-slate-50 lg:group-hover:bg-white lg:group-hover:text-blue-600'}`}>
                    <item.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-black uppercase mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                  <div className={`mt-6 flex items-center gap-2 text-[10px] font-black uppercase text-blue-600 transition-opacity ${activeCard === i ? 'opacity-100' : 'opacity-0 lg:group-hover:opacity-100'}`}>
                    Rozwiązanie <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-500 bg-blue-600 rounded-[2rem] text-white ${activeCard === i ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100'}`}>
                  <p className="font-bold text-sm leading-relaxed">{item.fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;