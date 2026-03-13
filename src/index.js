import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import weatherReducer from "./reduxState";
import weatherSaga from "./weatherSaga";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: [saga],
});

saga.run(weatherSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
