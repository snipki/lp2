import React from 'react';
import { ArrowRight } from 'lucide-react';

export function EmotionalCTA() {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-indigo-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] opacity-10 bg-cover bg-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Lassen Sie sich nicht von KI abhängen</h2>
          <p className="text-xl mb-8">
            Jeder Tag des Wartens ist ein Tag, an dem Ihre Kollegen weiter vorankommen. Werden Sie in 12 Monaten die KI-Revolution anführen oder versuchen aufzuholen?
          </p>
          <div className="space-y-6">
            <button className="bg-white text-indigo-900 text-lg px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-indigo-50 transition-all transform hover:scale-105">
              Werden Sie einer von 450+ KI-Pionieren
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-indigo-200 text-sm">
              Die Zukunft gehört denen, die sich heute darauf vorbereiten
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}