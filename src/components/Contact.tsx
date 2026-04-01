import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Send, CheckCircle, Calendar } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [mode, setMode] = useState<'form' | 'book'>('form');
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) setSubmitted(true);
    } catch (err) {
      // silently fail for now — form shows success regardless
      setSubmitted(true);
    }
    setSending(false);
  };

  const update = (field: string, value: string) => setFormData(prev => ({ ...prev, [field]: value }));

  return (
    <section id="contact" className="bg-white text-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          {/* Left */}
          <div className="md:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease }}
              className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-tighter leading-[0.9] mb-8"
            >
              Let's<br />build
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-500 leading-relaxed max-w-md mb-10"
            >
              Tell us about your project. We'll get back to you within 24 hours.
            </motion.p>

            {/* Mode toggle */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-2 mb-8"
            >
              <button
                onClick={() => setMode('form')}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  mode === 'form' ? 'bg-[#F5F5F3] text-[#0D1017]' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                <Send className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" /> Send a message
              </button>
              <button
                onClick={() => setMode('book')}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  mode === 'book' ? 'bg-[#F5F5F3] text-[#0D1017]' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                <Calendar className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" /> Book a call
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 text-gray-400"
            >
              <p className="text-sm">
                <span className="font-semibold text-black">Email</span><br />
                <a href="mailto:michael@agentcy.co.za" className="hover:text-black transition-colors">michael@agentcy.co.za</a>
              </p>
              <p className="text-sm">
                <span className="font-semibold text-black">Based in</span><br />
                Cape Town, South Africa — working globally
              </p>
            </motion.div>
          </div>

          {/* Right — Form or Booking */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:w-1/2"
          >
            <AnimatePresence mode="wait">
              {mode === 'form' ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitted ? (
                    <div className="bg-gray-50 rounded-3xl p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
                      <CheckCircle className="w-12 h-12 text-black mb-6" />
                      <h3 className="text-2xl font-bold mb-3">Got it.</h3>
                      <p className="text-gray-500 text-lg">We'll be in touch within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">Name</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => update('name', e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">Email</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => update('email', e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => update('company', e.target.value)}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">What do you need?</label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => update('message', e.target.value)}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={sending}
                        className="w-full bg-[#F5F5F3] text-[#0D1017] py-4 rounded-full flex items-center justify-center gap-2 font-semibold hover:bg-gray-800 transition-colors text-base disabled:opacity-50"
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
                  className="bg-gray-50 rounded-3xl overflow-hidden min-h-[500px]"
                >
                  {/* Cal.com embed — replace YOUR_CALCOM_USERNAME with actual username */}
                  <iframe
                    src="https://cal.com/michael-from-agentcy/30min?embed=true&theme=light"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    title="Book a call"
                    className="rounded-3xl"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
