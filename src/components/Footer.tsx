import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src="/Vector Smart Object.svg" 
                alt="WMP Management Services Ltd" 
                className="h-12 w-auto opacity-60 hover:opacity-80 transition-opacity duration-300"
              />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm font-light">
              Property management enquiries are referred to our associated company in Indonesia.
            </p>
            <div className="flex space-x-3">
              <a href="mailto:info@wmp.ltd" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+442071234567" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-base font-medium mb-3">Legal</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="/cookie-policy" className="hover:text-blue-400 transition-colors">Cookie Policy</a></li>
              <li><a href="/compliance" className="hover:text-blue-400 transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-xs">
                © 2026 WMP Management Services Ltd. Registered in England and Wales, Company No. 14363395. Registered office: 128 City Road, London, EC1V 2NX.
              </p>
            </div>
            <p className="text-gray-400 text-xs mt-2 md:mt-0 text-center md:text-right">
              WMP Management Services Ltd is not authorized to provide regulated financial services.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;