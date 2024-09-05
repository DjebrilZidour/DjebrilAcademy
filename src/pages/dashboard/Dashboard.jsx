import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DashboardSideBar from "./components/DashboardSideBar";
import Navbar from "../../components/Navbar";
import Btn from "../../components/Atomic/Btn";
import Input from "../../components/Atomic/Input";
import ResponsiveSideBar from "./components/ResponsiveSideBar";
import Countdown from "./components/Countdown";
import i18n from "../../i18n";

const TodoList = () => {
  const { t } = useTranslation();
  const [typedTask, setTypedTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isTaskDone, setTaskDone] = useState(false);

  const setTaskDoneBtn = () => {
    setTaskDone(!isTaskDone);
  };

  const addTodo = () => {
    if (typedTask.length < 4) {
      console.log(t('error_invalid_task'));
    } else {
      setTodoList([...todoList, typedTask]);
      setTypedTask("");
    }
  };

  return (
    <div className="border-2 rounded-3xl p-6 shadow-3xl px-16 h-96">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl">{t('todo')}</h1>
        <Input
          label={t('new_task')}
          type="text"
          value={typedTask}
          setValue={setTypedTask}
        />
        <Btn value={t('add_task')} onClick={addTodo} />
        <hr className="border-1 border-black w-full rounded-3xl m-4" />
        <div>
          {todoList.map((element, i) => (
            <ul className="flex justify-between items-center gap-8" key={i}>
              <li className={isTaskDone ? "line-through" : ""}>{element}</li>
              <div className="flex justify-between items-center gap-4">
                <img
                  onClick={setTaskDoneBtn}
                  className="w-4 h-4 rounded-full cursor-pointer"
                  src={isTaskDone ? "https://cdn-icons-png.flaticon.com/128/7739/7739845.png" : "https://cdn-icons-png.flaticon.com/128/808/808569.png"}
                  alt={t('toggle_task_done')}
                />
                <img
                  onClick={() => {}}
                  className="w-4 h-4 rounded-full cursor-pointer"
                  src="https://cdn-icons-png.flaticon.com/128/594/594864.png"
                  alt={t('delete_task')}
                />
              </div>
            </ul>
          ))}
        </div>
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
      <section style={{flexDirection:langDirection}} className="flex items-start justify-between">
        <div className="hidden lg:flex">
          <DashboardSideBar />
        </div>
        <div className="border-4 border-gray lg:mx-4 mb-4 pb-4 mt-6 rounded-3xl flex flex-col items-center justify-center w-full drop-shadow-lg bg-green-50 p-2">
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
