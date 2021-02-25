import React from 'react';
import styled from 'styled-components';

import { ButtonPrimary } from '../../components';
import { ROUTES } from '../../constants/routes';

export const HeaderDesktop = () => (
  <AuthLinks>
    <a href={ROUTES.LOGIN} target="_blank" rel="noopener noreferrer">
      <HeaderButton tid="HEADER.LOGIN" size="big" outlined iconSrc="/svg/log-in.svg" />
    </a>
    <a href={ROUTES.SIGNUP} target="_blank" rel="noopener noreferrer">
      <HeaderButton tid="HEADER.SIGNUP" size="big" iconSrc="/svg/sign-up.svg" />
    </a>
  </AuthLinks>
);

const AuthLinks = styled.nav`
  display: flex;
`;
const HeaderButton = styled(ButtonPrimary)``;
