import { motion } from 'motion/react';
import EyeBrow from './EyeBrow';

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    num: '01',
    title: 'Discovery & Audit',
    desc: 'We analyze your workflows, bottlenecks, and revenue opportunities. We come to your business — on-site anywhere in South Africa — and map every process so we see the friction you\'ve stopped noticing.',
    image: 'audit'
  },
  {
    num: '02',
    title: 'Automation Blueprint',
    desc: 'We design a detailed automation architecture aligned with your KPIs. You get a blueprint with timelines and ROI estimates before we write a single line of code.',
    image: 'blueprint'
  },
  {
    num: '03',
    title: 'Build & Integration',
    desc: 'Our engineers implement AI systems and integrate with your existing tools. Performance testing, data validation, and refinement — nothing ships until it works.',
    image: 'build'
  },
  {
    num: '04',
    title: 'Deployment & Scaling',
    desc: 'Launch, monitor, and continuously optimize for growth. We train your team, document everything, and stay embedded so the changes actually stick.',
    image: 'deploy'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6 md:px-10 relative z-30" style={{ background: '#0D1017' }}>
      <div className="container-medium">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <EyeBrow label="How it works" number="004" />
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tighter leading-[0.95] mb-6"
            style={{ color: '#F5F5F3' }}
          >
            A proven process designed to transform your operations
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: 'rgba(245,245,243,0.5)' }}
          >
            From discovery to deployment — we don\'t hand you a deck and leave. We embed, build, and stay.
          </p>
        </motion.div>

        {/* Alternating timeline with connecting line */}
        <div className="relative">
          {/* Center connecting line */}
          <div className="hidden md:block timeline-line" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
                    isEven ? '' : ''
                  }`}
                >
                  {/* Left side content */}
                  <div className={isEven ? '' : 'md:col-start-2'}>
                    {/* Number circle */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="process-number">{step.num}</div>
                    </div>

                    <h3
                      className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
                      style={{ color: '#F5F5F3' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-base md:text-lg leading-relaxed max-w-lg"
                      style={{ color: 'rgba(245,245,243,0.5)' }}
                    >
                      {step.desc}
                    </p>
                  </div>

                  {/* Right side - card image placeholder */}
                  <div className={isEven ? 'md:col-start-2' : 'md:col-start-1'}>
                    <div
                      className="w-full aspect-video rounded-2xl overflow-hidden relative case-card"
                      style={{
                        background: `linear-gradient(135deg, #141922 0%, #1C2333 100%)`,
                        border: '1px solid rgba(245,245,243,0.06)'
                      }}
                    >
                      {/* Decorative content */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(58,175,169,0.1)', border: '1px solid rgba(58,175,169,0.2)' }}>
                            <span className="text-2xl font-bold" style={{ color: '#3AAFA9' }}>{step.num}</span>
                          </div>
                          <div className="text-xs uppercase tracking-widest" style={{ color: 'rgba(245,245,243,0.3)' }}>
                            {step.title}
                          </div>
                        </div>
                      </div>
                      {/* Gradient overlay */}
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(58,175,169,0.05) 0%, transparent 50%)' }} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
