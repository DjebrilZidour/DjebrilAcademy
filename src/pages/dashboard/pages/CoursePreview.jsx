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
  console.log("hawlik lanne", state.grade);
  return (
    <>
      <div className=" w-full rounded-xl flex justify-between items-center h-32  drop-shadow-xl">
        <div
          style={{ backgroundImage: `url(${state.imgUrl})` }}
          className="text-5xl text-white font-bold bg-cover  py-4 w-4/5 h-full px-4 py-8  rounded-tl-xl flex justify-start items-center"
        >
          {" "}
          <h1> {state.moduleName} </h1>
        </div>

        <div className="text-2xl font-bold bg-green-100 px-4 w-1/5 h-full px-4 py-8 border-0 rounded-tr-xl flex justify-between items-center">
          {" "}
          <h1> Triméstre {state.semesterNumber} </h1>
          <h1 className="text-3xl uppercase background border-black border-2 px-2 py-5 cursor-pointer rounded-full ">
            {state.grade}AS
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center bg-red-100 rounded-b-3xl shadow-xl w-full">
        <h1 className="text-5xl py-4 capitalize">{course.courseTitle}</h1>
      </div>
      <div className="  w-full   border-none rounded-xl my-8 flex justify-center items-center flex-col">
        <div className="flex justify-between items-center w-full">
          <div className="my-12 mx-8 flex flex-col justify-center items-start gap-4 w-1/2">
            <h1 className="text-6xl text-red-500 capitalize">
              Description de Cours
            </h1>
            <p className="w-5/6 text-lg">{course.courseDetail}</p>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2 gap-2">
            <img
              className="w-1/3"
              src="https://cdn-icons-png.flaticon.com/128/3792/3792702.png"
              alt=""
            />
            <h1 className="text-2xl text-red-700 font-bold">!!PDF PREVIEW</h1>
          </div>
        </div>
        <Btn value="GET PDF FILE" />
      </div>
    </>
  );
};

export default CoursePreview;
