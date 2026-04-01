import { motion } from 'motion/react';
import UnicornScene from 'unicornstudio-react';

export default function ImageWheel() {
  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* Unicorn scene — full background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <UnicornScene
          projectId="G0JsZNbiuJ6601TFJq7N"
          width="100%"
          height="100%"
          scale={1}
          dpi={1.5}
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.6/dist/unicornStudio.umd.js"
        />
      </div>

      {/* Content on top */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '80px 24px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>The Agents</span>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#fff', marginBottom: 24 }}>
            Romy's <span style={{ color: '#3AAFA9' }}>team</span>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 500, margin: '0 auto' }}>
            One orchestrator. Eight specialist agents. Infinite capability.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} style={{ marginTop: 40 }}>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 32px', borderRadius: 100,
            background: '#3AAFA9', color: '#0D1017', fontSize: 14, fontWeight: 600,
            textDecoration: 'none', boxShadow: '0 4px 20px rgba(58,175,169,0.3)',
          }}>Start Building</a>
        </motion.div>
      </div>
    </section>
  );
}
