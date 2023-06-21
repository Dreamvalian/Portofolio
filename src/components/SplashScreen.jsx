import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Hero from '../pages/home/Hero';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const splashScreenVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div>
      <AnimatePresence>
        {isVisible ? (
          <motion.div
            className='splash-screen'
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={splashScreenVariants}>
            <h1>Memek</h1>
            <p>basah basah basah</p>
          </motion.div>
        ) : (
          <Hero setIsVisible={setIsVisible} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SplashScreen;
