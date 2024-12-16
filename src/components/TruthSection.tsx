import React from 'react';
import { AlertTriangle, Clock, Brain, Youtube, DollarSign, Blinds } from 'lucide-react';

const methods = [
  {
    title: 'Die "Kopf in den Sand"-Methode',
    icon: Blinds,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    points: [
      "KI ist nur ein Hype",
      "Mein Job ist zu komplex für KI",
      "Das geht schon an mir vorbei"
    ],
    footnote: "(Spoiler: Wird es nicht)"
  },
  {
    title: 'Die "Irgendwann"-Taktik',
    icon: Clock,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    points: [
      "Ich warte bis es ausgereift ist",
      "Ich lerne es, wenn ich es brauche",
      "Dafür habe ich jetzt keine Zeit"
    ],
    footnote: "(Die Zeit wird nie kommen)"
  },
  {
    title: 'Die "Verzweiflungs"-Strategie',
    icon: Youtube,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    points: [
      "Stunden mit YouTube-Videos verschwenden",
      "Teure Kurse kaufen, die nie beendet werden",
      "Planlos mit Tools experimentieren"
    ],
    footnote: "(Kostet Zeit, Geld und führt zu nichts)"
  }
];

const facts = [
  "83% aller Jobs werden durch KI beeinflusst werden",
  "Die Hälfte aller aktuellen Fähigkeiten wird in 24 Monaten obsolet sein",
  "Wer jetzt nicht handelt, wird später Jahre aufholen müssen"
];

export function TruthSection() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Die unbequeme Wahrheit über KI-Kompetenz</h2>
          <p className="text-xl text-gray-600">Die meisten Professionals versuchen eines dieser drei Dinge:</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {methods.map((method, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
              <div className={`${method.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                <method.icon className={`w-8 h-8 ${method.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold mb-6 text-indigo-900">{method.title}</h3>
              <ul className="space-y-4 mb-4">
                {method.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-red-600 italic">{method.footnote}</p>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-16">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="w-12 h-12 text-red-500" />
          </div>
          <h3 className="text-2xl font-bold text-center mb-8">Die erschreckende Realität:</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {facts.map((fact, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-medium text-gray-900">{fact}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-indigo-900 text-white rounded-xl p-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Brain className="w-12 h-12 text-indigo-300" />
          </div>
          <h3 className="text-2xl font-bold mb-6">Aber hier kommt die gute Nachricht:</h3>
          <p className="text-xl mb-6">
            Es gibt einen systematischen Weg, wie du in nur 10 Minuten täglich zum KI-Experten wirst.
          </p>
          <p className="text-lg text-indigo-200">
            Einen Weg, den bereits über 450 kluge Professionals erfolgreich gehen.
          </p>
        </div>
      </div>
    </div>
  );
}