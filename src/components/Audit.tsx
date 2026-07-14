import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Calendar } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Audit() {
  return (
    <div style={{ background: '#0D1017', color: '#F5F5F3', minHeight: '100vh' }}>
      {/* Header */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 max-w-7xl mx-auto"
        style={{ background: 'rgba(13,16,23,0.9)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(245,245,243,0.06)' }}>
        <a href="/" className="font-bold text-lg tracking-tight" style={{ color: '#F5F5F3' }}>
          Agentcy<span style={{ color: '#3AAFA9' }}>®</span>
        </a>
        <a href="/#contact" className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#3AAFA9' }}>
          Back to Home
        </a>
      </nav>

      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left col — value prop */}
            <div>
              <motion.span
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-6"
                style={{ background: 'rgba(58,175,169,0.08)', color: '#3AAFA9', border: '1px solid rgba(58,175,169,0.15)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#3AAFA9' }} />
                Free Audit
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease }}
                className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tighter leading-[0.95] mb-6"
                style={{ color: '#F5F5F3' }}
              >
                See what's possible in <span style={{ color: '#3AAFA9' }}>20 minutes.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl leading-relaxed mb-10"
                style={{ color: 'rgba(245,245,243,0.5)' }}
              >
                We'll audit your quote-to-cash, dispatch, lead follow-up, or admin processes — and show you exactly what to automate, what to replace, and what to leave alone. No pitch. No pressure. Just a clear roadmap with timelines and ROI estimates.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-4 mb-10"
              >
                {[
                  'Deep-dive into your most painful process',
                  'Prioritised automation roadmap with timelines',
                  'ROI estimate — how much time and money you\'ll save',
                  'Clear next steps, whether you work with us or not'
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#3AAFA9' }} />
                    <span className="text-base" style={{ color: 'rgba(245,245,243,0.65)' }}>{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-6 text-sm"
                style={{ color: 'rgba(245,245,243,0.4)' }}
              >
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#3AAFA9' }} />
                  On-site or remote
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#3AAFA9' }} />
                  No obligation
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#3AAFA9' }} />
                  20-min session
                </span>
              </motion.div>
            </div>

            {/* Right col — booking form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7, ease }}
              className="p-8 md:p-10 rounded-3xl"
              style={{ background: '#141922', border: '1px solid rgba(245,245,243,0.06)', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
            >
              <h2 className="text-2xl font-bold tracking-tight mb-2" style={{ color: '#F5F5F3' }}>Claim your free audit</h2>
              <p className="text-sm mb-8" style={{ color: 'rgba(245,245,243,0.45)' }}>
                Pick a time that works. We'll send you a quick prep form before the call.
              </p>

              {/* Cal.com embed placeholder — replace with your actual embed */}
              <div className="rounded-2xl overflow-hidden" style={{ background: '#F5F5F3', border: '1px solid rgba(13,16,23,0.06)' }}>
                <iframe
                  src="https://cal.com/michael-from-agentcy/30min?embed=true&theme=light"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Book a free 20-min audit"
                  style={{ border: 'none' }}
                />
              </div>

              <p className="text-xs mt-4 text-center" style={{ color: 'rgba(245,245,243,0.35)' }}>
                Prefer WhatsApp? <a href="https://wa.me/27600000000?text=Hi%20Agentcy%2C%20I%27d%20like%20to%20claim%20a%20free%20audit" className="underline" style={{ color: '#3AAFA9' }}>Message us directly</a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-10" style={{ background: '#0D1017', color: 'rgba(245,245,243,0.4)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <span>© {new Date().getFullYear()} Agentcy. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="/" className="transition-colors hover:text-white" style={{ color: 'rgba(245,245,243,0.4)' }}>Home</a>
            <a href="/#terms" className="transition-colors hover:text-white" style={{ color: 'rgba(245,245,243,0.4)' }}>Terms</a>
            <a href="/#privacy" className="transition-colors hover:text-white" style={{ color: 'rgba(245,245,243,0.4)' }}>Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
