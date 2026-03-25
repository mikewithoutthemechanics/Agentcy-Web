import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-black text-white pt-6 pb-12 px-6">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <motion.img
          src="https://framerusercontent.com/images/ZuUdmoRyw0AHCWs9QD3PT9m3liQ.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          animate={{
            scale: [1.05, 1.15, 1.05],
            x: ['-2%', '2%', '-2%'],
            y: ['-2%', '2%', '-2%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 z-10 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      </div>

      {/* Navbar */}
      <nav className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight">Agentcy®</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
          <a href="#about" className="hover:text-gray-300 transition-colors">Work we've done</a>
          <a href="#process" className="hover:text-gray-300 transition-colors">How we do it</a>
          <a href="#team" className="hover:text-gray-300 transition-colors">Agents</a>
          <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
        </div>
        <button className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
          <ArrowRight className="w-4 h-4" /> Work with us!
        </button>
      </nav>

      {/* Big Wordmark */}
      <div className="relative z-20 flex flex-col items-center justify-center flex-1 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[22vw] leading-[0.85] font-bold tracking-tighter text-center"
        >
          Agentcy
        </motion.h1>
      </div>

      {/* Bottom row: tagline left, CTA right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
      >
        <p className="text-xl md:text-2xl font-medium leading-snug">
          Leaders in Integration.<br />Experts in Intelligence.
        </p>
        <button className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors text-lg whitespace-nowrap">
          <ArrowRight className="w-5 h-5" /> Work with us!
        </button>
      </motion.div>
    </section>
  );
}
