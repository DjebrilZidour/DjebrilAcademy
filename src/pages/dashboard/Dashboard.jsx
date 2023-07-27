import { useState } from "react";
import { Link } from "react-router-dom";
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

        <div className="border-2 border-black  h-100 mx-4 w-full  mt-6 rounded-3xl p-4 flex flex-col items-center justify-center">
         
          <div>
            <div>
              <div></div>
            </div>

            <h1>0%</h1>
          </div>

          <div className="flex justify-center items-center">

            <div>
              <div>
                <h1>TO DO</h1>
                <button>add new task</button>
              </div>

              <div>
                <p>element</p>
                <p>element</p>
                <p>element</p>
                <p>element</p>
                <p>element</p>
                <p>element</p>
              </div>
            </div>

            <div>
              <h1>still for your final exam</h1>

              <div className="flex justify-center items-center gap-4">
                
                <div className="flex justify-center items-center">
                <h1 className="border-2 border-black background-dark text-white">00</h1>
                <h1>:</h1>
                </div>

                <div className="flex justify-center items-center">
                <h1 className="border-2 border-black background-dark text-white">00</h1>
                <h1>:</h1>
                </div>

                <div className="flex justify-center items-center">
                <h1 className="border-2 border-black background-dark text-white">00</h1>
                <h1>:</h1>
                </div>

                <div className="flex justify-center items-center">
                <h1 className="border-2 border-black background-dark text-white">00</h1>
                <h1>:</h1>
                </div>
              </div>

            </div>
            
          </div>

        </div>
      </section>
    </>
  );
};

export default Dashboard;
