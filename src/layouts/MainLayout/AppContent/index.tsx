import React from "react";
import { Layout } from 'antd';

const { Content } = Layout;

interface IAppContentProps {}

export const AppContent: React.FC<IAppContentProps> = ({ children }) => {
	return (
		<Layout style={{ padding: "0 24px 24px" }}>
			<Content className=''>
				{ children }
			</Content>
		</Layout>
	);
};
