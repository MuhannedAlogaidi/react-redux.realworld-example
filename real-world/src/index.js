import ReactDOM from "react-dom";
import React from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";

import App from './component/App';

const defaultState = {
  appName: "conduit",
  articles: null
};
const reducer = function(state = defaultState, action) {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, checked: !state.checked };
    default:
      return { ...state };
  }
  // return state => This is another way to return the default state in case of initial action
};
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
