import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login/Login";
import SignUp from "./pages/auth/SignUp/SignUp";
import BacGettingStarted from "./pages/bac-prep/BacGettingStarted";
import Dashboard from "./pages/dashboard/Dashboard";



const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
  },
  { path: "/signup", element: <SignUp /> },

  {
    path:"/bac-getting-started", element: <BacGettingStarted />
  },
  {
    path:"/dashboard", element: <Dashboard/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
