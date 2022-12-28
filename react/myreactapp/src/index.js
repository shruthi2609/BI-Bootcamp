import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import userReducer from "./Toolkit Configs/slice"
const store=configureStore({
  reducer:{
   loginReducer:userReducer
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
   <App></App>
   </Provider>
  

);


