import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-light text-primary mb-6">
          Cookie Policy – WMP Management Services Ltd
        </h1>
        <h2 className="text-2xl font-medium text-accent-blue mb-12">
          Cookies on This Website
        </h2>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-medium text-primary mb-4">What Are Cookies?</h3>
            <p className="text-secondary font-light leading-relaxed">
              Small files stored on your device by a website or by a service that website loads.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">How We Use Cookies</h3>
            <div className="space-y-3 text-secondary font-light leading-relaxed">
              <p>This website does not set its own cookies and does not use analytics cookies.</p>
              <p>The background image is loaded from Pexels. That request can set two Cloudflare cookies, <strong>__cf_bm</strong> and <strong>_cfuvid</strong>, which Pexels uses to manage automated traffic to the image. They are not set by WMP Management Services Ltd.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-medium text-primary mb-4">Your Choices</h3>
            <p className="text-secondary font-light leading-relaxed">
              You can block third-party cookies in your browser. The enquiry form does not depend on the Pexels cookies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
