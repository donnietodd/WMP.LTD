import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Global real estate landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-accent-charcoal bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-16 leading-tight tracking-normal">
          Your Trusted Partner in{' '}
          <span className="text-accent-blue">Real Estate Management</span>
          {' '}& Investment Strategies
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-20 max-w-4xl mx-auto leading-relaxed font-light">
          Specializing in global property management and strategic investment guidance for UK and international clients
        </p>
        <a
          href="#services"
          className="inline-flex items-center bg-accent-blue hover:bg-accent-blue-dark text-white px-10 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover-lift"
        >
          Discover Our Solutions
          <ArrowRight className="ml-3" size={20} />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-white rounded-full flex justify-center opacity-30">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;