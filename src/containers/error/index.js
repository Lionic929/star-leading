import React from 'react';
import styled from 'styled-components';

export const Error = () => {
  return (
    <Container>
      <ErrorText>ERROR</ErrorText>
    </Container>
  );
};

const Container = styled.div`
  min-height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ErrorText = styled.span`
  color: #fff;
  font-size: 90px;
  font-weight: 400;
`;
