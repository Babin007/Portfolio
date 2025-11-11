import React from 'react'
import data from '../data'

export default function NavBar(){
  const section = data.navbar
  if (!section || !section.isNeed) return null

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent" id="top">
      <div className="container-lg">
        <a className="navbar-brand brand-color fw-bold" href="#top">{section.brand}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {section.links.map((l, i) => (
              <li key={i} className="nav-item">
                {l.external ? (
                  <a className="nav-link" href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                ) : (
                  <a className="nav-link" href={l.href}>{l.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
