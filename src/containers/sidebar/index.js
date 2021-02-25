import React, { useState, useEffect } from 'react';

import { SidebarView } from './View';
import { isHalfElementInViewport } from '../../utils/isHalfElementInViewport';
import { sections } from '../../constants/sections';

export const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    checkActiveSection();

    const scrollListener = () => {
      checkActiveSection();
    };

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  const checkActiveSection = () => {
    const linkInViewport = sections.find(({ href }) => isHalfElementInViewport(href.slice(1)));
    if (linkInViewport) {
      setActiveSection(linkInViewport.href);
    } else {
      setActiveSection('');
    }
  };

  return <SidebarView sections={sections} activeSection={activeSection} />;
};
