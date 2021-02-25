import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Text } from '../index';
import { sizes } from '../../theme';

export const Subtitle = ({ tid, ...props }) => {
  return (
    <StyledSubtitle {...props}>
      <Text tid={tid} />
    </StyledSubtitle>
  );
};

Subtitle.propTypes = {
  tid: PropTypes.string.isRequired,
};

const StyledSubtitle = styled.h3`
  color: #fff;
  line-height: 148%;
  font-weight: 500;
  font-size: ${sizes.font.medium.lg};
  @media screen and (max-width: 950px) {
    font-size: ${sizes.font.medium.sm};
  }
`;
