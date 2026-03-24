import { motion } from 'motion/react';

export default function Team() {
  return (
    <section className="bg-white text-black py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter leading-none"
        >
          Agentcy's<br />Team
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-500 mt-6 md:mt-0"
        >
          Meet Our Agents
        </motion.p>
      </div>
    </section>
  );
}
