import { motion } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    num: '01',
    title: 'Audit',
    desc: 'We come to your business — on-site anywhere in South Africa — and map every workflow, bottleneck, and tool. We learn your processes as well as you know them, so we see the friction you\'ve stopped noticing.'
  },
  {
    num: '02',
    title: 'Architect',
    desc: 'We design a clear technical roadmap: what to automate, what to replace, and what to build from scratch. You get a blueprint with timelines and ROI estimates before we write a single line of code.'
  },
  {
    num: '03',
    title: 'Automate & Deploy',
    desc: 'We build, integrate, and launch — then train your team and document everything. After go-live we monitor, optimise, and iterate so your systems keep improving as your business grows.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6 md:px-10 relative z-30" style={{ background: '#F5F5F3' }}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="block text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: 'rgba(13,16,23,0.35)' }}
          >
            How it works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40, clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tighter leading-[0.95] mb-6"
          >
            From audit to automation in three phases.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: 'rgba(13,16,23,0.55)' }}
          >
            We don\'t hand you a deck and leave. We embed, build, and stay — so the changes actually stick.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7, ease }}
              className="flex flex-col"
            >
              <span className="text-5xl md:text-6xl font-bold tracking-tighter mb-6" style={{ color: 'rgba(58,175,169,0.2)' }}>
                {step.num}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{step.title}</h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(13,16,23,0.55)' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
