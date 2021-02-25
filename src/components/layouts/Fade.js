import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes, fade } from '../../theme';

export const Fade = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

const Container = styled.div`
  animation: ${fade} ${sizes.transition.default};
`;

Fade.propTypes = {
  children: PropTypes.object,
};
