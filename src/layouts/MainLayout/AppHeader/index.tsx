import React from "react";
import { Layout, Row, Col, Tooltip, Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";

const { Header } = Layout;

interface IAppHeaderProps {
  onLogout: () => void;
}

export const AppHeader: React.FC<IAppHeaderProps> = ({ onLogout }) => {
  const handleLogout = () => onLogout();
	return (
		<Header className='header'>
			<Row justify='end'>
				<Col>
					<Tooltip title='Logout'>
						<Button onClick={ handleLogout } type='link' icon={<PoweroffOutlined />} />
					</Tooltip>
				</Col>
			</Row>
		</Header>
	);
};
