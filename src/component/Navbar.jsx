'use client'
import React from 'react'
import "../css/Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
    <div>logo</div>
    <div className='center-item'>
     <p>Emotions</p>
     <p>Manifesto</p>
     <p>Self-Awareness test</p>
     <p>Work With Us</p>
    </div>
    <div>
        <button className='download-button'>Download App</button>
    </div>

    </div>
  )
}

export default Navbar