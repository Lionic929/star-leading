import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { staticPath } from '../utils/staticPath';

export const Logo = () => {
  const router = useRouter();

  const handleClickLogo = () => {
    if (router.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };
  return <StyledLogo src={staticPath('/svg/logo.svg')} onClick={handleClickLogo} className="hoverable" />;
};

const StyledLogo = styled.img`
  cursor: pointer;
`;
