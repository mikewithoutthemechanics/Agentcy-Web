import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const ease = [0.16, 1, 0.3, 1] as const;

const phases = [
  {
    phase: "Phase 1",
    label: "Discover",
    accent: "#3AAFA9",
    steps: [
      {
        title: "Deep Dive Audit",
        desc: "We dissect your business — every workflow, every bottleneck, every tool you use. We find where software and AI can move the needle."
      },
      {
        title: "Opportunity Map",
        desc: "A prioritised list of where to build, integrate, or automate — ranked by impact and effort. No fluff, just clarity."
      },
      {
        title: "Blueprint",
        desc: "A clear technical roadmap with timelines, architecture decisions, and milestones. You'll know exactly what we're building and why."
      }
    ]
  },
  {
    phase: "Phase 2",
    label: "Build",
    accent: "#C0C0C0",
    steps: [
      {
        title: "Design & Architecture",
        desc: "Custom software, not templates. We design systems that fit your stack, your team, and your scale."
      },
      {
        title: "Develop & Integrate",
        desc: "We build fast, test constantly, and integrate with your existing tools. No disruption to your day-to-day."
      },
      {
        title: "Launch & Train",
        desc: "Go live with confidence. Full handover, team training, and documentation so you own what we've built."
      }
    ]
  },
  {
    phase: "Phase 3",
    label: "Grow",
    accent: "#6EE7B7",
    steps: [
      {
        title: "Monitor & Optimise",
        desc: "We watch the numbers — performance, adoption, ROI. If something's not working, we fix it before you notice."
      },
      {
        title: "Expand & Iterate",
        desc: "New features, new integrations, new automations. As your business grows, your software grows with it."
      },
      {
        title: "Stay Ahead",
        desc: "We proactively bring you new capabilities — the latest in AI, automation, and software — before your competitors catch on."
      }
    ]
  }
];

function PhaseBlock({ phase, index }: { phase: typeof phases[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: 0.05, ease }}
      className="flex flex-col md:flex-row gap-10 md:gap-20"
    >
      <div className="md:w-[30%]">
        <div className="md:sticky top-32">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: phase.accent }}
          >
            {phase.phase}
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight leading-none"
          >
            {phase.label}
          </motion.h3>
          {/* Progress line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease }}
            className="w-px h-24 mt-8 origin-top hidden md:block"
            style={{ background: `linear-gradient(to bottom, ${phase.accent}60, transparent)` }}
          />
        </div>
      </div>

      <div className="md:w-[70%]">
        {phase.steps.map((step, j) => (
          <motion.div
            key={j}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: j * 0.12, ease }}
            className="py-10 group"
            style={{ borderTop: '1px solid rgba(13,16,23,0.08)' }}
          >
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <div className="sm:w-[18%]">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: j * 0.12 + 0.2 }}
                  className="text-[clamp(2rem,3.5vw,2.75rem)] font-bold tabular-nums transition-colors duration-500"
                  style={{ color: 'rgba(13,16,23,0.12)' }}
                >
                  {String(j + 1).padStart(2, '0')}
                </motion.span>
              </div>
              <div className="sm:w-[82%]">
                <h4 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{step.title}</h4>
                <p className="text-[#0D1017]/50 text-base leading-relaxed">{step.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Schedule() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const headerY = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} id="process" className="py-24 md:py-32 px-6 md:px-10 relative z-30" style={{ background: '#F5F5F3' }}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-tighter mb-24 leading-[0.9]"
        >
          How we do it
        </motion.h2>

        <div className="space-y-28">
          {phases.map((phase, i) => (
            <PhaseBlock key={i} phase={phase} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
