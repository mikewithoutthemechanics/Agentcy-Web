import { motion } from 'motion/react';
import { Bot, Brain, Workflow, Shield, Zap, ArrowRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const agents = [
  { icon: Brain, name: 'Analyst', role: 'Research & insight extraction' },
  { icon: Bot, name: 'Builder', role: 'Code, automation, tools' },
  { icon: Shield, name: 'QA Reviewer', role: 'Quality assurance & scoring' },
  { icon: Workflow, name: 'Coordinator', role: 'Project management & handoffs' },
  { icon: Zap, name: 'Automator', role: 'Workflow & process automation' },
];

export default function About() {
  return (
    <section id="about" style={{ background: '#F5F5F3', color: '#0D1017', padding: '120px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,16,23,0.35)', marginBottom: 16 }}
          >
            Meet Romy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30, clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05 }}
          >
            One orchestrator.<br />
            <span style={{ color: '#3AAFA9' }}>Five specialist agents.</span>
          </motion.h2>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 17, lineHeight: 1.8, color: 'rgba(13,16,23,0.5)', textAlign: 'center', maxWidth: 600, margin: '0 auto 72px' }}
        >
          Romy is your lead agent — she understands your request, breaks it into tasks, and delegates to the right specialist. Every output gets quality-checked before it reaches you.
        </motion.p>

        {/* Romy orchestrator — center */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 64 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            style={{
              width: 100, height: 100, borderRadius: 28,
              background: 'linear-gradient(135deg, #3AAFA9, #2D9E98)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 16px 48px rgba(58,175,169,0.2)',
              marginBottom: 20, position: 'relative',
            }}
          >
            <span style={{ fontSize: 40, fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>R</span>
            {/* Pulse ring */}
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ position: 'absolute', inset: -8, borderRadius: 32, border: '2px solid rgba(58,175,169,0.2)' }}
            />
          </motion.div>
          <p style={{ fontSize: 14, fontWeight: 700, color: '#0D1017', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Orchestrator</p>
          <p style={{ fontSize: 13, color: 'rgba(13,16,23,0.4)', marginTop: 4 }}>Understands · Plans · Delegates · Delivers</p>
        </div>

        {/* Connecting line */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(58,175,169,0.3), transparent)' }} />
        </div>

        {/* Agent cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
          {agents.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease }}
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.06)' }}
              style={{
                padding: 24, borderRadius: 16,
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.05)',
                cursor: 'default',
                transition: 'box-shadow 0.3s, transform 0.3s',
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10, marginBottom: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(58,175,169,0.06)',
              }}>
                <agent.icon size={18} color="#3AAFA9" />
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6, color: '#0D1017' }}>{agent.name}</h3>
              <p style={{ fontSize: 12, lineHeight: 1.5, color: 'rgba(13,16,23,0.45)' }}>{agent.role}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
