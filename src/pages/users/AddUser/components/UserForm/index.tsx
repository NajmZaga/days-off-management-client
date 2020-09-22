import React from "react";
import { Form, Input, Button, DatePicker, Row, Col, Select } from "antd";

const { RangePicker } = DatePicker;
const { Option } = Select;

interface IUserFormProps {}

export const UserForm: React.FC<IUserFormProps> = ({}) => {
  const onFinish = (values: any) => {};
  
  const handleRoleChange = () => {};

	return (
		<Form name='basic' initialValues={{ remember: true }} onFinish={onFinish}>
			<Row gutter={16}>
				<Col span={8}>
					<Form.Item
						name='firstName'
						rules={[{ required: true, message: "Please enter a first name!" }]}>
						<Input type='text' placeholder="Employee's first name..." />
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item
						name='lastName'
						rules={[{ required: true, message: "Please enter a last name!" }]}>
						<Input type='text' placeholder="Employee's last name..." />
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item
						name='email'
						rules={[{ required: true, message: "Please enter an email!" }]}>
						<Input type='email' placeholder="Employee's email..." />
					</Form.Item>
				</Col>
			</Row>

			<Row gutter={16}>
				<Col span={8}>
					<Form.Item
						name='startDate'
						rules={[{ required: true, message: "Please enter start date!" }]}>
						<RangePicker />
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item
						name='role'
						rules={[{ required: true, message: "Please select a role!" }]}>
						<Select
							defaultValue='lucy'
							onChange={handleRoleChange}>
							<Option value='jack'>Jack</Option>
							<Option value='lucy'>Lucy</Option>
							<Option value='Yiminghe'>yiminghe</Option>
						</Select>
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item
						name='email'
						rules={[{ required: true, message: "Please enter an email!" }]}>
						<Input type='email' placeholder="Employee's email..." />
					</Form.Item>
				</Col>
			</Row>

			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};
