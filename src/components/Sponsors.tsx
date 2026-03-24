import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Sponsors() {
  const sponsors = [
    "Eclipseful", "Quantum2", "Pollinate", "Lightbox",
    "LaunchSimple", "Ikigai Labs", "ContrastAI"
  ];

  return (
    <section className="bg-white text-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-medium tracking-tight text-center max-w-4xl mx-auto mb-20 leading-tight"
        >
          We're proud to partner with an outstanding group of forward-thinking organisations.
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sponsors.map((sponsor, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="aspect-[2/1] bg-gray-50 rounded-2xl flex items-center justify-center p-6 border border-gray-100 hover:bg-gray-100 transition-colors"
            >
              <span className="text-xl font-bold text-gray-400">{sponsor}</span>
            </motion.div>
          ))}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: sponsors.length * 0.05 }}
            className="aspect-[2/1] bg-[#0a0a0a] text-white rounded-2xl flex flex-col items-center justify-center p-6"
          >
            <h3 className="text-xl font-bold mb-4">Become a<br/>sponsor</h3>
            <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              <ArrowRight className="w-4 h-4" /> Get in touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
