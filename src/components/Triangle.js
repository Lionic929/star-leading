import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from '../theme';

export const Triangle = ({ width = '70px', height = '100%', direction = 'right top', color = 'dark', ...props }) => {
  return <StyledTriangle width={width} height={height} direction={direction} color={color} {...props} />;
};

Triangle.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  direction: PropTypes.string,
  color: PropTypes.string,
};

const StyledTriangle = styled.div`
  position: absolute;
  right: 0;
  transform: translateX(100%);
  top: 0;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-image: linear-gradient(
    to ${({ direction }) => direction},
    ${({ color }) => colors[color] || color} 0%,
    ${({ color }) => colors[color] || color} 50%,
    transparent 50%
  );
  @media screen and (max-width: 600px) {
    width: ${({ width }) => {
      switch (width) {
        case '80px':
          return '30px';
        case '70px':
          return '25px';
        case '50px':
          return '20px';
        default:
          return null;
      }
    }};
  }
`;
