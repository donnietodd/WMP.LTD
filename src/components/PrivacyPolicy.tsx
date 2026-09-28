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
            <h3 className="text-xl font-medium text-primary mb-4">Data Controller</h3>
            <div className="space-y-3 text-secondary font-light leading-relaxed">
              <p>WMP Management Services Ltd is the data controller. Company No. 14363395. Registered office: 128 City Road, London, EC1V 2NX.</p>
              <p>Contact us at <a href="mailto:info@wmp.ltd" className="text-accent-blue hover:text-accent-blue-dark">info@wmp.ltd</a>.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">Information We Collect</h3>
            <p className="text-secondary font-light leading-relaxed">
              Name, email address, and message submitted through the enquiry form. This website does not collect analytics data.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">How We Use Your Information</h3>
            <p className="text-secondary font-light leading-relaxed">
              To respond to your enquiry. Enquiries about UK property are handled by WMP; enquiries about property in Indonesia are shared with our associated company in Indonesia, which is outside the UK.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">Sharing Your Information</h3>
            <div className="space-y-3 text-secondary font-light leading-relaxed">
              <p>Enquiries about property in Indonesia are shared with our associated company in Indonesia, which is outside the UK. Enquiries about UK property are not shared with it.</p>
              <p>The enquiry form is sent through EmailJS, which processes the submission so it can be delivered. We do not use analytics providers.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">Legal Basis</h3>
            <p className="text-secondary font-light leading-relaxed">
              We process this information because you asked us to pass on your enquiry, and on the basis of our legitimate interests in handling that request.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">Data Retention</h3>
            <p className="text-secondary font-light leading-relaxed">
              Enquiries are kept for up to 12 months.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">Your Rights</h3>
            <div className="space-y-3 text-secondary font-light leading-relaxed">
              <p>You can ask to access, correct, or delete your personal data, and you can object to processing.</p>
              <p>You can complain to the Information Commissioner’s Office at <a href="https://ico.org.uk" className="text-accent-blue hover:text-accent-blue-dark">ico.org.uk</a>.</p>
              <p>Contact us at <a href="mailto:info@wmp.ltd" className="text-accent-blue hover:text-accent-blue-dark">info@wmp.ltd</a>.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">Cookies</h3>
            <p className="text-secondary font-light leading-relaxed">
              See our <a href="/cookie-policy" className="text-accent-blue hover:text-accent-blue-dark">Cookie Policy</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
