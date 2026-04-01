import { useRef, useState, useEffect, useCallback } from 'react';
import Folder from './Folder';
import { BarChart3, Code2, Globe, Cpu, ShoppingCart, Wallet, Truck, Bot } from 'lucide-react';

// ── Client logo SVGs (as img tags) ──────────────────
const logos = [
  <img key="logo-1" src="/logos/logo-1.svg" alt="Logo" style={{ width: '70%', height: '50%', objectFit: 'contain', display: 'block', opacity: 0.9 }} />,
  <img key="logo-2" src="/logos/logo-2.svg" alt="Logo" style={{ width: '60%', height: '50%', objectFit: 'contain', display: 'block', opacity: 0.9 }} />,
  <img key="logo-3" src="/logos/logo-3.svg" alt="Logo" style={{ width: '55%', height: '50%', objectFit: 'contain', display: 'block', opacity: 0.9 }} />,
  <img key="logo-4" src="/logos/logo-4.svg" alt="Logo" style={{ width: '65%', height: '50%', objectFit: 'contain', display: 'block', opacity: 0.9 }} />,
  <img key="logo-5" src="/logos/logo-5.svg" alt="Logo" style={{ width: '70%', height: '50%', objectFit: 'contain', display: 'block', opacity: 0.9 }} />,
  // Keep abstract SVGs for remaining slots
  <svg key="hex" width="50" height="50" viewBox="0 0 60 60" fill="none"><path d="M30 4L54 17V43L30 56L6 43V17L30 4Z" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/><circle cx="30" cy="30" r="12" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/></svg>,
  <svg key="arrow" width="50" height="50" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="24" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/><path d="M20 30L40 30M40 30L32 22M40 30L32 38" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="grid" width="50" height="50" viewBox="0 0 60 60" fill="none"><circle cx="16" cy="16" r="7" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/><circle cx="44" cy="16" r="7" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/><circle cx="16" cy="44" r="7" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/><circle cx="44" cy="44" r="7" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/><circle cx="30" cy="30" r="7" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/></svg>,
];

const projects = [
  { id: 'fillq', name: 'FILLQ', tagline: 'No-show prevention', icon: BarChart3 },
  { id: 'integrate-ar', name: 'Integr8AR', tagline: 'AR integration', icon: Globe },
  { id: 'bridge-an', name: 'Bridge AN', tagline: 'Autonomous networks', icon: Cpu },
  { id: 'waitup', name: 'WaitUp', tagline: 'Waitlist automation', icon: Code2 },
  { id: 'loyalty', name: 'Loyalty', tagline: 'Loyalty platform', icon: ShoppingCart },
  { id: 'payroll', name: 'Payroll', tagline: 'Payroll processing', icon: Wallet },
  { id: 'supaco', name: 'Supaco.ai', tagline: 'Supply chain AI', icon: Truck },
  { id: 'bridge-ar', name: 'BridgeAR', tagline: 'Franchise AI ops', icon: Bot },
];

// Paper content with vector icon
function PaperContent({ icon: Icon, lines = 5 }: { icon?: any; lines?: number }) {
  return (
    <div style={{ padding: 6, height: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
      {Icon && <Icon size={10} color="#3AAFA9" style={{ opacity: 0.4, marginBottom: 2 }} />}
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} style={{
          width: `${50 + Math.random() * 40}%`,
          height: 2,
          background: 'rgba(58,175,169,0.1)',
          borderRadius: 1,
        }} />
      ))}
    </div>
  );
}

// ── 3D Carousel ─────────────────────────────────────
export default function HorizontalShowcase() {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const animRef = useRef<number>(0);

  const count = projects.length;
  const anglePerItem = 360 / count;
  const radius = 320;

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
    setIsDragging(true); setVelocity(0);
    lastX.current = e.clientX; lastTime.current = performance.now();
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
    lastX.current = e.clientX; lastTime.current = now;
  }, [isDragging]);

  const handlePointerUp = useCallback(() => { setIsDragging(false); }, []);

  return (
    <section style={{ background: '#F5F5F3', padding: '100px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto 60px', padding: '0 24px' }}>
        <span style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,16,23,0.3)', marginBottom: 16 }}>
          Selected Work
        </span>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0D1017', lineHeight: 1.05 }}>
          What we've <span style={{ color: '#3AAFA9' }}>built</span>
        </h2>
      </div>

      <div
        style={{ width: '100%', height: 420, position: 'relative', perspective: 1200, perspectiveOrigin: '50% 50%', cursor: isDragging ? 'grabbing' : 'grab' }}
        onPointerDown={handlePointerDown} onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp} onPointerCancel={handlePointerUp}
      >
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          width: 0, height: 0, transformStyle: 'preserve-3d',
          transform: `translate(-50%, -50%) rotateY(${rotation}deg)`,
        }}>
          {projects.map((p, i) => {
            const angle = i * anglePerItem;
            return (
              <div key={p.id} style={{
                position: 'absolute',
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                transformStyle: 'preserve-3d', backfaceVisibility: 'hidden',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
              }}>
              <Folder color="#5C6066" size={2.2} frontIcon={logos[i % logos.length]} items={[
                <PaperContent key={0} lines={4} />,
                <PaperContent key={1} lines={5} />,
                <PaperContent key={2} lines={3} />,
              ]} />
                <p style={{ fontSize: 13, fontWeight: 700, color: '#0D1017', marginTop: 16, letterSpacing: '-0.01em' }}>{p.name}</p>
                <p style={{ fontSize: 11, color: 'rgba(13,16,23,0.35)', marginTop: 2 }}>{p.tagline}</p>
              </div>
            );
          })}
        </div>
      </div>

      <p style={{ textAlign: 'center', color: 'rgba(13,16,23,0.2)', fontSize: 12, marginTop: 16, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        Drag to rotate · Click to open
      </p>
    </section>
  );
}
