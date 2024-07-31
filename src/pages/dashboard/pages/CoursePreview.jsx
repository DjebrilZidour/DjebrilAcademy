import { useLocation } from "react-router";
import { fetchSemesterDetail } from "../../../api";
const CoursePreview = () =>{
    const { state } = useLocation();
    const { moduleName, semesterNumber} = state;
    console.log(state.idx);
    console.log(state.moduleName);
    console.log(state.semesterNumber);
    const courseData = fetchSemesterDetail(state.moduleName.toLowerCase() ,state.semesterNumber-1)
    console.log(courseData);
    const index =state.idx+1
    return (
        <div className="  w-full  my-4 border-2 border-gray rounded-xl pb-4 bg-red-100">
      <div className="font-bold  p-4 w-full rounded-t-xl background ">
        <h1 className="text-xl capitalize">{state.moduleName}</h1>
        <h1 className="text-xl capitalize">{index}</h1>
        <h1 className="text-5xl">{courseData[state.idx].courseTitle}</h1>
      </div>

     

   
    </div>
    );
}

export default CoursePreview