import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
      <>
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
    <a className="navbar-brand" href="#">Router</a>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
   </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav text-center">
      <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
   <Link to="/About" className="nav-link">About</Link>
      </li>
      <li className="nav-item">
     <Link to="/Servicess" className="nav-link">Servicess</Link>
         </li>
        <li className="nav-item">
     <Link to="/Contact" className="nav-link">Contact</Link>
     </li>
    </ul>
  </div>
</nav>
      
      
      </>
  )
}

export default Nav