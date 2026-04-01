import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Agent {
  name: string;
  action: string;
  image: string;
}

const agents: Agent[] = [
  { name: 'Romy', action: 'Guides', image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=300&h=300&fit=crop&crop=face' },
  { name: 'Atlas', action: 'Researches', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=300&fit=crop&crop=face' },
  { name: 'Flux', action: 'Analyzes', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop&crop=face' },
  { name: 'Nova', action: 'Builds', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop&crop=face' },
  { name: 'Sage', action: 'Writes', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&h=300&fit=crop&crop=face' },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function ImageWheel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const circleSize = isMobile ? 72 : 110;
  const overlap = isMobile ? 16 : 24;

  return (
    <section style={{
      padding: isMobile ? '60px 0 80px' : '80px 0 120px',
      background: '#F5F5F3',
      overflow: 'hidden',
    }}>
      {/* Scrolling agent row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 24px',
          overflowX: 'auto',
          overflowY: 'visible',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
        {agents.map((agent, i) => (
          <motion.div
            key={agent.name}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexShrink: 0,
              position: 'relative',
              zIndex: agents.length - i,
              marginLeft: i > 0 ? `-${overlap}px` : 0,
            }}
          >
            {/* Connector line to previous */}
            {i > 0 && (
              <svg
                style={{
                  position: 'absolute',
                  top: circleSize * 0.35,
                  right: '50%',
                  width: overlap + 8,
                  height: 20,
                  overflow: 'visible',
                  zIndex: 0,
                }}
              >
                <line
                  x1={0}
                  y1={10 + (i % 2 === 0 ? -4 : 4)}
                  x2={overlap + 8}
                  y2={10 + (i % 2 === 0 ? 4 : -4)}
                  stroke="#3AAFA9"
                  strokeWidth={1.5}
                  opacity={0.35}
                  strokeLinecap="round"
                />
              </svg>
            )}

            {/* Circle portrait */}
            <div style={{
              width: circleSize,
              height: circleSize,
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 1,
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
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
            </div>

            {/* Name */}
            <p style={{
              fontSize: isMobile ? 13 : 15,
              fontWeight: 800,
              color: '#0D1017',
              marginTop: 10,
              letterSpacing: '-0.01em',
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              {agent.name}
            </p>

            {/* Handwritten action */}
            <p style={{
              fontSize: isMobile ? 12 : 15,
              color: 'rgba(13,16,23,0.4)',
              fontWeight: 400,
              fontStyle: 'italic',
              marginTop: 1,
              fontFamily: "'Georgia', 'Palatino', serif",
              transform: `rotate(${-2 + i * 1.2}deg)`,
            }}>
              {agent.action}
            </p>
          </motion.div>
        ))}
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
            padding: '13px 28px',
            borderRadius: 100,
            background: '#0D1017',
            color: '#fff',
            fontSize: 13,
            fontWeight: 600,
            textDecoration: 'none',
            letterSpacing: '-0.01em',
            transition: 'all 0.3s',
          }}
        >
          Start Building
        </a>
      </motion.div>
    </section>
  );
}
