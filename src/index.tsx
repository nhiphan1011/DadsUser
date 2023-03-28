import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "app/stores/store";
import client from "app/apollo/store";

import App from "./App";

import * as serviceWorker from "./serviceWorker";
import "flowbite";
import "assets/styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
