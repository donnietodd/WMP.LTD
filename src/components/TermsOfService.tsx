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
            <h3 className="text-xl font-medium text-primary mb-4">1. Use of Services</h3>
            <div className="space-y-3 text-secondary font-light leading-relaxed">
              <p>Advisory services only; no regulated financial advice.</p>
              <p>Do not misuse website or services.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">2. Accounts and Access</h3>
            <div className="space-y-3 text-secondary font-light leading-relaxed">
              <p>Maintain account security.</p>
              <p>Do not share login credentials.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">3. Payment & Subscriptions</h3>
            <div className="space-y-3 text-secondary font-light leading-relaxed">
              <p>Processed via Stripe; subject to Stripe's terms.</p>
              <p>Refunds at our discretion.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">4. Intellectual Property</h3>
            <div className="space-y-3 text-secondary font-light leading-relaxed">
              <p>Content and branding are owned by WMP Management Services Ltd.</p>
              <p>No copying, distributing, or reusing without permission.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">5. Liability</h3>
            <p className="text-secondary font-light leading-relaxed">
              Advisory services only; we are not liable for losses from reliance.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">6. Changes to Terms</h3>
            <p className="text-secondary font-light leading-relaxed">
              Terms may be updated at any time; review periodically.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;