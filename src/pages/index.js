import React from 'react';

import Head from './_head';

import { PAGE_TYPE } from '../constants/meta';
import { DotsUI } from '../components';
import { PageLayout, Wrapper, FullHeight, Fade } from '../components/layouts';
import { Main, News, StartPlay, PurchaseCurrency, AboutUs, Sidebar } from '../containers';

const Home = () => {
  return (
    <>
      <Fade>
        <PageLayout align="center">
          <Head id={PAGE_TYPE.HOME} />
          <DotsUI />
          <Sidebar />
          <Wrapper>
            <FullHeight id="main">
              <Main />
            </FullHeight>
            <FullHeight id="news">
              <News />
            </FullHeight>
            <FullHeight id="start_play">
              <StartPlay />
            </FullHeight>
            <FullHeight id="purchase_currency">
              <PurchaseCurrency />
            </FullHeight>
            <FullHeight id="about_us">
              <AboutUs />
            </FullHeight>
          </Wrapper>
        </PageLayout>
      </Fade>
    </>
  );
};

export default Home;
