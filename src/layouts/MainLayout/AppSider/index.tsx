import React from "react";
import { Layout, Menu } from "antd";
import { IRoute, ILayout } from "../../../utils/types";
import { Link } from "react-router-dom";
import { routes } from "../../../Routes";

const { SubMenu } = Menu;
const { Sider } = Layout;

interface IAppSiderProps {}

const generateSubMenus = (subRoutes: IRoute[]) => {
	if (!subRoutes) return [];
	return subRoutes.map((r) => {
		if (!r.hasSiderLink) return null;
		if (!r.routes) {
			if (!r.path) return null;
			// const isPermitted = siderPermissionHandler(permissions, r.resources);
			return (
				<Menu.Item key={r.path}>
					<Link to={r.path}>
						<span>{r.title}</span>
					</Link>
				</Menu.Item>
			);
		}
		const title = (
			<span>
				<span>{r.title}</span>
			</span>
		);
		return (
			<SubMenu key={r.name} title={title}>
				{generateSubMenus(r.routes)}
			</SubMenu>
		);
	});
};

const generateMenu = (layouts: ILayout[]) => {
	return layouts.map((layout) => generateSubMenus(layout.routes));
};

export const AppSider: React.FC<IAppSiderProps> = () => {
	return (
		<Sider width={250} className='site-layout-background'>
			<div className='logo-wrapper'>
				<Link to="/">
					<img src='/images/logo.png' alt='Days off | logo' />
				</Link>
			</div>
			<Menu
				mode='inline'
				defaultSelectedKeys={["1"]}
				defaultOpenKeys={["sub1"]}>
				{generateMenu(routes)}
			</Menu>
		</Sider>
	);
};
