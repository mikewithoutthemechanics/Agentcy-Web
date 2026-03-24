import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const faqs = [
  "Who is Think Forward for?",
  "Where is the event taking place?",
  "Will there be virtual access or recordings?",
  "Is this summit suitable for early-stage founders?",
  "What's your sustainability policy?",
  "How can I make the most of networking opportunities?"
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white text-black py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8"
          >
            FAQ
          </motion.h2>
          <p className="text-xl text-gray-500 mb-8">
            Still got questions? Feel free to reach out. We're happy to help.
          </p>
          <button className="flex items-center gap-2 font-medium hover:text-gray-600 transition-colors">
            <ArrowRight className="w-5 h-5" /> Ask a question
          </button>
        </div>

        <div className="md:w-2/3">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex items-center justify-between text-left hover:text-gray-600 transition-colors"
              >
                <span className="text-xl md:text-2xl font-medium">{faq}</span>
                <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-gray-500 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
