import React, { useState } from 'react';
import { FaStar, FaUserCircle, FaCamera, FaTimes } from 'react-icons/fa';
// import './Experience.css';

const Experience = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      rating: 5,
      feedback: "Dr. Zanje's treatment completely cured my chronic migraine. The natural approach without side effects was amazing!",
      photo: "/images/patient1.jpg",
      date: "15 May 2023"
    },
    {
      id: 2,
      name: "Priya Patel",
      rating: 4,
      feedback: "Excellent experience. My skin condition improved significantly within weeks of homeopathic treatment.",
      photo: "/images/patient2.jpg",
      date: "2 June 2023"
    }
  ]);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const removePhoto = () => {
    setPhoto(null);
    setPreview('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTestimonial = {
      id: Date.now(),
      name,
      rating,
      feedback,
      photo: preview || "/images/default-avatar.jpg",
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    };
    setTestimonials([newTestimonial, ...testimonials]);
    setSubmitted(true);
    // Reset form
    setName('');
    setFeedback('');
    setRating(0);
    setPhoto(null);
    setPreview('');
  };

  const resetForm = () => {
    setSubmitted(false);
  };

  return (
    <div className="experience-container">
      <h1 className="experience-title">Patient Experiences</h1>
      <p className="experience-subtitle">Share your healing journey with others</p>

      {!submitted ? (
        <div className="feedback-form-container">
          <h2>Share Your Experience</h2>
          <form onSubmit={handleSubmit} className="feedback-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Your Rating</label>
              <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                      />
                      <FaStar
                        className="star"
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                        size={30}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(0)}
                      />
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="feedback">Your Feedback</label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
                placeholder="Share your experience with our homeopathy treatment"
                rows="5"
              ></textarea>
            </div>

            <div className="form-group">
              <label>Add Photo (Optional)</label>
              <div className="photo-upload">
                {preview ? (
                  <div className="photo-preview">
                    <img src={preview} alt="Preview" />
                    <button type="button" onClick={removePhoto} className="remove-photo">
                      <FaTimes />
                    </button>
                  </div>
                ) : (
                  <label className="upload-label">
                    <FaCamera className="camera-icon" />
                    <span>Add Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      style={{ display: 'none' }}
                    />
                  </label>
                )}
              </div>
            </div>

            <button type="submit" className="submit-button">
              Share Experience
            </button>
          </form>
        </div>
      ) : (
        <div className="thank-you-message">
          <h2>Thank You for Sharing Your Experience!</h2>
          <p>Your feedback helps us improve our services and helps other patients make informed decisions.</p>
          <button onClick={resetForm} className="submit-button">
            Share Another Experience
          </button>
        </div>
      )}

      <div className="testimonials-container">
        <h2>What Our Patients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="patient-avatar">
                  <img src={testimonial.photo} alt={testimonial.name} />
                </div>
                <div className="patient-info">
                  <h3>{testimonial.name}</h3>
                  <div className="patient-rating">
                    {[...Array(5)].map((star, index) => (
                      <FaStar
                        key={index}
                        className="star"
                        color={index < testimonial.rating ? "#ffc107" : "#e4e5e9"}
                      />
                    ))}
                  </div>
                  <p className="testimonial-date">{testimonial.date}</p>
                </div>
              </div>
              <div className="testimonial-body">
                <p>{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;