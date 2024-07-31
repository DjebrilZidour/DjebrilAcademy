import { useLocation } from "react-router";
const CoursePreview = () =>{
    const { state } = useLocation();
    const { moduleName, semesterNumber} = state;
    console.log("here iam");
    console.log(state.moduleName);
    console.log(state.semesterNumber);
    return(
        <div className="  w-full  my-4 border-2 border-gray rounded-xl pb-4 ">
      <div className="font-bold  p-4 w-full rounded-t-xl background ">
        <h1 className="text-xl capitalize">{state.moduleName}</h1>
      </div>

     

   
    </div>
    );
}

export default CoursePreview