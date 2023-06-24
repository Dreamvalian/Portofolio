import { motion } from 'framer-motion';
import React from 'react';
import Carousel from '../../components/Carousel';
import Header from '../../components/Header';

const Projects = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: '100%',
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: '-100%',
    },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.5,
  };

  return (
    <React.Fragment>
      <Header />
      <motion.div
        className='projects'
        initial='initial'
        animate='animate'
        exit='exit'
        variants={pageVariants}
        transition={pageTransition}>
        <Carousel className='project-carousel' />
      </motion.div>
    </React.Fragment>
  );
};

export default Projects;
