"use client";
import React from 'react';
import Link from 'next/link';
import { Factory, Layers, Car, Plus } from 'lucide-react';
import { scrollToElement } from '@/lib/utils';

const OfferSection = () => {
  return (
    <section id="oferta" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter">Nasze <span className="text-blue-600">Specjalizacje</span></h2>
          <div className="w-16 h-1 bg-blue-600 mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Epoksydowe", type: "Heavy Duty", icon: Factory, desc: "Najwyższa odporność mechaniczna dla fabryk i logistyki ciężkiej." },
            { title: "Poliuretanowe", type: "Design & Comfort", icon: Layers, desc: "Elastyczne i ciche posadzki idealne do biur, salonów i showroomów." },
            { title: "Garażowe", type: "Anti-Slip", icon: Car, desc: "Systemy odporne na sól drogową i ścieranie opon, klasa antypoślizgowa R10." }
          ].map((item, i) => (
            <div key={i} className="p-12 bg-white/90 backdrop-blur-sm rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 group">
              <item.icon className="w-14 h-14 text-blue-600 mb-8 group-hover:rotate-6 transition-transform" />
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-3">{item.type}</p>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">{item.desc}</p>
              <Link href="#kontakt" onClick={(e) => scrollToElement(e, '#kontakt')} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 group-hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 focus-visible:rounded-md p-1">
                Zapytaj o cenę <Plus className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;