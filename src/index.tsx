import CssBaseline from "@material-ui/core/CssBaseline";
import { teal, amber } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { App } from "App";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "connected-react-router";
import * as serviceWorker from "serviceWorker";
import { store, browserHistory } from "store";
import { REACT_QUERY_CONFIG, SENTRY } from "lib";
import { ReactQueryConfigProvider } from "react-query";

// Sentry hooks itself into window.onerror and thereby catches errors during rendering.
// For more an explicit handling the life-cycle-method `getDerivedStateFromError` could be used.
SENTRY.init();

const theme = createMuiTheme({ palette: { primary: teal, secondary: amber } });

ReactDOM.render(
  <Provider store={store}>
    <ReactQueryConfigProvider config={REACT_QUERY_CONFIG}>
      <Router history={browserHistory}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Router>
    </ReactQueryConfigProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
