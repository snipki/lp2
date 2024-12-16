import React from 'react';
import { Check } from 'lucide-react';

export function Pricing() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Investieren Sie in Ihre KI-Zukunft</h2>
          <p className="text-xl text-gray-600">Werden Sie Teil der KI-Revolution mit unserem umfassenden Lernpaket</p>
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-indigo-600 p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Jahres-Mitgliedschaft</h3>
            <div className="text-5xl font-bold mb-4">299€<span className="text-lg">/Jahr</span></div>
            <p className="text-indigo-200">Sparen Sie 169€ im Vergleich zur monatlichen Zahlung</p>
          </div>
          
          <div className="p-8">
            <ul className="space-y-4">
              {[
                'Tägliche Power-Tutorials',
                'Komplette Tutorial-Bibliothek (230+ Anleitungen)',
                'Kuratierte KI-Tool Übersicht',
                'Community-Events & Experten-Talks',
                'Private Experten-Community',
                'Kostenloser Zugang zu Premium KI-Tools'
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-indigo-600 text-white rounded-lg py-4 px-6 mt-8 font-semibold hover:bg-indigo-700 transition-colors">
              Starten Sie Ihre KI-Reise jetzt
            </button>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              30 Tage Geld-zurück-Garantie
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}