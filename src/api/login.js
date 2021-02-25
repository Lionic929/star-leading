import { LOGIN } from '../constants/fields';

export const convertLoginData = ({ login, password }) => ({
  [LOGIN.LOGIN]: login,
  [LOGIN.PASSWORD]: password,
});
