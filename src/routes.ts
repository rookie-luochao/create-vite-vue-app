import { RouteRecordRaw } from "vue-router";
import { loginRoutes } from "./login/routes";
import { mainRoutes } from "./layouts/routes";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main",
  },
  loginRoutes,
  mainRoutes,
];
