import React from "react";
import { IPageProps } from "../../utils/types";
import { Layout, Divider, Row, Col } from "antd";
import { PageTitle } from "../../components/PageTitle";
import Roles from "./components/Roles";
import { GlobalState } from "../../store";
import { connect, ConnectedProps } from "react-redux";

interface ISettingsProps extends IPageProps {}

const SettingsInner: React.FC<ISettingsProps & ConnectedProps<typeof connector>> = ({ route }) => {

  /**
   * Roles
   */
  const handleRolesSettings = (role: string) => console.log(role);

	return (
		<Layout className='data-layout'>
			<PageTitle title={route.title} />
			<Divider className='title' orientation='left' plain>
				{route.title}
			</Divider>

			<Row gutter={ 18 }>
				<Col span={ 8 }>
					<Roles onRoleSubmit={ handleRolesSettings } />
				</Col>
			</Row>
		</Layout>
	);
};

const mapStateToProps = (state: GlobalState) => ({

});

const mapDispatchToProps = {

};

const connector = connect(mapStateToProps, mapDispatchToProps);

export const Settings = connector(SettingsInner);
