import React from "react";
import { Form, Input, Divider, Button } from "antd";

interface IRolesProps {
  onRoleSubmit: (role: string) => void;
}

const Roles: React.FC<IRolesProps> = ({
  onRoleSubmit,
}) => {
	const onFinish = (values: any) => onRoleSubmit(values.role);

	return (
		<>
			<Divider orientation='center'>Roles</Divider>
			<Form onFinish={onFinish}>
				<Form.Item
					name='role'
					rules={[{ required: true, message: "Please enter a role!" }]}>
					<Input type='text' placeholder='Add a new role...' />
				</Form.Item>
				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Add new role
					</Button>
				</Form.Item>
			</Form>
			<Divider type='vertical' />
		</>
	);
};

export default Roles;
