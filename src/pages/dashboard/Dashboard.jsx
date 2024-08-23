import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSideBar from "./components/DashboardSideBar";
import Navbar from "../../components/Navbar";
import Btn from "../../components/Atomic/Btn";
import Input from "../../components/Atomic/Input";
import ResponsiveSideBar from "./components/ResponsiveSideBar";
import Countdown from "./components/Countdown";

const TodoList = () => {
  const [typedTask, setTypedTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isTaskDone, setTaskDone] = useState(false);
  let i = 0;

  const setTaskDoneBtn = () => {
    if (isTaskDone) {
      setTaskDone(false);
    } else {
      setTaskDone(true);
    }
  };

  const addTodo = () => {
    console.log(typedTask);
    if (typedTask.length < 4) {
      console.log("pls enter a valid task");
    } else {
      todoList.push(typedTask);
      setTypedTask("");
      console.log(todoList);
      setTodoList(todoList);
    }
  };

  return (
    <>
      <div className="border-2 rounded-3xl p-6 shadow-3xl px-16 h-96">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl">TO DO</h1>

          <Input
            label="new task"
            type="text"
            value={typedTask}
            setValue={setTypedTask}
          />

          <Btn value="newTodo" onClick={addTodo} />
          <hr className=" border-1 border-black w-full rounded-3xl m-4" />

          <div>
            {todoList.map((element, i) => {
              return (
                <ul className=" flex justify-between items-center gap-8">
                  <li className={isTaskDone ? "" : ""} key={i}>
                    {element}
                  </li>
                  <div className="flex justify-between items-center gap-4">
                    <img
                      key={i}
                      onClick={setTaskDoneBtn}
                      className="w-4 h-4 rounded-full cursor-pointer"
                      src={
                        isTaskDone
                          ? "https://cdn-icons-png.flaticon.com/128/7739/7739845.png"
                          : "https://cdn-icons-png.flaticon.com/128/808/808569.png"
                      }
                      alt=""
                    />
                    <img
                      onClick={() => {}}
                      className="w-4 h-4 rounded-full cursor-pointer"
                      src="https://cdn-icons-png.flaticon.com/128/594/594864.png"
                      alt=""
                    />
                  </div>
                  {/* <img src={TodoList?"":""} alt="" /> */}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <section className="flex items-start justify-between">
        <div className="hidden lg:flex">
          <DashboardSideBar />
        </div>

        <div className="border-4 border-gray lg:mx-4 mb-4 pb-4 mt-6 rounded-3xl flex flex-col items-center justify-center w-full drop-shadow-lg bg-green-50  p-2">
          <div className="md:hidden">
            <ResponsiveSideBar />
          </div>
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Dashboard;

// todo : move to pages
export const Default = () => {
  const targetDate = new Date("2024-12-31T00:00:00");
  return (
    <>
      <div className=" flex md:gap-4 flex-col md:flex-row">
        <div className="flex justify-between items-start gap-4 mt-4 w-full h-full ">
    
            <div className=" flex flex-col justify-center items-center gap-2 border-2 rounded-3xl p-6 my-4">
              <h1 className="text-2xl">Still for your final exam</h1>

              
                <Countdown targetDate={targetDate} />
          
            </div>

        </div>
        <TodoList />
      
      </div>
    </>
  );
};
