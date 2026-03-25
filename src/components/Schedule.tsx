import { motion } from 'motion/react';

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
    <section id="process" className="bg-black text-white py-32 px-6 relative z-30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-24"
        >
          How we do it
        </motion.h2>

        <div className="space-y-32">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col md:flex-row gap-12 md:gap-24"
            >
              <div className="md:w-1/3">
                <div className="sticky top-32">
                  <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-2">{phase.phase}</p>
                  <h3 className="text-5xl md:text-6xl font-bold tracking-tight">{phase.label}</h3>
                </div>
              </div>
              <div className="md:w-2/3 space-y-0">
                {phase.steps.map((step, j) => (
                  <div key={j} className="flex flex-col md:flex-row gap-8 md:gap-16 border-t border-white/10 py-10">
                    <div className="md:w-1/4">
                      <span className="text-gray-500 text-4xl font-bold tabular-nums">
                        {String(j + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="md:w-3/4">
                      <h4 className="text-2xl md:text-3xl font-bold mb-3">{step.title}</h4>
                      <p className="text-gray-400 text-lg leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
