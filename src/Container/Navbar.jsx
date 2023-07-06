import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div style={{display:"flex", justifyContent:"space-around",background:"#333",padding:"10px"}}>
            <NavLink to="/"  className="links">Home</NavLink>
            <NavLink to="/about"  className="links">About</NavLink>
            <NavLink to="/contact"  className="links">Contact</NavLink>
        </div>
      
    </div>
  )
}

export default Navbar
