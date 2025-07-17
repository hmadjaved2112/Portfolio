import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="container my-5">
    <motion.h2
      className="text-light mb-4 border-bottom pb-2"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-info">About</span> Me
    </motion.h2>

    <div className="row align-items-center">
      {/* Optional Profile Image */}
      <motion.div
        className="col-md-4 text-center mb-4 mb-md-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/images/profile2.png"
          alt="Ahmad Javed"
          className="rounded-circle img-fluid shadow"
          style={{ maxWidth: '200px', objectFit: 'cover' }}
        />
      </motion.div>

      {/* Bio Text */}
      <motion.div
        className="col-md-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-white-50 fs-5">
          I'm <strong className="text-white">Ahmad Javed</strong>, a Front End Developer based in <strong className="text-white">Model Town B, Bahawalpur</strong>. I specialize in building modern, accessible, and high-performance interfaces.
        </p>
        <p className="text-white-50 fs-5">
          My core stack includes <strong className="text-white">React, JavaScript, HTML, CSS, and Bootstrap</strong>. I aim for pixel-perfect designs and smooth user interactions that leave a lasting impact.
        </p>
        <p className="text-white-50 fs-5">
          I’m passionate about continuous learning, optimizing user experience, and writing clean, reusable code that scales.
        </p>

        {/* Optional CTA */}
        <a
          href="/resume/resume.pdf"
          className="btn btn-outline-info mt-3"
          target="_blank"
        >
          Download Resume
        </a>
      </motion.div>
    </div>
  </section>
);

export default About;
