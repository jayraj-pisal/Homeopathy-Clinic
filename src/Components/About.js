import React from 'react';
import DrPhoto from '../DrPhoto.jpg'; // Ensure the path to the doctor photo is correct

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      
      <div className="about-header">
        <h1>About Us</h1>
        <p>Discover our clinic and our dedicated homeopathic specialist</p> 
      </div>

      {/* About Clinic Section */}
      <div className="about-section-box">
        <div className="about-section-content">
          <div className="about-section-text">
            <h2>About Our Clinic</h2>
            <p>
              Welcome to Zanje Homeopathy, a premier homeopathic treatment center dedicated to 
              providing natural and holistic healing solutions. Established in 2010, our clinic 
              has been serving the community with compassionate care and effective homeopathic remedies.
            </p>
            <p>
              Our clinic is designed to create a peaceful healing environment where patients feel 
              comfortable and cared for. We follow classical homeopathy principles while incorporating 
              modern diagnostic techniques to provide comprehensive care.
            </p>
            <ul className="clinic-features">
              <li>100% natural treatments with no side effects</li>
              <li>Personalized care for each patient</li>
              <li>Certified and experienced homeopathic practitioners</li>
            </ul>
          </div>
          <div className="about-section-image">
            <img 
              src="/images/clinic-interior.jpg" 
              alt="Zanje Homeopathy Clinic Interior" 
              className="section-img"
            />
          </div>
        </div>
      </div>

      {/* About Dr. Zanje Section */}
      <div className="about-section-box">
        <div className="about-section-content reverse-layout">
          <div className="about-section-image">
            <img 
              src={DrPhoto} 
              alt="Dr. Sanjay Zanje" 
              className="section-img"
            />
          </div>
          <div className="about-section-text">
            <h2>About Dr. Sanjay Zanje</h2>
            <p>
              Dr. Sanjay Zanje is our founder and principal homeopathic consultant with over 15 years 
              of clinical experience. A graduate of the prestigious Mumbai Homeopathic Medical College, 
              Dr. Zanje has helped thousands of patients regain their health through homeopathy.
            </p>
            <p>
              Specializing in chronic diseases, autoimmune disorders, and pediatric care, Dr. Zanje 
              takes a meticulous approach to case-taking and remedy selection. His deep understanding 
              of miasmatic theory and constitutional treatment has yielded remarkable results for 
              numerous challenging cases.
            </p>
            <div className="dr-qualifications">
              <h4>Qualifications & Achievements:</h4>
              <ul>
                <li>BHMS (Bachelor of Homeopathic Medicine & Surgery)</li>
                <li>MD in Homeopathy (Pediatrics)</li>
                <li>Certified in Advanced Homeopathic Therapeutics</li>
                <li>Member of the Central Council of Homeopathy</li>
                <li>Recipient of the 'Best Homeopath' award 2019</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="philosophy-section">
        <h2>Our Treatment Philosophy</h2>
        <div className="philosophy-points">
          <div className="philosophy-card">
            <h3>Holistic Approach</h3>
            <p>We treat the whole person, not just the disease symptoms</p>
          </div>
          <div className="philosophy-card">
            <h3>Gentle Healing</h3>
            <p>Our remedies work with your body's natural healing processes</p>
          </div>
          <div className="philosophy-card">
            <h3>Personalized Care</h3>
            <p>Each treatment plan is customized to your unique needs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;