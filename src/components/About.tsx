import React from 'react';
import { Globe, Award, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-neutral-75">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">
            About WMP Management Services Ltd
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed font-light">
            We specialize in real estate management and investment strategies, serving clients in the UK and internationally. 
            Our global reach, expertise in digital projects, and commitment to excellence sets us apart in the industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional business handshake in modern office"
              className="rounded-xl w-full h-80 object-cover hover-lift"
            />
          </div>
          <div>
            <h3 className="text-2xl font-medium text-primary mb-6">Our Mission</h3>
            <p className="text-base text-secondary mb-8 leading-relaxed font-light">
              To provide innovative real estate management solutions and strategic investment guidance that drives 
              sustainable growth for our clients across global markets. We combine traditional expertise with 
              cutting-edge digital approaches to deliver exceptional results.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-white p-3 rounded-lg mb-3 inline-block hover-lift">
                  <Globe className="text-accent-blue mx-auto" size={24} />
                </div>
                <h4 className="font-medium text-primary mb-1 text-sm">Global Reach</h4>
                <p className="text-sm text-secondary">UK & International</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-3 rounded-lg mb-3 inline-block hover-lift">
                  <Award className="text-accent-blue mx-auto" size={24} />
                </div>
                <h4 className="font-medium text-primary mb-1 text-sm">Excellence</h4>
                <p className="text-sm text-secondary">Industry Leading</p>
              </div>
            </div>
          </div>
        </div>

        {/* CEO Quote Section */}
        <div className="bg-accent-charcoal rounded-xl p-12 text-center relative overflow-hidden mb-16">
          <div className="absolute inset-0 opacity-5">
            <img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Business background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-light text-white flex items-center justify-center min-h-[4rem]" style={{ fontFamily: 'adobe-fonts-loaded, Poppins, sans-serif' }}>
              Innovative Strategies for Diversification
            </h3>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 hover-lift">
              <TrendingUp className="text-accent-blue" size={28} />
            </div>
            <h4 className="text-2xl font-medium text-primary mb-1">10+ Years</h4>
            <p className="text-secondary font-light">Industry Experience</p>
          </div>
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 hover-lift">
              <Globe className="text-accent-blue" size={28} />
            </div>
            <h4 className="text-2xl font-medium text-primary mb-1">Overseas</h4>
            <p className="text-secondary font-light">Global Presence</p>
          </div>
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 hover-lift">
              <Users className="text-accent-blue" size={28} />
            </div>
            <h4 className="text-2xl font-medium text-primary mb-1">Expert Team</h4>
            <p className="text-secondary font-light">Professional Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;