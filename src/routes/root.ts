import { IRoute } from "interfaces/route";
import baseURL from "constants/baseURL";
import Dashboard from "pages";

export const base: IRoute = {
  name: "Dashboard",
  protected: true,
  path: baseURL.root,
  component: Dashboard,
};

export default base;
