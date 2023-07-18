import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Header from './app/header/Header';
import router from './app/Router';
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
