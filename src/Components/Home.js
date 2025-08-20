import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import '../Stylesheet/Home.css';

const Home = () => {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [status, setStatus] = useState("");
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    status: null,
    message: ''
  });

  const toggleAppointmentForm = () => {
    setShowAppointmentForm(!showAppointmentForm);
    // Reset form status when toggling
    if (showAppointmentForm) {
      setFormStatus({
        submitting: false,
        status: null,
        message: ''
      });
      setStatus(""); // Reset status
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, status: null, message: '' });
    setStatus({ submitting: true, status: null, message: '' }); // Capture status from form
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/meozlevp', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setFormStatus({
          submitting: false,
          status: 'success',
          message: 'Appointment booked successfully! We will contact you shortly.'
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({
        submitting: false,
        status: 'error',
        message: 'Oops! There was a problem. Please try again later.'
      });
      console.error('Form submission error:', error);
    }
    
  };



  // Auto-hide success/error popup after 4 seconds
  useEffect(() => {
    if (formStatus.status) {
      const timer = setTimeout(() => {
        setFormStatus(prev => ({ ...prev, status: null, message: '' }));
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [formStatus.status]);

  return (
    <Element name="home">
      <div className="home-container my-5">
        {/* Hero Section */}
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
              smooth={true} 
            >
              Book an Appointment
            </button>
          </div>
          <div className="hero-image"></div>
        </section>
    
        {/* Appointment Form Modal */}
        {showAppointmentForm && (
          <div className="modal-overlay">
            <div className="appointment-form animate-slide-up">
              <button 
                className="close-btn"
                onClick={toggleAppointmentForm}
                aria-label="Close appointment form"
              >
                &times;
              </button>
              <div className="form-h">
                <h2>Book Your Appointment</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name*</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number*</label>
                    <input type="tel" id="phone" name="phone" placeholder="Your Phone" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date*</label>
                    <input type="date" id="date" name="date" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Preferred Time*</label>
                    <input type="time" id="time" name="time" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City*</label>
                    <input type="text" id="city" name="city" placeholder="Your City" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State*</label>
                    <input type="text" id="state" name="state" placeholder="Your State" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country*</label>
                    <input type="text" id="country" name="country" placeholder="Your Country" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="concern">Health Concern</label>
                    <textarea id="concern" name="concern" placeholder="Briefly describe your health concern"></textarea>
                  </div>
                  <div className="form-group">
                   <label htmlFor='status'>Status*</label>       
                   <select 
                      id="status"
                      name="status"  // Add this
                      value={status} 
                      onChange={(e) => setStatus(e.target.value)} 
                      required
                    >
                      <option value="">-- Select Status --</option>
                      <option value="Offline">Offline</option>
                      <option value="Online">Online</option>
                    </select>
                  </div>
                  <button type="submit" className="submit-btn" disabled={formStatus.submitting}>
                    {formStatus.submitting ? 'Sending...' : 'Confirm Appointment'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Floating Success/Error Popup */}
        {formStatus.status && (
          <div className={`status-message ${formStatus.status}`}>
            {formStatus.message}
          </div>
        )}

        {/* Features Section */}
        <section className="features-section">
          {/* ... existing feature cards ... */}
        </section>
      </div>
    </Element>
  );
};

export default Home;
