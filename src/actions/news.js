// import { httpRequest } from '../utils/request';

// import { API } from '../constants/api';
import { NEWS } from '.';
import { NEWS_LIST } from '../data/news';

const setLoading = (loading) => ({
  type: NEWS.LOADING,
  payload: { loading },
});

const setList = (list) => ({
  type: NEWS.SET_LIST,
  payload: { list },
});

export const getNewsList = () => (dispatch) => {
  dispatch(setLoading(true));

  dispatch(setList(NEWS_LIST));
  dispatch(setLoading(false));
};
