import React from 'react';

const testimonials = [
  {
    quote: "KI hat mich früher überfordert. Nach nur 4 Wochen in der Community spare ich täglich 2,5 Stunden durch KI-Automatisierung. Die Transformation ist unglaublich.",
    author: "Thomas K.",
    role: "Senior Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    impact: "2,5 Stunden täglich gespart"
  },
  {
    quote: "Vom Abgehängten zum KI-Experten im Team. Meine Kollegen fragen mich ständig um Rat. Und das alles durch nur 10 Minuten tägliche Tutorials.",
    author: "Sarah M.",
    role: "Marketing Direktorin",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    impact: "Zur KI-Expertin befördert"
  }
];

export function Testimonials() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-6">Echte Geschichten, Echte Transformationen</h2>
        <p className="text-xl text-gray-600 text-center mb-16">Von KI-Angst zur KI-Beherrschung - unsere Mitglieder teilen ihre Reisen</p>
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl relative">
              <div className="absolute -top-4 right-8 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm">
                {testimonial.impact}
              </div>
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}