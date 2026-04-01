import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const team = [
  {
    name: "Michael Kidd",
    role: "Founder & Lead Developer",
    img: "/michael-kidd.jpg"
  },
  {
    name: "Ryan Paul",
    role: "Technical Director",
    img: "/ryan-paul.jpg"
  },
  {
    name: "Marvin Saunders",
    role: "Strategy & Operations",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=987&auto=format&fit=crop"
  }
];

export default function Team() {
  return (
    <section id="team" className="bg-white text-black py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease }}
            className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-tighter leading-[0.9]"
          >
            Agentcy's<br />Team
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col items-start md:items-end gap-3 mt-6 md:mt-0"
          >
            <p className="text-base text-gray-400 font-medium">Meet Our Agents</p>
            <motion.button
              whileHover={{ x: 4 }}
              className="flex items-center gap-2 font-semibold text-sm uppercase tracking-widest hover:text-gray-400 transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5" /> All agents
            </motion.button>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="aspect-square md:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <h3 className="text-lg font-bold tracking-tight">{member.name}</h3>
              <p className="text-gray-400 text-sm mt-0.5">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
