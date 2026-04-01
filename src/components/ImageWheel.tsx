import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Agent {
  name: string;
  action: string;
  image: string;
}

const agents: Agent[] = [
  { name: 'Romy', action: 'Guides', image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=400&fit=crop&crop=face' },
  { name: 'Atlas', action: 'Researches', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop&crop=face' },
  { name: 'Flux', action: 'Analyzes', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=face' },
  { name: 'Nova', action: 'Builds', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&crop=face' },
  { name: 'Sage', action: 'Writes', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=400&fit=crop&crop=face' },
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

  const circleSize = isMobile ? 88 : 130;

  return (
    <section style={{
      padding: isMobile ? '80px 0' : '100px 0',
      background: 'linear-gradient(180deg, #F5F5F3 0%, #E8EBE4 50%, #F5F5F3 100%)',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: isMobile ? 40 : 56 }}
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

      {/* Agent row with wavy connectors */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 24px',
        maxWidth: 900,
        margin: '0 auto',
      }}>
        {/* Wavy SVG connector lines behind circles */}
        <svg
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: circleSize * 1.8,
            pointerEvents: 'none',
            zIndex: 0,
          }}
          viewBox="0 0 800 180"
          preserveAspectRatio="none"
        >
          {/* Wavy line connecting all circles */}
          <path
            d="M 50 90 C 120 60, 160 120, 210 85 C 260 50, 290 130, 350 90 C 410 50, 430 120, 490 85 C 550 50, 580 130, 640 90 C 700 50, 730 110, 760 90"
            stroke="#3AAFA9"
            strokeWidth="2"
            fill="none"
            opacity="0.25"
            strokeLinecap="round"
          />
          {/* Second wavy line slightly offset */}
          <path
            d="M 50 95 C 120 130, 160 70, 210 100 C 260 130, 290 60, 350 95 C 410 130, 430 65, 490 100 C 550 130, 580 60, 640 95 C 700 130, 730 75, 760 95"
            stroke="#3AAFA9"
            strokeWidth="1.5"
            fill="none"
            opacity="0.15"
            strokeLinecap="round"
          />
        </svg>

        {/* Circles with handwritten text between */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          width: '100%',
          justifyContent: 'center',
          gap: 0,
        }}>
          {agents.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                marginLeft: i > 0 ? `-${isMobile ? 16 : 28}px` : 0,
                zIndex: agents.length - i,
              }}
            >
              {/* Circle portrait */}
              <div style={{
                width: circleSize,
                height: circleSize,
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 1,
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '3px solid #F5F5F3',
                transform: `rotate(${-2 + i * 1}deg)`,
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

              {/* Handwritten action text */}
              <p style={{
                fontSize: isMobile ? 11 : 14,
                color: 'rgba(13,16,23,0.4)',
                fontWeight: 400,
                fontStyle: 'italic',
                marginTop: 8,
                fontFamily: "'Georgia', 'Palatino Linotype', 'Book Antiqua', serif",
                transform: `rotate(${-3 + i * 1.5}deg)`,
                whiteSpace: 'nowrap',
              }}>
                {agent.name} {agent.action.toLowerCase()}
              </p>
            </motion.div>
          ))}
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
