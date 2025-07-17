import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity } from 'react-icons/fa';

const Education = () => (
  <section id="education" className="container my-5 py-5">
    <motion.h2
      className="text-light mb-5 text-center fw-bold"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      Education
    </motion.h2>

    <motion.div
      className="bg-dark border border-secondary rounded-4 p-4 shadow-sm"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="d-flex align-items-center mb-2">
        <FaUniversity className="text-info me-2 fs-4" />
        <h5 className="mb-0 text-light">BBA Technology Management</h5>
      </div>
      <p className="text-white-50 fw-semibold mb-1">The Islamia University of Bahawalpur</p>
      <p className="text-muted small mb-2">2019 – 2023</p>
      <ul className="text-white-50 small ps-3 mb-0">
        <li>Focused on the intersection of business and technology.</li>
        <li>Learned project management, digital innovation, and system design.</li>
        <li>Final Year Project: <em>“Digital Transformation in SMEs”</em></li>
      </ul>
    </motion.div>
  </section>
);

export default Education;
