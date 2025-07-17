import React from 'react';
import { motion } from 'framer-motion';

const skills = ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Design'];

const Skills = () => (
  <section id="skills" className="container my-5">
    <motion.h2
      className="text-light mb-4 display-6 border-bottom border-info pb-2"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      Technical Skills
    </motion.h2>

    <motion.p
      className="text-white-50 mb-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      I specialize in building fast, responsive, and accessible UIs using modern front-end technologies and frameworks.
    </motion.p>

    <div className="d-flex flex-wrap gap-3">
      {skills.map((skill, i) => (
        <motion.span
          key={i}
          className="badge px-4 py-2 bg-dark border border-info text-info rounded-pill fs-6 shadow-sm"
          whileHover={{
            scale: 1.1,
            backgroundColor: '#0dcaf0',
            color: '#000',
            boxShadow: '0 0 15px rgba(13, 202, 240, 0.6)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </section>
);

export default Skills;
