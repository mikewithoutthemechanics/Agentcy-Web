import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const stats = [
  { value: "200+", label: "Clients Served" },
  { value: "98%", label: "Retention Rate" },
  { value: "3.2x", label: "Avg. ROI" },
  { value: "5yrs", label: "In Operation" }
];

const packages = [
  {
    title: "Seamless\nand\nSecure",
    desc: "Perfect for businesses ready to automate their first workflow and see immediate results.",
    features: ["Business Audit", "1 Custom Agent", "30-day support", "Integration setup"],
    btn: "Get started",
    highlight: false
  },
  {
    title: "Full\nIntegration",
    desc: "Everything you need to transform your operations with a suite of connected AI agents.",
    features: ["Full Business Audit", "Up to 5 Agents", "90-day support", "Ongoing optimisation", "Priority access"],
    btn: "Work with us",
    highlight: true
  },
  {
    title: "Enterprise\nSuite",
    desc: "A fully custom AI transformation for larger teams and complex business environments.",
    features: ["Full Audit + Strategy", "Unlimited Agents", "Dedicated agent manager", "SLA-backed support", "Quarterly reviews"],
    btn: "Contact us",
    highlight: false
  }
];

export default function Tickets() {
  return (
    <section className="bg-white text-black py-24 px-6">
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
            Track-<br />Record
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-500 max-w-sm mt-8 md:mt-0 leading-relaxed"
          >
            We pride our reputation as being the innovation leaders in AI Integration
          </motion.p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white px-8 py-10 flex flex-col"
            >
              <span className="text-5xl md:text-6xl font-bold tracking-tighter mb-2">{stat.value}</span>
              <span className="text-gray-500 text-sm uppercase tracking-wider font-semibold">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`rounded-[2rem] p-10 flex flex-col min-h-[540px] ${pkg.highlight ? 'bg-black text-white' : 'bg-[#0a0a0a] text-white'}`}
            >
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight whitespace-pre-line mb-8">{pkg.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">{pkg.desc}</p>
              <ul className="mt-auto space-y-3 mb-8">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-full flex items-center justify-center gap-2 font-semibold transition-colors ${
                  pkg.highlight
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'border border-white/20 hover:bg-white/10'
                }`}
              >
                <ArrowRight className="w-5 h-5" /> {pkg.btn}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
