import React from 'react';
import { Element } from 'react-scroll';
import '../Stylesheet/Futter.css';

const DrZanjePage = () => {
  return (

        <>
<Element name="contact">
      {/* Footer */}
      <div className="footer">
         <div className="card1">
              <h2>Contact Information</h2>
              <div className="contact-info">
                <p>📞 Phone: +91 1234567890</p>
                <p>📧 Email: dr.zanje@example.com</p>
                <p>🏢 Address: 123 Healing Lane, Wellness City</p>
              </div>
            </div>
        <div className="footer-content">
            
          {/* <p>© {new Date().getFullYear()} Dr. Zanje's Homeopathy Clinic</p> */}
          <p className="company-credit">
            Developed by <a href="https://kamdhaam.com" target="_blank" rel="noopener noreferrer">Kamdhaam Company</a>
          </p>
        </div>
        </div>
</Element>
    </>
  );
};

export default DrZanjePage;