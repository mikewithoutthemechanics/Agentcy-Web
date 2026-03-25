import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white pt-32 pb-8 px-6 relative z-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <motion.img
          src="https://framerusercontent.com/images/ZuUdmoRyw0AHCWs9QD3PT9m3liQ.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          animate={{
            scale: [1.05, 1.15, 1.05],
            x: ['2%', '-2%', '2%'],
            y: ['2%', '-2%', '2%'],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 z-10 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-20">
        {/* Logo */}
        <div className="w-full flex justify-start mb-16">
          <span className="font-bold text-xl tracking-tight">Agentcy®</span>
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

        <p className="text-xl md:text-2xl text-gray-400 mb-12 text-center">
          Work with Africa's Leading AI Agency
        </p>

        <button className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors mb-32 text-lg">
          <ArrowRight className="w-5 h-5" /> Contact Us
        </button>

        {/* Footer links */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-8 text-sm font-medium uppercase tracking-wider text-gray-400">
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <a href="#about" className="hover:text-white transition-colors">Work we've done</a>
            <a href="#process" className="hover:text-white transition-colors">How we do it</a>
            <a href="#team" className="hover:text-white transition-colors">Agents</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
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
