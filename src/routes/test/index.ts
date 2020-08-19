import { IRoute } from "interfaces/route";
import Test from "pages/Test";
import tries from "./try";
import baseURL from "constants/baseURL";

export const base: IRoute =  {
  name: 'Test',
  protected: false,
  path: baseURL.test,
  component: Test,
};

export default [
  base,
  tries
]