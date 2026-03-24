import { motion } from 'motion/react';

const scheduleData = [
  {
    phase: "Phase 1",
    sessions: [
      {
        time: "Morning",
        events: [
          "Enhanced Business Audit",
          "We firebomb your business to understand exactly where to apply our agents",
          "Panel: Tech for Good: Building with Purpose"
        ]
      },
      {
        time: "Afternoon",
        events: [
          "Workshop: Vision Mapping for Sustainable Businesses",
          "Talk: The New Metrics of Success: Impact Over Scale",
          "Panel: From Solo Founder to Collaborative Ecosystem"
        ]
      },
      {
        time: "Evening",
        events: [
          "Welcome Mixer: Meet the Makers"
        ]
      }
    ]
  },
  {
    phase: "Day 2",
    sessions: [
      {
        time: "Morning",
        events: [
          "Talk: Designing for Regeneration, Not Just Efficiency",
          "Workshop: Build a Climate-Conscious Business Model",
          "Case Study: Scaling with Partners, Not Just Capital"
        ]
      },
      {
        time: "Afternoon",
        events: [
          "Roundtable: Shared Infrastructure for Small Businesses",
          "Workshop: Co-Creation Tools for Distributed Teams",
          "Talk: The Role of AI in Sustainable Innovation"
        ]
      },
      {
        time: "Evening",
        events: [
          "Community Dinners: Neighborhood Table Sessions",
          "Fireside Chat: What the Next Generation Expects from Us"
        ]
      }
    ]
  }
];

export default function Schedule() {
  return (
    <section className="bg-black text-white py-32 px-6 relative z-30">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-24 text-center md:text-left"
        >
          How we do it
        </motion.h2>

        <div className="space-y-32">
          {scheduleData.map((day, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-12 md:gap-24">
              <div className="md:w-1/3">
                <h3 className="text-5xl md:text-6xl font-bold tracking-tight sticky top-32">{day.phase}</h3>
              </div>
              <div className="md:w-2/3 space-y-16">
                {day.sessions.map((session, j) => (
                  <div key={j} className="flex flex-col md:flex-row gap-8 md:gap-16 border-t border-white/10 pt-8">
                    <div className="md:w-1/4">
                      <h4 className="text-2xl font-medium text-gray-400">{session.time}</h4>
                    </div>
                    <div className="md:w-3/4 space-y-6">
                      {session.events.map((event, k) => (
                        <div key={k} className="flex items-start gap-4">
                          <span className="text-gray-500 mt-1">~</span>
                          <p className="text-xl md:text-2xl font-medium leading-snug">{event}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
