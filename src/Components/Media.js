import React, { useState, useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import '../Stylesheet/Media.css';

export default function Media() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);
  
  const mediaItems = [
    {
      type: 'image',
      src: 'https://source.unsplash.com/random/800x500?nature',
      alt: 'Nature',
      caption: 'Beautiful Nature'
    },
    {
      type: 'image',
      src: 'https://source.unsplash.com/random/800x500?city',
      alt: 'City',
      caption: 'Urban Landscape'
    },
    {
      type: 'video',
      src: 'https://www.example.com/sample-video.mp4',
      alt: 'Sample Video',
      caption: 'Demo Video'
    },
    {
      type: 'image',
      src: 'https://source.unsplash.com/random/800x500?technology',
      alt: 'Technology',
      caption: 'Tech Innovation'
    },
    {
      type: 'image',
      src: 'https://source.unsplash.com/random/800x500?travel',
      alt: 'Travel',
      caption: 'Adventure Awaits'
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % mediaItems.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, mediaItems.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + mediaItems.length) % mediaItems.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % mediaItems.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <Element name='media' className='media-page'>
      <div className='media-container'>
        <h1 className='media-header'>Media Gallery</h1>
        
        <div className='media-slider-container'>
          <div 
            className='media-slider'
            ref={sliderRef}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {mediaItems.map((item, index) => (
              <div key={index} className='media-slide'>
                {item.type === 'image' ? (
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className='media-image'
                    loading='lazy'
                  />
                ) : (
                  <video 
                    src={item.src} 
                    className='media-video'
                    controls
                    autoPlay={currentIndex === index}
                    muted
                    loop
                  />
                )}
                <div className='media-caption'>{item.caption}</div>
              </div>
            ))}
          </div>
          
          <button className='slider-button prev' onClick={goToPrev}>
            &#10094;
          </button>
          <button className='slider-button next' onClick={goToNext}>
            &#10095;
          </button>
        </div>
        
        <div className='media-dots'>
          {mediaItems.map((_, index) => (
            <span 
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </Element>
  );
}