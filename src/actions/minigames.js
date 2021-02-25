import { httpRequest } from '../utils/request';

import { API } from '../constants/api';
import { MINIGAMES } from '.';

const setLoading = (loading) => ({
  type: MINIGAMES.LOADING,
  payload: { loading },
});

const setList = (list) => ({
  type: MINIGAMES.SET_LIST,
  payload: { list },
});

export const getMinigamesList = ({ withoutLoading = false } = {}) => (dispatch) => {
  !withoutLoading && dispatch(setLoading(true));
  const list = [
    {
      id: 0,
      title: 'Rust',
      online: 0,
      total: 100,
    },
    {
      id: 1,
      title: 'MiniGames',
      online: 0,
      total: 100,
    },
    {
      id: 2,
      title: 'RaidPVP',
      online: 50,
      total: 100,
    },
    {
      id: 3,
      title: 'Prison',
      online: 0,
      total: 100,
    },
    {
      id: 4,
      title: 'Creative',
      online: 0,
      total: 100,
    },
  ];
  dispatch(setList(list));
  !withoutLoading && dispatch(setLoading(false));
};
