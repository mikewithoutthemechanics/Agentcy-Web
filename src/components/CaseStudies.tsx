import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const caseStudies = [
  {
    slug: "waitup",
    title: "WaitUp",
    client: "Fitness Studio Chain",
    tag: "SaaS · No-Show Prevention",
    summary: "Built an AI-powered booking system that reduced no-shows by 40% and filled empty slots automatically.",
    metrics: [
      { label: "No-show reduction", value: "40%" },
      { label: "Slots recovered per week", value: "120+" },
      { label: "Revenue recovered monthly", value: "R85k" },
    ],
    stack: ["Supabase", "React", "Edge Functions", "Vercel", "WhatsApp API"],
    story: "A chain of yoga studios was losing 30% of bookings to no-shows. We built WaitUp — an AI system that predicts no-shows based on booking history, weather, and time patterns. When a no-show is predicted, the system automatically offers the slot to waitlisted members via WhatsApp. Within 3 months, no-shows dropped 40% and the studio recovered R85k/month in lost revenue.",
  },
  {
    slug: "bridgeaios",
    title: "BridgeAIOS",
    client: "Multi-Location Franchise",
    tag: "AI Ops · Franchise Management",
    summary: "A centralised AI operating system that gives franchise owners real-time visibility across every location.",
    metrics: [
      { label: "Manual reporting eliminated", value: "15hrs/wk" },
      { label: "Anomaly detection speed", value: "< 2min" },
      { label: "Locations managed", value: "24" },
    ],
    stack: ["Node.js", "PostgreSQL", "AI/ML Pipeline", "React Dashboard", "Slack Integration"],
    story: "A franchise group managing 24 locations was drowning in manual reporting. Each location submitted weekly spreadsheets, head office compiled them for 2 days, and by the time issues surfaced, they were already problems. We built BridgeAIOS — agents that monitor KPIs in real-time, flag anomalies within 2 minutes, and auto-generate board-ready reports every Monday morning. Head office now has live dashboards for every location.",
  },
  {
    slug: "supaco",
    title: "Supaco.ai",
    client: "E-commerce & Retail",
    tag: "AI · Supply Chain",
    summary: "Intelligent supply chain automation that predicts demand and automates reordering.",
    metrics: [
      { label: "Stockout reduction", value: "60%" },
      { label: "Inventory carrying cost cut", value: "22%" },
      { label: "Forecast accuracy", value: "94%" },
    ],
    stack: ["Python", "ML Models", "ERP Integration", "Real-time APIs", "Alerting"],
    story: "An e-commerce brand was constantly either overstocked or out of stock. We built Supaco.ai — ML models trained on 3 years of sales data, seasonal patterns, and marketing spend. The system predicts demand 8 weeks out with 94% accuracy, auto-generates purchase orders, and alerts the team to unusual patterns. Stockouts dropped 60% and they freed up 22% of tied-up inventory capital.",
  },
  {
    slug: "integr8",
    title: "Integr8.ai",
    client: "Professional Services",
    tag: "Integration · Automation",
    summary: "A universal integration layer connecting legacy systems, modern SaaS, and custom tools.",
    metrics: [
      { label: "Systems connected", value: "12" },
      { label: "Manual data entry eliminated", value: "95%" },
      { label: "Sync latency", value: "< 30s" },
    ],
    stack: ["Node.js", "Webhooks", "Message Queues", "API Gateway", "Monitoring"],
    story: "A professional services firm ran on 12 different systems that couldn't talk to each other. Staff spent 2+ hours daily copying data between tools. We built Integr8.ai — a middleware layer with pre-built connectors, real-time webhooks, and smart error recovery. Now data flows automatically between CRM, project management, invoicing, and reporting. Manual data entry dropped 95%.",
  },
];

export default function CaseStudies() {
  const [selected, setSelected] = useState<typeof caseStudies[0] | null>(null);

  if (selected) {
    return (
      <section className="bg-white text-black min-h-screen py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelected(null)}
            className="text-sm text-gray-400 hover:text-black transition-colors mb-12 block"
          >
            ← Back to case studies
          </button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">{selected.tag}</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mt-4 mb-2">{selected.title}</h1>
            <p className="text-gray-400 text-lg mb-12">{selected.client}</p>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden mb-12">
              {selected.metrics.map((m, i) => (
                <div key={i} className="bg-white px-8 py-8">
                  <span className="text-3xl md:text-4xl font-bold tracking-tighter block mb-1">{m.value}</span>
                  <span className="text-gray-500 text-sm">{m.label}</span>
                </div>
              ))}
            </div>

            {/* Story */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">The Problem</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{selected.story}</p>
            </div>

            {/* Stack */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {selected.stack.map((s, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">{s}</span>
                ))}
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-gray-200">
              <a href="#contact" className="flex items-center gap-2 text-lg font-semibold hover:text-gray-500 transition-colors">
                Want results like this? <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F5F5F3] text-[#0D1017] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease }}
            className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-tighter leading-[0.9]"
          >
            Case<br />Studies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-xl text-gray-500 max-w-sm mt-6 md:mt-0 leading-relaxed"
          >
            Real projects. Real numbers. Real impact.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onClick={() => setSelected(cs)}
              className="group cursor-pointer border border-white/10 hover:border-white/30 rounded-2xl p-6 md:p-10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0D1017]/40">{cs.tag}</span>
                <ArrowUpRight className="w-5 h-5 text-[#0D1017]/20 group-hover:text-[#0D1017] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">{cs.title}</h3>
              <p className="text-gray-500 text-sm mb-6">{cs.client}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">{cs.summary}</p>

              {/* Mini metrics */}
              <div className="flex gap-8">
                {cs.metrics.slice(0, 2).map((m, j) => (
                  <div key={j}>
                    <span className="text-xl font-bold tracking-tight block">{m.value}</span>
                    <span className="text-gray-500 text-xs">{m.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
