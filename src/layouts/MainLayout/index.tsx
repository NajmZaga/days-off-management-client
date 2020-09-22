import React from "react";
import { Layout } from "antd";
import { AppHeader } from "./AppHeader";
import { AppSider } from "./AppSider";
import { AppContent } from "./AppContent";

interface IMainLayoutProps {}

export const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
	return (
		<Layout className="main-layout">
			<AppSider />
			<Layout className="content-layout">
				<AppHeader />
				<AppContent>{children}</AppContent>
			</Layout>
		</Layout>
	);
};
