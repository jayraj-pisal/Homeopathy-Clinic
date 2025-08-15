import PropTypes from 'prop-types';
import { useState ,useEffect } from 'react';
import log from '../logo.jpg'; 
import { Link } from 'react-scroll';
import '../Stylesheet/Navbar.css';  
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.querySelector('.custom-navbar').classList.add('scrolled');
      } else {
        document.querySelector('.custom-navbar').classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='page2'>     
      <nav className="navbar custom-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="home">
            <div>
              <img src={log} alt='logo' height='70' />
            </div>
          </Link>
           </div>
           <div className='menu'>
          {/* Mobile menu button */}
          <button 
            className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="mobile-menu-text">
              {isMenuOpen ? '' : ''}
            </span>
          </button>
          </div>       
        
        <nav 
          className={`nav-elements ${isMenuOpen ? 'active' : ''}`} 
          id='elements'
          aria-hidden={!isMenuOpen}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="home"
                smooth={true} 
                duration={500} 
                offset={-80}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="nav-text">Home</span>
                <span className="nav-text-sm">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about"   
                smooth={true} 
                duration={500} 
                offset={-80}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="nav-text">About Us</span>
                <span className="nav-text-sm">About Us</span>
              </Link>
            </li>  
            <li className="nav-item">
              <Link className="nav-link" to="services" 
                smooth={true} 
                duration={500} 
                offset={-80}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="nav-text">Services</span>
                <span className="nav-text-sm">Services</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="media"
                smooth={true} 
                duration={500} 
                offset={-80}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="nav-text">Media</span>
                <span className="nav-text-sm">Media</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="testimonials"
                smooth={true} 
                duration={500} 
                offset={-80}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="nav-text">Testimonials</span>
                <span className="nav-text-sm">Testimonials</span>
              </Link>
            </li>
              <li className="nav-item">
              <Link className="nav-link" to="contact" 
                smooth={true} 
                duration={500} 
                offset={-80}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="nav-text">Contact Us</span>
                <span className="nav-text-sm">Contact Us</span>
              </Link>
            </li>
          </ul>
          <div className="contact-info">
          </div>
        </nav>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  About: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: "Set title here",    
  About: "About Textutils"
};