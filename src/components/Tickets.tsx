import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Tickets() {
  return (
    <section className="bg-white text-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-none"
          >
            Track-<br />Record
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-500 max-w-sm mt-8 md:mt-0"
          >
            We pride our reputation as being the innovation leaders in AI Integration
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Seamless\nand\nSecure",
              desc: "Enjoy the core Think Forward experience:",
              btn: "Buy your ticket"
            },
            {
              title: "VIP\nAccess",
              desc: "Everything from General Admission plus:",
              btn: "Work",
              highlight: true
            },
            {
              title: "Team\nAdmission",
              desc: "General Admission for up to 5 team members:",
              btn: "Buy your ticket"
            }
          ].map((ticket, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#0a0a0a] text-white rounded-[2rem] p-10 flex flex-col h-[500px]"
            >
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight whitespace-pre-line mb-12">{ticket.title}</h3>
              <p className="text-gray-400 text-lg mb-8 mt-auto">{ticket.desc}</p>
              
              <button className={`w-full py-4 rounded-full flex items-center justify-center gap-2 font-medium transition-colors ${ticket.highlight ? 'bg-purple-200 text-black hover:bg-purple-300' : 'border border-white/20 hover:bg-white/10'}`}>
                <ArrowRight className="w-5 h-5" /> {ticket.btn}
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">Offer ends in 12 days</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
