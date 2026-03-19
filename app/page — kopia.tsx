"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Menu, X, Phone, MapPin, 
  CheckCircle, Shield, 
  Droplets, Factory, Car, 
  Search, MessageSquare, ClipboardCheck, HardHat, Plus, Minus,
  AlertTriangle, Hammer,
  Facebook, Instagram, Linkedin, ChevronUp, Sparkles, ArrowRight, Mail
} from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  details: string;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    details: ''
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Dziękujemy. Nasz inżynier skontaktuje się z Tobą w ciągu 24h.');
    setFormData({ name: '', phone: '', details: '' });
    setTimeout(() => setFormStatus(null), 6000);
  };

  const faqData = [
    { 
      q: "Jak długo trwa realizacja 100m² posadzki żywicznej?", 
      a: "Standardowy system żywiczny na przygotowanym podłożu wykonujemy w 3-4 dni robocze. Obejmuje to przygotowanie mechaniczne, gruntowanie oraz warstwy zasadnicze." 
    },
    { 
      q: "Czy posadzka żywiczna nadaje się na ogrzewanie podłogowe?", 
      a: "Tak, żywice poliuretanowe i epoksydowe doskonale przewodzą ciepło i są odporne na naprężenia termiczne, co zapobiega pękaniu nawierzchni." 
    },
    { 
      q: "Czy można kłaść żywicę na stare płytki?", 
      a: "Tak, po odpowiednim przygotowaniu (szlifowanie diamentowe płytek i zastosowanie specjalnego gruntu sczepnego), możemy wykonać posadzkę bez konieczności skuwania starej nawierzchni." 
    },
    { 
      q: "Czy żywica przemysłowa wydziela nieprzyjemny zapach?", 
      a: "Stosujemy nowoczesne systemy bezrozpuszczalnikowe, które są praktycznie bezwonne podczas aplikacji i całkowicie bezpieczne po utwardzeniu." 
    }
  ];

  // Dane strukturalne Schema.org dla lokalnego biznesu
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SteelResin",
    "image": "https://steelresin.pl/logo.png",
    "telephone": "+48500600700",
    "url": "https://steelresin.pl",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Przemysłowa 5",
      "addressLocality": "Poznań",
      "postalCode": "60-101",
      "addressCountry": "PL"
    },
    "priceRange": "$$"
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white scroll-smooth">
      
      {/* JSON-LD Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Przycisk powrotu do góry */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[110] p-4 bg-blue-600 text-white rounded-full shadow-2xl transition-all duration-500 hover:bg-slate-700 hover:-translate-y-2 ${showBackToTop ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* Nawigacja */}
      <nav className="fixed w-full z-[100] bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <button onClick={scrollToTop} className="flex items-center gap-3 group text-left transition-transform active:scale-95">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:rotate-12 transition-transform duration-300">
                <Droplets className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl leading-none tracking-tighter">STEEL<span className="text-blue-600">RESIN</span></span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Industrial Floors</span>
              </div>
            </button>

            <div className="hidden lg:flex space-x-10 items-center">
              {['O nas', 'Oferta', 'Realizacje', 'Proces'].map((item) => (
                <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-xs font-black uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors">
                  {item}
                </Link>
              ))}
              <Link href="#kontakt" className="bg-blue-600 text-white px-8 py-3 rounded-md font-bold text-xs uppercase tracking-[0.2em] hover:bg-slate-400 hover:text-slate-900 transition-all duration-300 shadow-lg shadow-blue-600/20">
                Kontakt
              </Link>
            </div>

            <button className="lg:hidden p-2 text-slate-900" onClick={toggleMenu} aria-label="Menu">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-20 min-h-screen flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&q=80" 
            alt="Nowoczesna posadzka epoksydowa w hali przemysłowej" 
            fill
            className="object-cover opacity-30" 
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 rounded-full">
              <Sparkles className="w-3 h-3" /> Realizacje w całej Polsce
            </div>
            
            {/* Poprawione SEO H1 */}
            <h1 className="flex flex-col text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 uppercase tracking-tighter">
              <span className="text-sm md:text-base font-bold text-blue-400 tracking-[0.4em] mb-4 uppercase">Posadzki żywiczne przemysłowe</span>
              <span>Beton, który <br/><span className="text-blue-500">nie pęka.</span></span>
            </h1>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-xl">
              Specjalistyczne systemy żywiczne dla najbardziej wymagających środowisk przemysłowych. Odporność, której możesz zaufać.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#kontakt" className="px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-widest hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 flex items-center gap-3 group shadow-2xl shadow-blue-600/30">
                Darmowa wycena <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* SEKCOJA PROBLEMÓW */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Twoja posadzka <span className="text-blue-600">wymaga odnowienia?</span></h2>
            <p className="text-slate-500 text-lg">Przejdź kursorem nad kartą, aby zobaczyć jak SteelResin rozwiązuje Twój problem.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Pylenie betonu", 
                icon: AlertTriangle, 
                desc: "Pył niszczy maszyny i produkt końcowy.",
                fix: "Zamykamy strukturę betonu, tworząc lustrzaną, czystą taflę."
              },
              { 
                title: "Pęknięcia i ubytki", 
                icon: Hammer, 
                desc: "Nierówności to ryzyko dla wózków i BHP.",
                fix: "Stosujemy iniekcje wzmacniające i masy wyrównujące."
              },
              { 
                title: "Brak odporności", 
                icon: Shield, 
                desc: "Beton nasiąka olejami i kwasami.",
                fix: "Warstwa ochronna odporna na chemię agresywną."
              }
            ].map((item, i) => (
              <div key={i} className="group relative h-[320px] [perspective:1000px]">
                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(10deg)] group-hover:-translate-y-4">
                  <div className="absolute inset-0 bg-slate-50 rounded-[2rem] p-10 flex flex-col items-center text-center justify-center border border-slate-100 group-hover:border-blue-200 group-hover:bg-blue-50/30 transition-colors">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:text-blue-600 transition-colors">
                      <item.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-black uppercase mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Rozwiązanie <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-blue-600 rounded-[2rem] text-white">
                    <p className="font-bold text-sm leading-relaxed">{item.fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DROGA DO NOWEJ POSADZKI */}
      <section id="proces" className="py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-24">Profesjonalny <span className="text-blue-500">Proces</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { title: "Kontakt", icon: MessageSquare, step: "01", detail: "Szybki audyt potrzeb i wstępny kosztorys." },
              { title: "Pomiar", icon: Search, step: "02", detail: "Badanie twardości i wilgotności podłoża CM." },
              { title: "Projekt", icon: ClipboardCheck, step: "03", detail: "Dobór odpowiedniej chemii i kolorystyki." },
              { title: "Montaż", icon: HardHat, step: "04", detail: "Aplikacja systemu i oddanie do użytku." }
            ].map((item, i) => (
              <div 
                key={i} 
                className="relative group cursor-default"
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {i < 3 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-blue-600/50 to-transparent z-0"></div>
                )}
                
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

      {/* OFERTA */}
      <section id="oferta" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Nasze <span className="text-blue-600">Specjalizacje</span></h2>
            <div className="w-16 h-1 bg-blue-600 mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Epoksydowe", type: "Heavy Duty", icon: Factory, desc: "Najwyższa odporność mechaniczna dla fabryk i logistyki ciężkiej." },
              { title: "Poliuretanowe", type: "Design & Comfort", icon: Droplets, desc: "Elastyczne i ciche posadzki idealne do biur, salonów i showroomów." },
              { title: "Garażowe", type: "Anti-Slip", icon: Car, desc: "Systemy odporne na sól drogową i ścieranie opon, klasa antypoślizgowa R10." }
            ].map((item, i) => (
              <div key={i} className="p-12 bg-white rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 group">
                <item.icon className="w-14 h-14 text-blue-600 mb-8 group-hover:rotate-6 transition-transform" />
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-3">{item.type}</p>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{item.desc}</p>
                <Link href="#kontakt" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 group-hover:text-slate-900 transition-colors">Zapytaj o cenę <Plus className="w-4 h-4" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REALIZACJE */}
      <section id="realizacje" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4">Ostatnie <span className="text-blue-600">Projekty</span></h2>
              <p className="text-slate-500 text-lg">Ponad 150,000 m² położonych posadzek w całej Polsce.</p>
            </div>
            <button className="text-xs font-black uppercase tracking-widest px-8 py-4 bg-slate-100 hover:bg-slate-900 hover:text-white transition-all duration-300 rounded-2xl shadow-sm">Zobacz pełne portfolio</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-[2rem] aspect-[16/10]">
              <Image 
                src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80" 
                alt="System epoksydowy w magazynie logistycznym Amazon - realizacja SteelResin" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-3">Magazyn Amazon (6500m²)</p>
                <h3 className="text-3xl font-black uppercase tracking-tighter">System Epoksydowy High-Gloss</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-[2rem] aspect-[16/10]">
              <Image 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80" 
                alt="Posadzka parkingowa OS8 w apartamentowcu Platinum - realizacja SteelResin" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-3">Apartamenty Platinum (1200m²)</p>
                <h3 className="text-3xl font-black uppercase tracking-tighter">System Parkingowy OS8</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Częste <span className="text-blue-600">Pytania</span></h2>
            <p className="text-slate-500 uppercase text-xs font-bold tracking-[0.3em]">Baza wiedzy klienta</p>
          </div>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-[1.5rem] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/5 group">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-8 text-left transition-colors"
                >
                  <span className={`font-bold text-lg transition-colors ${activeFaq === i ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>{faq.q}</span>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${activeFaq === i ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-50 text-blue-600'}`}>
                    {activeFaq === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8 text-slate-500 leading-relaxed border-t border-slate-50 pt-6">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT I WYCENA */}
      <section id="kontakt" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[4rem] shadow-3xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-24 bg-white">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 text-slate-900">Kontakt i <span className="text-blue-600">Wycena</span></h2>
              <p className="text-slate-500 mb-12 text-lg">Opisz swój problem, a my postaramy się pomóc.</p>
              
              {formStatus ? (
                <div className="bg-blue-50 text-blue-700 p-10 rounded-3xl font-bold flex items-center gap-4 animate-in fade-in zoom-in">
                  <CheckCircle className="w-10 h-10 shrink-0" /> {formStatus}
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Imię / Firma</label>
                      <input type="text" id="name" required className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" onChange={handleInputChange} value={formData.name} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Telefon</label>
                      <input type="tel" id="phone" required className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" onChange={handleInputChange} value={formData.phone} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Szczegóły</label>
                    <textarea id="details" rows={4} required className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" onChange={handleInputChange} value={formData.details}></textarea>
                  </div>
                  <button className="w-full py-6 bg-blue-600 text-white font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-blue-600/20 active:scale-95">Wyślij Formularz</button>
                </form>
              )}
            </div>
            <div className="lg:w-1/2 p-12 md:p-24 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              
              <div className="relative z-10 space-y-12">
                {/* 1. Telefony */}
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-xl group-hover:scale-110 transition-transform"><Phone className="w-8 h-8" /></div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-blue-500 tracking-[0.3em] mb-3">Telefony kontaktowe</p>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+48500600700" className="text-2xl md:text-3xl font-black transition-colors hover:text-blue-400">+48 500 600 700</a>
                      <a href="tel:+48500600701" className="text-2xl md:text-3xl font-black transition-colors hover:text-blue-400">+48 500 600 701</a>
                    </div>
                  </div>
                </div>

                {/* 2. E-mail */}
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors"><Mail className="w-8 h-8" /></div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] mb-2">E-mail</p>
                    <a href="mailto:wyceny@steelresin.pl" className="text-xl md:text-2xl font-bold transition-colors hover:text-blue-400">wyceny@steelresin.pl</a>
                  </div>
                </div>

                {/* 3. Siedziba */}
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors"><MapPin className="w-8 h-8" /></div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] mb-2">Siedziba</p>
                    <p className="text-xl md:text-2xl font-bold">ul. Przemysłowa 5<br/>60-101 Poznań</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-20 p-8 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-sm">
                <h4 className="font-black uppercase tracking-widest text-sm mb-4">Gwarancja Satysfakcji</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Każda nasza realizacja objęta jest gwarancją materiałową oraz wykonawczą. Pracujemy wyłącznie na certyfikowanych żywicach europejskich.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCOJA SEO (Baza wiedzy indeksowana przez Google) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-slate-500 leading-relaxed">
            <div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">Posadzki żywiczne przemysłowe – profesjonalne zabezpieczenie betonu</h2>
              <p className="mb-6">Posadzki żywiczne to innowacyjne rozwiązanie stosowane powszechnie w halach produkcyjnych, magazynach logistycznych, garażach podziemnych oraz obiektach komercyjnych. Zignorowanie degradacji betonu, takiej jak pylenie czy pęknięcia, może prowadzić do uszkodzeń maszyn oraz zagrożeń BHP. Nasze bezspoinowe systemy skutecznie izolują podłoże, zapewniając łatwość w utrzymaniu czystości oraz spełnienie surowych norm sanitarnych (Sanepid, HACCP).</p>
              
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">Posadzki epoksydowe</h3>
              <p>Żywica epoksydowa charakteryzuje się ekstremalną wytrzymałością mechaniczną, co czyni ją idealnym wyborem do miejsc narażonych na duże obciążenia – np. ruch wózków widłowych. Dodatkowo wykazuje wysoką odporność chemiczną, zabezpieczając podłoże przed olejami i kwasami.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3 mt-1">Posadzki poliuretanowe</h3>
              <p className="mb-6">Wymagające elastyczności obiekty, takie jak biura, chłodnie czy przestrzenie domowe, zyskują najwięcej na wdrożeniu systemów poliuretanowych. Są one wysoce odporne na zarysowania, dobrze tłumią kroki i wykazują pełną odporność na promieniowanie UV (nie żółkną z upływem czasu).</p>

              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">Zastosowanie i właściwości</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Posadzki garażowe (odporne na sól drogową, wilgoć i ścieranie opon).</li>
                <li>Nawierzchnie antypoślizgowe (kwarcowe) zapewniające bezpieczeństwo (klasa antypoślizgowa R10-R12).</li>
                <li>Hale produkcyjne i przemysłowe o podwyższonym rygorze higienicznym.</li>
              </ul>
              <p className="mt-6 font-bold text-slate-700">Skontaktuj się z nami, aby dobrać odpowiedni materiał na Twoją inwestycję.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <button onClick={scrollToTop} className="flex items-center gap-3 active:scale-95 transition-transform group">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <Droplets className="text-white w-5 h-5" />
                </div>
                <span className="font-black text-xl text-white tracking-tighter">STEEL<span className="text-blue-500">RESIN</span></span>
              </button>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center md:text-left">Profesjonalne systemy posadzkowe od 2009 roku.</p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors duration-300"><Facebook className="w-4 h-4" /></Link>
                <Link href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors duration-300"><Instagram className="w-4 h-4" /></Link>
                <Link href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors duration-300"><Linkedin className="w-4 h-4" /></Link>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="font-black text-xs tracking-widest text-white uppercase">STEELRESIN © 2024</p>
              <div className="mt-4 flex gap-3 text-[10px] font-bold uppercase text-slate-500 tracking-widest justify-center md:justify-end">
                <Link href="#" className="hover:text-blue-500 transition-colors">Polityka prywatności</Link>
                <span>|</span>
                <Link href="#" className="hover:text-blue-500 transition-colors">Cookies</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}