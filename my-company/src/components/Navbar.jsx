import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <> 
        <nav style={{backgroundColor: " #61dafbaa", display:"flex",justifyContent:"end"}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contacts</Link>
        </nav> 
    </>
   
  )
}

export default Navbar