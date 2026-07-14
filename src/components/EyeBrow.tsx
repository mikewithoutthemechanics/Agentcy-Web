import { motion } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as const;

interface EyeBrowProps {
  label: string;
  number?: string;
  dot?: boolean;
}

export default function EyeBrow({ label, number, dot = true }: EyeBrowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease }}
      className="flex items-center gap-3 mb-6"
    >
      {number && (
        <span
          className="text-xs font-semibold tracking-widest"
          style={{ color: 'rgba(245,245,243,0.35)' }}
        >
          {number}
        </span>
      )}
      {number && dot && (
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: '#3AAFA9' }}
        />
      )}
      {dot && !number && (
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: '#3AAFA9' }}
        />
      )}
      <span
        className="text-xs font-semibold uppercase tracking-[0.2em]"
        style={{ color: 'rgba(245,245,243,0.4)' }}
      >
        {label}
      </span>
    </motion.div>
  );
}
