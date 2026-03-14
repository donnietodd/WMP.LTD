import React from 'react';
import { Smartphone, Database, BarChart3, Shield, Zap, Cloud } from 'lucide-react';

const DigitalProjects = () => {
  const digitalSolutions = [
    {
      icon: Smartphone,
      title: "PropTech Integration",
      description: "Smart property management platforms and mobile applications that streamline operations and enhance tenant experiences."
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Advanced data analytics and market intelligence tools to inform investment decisions and optimize property performance."
    },
    {
      icon: BarChart3,
      title: "Investment Modeling",
      description: "Sophisticated financial modeling and portfolio analysis tools for accurate investment projections and risk assessment."
    },
    {
      icon: Shield,
      title: "Digital Security",
      description: "Comprehensive cybersecurity solutions protecting sensitive financial and property data across all digital platforms."
    },
    {
      icon: Zap,
      title: "Automation Solutions",
      description: "Automated workflows and processes that reduce operational costs and improve efficiency in property management."
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud-based solutions ensuring accessibility, reliability, and seamless integration across global operations."
    }
  ];

  return (
    <section id="digital-projects" className="py-20 bg-accent-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Digital Innovation in Real Estate
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-light">
            Leveraging cutting-edge technology to transform traditional real estate management and create new investment opportunities in the digital age
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {digitalSolutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={index}
                className="group bg-white bg-opacity-5 hover:bg-white hover:bg-opacity-10 p-6 rounded-lg transition-all duration-300 hover-lift border border-white border-opacity-10"
              >
                <div className="bg-accent-blue group-hover:bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300">
                  <IconComponent className="text-white group-hover:text-accent-blue transition-colors duration-300" size={24} />
                </div>
                <h3 className="text-lg font-medium text-white mb-3 group-hover:text-accent-blue transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-300 leading-relaxed font-light text-sm">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Digital Impact Section */}
        <div className="bg-gradient-to-r from-accent-blue to-accent-blue-dark rounded-xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Digital technology background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-6">
              The Future of Real Estate is Digital
            </h3>
            <p className="text-base text-blue-100 mb-10 max-w-3xl mx-auto font-light">
              Our digital projects integrate seamlessly with traditional real estate practices, providing enhanced visibility, 
              improved efficiency, and new revenue streams for modern property investors.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-medium text-white mb-2">30%</div>
                <div className="text-blue-100 font-light">Operational Efficiency Increase</div>
              </div>
              <div>
                <div className="text-3xl font-medium text-white mb-2">40%</div>
                <div className="text-blue-100 font-light">Cost Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-medium text-white mb-2">60%</div>
                <div className="text-blue-100 font-light">Faster Decision Making</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalProjects;