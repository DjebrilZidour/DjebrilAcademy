import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app/App";
import Login from "./pages/auth/Login/Login";
import SignUp from "./pages/auth/SignUp/SignUp";
import BacGettingStarted from "./pages/BacPrep/BacGettingStarted";
import Dashboard, { Default } from "./pages/dashboard/Dashboard";
import { getIsUserLogged } from "./utils/utils";
import Landing from "./pages/Landing/Landing";
import Profile from "./pages/Profile/Profile";
import Subjects from "./pages/dashboard/pages/Subjects";
import Learning from "./pages/dashboard/pages/Learning";
import About from "./pages/About/About";
import LearningProcess from "./pages/dashboard/pages/LearningProgress";
import Team from "./pages/Team/Team";
import SemesterPage from "./pages/dashboard/pages/SemesterPages";
import SemesterDetail from "./pages/dashboard/pages/SemesterDetail";
import CoursePreview from "./pages/dashboard/pages/CoursePreview";
import ExPreview from "./pages/dashboard/pages/ExPreview";
import Grade from "./pages/dashboard/pages/Grade";
import DashVd from "./pages/dashboard/pages/DashVd";
import i18n from "./i18n";
import EducationalNews from "./pages/dashboard/pages/EducationalNews";
import ExList from "./pages/dashboard/pages/ExList";
const isLogged = getIsUserLogged();

const router = createBrowserRouter([
  // Landing page routes for different languages
  { path: "/en", element: <Landing language="en" /> },
  { path: "/ar", element: <Landing language="ar" /> },
  { path: "/fr", element: <Landing language="fr" /> },
  { path: "/", element: <Landing /> }, // Fallback to English

  // Auth routes
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },

  // Bac preparation route
  { path: "/bac-getting-started", element: <BacGettingStarted /> },

  // Dashboard with nested dynamic routes
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "", element: <Default /> }, // Default dashboard route
      { path: "home", element: <Default /> },
      { path: "learning-grade", element: <Grade /> },
      { path: "learning/:grade/choose", element: <Learning /> },
      { path: "learning/:grade/:type/subjects", element: <Subjects /> },
      { path: "learning/:grade/:type/subjects/:moduleName/trimesters", element: <SemesterPage /> },
      { path: "exercice-preview/:moduleName/:semesterNumber/:grade", element: <ExList /> },
      { path: "semester-detail/:moduleName/:type/:semesterNumber/:grade", element: <SemesterDetail /> },
      { path: "coursepreview/:moduleName/:semesterNumber/:idx/:grade", element: <CoursePreview /> },
      { path: "learning/:grade/:choice/subjects/:subject/trimesters/:trimester/exercises/:exercise", element: <ExPreview /> },
      { path: "semesters", element: <SemesterPage /> },
      { path: "semester-detail", element: <SemesterDetail /> },
      { path: "vidéos", element: <DashVd /> },
      {path:"educational-news", element: <EducationalNews />},
    ],
  },

  // Profile route
  { path: "/profile", element: <Profile /> },

  // About, subjects, and team routes
  { path: "/about", element: <About /> },
  { path: "/subjects", element: <Subjects /> },
  { path: "/team", element: <Team /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
