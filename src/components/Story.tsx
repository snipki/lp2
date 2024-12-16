import React from 'react';
import { LightbulbOff, Rocket, Target } from 'lucide-react';

export function Story() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Ihre KI-Reise beginnt hier</h2>
          <p className="text-xl text-gray-600">Stellen Sie sich diesen Moment vor...</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <LightbulbOff className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Die Frustration</h3>
            <p className="text-gray-600">
              Sie sitzen in einem Meeting und beobachten, wie Kollegen KI-gestützte Arbeit präsentieren, die manuell Tage gedauert hätte. Dieses ungute Gefühl im Magen wächst - Sie werden abgehängt.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Der Wendepunkt</h3>
            <p className="text-gray-600">
              Dann entdecken Sie unsere Community. Nur 10 Minuten täglich. Das ist alles, was Sie brauchen, um sich vom Überwältigten zum KI-Experten in Ihrem Unternehmen zu entwickeln.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Rocket className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Die Transformation</h3>
            <p className="text-gray-600">
              Innerhalb weniger Wochen nutzen Sie selbstbewusst KI-Tools, automatisieren Aufgaben und sehen, wie Ihre Kollegen staunen, wenn Sie Ihr neu erworbenes Wissen präsentieren.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}