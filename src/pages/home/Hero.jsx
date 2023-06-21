import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  Instagram,
  Linkedin,
  Mail,
  Smartphone,
} from 'react-feather';
import { Link } from 'react-router-dom';
import MyImage from '../../assets/image1.jpeg';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [icon, setIcon] = useState(<ArrowRightCircle strokeWidth={1} />);
  const [isSliderVisible, setIsSliderVisible] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setIsSliderVisible(!isOpen);
    setIcon(
      isOpen ? (
        <ArrowRightCircle strokeWidth={1} />
      ) : (
        <ArrowLeftCircle strokeWidth={1} />
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

  const renderLeftHeroContent = () => {
    return (
      <div className={`left-hero ${isOpen ? 'open' : ''}`} id='left-hero'>
        <motion.div
          className='cover-hero'
          id='cover-hero'
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 32 }}>
          <img className='left-hero-cover' src={MyImage} alt='Cover 1' />
          <img className='left-hero-cover-2' src={MyImage} alt='Cover 2' />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: -32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 32 }}>
          Greetings! I'm Hanif
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 32 }}>
          I'm a student of Information System Bachelor's Degree interested in
          <strong> UI/UX & Front-End Development.</strong>
          <br />
          <br />
          Check out my latest work and explore my skills and experience in this
          sleek new layout. See my projects, learn about my process, and get a
          sense of my style. Enjoy!
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -32 }}>
          Check out <Link to='#'>about me</Link> or see my{' '}
          <Link to='#'>resume</Link> here.
        </motion.p>
      </div>
    );
  };

  const renderRightHeroContent = () => {
    return (
      <div className='right-hero' id='right-hero'>
        <motion.button
          className='toggle-button'
          onClick={toggleOpen}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -8 }}>
          {icon}
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className='content'
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 64 }}>
              <div className='right-hero-content'>
                <h3>Here's my contact</h3>
                <p className='right-hero-content'>
                  <span>
                    <Instagram strokeWidth={1} />
                    @hanifnnugraha_
                  </span>
                  <span>
                    <Linkedin strokeWidth={1} />
                    hanifnugraha
                  </span>
                  <span>
                    <Smartphone strokeWidth={1} /> +62 823 1667 6968
                  </span>
                  <span>
                    <Mail strokeWidth={1} />
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
        {/* {isSliderVisible && ( // Use isSliderVisible to conditionally render the slider container */}
        <motion.div
          className='slider-container'
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 32 }}>
          Henceut Beureum
        </motion.div>
      </div>
    );
  };

  return (
    <section className='hero' id='hero'>
      {renderLeftHeroContent()}
      {renderRightHeroContent()}
    </section>
  );
};

Hero.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  isSliderVisible: PropTypes.bool.isRequired,
};

export default Hero;
