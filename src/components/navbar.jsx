import './navbar.css'
function Navbar() {
  return (
    <>
      <nav>
            <a className="home_hype" href="/">Home</a>       
            <a className="home_hype" href="/about_me">About Me</a>  
            <a className="home_hype" href="/education" style={{width: "30vh"}}>Education & Projects</a>    
            <a className="home_hype" href="/contact" >Contact Me</a>
            <a className="home_hype" href="/skills" >Skills</a> 
        </nav>
    </>
  )
}
export default Navbar