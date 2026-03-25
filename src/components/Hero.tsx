import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-black text-white pt-6 pb-12 px-6 md:px-10">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <motion.img
          src="https://framerusercontent.com/images/ZuUdmoRyw0AHCWs9QD3PT9m3liQ.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          animate={{
            scale: [1.05, 1.15, 1.05],
            x: ['-2%', '2%', '-2%'],
            y: ['-2%', '2%', '-2%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        {/* Grain overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.06\'/%3E%3C/svg%3E")',
            opacity: 0.5,
          }}
        />
        {/* Subtle vignette */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%)' }} />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-between"
      >
        <div className="font-bold text-lg tracking-tight">Agentcy®</div>
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest">
          <a href="#about" className="text-white/70 hover:text-white transition-colors duration-200">Work we've done</a>
          <a href="#process" className="text-white/70 hover:text-white transition-colors duration-200">How we do it</a>
          <a href="#team" className="text-white/70 hover:text-white transition-colors duration-200">Agents</a>
          <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-200">Contact</a>
        </div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-xs font-bold hover:bg-gray-100 transition-colors"
        >
          <ArrowRight className="w-3.5 h-3.5" /> Work with us
        </motion.button>
      </motion.nav>

      {/* Big Wordmark */}
      <div className="relative z-20 flex flex-col items-center justify-center flex-1 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="text-[22vw] leading-[0.85] font-bold tracking-tighter text-center select-none"
        >
          Agentcy
        </motion.h1>
      </div>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.45 }}
        className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
      >
        <p className="text-lg md:text-xl font-medium leading-snug text-white/80">
          Leaders in Integration.<br />Experts in Intelligence.
        </p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2.5 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-base whitespace-nowrap"
        >
          <ArrowRight className="w-4 h-4" /> Work with us!
        </motion.button>
      </motion.div>
    </section>
  );
}
