import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect, useCallback } from 'react';
import Folder from './Folder';
import ProjectDetail, { projects } from './ProjectDetail';

const ease = [0.16, 1, 0.3, 1] as const;

// ── Abstract SVG logos for each project ──────────────
const logos = [
  // Bar chart (FILLQ)
  <svg key="bars" width="40" height="40" viewBox="0 0 60 60" fill="none">
    <rect x="6" y="28" width="12" height="26" rx="3" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
    <rect x="24" y="14" width="12" height="40" rx="3" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
    <rect x="42" y="4" width="12" height="50" rx="3" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
  </svg>,
  // Diamond grid (Romy)
  <svg key="diamond" width="40" height="40" viewBox="0 0 60 60" fill="none">
    <path d="M30 4L56 30L30 56L4 30Z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
    <line x1="4" y1="30" x2="56" y2="30" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
    <line x1="30" y1="4" x2="30" y2="56" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
  </svg>,
  // Connected nodes (Nightwork)
  <svg key="nodes" width="40" height="40" viewBox="0 0 60 60" fill="none">
    <circle cx="15" cy="15" r="8" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
    <circle cx="45" cy="15" r="8" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
    <circle cx="15" cy="45" r="8" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
    <circle cx="45" cy="45" r="8" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
    <line x1="23" y1="15" x2="37" y2="15" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
    <line x1="23" y1="45" x2="37" y2="45" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
    <line x1="15" y1="23" x2="15" y2="37" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
    <line x1="45" y1="23" x2="45" y2="37" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
  </svg>,
  // Shield (Vault)
  <svg key="shield" width="40" height="40" viewBox="0 0 60 60" fill="none">
    <path d="M30 4L52 14V30C52 44 30 56 30 56C30 56 8 44 8 30V14L30 4Z" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
    <path d="M22 30L28 36L38 24" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Pulse wave (Pulse)
  <svg key="wave" width="40" height="40" viewBox="0 0 60 60" fill="none">
    <path d="M4 30C4 30 12 10 20 10C28 10 28 50 36 50C44 50 44 10 52 10C58 10 56 30 56 30" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
  </svg>,
];

// Paper content — clean text lines
function PaperContent({ lines = 4 }: { lines?: number }) {
  return (
    <div style={{ padding: 5, height: '100%', display: 'flex', flexDirection: 'column', gap: 3, justifyContent: 'center' }}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} style={{
          width: `${40 + (i * 12) % 45}%`,
          height: 1.5,
          background: 'rgba(58,175,169,0.15)',
          borderRadius: 1,
        }} />
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const project = selectedProject ? projects.find(p => p.id === selectedProject) : null;

  return (
    <section id="portfolio" style={{ background: '#F5F5F3', color: '#0D1017', position: 'relative' }}>
      <AnimatePresence mode="wait">
        {project ? (
          <ProjectDetail key="detail" project={project} onBack={() => setSelectedProject(null)} />
        ) : (
          <motion.div key="carousel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <FolderCarousel onSelect={setSelectedProject} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ── 3D Cylindrical Carousel ──────────────────────────
function FolderCarousel({ onSelect }: { onSelect: (id: string) => void }) {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const animRef = useRef<number>(0);

  const count = projects.length;
  const anglePerItem = 360 / count;
  const radius = isMobile ? 160 : 300;
  const folderSize = isMobile ? 1.0 : 1.8;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const animate = () => {
      setRotation(r => {
        if (isDragging) return r;
        if (Math.abs(velocity) > 0.01) {
          setVelocity(v => v * 0.95);
          return r + velocity;
        }
        return r + 0.06;
      });
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [isDragging, velocity]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    setVelocity(0);
    lastX.current = e.clientX;
    lastTime.current = performance.now();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    const now = performance.now();
    const dx = e.clientX - lastX.current;
    const dt = now - lastTime.current;
    const dragVelocity = dx * 0.3;
    setRotation(r => r + dragVelocity);
    if (dt > 0) setVelocity(dragVelocity * (16 / dt));
    lastX.current = e.clientX;
    lastTime.current = now;
  }, [isDragging]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <>
      {/* Section heading */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 24px 40px' }}>
        <div style={{ textAlign: 'center' }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,16,23,0.3)', marginBottom: 16 }}
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30, clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05 }}
          >
            What we've <span style={{ color: '#3AAFA9' }}>built</span>
          </motion.h2>
        </div>
      </div>

      {/* 3D Carousel */}
      <div
        style={{
          width: '100%',
          height: isMobile ? 260 : 380,
          position: 'relative',
          perspective: 1200,
          perspectiveOrigin: '50% 50%',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: 0,
          height: 0,
          transformStyle: 'preserve-3d',
          transform: `translate(-50%, -50%) rotateY(${rotation}deg)`,
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
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Folder
                  color="#3AAFA9"
                  size={folderSize}
                  frontIcon={logos[i % logos.length]}
                  onPaperClick={() => onSelect(p.id)}
                  items={[
                    <PaperContent key={0} lines={3} />,
                    <PaperContent key={1} lines={4} />,
                    <PaperContent key={2} lines={3} />,
                  ]}
                />
                <p style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#0D1017',
                  marginTop: 16,
                  letterSpacing: '-0.01em',
                }}>
                  {p.name}
                </p>
                <p style={{
                  fontSize: 11,
                  color: 'rgba(13,16,23,0.35)',
                  marginTop: 2,
                }}>
                  {p.tagline}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <p style={{
        textAlign: 'center',
        color: 'rgba(13,16,23,0.2)',
        fontSize: 12,
        padding: '16px 0 120px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>
        Drag to rotate · Click to open
      </p>
    </>
  );
}
