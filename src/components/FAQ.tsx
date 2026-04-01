import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Who is Agentcy for?",
    a: "Agentcy works with founders, entrepreneurs, and established businesses ready to leverage AI to scale their operations. Whether you're a solo founder looking to automate your first process, or a 200-person team seeking full AI integration, we tailor our work to your stage and goals."
  },
  {
    q: "Where are you based?",
    a: "We're headquartered in Cape Town, South Africa, and work with clients across Africa and internationally. All engagements are conducted remotely, with in-person sessions available for clients in key cities."
  },
  {
    q: "How long does an engagement take?",
    a: "A typical engagement runs 8–12 weeks from audit to deployment. The timeline depends on the complexity of your workflows and the number of agents being built. We'll give you a precise timeline after your initial audit."
  },
  {
    q: "Is Agentcy suitable for early-stage startups?",
    a: "Absolutely. Early-stage companies often see the fastest ROI from AI integration because they can build efficient processes from the ground up. Our Seamless & Secure package is designed specifically for this stage."
  },
  {
    q: "What happens after the agents are deployed?",
    a: "We don't disappear after launch. Every engagement includes a post-deployment support period, performance monitoring, and quarterly optimisation reviews. Your agents evolve as your business grows."
  },
  {
    q: "How can I make the most of working with Agentcy?",
    a: "The best outcomes come from close collaboration. We ask that a key stakeholder is available during the audit and strategy phase. Beyond that, we handle the heavy lifting — our job is to fit seamlessly into your world, not the other way around."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white text-black py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Left col */}
        <div className="md:w-1/3">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter mb-8"
          >
            FAQ
          </motion.h2>
          <p className="text-xl text-gray-500 mb-8 leading-relaxed">
            Still got questions? Feel free to reach out. We're happy to help.
          </p>
          <a href="#contact" className="flex items-center gap-2 font-semibold hover:text-gray-500 transition-colors">
            <ArrowRight className="w-5 h-5" /> Ask a question
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
