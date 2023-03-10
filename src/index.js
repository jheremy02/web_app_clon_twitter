import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { storage } from './utils/storage';
import { setAuthorizationHeader } from './api/client';

import { BrowserRouter as Router } from "react-router-dom";


console.log(process.env.REACT_APP_API_BASE_URL)

const accessToken=storage.get('auth')

if (accessToken) {
  setAuthorizationHeader(accessToken)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App isInitializeLogged={!!accessToken} />
    </Router>
  </React.StrictMode>
);


