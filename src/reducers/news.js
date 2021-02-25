import { NEWS } from '../actions';

const initialState = {
  list: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEWS.LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case NEWS.SET_LIST:
      return {
        ...state,
        list: action.payload.list,
      };
    default:
      return state;
  }
};
