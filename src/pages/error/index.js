import React from 'react';

import { PageLayout } from '../../components/layouts';
import Head from '../_head';
import { Error } from '../../containers';

import { PAGE_TYPE } from '../../constants/meta';

const ErrorPage = () => {
  return (
    <PageLayout>
      <Head id={PAGE_TYPE.ERROR} />
      <Error />
    </PageLayout>
  );
};

export default ErrorPage;
