import React from 'react';
import styled from 'styled-components';

import { CircularProgress } from '@material-ui/core';

export const Loader = () => {
  return (
    <Container>
      <CircularProgress color="primary" />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
