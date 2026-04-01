import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import ProjectDetail, { projects } from './ProjectDetail';

// ── Original Folder (dark style) ────────────────────
function FolderCard({ name, logo, color, onClick }: { name: string; logo: string; color: string; onClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => { setIsOpen(!isOpen); if (!isOpen) setTimeout(onClick, 500); }}
      style={{ width: 240, height: 180, position: 'relative', cursor: 'pointer', perspective: 800 }}
    >
      <div style={{
        position: 'relative', width: '87.5%', margin: '0 auto', height: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#18151B',
        boxShadow: '0px 0px 15px 12px rgba(79, 73, 85, 0.25) inset',
        borderRadius: 10,
      }}>
        {[
          { initial: { rotate: -3, x: -32, y: 2 }, open: { rotate: -8, x: -60, y: -48 }, spring: { type: 'spring' as const, bounce: 0.15, stiffness: 160, damping: 22 } },
          { initial: { rotate: 0, x: 0, y: 0 }, open: { rotate: 1, x: 2, y: -65 }, spring: { type: 'spring' as const, bounce: 0.12, stiffness: 190, damping: 24 } },
          { initial: { rotate: 3.5, x: 36, y: 1 }, open: { rotate: 9, x: 65, y: -52 }, spring: { type: 'spring' as const, bounce: 0.17, stiffness: 170, damping: 21 } },
        ].map((page, i) => (
          <motion.div
            key={i}
            initial={page.initial}
            animate={isOpen ? page.open : page.initial}
            transition={page.spring}
            style={{
              position: 'absolute', top: 8, width: 110,
              zIndex: i === 1 ? 20 : 10, borderRadius: 12,
              boxShadow: i === 1 ? '0 4px 12px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <div style={{ width: '100%', background: 'linear-gradient(180deg, #E8E7F0, #DCDAE8)', borderRadius: 12, padding: '10px 12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ width: '100%', height: 4, background: '#CFCDE0', borderRadius: 2 }} />
                {Array.from({ length: 7 }).map((_, j) => (
                  <div key={j} style={{ display: 'flex', gap: 6 }}>
                    <div style={{ flex: 1, height: 4, background: '#CFCDE0', borderRadius: 2 }} />
                    <div style={{ flex: 1, height: 4, background: '#CFCDE0', borderRadius: 2 }} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0.8 : 1 }}
          transition={{ duration: 0.2 }}
          style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 30, pointerEvents: 'none' }}
        >
          <span style={{ fontSize: 36, color, fontWeight: 900, letterSpacing: '-0.03em', opacity: 0.9 }}>{logo}</span>
        </motion.div>
      </div>

      <motion.div
        animate={{ rotateX: isOpen ? -40 : 0 }}
        transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
        style={{ position: 'absolute', left: -1, right: -1, bottom: -1, zIndex: 20, height: 150, borderRadius: 24, transformOrigin: 'bottom', overflow: 'visible' }}
      >
        <svg style={{ width: '100%', height: '100%', overflow: 'visible' }} viewBox="0 0 235 121" fill="none" preserveAspectRatio="none">
          <path d="M104.615 0.35L33.13 0.839C32.754 0.841 32.383 0.881 32.032 0.919C31.675 0.957 31.339 0.992 31.006 0.992H31.005C30.687 0.992 30.367 0.962 30.027 0.93C29.693 0.898 29.338 0.864 28.98 0.866L13.269 0.968H13.253L13.235 0.97C13.124 0.981 13.012 0.987 12.9 0.986H9.914C8.333 0.959 6.761 1.223 5.274 1.767C4.336 2.112 3.488 2.662 2.788 3.374L2.497 3.688C1.627 4.739 1 5.962 0.656 7.277C0.31 8.627 0.257 10.005 0.5 11.345L12.215 114.399C12.605 116.568 13.729 118.508 15.393 119.902C17.058 121.297 19.157 122.056 21.323 122.05H215.379C217.76 122.02 220.064 121.192 221.926 119.698C223.657 118.384 224.857 116.485 225.305 114.35L235.914 53.38C236.134 51.898 236.044 50.685 235.705 49.532C235.307 48.167 234.63 46.901 233.717 45.814L230.539 43.34C229.311 42.763 227.971 42.469 226.616 42.477H146.746C144.063 42.471 141.423 41.8 139.056 40.526C136.691 39.252 134.671 37.413 133.175 35.169L113.548 5.059C112.545 3.652 111.238 2.511 109.722 1.721C108.266 0.887 106.627 0.422 104.952 0.365L104.633 0.35H104.615Z"
            fill="url(#fg)" fillOpacity="0.3" stroke="url(#fs)" strokeWidth="0.7" />
          <defs>
            <linearGradient id="fg" x1="114.7" y1="0.7" x2="114.7" y2="121.7" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2D2535" /><stop offset="1" stopColor="#2A2A2A" />
            </linearGradient>
            <linearGradient id="fs" x1="114.7" y1="0.7" x2="114.7" y2="121.7" gradientUnits="userSpaceOnUse">
              <stop stopColor="#424242" stopOpacity="0.04" /><stop offset="1" stopColor="#212121" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <p style={{ position: 'absolute', bottom: -28, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>{name}</p>
    </div>
  );
}

// ── Scroll-driven 3D Carousel ───────────────────────
export default function NightworkShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const count = projects.length;
  const anglePerItem = 360 / count;
  const radius = 420;

  // Scroll drives rotation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const sectionHeight = rect.height - window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / sectionHeight));
      setRotation(scrollProgress * 360);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const project = selectedProject ? projects.find(p => p.id === selectedProject) : null;

  if (project) {
    return (
      <section style={{ background: '#18151B', padding: '60px 0', minHeight: '80vh' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <button onClick={() => setSelectedProject(null)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.4)', marginBottom: 40, padding: 0,
          }}>← Back to projects</button>
          <div style={{ background: '#F5F5F3', borderRadius: 24, padding: '48px 40px' }}>
            <ProjectDetail project={project} onBack={() => setSelectedProject(null)} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      style={{ background: '#18151B', position: 'relative', height: '300vh' }}
    >
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ position: 'absolute', top: 48, left: 40, zIndex: 10 }}>
          <span style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>
            Selected Work
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.05 }}>
            What we've <span style={{ color: '#3AAFA9' }}>built</span>
          </h2>
        </div>

        {/* 3D Carousel */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          perspective: 1200,
        }}>
          <div style={{
            position: 'relative',
            width: 0, height: 0,
            transformStyle: 'preserve-3d',
            transform: `rotateY(${rotation}deg)`,
          }}>
            {projects.map((p, i) => {
              const angle = i * anglePerItem;
              return (
                <div
                  key={p.id}
                  style={{
                    position: 'absolute',
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <FolderCard
                    name={p.name}
                    logo={p.logo}
                    color={p.color}
                    onClick={() => setSelectedProject(p.id)}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll hint */}
        <motion.p
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.2)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}
        >
          Scroll to explore
        </motion.p>
      </div>
    </section>
  );
}
