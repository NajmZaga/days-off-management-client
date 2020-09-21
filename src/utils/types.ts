import { RouteComponentProps } from "react-router-dom";
import { AnonymLayout } from "../layouts/AnonymLayout";
import { MainLayout } from "../layouts/MainLayout";

export interface IRoute {
	title: string;
	name: string;
	component: any;
	exact: boolean;
	path?: string;
	isPublic?: boolean;
	icon?: string;
	routes?: IRoute[];
}

export interface ILayout {
	layout: typeof AnonymLayout | typeof MainLayout;
	routes: IRoute[];
}

export interface IPageProps extends RouteComponentProps<{}> {
  route: IRoute;
}

export interface ICredentials {
  email: string;
  password: string;
}

export interface ILoginCredentials extends ICredentials {
  remember: boolean;
}

export interface IErrors {
  [key: string]: string[];
}