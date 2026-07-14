import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import EyeBrow from './EyeBrow';

const ease = [0.16, 1, 0.3, 1] as const;

const cases = [
  {
    title: 'AI Workflow Automation for Logistics',
    category: 'Workflow Automation',
    metrics: ['+30% Demo Booking', '+25% Closing Rate', '3x Engagement'],
    desc: 'We analyzed dispatch workflows for a Durban logistics client and automated the entire quote-to-cash process. Results in the first week.',
    image: 'logistics'
  },
  {
    title: 'WhatsApp CRM for Retail Chain',
    category: 'WhatsApp CRM',
    metrics: ['40% fewer missed calls', '24/7 lead capture', 'R0 wasted admin'],
    desc: 'South African retail chain now captures every lead through WhatsApp. Automated replies, CRM sync, and follow-up sequences.',
    image: 'retail'
  },
  {
    title: 'Knowledge Base for Operations Team',
    category: 'SOP Automation',
    metrics: ['4hrs to onboarding', 'From 4 weeks', '60-person team'],
    desc: 'We turned tribal knowledge into a searchable knowledge base and automated SOPs. New hires are now productive in 4 hours instead of 4 weeks.',
    image: 'knowledge'
  }
];

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<number | null>(null);

  const next = () => {
    setCurrent((c) => (c + 1) % cases.length);
    setIsAutoPlaying(false);
  };

  const prev = () => {
    setCurrent((c) => (c - 1 + cases.length) % cases.length);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = window.setInterval(() => {
        setCurrent((c) => (c + 1) % cases.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying]);

  return (
    <section id="case-studies" className="py-24 md:py-32 px-6 md:px-10 relative z-30" style={{ background: '#0D1017' }}>
      <div className="container-medium">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <EyeBrow label="Case studies" number="005" />
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tighter leading-[0.95] mb-6"
            style={{ color: '#F5F5F3' }}
          >
            What we've built
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: 'rgba(245,245,243,0.5)' }}
          >
            Real engagements. Real results. Here's how we've helped South African businesses eliminate operational drag.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          {/* Cases */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${current * 100}%` }}
              transition={{ duration: 0.5, ease }}
              className="flex"
            >
              {cases.map((caseItem, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0 px-0 md:px-4"
                >
                  <div
                    className="rounded-3xl overflow-hidden case-card"
                    style={{
                      background: '#141922',
                      border: '1px solid rgba(245,245,243,0.06)'
                    }}
                  >
                    {/* Image area */}
                    <div
                      className="w-full aspect-video relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, #1C2333 0%, #141922 100%)`
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div
                            className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                            style={{
                              background: 'rgba(58,175,169,0.1)',
                              border: '1px solid rgba(58,175,169,0.2)'
                            }}
                          >
                            <span className="text-3xl font-bold" style={{ color: '#3AAFA9' }}>
                              {String(i + 1).padStart(2, '0')}
                            </span>
                          </div>
                          <div
                            className="text-xs uppercase tracking-widest font-semibold"
                            style={{ color: 'rgba(245,245,243,0.3)' }}
                          >
                            {caseItem.category}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #141922, transparent 40%)' }} />
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10">
                      <div className="flex flex-wrap gap-3 mb-6">
                        {caseItem.metrics.map((metric, j) => (
                          <span
                            key={j}
                            className="px-4 py-2 rounded-full text-xs font-semibold"
                            style={{
                              background: 'rgba(58,175,169,0.08)',
                              color: '#3AAFA9',
                              border: '1px solid rgba(58,175,169,0.15)'
                            }}
                          >
                            {metric}
                          </span>
                        ))}
                      </div>

                      <h3
                        className="text-2xl md:text-3xl font-bold tracking-tight mb-4"
                        style={{ color: '#F5F5F3' }}
                      >
                        {caseItem.title}
                      </h3>

                      <p
                        className="text-base leading-relaxed mb-8"
                        style={{ color: 'rgba(245,245,243,0.5)' }}
                      >
                        {caseItem.desc}
                      </p>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                        style={{ color: '#3AAFA9' }}
                      >
                        Read full case study
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: 'rgba(58,175,169,0.08)',
                  border: '1px solid rgba(58,175,169,0.15)',
                  color: '#3AAFA9'
                }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: 'rgba(58,175,169,0.08)',
                  border: '1px solid rgba(58,175,169,0.15)',
                  color: '#3AAFA9'
                }}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {cases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setIsAutoPlaying(false); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8' : 'w-4'
                  }`}
                  style={{
                    background: i === current ? '#3AAFA9' : 'rgba(245,245,243,0.15)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
