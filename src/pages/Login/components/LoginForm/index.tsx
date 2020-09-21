import React from "react";
import { Card, Form, Input, Button, Checkbox } from "antd";
import { ILoginCredentials } from "../../../../utils/types";

interface ILoginFormProps {
  onLogin: (credentials: ILoginCredentials) => void;
}

export const LoginForm: React.FC<ILoginFormProps> = ({
  onLogin
}) => {

  const onFinish = (values: any) => {
    onLogin(values);
  };

	return (
		<Card title='Login' bordered={false}>
			<Form
				initialValues={{ remember: false }}
				onFinish={onFinish}>
				<Form.Item
          name="email"
					rules={[{ required: true, message: "Please input your email!" }]}>
					<Input type='email' placeholder='Enter your email...' />
				</Form.Item>
				<Form.Item
          name="password"
					rules={[{ required: true, message: "Please input your password!" }]}>
					<Input.Password placeholder='Enter your password...' />
				</Form.Item>
				<Form.Item name='remember' valuePropName='checked'>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>
				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Card>
	);
};
