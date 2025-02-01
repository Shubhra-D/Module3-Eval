import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
          Quiz App
      </div>
     <div className='right'>
        <NavLink className="navlink" to="/">Home</NavLink>
        <NavLink className="navlink" to="/quiz">Quiz</NavLink>
        <NavLink className="navlink" to="/result">Result</NavLink>
     </div>
    
    
    </div>
  )
}

export default Navbar
