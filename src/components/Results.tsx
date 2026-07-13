import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const results = [
  {
    metric: '30+',
    label: 'hours saved per week',
    context: 'For a logistics client in Durban — automated dispatch and driver coordination.'
  },
  {
    metric: '40%',
    label: 'fewer missed calls',
    context: 'WhatsApp CRM setup for a retail chain — first week live.'
  },
  {
    metric: '4 hours',
    label: 'to full-team onboarding',
    context: 'Knowledge base + SOP automation for a 60-person operations team.'
  },
  {
    metric: 'R0',
    label: 'wasted on manual admin',
    context: 'After workflow automation — client reinvested saved time into sales and grew revenue 25% in 90 days.'
  }
];

export default function Results() {
  return (
    <section id="results" className="bg-white text-black py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="block text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: 'rgba(13,16,23,0.35)' }}
          >
            Real results
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40, clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tighter leading-[0.95] mb-6"
          >
            Numbers that prove it works.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: 'rgba(13,16,23,0.55)' }}
          >
            Every engagement is measured. Here\'s what South African businesses are seeing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {results.map((result, i) => (
            <motion.div
              key={result.metric}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease }}
              className="p-8 md:p-10 rounded-3xl text-center"
              style={{ background: '#F5F5F3' }}
            >
              <div className="text-5xl md:text-6xl font-bold tracking-tighter mb-3" style={{ color: '#3AAFA9' }}>
                {result.metric}
              </div>
              <div className="text-base font-semibold mb-3">{result.label}</div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(13,16,23,0.45)' }}>
                {result.context}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
