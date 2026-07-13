import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const tiers = [
  {
    name: 'Starter',
    price: 'R4,999',
    period: 'once-off',
    tagline: 'Perfect for businesses who want clarity before commitment.',
    features: [
      'Full on-site or remote business audit',
      'Opportunity map with prioritised automation roadmap',
      'Technical blueprint with timelines and ROI estimates',
      '1-hour debrief with leadership team',
      '30-day post-audit support via WhatsApp/email'
    ],
    cta: 'Book a Starter Audit',
    highlighted: false
  },
  {
    name: 'Growth',
    price: 'R18,999',
    period: '/month',
    tagline: 'For businesses ready to automate and scale.',
    features: [
      'Everything in Starter, plus ongoing execution',
      '2–3 workflow automations or AI integrations per month',
      'Dedicated AI engineer on Slack/WhatsApp',
      'Monthly optimisation review and reporting',
      'Priority support — response within 4 business hours',
      'Access to our custom tools library'
    ],
    cta: 'Start Growing',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    tagline: 'Full forward-deployed AI engineering for ambitious teams.',
    features: [
      'Dedicated on-site AI engineer embedded in your business',
      'Full audit, architecture, build, and managed operations',
      'Custom agentic solutions and proprietary tooling',
      'Team training, documentation, and SOP creation',
      'Real-time monitoring and incident response',
      'Quarterly strategy reviews with leadership'
    ],
    cta: 'Let\'s Talk Enterprise',
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 px-6 md:px-10" style={{ background: '#F5F5F3' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="block text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: 'rgba(13,16,23,0.35)' }}
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40, clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tighter leading-[0.95] mb-6"
          >
            Simple pricing. Real results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: 'rgba(13,16,23,0.55)' }}
          >
            Every engagement starts with a conversation. Pick a tier or reach out — we\'ll recommend what fits.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease }}
              className="flex flex-col p-8 md:p-10 rounded-3xl"
              style={{
                background: tier.highlighted ? '#0D1017' : '#fff',
                color: tier.highlighted ? '#F5F5F3' : '#0D1017',
                border: tier.highlighted ? '2px solid #3AAFA9' : '1px solid rgba(13,16,23,0.08)'
              }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold tracking-tight mb-1">{tier.name}</h3>
                <p className="text-sm" style={{ color: tier.highlighted ? 'rgba(245,245,243,0.55)' : 'rgba(13,16,23,0.45)' }}>
                  {tier.tagline}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-4xl md:text-5xl font-bold tracking-tighter">{tier.price}</span>
                {tier.period && (
                  <span className="text-base ml-1" style={{ color: tier.highlighted ? 'rgba(245,245,243,0.5)' : 'rgba(13,16,23,0.4)' }}>
                    {tier.period}
                  </span>
                )}
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: '#3AAFA9' }} />
                    <span style={{ color: tier.highlighted ? 'rgba(245,245,243,0.75)' : 'rgba(13,16,23,0.65)' }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold transition-all hover:scale-105"
                style={{
                  background: tier.highlighted ? '#3AAFA9' : '#F5F5F3',
                  color: tier.highlighted ? '#0D1017' : '#0D1017'
                }}
              >
                {tier.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
