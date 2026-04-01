import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ExternalLink, Layers } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  logo: string;
  color: string;
  tagline: string;
  overview: string;
  tech: string[];
  images: string[];
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
