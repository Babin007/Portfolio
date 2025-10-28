import React from 'react'

const projects = [
  {title: 'Project A', desc: 'A demo SPA built with React and .NET Core backend.'},
  {title: 'Project B', desc: 'Enterprise dashboard built with Angular and optimized charts.'},
  {title: 'Project C', desc: 'Personal blog platform with SSR and clean API design.'}
]

export default function Projects(){
  return (
    <section id="projects" className="py-5">
      <div className="container-lg">
        <h3 className="section-title">Projects</h3>
        <div className="row mt-3">
          {projects.map(p => (
            <div key={p.title} className="col-md-4 mb-3">
              <div className="card card-theme p-3 h-100">
                <h5>{p.title}</h5>
                <p className="text-muted small mb-0">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
