import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><h3>ElectroSemi</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/product">Products <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About us</a>
      </li>
      <li className="nav-item">
        
      </li>
    </ul>
  </div>   
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.handletheme} id="flexSwitchCheckDefault" />
  <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">{props.textColor}</label>
</div>
  </div>
</nav>
    </div>
  )
}
