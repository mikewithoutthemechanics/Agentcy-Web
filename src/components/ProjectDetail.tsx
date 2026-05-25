import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ExternalLink, Layers, Brain, Sparkles, Wrench, GitBranch, Terminal, Layout, Network, Check, Tag } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  logo: string;
  color: string;
  tagline: string;
  overview: string;
  tech: string[];
  images: string[];
  tiers?: PricingTier[];
}

interface PricingTier {
  name: string;
  price: string;
  period: string;
  desc: string;
}


const projects: Project[] = [
  {
    id: 'fillq',
    name: 'FILLQ',
    logo: 'F',
    color: '#FF6B6B',
    tagline: 'No-show prevention for studios',
    overview: 'A complete booking and attendance management system for yoga and pilates studios. Automated reminders, waitlist management, and smart scheduling reduce no-shows by 80%.',
    tech: ['React', 'Supabase', 'Edge Functions', 'Cron Jobs'],
    images: [],
  },
  {
    id: 'romy',
    name: 'Romy',
    logo: 'R',
    color: '#3AAFA9',
    tagline: 'AI agent orchestrator',
    overview: 'Our flagship AI orchestration platform. Romy coordinates specialist agents to deliver complex work — from research and analysis to code and content. One interface, infinite capability.',
    tech: ['FastAPI', 'CrewAI', 'React', 'Supabase'],
    images: [],
  },
  {
    id: 'nightwork',
    name: 'Nightwork',
    logo: 'N',
    color: '#C8A84E',
    tagline: 'Creative studio platform',
    overview: 'A portfolio and project management platform for creative agencies. Showcasing work, managing client relationships, and streamlining the creative pipeline.',
    tech: ['Next.js', 'Vercel', 'Tailwind', 'Framer Motion'],
    images: [],
  },
  {
    id: 'vault',
    name: 'Vault',
    logo: 'V',
    color: '#7C6FE0',
    tagline: 'Secure document management',
    overview: 'Enterprise-grade document management with end-to-end encryption, audit trails, and intelligent search. Built for compliance-heavy industries.',
    tech: ['TypeScript', 'PostgreSQL', 'S3', 'AES-256'],
    images: [],
  },
  {
    id: 'pulse',
    name: 'Pulse',
    logo: 'P',
    color: '#E06070',
    tagline: 'Real-time analytics dashboard',
    overview: 'Live metrics and analytics for SaaS products. Track user behavior, revenue, and system health in real-time with customizable dashboards and alerts.',
    tech: ['React', 'WebSockets', 'TimescaleDB', 'Redis'],
    images: [],
  },
  // ── New service offerings ──
  {
    id: 'knowledge-base', name: 'Knowledge Base', logo: 'K', color: '#2563EB',
    tagline: 'Structured knowledge for your team',
    overview: 'We design and deploy intelligent knowledge bases — powered by your own docs, SOPs, and data — so your team finds answers instantly instead of digging through folders. Semantic search, version control, and access controls included.',
    tiers: [
      { name: 'Setup',    price: 'R15k–R25k', period: 'once-off', desc: 'KB design, semantic search, basic permissions — live in 4–6 wk.' },
      { name: 'Growth',   price: 'R2k/mo',        period: '',         desc: 'Doc syncing, retraining, analytics dashboard, quarterly review calls.' },
      { name: 'Enterprise', price: 'Custom',      period: '',         desc:       'Multi-tenant SSO, onboarding concierge, on-premise option.' },
    ],

    tech: ['FastAPI', 'PostgreSQL', 'pgvector', 'Next.js'], images: [],
  },
  {
    id: 'ai-assistants', name: 'AI Assistants', logo: 'A', color: '#8B5CF6',
    tagline: 'Personal and professional AI assistants built around you',
    overview: 'Not a generic chatbot. We build AI assistants fine-tuned to your role, your data, and your workflows — with persistent memory, tool use, and seamless handoff to live humans when needed.',
    tiers: [
      { name: 'Setup',    price: 'R15k–R35k', period: 'once-off', desc: 'Prompt engineering, RAG pipeline, 1–3 flows, 30-day performance shipping.' },
      { name: 'Growth',   price: 'R3k–R8k/mo', period: '',         desc: 'New flows, fine-tuning, P&L attribution, prompt A\/B experiments.' },
      { name: 'Enterprise', price: 'Custom',      period: '',         desc: 'Fine-tuned model, custom voice repo, multi-language, on-call ops.' },
    ],

    tech: ['Groq', 'Llama 3', 'LangChain', 'RAG'], images: [],
  },
  {
    id: 'custom-tools', name: 'Custom Tools', logo: 'T', color: '#D97706',
    tagline: 'Purpose-built utilities that do exactly what you need',
    overview: 'When off-the-shelf software doesn\'t fit, we build the tool that does. Internal dashboards, data transformers, approval bots, reconciliation scripts — any utility your team needs, built and deployed.',
    tiers: [
      { name: 'Utility',   price: 'R8k–R20k', period: 'once-off', desc: 'Single tool — dashboard, transformer, bot — scoped and deployed.' },
      { name: 'Suite',     price: 'R3k–R6k/mo', period: '',         desc: '2–4 related tools, shared auth, shared dashboard, priority bugs.' },
      { name: 'Platform',  price: 'Custom',         period: '',         desc: 'Full platform, custom integrations, dedicated engineer, SLA support.' },
    ],

    tech: ['TypeScript', 'Python', 'Docker', 'Supabase'], images: [],
  },
  {
    id: 'custom-workflows', name: 'Custom Workflows', logo: 'W', color: '#059669',
    tagline: 'Automated multi-step pipelines that run themselves',
    overview: 'Connect your tools end-to-end. New lead → CRM → Slack → invoice → payment reminder. Every step timed, triggered, and error-handled. Set once, runs forever.',
    tiers: [
      { name: 'Single Flow',  price: 'R8k–R18k', period: 'once-off', desc: 'One automated workflow — tested, documented, deployed.' },
      { name: 'Multi-Flow',   price: 'R4k/mo',        period: '',         desc: '3–6 interconnected flows, retries, monthly iterations.' },
      { name: 'Operations',   price: 'R10k+/mo',      period: '',         desc: 'Unlimited flows, monitoring, P95 < 5 min SLA.' },
    ],

    tech: ['n8n', 'Zapier', 'FastAPI', 'WebSockets'], images: [],
  },
  {
    id: 'custom-skills', name: 'Custom Skills', logo: 'S', color: '#7C3AED',
    tagline: 'Specialised AI capabilities tailored to your domain',
    overview: 'Extend your AI agents with custom skills — financial analysis, code review, content moderation, compliance checking. Each skill is a self-contained module your agent calls on demand.',
    tiers: [
      { name: 'Skill Pack',   price: 'R6k–R15k', period: 'once-off', desc: 'One domain skill — e.g. financial analysis, code review, compliance.' },
      { name: 'Skill Library',price: 'R3k/mo',        period: '',         desc: '3–6 new skills/year, re-training, changelog + docs generation.' },
      { name: 'Enterprise',   price: 'Custom',        period: '',         desc: 'Unlimited skills, SDK, model wrappers, skill architect on retainer.' },
    ],

    tech: ['Python', 'OpenAI / Groq', 'LangChain', 'Docker'], images: [],
  },
  {
    id: 'cli-tools', name: 'CLI Tools', logo: 'C', color: '#475569',
    tagline: 'Command-line tools for power teams',
    overview: 'Fast, composable command-line utilities your developers and operators will actually use. Ship a binary or a pip install package — no UI bloat, no onboarding overhead.',
    tiers: [
      { name: 'Utility Binary', price: 'R8k–R12k', period: 'once-off', desc: 'One CLI tool, typed output, pip install, README + docs.' },
      { name: 'Toolkit',        price: 'R15k–R30k', period: 'once-off', desc: '3–7 related CLIs, shared config, CI\/CD pipeline, onboarding session.' },
      { name: 'DevOps Suite',   price: 'R4k/mo',         period: '',         desc: 'Ongoing development, subcommands, Action integration, priority < 24h.' },
    ],

    tech: ['Go / Rust / Python', 'Cobra / Click', 'Docker', 'GitHub Actions'], images: [],
  },
  {
    id: 'webapps', name: 'Webapps', logo: 'W', color: '#0284C7',
    tagline: 'Browser-based applications built for real usage',
    overview: 'Full-stack web applications — from internal tools your team uses daily to customer-facing products. Auth, real-time, offline sync, mobile-responsive. Deployed and maintained by us.',
    tiers: [
      { name: 'MVP',      price: 'R35k–R60k', period: 'once-off', desc: 'Auth, 2–3 main screens, Stripe\/PayFast, Vercel\/Fly.io deploy.' },
      { name: 'Growth',   price: 'R8k–R15k/mo', period: '',         desc: 'Full roadmap, new features monthly, A\/B exp, monitoring alerts.' },
      { name: 'Enterprise',price: 'Custom',         period: '',         desc: 'Multi-tenant, SSO, data residency, on-prem, 99.9% SLA, acct manager.' },
    ],

    tech: ['Next.js', 'PostgreSQL', 'tRPC', 'Tailwind'], images: [],
  },
  {
    id: 'websites', name: 'Websites', logo: 'W', color: '#EA580C',
    tagline: 'Performance-first sites that load fast and rank high',
    overview: 'Marketing sites, landing pages, and brand platforms. Optimised for Core Web Vitals, accessibility, and SEO. Built on Next.js or Astro with headless CMS when you need it.',
    tiers: [
      { name: 'Landing',     price: 'R12k–R20k', period: 'once-off', desc: 'Hero, features, CTA grid, contact form, Core Web Vitals 90+. Live in 7–14 days.' },
      { name: 'Brand Site',  price: 'R25k–R55k', period: 'once-off', desc: 'Full multi-section, CMS pages, blog, SEO, accessibility audited.' },
      { name: 'Ongoing',     price: 'R3k/mo',        period: '',         desc: 'Monthly edits, new pages, perf tuning, analytics, updates < 48h SLA.' },
    ],

    tech: ['Next.js / Astro', 'Tailwind CSS', 'Vercel / Cloudflare', 'Sanity / Notion'], images: [],
  },
  {
    id: 'agent-orchestration', name: 'Agent Orchestration', logo: 'O', color: '#0891B2',
    tagline: 'Multi-agent systems that coordinate and cooperate',
    overview: 'One agent doesn\'t solve the whole problem. We build orchestrations — research agents, writer agents, reviewer agents — that hand off contextually, producing output no single model achieves alone.',
    tiers: [
      { name: 'Pilot',      price: 'R25k–R45k', period: 'once-off', desc: 'One workflow (3–4 agents), handoff logic, dashboard, 30-day review.' },
      { name: 'Programme',  price: 'R8k–R15k/mo', period: '',        desc: '3–5 flows, shared memory, monthly improvements, P&L attribution.' },
      { name: 'Platform',   price: 'Custom',         period: '',        desc: 'Full platform, routing, audit trail, AI ops on retainer.' },
    ],

    tech: ['CrewAI', 'LangGraph', 'FastAPI', 'Redis'], images: [],
  },
  // ── Existing work ──
];

