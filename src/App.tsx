import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';
import 'antd/dist/antd.css';
import './App.scss';
import './theme/dark-theme.scss';
import { ConnectedProps, connect } from "react-redux";
import { GlobalState } from "./store";

const AppInner: React.FC<ConnectedProps<typeof connector>> = ({
  isLoggedIn
}) => {
	return (
    <Router>
      <Routes authorized={ isLoggedIn } />
    </Router>
  );
}

const mapStateToProps = (state: GlobalState) => ({
  isLoggedIn: state.authorization.isLoggedIn,
});

const mapDispatchToProps = {

};

const connector = connect(mapStateToProps, mapDispatchToProps);

export const App = connector(AppInner);
