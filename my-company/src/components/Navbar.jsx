import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <> 
        <nav style={{
              backgroundColor: "#61dafbaa",
              display: "flex",
              justifyContent: "space-between", // Adjust spacing between h3 and links
              alignItems: "center", // Align items vertically centered
              padding: "20px",
              fontSize: "1.5em",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
            }}>

            <h3 style={{ 
              display: "flex", 
              color: "#646cff" }}>Abdul<em><span style={{ 
              color: "grey" }}>basit</span></em>
            </h3>
      
            <div style={{ 
              display: "flex", 
              gap: "10px" }}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contacts</Link>
            </div>
        </nav>
    </>
   
  )
}

export default Navbar