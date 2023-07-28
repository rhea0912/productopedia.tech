import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import './responsive.css'
import router from './app/Router';
import { RouterProvider } from "react-router-dom";
import {GlobalStateProvider} from "./app/Context";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStateProvider>
      <RouterProvider router={router} />
    </GlobalStateProvider>
  </React.StrictMode>,
)
