import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Auth/Login.jsx';
import SignUp from './Auth/SignUp.jsx';
import Verify from './Auth/Verfity.jsx';
import NotFound from './NotFound.jsx';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <SignUp/>,
    },
    {
      path: "verify",
      element: <Verify/>,
    },
    {
      path: "*",
      element: <NotFound/>,
    },
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
