import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "From the speakers to the venue, every detail felt intentional — it was a masterclass in how to host a truly meaningful event.",
    author: "Isabella Conte",
    role: "Brightseed Ventures"
  },
  {
    quote: "I've been to countless conferences, but this was the first where I felt both inspired and equipped to make real change.",
    author: "Alina Chen",
    role: "New Futures"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-white text-black py-32 px-6 relative z-40">
      <div className="max-w-5xl mx-auto text-center relative">
        <div className="min-h-[400px] flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="px-12 md:px-24"
            >
              <h3 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-12">
                "{testimonials[current].quote}"
              </h3>
              <div>
                <p className="text-xl font-bold">{testimonials[current].author}</p>
                <p className="text-gray-500">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-4 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-4 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
