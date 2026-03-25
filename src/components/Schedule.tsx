import { motion } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as const;

const phases = [
  {
    phase: "Phase 1",
    label: "Discovery",
    steps: [
      {
        title: "Enhanced Business Audit",
        desc: "We firebomb your business to understand exactly where to apply our agents — mapping every workflow, bottleneck, and opportunity for automation."
      },
      {
        title: "Opportunity Mapping",
        desc: "A deep-dive analysis to surface every area where AI can drive measurable ROI, efficiency gains, or competitive advantage."
      },
      {
        title: "Strategy Session",
        desc: "We present our findings and align on a prioritised roadmap tailored to your goals, team, and timeline."
      }
    ]
  },
  {
    phase: "Phase 2",
    label: "Build",
    steps: [
      {
        title: "Agent Design & Architecture",
        desc: "Our engineers design custom AI agents built specifically for your business processes — not off-the-shelf templates."
      },
      {
        title: "Integration & Deployment",
        desc: "We connect your agents to existing tools, databases, and workflows with zero disruption to your day-to-day operations."
      },
      {
        title: "Testing & Optimisation",
        desc: "Rigorous QA cycles ensure your agents perform reliably at scale before going live in your business."
      }
    ]
  },
  {
    phase: "Phase 3",
    label: "Scale",
    steps: [
      {
        title: "Launch & Handover",
        desc: "A smooth go-live with full team training so your people can work alongside AI confidently from day one."
      },
      {
        title: "Ongoing Support",
        desc: "We stay close after launch — monitoring performance, refining agents, and expanding their capabilities as your business grows."
      },
      {
        title: "Continuous Innovation",
        desc: "As AI evolves, so do your agents. We proactively introduce new capabilities to keep you ahead of the curve."
      }
    ]
  }
];

export default function Schedule() {
  return (
    <section id="process" className="bg-black text-white py-32 px-6 md:px-10 relative z-30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease }}
          className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-tighter mb-24 leading-[0.9]"
        >
          How we do it
        </motion.h2>

        <div className="space-y-28">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.05, ease }}
              className="flex flex-col md:flex-row gap-10 md:gap-20"
            >
              <div className="md:w-[30%]">
                <div className="md:sticky top-32">
                  <p className="text-white/30 text-xs font-semibold uppercase tracking-[0.2em] mb-3">{phase.phase}</p>
                  <h3 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight leading-none">{phase.label}</h3>
                </div>
              </div>

              <div className="md:w-[70%]">
                {phase.steps.map((step, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.55, delay: j * 0.08, ease }}
                    className="flex flex-col sm:flex-row gap-6 sm:gap-12 border-t border-white/[0.08] py-10 group"
                  >
                    <div className="sm:w-[18%]">
                      <span className="text-[clamp(2rem,3.5vw,2.75rem)] font-bold tabular-nums text-white/20 group-hover:text-white/40 transition-colors duration-300">
                        {String(j + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="sm:w-[82%]">
                      <h4 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{step.title}</h4>
                      <p className="text-white/50 text-base leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
