import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-5">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-8">
            <h3 className="section-title">About</h3>
            <p className="text-muted">I'm a Project Engineer at Wipro (since June 2024) focused on full-stack development. My day-to-day work spans modern front-end frameworks (Angular, React) and backend services built with ASP.NET Core and Entity Framework. I take pride in crafting maintainable code, efficient data access, and user-focused interfaces.</p>
            <ul className="list-unstyled">
              <li><strong>Email:</strong> <a className="text-decoration-none" href="mailto:babinb128@gmail.com">babinb128@gmail.com</a></li>
              <li><strong>Phone:</strong> +91 6383576331</li>
              <li><strong>DOB:</strong> 20/09/2000</li>
              <li><strong>Location:</strong> India</li>
            </ul>
            <p className="mt-3"><strong>Education</strong><br/>Bachelor of Engineering – Marthandam College of Engineering and Technology (CGPA: 7.51) | 2018 – 2022</p>
            <p className="mt-2"><strong>Languages</strong>: English, Tamil, Malayalam</p>
          </div>
          <div className="col-md-4">
            <div className="card card-theme p-3">
              <h5 className="mb-3">Current Role</h5>
              <p className="mb-1"><strong>Company:</strong> Wipro</p>
              <p className="mb-1"><strong>Role:</strong> Project Engineer</p>
              <p className="mb-0"><strong>Since:</strong> June 2024 — Present</p>
              <hr/>
              <p className="mb-1"><strong>Certification</strong></p>
              <p className="small"><a className="text-decoration-none" href="https://www.credly.com/badges/9106c759-ffc9-4710-8475-6b81f9408698/public_url" target="_blank" rel="noopener noreferrer">GitHub Certified</a></p>
              <p className="mb-0 small"><a className="text-decoration-none" href="https://www.linkedin.com/in/babin-bj-1b33b8229" target="_blank" rel="noopener noreferrer">LinkedIn profile</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
