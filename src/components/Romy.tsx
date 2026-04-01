import { motion } from 'motion/react';
import { ArrowRight, Bot, Zap, Brain, Layers, MessageSquare, Workflow, ChevronRight, Check, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import ImageMaskText from './ImageMaskText';
import UnicornScene from 'unicornstudio-react';
import TiltHalo from './TiltHalo';

const ease = [0.16, 1, 0.3, 1] as const;

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
      style={{ padding: 28, borderRadius: 16, background: '#fff', border: '1px solid rgba(13,16,23,0.06)', cursor: 'default' }}
    >
      <div style={{ width: 44, height: 44, borderRadius: 12, marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(58,175,169,0.08)' }}>
        <Icon size={20} color="#3AAFA9" />
      </div>
      <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0D1017', marginBottom: 8 }}>{title}</h3>
      <p style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(13,16,23,0.5)' }}>{desc}</p>
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
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* ━━ NAV ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-6 max-w-7xl mx-auto"
        style={scrolled ? {
          backgroundColor: 'rgba(13,16,23,0.9)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
        } : { backgroundColor: 'transparent' }}
      >
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <span style={{ fontWeight: 700, fontSize: 18, color: '#fff', letterSpacing: '-0.02em' }}>Agentcy®</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>Introducing</span>
          <span style={{ fontSize: 18, fontWeight: 800, color: '#3AAFA9', letterSpacing: '-0.02em' }}>Romy</span>
        </div>
        <motion.a href="/#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 100, background: '#3AAFA9', color: '#0D1017', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>
          <ArrowRight size={14} /> Get Romy
        </motion.a>
      </motion.nav>

      {/* ━━ HERO — Unicorn Scene ━━━━━━━━━━━━━━━━━ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <div style={{ width: '100%', height: '100vh' }}>
            <UnicornScene projectId="G0JsZNbiuJ6601TFJq7N" width="100%" height="100%" scale={1} dpi={1.5}
              sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.6/dist/unicornStudio.umd.js" />
          </div>
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'rgba(0,0,0,0.3)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', maxWidth: 800, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} style={{ marginBottom: 40 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 18px', borderRadius: 100, fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(58,175,169,0.15)', color: '#3AAFA9', border: '1px solid rgba(58,175,169,0.2)', backdropFilter: 'blur(12px)' }}>
              <Bot size={13} /> Agent Orchestrator
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 60, filter: 'blur(12px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: 0.3, duration: 1.2, ease }}
            style={{ fontSize: 'clamp(72px, 15vw, 160px)', lineHeight: 0.85, letterSpacing: '-0.05em', fontFamily: "'Space Grotesk', 'Inter', sans-serif", fontWeight: 900, color: '#fff', marginBottom: 32, textShadow: '0 2px 40px rgba(0,0,0,0.3)' }}>
            Romy
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}
            style={{ fontSize: 'clamp(20px, 3vw, 28px)', lineHeight: 1.4, color: '#fff', maxWidth: 600, margin: '0 auto 12px', fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em', textShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
            One brain. Five agents. Infinite capability.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }}
            style={{ fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: 1.6, color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '0 auto 40px', fontWeight: 300, textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>
            Romy orchestrates specialist AI agents to deliver real work — research, code, analysis, writing — from a single conversation.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
            <motion.a href="/#contact" whileHover={{ scale: 1.03, boxShadow: '0 8px 40px rgba(58,175,169,0.2)' }} whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 32px', borderRadius: 100, background: '#3AAFA9', color: '#0D1017', fontSize: 15, fontWeight: 700, textDecoration: 'none', boxShadow: '0 8px 30px rgba(58,175,169,0.15)' }}>
              Deploy Romy <ArrowRight size={16} />
            </motion.a>
            <a href="#how" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 32px', borderRadius: 100, background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', color: '#fff', fontSize: 15, fontWeight: 500, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.15)' }}>
              See how it works
            </a>
          </motion.div>
        </div>
      </section>

      {/* ━━ SOCIAL PROOF BAR ━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ padding: '48px 24px', background: '#0D1017', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px 48px' }}>
          {[
            { value: '100+', label: 'Tasks completed' },
            { value: '5', label: 'Specialist agents' },
            { value: '<2min', label: 'Average response' },
            { value: '24/7', label: 'Always available' },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: 28, fontWeight: 800, color: '#3AAFA9', fontFamily: "'Space Grotesk', sans-serif" }}>{stat.value}</span>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ━━ WHAT IS ROMY ━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="how" style={{ padding: '120px 24px', background: '#F5F5F3' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 72 }}>
            <span style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,16,23,0.3)', marginBottom: 16 }}>What is Romy?</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#0D1017' }}>
              One agent to <span style={{ color: '#3AAFA9' }}>orchestrate</span> them all.
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(13,16,23,0.5)', textAlign: 'center', maxWidth: 580, margin: '0 auto 64px' }}>
            One conversation. Romy does the rest. No prompt engineering. No tool juggling.
          </motion.p>
          <div style={{ display: 'grid', gap: 20 }}>
            {[
              { step: '01', icon: MessageSquare, title: 'Tell Romy', desc: 'Describe what you need. Romy gets it.' },
              { step: '02', icon: Brain, title: 'Romy Plans', desc: 'Picks the right agents, tools, and approach.' },
              { step: '03', icon: Workflow, title: 'Romy Works', desc: 'Delegates, builds, and checks quality along the way.' },
              { step: '04', icon: Zap, title: 'You Review', desc: 'Polished output, ready to ship. Request changes or approve.' },
            ].map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5, ease }}
                style={{ display: 'flex', gap: 20, padding: 24, borderRadius: 16, background: '#fff', border: '1px solid rgba(13,16,23,0.06)', alignItems: 'center' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(58,175,169,0.08)' }}>
                  <s.icon size={18} color="#3AAFA9" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(58,175,169,0.5)', letterSpacing: '0.05em' }}>{s.step}</span>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0D1017' }}>{s.title}</h3>
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.5, color: 'rgba(13,16,23,0.45)' }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ CHAT DEMO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ padding: '120px 24px', background: '#EAEAE8' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,16,23,0.3)', marginBottom: 16 }}>See it in action</span>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, letterSpacing: '-0.03em', color: '#0D1017' }}>
              Just tell Romy what you need.
            </h2>
          </motion.div>

          {/* Chat mockup */}
          <div style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(13,16,23,0.06)', boxShadow: '0 8px 40px rgba(0,0,0,0.06)' }}>
            {/* Chat header */}
            <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(13,16,23,0.06)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#3AAFA9', boxShadow: '0 0 8px rgba(58,175,169,0.4)' }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: '#0D1017' }}>Romy</span>
              <span style={{ fontSize: 11, color: 'rgba(13,16,23,0.3)', marginLeft: 'auto' }}>Online</span>
            </div>

            {/* Messages */}
            <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* User message */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ background: '#0D1017', color: '#fff', padding: '12px 16px', borderRadius: '16px 16px 4px 16px', maxWidth: '80%', fontSize: 14, lineHeight: 1.5 }}>
                  Can you pull our Q1 numbers, compare them to last quarter, and draft a summary for the board?
                </div>
              </div>

              {/* Romy response */}
              <div style={{ display: 'flex', justifyContent: 'flex-start', gap: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#3AAFA9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 4 }}>
                  <Sparkles size={14} color="#0D1017" />
                </div>
                <div style={{ background: 'rgba(13,16,23,0.04)', padding: '12px 16px', borderRadius: '16px 16px 16px 4px', maxWidth: '80%', fontSize: 14, lineHeight: 1.5, color: '#0D1017' }}>
                  <p style={{ marginBottom: 12 }}>On it. I'll coordinate three agents:</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, color: 'rgba(13,16,23,0.6)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: '#3AAFA9' }}>✓</span> <strong style={{ color: '#0D1017' }}>Atlas</strong> — pulling Q1 & Q4 data
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: '#3AAFA9' }}>✓</span> <strong style={{ color: '#0D1017' }}>Flux</strong> — running the comparison
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: '#3AAFA9' }}>⋯</span> <strong style={{ color: '#0D1017' }}>Sage</strong> — drafting the summary
                    </div>
                  </div>
                  <p style={{ marginTop: 12, fontSize: 12, color: 'rgba(13,16,23,0.3)' }}>ETA: ~3 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━ USE CASES ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ padding: '120px 24px', background: '#F5F5F3' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,16,23,0.3)', marginBottom: 16 }}>Use cases</span>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#0D1017' }}>
              What teams use Romy <span style={{ color: '#3AAFA9' }}>for</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              { title: 'Board Reports', desc: '"Pull our numbers, compare to last quarter, write the summary." — Atlas researches, Flux analyzes, Sage writes. 20 minutes, not 2 days.', icon: '📊' },
              { title: 'Competitor Analysis', desc: '"What are our top 3 competitors doing?" — Atlas crawls their sites, Flux maps the data, Sage drafts the brief. Done before your coffee.', icon: '🔍' },
              { title: 'Proposal Drafting', desc: '"Write a proposal for [client] based on their requirements." — Romy reads the brief, Sage drafts, Nova checks the technical specs. Ship it.', icon: '📝' },
            ].map((uc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }}
                style={{ padding: 32, borderRadius: 20, background: '#fff', border: '1px solid rgba(13,16,23,0.06)' }}>
                <span style={{ fontSize: 32, marginBottom: 16, display: 'block' }}>{uc.icon}</span>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#0D1017', marginBottom: 12, fontFamily: "'Space Grotesk', sans-serif" }}>{uc.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(13,16,23,0.5)' }}>{uc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ AGENTS (TiltHalo) ━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ padding: '80px 0', background: '#F5F5F3', overflow: 'hidden' }}>
        <div style={{ padding: '0 24px', marginBottom: 32 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,16,23,0.3)', marginBottom: 16 }}>The Agents</span>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#0D1017' }}>
              Romy's <span style={{ color: '#3AAFA9' }}>team</span>
            </h2>
          </motion.div>
        </div>
        <TiltHalo />
      </section>

      {/* ━━ INTEGRATIONS ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ padding: '80px 24px', background: '#EAEAE8' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 40 }}>
            <span style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,16,23,0.3)', marginBottom: 16 }}>Integrations</span>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, letterSpacing: '-0.03em', color: '#0D1017', marginBottom: 12 }}>
              Works with your tools
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(13,16,23,0.4)' }}>Romy connects to the platforms you already use.</p>
          </motion.div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
            {['Gmail', 'Slack', 'Notion', 'Supabase', 'Google Sheets', 'GitHub', 'Stripe', 'WhatsApp'].map((tool, i) => (
              <motion.span key={tool} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                style={{ padding: '10px 20px', borderRadius: 100, background: '#fff', border: '1px solid rgba(13,16,23,0.06)', fontSize: 13, fontWeight: 600, color: 'rgba(13,16,23,0.6)' }}>
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ CAPABILITIES ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ padding: '120px 24px', background: '#F5F5F3' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,16,23,0.3)', marginBottom: 16 }}>Capabilities</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#0D1017' }}>
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

      {/* ━━ PRICING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ padding: '120px 24px', background: '#EAEAE8' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,16,23,0.3)', marginBottom: 16 }}>Pricing</span>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, letterSpacing: '-0.03em', color: '#0D1017' }}>
              Simple. <span style={{ color: '#3AAFA9' }}>Transparent.</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              { name: 'Starter', price: 'R499', period: '/mo', desc: 'For individuals getting started', features: ['1 workspace', '3 agents', '50 tasks/month', 'Email support'], highlight: false },
              { name: 'Pro', price: 'R2,499', period: '/mo', desc: 'For teams that need more', features: ['5 workspaces', 'All agents', 'Unlimited tasks', 'Priority support', 'Custom integrations'], highlight: true },
              { name: 'Enterprise', price: 'Custom', period: '', desc: 'For organizations at scale', features: ['Unlimited everything', 'Dedicated agent', 'SLA-backed support', 'On-premise option', 'Custom training'], highlight: false },
            ].map((plan, i) => (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                style={{
                  padding: 32, borderRadius: 20,
                  background: plan.highlight ? '#0D1017' : '#fff',
                  color: plan.highlight ? '#fff' : '#0D1017',
                  border: plan.highlight ? 'none' : '1px solid rgba(13,16,23,0.06)',
                  position: 'relative', overflow: 'hidden',
                  boxShadow: plan.highlight ? '0 8px 40px rgba(0,0,0,0.2)' : 'none',
                }}>
                {plan.highlight && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #3AAFA9, transparent)' }} />}
                <h3 style={{ fontSize: 14, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: plan.highlight ? '#3AAFA9' : 'rgba(13,16,23,0.4)', marginBottom: 8 }}>{plan.name}</h3>
                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: 42, fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif" }}>{plan.price}</span>
                  <span style={{ fontSize: 16, color: plan.highlight ? 'rgba(255,255,255,0.4)' : 'rgba(13,16,23,0.3)' }}>{plan.period}</span>
                </div>
                <p style={{ fontSize: 14, color: plan.highlight ? 'rgba(255,255,255,0.5)' : 'rgba(13,16,23,0.4)', marginBottom: 24 }}>{plan.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: plan.highlight ? 'rgba(255,255,255,0.7)' : 'rgba(13,16,23,0.6)' }}>
                      <Check size={16} color={plan.highlight ? '#3AAFA9' : 'rgba(58,175,169,0.6)'} /> {f}
                    </li>
                  ))}
                </ul>
                <a href="/#contact" style={{
                  display: 'block', textAlign: 'center', padding: '14px 0', borderRadius: 100,
                  background: plan.highlight ? '#3AAFA9' : 'transparent',
                  color: plan.highlight ? '#0D1017' : '#0D1017',
                  border: plan.highlight ? 'none' : '1px solid rgba(13,16,23,0.12)',
                  fontSize: 14, fontWeight: 600, textDecoration: 'none',
                  transition: 'all 0.3s',
                }}>
                  {plan.highlight ? 'Get Started' : 'Contact Us'}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ FAQ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ padding: '120px 24px', background: '#F5F5F3' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,16,23,0.3)', marginBottom: 16 }}>FAQ</span>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, letterSpacing: '-0.03em', color: '#0D1017' }}>
              Common questions
            </h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'How is Romy different from ChatGPT?', a: 'ChatGPT is a single model. Romy orchestrates 5+ specialist agents that each excel at their domain. You get better results because each agent is focused on one thing.' },
              { q: 'Do I need to train it?', a: 'No. Romy learns your preferences through use. The more you use it, the better it gets at anticipating what you need.' },
              { q: 'What tools does it integrate with?', a: 'Gmail, Slack, Notion, Supabase, Google Sheets, GitHub, Stripe, WhatsApp, and more. If you use it, Romy probably connects to it.' },
              { q: 'Is my data safe?', a: 'Yes. All data is encrypted in transit and at rest. We never train on your data. You can delete everything at any time.' },
              { q: 'Can I try before I commit?', a: 'Absolutely. Start with one task. See the result. Then decide. No credit card required for the trial.' },
            ].map((faq, i) => (
              <motion.details key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ background: '#fff', borderRadius: 16, border: '1px solid rgba(13,16,23,0.06)', overflow: 'hidden' }}>
                <summary style={{ padding: '20px 24px', fontSize: 15, fontWeight: 700, color: '#0D1017', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {faq.q}
                  <span style={{ fontSize: 18, color: 'rgba(13,16,23,0.2)', transition: 'transform 0.3s' }}>+</span>
                </summary>
                <div style={{ padding: '0 24px 20px', fontSize: 14, lineHeight: 1.7, color: 'rgba(13,16,23,0.5)' }}>
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ padding: '120px 24px', background: '#EAEAE8', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '-30%', right: '-10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(58,175,169,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, letterSpacing: '-0.03em', color: '#0D1017', marginBottom: 20 }}>
            Ready to meet <span style={{ color: '#3AAFA9' }}>Romy</span>?
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ fontSize: 16, color: 'rgba(13,16,23,0.45)', marginBottom: 40 }}>
            Start with one task. See what Romy can do.
          </motion.p>
          <motion.a href="/#contact" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            whileHover={{ scale: 1.03, boxShadow: '0 8px 40px rgba(58,175,169,0.2)' }} whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 100, background: '#3AAFA9', color: '#0D1017', fontSize: 15, fontWeight: 700, textDecoration: 'none', boxShadow: '0 8px 30px rgba(58,175,169,0.15)' }}>
            Get started with Romy <ChevronRight size={16} />
          </motion.a>
        </div>
      </section>

    </div>
  );
}
