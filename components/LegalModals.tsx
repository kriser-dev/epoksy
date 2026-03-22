"use client";
import React, { useEffect } from 'react';
import { X, FileText, Cookie } from 'lucide-react';
import { ModalProps } from '../types';

const LegalModals = ({ activeModal, setActiveModal }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = activeModal ? 'hidden' : 'unset';
  }, [activeModal]);

  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl p-8 md:p-12 max-w-3xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl">
        <button type="button" onClick={() => setActiveModal(null)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors" aria-label="Zamknij okno">
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
            {activeModal === 'privacy' ? <FileText className="w-6 h-6" /> : <Cookie className="w-6 h-6" />}
          </div>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-slate-900">
            {activeModal === 'privacy' ? 'Polityka Prywatności' : 'Polityka Cookies'}
          </h2>
        </div>

        <div className="text-sm text-slate-600 space-y-6 leading-relaxed">
          {activeModal === 'privacy' ? (
            <>
              <p><strong>1. Administrator Danych</strong><br/>Administratorem Twoich danych osobowych przekazywanych w ramach formularza kontaktowego jest firma Epoksy z siedzibą w Poznaniu, ul. Przemysłowa 5, 60-101 Poznań.</p>
              <p><strong>2. Cel przetwarzania</strong><br/>Twoje dane (imię, numer telefonu, szczegóły inwestycji) przetwarzane są wyłącznie w celu obsługi Twojego zapytania, przygotowania wyceny oraz kontaktu zwrotnego w sprawie usług posadzkowych.</p>
              <p><strong>3. Podstawa prawna</strong><br/>Podstawą prawną przetwarzania danych jest podjęcie działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy (art. 6 ust. 1 lit. b RODO) oraz nasz prawnie uzasadniony interes w postaci odpowiedzi na zapytania klientów (art. 6 ust. 1 lit. f RODO).</p>
              <p><strong>4. Okres przechowywania</strong><br/>Dane będziemy przetwarzać przez okres niezbędny do obsługi zapytania i przygotowania oferty, a po tym czasie mogą być one przechowywane przez okres przedawnienia ewentualnych roszczeń.</p>
              <p><strong>5. Twoje prawa</strong><br/>Posiadasz prawo dostępu do treści swoich danych oraz prawo ich sprostowania, usunięcia, ograniczenia przetwarzania, prawo do przenoszenia danych oraz prawo wniesienia sprzeciwu. Posiadasz również prawo wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych).</p>
            </>
          ) : (
            <>
              <p><strong>1. Czym są pliki cookies?</strong><br/>Pliki cookies (tzw. "ciasteczka") to niewielkie pliki tekstowe wysyłane przez serwer internetowy i zapisywane po stronie użytkownika (na komputerze, smartfonie itp.). Pozwalają one na zapamiętanie specyficznych informacji dotyczących Twojej wizyty na stronie.</p>
              <p><strong>2. W jakim celu używamy cookies?</strong><br/>Na naszej stronie (Epoksy.pl) używamy ciasteczek w następujących celach:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Niezbędne:</strong> Utrzymanie prawidłowego działania strony (np. zapamiętanie faktu ukrycia banera informacyjnego o cookies).</li>
                <li><strong>Analityczne:</strong> Zbieranie anonimowych statystyk, które pozwalają nam zrozumieć, w jaki sposób użytkownicy korzystają ze strony (np. Google Analytics), co umożliwia ulepszanie jej struktury i zawartości.</li>
              </ul>
              <p><strong>3. Zarządzanie plikami cookies</strong><br/>Większość przeglądarek internetowych domyślnie dopuszcza przechowywanie plików cookies. Możesz w każdej chwili dokonać zmiany ustawień dotyczących plików cookies w swojej przeglądarce (np. zablokować ich automatyczną obsługę lub wymusić informowanie o ich każdorazowym przesłaniu na urządzenie).</p>
              <p className="font-bold text-slate-900 mt-6">Pamiętaj, że ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na naszej stronie internetowej.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LegalModals;