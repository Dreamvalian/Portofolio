import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Hero from '../pages/home/Home';

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
            <h1>Welcome</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              natus aut quas laboriosam commodi, aperiam, dignissimos enim iure
              unde animi quasi optio, voluptatibus obcaecati! Est ipsam illo
              voluptas corrupti ut.
            </p>
          </motion.div>
        ) : (
          <Hero setIsVisible={setIsVisible} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SplashScreen;
