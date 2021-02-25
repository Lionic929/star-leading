// import { httpRequest } from '../utils/request';

// import { API } from '../constants/api';
import { DONATE } from '.';
import { convertResponseDonateData } from '../api/donate';
import { DONATE_LIST } from '../data/donate';

const setLoading = (loading) => ({
  type: DONATE.LOADING,
  payload: { loading },
});

const setList = (list) => ({
  type: DONATE.SET_LIST,
  payload: { list },
});

export const getDonateList = () => (dispatch) => {
  dispatch(setLoading(true));
  const convertedList = convertResponseDonateData(DONATE_LIST);
  dispatch(setList(convertedList));
  dispatch(setLoading(false));
};
