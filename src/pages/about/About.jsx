import { motion } from 'framer-motion';
import React from 'react';
import Header from '../../components/Header';

const About = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
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
        <h1>About Page</h1>
        <p>
          Welcome to the About page. Here you can learn more about our company
          and team.
        </p>
      </motion.div>
    </React.Fragment>
  );
};

export default About;
