import { AnonymLayout } from "../layouts/AnonymLayout";
import { LoginPage } from "../pages/Login";
import { MainLayout } from "../layouts/MainLayout";
import { ILayout } from "../utils/types";
import { generateRoutes } from "./generate-routes";
import { Dashboard } from "../pages/Dashboard";

export const routes: ILayout[] = [
	{
		layout: AnonymLayout,
		routes: [
			{
				title: "Login",
				name: "login",
        exact: true,
        path: '/login',
				component: LoginPage,
				isPublic: true,
			},
		],
  },
  {
    layout: MainLayout,
    routes: [
			{
				title: "Dashboard",
				name: "dashboard",
        exact: true,
        path: '/',
				component: Dashboard,
				isPublic: false,
			},
    ]
  }
];

export const Routes = generateRoutes(routes);
