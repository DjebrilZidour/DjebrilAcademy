import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSideBar from "./components/DashboardSideBar";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <section className="flex items-start justify-between">
        <div>
          <DashboardSideBar />
        </div>

        <div className="border-2 border-black  min-h-100 mx-4 w-full  mt-6 rounded-3xl p-4 flex flex-col items-center justify-center w-full">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Dashboard;


// todo : move to pages
export const Default = () => {
  return (
    <>
      {" "}
      <div className="border-2 border-black rounded-2xl px-4 py-8 w-full flex justify-center items-center rounded-3xl gap-6 ">
        <div className="w-4/5 border-2 border-black rounded-2xl">
          <div className="w-4/5 bg-green-300 w-full border-2 p-4 rounded-2xl"></div>
        </div>

        <h1>0%</h1>
      </div>
      <div className="flex justify-between items-start gap-4 mt-4 w-full h-full ">
        <div className="border-2 rounded-3xl p-6 shadow-3xl px-16 h-96">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl">TO DO</h1>
            <button className="bg-green-400 rounded-3xl px-4 py-2 my-4 ">
              + Add new task
            </button>

            <hr className=" border-1 border-black w-full rounded-3xl" />
            <div>
              <p className="px-4 py-2 border-2 rounded-2xl p-4 m-4 ">element</p>
              <p className="px-4 py-2 border-2 rounded-2xl p-4 m-4 ">element</p>
              <p className="px-4 py-2 border-2 rounded-2xl p-4 m-4 ">element</p>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-3xl p-6 ">
          <div className=" flex flex-col justify-center items-center">
            <h1 className="text-2xl">Still for your final exam</h1>

            <div className="flex justify-center items-center gap-4 border-2 px-4 py-2 rounded-3xl">
              <div className="">
                <h1 className="bg-gray-200 p-2 rounded-xl">00</h1>
              </div>

              <h1 className="text-3xl">:</h1>

              <div className="">
                <h1 className="bg-gray-200 p-2 rounded-xl">00</h1>
              </div>

              <h1 className="text-3xl">:</h1>

              <div className="">
                <h1 className="bg-gray-200 p-2 rounded-xl">00</h1>
              </div>

              <h1 className="text-3xl">:</h1>

              <div className="">
                <h1 className="bg-gray-200 p-2 rounded-xl">00</h1>
              </div>
            </div>

            <h1>remember that your time is runing out</h1>
          </div>
        </div>
      </div>{" "}
    </>
  );
};
