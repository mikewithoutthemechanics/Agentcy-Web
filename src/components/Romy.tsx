import { motion } from 'motion/react';
import { ArrowRight, Bot, Zap, Brain, Layers, MessageSquare, Workflow, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const ease = [0.16, 1, 0.3, 1] as const;

// ── Particle Field ──────────────────────────────────
function ParticleField() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: 1 + Math.random() * 2.5,
    duration: 15 + Math.random() * 25,
    delay: Math.random() * 10,
    opacity: 0.06 + Math.random() * 0.15,
  }));

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', overflow: 'hidden' }}>
      {particles.map(p => (
        <div key={p.id} style={{
          position: 'absolute', left: p.x, top: p.y,
          width: p.size, height: p.size, borderRadius: '50%',
          background: '#3AAFA9', opacity: p.opacity,
          animation: `particleFloat ${p.duration}s linear ${p.delay}s infinite`,
        }} />
      ))}
      <style>{`
        @keyframes particleFloat {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(30px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

// ── Typing Text ─────────────────────────────────────
function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      {started && displayed.length < text.length && (
        <span style={{ display: 'inline-block', width: 2, height: '1em', background: '#3AAFA9', marginLeft: 2, animation: 'blink 0.8s infinite' }} />
      )}
      <style>{`@keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
    </span>
  );
}

// ── Capability Card ─────────────────────────────────
function CapabilityCard({ icon: Icon, title, desc, index }: { icon: any; title: string; desc: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease }}
      whileHover={{ y: -6, boxShadow: '0 0 40px rgba(58,175,169,0.08)' }}
      style={{
        padding: 28, borderRadius: 16,
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        cursor: 'default',
        transition: 'border-color 0.3s',
      }}
    >
      <div style={{
        width: 44, height: 44, borderRadius: 12, marginBottom: 18,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(58,175,169,0.08)',
      }}>
        <Icon size={20} color="#3AAFA9" />
      </div>
      <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{title}</h3>
      <p style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.5)' }}>{desc}</p>
    </motion.div>
  );
}

