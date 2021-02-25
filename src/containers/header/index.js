import React, { useState, useEffect } from 'react';

import { HeaderView } from './View';

export const Header = () => {
  const [isPageScrolled, setIsPageScrolled] = useState(false);

  const checkIsPageScrolled = () => {
    const { scrollY } = window;

    if (scrollY > 0) {
      setIsPageScrolled(true);
    } else if (scrollY === 0) {
      setIsPageScrolled(false);
    }
  };

  useEffect(() => {
    checkIsPageScrolled();

    const scrollListener = () => {
      checkIsPageScrolled();
    };

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return <HeaderView isPageScrolled={isPageScrolled} />;
};
