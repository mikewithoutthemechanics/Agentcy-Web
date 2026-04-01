import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let mx = 0, my = 0;
    let ox = 0, oy = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      }
    };

    const animate = () => {
      ox += (mx - ox) * 0.12;
      oy += (my - oy) * 0.12;
      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${ox - 20}px, ${oy - 20}px)`;
      }
      requestAnimationFrame(animate);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-hover]')) {
        setHovering(true);
      }
    };
    const onMouseOut = () => setHovering(false);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      <div
        ref={outerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border transition-[width,height,border-color] duration-300 ease-out hidden md:block"
        style={{
          width: hovering ? 56 : 40,
          height: hovering ? 56 : 40,
          borderColor: hovering ? 'rgba(58,175,169,0.6)' : 'rgba(58,175,169,0.25)',
          borderWidth: 1,
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={innerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#3AAFA9] hidden md:block"
        style={{ width: 8, height: 8 }}
      />
    </>
  );
}
