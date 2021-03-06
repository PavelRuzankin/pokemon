import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"

import App from './App';

import rootReducer from "./store/reducers/rootReducer"

const store = createStore(rootReducer)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));
