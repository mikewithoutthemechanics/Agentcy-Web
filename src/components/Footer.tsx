import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-50 pt-24 pb-8 px-6 md:px-10 overflow-hidden" style={{ background: '#0D1017', borderTop: '1px solid rgba(245,245,243,0.06)' }}>
      {/* Subtle teal glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(58,175,169,0.04) 0%, transparent 70%)' }} />

      <div className="container-medium relative z-20">
        {/* Big CTA headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] mb-6" style={{ color: '#F5F5F3' }}>
            Turn your business <span style={{ color: '#3AAFA9' }}>on</span>.
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(245,245,243,0.45)' }}>
            AI engineers, on-site anywhere in South Africa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://cal.com/michael-from-agentcy/30min?embed=true&theme=light"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 text-base w-full sm:w-auto"
              style={{ background: '#3AAFA9', color: '#0D1017', boxShadow: '0 8px 30px rgba(58,175,169,0.15)' }}
            >
              Book a free audit <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/27837915428?text=Hi%20Agentcy%2C%20I%27d%20like%20to%20chat%20about%20AI%20automation%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 text-base w-full sm:w-auto"
              style={{ background: '#141922', color: '#F5F5F3', border: '1px solid rgba(245,245,243,0.08)' }}
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp us
            </a>
          </div>
        </motion.div>

        {/* Footer links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 text-sm font-medium uppercase tracking-wider" style={{ borderTop: '1px solid rgba(245,245,243,0.06)', color: 'rgba(245,245,243,0.4)' }}>
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <a href="#services" className="hover:text-[#3AAFA9] transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-[#3AAFA9] transition-colors">How It Works</a>
            <a href="#results" className="hover:text-[#3AAFA9] transition-colors">Results</a>
            <a href="#pricing" className="hover:text-[#3AAFA9] transition-colors">Pricing</a>
            <a href="#team" className="hover:text-[#3AAFA9] transition-colors">Team</a>
            <a href="#faq" className="hover:text-[#3AAFA9] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[#3AAFA9] transition-colors">Contact</a>
            <a href="/terms" className="hover:text-[#3AAFA9] transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-[#3AAFA9] transition-colors">Privacy</a>
          </div>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors text-xs font-bold hover:bg-white/5" style={{ border: '1px solid rgba(245,245,243,0.08)', color: 'rgba(245,245,243,0.4)' }}>
              <Linkedin size={16} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors text-xs font-bold hover:bg-white/5" style={{ border: '1px solid rgba(245,245,243,0.08)', color: 'rgba(245,245,243,0.4)' }}>
              <Twitter size={16} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors text-xs font-bold hover:bg-white/5" style={{ border: '1px solid rgba(245,245,243,0.08)', color: 'rgba(245,245,243,0.4)' }}>
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div className="text-center mt-8 text-xs" style={{ color: 'rgba(245,245,243,0.25)' }}>
          © {new Date().getFullYear()} Agentcy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
