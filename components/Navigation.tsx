"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Layers } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', window.location.pathname);
    setIsMenuOpen(false);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
    setIsMenuOpen(false);
  };

  const navLinks = ['O nas', 'Oferta', 'Realizacje', 'Proces'];

  return (
    <nav className="fixed w-full z-[100] bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <button type="button" onClick={scrollToTop} className="flex items-center gap-3 group text-left transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 focus-visible:rounded-lg" aria-label="Strona główna Epoksy">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:rotate-12 transition-transform duration-300">
              <Layers className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl leading-none tracking-tighter text-slate-900">EPOKSY<span className="text-blue-600">.</span></span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Industrial Floors</span>
            </div>
          </button>

          <div className="hidden lg:flex space-x-10 items-center">
            {navLinks.map((item) => {
              const href = `#${item.toLowerCase().replace(' ', '-')}`;
              return (
                <Link key={item} href={href} onClick={(e) => scrollToSection(e, href)} className="text-xs font-black uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 focus-visible:rounded-md p-1">
                  {item}
                </Link>
              );
            })}
            <Link href="#kontakt" onClick={(e) => scrollToSection(e, '#kontakt')} className="bg-blue-600 text-white px-8 py-3 rounded-md font-bold text-xs uppercase tracking-[0.2em] hover:bg-slate-400 hover:text-slate-900 transition-all duration-300 shadow-lg shadow-blue-600/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50">
              Kontakt
            </Link>
          </div>

          <button type="button" className="lg:hidden p-2 text-slate-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 focus-visible:rounded-lg" onClick={toggleMenu} aria-label="Otwórz menu mobilne">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 p-4 space-y-4 animate-in slide-in-from-top-5 shadow-xl">
          {navLinks.map((item) => {
            const href = `#${item.toLowerCase().replace(' ', '-')}`;
            return (
              <Link key={item} href={href} onClick={(e) => scrollToSection(e, href)} className="block text-sm font-black uppercase tracking-widest p-3 text-slate-900 hover:bg-slate-50 rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50">
                {item}
              </Link>
            );
          })}
          <Link href="#kontakt" onClick={(e) => scrollToSection(e, '#kontakt')} className="block text-sm font-black uppercase tracking-widest p-3 text-blue-600 hover:bg-blue-50 rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50">
            Kontakt
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;