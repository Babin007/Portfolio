import React from 'react'

const skills = [
  'Angular', 'React.js', '.NET Core', 'Entity Framework', 'Redux', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'REST APIs', 'SQL', 'Azure DevOps'
]

export default function Skills(){
  return (
    <section id="skills" className="py-5">
      <div className="container-lg">
        <h3 className="section-title">Skills & Certification</h3>
        <div className="mt-3">
          {skills.map(s => (
            <span key={s} className="skill-pill me-1">{s}</span>
          ))}
        </div>
        <div className="mt-3 small">
          <strong>Certification:</strong> <a className="text-decoration-none" href="https://www.credly.com/badges/9106c759-ffc9-4710-8475-6b81f9408698/public_url" target="_blank" rel="noopener noreferrer">GitHub Copilot</a>
        </div>
      </div>
    </section>
  )
}
