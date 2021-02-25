import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { sizes, colors } from '../../theme';
import { APP_PAGE_ID } from '../../constants';
import { staticPath } from '../../utils/staticPath';
import { Header } from '../../containers';

export const PageLayout = ({ align = 'top', children }) => {
  return (
    <>
      <Header />
      <Page id={APP_PAGE_ID}>
        <Main align={align}>{children}</Main>
      </Page>
    </>
  );
};

const Page = styled.div`
  position: relative;
  background-image: url(${staticPath('/img/main-bg.png')});
  background-attachment: fixed;
  background-color: #000;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 80px 0 50px;
  min-height: 100vh;
  @media screen and (max-width: 600px) {
    padding: 80px 0 25px;
  }
`;
const Main = styled.main`
  width: 100%;
  flex-grow: 1;
`;

PageLayout.propTypes = {
  children: PropTypes.array.isRequired,
  align: PropTypes.string,
};