export { projects };
export type { Project };

export default function ProjectDetail({ project, onBack }: { project: Project; onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}
    >
      {/* Back button */}
      <motion.button
        onClick={onBack}
        whileHover={{ x: -4 }}
        style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: 14, fontWeight: 600, color: 'rgba(13,16,23,0.5)',
          marginBottom: 40, padding: 0,
        }}
      >
        <ArrowLeft size={16} /> Back to projects
      </motion.button>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 48, flexWrap: 'wrap' }}>
        <div style={{
          width: 72, height: 72, borderRadius: 20, flexShrink: 0,
          background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
          border: `1px solid ${project.color}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: 32, fontWeight: 900, color: project.color, letterSpacing: '-0.03em' }}>{project.logo}</span>
        </div>
        <div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0D1017', lineHeight: 1.1, marginBottom: 8 }}>
            {project.name}
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(13,16,23,0.45)' }}>{project.tagline}</p>
        </div>
      </div>

      {/* Overview */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, marginBottom: 64 }}>
        <div>
          <h3 style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,16,23,0.35)', marginBottom: 16 }}>Overview</h3>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(13,16,23,0.6)' }}>{project.overview}</p>
        </div>
        <div>
          <h3 style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,16,23,0.35)', marginBottom: 16 }}>Tech Stack</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {project.tech.map(t => (
              <span key={t} style={{
                padding: '6px 14px', borderRadius: 100,
                background: `${project.color}08`, border: `1px solid ${project.color}15`,
                fontSize: 13, fontWeight: 500, color: project.color,
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      {project.tiers && (
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', gap: 32, marginBottom: 28 }}>
            {[
              { label: '95%+', desc: 'Client retention' },
              { label: 'R68k', desc: 'Avg. pipeline per engagement' },
              { label: '4–12 wk', desc: 'Typical delivery window' },
            ].map(s => (
              <div key={s.label} style={{ flex: 1, textAlign: 'center', padding: '12px 0', borderBottom: '1px solid rgba(13,16,23,0.07)' }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: project.color, letterSpacing: '-0.03em' }}>{s.label}</div>
                <div style={{ fontSize: 11, color: 'rgba(13,16,23,0.3)', marginTop: 2 }}>{s.desc}</div>
              </div>
            ))}
          </div>
          <h3 style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,16,23,0.35)', marginBottom: 20 }}>Our Pricing</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {project.tiers.map((tier, i) => (
              <div key={tier.name} style={{
                padding: 24, borderRadius: 16,
                background: '#fff',
                border: `1px solid ${i === 1 ? project.color : 'rgba(13,16,23,0.08)'}`,
                boxShadow: i === 1 ? `0 4px 24px ${project.color}15` : '0 1px 6px rgba(0,0,0,0.04)',
                position: 'relative', display: 'flex', flexDirection: 'column',
              }}>
                {i === 1 && <div style={{ position: 'absolute', top: -10, left: '50%', translate: '-50% 0', background: project.color, color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 12px', borderRadius: 100 }}>Most popular</div>}
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(13,16,23,0.4)', marginBottom: 8 }}>{tier.name}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                  <span style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', color: project.color }}>{tier.price}</span>
                  {tier.period && <span style={{ fontSize: 14, color: 'rgba(13,16,23,0.35)' }}>{tier.period}</span>}
                </div>
                <p style={{ fontSize: 13, color: 'rgba(13,16,23,0.5)', marginBottom: 16 }}>{tier.desc}</p>
                <a href="#contact" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  width: '100%', padding: '10px 0', borderRadius: 10,
                  background: i === 1 ? project.color : 'rgba(13,16,23,0.06)',
                  color: i === 1 ? '#fff' : 'rgba(13,16,23,0.7)',
                  fontSize: 13, fontWeight: 600, textDecoration: 'none',
                }}>
                  Get started <a href="https://cal.com/michael-from-agentcy/30min" target="_blank" rel="noopener noreferrer"><ArrowLeft size={12} style={{ transform: 'rotate(180deg)' }} /></a>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Portfolio placeholder */}
      <div style={{
        padding: 60, borderRadius: 20,
        background: '#EAEAE8', border: '2px dashed rgba(13,16,23,0.1)',
        textAlign: 'center',
      }}>
        <Layers size={32} color="rgba(13,16,23,0.15)" style={{ marginBottom: 16 }} />
        <p style={{ fontSize: 16, fontWeight: 600, color: 'rgba(13,16,23,0.3)', marginBottom: 8 }}>Portfolio coming soon</p>
        <p style={{ fontSize: 13, color: 'rgba(13,16,23,0.2)' }}>Screenshots, case studies, and live demos will go here</p>
      </div>
    </motion.div>
  );
}
