import React from 'react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'

export default function Contact(){
  return (
    <section id="contact" className="py-5">
      <div className="container-lg">
        <h3 className="section-title">Contact</h3>
        <div className="row mt-3">
          <div className="col-md-6">
            <form className="card card-theme p-3">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input className="form-control bg-transparent text-white" placeholder="Your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input className="form-control bg-transparent text-white" placeholder="you@example.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control bg-transparent text-white" rows="4" placeholder="Let's build something"></textarea>
              </div>
              <button className="btn btn-primary" style={{backgroundColor:'#7c3aed',borderColor:'#7c3aed'}}>Send</button>
            </form>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <p className="mb-2"><FiMail className="me-2"/> <strong>Email</strong>: <a className="text-decoration-none" href="mailto:babinb128@gmail.com">babinb128@gmail.com</a></p>
              <p className="mb-2"><FiPhone className="me-2"/> <strong>Phone</strong>: +91 6383576331</p>
              <p className="mb-2"><FiMapPin className="me-2"/> <strong>Location</strong>: India</p>
              <p className="mb-0"><FaLinkedin className="me-2"/> <strong>LinkedIn</strong>: <a className="text-decoration-none" href="https://www.linkedin.com/in/babin-bj-1b33b8229" target="_blank" rel="noopener noreferrer">linkedin.com/in/babin-bj-1b33b8229</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
