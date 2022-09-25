import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme";
import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./graphql/client";
import AuthProvider from "./AuthProvider";

ReactDOM.render(
  //@ts-ignore
  <ApolloProvider client={client}>
    <AuthProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <App />
        </Router>
      </MuiThemeProvider>
    </AuthProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
