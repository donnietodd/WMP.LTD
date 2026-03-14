import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-light text-primary mb-6">
          Cookie Policy – WMP Management Services Ltd
        </h1>
        <h2 className="text-2xl font-medium text-accent-blue mb-12">
          Enhancing Your Experience
        </h2>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-medium text-primary mb-4">What Are Cookies?</h3>
            <p className="text-secondary font-light leading-relaxed">
              Small files stored on your device to improve functionality.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">How We Use Cookies</h3>
            <div className="space-y-3 text-secondary font-light leading-relaxed">
              <p><strong>Essential Cookies:</strong> Required for navigation and accounts.</p>
              <p><strong>Analytics Cookies:</strong> Monitor traffic and improve usability.</p>
              <p><strong>Third-Party Cookies:</strong> From embedded services or social plugins.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">Your Choices</h3>
            <div className="space-y-3 text-secondary font-light leading-relaxed">
              <p>Adjust browser to refuse non-essential cookies.</p>
              <p>Disabling cookies may limit some functionality.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;