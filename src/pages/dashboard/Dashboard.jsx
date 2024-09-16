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
      localStorage.removeItem("todoList"); // Clear localStorage if no tasks left
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-lg border border-gray-300">
      <h1 className="text-2xl font-bold text-center mb-6">{t('todo')}</h1>
      <div className="flex flex-col items-center mb-4">
        <Input
          label={t('new_task')}
          type="text"
          value={typedTask}
          setValue={setTypedTask}
          placeholder={t('enter_task')}
          className="w-full mb-4 px-3 py-2 border border-gray-400 rounded-lg"
        />
        <Btn
          value={t('add_task')}
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        />
      </div>
      <hr className="my-4" />
      <div className="max-h-64 overflow-y-auto">
        {todoList.length === 0 ? (
          <p className="text-center text-gray-500">{t('no_tasks')}</p>
        ) : (
          todoList.map((element, i) => (
            <ul key={i} className="flex justify-between items-center mb-3">
              <li
                className={`flex-1 ${
                  element.isTaskDone ? "line-through text-gray-400" : ""
                }`}
              >
                {element.task}
              </li>
              <div className="flex items-center gap-3">
                <img
                  onClick={() => toggleTaskDone(i)}
                  className="w-5 h-5 cursor-pointer"
                  src={
                    element.isTaskDone
                      ? "https://cdn-icons-png.flaticon.com/128/7739/7739845.png"
                      : "https://cdn-icons-png.flaticon.com/128/808/808569.png"
                  }
                  alt={t('toggle_task_done')}
                />
                <img
                  onClick={() => deleteTask(i)}
                  className="w-5 h-5 cursor-pointer"
                  src="https://cdn-icons-png.flaticon.com/128/594/594864.png"
                  alt={t('delete_task')}
                />
              </div>
            </ul>
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
    <div className="flex md:gap-4 flex-col md:flex-row">
      <div className="flex justify-between items-start gap-4 mt-4 w-full h-full">
        <div className="flex flex-col justify-center items-center gap-2 border-2 rounded-3xl p-6 my-4">
          <h1 className="text-2xl">{t('still_for_2025')}</h1>
          <Countdown targetDate={targetDate} />
        </div>
      </div>
      <TodoList />
    </div>
  );
};
