import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Logo } from '../../components';
import { sizes } from '../../theme';
import { Wrapper } from '../../components/layouts';
import { HeaderDesktop } from './Desktop';
import { HeaderMobile } from './Mobile';

export const HeaderView = ({ isPageScrolled }) => {
  const [isMobile, setIsMobile] = useState(null);

  const checkIsMobile = () => {
    setIsMobile(typeof window !== 'undefined' && window.matchMedia('(max-width: 700px)').matches);
  };

  useEffect(() => {
    checkIsMobile();

    const resizeListener = () => {
      checkIsMobile();
    };

    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <Container id="header" isPageScrolled={isPageScrolled}>
      <Wrapper>
        <Inner>
          <Logo />
          {isMobile !== null ? isMobile === true ? <HeaderMobile /> : <HeaderDesktop /> : null}
        </Inner>
      </Wrapper>
    </Container>
  );
};

HeaderView.propTypes = {
  isPageScrolled: PropTypes.bool.isRequired,
};

const Container = styled.header`
  width: 100%;
  z-index: 10;
  position: fixed;
  background-color: black;
  transition: ${sizes.transition.default};
`;
const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;
