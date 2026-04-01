import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

function AnimatedCounter({ target, suffix = '', duration = 2500, decimals = 0 }: { target: number; suffix?: string; duration?: number; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration, decimals]);

  return <span ref={ref}>{decimals > 0 ? count.toFixed(decimals) : Math.round(count)}{suffix}</span>;
}

const stats = [
  { value: 200, suffix: '+', label: 'Projects Delivered', decimals: 0 },
  { value: 98, suffix: '%', label: 'Client Retention', decimals: 0 },
  { value: 3.2, suffix: 'x', label: 'Avg. ROI', decimals: 1 },
  { value: 5, suffix: 'yrs', label: 'In Operation', decimals: 0 }
];

const packages = [
  {
    title: "Starter\nBuild",
    desc: "One custom tool or automation — built, deployed, and handed over with training and support.",
    features: ["1 custom build", "Full integration", "30-day support", "Documentation & handover"],
    btn: "Start here",
    highlight: false
  },
  {
    title: "Full\nStack",
    desc: "Multiple software products, AI layers, and integrations working together as one system.",
    features: ["Multi-product build", "AI & automation layer", "90-day support", "Ongoing optimisation", "Priority access"],
    btn: "Work with us",
    highlight: true
  },
  {
    title: "Enterprise\nSuite",
    desc: "A fully custom software ecosystem — built for scale, complexity, and teams that move fast.",
    features: ["Unlimited builds", "Dedicated engineer", "SLA-backed support", "Quarterly roadmap reviews", "On-call team"],
    btn: "Let's talk",
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
            Numbers that speak for themselves
          </motion.p>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white px-8 py-10 flex flex-col"
            >
              <span className="text-5xl md:text-6xl font-bold tracking-tighter mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </span>
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
              className={`relative rounded-[2rem] p-10 flex flex-col min-h-[500px] overflow-hidden ${
                pkg.highlight
                  ? 'text-[#0D1017] ring-1 ring-white/10'
                  : 'text-[#0D1017]'
              }`}
              style={
                pkg.highlight
                  ? { background: 'linear-gradient(135deg, #0D1017 0%, #1a1a2e 100%)' }
                  : i === 0
                    ? { background: '#F0F0EE', border: '1px solid rgba(13,16,23,0.06)' }
                    : { background: 'linear-gradient(135deg, #F0F0EE 0%, #E2E6E4 100%)', border: '1px solid rgba(13,16,23,0.06)' }
              }
            >
              {/* Accent corner glow */}
              {pkg.highlight && (
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #3AAFA9, transparent 70%)' }} />
              )}
              {!pkg.highlight && i === 0 && (
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-8" style={{ background: 'radial-gradient(circle, #3AAFA9, transparent 70%)' }} />
              )}
              {!pkg.highlight && i === 2 && (
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-8" style={{ background: 'radial-gradient(circle, #C0C0C0, transparent 70%)' }} />
              )}

              <h3 className="text-4xl md:text-5xl font-bold tracking-tight whitespace-pre-line mb-6 relative z-10" style={{ color: pkg.highlight ? '#fff' : '#0D1017' }}>{pkg.title}</h3>
              <p className="text-lg leading-relaxed mb-8 relative z-10" style={{ color: pkg.highlight ? '#888' : 'rgba(13,16,23,0.5)' }}>{pkg.desc}</p>
              <ul className="mt-auto space-y-3 mb-8 relative z-10">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm" style={{ color: pkg.highlight ? '#aaa' : 'rgba(13,16,23,0.6)' }}>
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${pkg.highlight ? 'bg-[#3AAFA9]' : i === 0 ? 'bg-[#3AAFA9]/60' : 'bg-[#C0C0C0]'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-full flex items-center justify-center gap-2 font-semibold transition-all relative z-10 ${
                  pkg.highlight
                    ? 'bg-[#3AAFA9] text-black hover:bg-[#4ABFBA] hover:shadow-lg hover:shadow-[#3AAFA9]/20'
                    : 'border hover:bg-black/5'
                }`}
                style={pkg.highlight ? {} : { borderColor: 'rgba(13,16,23,0.12)', color: '#0D1017' }}
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
