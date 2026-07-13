import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="text-[#0D1017] pt-32 pb-8 px-6 relative z-50 overflow-hidden" style={{ background: '#EAEAE8' }}>
      {/* Subtle teal glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(58,175,169,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-20">
        {/* Logo */}
        <div className="w-full flex justify-start mb-16">
          <a href="#" className="font-bold text-xl tracking-tight" style={{ color: '#0D1017' }}>Agentcy®</a>
        </div>

        {/* Big CTA headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10vw] leading-none font-bold tracking-tighter text-center mb-8"
          style={{ color: '#0D1017' }}
        >
          Turn your business <span style={{ color: '#3AAFA9' }}>on</span>.
        </motion.h2>

        <p className="text-base md:text-2xl mb-12 text-center px-4" style={{ color: 'rgba(13,16,23,0.4)' }}>
          AI engineers, on-site anywhere in South Africa.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-32">
          <a
            href="https://cal.com/michael-from-agentcy/30min?embed=true&theme=light"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 text-base md:text-lg w-full sm:w-auto"
            style={{ background: '#3AAFA9', color: '#0D1017', boxShadow: '0 8px 30px rgba(58,175,169,0.15)' }}
          >
            Book a free audit <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/27600000000?text=Hi%20Agentcy%2C%20I%27d%20like%20to%20chat%20about%20AI%20automation%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 text-base md:text-lg w-full sm:w-auto"
            style={{ background: '#0D1017', color: '#F5F5F3' }}
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp us
          </a>
        </div>

        {/* Footer links */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 pt-8 text-sm font-medium uppercase tracking-wider" style={{ borderTop: '1px solid rgba(13,16,23,0.08)', color: 'rgba(13,16,23,0.4)' }}>
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <a href="#services" className="hover:text-[#3AAFA9] transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-[#3AAFA9] transition-colors">How It Works</a>
            <a href="#results" className="hover:text-[#3AAFA9] transition-colors">Results</a>
            <a href="#pricing" className="hover:text-[#3AAFA9] transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-[#3AAFA9] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[#3AAFA9] transition-colors">Contact</a>
            <a href="/terms" className="hover:text-[#3AAFA9] transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-[#3AAFA9] transition-colors">Privacy</a>
          </div>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors text-xs font-bold hover:bg-black/5" style={{ border: '1px solid rgba(13,16,23,0.12)' }}>in</a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors text-xs font-bold hover:bg-black/5" style={{ border: '1px solid rgba(13,16,23,0.12)' }}>𝕏</a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors text-xs font-bold hover:bg-black/5" style={{ border: '1px solid rgba(13,16,23,0.12)' }}>ig</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
