import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const certifications = [
  {
    title: 'Front End Development Training',
    issuer: 'Brain Inspire System',
    desc: 'Completed a 3-month practical training in HTML, CSS, JavaScript, Bootstrap, and React.js.',
    year: '2024'
  },
  {
    title: 'JavaScript Mastery',
    issuer: 'Sololearn',
    desc: 'Earned a certificate in advanced JavaScript topics and DOM manipulation.',
    year: '2023'
  }
];

const Certifications = () => (
  <section id="certifications" className="container my-5 py-5">
    <motion.h2
      className="text-light mb-5 text-center fw-bold"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      Certifications
    </motion.h2>

    <div className="row">
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          className="col-md-6 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="bg-dark border border-secondary rounded-4 p-4 shadow-sm h-100">
            <h5 className="text-info d-flex align-items-center mb-2">
              <FaCertificate className="me-2 fs-5" /> {cert.title}
            </h5>
            <p className="text-white-50 fw-semibold mb-1">{cert.issuer}</p>
            <p className="text-muted small mb-2">{cert.year}</p>
            <p className="text-white-50 small">{cert.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Certifications;
