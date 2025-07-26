import PropTypes from 'prop-types';
import log from '../logo.jpg'; // Ensure the path to the logo is correct
import { Link } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';
import SearchBar from './SearchBar';
// import { Link as ScrollLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <div >
    <div className='page2'>     
      <nav className="navbar custom-navbar">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
    <div>
    <img src={log} alt='logo' height='70'></img>
  </div>
      </Link>
  </div>
    <div className="nav-elements" id='elements'>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav1" id='element' to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav2" id='element' to="/about" >About Us</Link>
        </li>  
        <li className="nav-item">
          <Link  className="navbar-link" id='element'
              to="/services" 
              smooth={true} 
              duration={500} 
              offset={-80} // Adjust this if you have a fixed header
            >Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav4" id='element' to="/media">Media</Link>
        </li>
        <li className="nav-item">
          <Link className="nav5" id='element' to="/experience">Experiences</Link>
        </li>
        <li className="nav-item">
          <a className="nav6" id='element' href="/">FAQ's</a>
        </li>
        </ul>
     </div>
            <div>  
           <div className="search1" role="search">
              <SearchBar />
             </div>
         
         </div>
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