import { IRoute } from "interfaces/route";

export default (routes: IRoute[]) => ({
  protectedRoutes: routes.filter(route => route.protected),
  unprotectedRoutes: routes.filter(route => !route.protected),
});