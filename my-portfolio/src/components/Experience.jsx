import React from 'react'

export default function Experience(){
  return (
    <section id="experience" className="py-5 bg-transparent">
      <div className="container-lg">
        <h3 className="section-title">Experience</h3>
        <div className="timeline mt-3">
          <div className="card card-theme p-3 mb-3">
            <h5>Project Engineer — Wipro</h5>
            <div className="text-muted small">June 2024 - Present</div>
            <p className="mt-2 mb-0">Working on enterprise web applications, focusing on modern frontends with Angular and React, and backend services with .NET Core and Entity Framework. Responsibilities include feature development, code reviews, and collaborating with cross-functional teams.</p>
          </div>
          <div className="card card-theme p-3 mb-3">
            <h5>Freelance / Personal Projects</h5>
            <div className="text-muted small">Ongoing</div>
            <p className="mt-2 mb-0">Building personal projects to explore performance optimization, design systems, and full-stack patterns. I maintain a few sample repositories that showcase SPA patterns and clean APIs.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
