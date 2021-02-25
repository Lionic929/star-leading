import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Text } from '../index';
import { colors } from '../../theme';

export const SectionTitle = ({ tid, number }) => {
  return (
    <Container>
      <Line />
      <StyledTitle>
        <Text tid={tid} />
      </StyledTitle>
      <Number>{number}</Number>
    </Container>
  );
};

SectionTitle.propTypes = {
  tid: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

const Container = styled.div`
  display: none;
  @media screen and (max-width: 950px) {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
  }
`;
const Line = styled.div`
  background-color: ${colors.primary};
  width: 70px;
  height: 1px;
  margin-right: 20px;
`;
const StyledTitle = styled.h2`
  font-size: 24px;
  line-height: 160%;
  color: #ffffff;
`;
const Number = styled.span`
  margin-left: auto;
  color: ${colors.primary};
  font-weight: bold;
  font-size: 24px;
`;
