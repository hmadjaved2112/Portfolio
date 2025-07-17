import React from 'react';

const Footer = () => (
  <footer className="container-fluid bg-dark text-white pt-5 pb-4 mt-5">
    <div className="row px-5">
      {/* Column 1 - Logo + About + Social */}
      <div className="col-md-4 mb-4 text-center text-md-start">
        <img src="/images/profile2.png" alt="logo" className="rounded-circle mb-3" height="120" />
        <p className="text-white-50">
          Ahmad Javed is a dedicated Front End Developer based in Pakistan, specialized in creating modern, responsive, and accessible user interfaces. Passionate about performance, user experience, and clean code. Open to exciting collaboration opportunities.
        </p>
        <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
          <a href="https://www.facebook.com/share/1AX9C34dkH/" target="_blank" rel="noreferrer" className="footer-icon">
            <i className="bi bi-facebook fs-4"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="footer-icon">
            <i className="bi bi-instagram fs-4"></i>
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="footer-icon">
            <i className="bi bi-linkedin fs-4"></i>
          </a>
          <a href="https://github.com/hmadjaved2112" target="_blank" rel="noreferrer" className="footer-icon">
            <i className="bi bi-github fs-4"></i>
          </a>
        </div>
      </div>

      {/* Column 2 - Links Navigation */}
      <div className="col-md-4 mb-4">
        <h5 className="text-light mb-3">Links</h5>
        <ul className="list-unstyled text-white-50 ">
          <li><a href="#about" className="text-white-50">About</a></li>
          <li><a href="#skills" className="text-white-50">Skills</a></li>
          <li><a href="#projects" className="text-white-50">Projects</a></li>
          <li><a href="#experience" className="text-white-50">Experience</a></li>
          <li><a href="#education" className="text-white-50">Education</a></li>
          <li><a href="#certifications" className="text-white-50">Certifications</a></li>
          <li><a href="#testimonials" className="text-white-50">Testimonials</a></li>
          <li><a href="#contact" className="text-white-50">Contact</a></li>
        </ul>
      </div>

      {/* Column 3 - Contact + Map */}
      <div className="col-md-4 mb-4">
        <h5 className="text-light mb-3">Contact</h5>
        <div className="ratio ratio-16x9 mb-3">
          <iframe
            src="https://maps.google.com/maps?q=Model%20Town%20B%20Street%20No%209%20Bahawalpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="map"
          ></iframe>
        </div>
        <p className="text-white-50 mb-1"><span className='fw-bold text-white'>Phone:</span> 03108699002</p>
        <p className="text-white-50"><span className='fw-bold text-white'>Location:</span> Model Town B, Street No 9, House #179A</p>
      </div>
    </div>
    <div className="text-center text-white-50 mt-4">
      © {new Date().getFullYear()} Ahmad Javed — All rights reserved.
    </div>
  </footer>
);

export default Footer;