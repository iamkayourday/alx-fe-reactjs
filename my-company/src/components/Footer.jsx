const Footer = () => {
    
  return(
      <footer className="footer" style={{
        padding:"20px", 
        backgroundColor: " #61dafbaa", 
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)", 
        textAlign:"center", 
        fontSize:"20px", 
        fontWeight:"bold",
        color: "#646cff"}}>

           <p> 
              &copy; {new Date().getFullYear()} Abdulbasit. All rights reserved
            </p>
      </footer>
  )
}
export default Footer