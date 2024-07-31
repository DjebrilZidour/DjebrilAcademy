import { useLocation } from "react-router";
import { fetchSemesterDetail } from "../../../api";
import Btn from "../../../components/Atomic/Btn";
import { useNavigate } from "react-router";
import CoursePreview from "./CoursePreview";

const CourseDetail = (props) => {
  const { title, course, courseImage, courseLink } = props;

  return (
    
    <div className="  w-full  my-4 border-2 border-gray rounded-xl pb-4 ">

      <div className="font-bold  p-4 w-full rounded-t-xl background ">
        <h1 className="text-xl capitalize">{title}</h1>
      </div>

      <div className="mb-16 px-8 py-4 flex justify-between gap-32  ">
        <div className="flex-1">
          <p className="px-4 py-4 w-full text-lg">{course}</p>
        </div>

        {courseImage ? (
          <div className="flex-1">
            <img
              src={courseImage}
              className="w-96 rounded-xl h-80 w-full"
              alt=""
            />
          </div>
        ) : null}
      </div>

      <div className="pb-4 w-full flex justify-center">
        <Btn value="check PDF file" onClick={courseLink} />
      </div>
    </div>
  );
};



const CourseTitles = (props)=>{
  const {state} = useLocation()
  const navigate = useNavigate()
  console.log(state.imgUrl);
  const onClickCourse = ()=>{
    navigate("/dashboard/coursepreview", {
      state: { moduleName: state.moduleName, semesterNumber: state.semesterNumber ,imgUrl:state.imgUrl, idx:props.idx, moh:1,}
    });
  }


return(
  <>
  <div className="flex justify-between items-center  border-2 border-black rounded-xl p-4 w-full">
    <h1>{props.title}</h1>
    <Btn value="acsess course" onClick={onClickCourse}/>
  </div>
  </>
)
};

const SemesterDetail = () => {
  const { state } = useLocation();
  const { moduleName, semesterNumber, imgUrl, courseLink } = state;
  console.log(courseLink);
  const courses = fetchSemesterDetail(
    moduleName.toLowerCase(),
    semesterNumber - 1
  );
  console.log(typeof imgUrl);
  const officialLink = imgUrl;
  console.log(officialLink);

  return (
    <div className="w-full">
      <div className=" rounded-xl w-full rounded-xl flex justify-between items-center h-64 mb-16 drop-shadow-xl">
        <div
          style={{ backgroundImage: `url(${officialLink})` }}
          className="text-5xl text-white font-bold bg-cover  py-4 w-4/5 h-full px-4 py-8  rounded-l-xl flex justify-start items-center"
        >
          {" "}
          <h1> {state.moduleName} </h1>
        </div>

        <div className="text-2xl font-bold bg-green-100 px-4 w-1/5 h-full px-4 py-8  rounded-r-xl flex justify-start items-center">
          {" "}
          <h1> Triméstre {state.semesterNumber} </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-4 ">
      {courses.length > 0 ? (
        courses.map((singleCourse, idx) => {
          return (
            <CourseTitles
            idx={idx}
            key={idx}
            moduleName={moduleName}
            semesterNumber={semesterNumber}
            title={singleCourse.courseTitle}
            course={singleCourse.courseDetail}
            courseImage={singleCourse.courseImage}
            courseLink={singleCourse.courseLink}
             
            />
          );
        })
      ) : (
        <p className="text-red-400 ">no content</p>
      )}
      </div>
     
    </div>
  );
};

export default SemesterDetail;
