import { ROUTES } from '../constants/routes';

import initRouter from './router';

import { privated, auth } from './redirects';

const routeSwitch = initRouter({
  [ROUTES.HOME]: [privated],
  [ROUTES.LOGIN]: [auth],
  [ROUTES.LOGOUT]: [privated],
  [ROUTES.SIGNUP]: [auth],
  [ROUTES.SETTINGS]: [privated],
  [ROUTES.ACCOUNT_RECOVERY_LOGIN]: [auth],
  [ROUTES.ACCOUNT_RECOVERY_PGP]: [auth],
  [ROUTES.ACCOUNT_RECOVERY_PASSWORD]: [auth],
});

export default async (ctx) => {
  await routeSwitch(ctx.pathname, ctx);
};
