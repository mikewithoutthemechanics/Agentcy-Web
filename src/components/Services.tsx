import { motion } from 'motion/react';
import { Bot, Workflow, Wrench, BarChart3, MessageSquare, FileText, Check } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;
import EyeBrow from './EyeBrow';

const services = [
  {
    icon: Bot,
    title: 'AI Integration',
    desc: 'We embed AI into your existing tools — not as a gimmick, but as a working layer that drafts responses, flags issues, and handles repetitive tasks so your team can focus on revenue.',
    keywords: 'AI integration South Africa, business AI tools, AI for small business SA'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    desc: 'From quote-to-cash to customer onboarding, we map your end-to-end processes and eliminate the manual handoffs that slow you down. No more copy-pasting between systems.',
    keywords: 'workflow automation South Africa, business process automation, quote to cash automation'
  },
  {
    icon: Wrench,
    title: 'Custom Tools',
    desc: 'Off-the-shelf software never fits perfectly. We build custom internal tools — dashboards, calculators, trackers — that match your business exactly.',
    keywords: 'custom business tools, bespoke software South Africa, internal tools for business'
  },
  {
    icon: BarChart3,
    title: 'Agentic Solutions',
    desc: 'We deploy autonomous AI agents that monitor, act, and escalate — like a digital team member that never sleeps. Think missed call recovery, stock alerts, or daily ops summaries.',
    keywords: 'AI agents, autonomous agents South Africa, missed call recovery, lead follow-up automation'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp CRM Setup',
    desc: 'South African businesses live on WhatsApp. We set up automated replies, lead capture, follow-up sequences, and CRM sync so nothing falls through the cracks.',
    keywords: 'WhatsApp CRM, WhatsApp automation South Africa, WhatsApp business automation, lead capture automation'
  },
  {
    icon: FileText,
    title: 'Knowledge Base & SOP Documentation',
    desc: 'We turn your tribal knowledge into a searchable knowledge base your team can actually use — and document standard operating procedures so quality stays consistent as you grow.',
    keywords: 'knowledge base automation, SOP documentation, business process documentation South Africa'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-10 relative z-30" style={{ background: '#0D1017' }}>
      <div className="container-medium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <EyeBrow label="Our capabilities" number="003" />
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tighter leading-[0.95] mb-6"
            style={{ color: '#F5F5F3' }}
          >
            AI-driven services that fit your business
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: 'rgba(245,245,243,0.5)' }}
          >
            Every engagement starts with a deep audit. We learn your processes as well as you know them — then we build the automation, tools, and AI systems that remove friction for good.
          </p>
        </motion.div>

        {/* Service cards - Conicorn style with icon frames */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="service-card group flex flex-col p-8 md:p-10 rounded-3xl cursor-pointer"
            >
              {/* Icon frame */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                style={{
                  background: 'rgba(58,175,169,0.08)',
                  color: '#3AAFA9',
                  border: '1px solid rgba(58,175,169,0.15)'
                }}
              >
                <service.icon size={26} strokeWidth={1.5} />
              </div>

              {/* Image placeholder - card image area */}
              <div
                className="w-full h-32 rounded-xl mb-6 overflow-hidden relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(58,175,169,0.05), rgba(58,175,169,0.02))',
                  border: '1px solid rgba(245,245,243,0.06)'
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-xs uppercase tracking-widest" style={{ color: 'rgba(245,245,243,0.2)' }}>
                    {service.title}
                  </div>
                </div>
              </div>

              <h3
                className="text-xl font-bold mb-3 tracking-tight transition-colors"
                style={{ color: '#F5F5F3' }}
              >
                {service.title}
              </h3>

              <p
                className="text-base leading-relaxed mb-6 flex-1"
                style={{ color: 'rgba(245,245,243,0.5)' }}
              >
                {service.desc}
              </p>

              {/* Checkmark indicator */}
              <div className="flex items-center gap-2 mt-auto">
                <span className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(58,175,169,0.15)' }}>
                  <Check size={10} color="#3AAFA9" strokeWidth={3} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#3AAFA9' }}>
                  Available
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
