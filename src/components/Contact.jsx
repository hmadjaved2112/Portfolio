import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { BsEnvelope, BsPerson, BsChatDots } from 'react-icons/bs';

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => alert(JSON.stringify(data));

  return (
    <section id="contact" className="container my-5">
      <motion.h2 
        className="text-light mb-4 text-center"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }}
      >
        Contact
      </motion.h2>

      <div className="row">
        {/* Left Column: Form */}
        <motion.div 
          className="col-md-7"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="bg-secondary p-4 rounded shadow"
            style={{ border: '1px solid #444' }}
          >
            {/* Name */}
            <div className="mb-3">
              <label className="form-label text-white-50">Name</label>
              <div className="input-group">
                <span className="input-group-text bg-dark border-0 text-white-50"><BsPerson /></span>
                <input 
                  {...register('name')} 
                  className="form-control bg-dark text-white  border-0"
                  placeholder="Your Full Name"
                  required
                  style={{ boxShadow: 'none', transition: 'none' }}
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label text-white-50">Email</label>
              <div className="input-group">
                <span className="input-group-text bg-dark border-0 text-white-50"><BsEnvelope /></span>
                <input 
                  {...register('email')} 
                  type="email" 
                  className="form-control bg-dark text-white  border-0" 
                  placeholder="you@example.com"
                  required
                  style={{ boxShadow: 'none', transition: 'none' }}
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-3">
              <label className="form-label text-white-50">Message</label>
              <div className="input-group">
                <span className="input-group-text bg-dark border-0 text-white-50"><BsChatDots /></span>
                <textarea 
                  {...register('message')} 
                  className="form-control bg-dark text-white  border-0" 
                  rows="4" 
                  placeholder="Write your message here..." 
                  required
                  style={{ boxShadow: 'none', transition: 'none' }}
                />
              </div>
            </div>

            <button className="btn btn-info w-100 mt-2 fw-semibold">Send Message</button>
          </form>
        </motion.div>

        {/* Right Column: Contact Info */}
        <motion.div 
          className="col-md-5 mt-4 mt-md-0 text-white-50"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-dark p-4 rounded shadow h-100 d-flex flex-column justify-content-between border border-secondary">
            <div>
              <p><strong>Email:</strong> ahmadjaved2112sgc@gmail.com</p>
              <p><strong>Phone:</strong> 03108699002</p>
              <p><strong>Location:</strong> Model Town B, Street No 9, Bahawalpur</p>
            </div>
            <a 
              href="/resume/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline-info mt-3 w-100 fw-semibold"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
