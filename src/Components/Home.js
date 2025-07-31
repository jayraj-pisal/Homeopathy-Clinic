import React, { useState } from 'react';
import { Element } from 'react-scroll';
import '../Stylesheet/Home.css'; // Optional if you want to style the Home component

const Home = () => {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  const toggleAppointmentForm = () => {
    setShowAppointmentForm(!showAppointmentForm);
  };

  return (
    <div className="home-container my-5">
      {/* Hero Section */}
        <Element name="home" >
      <section className="hero-section">
        <div className="hero-content">
        
          <h1 className="welcome-text animate-pop-in">
            <span className="clinic-name">Dr.Zanje's Homeopathy Clinic</span>
          </h1>
          <p className="tagline animate-pop-in">
            Natural Healing for Complete Wellness
          </p>
          <button 
            className="appointment-btn animate-pop-in"
            onClick={toggleAppointmentForm}
          >
            Book an Appointment
          </button>
        </div>
        <div className="hero-image"></div>
      </section>
</Element>
      {/* Appointment Form Modal */}
      {showAppointmentForm && (
        <div className="modal-overlay">
          <div className="appointment-form animate-slide-up">
            <button 
              className="close-btn"
              onClick={toggleAppointmentForm}
            >
              &times;
            </button>
            <div className="form-h">
            <h2>Book Your Appointment</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Your Phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>
                <input type="date" id="date" required />
              </div>
              <div className="form-group">
                <label htmlFor="time">Preferred Time</label>
                <input type="time" id="time" required />
              </div>
              <div className="form-group">
                <label htmlFor="concern">Health Concern</label>
                <textarea id="concern" placeholder="Briefly describe your health concern"></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Confirm Appointment
              </button>
            </form>
          </div>
         </div>
        </div>
      )}

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon pulse-animate">🌿</div>
          <h3>Natural Remedies</h3>
          <p>100% natural treatments with no side effects</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon pulse-animate">👨‍⚕️</div>
          <h3>Expert Care</h3>
          <p>15+ years of homeopathic experience</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon pulse-animate">💖</div>
          <h3>Holistic Approach</h3>
          <p>Treating mind, body and spirit together</p>
        </div>
      </section>
    </div>
  );
};

export default Home;