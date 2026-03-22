"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FaqSection = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const faqData = [
    { q: "Jak długo trwa realizacja 100m² posadzki żywicznej?", a: "Standardowy system żywiczny na przygotowanym podłożu wykonujemy w 3-4 dni robocze. Obejmuje to przygotowanie mechaniczne, gruntowanie oraz warstwy zasadnicze." },
    { q: "Czy posadzka żywiczna nadaje się na ogrzewanie podłogowe?", a: "Tak, żywice poliuretanowe i epoksydowe doskonale przewodzą ciepło i są odporne na naprężenia termiczne, co zapobiega pękaniu nawierzchni." },
    { q: "Czy można kłaść żywicę na stare płytki?", a: "Tak, po odpowiednim przygotowaniu (szlifowanie diamentowe płytek i zastosowanie specjalnego gruntu sczepnego), możemy wykonać posadzkę bez konieczności skuwania starej nawierzchni." },
    { q: "Czy żywica przemysłowa wydziela nieprzyjemny zapach?", a: "Stosujemy nowoczesne systemy bezrozpuszczalnikowe, które są praktycznie bezwonne podczas aplikacji i całkowicie bezpieczne po utwardzeniu." }
  ];

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Częste <span className="text-blue-600">Pytania</span></h2>
          <p className="text-slate-500 uppercase text-xs font-bold tracking-[0.3em]">Baza wiedzy klienta</p>
        </div>
        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <div key={i} className="bg-white/90 backdrop-blur-sm border border-slate-100 rounded-[1.5rem] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/5 group">
              <button type="button" onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex justify-between items-center p-8 text-left transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 focus-visible:rounded-[1.5rem]" aria-expanded={activeFaq === i}>
                <span className={`font-bold text-lg transition-colors ${activeFaq === i ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>{faq.q}</span>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${activeFaq === i ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-50 text-blue-600'}`}>
                  {activeFaq === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-8 text-slate-500 leading-relaxed border-t border-slate-50 pt-6">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;