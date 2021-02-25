import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Text } from '../index';
import { sizes, colors } from '../../theme';

export const MainTitle = ({ tid, ...props }) => {
  return (
    <Title {...props}>
      <Text tid={tid} />
    </Title>
  );
};

MainTitle.propTypes = {
  tid: PropTypes.string.isRequired,
};

const Title = styled.h2`
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${sizes.font.large.lg};
  line-height: 110%;
  color: ${colors.primary};
  @media screen and (max-width: 950px) {
    font-size: ${sizes.font.large.sm};
  }
`;
