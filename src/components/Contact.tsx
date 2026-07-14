import { useState, React } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Send, CheckCircle, Calendar, MessageCircle, X } from 'lucide-react';
import EyeBrow from './EyeBrow';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [mode, setMode] = useState<'form' | 'book'>('form');
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
    setSending(false);
  };

  const update = (field: string, value: string) => setFormData(prev => ({ ...prev, [field]: value }));

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 relative z-30" style={{ background: '#0D1017' }}>
      <div className="container-medium">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <EyeBey label="Contact" number="011" />
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tighter leading-[0.95] mb-6"
            style={{ color: '#F5F5F3' }}
          >
            Let's find your edge.
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: 'rgba(245,245,243,0.5)' }}
          >
            Tell us about your business. We'll get back to you within 24 hours — or book a free 20-min audit right now.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left col */}
          <div>
            {/* Mode toggle */}
            <div className="flex gap-2 mb-8">
              <button
                onClick={() => setMode('form')}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  mode === 'form' ? 'text-[#0D1017]' : 'text-[rgba(245,245,243,0.5)]'
                }`}
                style={mode === 'form' ? { background: '#3AAFA9' } : { background: '#141922', border: '1px solid rgba(245,245,243,0.08)' }}
              >
                <Send className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" /> Send a message
              </button>
              <button
                onClick={() => setMode('book')}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  mode === 'book' ? 'text-[#0D1017]' : 'text-[rgba(245,245,243,0.5)]'
                }`}
                style={mode === 'book' ? { background: '#3AAFA9' } : { background: '#141922', border: '1px solid rgba(245,245,243,0.08)' }}
              >
                <Calendar className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" /> Book a call
              </button>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl" style={{ background: '#141922', border: '1px solid rgba(245,245,243,0.06)' }}>
                <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(245,245,243,0.35)' }}>Email</p>
                <a href="mailto:michael@agentcy.co.za" className="text-lg font-medium hover:text-[#3AAFA9] transition-colors" style={{ color: '#F5F5F3' }}>
                  michael@agentcy.co.za
                </a>
              </div>
              <div className="p-6 rounded-2xl" style={{ background: '#141922', border: '1px solid rgba(245,245,243,0.06)' }}>
                <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(245,245,243,0.35)' }}>WhatsApp</p>
                <a href="https://wa.me/27600000000" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-[#3AAFA9] transition-colors" style={{ color: '#F5F5F3' }}>
                  Chat with us on WhatsApp
                </a>
              </div>
              <div className="p-6 rounded-2xl" style={{ background: '#141922', border: '1px solid rgba(245,245,243,0.06)' }}>
                <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(245,245,243,0.35)' }}>Based in</p>
                <p className="text-lg font-medium" style={{ color: '#F5F5F3' }}>Ballito & Knysna, South Africa — working nationally</p>
              </div>
            </div>
          </div>

          {/* Right — Form or Booking */}
          <div>
            <AnimatePresence mode="wait">
              {mode === 'form' ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 md:p-10 rounded-3xl"
                  style={{ background: '#141922', border: '1px solid rgba(245,245,243,0.06)' }}
                >
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center text-center min-h-[400px]">
                      <CheckCircle className="w-12 h-12 mb-6" style={{ color: '#3AAFA9' }} />
                      <h3 className="text-2xl font-bold mb-3" style={{ color: '#F5F5F3' }}>Got it.</h3>
                      <p className="text-lg" style={{ color: 'rgba(245,245,243,0.5)' }}>We'll be in touch within 24 hours.</p>
                    </div>
                  ) : error ? (
                    <div className="flex flex-col items-center justify-center text-center min-h-[400px]">
                      <p className="text-lg mb-4" style={{ color: 'rgba(245,245,243,0.5)' }}>Something went wrong sending your message.</p>
                      <button
                        onClick={() => setError(false)}
                        className="px-6 py-3 rounded-full font-semibold text-sm"
                        style={{ background: '#3AAFA9', color: '#0D1017' }}
                      >
                        Try again
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ color: 'rgba(245,245,243,0.35)' }}>Name</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => update('name', e.target.value)}
                            className="w-full px-5 py-4 rounded-xl text-base"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ color: 'rgba(245,245,243,0.35)' }}>Email</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => update('email', e.target.value)}
                            className="w-full px-5 py-4 rounded-xl text-base"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ color: 'rgba(245,245,243,0.35)' }}>Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => update('company', e.target.value)}
                          className="w-full px-5 py-4 rounded-xl text-base"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ color: 'rgba(245,245,243,0.35)' }}>What's the biggest bottleneck in your business right now?</label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => update('message', e.target.value)}
                          className="w-full px-5 py-4 rounded-xl text-base resize-none"
                          placeholder="Tell us about your operational drag..."
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={sending}
                        className="w-full py-4 rounded-full flex items-center justify-center gap-2 font-semibold transition-all hover:scale-[1.02] text-base disabled:opacity-50"
                        style={{ background: '#F5F5F3', color: '#0D1017' }}
                      >
                        <Send className="w-4 h-4" /> {sending ? 'Sending...' : 'Send message'}
                      </button>
                    </form>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="book"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl overflow-hidden"
                  style={{ background: '#141922', border: '1px solid rgba(245,245,243,0.06)' }}
                >
                  <iframe
                    src="https://cal.com/michael-from-agentcy/30min?embed=true&theme=light"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    title="Book a call"
                    className="rounded-3xl"
                    style={{ background: '#fff' }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* CTA Modal strip - Conicorn style */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        className="mt-24 md:mt-32 p-8 md:p-12 rounded-3xl text-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #141922 0%, #1C2333 100%)',
          border: '1px solid rgba(245,245,243,0.06)'
        }}
      >
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(58,175,169,0.05) 0%, transparent 70%)' }} />
        <div className="relative z-10">
          <h3
            className="text-3xl md:text-5xl font-bold tracking-tighter mb-4"
            style={{ color: '#F5F5F3' }}
          >
            Your competitors are automating. Are you?
          </h3>
          <p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            style={{ color: 'rgba(245,245,243,0.5)' }}
          >
            Stop wasting time on manual processes. Start building a self-running business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://cal.com/michael-from-agentcy/30min?embed=true&theme=light"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-base btn-primary"
              style={{ background: '#3AAFA9', color: '#0D1017' }}
            >
              Book a free audit <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/27600000000?text=Hi%20Agentcy%2C%20I%27d%20like%20to%20chat%20about%20AI%20automation%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-base btn-primary"
              style={{
                background: 'rgba(245,245,243,0.04)',
                color: '#F5F5F3',
                border: '1px solid rgba(245,245,243,0.12)'
              }}
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp us
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
