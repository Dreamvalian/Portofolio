import { motion } from 'framer-motion';
import React from 'react';
import Header from '../../components/Header';

const About = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: '-100%',
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: '100%',
    },
  };

  const pageTransition = {
    duration: 0.5,
  };

  return (
    <React.Fragment>
      <Header />
      <motion.div
        className='about'
        initial='initial'
        animate='animate'
        exit='exit'
        variants={pageVariants}
        transition={pageTransition}>
        Test
      </motion.div>
    </React.Fragment>
  );
};

export default About;
