import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="bg-white text-black py-24 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-20"
        >
          What we're all<br />about
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
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
              desc: "Power your business with tailored software that makes an impact.",
              img: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2574&auto=format&fit=crop"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-3xl font-bold mb-6 whitespace-pre-line">{item.title}</h3>
              <p className="text-gray-600 mb-8 text-lg">{item.desc}</p>
              <div className="mt-auto aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                <img src={item.img} alt={item.title.replace('\n', ' ')} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
