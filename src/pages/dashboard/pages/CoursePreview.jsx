import { useLocation } from "react-router";
import { fetchSemesterDetail } from "../../../api";
import Btn from "../../../components/Atomic/Btn";
const CoursePreview = () => {
  const { state } = useLocation();
  const { moduleName, semesterNumber } = state;
  console.log(state.idx);
  console.log(state.moduleName);
  console.log(state.semesterNumber);
  const courseData = fetchSemesterDetail(
    state.moduleName.toLowerCase(),
    state.semesterNumber - 1
  );
  console.log(courseData);
  const index = state.idx + 1;
  console.log(state.imgUrl);
  const course = courseData[state.idx];
  return (
    <div className="  w-full  my-4 border-none rounded-xl pb-4 h-screen">
    
      <div className=" w-full rounded-xl flex justify-between items-center h-32  drop-shadow-xl">
        <div
          style={{ backgroundImage: `url(${state.imgUrl})` }}
          className="text-5xl text-white font-bold bg-cover  py-4 w-4/5 h-full px-4 py-8  rounded-tl-xl flex justify-start items-center"
        >
          {" "}
          <h1> {state.moduleName} </h1>
        </div>

        <div className="text-2xl font-bold bg-green-100 px-4 w-1/5 h-full px-4 py-8 borde-0 rounded-tr-xl flex justify-start items-center">
          {" "}
          <h1> Triméstre {state.semesterNumber} </h1>
        </div>
      </div>
      <div className="flex justify-center items-center bg-red-100 rounded-b-3xl shadow-xl">
        <h1 className="text-5xl py-4 capitalize">{course.courseTitle}</h1>
      </div>
    
    </div>
    
  );
};

export default CoursePreview;
