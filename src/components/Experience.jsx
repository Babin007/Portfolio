import React from 'react'
import data from '../data'

export default function Experience(){
  const section = data.experience
  if (!section || !section.isNeed) return null

  return (
    <section id="experience" className="py-5 bg-transparent">
      <div className="container-lg">
        <h3 className="section-title">Experience</h3>
        <div className="timeline mt-3">
          {section.items.map((item, idx) => (
            <div key={idx} className="card card-theme p-3 mb-3">
              <h5>{item.title}</h5>
              <div className="text-muted small">{item.period}</div>
              <div className="mt-3">
                {item.bullets.map((b,i) => <p key={i} className="mb-1">{b}</p>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
