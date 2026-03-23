'use client';
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center p-8 max-w-md bg-white rounded-3xl shadow-xl border border-slate-100">
        <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
          Coś poszło nie tak!
        </h2>
        <p className="text-slate-600 mb-8 leading-relaxed">Przepraszamy, wystąpił niespodziewany błąd: {error.message || 'Brak połączenia.'}</p>
        <button
          onClick={reset}
          className="w-full px-8 py-4 bg-blue-600 text-white font-black uppercase tracking-widest rounded-xl hover:bg-slate-900 transition-all duration-300"
        >
          Spróbuj ponownie
        </button>
      </div>
    </div>
  );
}