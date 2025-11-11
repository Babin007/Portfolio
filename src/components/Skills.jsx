import React from 'react'
import data from '../data'

export default function Skills(){
  const section = data.skills
  if (!section || !section.isNeed) return null

  return (
    <section id="skills" className="py-5">
      <div className="container-lg">
        <h3 className="section-title">Skills & Certification</h3>
        <div className="mt-3">
          {section.list.map(s => (
            <span key={s} className="skill-pill me-1">{s}</span>
          ))}
        </div>
        <div className="mt-3 small">
          <strong>Certifications:</strong>
          <ul className="mb-0 mt-1" style={{listStyle: 'none', paddingLeft: 0}}>
            {section.certifications.map((c,i) => (
              <li key={i}><a className="text-decoration-none" href={c.url} target="_blank" rel="noopener noreferrer">{c.title}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