// ═════════════════════════════════════════════════════
// ROMY PAGE
// ═════════════════════════════════════════════════════
export default function Romy() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: '#F5F5F3', minHeight: '100vh' }}>

      {/* ━━ NAV ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-6 max-w-7xl mx-auto"
        style={scrolled ? {
          backgroundColor: 'rgba(10,10,15,0.9)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
        } : { backgroundColor: 'transparent' }}
      >
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <span style={{ fontWeight: 700, fontSize: 18, color: '#fff', letterSpacing: '-0.02em' }}>Agentcy®</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}>Introducing</span>
          <span style={{ fontSize: 18, fontWeight: 800, color: '#3AAFA9', letterSpacing: '-0.02em' }}>Romy</span>
        </div>
        <motion.a
          href="/#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '10px 20px', borderRadius: 100,
            background: '#3AAFA9', color: '#0D1017',
            fontSize: 13, fontWeight: 700, textDecoration: 'none',
          }}
        >
          <ArrowRight size={14} /> Get Romy
        </motion.a>
      </motion.nav>

      {/* ━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* BG */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 30%, rgba(58,175,169,0.06) 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 70%, rgba(58,175,169,0.03) 0%, transparent 60%)' }} />
        </div>
        <ParticleField />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', maxWidth: 800, margin: '0 auto' }}>

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} style={{ marginBottom: 40 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 18px', borderRadius: 100,
              fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
              background: 'rgba(58,175,169,0.06)', color: '#3AAFA9',
              border: '1px solid rgba(58,175,169,0.12)',
            }}>
              <Bot size={13} /> Agent Orchestrator
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 60, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.3, duration: 1.2, ease }}
            style={{
              fontSize: 'clamp(72px, 15vw, 160px)',
              lineHeight: 0.85, letterSpacing: '-0.05em',
              fontFamily: "'Space Grotesk', 'Inter', sans-serif",
              fontWeight: 900, color: '#E0E0E0',
              textShadow: '0 2px 60px rgba(0,0,0,0.5), 0 0 100px rgba(58,175,169,0.1)',
              marginBottom: 32,
            }}
          >
            Romy
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{
              fontSize: 'clamp(18px, 3vw, 24px)', lineHeight: 1.5,
              color: 'rgba(255,255,255,0.6)', maxWidth: 560, margin: '0 auto 20px',
              fontWeight: 300,
            }}
          >
            Your AI agent orchestrator.
          </motion.p>

          {/* Colloquial hook */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            style={{
              fontSize: 'clamp(14px, 2vw, 17px)', color: 'rgba(255,255,255,0.35)',
              marginBottom: 48, fontStyle: 'italic',
            }}
          >
            "<TypingText text="Just Romy it." delay={1500} />"
          </motion.div>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.03, boxShadow: '0 8px 40px rgba(58,175,169,0.2)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '16px 32px', borderRadius: 100,
                background: '#3AAFA9', color: '#0D1017',
                fontSize: 15, fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 8px 30px rgba(58,175,169,0.15)',
                transition: 'box-shadow 0.3s',
              }}
            >
              Deploy Romy <ArrowRight size={16} />
            </motion.a>
            <a href="#how" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '16px 32px', borderRadius: 100,
              background: 'transparent', color: 'rgba(255,255,255,0.7)',
              fontSize: 15, fontWeight: 500, textDecoration: 'none',
              border: '1.5px solid rgba(255,255,255,0.15)',
            }}>
              See how it works
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
        >
          <div style={{ width: 20, height: 32, borderRadius: 10, border: '1.5px solid rgba(255,255,255,0.15)', display: 'flex', justifyContent: 'center', paddingTop: 5 }}>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ width: 2.5, height: 7, borderRadius: 2, background: 'rgba(255,255,255,0.4)' }} />
          </div>
        </motion.div>
      </section>

      {/* ━━ WHAT IS ROMY ━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="how" style={{ padding: '120px 24px', background: '#EAEAE8' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} style={{ textAlign: 'center', marginBottom: 72 }}>
            <span style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>What is Romy?</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#fff' }}>
              One agent to <span style={{ color: '#3AAFA9' }}>orchestrate</span> them all.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontSize: 17, lineHeight: 1.8, color: 'rgba(255,255,255,0.45)', textAlign: 'center', maxWidth: 640, margin: '0 auto 64px' }}
          >
            Romy is your lead orchestration agent — the single point of contact that understands your business, delegates to specialist agents, and delivers results. No prompt engineering. No tool juggling. Just describe what you need.
          </motion.p>

          {/* How it flows */}
          <div style={{ display: 'grid', gap: 24 }}>
            {[
              { step: '01', icon: MessageSquare, title: 'Tell Romy', desc: 'Describe your problem in plain language. Romy understands context, nuance, and business logic.' },
              { step: '02', icon: Brain, title: 'Romy Plans', desc: 'Breaks your request into tasks. Identifies which specialist agents, tools, and data sources are needed.' },
              { step: '03', icon: Workflow, title: 'Romy Orchestrates', desc: 'Delegates to the right agents in the right order. Manages dependencies, retries, and quality checks.' },
              { step: '04', icon: Zap, title: 'Romy Delivers', desc: 'Aggregates results, runs QA, and delivers polished output. You approve or request changes — Romy handles the rest.' },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease }}
                style={{
                  display: 'flex', gap: 24, padding: 28, borderRadius: 16,
                  background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(58,175,169,0.06)',
                }}>
                  <s.icon size={20} color="#3AAFA9" />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(58,175,169,0.4)', letterSpacing: '0.05em' }}>{s.step}</span>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{s.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.4)' }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ CAPABILITIES ━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ padding: '120px 24px', background: '#F5F5F3' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>Capabilities</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#fff' }}>
              What Romy can <span style={{ color: '#3AAFA9' }}>do</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              { icon: Brain, title: 'Research & Analysis', desc: 'Deep research across documents, web, and internal data. Synthesizes findings into actionable insights.' },
              { icon: Layers, title: 'Multi-Agent Workflows', desc: 'Orchestrates specialist agents in parallel or sequence. Handles complex multi-step tasks autonomously.' },
              { icon: MessageSquare, title: 'Natural Conversation', desc: 'Talk to Romy like you would a colleague. No templates, no rigid commands — just describe what you need.' },
              { icon: Workflow, title: 'Process Automation', desc: 'Maps your existing workflows and automates the repetitive parts. Learns your preferences over time.' },
              { icon: Bot, title: 'Agent Delegation', desc: 'Routes tasks to the right specialist — code, design, analysis, writing — and ensures quality at each step.' },
              { icon: Zap, title: 'Instant Execution', desc: 'No waiting for meetings or handoffs. Romy starts working the moment you describe the task.' },
            ].map((cap, i) => (
              <CapabilityCard key={cap.title} icon={cap.icon} title={cap.title} desc={cap.desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ━━ THE VERB ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{
        padding: '120px 24px',
        background: 'linear-gradient(180deg, #EAEAE8 0%, #F5F5F3 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(58,175,169,0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 24 }}>The new verb</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            style={{
              fontSize: 'clamp(40px, 8vw, 80px)',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1,
              color: '#fff', marginBottom: 32,
            }}
          >
            Just <span style={{ color: '#C8A84E', fontStyle: 'italic' }}>Romy</span> it.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.35)', maxWidth: 500, margin: '0 auto 48px' }}
          >
            Like "Google it" or "ask ChatGPT" — but for getting real work done. <br />
            Romy doesn't just answer questions. Romy <em style={{ color: 'rgba(255,255,255,0.5)' }}>does the work</em>.
          </motion.p>

          {/* Usage examples */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 480, margin: '0 auto' }}
          >
            {[
              '"Hey, can you pull the Q3 numbers?" — Just Romy it.',
              '"We need a competitor analysis by Friday." — Romy\'s on it.',
              '"Draft the proposal and send it for review." — Romy it.',
            ].map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.15 }}
                style={{
                  padding: '16px 20px', borderRadius: 12,
                  background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)',
                  fontSize: 14, color: 'rgba(255,255,255,0.4)', textAlign: 'left',
                  fontStyle: 'italic',
                }}
              >
                {line}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━ CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{
        padding: '120px 24px',
        background: 'linear-gradient(180deg, #F5F5F3 0%, #EAEAE8 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', bottom: '-30%', right: '-10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(58,175,169,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginBottom: 20,
            }}
          >
            Ready to meet <span style={{ color: '#3AAFA9' }}>Romy</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: 16, color: 'rgba(255,255,255,0.35)', marginBottom: 40 }}
          >
            Start with one task. See what Romy can do.
          </motion.p>
          <motion.a
            href="/#contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, boxShadow: '0 8px 40px rgba(58,175,169,0.2)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '16px 36px', borderRadius: 100,
              background: '#3AAFA9', color: '#0D1017',
              fontSize: 15, fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(58,175,169,0.15)',
            }}
          >
            Get started with Romy <ChevronRight size={16} />
          </motion.a>
        </div>
      </section>

    </div>
  );
}
