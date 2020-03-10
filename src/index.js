import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { StoreContext } from "redux-react-hook";
import store from "./redux/store";

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <BrowserRouter>
            <App />
        </BrowserRouter>
  </StoreContext.Provider>,
  document.getElementById("root")
);