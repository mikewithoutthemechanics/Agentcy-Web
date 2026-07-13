import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

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
    <section id="faq" className="bg-white text-black py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Left col */}
        <div className="md:w-1/3">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter mb-8"
          >
            FAQ
          </motion.h2>
          <p className="text-xl text-gray-500 mb-8 leading-relaxed">
            Questions we get from South African business owners — and straight answers.
          </p>
          <a href="#contact" className="flex items-center gap-2 font-semibold hover:text-gray-500 transition-colors">
            Still have questions? <span style={{ color: '#3AAFA9' }}>Ask us directly →</span>
          </a>
        </div>

        {/* Right col */}
        <div className="md:w-2/3">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 md:py-8 flex items-center justify-between text-left hover:text-gray-500 transition-colors"
              >
                <span className="text-lg md:text-2xl font-medium pr-6">{faq.q}</span>
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
                    <p className="pb-8 text-gray-500 text-lg leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
