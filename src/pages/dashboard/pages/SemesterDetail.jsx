import { useLocation } from "react-router";
import { fetchSemesterDetail } from "../../../api";
import Btn from "../../../components/Atomic/Btn";
import { useNavigate } from "react-router";
import CoursePreview from "./CoursePreview";

const CourseTitles = (props) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const onClickCourse = () => {
    navigate(`/dashboard/coursepreview/${state?.moduleName}/${state?.semesterNumber}/${props.idx}/${state?.grade}/${state?.type}/${state?.imgUrl}`, {
      state: {
        // You may want to pass other state data if necessary
      }
    });
  };
  

  return (
    <div className="border-2 border-black rounded-xl p-4 w-4/5">
      <div className="flex flex-col md:flex-row-reverse justify-center md:justify-between items-center gap-4">
        <h1 className="capitalize text-3xl">{props.title}</h1>
        <Btn value="access course" onClick={onClickCourse} />
      </div>
    </div>
  );
};

const SemesterDetail = () => {
  const { state } = useLocation();
  


  const { moduleName, semesterNumber, imgUrl, courseLink, type, grade } = state;

  const courses = fetchSemesterDetail(moduleName.toLowerCase(), semesterNumber - 1);


  return (
    <div className="w-full">
      <div className="rounded-xl w-full flex md:flex-row flex-col justify-between items-center h-64 mb-16 drop-shadow-xl">
        <div
          style={{ backgroundImage: `url(${state.imgUrl})` }}
          className="text-5xl text-white font-bold bg-cover py-4 w-4/5 h-full px-4 py-8 rounded-t-xl md:rounded-l-xl flex justify-start items-center"
        >
          <h1>{moduleName}</h1>
        </div>

        <div className="text-2xl font-bold bg-green-100 px-4 w-4/5 md:w-2/6 md:h-full px-4 py-2 md:py-8 rounded-b-xl flex justify-center gap-4 items-center flex-col">
          <h1 className="text-md">Triméstre {semesterNumber}</h1>
          <h1 className="text-3xl uppercase background border-black border-2 px-2 py-5 cursor-pointer rounded-full">
            {grade}AS
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-4">
        {courses.length > 0 ? (
          courses.map((singleCourse, idx) => (
            <CourseTitles
              key={idx}
              idx={idx}
              moduleName={moduleName}
              semesterNumber={semesterNumber}
              title={singleCourse.courseTitle}
              course={singleCourse.courseDetail}
              courseImage={singleCourse.courseImage}
              courseLink={singleCourse.courseLink}
              type={type}
            />
          ))
        ) : (
          <p className="text-red-400">No content</p>
        )}
      </div>
    </div>
  );
};

export default SemesterDetail;
