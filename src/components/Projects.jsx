// import React from 'react';

// const Projects = () => (
//   <section className="container my-5">
//     <h2>Projects</h2>
//     <div className="card mb-3 p-3">
//       <h4>Step Arena</h4>
//       <p>A modern web-based arena for tracking steps and promoting fitness engagement among users.</p>
//       <p><strong>Tech Stack:</strong> React, JavaScript, HTML, CSS, Bootstrap</p>
//       <a href="https://github.com/hmadjaved2112/step-arena" target="_blank" rel="noopener noreferrer">GitHub</a> | 
//       <a href="https://step-arena-two.vercel.app" target="_blank" rel="noopener noreferrer"> Live Demo</a>
//     </div>
//   </section>
// );

// export default Projects;



import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Step Arena',
    description:
      'A modern web-based platform that gamifies daily step tracking. Encourages fitness through community interaction, user stats, and competitive step goals.',
    techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/hmadjaved2112/step-arena',
    live: 'https://step-arena-two.vercel.app',
  },
  {
    title: 'Portfolio',
    description:
      'A sleek, responsive portfolio built using React and Bootstrap to showcase my front-end development skills, projects, education, and experience. Includes dark mode toggle, framer-motion animations, and a professional layout tailored for recruiters and clients.',
    techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/hmadjaved2112/step-arena',
    live: 'https://step-arena-two.vercel.app',
  }
  // You can add more projects here in same format
];

const Projects = () => (
  <section id="projects" className="container my-5">
    <motion.h2
      className="text-light mb-4 display-6 border-bottom border-info pb-2"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      Projects
    </motion.h2>

    {projects.map((project, index) => (
      <motion.div
        key={index}
        className="card bg-dark text-light mb-4 border border-secondary shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
      >
        <div className="card-body">
          <h4 className="card-title text-info">{project.title}</h4>
          <p className="card-text text-white-50">{project.description}</p>

          <p className="mb-2">
            <strong className="text-white">Tech Stack:</strong>{' '}
            {project.techStack.join(', ')}
          </p>

          <a
            href={project.github}
            className="btn btn-outline-info btn-sm me-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={project.live}
            className="btn btn-info btn-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </motion.div>
    ))}
  </section>
);

export default Projects;
