import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-5">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-8">
            <h3 className="section-title">About</h3>
            <p className="text-muted">I'm Babin, a Project Engineer at Wipro with experience since June 2024. I work on full-stack web applications using Angular and React for the frontend and .NET Core with Entity Framework on the backend. I enjoy clean, testable code and ship features that delight users.</p>
            <ul className="list-unstyled">
              <li><strong>Email:</strong> babinb128@gmail.com</li>
              <li><strong>Phone:</strong> +91 6383576331</li>
              <li><strong>DOB:</strong> 20/09/2000</li>
              <li><strong>Location:</strong> India</li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className="card card-theme p-3">
              <h5 className="mb-3">Current Role</h5>
              <p className="mb-1"><strong>Company:</strong> Wipro</p>
              <p className="mb-1"><strong>Role:</strong> Project Engineer</p>
              <p className="mb-0"><strong>Since:</strong> June 2024 — Present</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
