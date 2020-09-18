import { AnonymLayout } from "../layouts/AnonymLayout";
import { Login } from "../pages/Login";
import { MainLayout } from "../layouts/MainLayout";
import { ILayout } from "../utils/types";
import { generateRoutes } from ".";

export const routes: ILayout[] = [
	{
		layout: AnonymLayout,
		routes: [
			{
				title: "Login",
				name: "login",
				exact: true,
				component: Login,
			},
		],
  },
  {
    layout: MainLayout,
    routes: [

    ]
  }
];

export const Routes = generateRoutes(routes);
