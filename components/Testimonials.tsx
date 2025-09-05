"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Marcus L.",
    role: "Small Business Owner",
    text: "FlamedUp turned my 540 score into a 680 in just a few months. Now I qualify for better loans.",
  },
  {
    name: "Janelle P.",
    role: "First-Time Homebuyer",
    text: "The process was smooth and clear. They guided me every step, and my disputes got resolved quickly.",
  },
  {
    name: "Rico D.",
    role: "Freelancer",
    text: "I was skeptical at first, but the team delivered. My collections were removed, and I feel in control again.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-[#FFF0F3] border border-[#FFD6DA] rounded-2xl shadow-md p-6"
            >
              <p className="text-gray-700 italic mb-4">“{t.text}”</p>
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
