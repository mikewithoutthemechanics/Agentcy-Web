import { motion } from 'motion/react';
import { MapPin, Clock, Shield, TrendingUp, Check } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;
import EyeBrow from './EyeBrow';

const reasons = [
  {
    icon: MapPin,
    title: 'On-site anywhere in South Africa',
    desc: 'We fly to you. Ballito, Knysna, Johannesburg, Cape Town, Durban — we embed in your business and learn your operations from the inside, not from a distance.'
  },
  {
    icon: Clock,
    title: 'We give you time back',
    desc: 'Our clients consistently report reclaiming 10–30 hours a week. That time goes back to revenue-generating work, strategy, and scaling — not fighting your own systems.'
  },
  {
    icon: TrendingUp,
    title: 'Pain points become your edge',
    desc: 'We don\'t just fix problems — we turn operational weaknesses into competitive advantages. Your competitors are still stuck on manual processes. You won\'t be.'
  },
  {
    icon: Shield,
    title: 'We stay until it sticks',
    desc: 'No build-and-disappear. Every engagement includes post-launch monitoring, team training, and quarterly optimisation reviews. Your systems keep getting better.'
  }
];

export default function WhyAgentcy() {
  return (
    <section id="why-agentcy" className="py-24 md:py-32 px-6 md:px-10 relative z-30" style={{ background: '#0D1017' }}>
      <div className="container-medium">
        <div className="max-w-3xl mb-16 md:mb-24">
          <EyeBrow label="Why Agentcy" number="002" />
          <motion.h2
            initial={{ opacity: 0, y: 40, clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tighter leading-[0.95] mb-6"
            style={{ color: '#F5F5F3' }}
          >
            Built different, for South African businesses.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: 'rgba(245,245,243,0.5)' }}
          >
            Most AI agencies sit offshore and sell templates. We\'re different: we come to your premises, learn your business from the inside, and build systems that fit your reality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease }}
              className="flex gap-6 p-8 md:p-10 rounded-3xl service-card"
            >
              <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(58,175,169,0.08)', border: '1px solid rgba(58,175,169,0.15)' }}>
                <reason.icon size={24} color="#3AAFA9" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight mb-3" style={{ color: '#F5F5F3' }}>{reason.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: 'rgba(245,245,243,0.5)' }}>
                  {reason.desc}
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Check size={14} color="#3AAFA9" />
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#3AAFA9' }}>
                    Proven
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
