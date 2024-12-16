import React from 'react';

const brands = [
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
  },
  {
    name: "SAP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
  },
  {
    name: "Siemens",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg"
  },
  {
    name: "Deutsche Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Deutsche_Bank_logo_without_wordmark.svg"
  },
  {
    name: "BMW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
  },
  {
    name: "Volkswagen",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg"
  },
  {
    name: "Allianz",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Allianz_logo.svg"
  }
];

export function TrustedBrands() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-lg font-medium text-gray-600 mb-12">
          Unsere Experten werden von führenden Unternehmen vertraut
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-12 w-auto opacity-50 hover:opacity-75 transition-opacity filter grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}