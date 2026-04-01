import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';

interface Agent {
  name: string;
  action: string;
  image: string;
  color: string;
}

const agents: Agent[] = [
  { name: 'Romy', action: 'Guides', image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=400&fit=crop&crop=face', color: '#3AAFA9' },
  { name: 'Atlas', action: 'Researches', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop&crop=face', color: '#7C6FE0' },
  { name: 'Flux', action: 'Analyzes', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=face', color: '#E06070' },
  { name: 'Nova', action: 'Builds', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&crop=face', color: '#C8A84E' },
  { name: 'Sage', action: 'Writes', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=400&fit=crop&crop=face', color: '#6EE7B7' },
];

export default function ImageWheel() {
  const [isMobile, setIsMobile] = useState(false);
  const count = agents.length;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const itemSize = isMobile ? 100 : 150;
  const orbitRadius = isMobile ? 140 : 220;
  const containerSize = orbitRadius * 2 + itemSize + 60;
  const center = containerSize / 2;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [angle, setAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const tick = () => {
      setAngle(a => {
        if (isDragging) return a;
        if (Math.abs(velocity) > 0.02) {
          setVelocity(v => v * 0.96);
          return a + velocity;
        }
        return a + 0.25;
      });
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [isDragging, velocity]);

  const onDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true); setVelocity(0);
    lastX.current = e.clientX; lastTime.current = performance.now();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, []);
  const onMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    const now = performance.now(), dx = e.clientX - lastX.current, dt = now - lastTime.current;
    const v = dx * 0.4;
    setAngle(a => a + v);
    if (dt > 0) setVelocity(v * (16 / dt));
    lastX.current = e.clientX; lastTime.current = now;
  }, [isDragging]);
  const onUp = useCallback(() => setIsDragging(false), []);

  return (
    <section style={{
      padding: isMobile ? '60px 0 80px' : '80px 0 120px',
      background: '#F5F5F3',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ padding: '0 24px', marginBottom: isMobile ? 32 : 48 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center' }}>
          <span style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,16,23,0.3)', marginBottom: 16 }}>The Agents</span>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#0D1017' }}>
            Romy's <span style={{ color: '#3AAFA9' }}>team</span>
          </h2>
        </motion.div>
      </div>

      {/* Orbit */}
      <div
        onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none', touchAction: 'none' }}
      >
        <div style={{ width: containerSize, height: containerSize, position: 'relative' }}>
          {/* Orbit ring */}
          <div style={{
            position: 'absolute',
            left: center - orbitRadius,
            top: center - orbitRadius,
            width: orbitRadius * 2,
            height: orbitRadius * 2,
            borderRadius: '50%',
            border: '1px solid rgba(58,175,169,0.12)',
            pointerEvents: 'none',
          }} />

          {/* Center Romy */}
          <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 20, textAlign: 'center' }}>
            <div style={{
              width: isMobile ? 60 : 80, height: isMobile ? 60 : 80, borderRadius: '50%',
              background: '#0D1017',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 40px rgba(13,16,23,0.2), 0 0 0 8px rgba(58,175,169,0.06)',
              border: '2px solid rgba(58,175,169,0.5)',
            }}>
              <span style={{ fontSize: isMobile ? 15 : 20, fontWeight: 800, color: '#3AAFA9', fontFamily: "'Space Grotesk', sans-serif" }}>Romy</span>
            </div>
          </div>

          {/* Orbiting agents */}
          {agents.map((agent, i) => {
            const itemAngle = ((angle + i * (360 / count)) * Math.PI) / 180;
            const x = center + orbitRadius * Math.cos(itemAngle) - itemSize / 2;
            const y = center + orbitRadius * Math.sin(itemAngle) - itemSize / 2;
            const isHovered = hoveredIndex === i;

            // Depth: bottom = closer (bigger), top = further (smaller)
            const depthNorm = (Math.sin(itemAngle) + 1) / 2;
            const scale = 0.8 + 0.2 * depthNorm;
            const opacity = 0.5 + 0.5 * depthNorm;
            const zIdx = Math.round(scale * 10);

            return (
              <div
                key={agent.name}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  position: 'absolute', left: x, top: y,
                  width: itemSize, height: itemSize,
                  zIndex: isHovered ? 15 : zIdx,
                  transform: `scale(${isHovered ? scale * 1.15 : scale})`,
                  opacity: isHovered ? 1 : opacity,
                  transition: 'transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s',
                }}
              >
                <div style={{
                  width: '100%', height: itemSize - 8, borderRadius: '50%', overflow: 'hidden',
                  border: `3px solid ${isHovered ? agent.color : '#F5F5F3'}`,
                  boxShadow: isHovered
                    ? `0 16px 48px ${agent.color}25, 0 0 0 6px ${agent.color}08`
                    : '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                  position: 'relative',
                }}>
                  <img src={agent.image} alt={agent.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    loading="lazy" />
                  {/* Glow ring on hover */}
                  {isHovered && (
                    <div style={{
                      position: 'absolute', inset: -4, borderRadius: '50%',
                      border: `2px solid ${agent.color}30`,
                      animation: 'pulse-ring 2s ease-in-out infinite',
                    }} />
                  )}
                  {/* Name on hover */}
                  <div style={{
                    position: 'absolute', bottom: 10, left: 0, right: 0,
                    textAlign: 'center',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s',
                  }}>
                    <span style={{
                      fontSize: isMobile ? 12 : 16, fontWeight: 800, color: '#fff',
                      fontFamily: "'Space Grotesk', sans-serif",
                      textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                    }}>{agent.name}</span>
                  </div>
                </div>

                {/* Label */}
                <p style={{
                  textAlign: 'center', fontSize: isMobile ? 11 : 13,
                  color: isHovered ? agent.color : 'rgba(13,16,23,0.3)',
                  fontStyle: 'italic', fontFamily: "'Georgia', 'Palatino Linotype', serif",
                  marginTop: 6, marginBottom: 0, transition: 'color 0.3s',
                }}>
                  {agent.action.toLowerCase()}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <p style={{ textAlign: 'center', color: 'rgba(13,16,23,0.18)', fontSize: 11, marginTop: 20, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
        Drag to orbit · Hover to explore
      </p>

      {/* CTA */}
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
        style={{ textAlign: 'center', marginTop: isMobile ? 28 : 40 }}>
        <a href="#contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '14px 32px', borderRadius: 100,
          background: '#0D1017', color: '#fff', fontSize: 14, fontWeight: 600,
          textDecoration: 'none', boxShadow: '0 4px 16px rgba(13,16,23,0.12)',
        }}>Start Building</a>
      </motion.div>

      <style>{`
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.08); opacity: 0.2; }
        }
      `}</style>
    </section>
  );
}
