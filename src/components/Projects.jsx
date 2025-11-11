import React, { useState } from 'react'
import * as bootstrap from 'bootstrap'
import data from '../data'

export default function Projects(){
  const section = data.projects
  const [current, setCurrent] = useState(null)
  if (!section || !section.isNeed) return null

  function openProject(p){
    setCurrent(p)
    setTimeout(() => {
      const modalEl = document.getElementById('projectModal')
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
          {section.items.map(p => (
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
  <div id="projectModal" className="modal fade" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-dark text-white card-theme">
              <div className="modal-header">
                <h5 className="modal-title">{current?.title}</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {current && (
                  <>
                    <p><strong>Tools:</strong> {current.frameworks.join(', ')}</p>
                    <ul style={{listStylePosition: 'outside', paddingLeft: '0.6rem', marginLeft: 0}}>
                      {current.bullets.map((b,i) => (
                        <li key={i} style={{marginBottom: '0.5rem', paddingLeft: 0, marginLeft: 0}}>{b}</li>
                      ))}
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
