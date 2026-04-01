import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'motion/react';

interface NetworkNode {
  id: string;
  label: string;
  icon: string;
  color: string;
  angle: number; // degrees from center
}

const nodes: NetworkNode[] = [
  { id: 'lead', label: "Lead's Agent", icon: '🎯', color: '#3AAFA9', angle: -90 },
  { id: 'onboarding', label: 'Onboarding Agent', icon: '🚀', color: '#7C6FE0', angle: -20 },
  { id: 'pm', label: 'Project Manager', icon: '📋', color: '#C8A84E', angle: 40 },
  { id: 'marketing', label: 'Marketing Agent', icon: '📣', color: '#E06070', angle: 130 },
  { id: 'data', label: 'Data Capture', icon: '📊', color: '#6EE7B7', angle: 180 },
];

// Animated particle traveling along a line
function AnimatedParticle({ fromX, fromY, toX, toY, color, delay, duration }: {
  fromX: number; fromY: number; toX: number; toY: number;
  color: string; delay: number; duration: number;
}) {
  return (
    <motion.circle
      r={3}
      fill={color}
      filter={`drop-shadow(0 0 6px ${color})`}
      initial={{ cx: fromX, cy: fromY, opacity: 0 }}
      animate={[
        { cx: fromX, cy: fromY, opacity: 0 },
        { cx: fromX, cy: fromY, opacity: 1 },
        { cx: toX, cy: toY, opacity: 1 },
        { cx: toX, cy: toY, opacity: 0 },
      ]}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
        times: [0, 0.05, 0.95, 1],
      }}
    />
  );
}

// Connection line with animated dash
function ConnectionLine({ fromX, fromY, toX, toY, color, isActive }: {
  fromX: number; fromY: number; toX: number; toY: number;
  color: string; isActive: boolean;
}) {
  return (
    <g>
      {/* Base line */}
      <line
        x1={fromX} y1={fromY} x2={toX} y2={toY}
        stroke="rgba(13,16,23,0.06)"
        strokeWidth={1.5}
      />
      {/* Animated dash */}
      {isActive && (
        <motion.line
          x1={fromX} y1={fromY} x2={toX} y2={toY}
          stroke={color}
          strokeWidth={2}
          strokeDasharray="6 12"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -36 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          opacity={0.6}
        />
      )}
      {/* Particles */}
      {isActive && (
        <>
          <AnimatedParticle fromX={fromX} fromY={fromY} toX={toX} toY={toY} color={color} delay={0} duration={2.5} />
          <AnimatedParticle fromX={fromX} fromY={fromY} toX={toX} toY={toY} color={color} delay={1.2} duration={2.5} />
        </>
      )}
    </g>
  );
}

export default function WorkflowNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ width: 700, height: 500 });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setDims({ width: w, height: Math.min(w * 0.7, 500) });
      }
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const centerX = dims.width / 2;
  const centerY = dims.height / 2;
  const orbitRadius = isMobile ? Math.min(dims.width * 0.32, 130) : Math.min(dims.width * 0.3, 200);
  const nodeRadius = isMobile ? 32 : 44;
  const centerNodeRadius = isMobile ? 40 : 52;

  const getNodePosition = useCallback((angle: number) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: centerX + orbitRadius * Math.cos(rad),
      y: centerY + orbitRadius * Math.sin(rad),
    };
  }, [centerX, centerY, orbitRadius]);

  return (
    <section style={{
      padding: isMobile ? '80px 16px' : '120px 24px',
      background: '#EAEAE8',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
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
            How Romy Works
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800, letterSpacing: '-0.03em',
            lineHeight: 1.05, color: '#0D1017', marginBottom: 16,
          }}>
            One brain. <span style={{ color: '#3AAFA9' }}>Five agents.</span>
          </h2>
          <p style={{
            fontSize: 15, color: 'rgba(13,16,23,0.45)',
            maxWidth: 460, margin: '0 auto',
          }}>
            Romy orchestrates specialist agents to handle your entire workflow — from lead capture to delivery.
          </p>
        </motion.div>

        {/* Network Graph */}
        <div ref={containerRef} style={{ width: '100%', maxWidth: 700, margin: '0 auto' }}>
          <svg
            width="100%"
            height={dims.height}
            viewBox={`0 0 ${dims.width} ${dims.height}`}
            style={{ overflow: 'visible' }}
          >
            {/* Connection lines */}
            {nodes.map((node) => {
              const pos = getNodePosition(node.angle);
              const isActive = !hoveredNode || hoveredNode === node.id;
              return (
                <ConnectionLine
                  key={`line-${node.id}`}
                  fromX={centerX} fromY={centerY}
                  toX={pos.x} toY={pos.y}
                  color={node.color}
                  isActive={isActive}
                />
              );
            })}

            {/* Center node — Romy */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ transformOrigin: `${centerX}px ${centerY}px` }}
            >
              {/* Glow ring */}
              <motion.circle
                cx={centerX} cy={centerY} r={centerNodeRadius + 8}
                fill="none" stroke="#3AAFA9" strokeWidth={1.5}
                opacity={0.2}
                animate={{ r: [centerNodeRadius + 8, centerNodeRadius + 16, centerNodeRadius + 8] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <circle
                cx={centerX} cy={centerY} r={centerNodeRadius}
                fill="#0D1017"
                stroke="#3AAFA9"
                strokeWidth={2}
              />
              <text
                x={centerX} y={centerY - 6}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#3AAFA9"
                fontSize={isMobile ? 14 : 16}
                fontWeight={800}
                fontFamily="'Space Grotesk', sans-serif"
              >
                Romy
              </text>
              <text
                x={centerX} y={centerY + 12}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="rgba(58,175,169,0.6)"
                fontSize={isMobile ? 8 : 9}
                fontWeight={600}
                letterSpacing="0.1em"
              >
                ORCHESTRATOR
              </text>
            </motion.g>

            {/* Satellite nodes */}
            {nodes.map((node, i) => {
              const pos = getNodePosition(node.angle);
              const isActive = !hoveredNode || hoveredNode === node.id;
              return (
                <motion.g
                  key={node.id}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{
                    cursor: 'default',
                    transformOrigin: `${pos.x}px ${pos.y}px`,
                    opacity: isActive ? 1 : 0.3,
                    transition: 'opacity 0.3s',
                  }}
                >
                  {/* Outer ring */}
                  <circle
                    cx={pos.x} cy={pos.y} r={nodeRadius}
                    fill={`${node.color}08`}
                    stroke={`${node.color}30`}
                    strokeWidth={1.5}
                  />
                  {/* Inner circle */}
                  <circle
                    cx={pos.x} cy={pos.y} r={nodeRadius - 6}
                    fill="#fff"
                    stroke={`${node.color}20`}
                    strokeWidth={1}
                  />
                  {/* Icon */}
                  <text
                    x={pos.x} y={pos.y - 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={isMobile ? 16 : 20}
                  >
                    {node.icon}
                  </text>
                  {/* Label */}
                  <text
                    x={pos.x} y={pos.y + nodeRadius + 16}
                    textAnchor="middle"
                    fill="#0D1017"
                    fontSize={isMobile ? 10 : 12}
                    fontWeight={700}
                    fontFamily="'Space Grotesk', sans-serif"
                  >
                    {node.label}
                  </text>
                </motion.g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
