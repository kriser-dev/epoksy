"use client";
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
      if (window.scrollY < 50 && window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', window.location.pathname);
  };

  return (
    <button 
      type="button"
      onClick={scrollToTop}
      aria-label="Powrót do góry strony"
      className={`fixed bottom-8 right-8 z-[110] p-4 bg-blue-600 text-white rounded-full shadow-2xl transition-all duration-500 hover:bg-slate-700 hover:-translate-y-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
};

export default BackToTop;