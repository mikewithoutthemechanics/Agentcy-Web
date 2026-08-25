import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden text-white pt-6 pb-12 px-6 md:px-10" style={{ background: '#0D1017' }}>
      {/* Background layers */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        {/* Base gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `
            radial-gradient(ellipse 100% 80% at 50% -20%, rgba(58,175,169,0.15) 0%, transparent 55%),
            radial-gradient(ellipse 80% 60% at 80% 100%, rgba(58,175,169,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 10% 60%, rgba(58,175,169,0.05) 0%, transparent 50%)
          `
        }} />

        {/* Video-like animated orbs */}
        <motion.div
          animate={{ x: [0, 40, -30, 0], y: [0, -50, 30, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', width: '60vw', height: '60vw', maxWidth: 700, maxHeight: 700,
            top: '-20%', left: '-15%', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(58,175,169,0.12) 0%, transparent 65%)',
            filter: 'blur(100px)', willChange: 'transform'
          }}
        />
        <motion.div
          animate={{ x: [0, -50, 40, 0], y: [0, 40, -40, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', width: '50vw', height: '50vw', maxWidth: 550, maxHeight: 550,
            bottom: '-20%', right: '-15%', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(58,175,169,0.08) 0%, transparent 65%)',
            filter: 'blur(80px)', willChange: 'transform'
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '35%', left: '50%', transform: 'translateX(-50%)',
            width: '70vw', height: '35vw', maxWidth: 800, maxHeight: 350,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(58,175,169,0.06) 0%, transparent 65%)',
            filter: 'blur(120px)', willChange: 'transform'
          }}
        />

        {/* Dot grid for depth */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(245,245,243,0.03) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)'
        }} />

        {/* Bottom fade into next section */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 320, background: 'linear-gradient(to top, #0D1017, transparent)' }} />
      </div>

      {/* Glassmorphism nav */}
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 max-w-7xl mx-auto"
        style={{
          backgroundColor: 'rgba(13,16,23,0.8)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          borderBottom: '1px solid rgba(245,245,243,0.06)'
        }}
      >
        <a href="#" className="font-bold text-lg tracking-tight" style={{ color: '#F5F5F3' }}>
          Agentcy<span style={{ color: '#3AAFA9' }}>®</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest">
          {[
            { href: '#services', label: 'Services' },
            { href: '#how-it-works', label: 'How It Works' },
            { href: '#results', label: 'Results' },
            { href: '#pricing', label: 'Pricing' },
            { href: 'tel:+27837915428', label: '+27 60 000 0000', accent: true },
            { href: '#contact', label: 'Contact' }
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              className="transition-all duration-200 hover:text-white"
              style={{ color: link.accent ? '#3AAFA9' : 'rgba(245,245,243,0.55)' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center flex-1 w-full max-w-6xl mx-auto text-center pt-28 md:pt-36">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="mb-10"
        >
          <span
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.25em]"
            style={{
              background: 'rgba(58,175,169,0.08)',
              color: '#3AAFA9',
              border: '1px solid rgba(58,175,169,0.18)',
              boxShadow: '0 0 30px rgba(58,175,169,0.08)'
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#3AAFA9' }} />
            AI Engineers · South Africa
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.3 }}
          className="text-[clamp(2.8rem,7.5vw,6.5rem)] leading-[0.88] font-bold tracking-tighter mb-10"
        >
          <span style={{ color: '#F5F5F3' }}>Your business has</span>
          <br />
          <span style={{ color: '#F5F5F3' }}>operational drag.</span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #4ABFBA 0%, #3AAFA9 40%, #2A8B8B 100%)',
              WebkitBackgroundClip: 'text'
            }}
          >
            We find it. Fix it.
          </span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #3AAFA9 0%, #4ABFBA 50%, #2A8B8B 100%)',
              WebkitBackgroundClip: 'text'
            }}
          >
            Automate it.
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease }}
          className="text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto mb-14"
          style={{ color: 'rgba(245,245,243,0.6)', lineHeight: 1.7 }}
        >
          Most AI agencies sit offshore and sell templates. We embed in your business — on-site in Ballito, Knysna, or anywhere in South Africa — and build systems that fit your reality.
          <span style={{ color: 'rgba(245,245,243,0.85)' }}> No tech headaches. No offshore support tickets. Just systems that work.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://cal.com/michael-from-agentcy/30min?embed=true&theme=light"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-base btn-primary"
            style={{ background: '#3AAFA9', color: '#0D1017' }}
          >
            Book a free 20-min audit <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/27837915428?text=Hi%20Agentcy%2C%20I%27d%20like%20to%20chat%20about%20AI%20automation%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-base btn-primary"
            style={{
              background: 'rgba(245,245,243,0.04)',
              color: '#F5F5F3',
              border: '1px solid rgba(245,245,243,0.12)',
              backdropFilter: 'blur(12px)'
            }}
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp us
          </a>
        </motion.div>

        {/* Stats strip - Conicorn style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-4xl mx-auto"
        >
          {[
            { number: '30+', label: 'hours saved per week', sub: 'For a logistics client in Durban' },
            { number: '40%', label: 'fewer missed calls', sub: 'WhatsApp CRM for retail chain' },
            { number: '4hrs', label: 'to full-team onboarding', sub: 'From 4 weeks to 4 hours' },
            { number: 'R0', label: 'wasted on manual admin', sub: 'After workflow automation' }
          ].map((stat, i) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div
                className="text-4xl md:text-5xl font-bold tracking-tighter mb-2"
                style={{ color: '#3AAFA9' }}
              >
                {stat.number}
              </div>
              <div
                className="text-xs md:text-sm font-semibold uppercase tracking-widest mb-1"
                style={{ color: 'rgba(245,245,243,0.6)' }}
              >
                {stat.label}
              </div>
              <div
                className="text-xs"
                style={{ color: 'rgba(245,245,243,0.3)' }}
              >
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative z-20 flex flex-col items-center gap-2 mb-4"
        style={{ color: 'rgba(245,245,243,0.3)' }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
