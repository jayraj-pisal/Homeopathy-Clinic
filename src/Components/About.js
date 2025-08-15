import React, { useState } from 'react';
import DrPhoto from '../DrPhoto.jpg';
import '../Stylesheet/About.css'; // Optional if you want to style the About page
import { Element } from 'react-scroll';

const About1 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
     <Element name="about">
    <div className="about-page">
      {/* Image Modal */}
     
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Enlarged view" className="modal-image" />
          </div>
        </div>
      )}

      {/* Page Header */}
      <div className="about-header animate-fade-in">
        <h1 className="animate-slide-down">About Us</h1>
        <p className="header-subtitle animate-slide-up">
          Discover our clinic and our dedicated homeopathic specialist
        </p>
      </div>

      {/* About Clinic Section */}
      <div className="about-section-box animate-fade-in">
        <div className="about-section-content">
          <div className="about-section-text">
            <h2 className="section-title">About Our Clinic</h2>
            <p className="section-description">
              Welcome to Zanje Homeopathy, a premier homeopathic treatment center dedicated to 
              providing natural and holistic healing solutions. Established in 2010, our clinic 
              has been serving the community with compassionate care and effective homeopathic remedies.
            </p>
            <p className="section-description">
              Our clinic is designed to create a peaceful healing environment where patients feel 
              comfortable and cared for. We follow classical homeopathy principles while incorporating 
              modern diagnostic techniques to provide comprehensive care.
            </p>
            <ul className="clinic-features">
              {/* <li className="feature-item">
                <span className="feature-icon">🌿</span> 100% natural treatments with no side effects
              </li>
              <li className="feature-item">
                <span className="feature-icon">💖</span> Personalized care for each patient
              </li>
              <li className="feature-item">
                <span className="feature-icon">🏆</span> Certified and experienced homeopathic practitioners
              </li> */}
              <li className="feature-item">
                <a href='https://www.justdial.com/Pune/Dr-Zanjes-Homeopathy-Clinic-Hadapsar/020PXX20-XX20-161117204331-I9Q1_BZDET' target="_blank" rel="noopener noreferrer"><p>For More Ditails</p></a>
              </li>
            </ul>
          </div>
          <div className="about-section-image image-hover" onClick={() => openModal("/images/clinic-interior.jpg")}>
            <img 
              src="/images/clinic-interior.jpg" 
              alt="Zanje Homeopathy Clinic Interior" 
              className="section-img"
            />
          </div>
        </div>
      </div>

      {/* About Dr. Zanje Section */}
      <div className="about-section-box animate-fade-in">
        <div className="about-section-content reverse-layout">
          <div className="about-section-image image-hover" onClick={() => openModal(DrPhoto)}>
            <img 
              src={DrPhoto} 
              alt="Dr. Sanjay Zanje" 
              className="section-img dr-photo"
            />
          </div>
          <div className="about-section-text">
            <h2 className="section-title">About Dr. Rasik Zanje</h2>
            <p className="section-description">
              Dr. Rasik Zanje is our founder and principal homeopathic consultant with over 15 years 
              of clinical experience. A graduate of the prestigious Mumbai Homeopathic Medical College, 
              Dr. Zanje has helped thousands of patients regain their health through homeopathy.
            </p>
            <p className="section-description">
              Specializing in chronic diseases, autoimmune disorders, and pediatric care, Dr. Zanje 
              takes a meticulous approach to case-taking and remedy selection. His deep understanding 
              of miasmatic theory and constitutional treatment has yielded remarkable results for 
              numerous challenging cases.
            </p>
            <div className="dr-qualifications">
              <h4 className="qualifications-title">Qualifications & Achievements:</h4>
              <ul>
                {['BHMS (Bachelor of Homeopathic Medicine & Surgery)', 
                  'MD in Homeopathy (Pediatrics)',
                  'Certified in Advanced Homeopathic Therapeutics',
                  'Member of the Central Council of Homeopathy',
                  'Recipient of the "Best Homeopath" award 2019'].map((item, index) => (
                  <li key={index} className="qualification-item">
                    <span className="qualification-icon">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
    </div>
  </Element>
  );
};

export default About1;