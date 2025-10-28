import React from 'react'

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
              <p className="mb-1"><strong>Email</strong>: babinb128@gmail.com</p>
              <p className="mb-1"><strong>Phone</strong>: +91 6383576331</p>
              <p className="mb-0"><strong>Location</strong>: India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
