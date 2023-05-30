import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ fontSize: "xx-large", fontWeight: "500", fontFamily: "Math" }}>DietHack</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/features" style={{ color: "black", fontSize: "large" }}>Features</Link>
              </li>
            </ul>
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className='nav-item' style={{ paddingRight: "1.5rem" }}>
                <button type="button" className='btn btn-secondary'>Login</button>
              </li>
              <li className='nav-item'>
                <button type="button" className='btn btn-info'>Sign up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
