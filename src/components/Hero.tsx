import React from 'react';
import { ArrowRight, Brain, Clock, Shield } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485')] opacity-10 bg-cover bg-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-8">
            <span className="bg-indigo-500/20 text-indigo-200 text-sm px-4 py-2 rounded-full">
              Ihre KI-Transformation beginnt hier
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Von KI-Unsicherheit zu KI-<span className="text-indigo-400">Expertise</span>
            <br />in nur 10 Minuten täglich
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Schließen Sie sich 450+ Fachleuten an, die ihre Karriere durch KI-Beherrschung transformiert haben
          </p>
          <div className="space-y-4">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-lg px-8 py-4 rounded-full font-semibold flex items-center mx-auto gap-2 transition-all transform hover:scale-105">
              Starten Sie Ihre KI-Lernreise
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-indigo-200 text-sm">
              Keine technischen Vorkenntnisse erforderlich - Heute starten, morgen erfolgreich sein
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}