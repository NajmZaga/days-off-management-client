import React, { useEffect } from "react";
import { Row, Col } from "antd";
import "./login.scss";
import { LoginForm } from "./components/LoginForm";
import { ILoginCredentials, IPageProps } from "../../utils/types";
import { GlobalState } from "../../store";

import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { authLogin } from "../../store/auth/actions";
import { PageTitle } from "../../components/PageTitle";

interface ILoginProps extends IPageProps {}

const Login: React.FC<
	ILoginProps & RouteComponentProps & ConnectedProps<typeof connector>
> = ({ route, isLoggedIn, history, authLogin: authLoginAction }) => {
	useEffect(() => {
		if (isLoggedIn) {
			history.push("/");
		}
	}, [isLoggedIn, history]);

	const handleLogin = (credentials: ILoginCredentials) => {
		authLoginAction(credentials);
	};

	return (
		<>
			<PageTitle title={route.title} />
			<div className='login-page flex-container'>
				<Row justify='center'>
					<Col>
						<LoginForm onLogin={handleLogin} />
					</Col>
				</Row>
			</div>
		</>
	);
};

const mapStateToProps = (state: GlobalState) => ({
	isLoggedIn: state.authorization.isLoggedIn,
});

const mapDispatchToProps = { authLogin };

const connector = connect(mapStateToProps, mapDispatchToProps);

export const LoginPage = connector(Login);
