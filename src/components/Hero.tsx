import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-black text-white pt-6 pb-12 px-6">
      {/* Animated Background Image from Original Design */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <motion.img
          src="https://framerusercontent.com/images/ZuUdmoRyw0AHCWs9QD3PT9m3liQ.png"
          alt="Abstract gradient background"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          animate={{
            scale: [1.05, 1.15, 1.05],
            x: ['-2%', '2%', '-2%'],
            y: ['-2%', '2%', '-2%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        {/* Subtle noise overlay to match the texture */}
        <div className="absolute inset-0 z-10 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight">Agentcy®</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
          <a href="#speakers" className="hover:text-gray-300 transition-colors">Speakers</a>
          <a href="#agenda" className="hover:text-gray-300 transition-colors">Agenda</a>
          <a href="#venue" className="hover:text-gray-300 transition-colors">Venue</a>
          <a href="#sponsors" className="hover:text-gray-300 transition-colors">Sponsors</a>
        </div>
        <button className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:text-gray-300 transition-colors">
          <ArrowRight className="w-4 h-4" /> Get tickets
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center flex-1 w-full mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[22vw] leading-[0.8] font-bold tracking-tighter text-center"
        >
          Agentcy
        </motion.h1>
        
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors text-lg"
        >
          <ArrowRight className="w-5 h-5" /> Work with us!
        </motion.button>
      </div>

      {/* Footer text */}
      <div className="relative z-20 w-full max-w-7xl mx-auto text-left mt-20">
        <p className="text-xl md:text-2xl font-medium">
          Leaders in Integration. Experts in Intelligence.
        </p>
      </div>
    </section>
  );
}
