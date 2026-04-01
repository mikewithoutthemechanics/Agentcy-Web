import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

interface Agent {
  name: string;
  action: string;
  color: string;
  image: string;
}

const agents: Agent[] = [
  { name: 'Romy', action: 'Guides', color: '#3AAFA9', image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=300&q=80' },
  { name: 'Atlas', action: 'Researches', color: '#7C6FE0', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&q=80' },
  { name: 'Flux', action: 'Analyses', color: '#E06070', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80' },
  { name: 'Nova', action: 'Builds', color: '#C8A84E', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&q=80' },
  { name: 'Sage', action: 'Writes', color: '#6EE7B7', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&q=80' },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function ImageWheel() {
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const circleSize = isMobile ? 80 : 120;
  const overlap = isMobile ? 20 : 30;

  return (
    <section style={{
      padding: isMobile ? '80px 0' : '120px 0',
      background: '#F5F5F3',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: isMobile ? 40 : 60 }}
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

      {/* Scrolling agent row */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: `-${overlap}px`,
          padding: '0 24px',
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
        {agents.map((agent, i) => (
          <motion.div
            key={agent.name}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6, ease }}
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
            {/* Circle avatar */}
            <div style={{
              width: circleSize,
              height: circleSize,
              borderRadius: '50%',
              background: `${agent.color}18`,
              border: `2.5px solid ${agent.color}40`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: `0 4px 20px ${agent.color}15`,
              cursor: 'default',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}>
              <img
                src={agent.image}
                alt={agent.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
                loading="lazy"
              />
            </div>

            {/* Name */}
            <p style={{
              fontSize: isMobile ? 12 : 14,
              fontWeight: 700,
              color: '#0D1017',
              marginTop: 12,
              letterSpacing: '-0.01em',
            }}>
              {agent.name}
            </p>

            {/* Handwritten action text */}
            <p style={{
              fontSize: isMobile ? 11 : 13,
              color: agent.color,
              fontWeight: 500,
              fontStyle: 'italic',
              marginTop: 2,
              fontFamily: "'Georgia', 'Times New Roman', serif",
              transform: `rotate(${-3 + i * 1.5}deg)`,
            }}>
              {agent.action}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Connecting text between agents */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: isMobile ? '8px 16px' : '8px 32px',
          padding: '32px 24px 0',
        }}
      >
        {agents.map((agent, i) => (
          <span key={agent.name} style={{
            fontSize: isMobile ? 11 : 13,
            color: 'rgba(13,16,23,0.35)',
            fontStyle: 'italic',
            fontFamily: "'Georgia', 'Times New Roman', serif",
          }}>
            {agent.name} {agent.action.toLowerCase()}{i < agents.length - 1 ? ' ·' : ''}
          </span>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.6 }}
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
            transition: 'all 0.3s',
            boxShadow: '0 4px 20px rgba(13,16,23,0.15)',
          }}
        >
          Start Building
        </a>
      </motion.div>
    </section>
  );
}
