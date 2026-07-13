import { motion } from 'motion/react';
import { Star } from 'lucide-react';

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
    <section className="bg-white text-black py-20 px-6 relative z-40">
      <div className="max-w-5xl mx-auto text-center relative">
        <div className="min-h-[280px] flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.45 }}
              className="px-6 md:px-20"
            >
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#3AAFA9" color="#3AAFA9" />
                ))}
              </div>
              <h3 className="text-xl md:text-4xl font-medium tracking-tight leading-tight mb-8">
                "{testimonials[current].quote}"
              </h3>
              <div>
                <p className="text-xl font-bold">{testimonials[current].author}</p>
                <p className="text-gray-500 mt-1">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-[#3AAFA9] w-6' : 'bg-gray-300'}`}
            />
          ))}
        </div>

        <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-3 hover:bg-gray-100 rounded-full transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-3 hover:bg-gray-100 rounded-full transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </section>
  );
}
