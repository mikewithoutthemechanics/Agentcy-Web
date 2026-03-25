import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const team = [
  {
    name: "Marcus Reid",
    role: "Founder & CEO",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop"
  },
  {
    name: "Amara Osei",
    role: "Chief AI Officer",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop"
  },
  {
    name: "Lena Fischer",
    role: "Head of Integration",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=961&auto=format&fit=crop"
  },
  {
    name: "David Nkosi",
    role: "Lead Engineer",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop"
  }
];

export default function Team() {
  return (
    <section id="team" className="bg-white text-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-none"
          >
            Agentcy's<br />Team
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start md:items-end gap-4 mt-6 md:mt-0"
          >
            <p className="text-xl text-gray-500">Meet Our Agents</p>
            <button className="flex items-center gap-2 font-medium text-sm hover:text-gray-500 transition-colors">
              <ArrowRight className="w-4 h-4" /> All agents
            </button>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-bold tracking-tight">{member.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
