import { useMemo, useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

interface Agent {
  name: string;
  action: string;
  image: string;
  color: string;
}

const agents: Agent[] = [
  { name: 'Romy', action: 'Guides', image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=300&h=300&fit=crop&crop=face', color: '#3AAFA9' },
  { name: 'Atlas', action: 'Researches', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=300&fit=crop&crop=face', color: '#7C6FE0' },
  { name: 'Flux', action: 'Analyzes', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop&crop=face', color: '#E06070' },
  { name: 'Nova', action: 'Builds', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop&crop=face', color: '#C8A84E' },
  { name: 'Sage', action: 'Writes', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&h=300&fit=crop&crop=face', color: '#6EE7B7' },
];

export default function ImageWheel() {
  const [isMobile, setIsMobile] = useState(false);
  const wheelRadius = isMobile ? 120 : 170;
  const itemSize = isMobile ? 76 : 110;
  const count = agents.length;
  const angleStep = 360 / count;
  const size = wheelRadius * 2 + itemSize + 40;
  const center = size / 2;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Auto-rotate
  useEffect(() => {
    const animate = () => {
      setRotation(r => r + 0.06);
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <section style={{
      padding: isMobile ? '80px 0' : '100px 0',
      background: '#F5F5F3',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', marginBottom: isMobile ? 20 : 32 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
        >
          <span style={{
            display: 'block', fontSize: 11, fontWeight: 600,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'rgba(13,16,23,0.3)', marginBottom: 16,
          }}>
            The Agents
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800, letterSpacing: '-0.03em',
            lineHeight: 1.05, color: '#0D1017',
          }}>
            Romy's <span style={{ color: '#3AAFA9' }}>team</span>
          </h2>
        </motion.div>
      </div>

      {/* Wheel */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: size, height: size, position: 'relative', perspective: 800 }}>
          {/* Rotating container with tilt */}
          <div style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            transformStyle: 'preserve-3d',
            transform: `rotateX(-6deg) rotateY(${rotation}deg)`,
          }}>
            {/* Center label — counter-rotates */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotateY(${-rotation}deg) rotateX(6deg)`,
              textAlign: 'center',
              pointerEvents: 'none',
              zIndex: 5,
            }}>
              <span style={{
                fontSize: isMobile ? 20 : 28,
                fontWeight: 800,
                color: '#0D1017',
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: '-0.02em',
                display: 'block',
              }}>Romy</span>
              <span style={{
                fontSize: isMobile ? 8 : 10,
                color: '#3AAFA9',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}>Orchestrator</span>
            </div>

            {/* Agent cards in a circle */}
            {agents.map((agent, i) => {
              const angle = (i * angleStep - 90) * (Math.PI / 180);
              const x = center + wheelRadius * Math.cos(angle) - itemSize / 2;
              const y = center + wheelRadius * Math.sin(angle) - itemSize / 2;
              const isHovered = hoveredIndex === i;

              return (
                <div
                  key={agent.name}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    position: 'absolute',
                    left: x,
                    top: y,
                    width: itemSize,
                    height: itemSize,
                    cursor: 'default',
                    zIndex: isHovered ? 10 : 1,
                    transformStyle: 'preserve-3d',
                    transform: `rotateY(${-rotation}deg) rotateX(6deg)` +
                      (isHovered ? ' translateY(-24px) scale(1.1)' : ''),
                    transition: 'transform 0.4s cubic-bezier(.22,1,.36,1)',
                  }}
                >
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: `2.5px solid ${isHovered ? agent.color : agent.color + '30'}`,
                    boxShadow: isHovered
                      ? `0 12px 32px ${agent.color}25`
                      : '0 2px 12px rgba(0,0,0,0.05)',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                    position: 'relative',
                  }}>
                    <img
                      src={agent.image}
                      alt={agent.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      loading="lazy"
                    />
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      padding: '6px 0',
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
                      textAlign: 'center',
                      opacity: isHovered ? 1 : 0,
                      transition: 'opacity 0.3s',
                    }}>
                      <span style={{ fontSize: isMobile ? 10 : 13, fontWeight: 700, color: '#fff' }}>
                        {agent.name}
                      </span>
                    </div>
                  </div>
                  <span style={{
                    display: 'block', textAlign: 'center',
                    fontSize: isMobile ? 10 : 12,
                    color: isHovered ? agent.color : 'rgba(13,16,23,0.35)',
                    fontStyle: 'italic',
                    fontFamily: "'Georgia', 'Palatino Linotype', serif",
                    marginTop: 8,
                    transition: 'color 0.3s',
                  }}>
                    {agent.action.toLowerCase()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{ textAlign: 'center', marginTop: isMobile ? 36 : 52 }}
      >
        <a href="#contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '14px 32px', borderRadius: 100,
          background: '#0D1017', color: '#fff', fontSize: 14, fontWeight: 600,
          textDecoration: 'none', letterSpacing: '-0.01em',
          boxShadow: '0 4px 16px rgba(13,16,23,0.12)',
        }}>
          Start Building
        </a>
      </motion.div>
    </section>
  );
}
