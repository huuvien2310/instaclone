import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme";
import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./graphql/client";
import AuthContextProvider from "./Auth";

ReactDOM.render(
  //@ts-ignore
  <ApolloProvider client={client}>
    <AuthContextProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <App />
        </Router>
      </MuiThemeProvider>
    </AuthContextProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
