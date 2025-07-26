import React from 'react';
import { FaChild, FaFemale, FaLeaf, FaHeart, FaBone, FaFlask, FaLungs,FaMedkit } from 'react-icons/fa';
import { Element } from 'react-scroll';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Child Care",
      icon: <FaChild className="service-icon" />,
      description: "Gentle homeopathic treatments for common childhood ailments like colds, fevers, allergies, and behavioral issues. Our remedies support healthy growth and development without side effects.",
      color: "#eb4d5aff"
    },
    {
      id: 2,
      title: "Skin Treatments",
      icon: <FaLeaf className="service-icon" />,
      description: "Effective solutions for eczema, psoriasis, acne, and other skin conditions. Homeopathy addresses the root cause of skin problems for lasting results.",
      color:  "#f18841ff"
    },
    {
      id: 3,
      title: "Hair Care",
      icon: <FaFlask className="service-icon" />,
      description: "Treat hair loss, dandruff, premature graying, and scalp disorders with our specialized homeopathic formulations that nourish from within.",
      color: "#e2473cff"
    },
    {
      id: 4,
      title: "Systemic Disorders",
      icon: <FaHeart className="service-icon" />,
      description: "Comprehensive care for diabetes, hypertension, thyroid disorders, and other chronic conditions through constitutional homeopathic treatment.",
      color: "#b0f148ff"
    },
    {
      id: 5,
      title: "Bone & Joint Care",
      icon: <FaBone className="service-icon" />,
      description: "Natural relief from arthritis, osteoporosis, back pain, and joint inflammation. Our treatments help restore mobility and reduce pain.",
      color: "#42cb99ff"
    },
    {
      id: 6,
      title: "Women's Health",
      icon: <FaFemale className="service-icon" />,
      description: "Specialized care for menstrual disorders, PCOS, menopause, and fertility issues. Homeopathy offers gentle hormonal balance.",
      color: "#718cf8ff"
    },
    {
      id: 7,
      title: "Kidney Health",
      icon: <FaLungs className="service-icon" />,
      description: "Treatment for kidney stones, UTIs, and chronic kidney conditions. Our remedies support renal function and prevent recurrence.",
      color: "#2ac9ccff"
    },
    {
      id: 8,
      title: "Liver Care",
      icon: <FaMedkit className="service-icon" />,
      description: "Detoxification and treatment for fatty liver, hepatitis, and other liver disorders. Homeopathy enhances liver function naturally.",
      color: "#f66e38ff"
    }
  ];

  return (
<>
    <Element name="services" className="services-page">
      {/* Rest of your Services component remains the same */}
      <div className="services-header">
        <h1>Our Specialized Services</h1>
          <p>Holistic homeopathic treatments for complete wellness</p>
      </div>
    </Element>

    <div className="services-page">
      <div className="services-container">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="service-card"
            style={{ '--card-color': service.color }}
          >
            <div className="service-icon-container">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <h2>Ready to Experience Natural Healing?</h2>
        <p>Book a consultation with our homeopathic specialist today</p>
        <button className="cta-button">Schedule Appointment</button>
      </div>
    </div>
    </>
  );
};

export default Services;