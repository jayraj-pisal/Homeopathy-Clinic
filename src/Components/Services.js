import React, { useRef, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaChild, FaLeaf, FaFlask, FaHeart, FaBone, FaFemale, FaLungs, FaMedkit } from 'react-icons/fa';
import { Element } from 'react-scroll';
import '../Stylesheet/Services.css';

const HorizontalScroll12 = () => {
  const scrollRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  
  const services = [
    {
      id: 1,
      title: "Child Care",
      icon: <FaChild className="services__icon" />,
      description: "Gentle homeopathic treatments for common childhood ailments like colds, fevers, allergies, and behavioral issues. Our remedies support healthy growth and development without side effects.",
      color: "#eb4d5aff"
    },
    {
      id: 2,
      title: "Skin Treatments",
      icon: <FaLeaf className="services__icon" />,
      description: "Effective solutions for eczema, psoriasis, acne, and other skin conditions. Homeopathy addresses the root cause of skin problems for lasting results.",
      color: "#f18841ff"
    },
    {
      id: 3,
      title: "Hair Care",
      icon: <FaFlask className="services__icon" />,
      description: "Treat hair loss, dandruff, premature graying, and scalp disorders with our specialized homeopathic formulations that nourish from within.",
      color: "#e2473cff"
    },
    {
      id: 4,
      title: "Systemic Disorders",
      icon: <FaHeart className="services__icon" />,
      description: "Comprehensive care for diabetes, hypertension, thyroid disorders, and other chronic conditions through constitutional homeopathic treatment.",
      color: "#b0f148ff"
    },
    {
      id: 5,
      title: "Bone & Joint Care",
      icon: <FaBone className="services__icon" />,
      description: "Natural relief from arthritis, osteoporosis, back pain, and joint inflammation. Our treatments help restore mobility and reduce pain.",
      color: "#42cb99ff"
    },
    {
      id: 6,
      title: "Women's Health",
      icon: <FaFemale className="services__icon" />,
      description: "Specialized care for menstrual disorders, PCOS, menopause, and fertility issues. Homeopathy offers gentle hormonal balance.",
      color: "#718cf8ff"
    },
    {
      id: 7,
      title: "Kidney Health",
      icon: <FaLungs className="services__icon" />,
      description: "Treatment for kidney stones, UTIs, and chronic kidney conditions. Our remedies support renal function and prevent recurrence.",
      color: "#2ac9ccff"
    },
    {
      id: 8,
      title: "Liver Care",
      icon: <FaMedkit className="services__icon" />,
      description: "Detoxification and treatment for fatty liver, hepatitis, and other liver disorders. Homeopathy enhances liver function naturally.",
      color: "#f66e38ff"
    }
  ];

  // Modified auto-scroll effect
  useEffect(() => {
    if (!autoScroll || isHovered) return;
    
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const cardWidth = 350; // Match this with your CSS card width
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: cardWidth + 25, behavior: 'smooth' }); // cardWidth + gap
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [autoScroll, isHovered]);

  const scroll = (direction) => {
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000);
    
    if (scrollRef.current) {
      const cardWidth = 350; // Match this with your CSS card width
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -(cardWidth + 25) : (cardWidth + 25), // cardWidth + gap
        behavior: 'smooth'
      });
    }
  };

  return (
  <>
    <div className="services__container">
         <Element name="services" className="services">
        <h2 className="services__title">Our Specialized Services</h2>
             </Element>  
        <div className="services__wrapper">
          <button 
            onClick={() => scroll('left')}
            className="services__nav-button services__nav-button--left"
            aria-label="Scroll left"
          >
            <FaChevronLeft />
          </button>

          <div
            ref={scrollRef}
            className="services__carousel"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {services.map((service) => (
              <div 
                key={service.id} 
                className="services__card"
                style={{ '--card-color': service.color }}
              >
                <div className="services__icon-container">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <div className="services__description">
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="services__nav-button services__nav-button--right"
            aria-label="Scroll right"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      
   </>
  );
};

export default HorizontalScroll12;