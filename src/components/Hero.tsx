import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden text-white pt-6 pb-12 px-6 md:px-10" style={{ background: '#0D1017' }}>
      {/* Subtle gradient background instead of heavy video */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 30% 20%, rgba(58,175,169,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(58,175,169,0.05) 0%, transparent 50%)'
        }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to top, #F5F5F3, transparent)' }} />
      </div>

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-6 max-w-7xl mx-auto transition-all duration-300"
        style={{ backgroundColor: 'rgba(13,16,23,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <a href="#" className="font-bold text-lg tracking-tight" style={{ color: '#F5F5F3' }}>Agentcy®</a>
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest">
          <a href="#services" className="transition-colors duration-200 hover:text-white" style={{ color: 'rgba(255,255,255,0.6)' }}>Services</a>
          <a href="#how-it-works" className="transition-colors duration-200 hover:text-white" style={{ color: 'rgba(255,255,255,0.6)' }}>How It Works</a>
          <a href="#results" className="transition-colors duration-200 hover:text-white" style={{ color: 'rgba(255,255,255,0.6)' }}>Results</a>
          <a href="#faq" className="transition-colors duration-200 hover:text-white" style={{ color: 'rgba(255,255,255,0.6)' }}>FAQ</a>
          <a href="#contact" className="transition-colors duration-200 hover:text-white" style={{ color: 'rgba(255,255,255,0.6)' }}>Contact</a>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center flex-1 w-full max-w-5xl mx-auto text-center pt-24">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-6"
          style={{ color: '#3AAFA9' }}
        >
          AI Engineers · South Africa
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="text-[8vw] sm:text-[7vw] md:text-[5.5vw] leading-[0.95] font-bold tracking-tighter select-none mb-8"
          style={{ color: '#F5F5F3', textShadow: '0 2px 40px rgba(0,0,0,0.4)' }}
        >
          Your business has operational drag.
          <br />
          <span style={{ color: '#3AAFA9' }}>We find it, fix it, and automate it.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-xl leading-relaxed max-w-3xl mx-auto mb-10"
          style={{ color: 'rgba(245,245,243,0.7)' }}
        >
          We send AI engineers into your business — on-site anywhere in South Africa — to learn your processes as well as you know them.
          We audit, architect, and automate until your pain points become your competitive edge.
          Then we give you time back to focus on revenue, scale, and what actually matters.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://cal.com/michael-from-agentcy/30min?embed=true&theme=light"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105"
            style={{ background: '#3AAFA9', color: '#0D1017', boxShadow: '0 8px 30px rgba(58,175,169,0.2)' }}
          >
            <ArrowRight className="w-5 h-5" /> Book a free 20-min audit
          </a>
          <a
            href="https://wa.me/27600000000?text=Hi%20Agentcy%2C%20I%27d%20like%20to%20chat%20about%20AI%20automation%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105"
            style={{ background: 'rgba(245,245,243,0.08)', color: '#F5F5F3', border: '1px solid rgba(245,245,243,0.15)' }}
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp us
          </a>
        </motion.div>
      </div>

      {/* Bottom row */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.6 }}
        className="relative z-20 w-full max-w-4xl mx-auto flex items-center justify-center gap-8">
        <p className="text-xs" style={{ color: 'rgba(245,245,243,0.35)' }}>
          On-site anywhere in South Africa
        </p>
        <div style={{ width: 1, height: 16, background: 'rgba(245,245,243,0.15)' }} />
        <p className="text-xs" style={{ color: 'rgba(245,245,243,0.35)' }}>
          Ballito · Knysna · Remote
        </p>
      </motion.div>
    </section>
  );
}
