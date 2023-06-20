import React, { useEffect, useState } from 'react';
import Hero from '../pages/home/Hero';
import '../styles/components/_splashscreen.scss';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isVisible ? (
        <div className='splash-screen'>
          <h1>Memek</h1>
          <p>basah basah basah</p>
        </div>
      ) : (
        <Hero setIsVisible={setIsVisible} />
      )}
    </div>
  );
};

export default SplashScreen;
