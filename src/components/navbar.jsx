import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
      <div className="name">
          Abhishek Epili
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img style={{width: "2em"}} src='/images/hamburger.png'/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={handleShowNavbar}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about_me" onClick={handleShowNavbar}>About Me</NavLink>
            </li>
            <li>
              <NavLink to="/education" onClick={handleShowNavbar}>Education & Projects</NavLink>
            </li>
            <li>
              <NavLink to="/skills" onClick={handleShowNavbar}>Skills</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleShowNavbar}>Contact Me</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar