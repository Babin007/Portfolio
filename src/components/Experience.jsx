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
            <div className="mt-3">
              <p className="mb-1"><strong>Full-Stack Development</strong>: Developed and maintained full-stack web applications using React.js, Angular and ASP.NET Core.</p>
              <p className="mb-1"><strong>UI & State Management</strong>: Built reusable UI components and used Redux for efficient state management when appropriate; designed user interfaces and implemented business logic with route protection patterns like AuthGuard.</p>
              <p className="mb-1"><strong>Data Access & Optimization</strong>: Implemented LINQ query operations (grouping, ordering, filtering) with Entity Framework, used AutoMapper for DTO mapping, and optimized backend logic for performance.</p>
              <p className="mb-1"><strong>API Integration & Backend</strong>: Integrated APIs and built backend services using ASP.NET Core and SQL Server; applied Entity Framework for database operations.</p>
              <p className="mb-1"><strong>Productivity & Tooling</strong>: Boosted productivity and code quality leveraging GitHub Copilot; used Git and Azure DevOps for source control and CI/CD pipelines.</p>
              <p className="mb-1"><strong>Collaboration & Agile</strong>: Worked closely with QA and design teams to deliver intuitive user experiences; participated in code reviews, sprint planning, and Agile ceremonies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
