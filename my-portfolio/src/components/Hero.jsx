import React from 'react'
import { FiMail, FiPhone } from 'react-icons/fi'
import profilePic from '../Media (3).jpg'

export default function Hero(){
  return (
    <section className="hero">
      <div className="container-lg">
        <div className="row align-items-center">
          <div className="col-md-7 text-left">
            <h1 className="display-5 fw-bold">Hi, I'm <span className="brand-color">Babin B J</span></h1>
            <p className="lead">I'm Babin, a Project Engineer at Wipro with experience since June 2024. I work on full-stack web applications using Angular and React for the frontend and .NET Core with Entity Framework on the backend. I enjoy clean, testable code and ship features that delight users.</p>
            <p className="small text-muted mb-2">Project Engineer @ Wipro • Email: babinb128@gmail.com • Phone: +91 6383576331</p>
            <p className="text-muted mb-3">Project Engineer at Wipro — building web apps using Angular, React.js and .NET Core. Passionate about clean architecture, performance, and delightful UI.</p>
            <p>
              <a href="#contact" className="btn btn-primary btn-lg me-2" style={{backgroundColor:'#7c3aed',borderColor:'#7c3aed'}}>Hire me</a>
              <a href="#projects" className="btn btn-outline-light btn-lg">View projects</a>
            </p>
          </div>
          <div className="col-md-5 text-center mt-4 mt-md-0">
            <div className="card card-theme p-3">
              <img alt="profile" className="profile-pic mb-3" src={profilePic} />
              <h5 className="mb-0">Babin B J</h5>
              <div className="text-muted small">Project Engineer @ Wipro</div>
              <p className="mt-2 mb-0 small text-muted"><FiMail className="me-2"/> <a className="text-decoration-none text-muted" href="mailto:babinb128@gmail.com">babinb128@gmail.com</a></p>
              <p className="mb-0 small text-muted"><FiPhone className="me-2"/> +91 6383576331</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
