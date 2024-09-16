import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DashboardSideBar from "./components/DashboardSideBar";
import Navbar from "../../components/Navbar";
import Btn from "../../components/Atomic/Btn";
import Input from "../../components/Atomic/Input";
import ResponsiveSideBar from "./components/ResponsiveSideBar";
import Countdown from "./components/Countdown";
import i18n from "../../i18n";

const langDirection = i18n.language === "ar" ? "row-reverse" : "row";
const textAlign = i18n.language === "ar" ? "right" : "left";
const displayNoneAr = i18n.language === "ar" ? "none" : "block";
const displayYesAr = i18n.language === "ar" ? "block" : "none";

const TodoList = () => {
  const { t } = useTranslation();
  const [typedTask, setTypedTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("todoList"));
    if (storedTasks) {
      setTodoList(storedTasks);
    }
  }, []);

  // Update localStorage whenever todoList changes
  useEffect(() => {
    if (todoList.length > 0) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  // Add a task
  const addTodo = () => {
    if (typedTask.length < 4) {
      console.log(t('error_invalid_task'));
    } else {
      setTodoList([...todoList, { task: typedTask, isTaskDone: false }]);
      setTypedTask("");
    }
  };

  // Toggle task completion
  const toggleTaskDone = (index) => {
    setTodoList(
      todoList.map((item, i) =>
        i === index ? { ...item, isTaskDone: !item.isTaskDone } : item
      )
    );
  };

  // Delete task
  const deleteTask = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
    if (updatedList.length === 0) {
      localStorage.removeItem("todoList");
    }
  };

  return (
    <div className="md:w-full max-w-lg mx-auto mt-16 p-8 bg-white rounded-lg shadow-md border border-gray-200 transition-all transform hover:scale-105 hover:shadow-lg">
      <h1 className="text-3xl font-extrabold text-center text-gray-700 mb-8">{t('todo')}</h1>
      <div className="flex flex-col items-center mb-6">
        <Input
          label={t('new_task')}
          type="text"
          value={typedTask}
          setValue={setTypedTask}
          placeholder={t('enter_task')}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
        <Btn
          value={t('add_task')}
          onClick={addTodo}
          className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition-colors"
        />
      </div>
      <hr className="my-6 border-gray-300" />
      <div className="max-h-64 overflow-y-auto w-full transition-all transform hover:scale-100 hover:shadow-sm">
        {todoList.length === 0 ? (
          <p className="text-center text-gray-400 italic">{t('no_tasks')}</p>
        ) : (
          todoList.map((element, i) => (
            <div key={i} className="flex justify-between items-center bg-gray-50 mb-4 p-4 rounded-lg shadow hover:bg-gray-100 transition-all">
              <span className={`flex-1 ${element.isTaskDone ? "line-through text-gray-400" : "text-gray-600 font-semibold"}`}>
                {element.task}
              </span>
              <div className="flex items-center gap-3">
                <img
                  onClick={() => toggleTaskDone(i)}
                  className="w-6 h-6 cursor-pointer transition-transform transform hover:scale-110"
                  src={element.isTaskDone ? "https://cdn-icons-png.flaticon.com/128/7739/7739845.png" : "https://cdn-icons-png.flaticon.com/128/808/808569.png"}
                  alt={t('toggle_task_done')}
                />
                <img
                  onClick={() => deleteTask(i)}
                  className="w-6 h-6 cursor-pointer transition-transform transform hover:scale-110"
                  src="https://cdn-icons-png.flaticon.com/128/594/594864.png"
                  alt={t('delete_task')}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
const Dashboard = () => {
  const { t } = useTranslation();
  const langDirection = i18n.language === 'ar' ? 'row-reverse' : 'row';
  return (
    <>
      <Navbar />
      <section style={{flexDirection:langDirection}} className="flex items-start justify-between gap-8 mx-8">
        <div className="hidden lg:flex ">
          <DashboardSideBar />
        </div>
        <div className="border-4 border-gray  mb-4 pb-4 mt-6 rounded-3xl flex flex-col items-center justify-center w-full drop-shadow-lg bg-green-50 ">
          <div className="lg:hidden">
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
  const { t } = useTranslation();
  const targetDate = new Date("2024-12-31T00:00:00");
  return (
    <div className="flex md:gap-4 flex-col-reverse md:w-5/6 gap-8">
     
        <div className="flex flex-col justify-center items-center gap-2 md:border-2 rounded-3xl md:p-8 my-4 ">
          <h1 className="text-2xl">{t('still_for_2025')}</h1>
          <Countdown targetDate={targetDate} />
        </div>
  
      <TodoList />
    </div>
  );
};
