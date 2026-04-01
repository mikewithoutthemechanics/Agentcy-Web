import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Agent {
  name: string;
  image: string;
}

const agents: Agent[] = [
  { name: 'Romy', image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=300&h=300&fit=crop&crop=face' },
  { name: 'Atlas', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=300&fit=crop&crop=face' },
  { name: 'Flux', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop&crop=face' },
  { name: 'Nova', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop&crop=face' },
  { name: 'Sage', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&h=300&fit=crop&crop=face' },
  { name: 'Ryan Paul', image: '/ryan-paul.jpg' },
];

export default function TiltHalo({ images, style }: { images?: Agent[]; style?: React.CSSProperties }) {
  const items = images || agents;
  const [rotation, setRotation] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);
  const animRef = useRef<number>(0);

  const imageW = 80;
  const imageH = 80;
  const circleRadius = 160;

  // Auto-rotate
  useEffect(() => {
    const tick = () => {
      setRotation(r => r + 0.15);
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  // Tilt on mouse move
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current || focusedIndex !== null) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const mx = e.clientX - cx;
    const my = e.clientY - cy;
    const dist = Math.sqrt(mx * mx + my * my);
    const maxDist = Math.min(rect.width, rect.height) / 2;
    if (dist > maxDist) return;
    setTiltX((my / (rect.height / 2)) * 12);
    setTiltY(-(mx / (rect.width / 2)) * 12);
  }, [focusedIndex]);

  const handleMouseLeave = useCallback(() => {
    setTiltX(0);
    setTiltY(0);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => focusedIndex !== null && setFocusedIndex(null)}
      style={{
        width: '100%',
        height: 500,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        perspective: '1000px',
        ...style,
      }}
    >
      {/* Focus overlay */}
      <AnimatePresence>
        {focusedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute', inset: 0,
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(10px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 1000, cursor: 'pointer',
            }}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              src={items[focusedIndex]?.image}
              alt={items[focusedIndex]?.name}
              style={{
                maxWidth: '60%', maxHeight: '60%',
                objectFit: 'contain', borderRadius: 12,
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rotating halo */}
      <motion.div
        style={{
          position: 'absolute',
          width: circleRadius * 2,
          height: circleRadius * 2,
          transformOrigin: 'center',
          filter: focusedIndex !== null ? 'blur(10px)' : 'none',
          rotateX: tiltX,
          rotateY: tiltY,
        }}
        animate={{ rotate: rotation }}
        transition={{ rotate: { type: 'tween', ease: 'linear', duration: 0 } }}
      >
        {items.map((item, i) => {
          const angle = (i / items.length) * 360;
          const radian = (angle * Math.PI) / 180;
          const x = Math.cos(radian) * circleRadius;
          const y = Math.sin(radian) * circleRadius;

          return (
            <div
              key={item.name}
              style={{
                position: 'absolute',
                left: `calc(50% + ${x}px - ${imageW / 2}px)`,
                top: `calc(50% + ${y}px - ${imageH / 2}px)`,
                width: imageW,
                height: imageH,
                transform: `rotate(${angle + 90}deg)`,
                transformOrigin: 'center',
                cursor: 'pointer',
              }}
              onClick={(e) => {
                e.stopPropagation();
                setFocusedIndex(focusedIndex === i ? null : i);
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  borderRadius: 8,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotateY(180deg) scale(1.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotateY(0deg) scale(1)';
                }}
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
