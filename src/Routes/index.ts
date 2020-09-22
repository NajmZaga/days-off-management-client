import { AnonymLayout } from "../layouts/AnonymLayout";
import { LoginPage } from "../pages/Login";
import { MainLayout } from "../layouts/MainLayout";
import { ILayout } from "../utils/types";
import { generateRoutes } from "./generate-routes";
import { Dashboard } from "../pages/Dashboard";
import { AddUser } from "../pages/users/AddUser";
import { Settings } from "../pages/Settings";

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
			{
				title: "Settings",
				name: "settings",
        exact: true,
        path: '/settings',
				component: Settings,
				isPublic: false,
			},
			{
				title: "Manage employees",
				name: "manage-emplyee",
				hasSiderLink: true,
				routes: [
					{
						name: "list-employees",
						title: "List Employees",
						exact: true,
						hasSiderLink: true,
						isPublic: false,
						path: '/users'
					},
					{
						name: "add-user",
						title: "Add employee",
						exact: true,
						hasSiderLink: true,
						isPublic: false,
						component: AddUser,
						path: '/add-user'
					}
				],
			},
    ]
  }
];

export const Routes = generateRoutes(routes);
