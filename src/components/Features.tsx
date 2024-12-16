import React from 'react';
import { Brain, Clock, Shield, Users, BookOpen, Zap } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "10-Minuten Tägliche Tutorials",
    description: "Kompakte, umsetzbare Lektionen, die in Ihren vollen Zeitplan passen"
  },
  {
    icon: BookOpen,
    title: "230+ Praxisanleitungen",
    description: "Umfassende Bibliothek getesteter und bewährter KI-Implementierungen"
  },
  {
    icon: Brain,
    title: "Systematischer Lernpfad",
    description: "Strukturierte Entwicklung von den Grundlagen bis zur fortgeschrittenen KI-Beherrschung"
  }
];

export function Features() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Die "10-Minuten-Vorsprung" Methode
          </h2>
          <p className="text-xl text-gray-600">
            Ein bewährtes System, das von Branchenführern zur KI-Beherrschung genutzt wird
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <feature.icon className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}