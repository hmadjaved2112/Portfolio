import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaCode } from 'react-icons/fa';

const experiences = [
  {
    role: 'Front End Intern',
    company: 'Tech N Stack',
    duration: 'May 2024 – July 2024',
    description: 'Built reusable UI components, improved responsiveness, and ensured visual consistency using React, Bootstrap, and SCSS.',
    icon: <FaReact className="text-info me-2 fs-4" />
  },
  {
    role: 'Freelance Frontend Developer',
    company: 'Self-employed',
    duration: 'Aug 2024 – Present',
    description: 'Developed modern, responsive UIs for clients using React and Bootstrap. Focused on clean design, SEO, and user experience.',
    icon: <FaCode className="text-warning me-2 fs-4" />
  }
];

const Experience = () => (
  <section id="experience" className="container my-5 py-5">
    <motion.h2 
      className="text-light mb-5 text-center fw-bold"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      Experience
    </motion.h2>

    <div className="row g-4">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="col-md-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="bg-dark border border-secondary rounded-4 p-4 shadow-sm h-100">
            <div className="d-flex align-items-center mb-2">
              {exp.icon}
              <h5 className="mb-0 text-light">{exp.role}</h5>
            </div>
            <p className="text-white-50 fw-semibold mb-1">{exp.company}</p>
            <p className="text-muted small mb-2">{exp.duration}</p>
            <p className="text-white-50">{exp.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
