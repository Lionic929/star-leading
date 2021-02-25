import { MINIGAMES } from '../actions';

const initialState = {
  list: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MINIGAMES.LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case MINIGAMES.SET_LIST:
      return {
        ...state,
        list: action.payload.list,
      };
    default:
      return state;
  }
};
