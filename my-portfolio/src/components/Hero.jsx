import React from 'react'

export default function Hero(){
  return (
    <section className="hero">
      <div className="container-lg">
        <div className="row align-items-center">
          <div className="col-md-7 text-left">
            <h1 className="display-5 fw-bold">Hi, I'm <span className="brand-color">Babin B J</span></h1>
            <p className="lead text-muted">Project Engineer at Wipro — building web apps using Angular, React.js and .NET Core. Passionate about clean architecture, performance, and delightful UI.</p>
            <p>
              <a href="#contact" className="btn btn-primary btn-lg me-2" style={{backgroundColor:'#7c3aed',borderColor:'#7c3aed'}}>Hire me</a>
              <a href="#projects" className="btn btn-outline-light btn-lg">View projects</a>
            </p>
          </div>
          <div className="col-md-5 text-center mt-4 mt-md-0">
            <div className="card card-theme p-3">
              <img alt="profile" className="profile-pic mb-3" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"/>
              <h5 className="mb-0">Babin B J</h5>
              <div className="text-muted small">Project Engineer @ Wipro</div>
              <p className="mt-2 mb-0 small text-muted">Email: babinb128@gmail.com • Phone: +91 6383576331</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
