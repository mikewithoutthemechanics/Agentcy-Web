import { motion } from 'motion/react';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import EyeBrow from './EyeBrow';

const ease = [0.16, 1, 0.3, 1] as const;

const testimonials = [
  {
    quote: "Agentcy came in, learned our dispatch process in three days, and automated it. We went from 30 missed calls a day to zero.",
    author: "Johan van der Merwe",
    role: "Operations Manager, Coastal Logistics, Durban"
  },
  {
    quote: "We thought automation was for big corporates. Agentcy proved it works for a 12-person business. We now have a WhatsApp CRM that never misses a lead.",
    author: "Priya Naidoo",
    role: "Owner, Crystal Clear Properties, Ballito"
  },
  {
    quote: "The onboarding used to take 4 weeks. Agentcy built us a knowledge base and automated SOP system — new hires are productive in 4 hours now.",
    author: "Sipho Mthembu",
    role: "Head of Ops, BuildFast Construction, Johannesburg"
  },
  {
    quote: "I used to spend 15 hours a week on admin. Now I spend that time on sales. Revenue is up 25% in 90 days.",
    author: "Lisa Hartley",
    role: "Founder, Hartley Interiors, Knysna"
  },
  {
    quote: "They didn't just build us a tool — they embedded with our team for two weeks. That made all the difference.",
    author: "Craig Boden",
    role: "MD, Boden Freight, Cape Town"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 md:px-10 relative z-40" style={{ background: '#0D1017' }}>
      <div className="container-medium">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <EyeBrow label="Testimonials" number="007" />
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tighter leading-[0.95] mb-6"
            style={{ color: '#F5F5F3' }}
          >
            What they're saying
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="min-h-[280px] flex flex-col justify-center items-center">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: i === current ? 1 : 0, y: i === current ? 0 : 20 }}
                transition={{ duration: 0.4 }}
                className={`${i === current ? 'relative' : 'absolute inset-0'}`}
              >
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={20} fill="#3AAFA9" color="#3AAFA9" />
                  ))}
                </div>
                <h3 className="text-xl md:text-3xl font-medium tracking-tight leading-snug mb-8 text-center" style={{ color: 'rgba(245,245,243,0.85)' }}>
                  "{testimonial.quote}"
                </h3>
                <div className="text-center">
                  <p className="text-lg font-bold" style={{ color: '#F5F5F3' }}>{testimonial.author}</p>
                  <p className="text-sm mt-1" style={{ color: 'rgba(245,245,243,0.4)' }}>{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8' : 'w-2'}`}
                style={{ background: i === current ? '#3AAFA9' : 'rgba(245,245,243,0.15)' }}
              />
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{
              background: 'rgba(58,175,169,0.08)',
              border: '1px solid rgba(58,175,169,0.15)',
              color: '#3AAFA9'
            }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
