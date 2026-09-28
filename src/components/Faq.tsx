import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do you manage property in the UK?',
    answer: 'Yes. WMP Management Services Ltd provides property management for landlords and property owners in the UK. Get in touch using the form below.',
  },
  {
    question: 'Thinking about buying or owning property overseas?',
    answer: "We refer enquiries about property in Indonesia to our associated company there, which handles real estate opportunities locally. Use the form below and select 'Property in Indonesia'.",
  },
  {
    question: 'Who will I be dealing with?',
    answer: 'For UK property management, WMP directly. For Indonesian property, our associated company in Indonesia, which will agree any services with you directly.',
  },
  {
    question: 'Do you handle payments or investments?',
    answer: 'No. WMP does not hold or manage funds or investments on behalf of anyone.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-neutral-75">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-light text-primary mb-12 text-center">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="bg-white rounded-xl overflow-hidden">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-primary">{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-accent-blue shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-secondary font-light leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
