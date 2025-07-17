import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Header = () => (
  <header
    id="header"
    className="d-flex flex-column align-items-center justify-content-center vh-100 text-center px-3"
    style={{ background: 'var(--bs-dark)', color: 'var(--bs-light)' }}
  >
    <motion.img
      src="/images/profile.jpg"
      alt="Profile"
      className="rounded-circle mb-4 shadow border border-4 border-info"
      width="160"
      height="160"
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    />

    <motion.h1
      className="display-4 fw-bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      Ahmad Javed
    </motion.h1>

    <motion.p
      className="lead mb-4 text-white-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      Front End Developer | Crafting Modern, Responsive Interfaces
    </motion.p>

    <motion.div
      className="d-flex gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-info fs-4 icon-hover"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-info fs-4 icon-hover"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:ahmadjaved2112sgc@gmail.com"
        className="text-info fs-4 icon-hover"
      >
        <FaEnvelope />
      </a>
    </motion.div>
  </header>
);

export default Header;
