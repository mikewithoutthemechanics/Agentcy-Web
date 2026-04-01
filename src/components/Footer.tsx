import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#F5F5F3] text-[#0D1017] pt-32 pb-8 px-6 relative z-50 overflow-hidden">
      {/* Animated Background — same as Hero */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#F5F5F3]">
        <motion.div
          className="absolute -inset-[50%]"
          style={{
            background: `
              radial-gradient(ellipse 55% 55% at 70% 70%, rgba(80,80,80,0.9) 0%, transparent 55%),
              radial-gradient(ellipse 55% 55% at 30% 30%, rgba(100,100,100,0.7) 0%, transparent 55%)
            `,
          }}
          animate={{
            x: ['0%', '-15%', '10%', '0%'],
            y: ['0%', '15%', '-10%', '0%'],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -inset-[50%]"
          style={{
            background: `
              radial-gradient(ellipse 65% 45% at 40% 80%, rgba(70,70,70,0.85) 0%, transparent 50%),
              radial-gradient(ellipse 45% 65% at 80% 20%, rgba(90,90,90,0.6) 0%, transparent 50%)
            `,
          }}
          animate={{
            x: ['0%', '10%', '-15%', '0%'],
            y: ['0%', '-20%', '10%', '0%'],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Grain */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.06\'/%3E%3C/svg%3E")',
            opacity: 0.5,
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)' }} />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-20">
        {/* Logo */}
        <div className="w-full flex justify-start mb-16">
          <a href="#" className="font-bold text-xl tracking-tight">Agentcy®</a>
        </div>

        {/* Big CTA headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10vw] leading-none font-bold tracking-tighter text-center mb-8"
        >
          Turn your business on.
        </motion.h2>

        <p className="text-base md:text-2xl text-gray-400 mb-12 text-center px-4">
          Build with Africa's boldest software & AI agency
        </p>

        <a
          href="#contact"
          className="flex items-center justify-center gap-2 bg-white text-black px-6 md:px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors mb-16 md:mb-32 text-base md:text-lg w-full max-w-xs"
        >
          <ArrowRight className="w-5 h-5" /> Contact Us
        </a>

        {/* Footer links */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-8 text-sm font-medium uppercase tracking-wider text-gray-400">
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <a href="#portfolio" className="hover:text-[#0D1017] transition-colors">Work</a>
            <a href="/case-studies" className="hover:text-[#0D1017] transition-colors">Case Studies</a>
            <a href="/blog" className="hover:text-[#0D1017] transition-colors">Blog</a>
            <a href="#process" className="hover:text-[#0D1017] transition-colors">How we do it</a>
            <a href="#team" className="hover:text-[#0D1017] transition-colors">Team</a>
            <a href="#contact" className="hover:text-[#0D1017] transition-colors">Contact</a>
            <a href="/terms" className="hover:text-[#0D1017] transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-[#0D1017] transition-colors">Privacy</a>
          </div>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs font-bold">in</a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs font-bold">𝕏</a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs font-bold">ig</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
