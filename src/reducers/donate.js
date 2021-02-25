import { DONATE } from '../actions';

const initialState = {
  list: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DONATE.LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case DONATE.SET_LIST:
      return {
        ...state,
        list: action.payload.list,
      };
    default:
      return state;
  }
};
