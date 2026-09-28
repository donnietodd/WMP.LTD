import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [submitCount, setSubmitCount] = useState(0);
  const [enquiryType, setEnquiryType] = useState('');

  // Simple math captcha
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: '' });
  
  // Generate new captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2, answer: '' });
  };

  // Initialize captcha on component mount
  React.useEffect(() => {
    generateCaptcha();
  }, []);

  React.useEffect(() => {
    const onSelectEnquiry = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;
      if (detail === 'UK property management' || detail === 'Property in Indonesia') {
        setEnquiryType(detail);
      }
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    window.addEventListener('wmp-select-enquiry', onSelectEnquiry);
    return () => window.removeEventListener('wmp-select-enquiry', onSelectEnquiry);
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Rate limiting - prevent more than 3 submissions per hour
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;
    
    if (now - lastSubmitTime < 60000) { // 1 minute between submissions
      setSubmitStatus('rate_limit');
      return;
    }
    
    if (submitCount >= 3 && now - lastSubmitTime < oneHour) {
      setSubmitStatus('hourly_limit');
      return;
    }

    // Validate captcha
    const correctAnswer = captcha.num1 + captcha.num2;
    if (parseInt(captcha.answer) !== correctAnswer) {
      setSubmitStatus('captcha_error');
      return;
    }

    // Basic spam detection
    const formData = new FormData(form.current);
    const message = formData.get('message').toLowerCase();
    const email = formData.get('email').toLowerCase();
    
    // Check for spam keywords
    const spamKeywords = ['viagra', 'casino', 'lottery', 'winner', 'congratulations', 'click here', 'free money', 'make money fast'];
    const hasSpamKeywords = spamKeywords.some(keyword => message.includes(keyword));
    
    // Check for suspicious patterns
    const hasMultipleUrls = (message.match(/http/g) || []).length > 2;
    const hasExcessiveCaps = message.replace(/[^A-Z]/g, '').length > message.length * 0.5;
    
    if (hasSpamKeywords || hasMultipleUrls || hasExcessiveCaps) {
      setSubmitStatus('spam_detected');
      return;
    }
    setSubmitStatus('');

    const messageInput = form.current.elements.message;
    const originalMessage = messageInput.value;
    messageInput.value = `Enquiry type: ${form.current.elements.enquiry_type.value}\n\n${originalMessage}`;

    // For now, simulate successful form submission
    // EmailJS configuration - replace YOUR_TEMPLATE_ID and YOUR_PUBLIC_KEY with actual values
    emailjs.sendForm(
      'service_k2esn7r',     // Your EmailJS service ID
      'template_l4rqi38',    // Your EmailJS template ID
      form.current,
      'jltC4LZ1KGiQefSSM'   // Your EmailJS public key
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      setIsSubmitting(false);
      setLastSubmitTime(now);
      setSubmitCount(prev => prev + 1);
      form.current.reset();
      setEnquiryType('');
      generateCaptcha();
    }, (error) => {
      console.log('Email send failed:', error.text);
      messageInput.value = originalMessage;
      setSubmitStatus('error');
      setIsSubmitting(false);
    });
  };

  const handleCaptchaChange = (e) => {
    setCaptcha(prev => ({ ...prev, answer: e.target.value }));
  };
  return (
    <section id="contact" className="py-20 bg-neutral-75">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* CTA Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto font-light">
            Tell us about your property and we'll be in touch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-medium text-primary mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg hover-lift">
                  <Mail className="text-accent-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1 text-sm">Email</h4>
                  <p className="text-secondary font-light text-sm"></p>
                  <p className="text-secondary font-light text-sm">info@wmp.ltd</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg hover-lift">
                  <Phone className="text-accent-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1 text-sm">Phone</h4>
                  <p className="text-secondary font-light text-sm">+44 (0) 79 300 87654</p>
                  <p className="text-secondary font-light text-sm">+62 (8)  13 255 31539 (International)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg hover-lift">
                  <MapPin className="text-accent-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1 text-sm">Office Address</h4>
                  <p className="text-secondary font-light text-sm">
                    128 City Road<br />
                    London<br />
                    EC1V 2NX<br />
                    United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg hover-lift">
                  <Clock className="text-accent-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1 text-sm">Business Hours</h4>
                  <p className="text-secondary font-light text-sm">Monday - Friday: 07:00 AM - 3:00 PM GMT</p>
                  <p className="text-secondary font-light text-sm">Saturday: 07:00 AM - 2:00 PM GMT</p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl hover-lift">
            <h3 className="text-xl font-medium text-primary mb-6">Send us a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm">Thank you! Your message has been sent successfully.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm">Sorry, there was an error sending your message. Please try again.</p>
              </div>
            )}
            
            {submitStatus === 'rate_limit' && (
              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-sm">Please wait at least 1 minute between submissions.</p>
              </div>
            )}

            {submitStatus === 'hourly_limit' && (
              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-sm">You've reached the hourly submission limit. Please try again later.</p>
              </div>
            )}

            {submitStatus === 'captcha_error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm">Please solve the math problem correctly.</p>
              </div>
            )}

            {submitStatus === 'spam_detected' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm">Your message appears to contain spam content. Please revise and try again.</p>
              </div>
            )}
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              {/* Honeypot field - hidden from users but visible to bots */}
              <input
                type="text"
                name="website"
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-primary mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    minLength="2"
                    maxLength="50"
                    className="w-full px-3 py-3 border border-neutral-100 rounded-lg focus:ring-2 focus:ring-accent-blue focus:ring-opacity-20 focus:border-accent-blue outline-none transition-all font-light text-sm"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-primary mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    minLength="2"
                    maxLength="50"
                    className="w-full px-3 py-3 border border-neutral-100 rounded-lg focus:ring-2 focus:ring-accent-blue focus:ring-opacity-20 focus:border-accent-blue outline-none transition-all font-light text-sm"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-primary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  maxLength="100"
                  className="w-full px-3 py-3 border border-neutral-100 rounded-lg focus:ring-2 focus:ring-accent-blue focus:ring-opacity-20 focus:border-accent-blue outline-none transition-all font-light text-sm"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-primary mb-2" htmlFor="enquiry-type">
                  Enquiry
                </label>
                <select
                  id="enquiry-type"
                  name="enquiry_type"
                  required
                  value={enquiryType}
                  onChange={(e) => setEnquiryType(e.target.value)}
                  className="w-full px-3 py-3 border border-neutral-100 rounded-lg focus:ring-2 focus:ring-accent-blue focus:ring-opacity-20 focus:border-accent-blue outline-none transition-all font-light text-sm"
                >
                  <option value="">Select an option</option>
                  <option value="UK property management">UK property management</option>
                  <option value="Property in Indonesia">Property in Indonesia</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-primary mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  minLength="10"
                  maxLength="1000"
                  className="w-full px-3 py-3 border border-neutral-100 rounded-lg focus:ring-2 focus:ring-accent-blue focus:ring-opacity-20 focus:border-accent-blue outline-none transition-all resize-none font-light text-sm"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              {/* Simple Math Captcha */}
              <div>
                <label className="block text-xs font-medium text-primary mb-2">
                  Security Check: What is {captcha.num1} + {captcha.num2}?
                </label>
                <input
                  type="number"
                  value={captcha.answer}
                  onChange={handleCaptchaChange}
                  required
                  className="w-full px-3 py-3 border border-neutral-100 rounded-lg focus:ring-2 focus:ring-accent-blue focus:ring-opacity-20 focus:border-accent-blue outline-none transition-all font-light text-sm"
                  placeholder="Enter the answer"
                />
              </div>
              <p className="text-secondary font-light text-sm leading-relaxed">
                WMP does not accept payments or hold funds on behalf of anyone. Enquiries about Indonesian property will be shared with our associated company in Indonesia.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-blue hover:bg-accent-blue-dark text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center hover-lift text-sm"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2" size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;