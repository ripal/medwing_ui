import React, { Component } from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import CombinedReducer from "./reducers/CombinedReducer";
import Map from "./Map";
import "./style.css";

// use applyMiddleware to add the thunk middleware to the store
const store = createStore(CombinedReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Map center={{ lat: 51.1657, lng: 10.4515 }} zoom={4} />
  </Provider>,
  document.getElementById("root")
);
