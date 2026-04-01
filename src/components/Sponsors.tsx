import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const sponsors = [
  'Eclipseful', 'Quantum2', 'Pollinate', 'Lightbox',
  'LaunchSimple', 'Ikigai Labs', 'ContrastAI',
];

export default function Sponsors() {
  return (
    <section className="bg-white text-black py-24 px-6 md:px-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(1.5rem,4vw,3rem)] font-semibold tracking-[-0.02em] text-center max-w-3xl mx-auto mb-16 leading-tight text-black/80"
        >
          We're proud to partner with an outstanding group of forward-thinking organisations.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="aspect-[2/1] bg-gray-50 rounded-2xl flex items-center justify-center p-6 border border-gray-100 hover:border-gray-300 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
            >
              <span className="text-base font-bold text-gray-400 text-center">{sponsor}</span>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
