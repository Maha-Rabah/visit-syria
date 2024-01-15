import React, { useState } from 'react';
import './SliderAbout.css';

export default function SliderAbout({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = Math.ceil(images.length / 3); 
    const slidesPerPage = 3;
    const handleNavigate = (index) => {
    setCurrentSlide(index);
    };
    
    const SliderContent = ({ images, currentSlide }) => {
    const startIndex = currentSlide * slidesPerPage;
    const endIndex = startIndex + slidesPerPage; 
    const currentImages = images.slice(startIndex, endIndex); 
    return (
    <div className='slider'>
        <div className="slider-content">
            <div className='main-image'>
                <img src={currentImages[0]} alt={`slide-${currentSlide}`} />
            </div>
            <div className='container-mini-slider'>
                <div className="mini-slides">
                    {currentImages.map((image, index) => (
                    <img
                        key={image}
                        src={image}
                        alt={`slide-${startIndex + index}`}
                        className={`slide ${index === 0 ? 'active' : ''}`}
                        onClick={() => handleNavigate(currentSlide)}
                    />
                    ))}
                </div>
            </div>

        </div>
            <div className="slider-buttons">
                {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                    key={index}
                    className={`slider-button ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => handleNavigate(index)}
                ></button>
                ))}
            </div>
    </div>
    );
    };

    return <SliderContent images={images} currentSlide={currentSlide} />;
}