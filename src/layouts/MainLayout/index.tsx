import React from "react";
import { Layout } from "antd";
import { AppHeader } from "./AppHeader";
import { AppSider } from "./AppSider";
import { AppContent } from "./AppContent";

interface IMainLayoutProps {}

export const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
	return (
		<Layout className="main-layout">
			<AppHeader />
			<Layout>
				<AppSider />
				<AppContent>{children}</AppContent>
			</Layout>
		</Layout>
	);
};
