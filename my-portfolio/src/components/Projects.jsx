import React, { useRef, useState } from 'react'
import * as bootstrap from 'bootstrap'

const projects = [
  {
    title: 'Real-time Dashboard',
    frameworks: ['React.js', 'ASP.NET Core', 'SQL Server'],
    bullets: [
      'Designed and developed an interactive dashboard using React.js with real-time API polling for instant data updates.',
      'Improved load performance and enhanced user experience by 30%.',
      'Integrated backend using ASP.NET Core and SQL Server; used Entity Framework for database operations.',
      'Used Azure DevOps for version control and CI/CD; added admin-level controls for data visibility and access management.'
    ]
  },
  {
    title: 'Exam Portal',
    frameworks: ['Angular 12', 'ASP.NET Core', 'Entity Framework'],
    bullets: [
      'Built a full-stack web application with Angular frontend and ASP.NET Core backend for managing appointments and user access.',
      'Implemented secure user authentication and a robust admin panel with role-based access.',
      'Developed features for examination, institutional, and question management; used AuthGuards to protect routes.',
      'Optimized data queries with Entity Framework and LINQ; managed deployments via Azure DevOps.'
    ]
  }
]

export default function Projects(){
  const modalRef = useRef(null)
  const [current, setCurrent] = useState(null)

  function openProject(p){
    // Set the current project, then show the bootstrap modal after the DOM updates.
    setCurrent(p)
    // show modal on next tick so the modal content (current) is rendered
    setTimeout(() => {
      const modalEl = document.getElementById('projectModal') || modalRef.current
      try{
        if (bootstrap && modalEl && bootstrap.Modal){
          const bsModal = new bootstrap.Modal(modalEl)
          bsModal.show()
          return
        }
      }catch(e){
        // fall through to window.bootstrap
        console.warn('bootstrap import failed, falling back to window.bootstrap', e)
      }

      if (window && window.bootstrap && modalEl){
        const bsModal = new window.bootstrap.Modal(modalEl)
        bsModal.show()
      }
    }, 0)
  }

  return (
    <section id="projects" className="py-5">
      <div className="container-lg">
        <h3 className="section-title">Projects</h3>
        <div className="row mt-3">
          {projects.map(p => (
            <div key={p.title} className="col-md-6 mb-3">
              <div role="button" tabIndex={0} className="card card-theme p-3 h-100 clickable" onClick={() => openProject(p)} onKeyDown={(e)=>{ if(e.key==='Enter') openProject(p)}}>
                <h5 className="mb-2">{p.title}</h5>
                <div className="mb-2">
                  {p.frameworks.map(f => (
                    <span key={f} className="skill-pill me-1">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal markup */}
        <div id="projectModal" className="modal fade" tabIndex="-1" ref={modalRef} aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-dark text-white card-theme">
              <div className="modal-header">
                <h5 className="modal-title">{current?.title}</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {current && (
                  <>
                    <p><strong>Frameworks:</strong> {current.frameworks.join(', ')}</p>
                    <ul>
                      {current.bullets.map((b,i) => <li key={i}>{b}</li>)}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
