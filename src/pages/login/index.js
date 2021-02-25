import React from 'react';

import Head from '../_head';

import { PAGE_TYPE } from '../../constants/meta';
import { PageLayout } from '../../components/layouts';

export default () => {
  return (
    <PageLayout align="center">
      <Head id={PAGE_TYPE.LOGIN} />
      Log in
    </PageLayout>
  );
};
