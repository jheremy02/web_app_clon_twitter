import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { storage } from "./utils/storage";
import { setAuthorizationHeader } from "./api/client";

import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./store";
import { Provider } from "react-redux";

const accessToken = storage.get("auth");
const store = configureStore({ auth: !!accessToken, tweets: [] });

if (accessToken) {
  setAuthorizationHeader(accessToken);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <App store={store}/>
    </Router>
    </Provider>
    
  </React.StrictMode>
);
