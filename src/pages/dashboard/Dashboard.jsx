import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSideBar from "./components/DashboardSideBar";
import Navbar from "../../components/Navbar";
import Btn from "../../components/Atomic/Btn";
import Input from "../../components/Atomic/Input";
import ResponsiveSideBar from "./components/ResponsiveSideBar";

const TodoList = () => {
  const [typedTask, setTypedTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isTaskDone, setTaskDone] = useState(false)
  let i = 0;

  const setTaskDoneBtn = ()=>{
    if (isTaskDone) {
      setTaskDone(false)
    }else{
      setTaskDone(true)
    }
  }

  const addTodo = () => {
    console.log(typedTask);
    if(typedTask.length < 4 ){
      console.log("pls enter a valid task");
      alert("ERR")
    }else{
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
            return(
              <ul className=" flex justify-between items-center gap-8">
                <li className={isTaskDone?"":""} key={i}>{element}</li>
                <div className="flex justify-between items-center gap-4">
                <img onClick={setTaskDoneBtn} className="w-4 h-4 rounded-full cursor-pointer" src={isTaskDone?"https://cdn-icons-png.flaticon.com/128/7739/7739845.png":"https://cdn-icons-png.flaticon.com/128/808/808569.png"} alt="" />
                <img className="w-4 h-4 rounded-full cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/594/594864.png" alt="" />
                </div>
                {/* <img src={TodoList?"":""} alt="" /> */}
              </ul>
            )
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
        
        <div className="border-4 border-gray lg:mx-4 mb-4 pb-4 mt-6 rounded-3xl flex flex-col items-center justify-center w-full drop-shadow-lg bg-green-50 m-4">
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
  return (
    <>
    <div className="flex-col md:flex-row">
    <div className="border-2 border-black rounded-2xl px-4 py-8 md:w-full flex justify-center items-center rounded-3xl gap-6 ">
        <div className="w-4/5 border-2 border-gray rounded-2xl">
          <div className="w-4/5 bg-green-300 w-full border-2 p-4 rounded-2xl"></div>
        </div>

        <h1>63%</h1>
      </div>
      <div className="flex justify-between items-start gap-4 mt-4 w-full h-full ">
        {/* <div className="border-2 rounded-3xl p-6 shadow-3xl px-16 h-96">
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
        </div> */}
       
  
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

            <h1>remember that your time is running out</h1>
          </div>
        </div>
      </div>
    </div>
    <TodoList />
    </>
  );
};
