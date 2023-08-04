import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login/Login";
import SignUp from "./pages/auth/SignUp/SignUp";
import BacGettingStarted from "./pages/bac-prep/BacGettingStarted";
import Dashboard, { Default } from "./pages/dashboard/Dashboard";
import NotAllowed from "./pages/NotAllowed/NotAllowed";
import { getIsUserLogged } from "./utils/utils";
import Landing from "./pages/Landing/Landing";
import Profile from "./pages/Profile/Profile";
import Subjects from "./pages/dashboard/pages/Subjects";
import Learning from "./pages/dashboard/pages/Learning";
import About from "./pages/About/About";
import LearningProcess from "./pages/dashboard/pages/LearningProgress";

const isLogged = getIsUserLogged();

console.log("hi");
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: isLogged ? <App /> : <Landing />,
  },
  { path: "/signup", element: <SignUp /> },

  {
    path: "/bac-getting-started",
    element: <BacGettingStarted />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "/dashboard/home", element: <Default /> },
      { path: "/dashboard/learning-welcome", element: <Learning /> },
      { path: "/dashboard/learning-courses", element: <Subjects /> },
      { path: "/dashboard/learning-exc", element: <Subjects /> },
      { path: "/dashboard/learning-progress", element: <LearningProcess /> },
    ],
  },

  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/subjects",
    element: <Subjects />,
  },
  {
    path: "/learning",
    element: <Learning />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
