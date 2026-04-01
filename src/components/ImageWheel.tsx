import { useMemo, useState } from 'react';
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

const ease = [0.22, 1, 0.36, 1] as const;

export default function ImageWheel() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const wheelRadius = isMobile ? 120 : 180;
  const itemSize = isMobile ? 76 : 110;
  const count = agents.length;
  const angleStep = (2 * Math.PI) / count;

  const size = Math.ceil(wheelRadius * 2 + itemSize + 40);
  const center = useMemo(() => ({ x: size / 2, y: size / 2 }), [size]);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{
          width: size,
          height: size,
          position: 'relative',
        }}>
          {/* SVG lines */}
          <svg
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
            viewBox={`0 0 ${size} ${size}`}
          >
            {/* Lines from center to each item */}
            {agents.map((_, i) => {
              const angle = i * angleStep - Math.PI / 2;
              const x = center.x + wheelRadius * Math.cos(angle);
              const y = center.y + wheelRadius * Math.sin(angle);
              return (
                <line key={`c-${i}`} x1={center.x} y1={center.y} x2={x} y2={y}
                  stroke="#3AAFA9" strokeWidth={1} opacity={0.1} />
              );
            })}
            {/* Curved lines between adjacent items */}
            {agents.map((_, i) => {
              const a1 = i * angleStep - Math.PI / 2;
              const a2 = ((i + 1) % count) * angleStep - Math.PI / 2;
              const x1 = center.x + wheelRadius * Math.cos(a1);
              const y1 = center.y + wheelRadius * Math.sin(a1);
              const x2 = center.x + wheelRadius * Math.cos(a2);
              const y2 = center.y + wheelRadius * Math.sin(a2);
              // Control point toward center for arc
              const midA = (a1 + a2) / 2;
              const cx = center.x + (wheelRadius * 0.6) * Math.cos(midA);
              const cy = center.y + (wheelRadius * 0.6) * Math.sin(midA);
              return (
                <path key={`a-${i}`} d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
                  stroke="#3AAFA9" strokeWidth={1.5} fill="none" opacity={0.15} strokeLinecap="round" />
              );
            })}
          </svg>

          {/* Center label */}
          <div style={{
            position: 'absolute',
            left: center.x,
            top: center.y,
            transform: 'translate(-50%, -50%)',
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
            }}>
              Romy
            </span>
            <span style={{
              fontSize: isMobile ? 8 : 10,
              color: '#3AAFA9',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}>
              Orchestrator
            </span>
          </div>

          {/* Items around the wheel — STATIC positions */}
          {agents.map((agent, i) => {
            const angle = i * angleStep - Math.PI / 2;
            const x = center.x + wheelRadius * Math.cos(angle) - itemSize / 2;
            const y = center.y + wheelRadius * Math.sin(angle) - itemSize / 2;
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  position: 'absolute',
                  left: x,
                  top: y,
                  width: itemSize,
                  height: itemSize,
                  cursor: 'pointer',
                  zIndex: isHovered ? 10 : 1,
                  // Flip + rise on hover (from Framer component)
                  transform: isHovered
                    ? 'translateY(-40px) scale(1.1)'
                    : hoveredIndex !== null
                      ? 'scale(0.95)'
                      : 'none',
                  transition: 'transform 0.4s cubic-bezier(.22,1,.36,1)',
                }}
              >
                {/* Circle image */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: `2.5px solid ${isHovered ? agent.color : agent.color + '40'}`,
                  boxShadow: isHovered
                    ? `0 12px 40px ${agent.color}30`
                    : '0 2px 12px rgba(0,0,0,0.06)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                  position: 'relative',
                }}>
                  <img
                    src={agent.image}
                    alt={agent.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    loading="lazy"
                  />
                  {/* Name overlay on hover */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '6px 0',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.65))',
                    textAlign: 'center',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s',
                  }}>
                    <span style={{
                      fontSize: isMobile ? 10 : 13,
                      fontWeight: 700,
                      color: '#fff',
                      letterSpacing: '-0.01em',
                    }}>
                      {agent.name}
                    </span>
                  </div>
                </div>

                {/* Action label */}
                <span style={{
                  display: 'block',
                  textAlign: 'center',
                  fontSize: isMobile ? 10 : 12,
                  color: isHovered ? agent.color : 'rgba(13,16,23,0.4)',
                  fontStyle: 'italic',
                  fontFamily: "'Georgia', 'Palatino Linotype', serif",
                  marginTop: 8,
                  transition: 'color 0.3s',
                }}>
                  {agent.action.toLowerCase()}
                </span>
              </motion.div>
            );
          })}
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
        <a
          href="#contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '14px 32px',
            borderRadius: 100,
            background: '#0D1017',
            color: '#fff',
            fontSize: 14,
            fontWeight: 600,
            textDecoration: 'none',
            letterSpacing: '-0.01em',
            transition: 'all 0.3s',
            boxShadow: '0 4px 16px rgba(13,16,23,0.12)',
          }}
        >
          Start Building
        </a>
      </motion.div>
    </section>
  );
}
