"use client";
import React from 'react';
import Link from 'next/link';
import { Layers, Facebook, Instagram, Linkedin } from 'lucide-react';
import { scrollToTop } from '@/lib/utils';
import { SetterProps } from '../types';

const Footer = ({ setActiveModal }: SetterProps) => {
  return (
    <footer className="bg-slate-950 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <button type="button" onClick={scrollToTop} className="flex items-center gap-3 active:scale-95 transition-transform group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 focus-visible:rounded-lg p-1" aria-label="Strona główna">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <Layers className="text-white w-5 h-5" />
              </div>
              <span className="font-black text-xl text-white tracking-tighter">EPOKSY<span className="text-blue-500">.</span></span>
            </button>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center md:text-left">Profesjonalne systemy posadzkowe od 2009 roku.</p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              <Link href="#" aria-label="Nasz profil na Facebook" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50"><Facebook className="w-4 h-4" /></Link>
              <Link href="#" aria-label="Nasz profil na Instagram" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50"><Instagram className="w-4 h-4" /></Link>
              <Link href="#" aria-label="Nasz profil na Linkedin" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50"><Linkedin className="w-4 h-4" /></Link>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="font-black text-xs tracking-widest text-white uppercase">EPOKSY © 2026</p>
            <div className="mt-4 flex gap-3 text-[10px] font-bold uppercase text-slate-500 tracking-widest justify-center md:justify-end">
              <button type="button" onClick={() => setActiveModal('privacy')} className="hover:text-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:rounded-sm">Polityka prywatności</button>
              <span>|</span>
              <button type="button" onClick={() => setActiveModal('cookies')} className="hover:text-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:rounded-sm">Cookies</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;