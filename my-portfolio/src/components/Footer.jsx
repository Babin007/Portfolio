import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container-lg">
        <div className="d-flex justify-content-between align-items-center">
          <div className="small">© {new Date().getFullYear()} Babin B J — Built with React & Bootstrap</div>
          <div className="small text-muted">Made with ❤️ in purple</div>
        </div>
      </div>
    </footer>
  )
}
