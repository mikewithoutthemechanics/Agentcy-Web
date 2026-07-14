import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import EyeBrow from './EyeBrow';

const faqs = [
  {
    q: "Where in South Africa do you work?",
    a: "We're based in Ballito and Knysna, but we travel to clients anywhere in South Africa. We also run fully remote engagements for businesses that don't need on-site presence."
  },
  {
    q: "What industries do you work with?",
    a: "We work across retail, logistics, property management, professional services, and manufacturing. If your business has processes, people, and tools — we can help."
  },
  {
    q: "How long does a typical engagement take?",
    a: "The Starter Audit takes 2–3 weeks. A full automation engagement typically runs 6–12 weeks from first meeting to go-live, depending on scope."
  },
  {
    q: "Do we need technical expertise in-house?",
    a: "No. We design for your team, not for engineers. We handle the build, integration, and training — your team just uses what we create."
  },
  {
    q: "What happens after launch?",
    a: "Every engagement includes post-launch monitoring and support. Growth and Enterprise clients get quarterly optimisation reviews so the systems keep improving."
  },
  {
    q: "Is WhatsApp really that important for SA businesses?",
    a: "Yes. Over 90% of South African internet users are on WhatsApp, and most small-to-medium businesses live in it. We set up WhatsApp CRM, automated replies, and lead capture so nothing slips through."
  },
  {
    q: "What if loadshedding or connectivity issues disrupt our tools?",
    a: "We design for resilience. Our automations queue work offline, retry intelligently, and surface alerts when something needs human attention. Your systems keep running even when the power doesn't."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-10 relative z-30" style={{ background: '#0D1017' }}>
      <div className="container-medium">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left col */}
          <div className="md:w-1/3">
            <EyeBey label="FAQs" number="010" />
            <p className="text-xl leading-relaxed mb-8" style={{ color: 'rgba(245,245,243,0.5)' }}>
              Questions we get from South African business owners — and straight answers.
            </p>
            <a href="#contact" className="flex items-center gap-2 font-semibold hover:opacity-70 transition-opacity">
              Still have questions? <span style={{ color: '#3AAFA9' }}>Ask us directly →</span>
            </a>
          </div>

          {/* Right col */}
          <div className="md:w-2/3">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-accordion">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-6 md:py-8 flex items-center justify-between text-left hover:opacity-70 transition-opacity"
                >
                  <span className="text-lg md:text-2xl font-medium pr-6" style={{ color: '#F5F5F3' }}>{faq.q}</span>
                  <ChevronDown
                    className={`w-6 h-6 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                    style={{ color: '#3AAFA9' }}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-lg leading-relaxed" style={{ color: 'rgba(245,245,243,0.5)' }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
