import { useMemo, useState, useRef } from 'react';
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
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);
  const wheelRadius = isMobile ? 110 : 170;
  const itemSize = isMobile ? 72 : 100;
  const count = agents.length;
  const angleStep = (2 * Math.PI) / count;

  const size = Math.ceil(wheelRadius * 2 + itemSize);
  const center = useMemo(() => ({ x: size / 2, y: size / 2 }), [size]);

  // Hover state
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const maxFlip = 180;
  const maxRise = -(isMobile ? 24 : 40);
  const effectFalloff = 0.4;
  const maxDistance = Math.floor((count / 2) * effectFalloff);

  // 3D tilt state
  const [tilt, setTilt] = useState({ x: 0, y: 0, z: 0 });
  const maxTilt = 12;
  const maxPush = 30;
  const wheelRef = useRef<HTMLDivElement>(null);
  const perspective = 1200;

  function getClosestIndexFromMouse(e: React.MouseEvent): number | null {
    if (!wheelRef.current) return null;
    const rect = wheelRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const dx = mouseX - center.x;
    const dy = mouseY - center.y;
    const angle = Math.atan2(dy, dx);
    let idx = Math.round(((angle + Math.PI / 2) / (2 * Math.PI)) * count);
    idx = ((idx % count) + count) % count;
    return idx;
  }

  function handleMouseMove(e: React.MouseEvent) {
    const idx = getClosestIndexFromMouse(e);
    if (idx !== null) setHoveredIndex(idx);

    if (wheelRef.current) {
      const rect = wheelRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const relX = (mouseX - center.x) / (size / 2);
      const relY = (mouseY - center.y) / (size / 2);
      const clamp = (v: number) => Math.max(-1, Math.min(1, v));
      const cx = clamp(relX);
      const cy = clamp(relY);
      const dist = Math.sqrt(cx * cx + cy * cy);
      const z = -maxPush * (1 - Math.max(0, Math.min(1, dist)));
      setTilt({ x: cy * maxTilt, y: -cx * maxTilt, z });
    }
  }

  function handleMouseLeave() {
    setHoveredIndex(null);
    setTilt({ x: 0, y: 0, z: 0 });
  }

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

      {/* Wheel container */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            width: size,
            height: size,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'visible',
          }}
        >
          <div
            ref={wheelRef}
            style={{
              width: size,
              height: size,
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${tilt.z}px)`,
              borderRadius: '50%',
              overflow: 'visible',
              transition: 'transform 0.3s cubic-bezier(.22,1,.36,1)',
              willChange: 'transform',
              perspective,
            }}
          >
            {/* SVG connector lines behind items */}
            <svg
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
              }}
              viewBox={`0 0 ${size} ${size}`}
            >
              {agents.map((_, i) => {
                const angle1 = i * angleStep - Math.PI / 2;
                const angle2 = ((i + 1) % count) * angleStep - Math.PI / 2;
                const x1 = center.x + wheelRadius * Math.cos(angle1);
                const y1 = center.y + wheelRadius * Math.sin(angle1);
                const x2 = center.x + wheelRadius * Math.cos(angle2);
                const y2 = center.y + wheelRadius * Math.sin(angle2);
                // Wavy control points
                const mx = (x1 + x2) / 2 + (Math.random() - 0.5) * 30;
                const my = (y1 + y2) / 2 + (Math.random() - 0.5) * 30;
                return (
                  <path
                    key={i}
                    d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`}
                    stroke="#3AAFA9"
                    strokeWidth={1.5}
                    fill="none"
                    opacity={0.2}
                    strokeLinecap="round"
                  />
                );
              })}
              {/* Lines from center to each item */}
              {agents.map((_, i) => {
                const angle = i * angleStep - Math.PI / 2;
                const x = center.x + wheelRadius * Math.cos(angle);
                const y = center.y + wheelRadius * Math.sin(angle);
                return (
                  <line
                    key={`c-${i}`}
                    x1={center.x}
                    y1={center.y}
                    x2={x}
                    y2={y}
                    stroke="#3AAFA9"
                    strokeWidth={1}
                    opacity={0.08}
                  />
                );
              })}
            </svg>

            {/* Agent items around the wheel */}
            {agents.map((agent, i) => {
              const angle = i * angleStep - Math.PI / 2;
              const x = center.x + wheelRadius * Math.cos(angle) - itemSize / 2;
              const y = center.y + wheelRadius * Math.sin(angle) - itemSize / 2;

              // Hover flip + rise
              let flip = 0;
              let rise = 0;
              if (hoveredIndex !== null) {
                let d = Math.abs(i - hoveredIndex);
                if (d > count / 2) d = count - d;
                if (d === 0) {
                  flip = maxFlip;
                  rise = maxRise;
                } else if (d <= maxDistance) {
                  flip = maxFlip * Math.pow(effectFalloff, d);
                  rise = maxRise * Math.pow(effectFalloff, d);
                }
              }

              const rotate = `rotate(${(angle * 180) / Math.PI + 90}deg)`;
              const flipTransform = flip ? ` rotateY(${flip}deg)` : '';
              const riseTransform = rise ? ` translateY(${rise}px)` : '';

              return (
                <div
                  key={agent.name}
                  style={{
                    position: 'absolute',
                    left: x,
                    top: y,
                    width: itemSize,
                    height: itemSize,
                    borderRadius: '50%',
                    overflow: 'visible',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: rotate + flipTransform + riseTransform,
                    transformOrigin: 'center center',
                    transition: 'transform 0.5s cubic-bezier(.22,1,.36,1)',
                    willChange: 'transform',
                    perspective,
                    cursor: 'default',
                    zIndex: hoveredIndex === i ? 10 : 1,
                  }}
                >
                  {/* Front face — circle image */}
                  <div style={{
                    width: itemSize,
                    height: itemSize,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: `2px solid ${agent.color}40`,
                    boxShadow: hoveredIndex === i
                      ? `0 8px 32px ${agent.color}30`
                      : '0 2px 12px rgba(0,0,0,0.06)',
                    backfaceVisibility: 'hidden',
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
                      padding: '4px 0',
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
                      textAlign: 'center',
                      opacity: hoveredIndex === i ? 1 : 0,
                      transition: 'opacity 0.3s',
                    }}>
                      <span style={{
                        fontSize: isMobile ? 9 : 11,
                        fontWeight: 700,
                        color: '#fff',
                        letterSpacing: '-0.01em',
                      }}>
                        {agent.name}
                      </span>
                    </div>
                  </div>

                  {/* Handwritten label below */}
                  <span style={{
                    fontSize: isMobile ? 10 : 12,
                    color: 'rgba(13,16,23,0.4)',
                    fontStyle: 'italic',
                    fontFamily: "'Georgia', 'Palatino Linotype', serif",
                    marginTop: 6,
                    whiteSpace: 'nowrap',
                    transform: `rotate(${-((angle * 180) / Math.PI + 90)}deg)`,
                    opacity: hoveredIndex === i ? 1 : 0.7,
                    transition: 'opacity 0.3s',
                  }}>
                    {agent.action.toLowerCase()}
                  </span>
                </div>
              );
            })}

            {/* Center — Romy label */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              pointerEvents: 'none',
            }}>
              <span style={{
                fontSize: isMobile ? 18 : 24,
                fontWeight: 800,
                color: '#0D1017',
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: '-0.02em',
              }}>
                Romy
              </span>
              <br />
              <span style={{
                fontSize: isMobile ? 8 : 10,
                color: '#3AAFA9',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                Orchestrator
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{ textAlign: 'center', marginTop: isMobile ? 32 : 48 }}
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
