import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from 'react-redux'
import Template from "../components/Template";
import BaseRouter from "./BaseRouter";
import store from '../redux/store'

export default function App() {
  return (
    <Provider store={store} >
      <Router>
        <Template>
          <BaseRouter />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover />
        </Template>
      </Router>
    </Provider>
  );
}