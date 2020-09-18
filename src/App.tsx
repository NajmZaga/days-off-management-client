import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes/routes';

function App() {
	return (
    <Router>
      <Routes authorized={true} />
    </Router>
  );
}

export default App;
