import PropTypes from 'prop-types';
import log from '../logo.jpg'; 
import { Link } from 'react-scroll';
import '../Stylesheet/Navbar.css'; 

export default function Navbar() {
  return (
    <>
    <div >
    <div className='page2'>     
      <nav className="navbar custom-navbar">
  <div className="container-fluid">
    <Link className="navbar-brand" to="home"
    >
    <div>
    <img src={log} alt='logo' height='70'
    ></img>
  </div>
      </Link>
  </div>
    <nav className="nav-elements" id='elements'>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav1" id='element' to="home"
           smooth={true} 
            duration={500} 
            offset={-80}
            >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav2" id='element' to="about"   
            smooth={true} 
            duration={500} 
            offset={-80} >About Us</Link>
        </li>  
        <li className="nav-item">
          <Link  className="navbar-link" id='element'
              to="services" 
              smooth={true} 
              duration={500} 
              offset={-80} // Adjust this if you have a fixed header
            >Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav4" id='element' to="media"
              smooth={true} 
              duration={500} 
              offset={-80}>Media</Link>
        </li>
        <li className="nav-item">
          <Link className="nav5" id='element' to="testimonials"
            smooth={true} 
              duration={500} 
              offset={-80}>Testimonials</Link>
        </li>
        </ul>
        </nav>
     </nav>
    </div>
    </div>
</>
  )
}

  Navbar.prototype = {
    title: PropTypes.string.isRequired,
    About: PropTypes.string.isRequired
  }
  Navbar.defaultProps = {
    title: "Set title here",    
    About: "About Textutils"
  }