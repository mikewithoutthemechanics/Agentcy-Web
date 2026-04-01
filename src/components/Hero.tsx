import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const ease = [0.16, 1, 0.3, 1] as const;

function SmoothVideo({ src, style }: { src: string; style: React.CSSProperties }) {
  const vidA = useRef<HTMLVideoElement>(null);
  const vidB = useRef<HTMLVideoElement>(null);
  const [crossfade, setCrossfade] = useState(0);

  useEffect(() => {
    const a = vidA.current;
    const b = vidB.current;
    if (!a || !b) return;
    let raf: number;
    let usingA = true;
    const check = () => {
      if (!a.duration) { raf = requestAnimationFrame(check); return; }
      const active = usingA ? a : b;
      const standby = usingA ? b : a;
      const remaining = active.duration - active.currentTime;
      if (standby.paused && active.currentTime > 0.5) {
        standby.currentTime = active.currentTime;
        standby.play().catch(() => {});
      }
      if (remaining < 1.5) {
        const progress = 1 - (remaining / 1.5);
        setCrossfade(usingA ? progress : 1 - progress);
      }
      if (remaining < 0.02) {
        usingA = !usingA;
        setCrossfade(usingA ? 0 : 1);
        const newStandby = usingA ? b : a;
        newStandby.currentTime = 0;
      }
      raf = requestAnimationFrame(check);
    };
    a.addEventListener('playing', () => {
      if (b.paused) { b.currentTime = a.currentTime; b.play().catch(() => {}); }
    }, { once: true });
    raf = requestAnimationFrame(check);
    return () => cancelAnimationFrame(raf);
  }, []);

  const vidStyle = { ...style, transition: 'opacity 0.05s linear' };
  return (
    <>
      <video ref={vidA} autoPlay muted playsInline style={{ ...vidStyle, opacity: 1 - crossfade }}><source src={src} type="video/mp4" /></video>
      <video ref={vidB} muted playsInline style={{ ...vidStyle, opacity: crossfade }}><source src={src} type="video/mp4" /></video>
    </>
  );
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#portfolio', label: 'Work' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden text-white pt-6 pb-12 px-6 md:px-10" style={{ background: '#0D1017' }}>
      {/* Video Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <SmoothVideo
          src="/hero-video.mp4"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center center',
            filter: 'brightness(1.15) contrast(1.05)',
          }}
        />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to top, #F5F5F3, transparent)' }} />
      </div>

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-6 max-w-7xl mx-auto transition-all duration-300"
        style={scrolled ? {
          backgroundColor: 'rgba(245,245,243,0.92)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        } : { backgroundColor: 'transparent' }}
      >
        <a href="#" className="font-bold text-lg tracking-tight" style={{ color: scrolled ? '#0D1017' : '#fff', transition: 'color 0.3s' }}>Agentcy®</a>
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="transition-colors duration-200" style={{ color: scrolled ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.6)' }}>{link.label}</a>
          ))}
        </div>
        <div style={{ width: 40 }} className="hidden md:block" />
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2" style={{ color: scrolled ? '#0D1017' : '#fff' }} data-hover>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8" style={{ background: 'rgba(245,245,243,0.98)', backdropFilter: 'blur(20px)' }}>
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 p-2" style={{ color: '#0D1017' }}><X className="w-6 h-6" /></button>
            {navLinks.map((link, i) => (
              <motion.a key={link.href} href={link.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }} onClick={() => setMenuOpen(false)}
                className="text-3xl font-bold transition-colors" style={{ color: 'rgba(13,16,23,0.7)' }}>
                {link.label}
              </motion.a>
            ))}
            <a href="/romy" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg mt-4" style={{ background: '#3AAFA9', color: '#fff' }}>
              Meet Romy <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content — wordmark + CTA */}
      <div className="relative z-20 flex flex-col items-center justify-center flex-1 w-full max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="text-[22vw] sm:text-[20vw] lg:text-[18vw] leading-[0.85] font-bold tracking-tighter select-none"
          style={{ color: '#F0F0EE', textShadow: '0 2px 40px rgba(0,0,0,0.4), 0 0 80px rgba(0,0,0,0.2)' }}
        >
          Agentcy
        </motion.h1>

        <motion.a href="/romy" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm"
          style={{ background: '#3AAFA9', color: '#fff' }} data-hover>
          <ArrowRight className="w-4 h-4" /> Meet Romy
        </motion.a>
      </div>

      {/* Bottom row — symmetrical */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-20 w-full max-w-4xl mx-auto flex items-center justify-center gap-8">
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
          Durban · Cape Town · Dubai
        </p>
        <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.15)' }} />
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
          Leaders in Software. Experts in Intelligence.
        </p>
      </motion.div>
    </section>
  );
}
