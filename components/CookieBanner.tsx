"use client";
import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import { SetterProps } from '../types';

const CookieBanner = ({ setActiveModal }: SetterProps) => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('epoksy-cookie-consent')) {
      setShowCookieBanner(true);
    }
  }, []);

  if (!showCookieBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-[120] bg-slate-900 text-white p-6 rounded-3xl shadow-2xl border border-slate-800 animate-in slide-in-from-bottom-10 fade-in duration-500">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center shrink-0">
          <Cookie className="w-5 h-5 text-blue-500" />
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Polityka Cookies</h4>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Używamy ciasteczek (cookies), aby zapewnić Ci najwyższą jakość usług i optymalizować działanie strony. Dalsze korzystanie z witryny oznacza zgodę na ich wykorzystanie.
          </p>
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={() => { localStorage.setItem('epoksy-cookie-consent', 'true'); setShowCookieBanner(false); }} className="text-xs font-bold uppercase tracking-widest bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-xl transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/50">
              Akceptuję
            </button>
            <button type="button" onClick={() => setActiveModal('cookies')} className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white px-5 py-3 transition-colors flex items-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-500/50 focus-visible:rounded-xl">
              Więcej
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;