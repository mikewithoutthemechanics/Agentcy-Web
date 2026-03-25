import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const items = [
  {
    title: "Future-\nProofing",
    desc: "Hear from founders, thinkers, and technologists leading the way in sustainable innovation.",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    title: "Driving\nImpact",
    desc: "Roll up your sleeves in interactive sessions focused on real-world tools and strategies.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Success\nReimagined",
    desc: "Power your business with tailored software that makes a measurable impact.",
    img: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2574&auto=format&fit=crop"
  }
];

export default function About() {
  return (
    <section id="about" className="bg-white text-black py-28 px-6 md:px-10 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease }}
            className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-tighter leading-[0.9]"
          >
            What we're<br />all about
          </motion.h2>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            whileHover={{ x: 4 }}
            className="flex items-center gap-2 mt-8 md:mt-0 text-sm font-semibold uppercase tracking-widest hover:text-gray-400 transition-colors"
          >
            <ArrowRight className="w-4 h-4" /> Get in touch
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className="flex flex-col group"
            >
              <h3 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-tight mb-5 whitespace-pre-line tracking-tight">{item.title}</h3>
              <p className="text-gray-500 mb-8 text-base leading-relaxed">{item.desc}</p>
              <div className="mt-auto aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100">
                <img
                  src={item.img}
                  alt={item.title.replace('\n', ' ')}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
