import React from "react";
import { Layout } from "antd";
import { AppHeader } from "./AppHeader";
import { AppSider } from "./AppSider";
import { AppContent } from "./AppContent";
import { GlobalState } from "../../store";
import { connect, ConnectedProps } from "react-redux";
import { authLogout } from '../../store/auth/actions';

interface IMainLayoutProps {}

const MainLayoutInner: React.FC<
	IMainLayoutProps & ConnectedProps<typeof connector>
> = ({ children, authLogout: authLogoutAction }) => {
	const logout = () => authLogoutAction();

	return (
		<Layout className='main-layout'>
			<AppSider />
			<Layout className='content-layout'>
				<AppHeader onLogout={logout} />
				<AppContent>{children}</AppContent>
			</Layout>
		</Layout>
	);
};

const mapStateToProps = (state: GlobalState) => ({});

const mapDispatchToProps = {
	authLogout,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export const MainLayout = connector(MainLayoutInner);
