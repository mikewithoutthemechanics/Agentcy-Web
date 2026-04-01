import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 600);
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
        >
          {/* Chrome gradient background */}
          <motion.div
            className="absolute -inset-[50%]"
            style={{
              background: `
                radial-gradient(ellipse 55% 55% at 30% 70%, rgba(80,80,80,0.9) 0%, transparent 55%),
                radial-gradient(ellipse 55% 55% at 70% 30%, rgba(100,100,100,0.7) 0%, transparent 55%)
              `,
            }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#0D1017] text-4xl md:text-6xl font-bold tracking-tighter"
            >
              Agentcy®
            </motion.span>

            {/* Loading bar */}
            <motion.div
              className="mt-8 h-px bg-white/20 w-48 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-white/60"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
