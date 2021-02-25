import { redirect } from '../../utils/navigation';
import { authDecode } from '../../utils/request';
import { ROUTES } from '../../constants/routes';
import { ROLE_TYPE } from '../../constants/static';

export const support = (ctx) => {
  const { res, token } = ctx;
  const user = authDecode(token);
  console.log(user);

  if (user.role !== ROLE_TYPE.SUPPORT) {
    if (res) {
      res.writeHead(302, {
        Location: ROUTES.HOME,
      });
      res.end();
    } else {
      redirect(ROUTES.HOME);
    }
  }
};
