import React from 'react';
import './App.css';
// import { Routes, Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './components/layout/MainLayout';
import AuthLayout from './components/layout/AuthLayout';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      <div>
        <Router>
        <Routes>
          <Route path="/*" element={<AuthLayout />} />
          <Route path="/app/*" element={<MainLayout />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
