import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NewsView } from './View';
import { getNewsList } from '../../actions/news';

export const News = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNewsList());
  }, []);
  return <NewsView list={list} loading={loading} />;
};
