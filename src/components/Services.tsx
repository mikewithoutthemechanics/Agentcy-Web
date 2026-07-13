import { motion } from 'motion/react';
import { BarChart3, Bot, Workflow, Wrench, MessageSquare, FileText, ArrowRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    icon: Bot,
    title: 'AI Integration',
    desc: 'We embed AI into your existing tools and workflows — not as a gimmick, but as a working layer that handles repetitive tasks, drafts responses, and flags issues before they become problems.',
    keywords: 'AI integration South Africa, business AI tools'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    desc: 'From quote-to-cash to customer onboarding, we map your end-to-end processes and eliminate the manual handoffs that slow you down. No more copy-pasting between systems.',
    keywords: 'workflow automation South Africa, business process automation'
  },
  {
    icon: Wrench,
    title: 'Custom Tools',
    desc: 'Off-the-shelf software never fits perfectly. We build custom internal tools — dashboards, calculators, trackers — that match your business exactly.',
    keywords: 'custom business tools, bespoke software South Africa'
  },
  {
    icon: BarChart3,
    title: 'Agentic Solutions',
    desc: 'We deploy autonomous AI agents that monitor, act, and escalate — like a digital team member that never sleeps. Think lead follow-up, stock alerts, or daily ops summaries.',
    keywords: 'AI agents, autonomous agents South Africa'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp CRM Setup',
    desc: 'South African businesses live on WhatsApp. We set up automated replies, lead capture, follow-up sequences, and CRM sync so nothing falls through the cracks.',
    keywords: 'WhatsApp CRM, WhatsApp automation South Africa'
  },
  {
    icon: FileText,
    title: 'Knowledge Base & SOP Automation',
    desc: 'We turn your tribal knowledge into a searchable, always-updated knowledge base your team can actually use — and automate standard operating procedures so quality stays consistent.',
    keywords: 'knowledge base automation, SOP automation'
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-white text-black py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="block text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: 'rgba(13,16,23,0.35)' }}
          >
            What we do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40, clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tighter leading-[0.95] mb-6"
          >
            We turn operational drag into your competitive edge.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: 'rgba(13,16,23,0.55)' }}
          >
            Every engagement starts with a deep audit. We learn your processes as well as you know them — then we build the automation, tools, and AI systems that remove friction for good.
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
              className="flex flex-col p-8 md:p-10 rounded-3xl transition-all duration-300"
              style={{ background: '#F5F5F3', border: '1px solid rgba(13,16,23,0.05)' }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(58,175,169,0.08)' }}>
                <service.icon size={24} color="#3AAFA9" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{service.title}</h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(13,16,23,0.55)' }}>
                {service.desc}
              </p>
              <a href="#contact" className="mt-auto inline-flex items-center gap-2 text-sm font-semibold transition-colors" style={{ color: '#3AAFA9' }}>
                Enquire now <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
