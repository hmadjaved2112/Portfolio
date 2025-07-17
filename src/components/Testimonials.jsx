import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Ahmad’s attention to detail is outstanding. He delivered clean, efficient code.",
    author: "Team Lead - Tech N Stack"
  },
  {
    quote: "Professional and creative. Loved working with him on a React project.",
    author: "Frontend Mentor"
  },
  {
    quote: "His portfolio alone is enough to impress clients.",
    author: "Startup Founder"
  },
  {
    quote: "One of the best interns we've ever had!",
    author: "HR Manager - Tech N Stack"
  },
  {
    quote: "He always meets deadlines and exceeds expectations.",
    author: "Freelance Client"
  }
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const Testimonials = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    setIndex(([prevIndex]) => {
      const newIndex = (prevIndex + newDirection + testimonials.length) % testimonials.length;
      return [newIndex, newDirection];
    });
  };

  return (
    <section id="testimonials" className="py-5 text-center">
      <h2 className="text-white mb-5">Testimonials</h2>
      <div className="position-relative mx-auto" style={{ maxWidth: '600px' }}>
        <AnimatePresence custom={direction}>
          <motion.div
            key={index}
            className="testimonial-card px-4 py-4"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
          >
            <p className="fs-5 text-light">"{testimonials[index].quote}"</p>
            <footer className="blockquote-footer text-white-50 mt-3">{testimonials[index].author}</footer>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="d-flex justify-content-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex([i, i > index ? 1 : -1])}
              className={`dot ${i === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
