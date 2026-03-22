"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react';

// Baza danych naszych zdjęć do portfolio (można tu dodać ich dowolną ilość)
const portfolioImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80",
    title: "Magazyn Amazon",
    desc: "System Epoksydowy High-Gloss (6500m²)"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80",
    title: "Apartamenty Platinum",
    desc: "System Parkingowy OS8 (1200m²)"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80",
    title: "Hala Produkcyjna TechPro",
    desc: "Posadzka Antypoślizgowa R10 (3000m²)"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80",
    title: "Showroom Auto-Premium",
    desc: "Poliuretan Dekoracyjny (800m²)"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80",
    title: "Centrum Logistyczne",
    desc: "Posadzka Grubopowłokowa (4500m²)"
  }
];

const ProjectsSection = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  }, []);

  const closeGallery = useCallback(() => {
    setIsGalleryOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isGalleryOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeGallery();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = isGalleryOpen ? 'hidden' : 'unset';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isGalleryOpen, nextImage, prevImage, closeGallery]);

  return (
    <section id="realizacje" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-[10%] left-[-10%] w-[40%] h-[50%] bg-blue-50/60 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[40%] bg-slate-100 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4">Ostatnie <span className="text-blue-600">Projekty</span></h2>
            <p className="text-slate-500 text-lg">Ponad 150,000 m² położonych posadzek w całej Polsce.</p>
          </div>
          <button 
            type="button" 
            onClick={() => setIsGalleryOpen(true)}
            className="text-xs font-black uppercase tracking-widest px-8 py-4 bg-slate-100 hover:bg-slate-900 hover:text-white transition-all duration-300 rounded-2xl shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 flex items-center gap-2 group"
          >
            <Expand className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Zobacz pełne portfolio
          </button>
        </div>
        
        {/* Podgląd dwóch głównych projektów (Statyczny) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioImages.slice(0, 2).map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-[2rem] aspect-[16/10] shadow-xl shadow-slate-200/50">
              <Image 
                src={item.src} 
                alt={item.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw" 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
                priority={index === 0}
                unoptimized 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-3">{item.desc}</p>
                <h3 className="text-3xl font-black uppercase tracking-tighter">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PEŁNOEKRANOWA GALERIA LIGHTBOX */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-300">
          
          {/* Przycisk Zamknij */}
          <button 
            type="button"
            onClick={closeGallery}
            className="absolute top-6 right-6 z-10 p-4 text-slate-400 hover:text-white bg-white/5 hover:bg-blue-600 rounded-full transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50"
            aria-label="Zamknij galerię"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Główny Kontener Zdjęcia */}
          <div className="relative w-full max-w-6xl px-4 flex flex-col items-center justify-center h-full">
            
            {/* Zdjęcie */}
            <div className="relative w-full aspect-video max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image 
                src={portfolioImages[currentImageIndex].src} 
                alt={portfolioImages[currentImageIndex].title}
                fill
                className="object-contain bg-slate-900/50"
                unoptimized
              />
            </div>

            {/* Napisy pod zdjęciem */}
            <div className="mt-8 text-center animate-in slide-in-from-bottom-4">
              <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-2">
                Zdjęcie {currentImageIndex + 1} z {portfolioImages.length}
              </p>
              <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">
                {portfolioImages[currentImageIndex].title}
              </h3>
              <p className="text-slate-400 text-sm">{portfolioImages[currentImageIndex].desc}</p>
            </div>

            {/* Przycisk Poprzednie */}
            <button 
              type="button"
              onClick={prevImage}
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 p-4 text-slate-400 hover:text-white bg-slate-900/50 hover:bg-blue-600 border border-white/10 rounded-full transition-all backdrop-blur-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50"
              aria-label="Poprzednie zdjęcie"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Przycisk Następne */}
            <button 
              type="button"
              onClick={nextImage}
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 p-4 text-slate-400 hover:text-white bg-slate-900/50 hover:bg-blue-600 border border-white/10 rounded-full transition-all backdrop-blur-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50"
              aria-label="Następne zdjęcie"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

          </div>

          {/* Miniaturki na dole ekranu */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 px-4 overflow-x-auto pb-4">
            {portfolioImages.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 ${currentImageIndex === index ? 'border-blue-500 opacity-100 scale-110' : 'border-transparent opacity-50 hover:opacity-100'}`}
                aria-label={`Pokaż miniaturkę ${index + 1}`}
              >
                <Image 
                  src={item.src} 
                  alt={`Miniaturka: ${item.title}`}
                  fill 
                  className="object-cover" 
                  unoptimized 
                />
              </button>
            ))}
          </div>

        </div>
      )}
    </section>
  );
};

export default ProjectsSection;