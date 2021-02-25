import { combineReducers } from 'redux';

import news from './news';
import donate from './donate';
import minigames from './minigames';

export default combineReducers({
  news,
  donate,
  minigames,
});
