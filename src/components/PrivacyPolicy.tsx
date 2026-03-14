import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-light text-primary mb-6">
          Privacy Policy – WMP Management Services Ltd
        </h1>
        <h2 className="text-2xl font-medium text-accent-blue mb-12">
          Protecting Your Personal Data
        </h2>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-medium text-primary mb-4">Information We Collect</h3>
            <div className="space-y-3 text-secondary font-light leading-relaxed">
              <p>Personal details you provide (name, email, contact information).</p>
              <p>Technical data collected automatically (IP, browser type, analytics cookies).</p>
              <p>Payment info processed via Stripe.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">How We Use Your Information</h3>
            <div className="space-y-3 text-secondary font-light leading-relaxed">
              <p>To provide and improve services.</p>
              <p>To comply with legal obligations.</p>
              <p>To monitor website performance.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">Sharing Your Information</h3>
            <div className="space-y-3 text-secondary font-light leading-relaxed">
              <p>We do not sell personal data.</p>
              <p>Shared only with trusted service providers (Stripe, Google Analytics, AWS, Supabase, DigitalOcean, Cloud66).</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">Your Rights</h3>
            <div className="space-y-3 text-secondary font-light leading-relaxed">
              <p>Access, correct, delete personal data.</p>
              <p>Object to processing or withdraw consent anytime.</p>
              <p>Contact us at <a href="mailto:info@wmp.ltd" className="text-accent-blue hover:text-accent-blue-dark">info@wmp.ltd</a>.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">Data Retention</h3>
            <p className="text-secondary font-light leading-relaxed">
              Stored only as long as necessary for legal or operational purposes.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">Cookies</h3>
            <p className="text-secondary font-light leading-relaxed">
              Essential and non-essential cookies used; see our <a href="/cookie-policy" className="text-accent-blue hover:text-accent-blue-dark">Cookie Policy</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;