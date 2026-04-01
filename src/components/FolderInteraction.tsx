import { motion } from 'motion/react';
import { useState } from 'react';

function FolderInteraction({ name, logo, color, onClick }: { name: string; logo: string; color: string; onClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center items-center">
      <div
        onClick={() => { setIsOpen(!isOpen); if (!isOpen) setTimeout(onClick, 400); }}
        className="w-64 h-44 relative wrapper cursor-pointer"
        style={{ perspective: 800 }}
      >
        <div
          className="folder relative w-[87.5%] mx-auto items-center h-full flex justify-center"
          style={{
            background: '#F0F0EE',
            boxShadow: '0px 0px 15px 8px rgba(0,0,0,0.04) inset',
            borderRadius: 10,
          }}
        >
          {/* Pages */}
          {[
            { initial: { rotate: -3, x: -30, y: 2 }, open: { rotate: -8, x: -55, y: -45 }, transition: { type: 'spring', bounce: 0.15, stiffness: 160, damping: 22 }, className: 'z-10' },
            { initial: { rotate: 0, x: 0, y: 0 }, open: { rotate: 1, x: 2, y: -60 }, transition: { type: 'spring', duration: 0.55, bounce: 0.12, stiffness: 190, damping: 24 }, className: 'z-20' },
            { initial: { rotate: 3.5, x: 34, y: 1 }, open: { rotate: 9, x: 60, y: -50 }, transition: { type: 'spring', duration: 0.58, bounce: 0.17, stiffness: 170, damping: 21 }, className: 'z-10' },
          ].map((page, i) => (
            <motion.div
              key={i}
              initial={page.initial}
              animate={isOpen ? page.open : page.initial}
              transition={page.transition}
              className={`absolute top-2 w-28 h-fit rounded-xl ${page.className}`}
            >
              <div className="w-full h-full bg-gradient-to-b from-[#E8E7F0] to-[#DCDAE8] rounded-xl shadow p-2.5">
                <div className="flex flex-col gap-1.5">
                  <div className="w-full h-1 bg-[#CFCDE0] rounded-full" />
                  {Array.from({ length: 6 }).map((_, j) => (
                    <div key={j} className="flex gap-1.5">
                      <div className="flex-1 h-1 bg-[#CFCDE0] rounded-full" />
                      <div className="flex-1 h-1 bg-[#CFCDE0] rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Logo overlay */}
          <motion.div
            animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0.8 : 1 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
          >
            <span style={{ fontSize: 36, color, fontWeight: 900, letterSpacing: '-0.03em', opacity: 0.8 }}>{logo}</span>
          </motion.div>
        </div>

        {/* Folder tab */}
        <motion.div
          animate={{ rotateX: isOpen ? -35 : 0 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
          className="absolute -left-[1px] -right-[1px] -bottom-[1px] z-20 h-36 rounded-2xl origin-bottom overflow-visible"
          style={{ background: 'linear-gradient(135deg, #E8E8E6, #DDDDDB)', border: '1px solid rgba(0,0,0,0.05)' }}
        />
      </div>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute -bottom-8 text-xs font-semibold tracking-wide text-center w-full"
        style={{ color: 'rgba(13,16,23,0.5)' }}
      >
        {name}
      </motion.p>
    </div>
  );
}

export default FolderInteraction;
