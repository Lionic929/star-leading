import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Wrapper = ({ children, ...props }) => {
  return <StyledWrapper {...props}>{children}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
