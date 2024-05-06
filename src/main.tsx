import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CounterApp } from "./CounterApp";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterApp />
    </Provider>
  </React.StrictMode>
);
