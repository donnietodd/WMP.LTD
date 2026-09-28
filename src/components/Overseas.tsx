import React from 'react';
import { ArrowRight } from 'lucide-react';

const Overseas = () => {
  const enquireAboutIndonesia = () => {
    window.dispatchEvent(new CustomEvent('wmp-select-enquiry', { detail: 'Property in Indonesia' }));
  };

  return (
    <section className="relative py-28 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/indonesia-property.jpg"
          alt="Indonesian landscape at dusk"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(55, 65, 81, 0.35)' }}></div>
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
          Looking at property overseas?
        </h2>
        <p className="text-xl text-gray-200 mb-10 leading-relaxed font-light">
          For property in Indonesia, we work with our associated company there, which handles real estate opportunities locally.
        </p>
        <button
          type="button"
          onClick={enquireAboutIndonesia}
          className="inline-flex items-center bg-accent-blue hover:bg-accent-blue-dark text-white px-10 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover-lift"
        >
          Make an enquiry
          <ArrowRight className="ml-3" size={20} />
        </button>
      </div>
    </section>
  );
};

export default Overseas;
