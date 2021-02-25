import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes } from '../../theme';

export const FullHeight = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

FullHeight.propTypes = {
  children: PropTypes.object,
};

const Container = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  padding: 10px 0 0 calc(${sizes.sidebar.lg} + 80px);

  &:not(:last-of-type) {
    margin-bottom: 60px;
  }
  @media screen and (max-width: 1150px) {
    padding: 10px 0 0 calc(${sizes.sidebar.sm} + 40px);
  }
  @media screen and (max-width: 1050px) {
    min-height: auto;
  }
  @media screen and (max-width: 950px) {
    padding: 10px 0 0 0;
  }
  @media screen and (max-width: 600px) {
    &:not(:last-of-type) {
      margin-bottom: 40px;
    }
  }
`;
