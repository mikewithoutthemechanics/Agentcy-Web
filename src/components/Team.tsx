import { motion } from 'motion/react';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import EyeBrow from './EyeBrow';

const ease = [0.16, 1, 0.3, 1] as const;

const team = [
  {
    name: 'Michael Kidd',
    role: 'Founder & AI Engineer',
    bio: 'On-site AI engineer with 10+ years building automation systems for South African businesses.',
    image: 'michael'
  },
  {
    name: 'Sarah Mitchell',
    role: 'Head of Operations',
    bio: 'Leads client onboarding and delivery. Ensures every engagement ships on time and on spec.',
    image: 'sarah'
  },
  {
    name: 'Johan van der Merwe',
    role: 'Senior Automation Engineer',
    bio: 'Specialises in workflow automation and custom tool development for logistics and retail.',
    image: 'johan'
  },
  {
    name: 'Priya Naidoo',
    role: 'Client Success Lead',
    bio: 'Your main point of contact. Keeps engagements on track and makes sure the systems actually work.',
    image: 'priya'
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32 px-6 md:px-10 relative z-30" style={{ background: '#0D1017' }}>
      <div className="container-medium">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-24"
        >
          <EyeBrow label="Team" number="009" />
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tighter leading-[0.95] mb-6"
            style={{ color: '#F5F5F3' }}
          >
            Meet the Agentcy team
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: 'rgba(245,245,243,0.5)' }}
          >
            We're engineers, operators, and problem-solvers based in South Africa. Here's who you'll be working with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease }}
              className="team-card group p-6 md:p-8 rounded-3xl text-center"
              style={{
                background: '#141922',
                border: '1px solid rgba(245,245,243,0.06)'
              }}
            >
              {/* Avatar placeholder */}
              <div
                className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(58,175,169,0.15), rgba(58,175,169,0.05))',
                  border: '2px solid rgba(58,175,169,0.2)'
                }}
              >
                <span className="text-2xl font-bold" style={{ color: '#3AAFA9' }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              <h3
                className="text-xl font-bold tracking-tight mb-1"
                style={{ color: '#F5F5F3' }}
              >
                {member.name}
              </h3>
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ color: '#3AAFA9' }}
              >
                {member.role}
              </p>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: 'rgba(245,245,243,0.5)' }}
              >
                {member.bio}
              </p>

              {/* Social links */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/5"
                  style={{ border: '1px solid rgba(245,245,243,0.08)', color: 'rgba(245,245,243,0.4)' }}
                >
                  <Facebook size={14} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/5"
                  style={{ border: '1px solid rgba(245,245,243,0.08)', color: 'rgba(245,245,243,0.4)' }}
                >
                  <Linkedin size={14} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/5"
                  style={{ border: '1px solid rgba(245,245,243,0.08)', color: 'rgba(245,245,243,0.4)' }}
                >
                  <Twitter size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
