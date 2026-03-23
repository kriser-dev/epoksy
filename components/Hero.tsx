"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { scrollToElement } from '@/lib/utils';

const Hero = () => {
  return (
    <header className="relative pt-20 min-h-screen flex items-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&q=80" alt="Nowoczesna posadzka epoksydowa w hali przemysłowej" fill sizes="100vw" className="object-cover opacity-30" priority quality={85} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 rounded-full">
            <Sparkles className="w-3 h-3" /> Realizacje w całej Polsce
          </div>
          <h1 className="flex flex-col text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 uppercase tracking-tighter">
            <span className="text-sm md:text-base font-bold text-blue-400 tracking-[0.4em] mb-4 uppercase">Posadzki żywiczne przemysłowe</span>
            <span>Beton, który <br/><span className="text-blue-500">nie pęka.</span></span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-xl">
            Specjalistyczne systemy żywiczne dla najbardziej wymagających środowisk przemysłowych. Odporność, której możesz zaufać.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#kontakt" onClick={(e) => scrollToElement(e, '#kontakt')} className="px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-widest hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 flex items-center gap-3 group shadow-2xl shadow-blue-600/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 focus-visible:rounded-lg">
              Darmowa wycena <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;