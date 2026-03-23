"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { FormData } from '../types';

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '', details: '' });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Potężna walidacja przed wysłaniem formularza
    if (!formData.name.trim() || formData.name.length < 2) {
      setFormStatus('Proszę podać poprawne imię/firmę (min. 2 znaki).');
      setTimeout(() => setFormStatus(null), 4000);
      return;
    }

    if (!/^\+?[\d\s\-]{9,15}$/.test(formData.phone)) {
      setFormStatus('Proszę podać poprawny numer telefonu (np. +48 500 600 700).');
      setTimeout(() => setFormStatus(null), 4000);
      return;
    }

    if (formData.details.length < 10) {
      setFormStatus('Proszę podać więcej szczegółów inwestycji (min. 10 znaków).');
      setTimeout(() => setFormStatus(null), 4000);
      return;
    }

    try {
      // DOCELOWY KOD: Odkomentuj przy integracji z backendem (np. Next.js API Routes / Sendgrid)
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      */

      setFormStatus('Dziękujemy. Nasz inżynier skontaktuje się z Tobą w ciągu 24h.');
      setFormData({ name: '', phone: '', details: '' });
    } catch (error) {
      setFormStatus('Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub zadzwoń.');
    }
    
    setTimeout(() => setFormStatus(null), 6000);
  };

  // Ulepszone zabezpieczenie przed skanerami E-mail
  const emailParts = ['wyceny', 'epoksy.pl'];
  const emailAddress = emailParts.join('@');

  return (
    <section id="kontakt" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[4rem] shadow-3xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 md:p-24 bg-white relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 text-slate-900">Kontakt i <span className="text-blue-600">Wycena</span></h2>
              <p className="text-slate-500 mb-12 text-lg">Opisz swój projekt, a my przygotujemy bezpłatną kalkulację kosztów.</p>
              
              {formStatus ? (
                <div className={`p-10 rounded-3xl font-bold flex items-center gap-4 animate-in fade-in zoom-in ${formStatus.includes('błąd') || formStatus.includes('Proszę') ? 'bg-red-50 text-red-700' : 'bg-blue-50 text-blue-700'}`}>
                  {formStatus.includes('Dziękujemy') ? <CheckCircle className="w-10 h-10 shrink-0" /> : <AlertTriangle className="w-10 h-10 shrink-0" />} 
                  {formStatus}
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Imię / Firma</label>
                      <input type="text" id="name" required minLength={2} className="w-full p-5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50" onChange={handleInputChange} value={formData.name} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Telefon</label>
                      <input type="tel" id="phone" required pattern="^\+?[\d\s\-]{9,15}$" title="Dozwolone są cyfry, spacje i opcjonalny plus na początku" className="w-full p-5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50" onChange={handleInputChange} value={formData.phone} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="details" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Szczegóły inwestycji</label>
                    <textarea id="details" rows={4} required minLength={10} className="w-full p-5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50" onChange={handleInputChange} value={formData.details}></textarea>
                  </div>
                  <button type="submit" className="w-full py-6 bg-blue-600 text-white font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-blue-600/20 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50">Wyślij Formularz</button>
                </form>
              )}
            </div>
          </div>
          <div className="lg:w-1/2 p-12 md:p-24 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <div className="relative z-10 space-y-12">
              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-xl group-hover:scale-110 transition-transform"><Phone className="w-8 h-8" /></div>
                <div>
                  <p className="text-[10px] font-black uppercase text-blue-500 tracking-[0.3em] mb-3">Telefony kontaktowe</p>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+48500600700" className="text-2xl md:text-3xl font-black transition-colors hover:text-blue-400 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 focus-visible:rounded-lg p-1 -ml-1 inline-block">+48 500 600 700</a>
                    <a href="tel:+48500600701" className="text-2xl md:text-3xl font-black transition-colors hover:text-blue-400 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 focus-visible:rounded-lg p-1 -ml-1 inline-block">+48 500 600 701</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors"><Mail className="w-8 h-8" /></div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] mb-2">E-mail</p>
                  <a href="#" onClick={(e) => { e.preventDefault(); if(typeof window !== 'undefined') window.location.href = `mailto:${emailAddress}`; }} className="text-xl md:text-2xl font-bold transition-colors hover:text-blue-400 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 focus-visible:rounded-lg p-1 -ml-1 inline-block">
                    wyceny<span className="text-blue-500">@</span>epoksy.pl
                  </a>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors"><MapPin className="w-8 h-8" /></div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] mb-2">Siedziba</p>
                  <address className="not-italic text-xl md:text-2xl font-bold">
                    ul. Przemysłowa 5<br/>60-101 Poznań
                  </address>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-20 p-8 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-sm">
              <h4 className="font-black uppercase tracking-widest text-sm mb-4">Gwarancja Satysfakcji</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Każda nasza realizacja objęta jest 5-letnią gwarancją materiałową oraz wykonawczą. Pracujemy wyłącznie na certyfikowanych żywicach europejskich.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;