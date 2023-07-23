import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardSideBar from "./components/DashboardSideBar";
import LearningProgram from "./pages/LearningProgram";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <section className="flex items-start justify-between">
        <div>
          <DashboardSideBar />
        </div>

        <div className="border-2 border-black  h-100 mx-4 w-full  mt-6 rounded-3xl p-4">

          
          <h1>!</h1>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
