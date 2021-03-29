import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "../containers/App";
import reducer from "../reducers";
import "../assets/index.css";

const initialState = {
  query: "",
  engines: "google",
  results: undefined,
};

const store = createStore(reducer, initialState);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body.appendChild(document.createElement("div")),
  );
});
