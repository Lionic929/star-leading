import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from '../theme';

const DotsSVG = ({ color = 'white', ...props }) => {
  const computedColor = colors[color] || color;
  return (
    <StyledDotsSVG width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="1.5" cy="1.5" r="1.5" fill={computedColor} />
      <circle cx="14.5" cy="1.5" r="1.5" fill={computedColor} />
      <circle cx="27.5" cy="1.5" r="1.5" fill={computedColor} />
      <circle cx="40.5" cy="1.5" r="1.5" fill={computedColor} />
      <circle cx="53.5" cy="1.5" r="1.5" fill={computedColor} />
      <circle cx="1.5" cy="14.5" r="1.5" fill={computedColor} />
      <circle cx="14.5" cy="14.5" r="1.5" fill={computedColor} />
      <circle cx="27.5" cy="14.5" r="1.5" fill={computedColor} />
      <circle cx="40.5" cy="14.5" r="1.5" fill={computedColor} />
      <circle cx="53.5" cy="14.5" r="1.5" fill={computedColor} />
      <circle cx="1.5" cy="27.5" r="1.5" fill={computedColor} />
      <circle cx="14.5" cy="27.5" r="1.5" fill={computedColor} />
      <circle cx="27.5" cy="27.5" r="1.5" fill={computedColor} />
      <circle cx="40.5" cy="27.5" r="1.5" fill={computedColor} />
      <circle cx="53.5" cy="27.5" r="1.5" fill={computedColor} />
      <circle cx="1.5" cy="40.5" r="1.5" fill={computedColor} />
      <circle cx="14.5" cy="40.5" r="1.5" fill={computedColor} />
      <circle cx="27.5" cy="40.5" r="1.5" fill={computedColor} />
      <circle cx="40.5" cy="40.5" r="1.5" fill={computedColor} />
      <circle cx="53.5" cy="40.5" r="1.5" fill={computedColor} />
      <circle cx="1.5" cy="53.5" r="1.5" fill={computedColor} />
      <circle cx="14.5" cy="53.5" r="1.5" fill={computedColor} />
      <circle cx="27.5" cy="53.5" r="1.5" fill={computedColor} />
      <circle cx="40.5" cy="53.5" r="1.5" fill={computedColor} />
      <circle cx="53.5" cy="53.5" r="1.5" fill={computedColor} />
    </StyledDotsSVG>
  );
};

const StyledDotsSVG = styled.svg`
  position: fixed;
  @media screen and (max-width: 1250px) {
    display: none;
  }
`;

DotsSVG.propTypes = {
  color: PropTypes.string,
};

export const DotsUI = () => {
  return (
    <>
      <FirstDots />
      <SecondDots color="primary" />
      <ThirdDots color="primary" />
    </>
  );
};

const FirstDots = styled(DotsSVG)`
  left: 2%;
  top: 14%;
`;
const SecondDots = styled(DotsSVG)`
  right: 2%;
  top: 25%;
`;
const ThirdDots = styled(DotsSVG)`
  left: 10%;
  bottom: 5%;
`;
