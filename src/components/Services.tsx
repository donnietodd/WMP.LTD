import React, { useState } from 'react';
import { Building2, TrendingUp, Smartphone, MapPin, ArrowRight, X } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: Building2,
      title: "Property Management in the UK & Abroad",
      description: "Comprehensive property management services covering residential and commercial properties across multiple jurisdictions.",
      details: "Our property management services include tenant screening, rent collection, maintenance coordination, legal compliance, and portfolio optimization. We manage properties across the UK and international markets, ensuring maximum returns and minimal hassle for property owners.",
      features: ["24/7 Tenant Support", "Maintenance Coordination", "Legal Compliance", "Portfolio Optimization"]
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Real Estate Investment Strategies",
      description: "Strategic investment guidance tailored to market conditions and client objectives for optimal portfolio growth.",
      details: "We develop customized investment strategies based on thorough market analysis, risk assessment, and client goals. Our team provides insights on emerging markets, property types, and timing to maximize investment returns while minimizing risks.",
      features: ["Market Analysis", "Risk Assessment", "Portfolio Diversification", "ROI Optimization"]
    },
    {
      id: 3,
      icon: Smartphone,
      title: "Advisory Services for Digital Projects",
      description: "Expert consultation on integrating digital solutions and technology into real estate investments and operations.",
      details: "Our digital advisory services help clients leverage technology to enhance property value and operational efficiency. We provide guidance on PropTech integration, smart building solutions, and digital transformation strategies.",
      features: ["PropTech Integration", "Smart Building Solutions", "Digital Transformation", "Technology Assessment"]
    },
    {
      id: 4,
      icon: MapPin,
      title: "Expert Guidance on Overseas Property Expansion",
      description: "Specialized support for international property investment and expansion into new geographic markets.",
      details: "We provide comprehensive support for overseas property investment, including market research, legal framework analysis, tax optimization, and local partnership development. Our global network ensures successful international expansion.",
      features: ["Market Research", "Legal Framework Analysis", "Tax Optimization", "Local Partnerships"]
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">
              Our Services
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto font-light">
              Comprehensive real estate solutions designed to maximize your investment potential and streamline property management operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-neutral-50 hover:bg-white p-8 rounded-lg transition-all duration-300 hover-lift cursor-pointer border border-transparent hover:border-neutral-100"
                  onClick={() => openModal(service)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-white group-hover:bg-accent-blue p-3 rounded-lg transition-all duration-300 hover-lift">
                      <IconComponent className="text-accent-blue group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-primary mb-3 group-hover:text-accent-blue transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-secondary mb-4 leading-relaxed font-light text-sm">
                        {service.description}
                      </p>
                      <div className="flex items-center text-accent-blue font-medium group-hover:text-accent-blue-dark text-sm">
                        Learn more
                        <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-accent-charcoal bg-opacity-50" onClick={closeModal}></div>
          <div className="relative bg-white rounded-xl max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="p-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-neutral-50 p-3 rounded-lg">
                    <selectedService.icon className="text-accent-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-medium text-primary">
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  className="text-muted hover:text-secondary transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <p className="text-secondary mb-6 leading-relaxed font-light text-sm">
                {selectedService.details}
              </p>
              
              <div>
                <h4 className="font-medium text-primary mb-4 text-sm">Key Features:</h4>
                <ul className="grid grid-cols-2 gap-3">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-secondary font-light text-sm">
                      <div className="w-2 h-2 bg-accent-blue rounded-full mr-4"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 pt-6 border-t border-neutral-100">
                <a
                  href="#contact"
                  onClick={closeModal}
                  className="inline-flex items-center bg-accent-blue hover:bg-accent-blue-dark text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm"
                >
                  Get Started
                  <ArrowRight className="ml-2" size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;