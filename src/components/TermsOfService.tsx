import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-light text-primary mb-6">
          Terms of Service – WMP Management Services Ltd
        </h1>
        <h2 className="text-2xl font-medium text-accent-blue mb-12">
          Your Agreement with Us
        </h2>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-medium text-primary mb-4">1. This Website</h3>
            <div className="space-y-3 text-secondary font-light leading-relaxed">
              <p>This website provides general information about WMP Management Services Ltd and a form for submitting enquiries.</p>
              <p>Enquiries are passed to our associated company in Indonesia. Any services are agreed directly with that company, not with WMP Management Services Ltd.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">2. Acceptable Use</h3>
            <p className="text-secondary font-light leading-relaxed">
              Do not misuse this website, attempt to disrupt it, or use it to send unlawful, misleading, or harmful material.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">3. Intellectual Property</h3>
            <div className="space-y-3 text-secondary font-light leading-relaxed">
              <p>Content and branding are owned by WMP Management Services Ltd.</p>
              <p>No copying, distributing, or reusing without permission.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">4. Liability</h3>
            <p className="text-secondary font-light leading-relaxed">
              WMP Management Services Ltd is not liable for losses from reliance on the content of this website.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">5. Governing Law</h3>
            <p className="text-secondary font-light leading-relaxed">
              These terms are governed by the law of England and Wales.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">6. Contact</h3>
            <p className="text-secondary font-light leading-relaxed">
              Contact us at <a href="mailto:info@wmp.ltd" className="text-accent-blue hover:text-accent-blue-dark">info@wmp.ltd</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
