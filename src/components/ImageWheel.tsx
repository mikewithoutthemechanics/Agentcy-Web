import { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'motion/react';

interface Agent {
  name: string;
  role: string;
  color: string;
  icon: string; // emoji or initial
}

const agents: Agent[] = [
  { name: 'Atlas', role: 'Research & Analysis', color: '#3AAFA9', icon: '🔬' },
  { name: 'Nova', role: 'Code & Development', color: '#7C6FE0', icon: '⚡' },
  { name: 'Sage', role: 'Writing & Content', color: '#C8A84E', icon: '✍️' },
  { name: 'Flux', role: 'Data & Analytics', color: '#E06070', icon: '📊' },
  { name: 'Echo', role: 'Communication', color: '#6EE7B7', icon: '💬' },
  { name: 'Prism', role: 'Design & Creative', color: '#FF8C42', icon: '🎨' },
  { name: 'Shield', role: 'Security & Compliance', color: '#8BAA6B', icon: '🛡️' },
  { name: 'Pulse', role: 'Monitoring & Ops', color: '#C0C0C0', icon: '📡' },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function ImageWheel() {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const animRef = useRef<number>(0);

  const count = agents.length;
  const anglePerItem = 360 / count;
  const radius = isMobile ? 140 : 240;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Auto-rotate
  useEffect(() => {
    const animate = () => {
      setRotation(r => {
        if (isDragging) return r;
        if (Math.abs(velocity) > 0.01) {
          setVelocity(v => v * 0.95);
          return r + velocity;
        }
        return r + 0.04;
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
    const dragVelocity = dx * 0.25;
    setRotation(r => r + dragVelocity);
    if (dt > 0) setVelocity(dragVelocity * (16 / dt));
    lastX.current = e.clientX;
    lastTime.current = now;
  }, [isDragging]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const cardSize = isMobile ? 90 : 120;

  return (
    <section style={{ padding: '120px 24px', background: '#F5F5F3', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <span style={{
            display: 'block', fontSize: 11, fontWeight: 600,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'rgba(13,16,23,0.3)', marginBottom: 16,
          }}>
            The Agents
          </span>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800, letterSpacing: '-0.03em',
            lineHeight: 1.05, color: '#0D1017', marginBottom: 16,
          }}>
            Romy's <span style={{ color: '#3AAFA9' }}>team</span>
          </h2>
          <p style={{
            fontSize: 16, color: 'rgba(13,16,23,0.45)',
            maxWidth: 500, margin: '0 auto',
          }}>
            One orchestrator. Eight specialist agents. Infinite capability.
          </p>
        </motion.div>

        {/* 3D Wheel */}
        <div
          style={{
            width: '100%',
            height: isMobile ? 300 : 400,
            position: 'relative',
            perspective: 1000,
            perspectiveOrigin: '50% 50%',
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
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
            transform: `translate(-50%, -50%) rotateX(-8deg) rotateY(${rotation}deg)`,
          }}>
            {agents.map((agent, i) => {
              const angle = i * anglePerItem;
              return (
                <div
                  key={agent.name}
                  style={{
                    position: 'absolute',
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  {/* Circle avatar */}
                  <div style={{
                    width: cardSize,
                    height: cardSize,
                    borderRadius: '50%',
                    background: `${agent.color}15`,
                    border: `2px solid ${agent.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: cardSize * 0.4,
                    boxShadow: `0 8px 32px ${agent.color}20`,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                  }}>
                    {agent.icon}
                  </div>
                  {/* Name + role */}
                  <div style={{ textAlign: 'center' }}>
                    <p style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: '#0D1017',
                      letterSpacing: '-0.01em',
                    }}>
                      {agent.name}
                    </p>
                    <p style={{
                      fontSize: 10,
                      color: agent.color,
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      marginTop: 2,
                    }}>
                      {agent.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p style={{
          textAlign: 'center',
          color: 'rgba(13,16,23,0.2)',
          fontSize: 12,
          marginTop: 16,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          Drag to rotate
        </p>
      </div>
    </section>
  );
}
