import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as const;

const projects = [
  {
    title: "WaitUp",
    tag: "SaaS · No-Show Prevention",
    stat: "R8k+",
    statLabel: "recovered per studio/month",
    desc: "AI-powered waitlist and booking automation for fitness studios. Predicts no-shows, fills empty spots via WhatsApp.",
    detail: "12+ Edge Functions · 3 cron jobs · React + Supabase · Live at filliq.vercel.app",
    gradient: "from-[#12171C] to-[#1a1a2e]",
    accent: "#3AAFA9"
  },
  {
    title: "BridgeAIOS",
    tag: "AI Ops · Franchise Management",
    stat: "40+",
    statLabel: "franchise locations connected",
    desc: "Centralised AI operating system for multi-location franchises. Real-time anomaly detection and auto-generated reports.",
    detail: "Full-stack platform · AI dashboard · Compliance automation · Board-ready summaries",
    gradient: "from-[#12171C] to-[#1b1b2f]",
    accent: "#3AAFA9"
  },
  {
    title: "Supaco.ai",
    tag: "AI · Supply Chain",
    stat: "30%",
    statLabel: "reduction in stockouts",
    desc: "Intelligent supply chain automation — demand forecasting, inventory optimisation, and real-time supplier coordination.",
    detail: "ML models · ERP integration · Automated reordering · Real-time demand prediction",
    gradient: "from-[#12171C] to-[#111111]",
    accent: "#808080"
  },
  {
    title: "Integr8.ai",
    tag: "Integration · Automation",
    stat: "50+",
    statLabel: "pre-built connectors",
    desc: "Universal integration layer connecting legacy systems, modern SaaS, and custom tools into automated workflows.",
    detail: "Data transformation · Error recovery · Real-time sync · Custom middleware",
    gradient: "from-[#12171C] to-[#0d1b2a]",
    accent: "#3AAFA9"
  },
];

function ShowcaseCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease }}
      className="relative min-h-[70vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Info */}
        <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#808080] block mb-4"
          >
            {project.tag}
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            style={{ color: project.accent }}
          >
            {project.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-[#0D1017]/60 text-lg leading-relaxed mb-6"
          >
            {project.desc}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-[#0D1017]/30 text-sm leading-relaxed"
          >
            {project.detail}
          </motion.p>
        </div>

        {/* Right: Stat card */}
        <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease }}
            className="relative rounded-3xl overflow-hidden aspect-[4/3] flex flex-col items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #F5F5F3 0%, #EAEAE8 50%, #DDDDDB 100%)',
              boxShadow: '0 0 80px rgba(58,175,169,0.05), inset 0 1px 0 rgba(13,16,23,0.05)'
            }}
          >
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(rgba(13,16,23,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,16,23,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-6xl md:text-8xl font-bold tracking-tighter text-[#0D1017] relative z-10"
            >
              {project.stat}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-[#0D1017]/40 text-sm mt-4 tracking-wide relative z-10"
            >
              {project.statLabel}
            </motion.span>

            {/* Corner accent */}
            <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-[#3AAFA9] opacity-30" />
            <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-[#808080] opacity-20" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={containerRef} className="bg-[#F5F5F3] text-[#0D1017] py-32 relative">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-20">
        <motion.div style={{ y: headerY, opacity: headerOpacity }}>
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#808080] block mb-4">
            Selected Work
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tighter leading-[0.95]">
            What we've<br />
            <span className="text-[#3AAFA9]">built</span>
          </h2>
        </motion.div>
      </div>

      {/* Project cards */}
      <div className="space-y-0">
        {projects.map((project, i) => (
          <ShowcaseCard key={i} project={project} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="max-w-7xl mx-auto px-6 md:px-10 mt-20 text-center"
      >
        <p className="text-[#0D1017]/40 text-lg mb-8">
          Want to see your project here?
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-3 bg-[#3AAFA9] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#4ABFBA] transition-colors"
        >
          Start a project →
        </a>
      </motion.div>
    </section>
  );
}
