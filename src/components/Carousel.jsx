import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'react-feather';
import '../styles/components/_carousel.scss';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const moveRight = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % totalSlides);
  };

  const moveLeft = () => {
    setCurrentSlide(prevSlide => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const slides = [
    {
      id: 1,
      title: 'Redesign: BNI Mobile Banking',
      description:
        'This project develops an enhanced BNI Mobile Banking prototype, focusing on color accessibility and Gestalt principles. The prototype aims to provide a more inclusive and user-friendly mobile banking experience for all BNI customers.',
      imageUrl: '/project/project-image-1.png',
    },
    {
      id: 2,
      title: 'Pay Bright: Effortless Modern Payments',
      description:
        'Pay Bright offers a seamless and hassle-free payment experience through its advanced POS system. Pay Bright makes transactions effortless for both merchants and customers.',
      imageUrl: '/project/project-image-2.png',
    },
    {
      id: 3,
      title: 'Lbro: Library Management Program',
      description:
        'A user-friendly program that simplifies book browsing and borrowing for users while aiding library staff in efficient administration and information management.',
      imageUrl: '/project/project-image-3.png',
    },
    {
      id: 4,
      title: 'VinoVault: Wine Warehouse Management',
      description:
        'VinoVault simplifies wine warehouse operations with user-friendly tools and features. ',
      imageUrl: '/project/project-image-4.png',
    },
    {
      id: 5,
      title: 'WoodCraft: Authentic Wood Products',
      description:
        ' WoodCraft brings you high-quality Indonesian wood products with diverse models, all available for direct online ordering. Experience the convenience of shopping for authentic wood products through our platform.',
      imageUrl: '/project/project-image-5.png',
    },
    {
      id: 6,
      title: 'Faza Design: Architecture',
      description:
        'Architecture and design studio with a passion for excellence, their extensive portfolio showcases stunning decoration and furniture design projects.',
      imageUrl: '/project/project-image-6.png',
    },
  ];

  const totalSlides = slides.length;
  const activeSlide = slides[currentSlide];

  return (
    <div className='carousel'>
      <div className='carousel__nav'>
        <span id='moveLeft' className='carousel__arrow' onClick={moveLeft}>
          <ArrowLeft className='carousel__icon' size={24} />
        </span>
        <span id='moveRight' className='carousel__arrow' onClick={moveRight}>
          <ArrowRight className='carousel__icon' size={24} />
        </span>
      </div>
      {slides.map(slide => (
        <div
          key={slide.id}
          className={`carousel-item ${
            slide.id === activeSlide.id ? 'active' : ''
          }`}>
          <div
            className='carousel-item__image'
            style={{ backgroundImage: `url(${slide.imageUrl})` }}></div>

          <div className='carousel-item__info'>
            <div className='carousel-item__container'>
              <h1 className='carousel-item__title'>{slide.title}</h1>
              <p className='carousel-item__description'>{slide.description}</p>
              <a href='/' className='carousel-item__btn'>
                {slide.id === activeSlide.id
                  ? 'Explore the tour'
                  : 'Read the article'}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
