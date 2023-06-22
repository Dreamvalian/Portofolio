import { motion } from 'framer-motion';
import React from 'react';
import Header from '../../components/Header';

const Projects = () => {
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
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.5,
  };

  return (
    <React.Fragment>
      <Header />
      <motion.div
        className='page-container'
        initial='initial'
        animate='animate'
        exit='exit'
        variants={pageVariants}
        transition={pageTransition}>
        <h1>Project Page</h1>
        <p>
          Welcome to the About page. Here you can learn more about our company
          and team.
        </p>
      </motion.div>
    </React.Fragment>
  );
};

export default Projects;
