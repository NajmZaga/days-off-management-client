import React from "react";
import { Layout, Divider } from "antd";
import { IPageProps } from "../../../utils/types";
import { PageTitle } from "../../../components/PageTitle";
import { UserForm } from "./components/UserForm";

interface IAddUserProps extends IPageProps {}

export const AddUser: React.FC<IAddUserProps> = ({ route }) => {
	return (
		<Layout className='data-layout'>
			<PageTitle title={route.title} />
			<Divider className='title' orientation='left' plain>
				{route.title}
			</Divider>
			<UserForm />
		</Layout>
	);
};
