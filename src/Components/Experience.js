import React, { useRef, useEffect, useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Element } from 'react-scroll';
import '../Stylesheet/Experience.css'; // Create this CSS file

const HorizontalScroll = () => {
  const scrollRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  
  const testimonials = [
    // ... your testimonials array ...
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
    },
    {
      id: 2,
      name: "Priya Patel",
      rating: 4,
      feedback: "Excellent experience. My skin condition improved significantly within weeks of homeopathic treatment.",
      photo: "/images/patient2.jpg",
      date: "2 June 2023"
    },
    {
      id: 2,
      name: "Priya Patel",
      rating: 4,
      feedback: "Excellent experience. My skin condition improved significantly within weeks of homeopathic treatment.",
      photo: "/images/patient2.jpg",
      date: "2 June 2023"
    },
    {
      id: 2,
      name: "Priya Patel",
      rating: 4,
      feedback: "Excellent experience. My skin condition improved significantly within weeks of homeopathic treatment.",
      photo: "/images/patient2.jpg",
      date: "2 June 2023"
    },
    {
      id: 2,
      name: "Priya Patel",
      rating: 4,
      feedback: "Excellent experience. My skin condition improved significantly within weeks of homeopathic treatment.",
      photo: "/images/patient2.jpg",
      date: "2 June 2023"
    },
    {
      id: 2,
      name: "Priya Patel",
      rating: 4,
      feedback: "Excellent experience. My skin condition improved significantly within weeks of homeopathic treatment.",
      photo: "/images/patient2.jpg",
      date: "2 June 2023"
    },
    {
      id: 2,
      name: "Priya Patel",
      rating: 4,
      feedback: "Excellent experience. My skin condition improved significantly within weeks of homeopathic treatment.",
      photo: "/images/patient2.jpg",
      date: "2 June 2023"
    },
    {
      id: 2,
      name: "Priya Patel",
      rating: 4,
      feedback: "Excellent experience. My skin condition improved significantly within weeks of homeopathic treatment.",
      photo: "/images/patient2.jpg",
      date: "2 June 2023"
    }
  ];

  // Auto-scroll effect (same as before)
  useEffect(() => {
    if (!autoScroll || isHovered) return;
    
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [autoScroll, isHovered]);

  const scroll = (direction) => {
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000);
    
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Element name="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="section-title1">Patient Testimonials</h2>
        
        <div className="carousel-wrapper">
          <button 
            onClick={() => scroll('left')}
            className="nav-button1 left"
            aria-label="Scroll left"
          >
            <FaChevronLeft />
          </button>

          <div
            ref={scrollRef}
            className="testimonials-carousel"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="patient-avatar">
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name} 
                      // onError={(e) => {
                      //   e.target.src = 'https://via.placeholder.com/80';
                      // }
                    // }
                    />
                  </div>
                  <div className="patient-info">
                    <h3>{testimonial.name}</h3>
                    <div className="patient-rating">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          color={index < testimonial.rating ? "#FFD700" : "#E0E0E0"}
                        />
                      ))}
                    </div>
                    <p className="testimonial-date">{testimonial.date}</p>
                  </div>
                </div>
                <div className="testimonial-body">
                  <p>"{testimonial.feedback}"</p>
                </div>
                <div className="testimonial-quote-icon">”</div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="nav-button1 right"
            aria-label="Scroll right"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="auto-scroll-indicator">
          <div className={`indicator-dot ${autoScroll && !isHovered ? 'active' : ''}`} />
          <small>{autoScroll && !isHovered ? 'Auto-scrolling' : 'Scroll paused'}</small>
        </div>
      </div>
    </Element>
  );
};

export default HorizontalScroll;
