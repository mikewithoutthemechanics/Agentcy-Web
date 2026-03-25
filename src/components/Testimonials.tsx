import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "From the initial audit to full deployment, every detail felt intentional — it was a masterclass in how to transform a business with AI.",
    author: "Isabella Conte",
    role: "CEO, Brightseed Ventures"
  },
  {
    quote: "I've worked with countless agencies, but Agentcy is the first that felt both inspired and deeply equipped to make real, lasting change.",
    author: "Alina Chen",
    role: "Founder, New Futures"
  },
  {
    quote: "Our operations team saved 30+ hours a week within the first month. The ROI was almost immediate — we're now scaling to every department.",
    author: "James Adeyemi",
    role: "COO, Stellarpath Group"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-white text-black py-32 px-6 relative z-40">
      <div className="max-w-5xl mx-auto text-center relative">
        <div className="min-h-[420px] flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.45 }}
              className="px-12 md:px-28"
            >
              <h3 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-12">
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
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-black w-6' : 'bg-gray-300'}`}
            />
          ))}
        </div>

        <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-3 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft className="w-7 h-7" />
        </button>
        <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-3 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>
    </section>
  );
}
