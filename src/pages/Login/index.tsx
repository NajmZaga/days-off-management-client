import React, { useEffect } from "react";
import { Row, Col } from "antd";
import './login.scss';
import { LoginForm } from "./components/LoginForm";
import { ILoginCredentials } from "../../utils/types";
import { GlobalState } from "../../store";

import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from "react-router-dom";

import { authLogin } from '../../store/auth/actions';

interface ILoginProps {}

const Login: React.FC<ILoginProps & RouteComponentProps & ConnectedProps<typeof connector>> = ({
	isLoggedIn,
	history,
	authLogin: authLoginAction,
}) => {

	useEffect(() => {
		if (isLoggedIn) {
			history.push('/');
		}
	}, [isLoggedIn, history]);

  const handleLogin = (credentials: ILoginCredentials) => {
    authLoginAction(credentials);
  }

	return (
		<div className='login-page flex-container'>
			<Row justify="center">
				<Col>
					<LoginForm
            onLogin={ handleLogin }
          />
				</Col>
			</Row>
		</div>
	);
};

const mapStateToProps = (state: GlobalState) => ({
	isLoggedIn: state.authorization.isLoggedIn,
});

const mapDispatchToProps = { authLogin };

const connector = connect(mapStateToProps, mapDispatchToProps);

export const LoginPage = connector(Login);
