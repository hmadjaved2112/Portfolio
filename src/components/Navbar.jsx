import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm py-3">
    <div className="container d-flex justify-content-between align-items-center">
      <a href="#" className="navbar-brand d-flex align-items-center">
        <img 
          src="/images/profile2.png" 
          alt="Ahmad Javed Logo" 
          className="rounded-circle me-2" 
          height="80" 
          width="80"
          style={{ objectFit: 'cover' }}
        />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto text-center">
          {[
            'about',
            'skills',
            'projects',
            'experience',
            'education',
            'certifications',
            'testimonials',
            'contact',
          ].map(section => (
            <li className="nav-item px-2" key={section}>
              <a className="nav-link text-white" href={`#${section}`}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
