import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import MyImage from '../../assets/image1.jpeg';
import Header from '../../components/Header';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [icon, setIcon] = useState(<Icon.ArrowRightCircle strokeWidth={1} />);
  const [isSliderVisible, setIsSliderVisible] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setIsSliderVisible(!isOpen);
    setIcon(
      isOpen ? (
        <Icon.ArrowRightCircle strokeWidth={1} />
      ) : (
        <Icon.ArrowLeftCircle strokeWidth={1} />
      )
    );
  };

  const handleChange = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email);
  };

  const renderLeftHeroContent = () => (
    <div className={`left-hero ${isOpen ? 'open' : ''}`} id='left-hero'>
      <motion.div
        className='cover-hero'
        id='cover-hero'
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: '0%' }}
        exit={{ opacity: 0, x: '100%' }}>
        <img className='left-hero-cover' src={MyImage} alt='Cover 1' />
        <img className='left-hero-cover-2' src={MyImage} alt='Cover 2' />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: 1, y: '0%' }}
        exit={{ opacity: 0, y: '100%' }}>
        Greetings! I'm Hanif
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: '0%' }}
        exit={{ opacity: 0, x: '100%' }}>
        I'm a student of Information System Bachelor's Degree interested in
        <strong> UI/UX & Front-End Development.</strong>
        <br />
        <br />
        Check out my latest work and explore my skills and experience in this
        sleek new layout. See my projects, learn about my process, and get a
        sense of my style. Enjoy!
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: '0%' }}
        exit={{ opacity: 0, x: '-100%' }}>
        Check out <Link to='#'>about me</Link> or see my{' '}
        <Link to='#'>resume</Link> here.
      </motion.p>
    </div>
  );

  const renderRightHeroContent = () => (
    <div className='right-hero' id='right-hero'>
      <motion.button
        className='toggle-button'
        onClick={toggleOpen}
        initial={{ opacity: 0, x: '-8%' }}
        animate={{ opacity: 1, x: '0%' }}
        exit={{ opacity: 0, x: '-8%' }}>
        {icon}
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='content'
            initial={{ opacity: 0, x: '0%' }}
            animate={{ opacity: 1, x: '0%' }}
            exit={{ opacity: 0, x: '-100%' }}>
            <div className='right-hero-content'>
              <h3>Here's my contact</h3>
              <p className='right-hero-content'>
                <span>
                  <Icon.Instagram strokeWidth={1} />
                  @hanifnnugraha_
                </span>
                <span>
                  <Icon.Linkedin strokeWidth={1} />
                  hanifnugraha
                </span>
                <span>
                  <Icon.Smartphone strokeWidth={1} /> +62 823 1667 6968
                </span>
                <span>
                  <Icon.Mail strokeWidth={1} />
                  hanifnugraha69@gmail.com
                </span>
                <form className='email-form' onSubmit={handleSubmit}>
                  <input
                    className='email-input'
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={handleChange}
                  />
                  <button className='submit-button' type='submit'>
                    Submit
                  </button>
                </form>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!isOpen && (
        <motion.div
          className='slider-container'
          initial={{ opacity: 0, x: '-32%' }}
          animate={{ opacity: 1, x: '0%' }}
          exit={{ opacity: 0, x: '32%' }}>
          Image Slider [WIP]
        </motion.div>
      )}
    </div>
  );

  return (
    <React.Fragment>
      <Header />
      <section className='hero' id='hero'>
        {renderLeftHeroContent()}
        {renderRightHeroContent()}
      </section>
    </React.Fragment>
  );
};

export default Hero;
