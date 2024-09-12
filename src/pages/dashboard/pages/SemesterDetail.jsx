import { useLocation } from "react-router";
import { fetchSemesterDetail } from "../../../api";
import Btn from "../../../components/Atomic/Btn";
import { useNavigate } from "react-router";
import CoursePreview from "./CoursePreview";
import { useParams } from "react-router-dom";
const CourseTitles = (props) => {
  const { state } = useLocation();
  const {type } = useParams();
  const navigate = useNavigate();
  const onClickCourse = () => {
    navigate(`/dashboard/coursepreview/${state?.moduleName}/${state?.semesterNumber}/${props.idx}/${state?.grade}`, {
      state: {
        imgUrl: state?.imgUrl,  // Pass only necessary data through state
        type: props.type,       // Optional state information
      }
    });
  };
  
  

  return (
    <div className="border-2 border-black rounded-xl p-4 w-4/5">
      <div className="flex flex-col  items-center md:flex-row-reverse justify-center md:justify-between gap-4">
        <h1 className="capitalize text-3xl md:text-left text-center">{props.title}</h1>
        <Btn value="access course" onClick={onClickCourse} />
      </div>
    </div>
  );
};

const SemesterDetail = () => {
  const modules = [
    {
      moduleName: "math",
      imgUrl:
        "https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      moduleName: "physics",
      imgUrl:
        "https://media.istockphoto.com/id/953006834/photo/science-math-chemistry-equations.jpg?s=612x612&w=0&k=20&c=kF7XAjZlhC1QgUOEZS7A6p6tMYAS1oF4nFLG5XQQgbE=",
    },
  ];
  const { moduleName, semesterNumber, imgUrl, type, grade } = useParams(); // Extract params from URL
  const moduleData = modules.find((element) => element.moduleName === moduleName);
  // Fetch courses based on moduleName and semesterNumber
  const courses = fetchSemesterDetail(moduleName.toLowerCase(), semesterNumber - 1);

  return (
    <div className="w-full px-4">
      <div className="md:rounded-l-xl rounded-t-xl w-full flex md:flex-row flex-col justify-between mb-24 items-center h-64 drop-shadow-xl">
        <div
          style={{ backgroundImage: `url(${moduleData.imgUrl})` }}
          className="text-5xl text-white font-bold bg-cover py-4 w-4/5 h-full px-4 py-8 md:rounded-l-xl rounded-t-xl flex justify-start items-center"
        >
          <h1>{moduleName}</h1>
        </div>

        <div className="text-2xl font-bold bg-green-100 px-4 w-4/5 md:w-2/6 md:h-full px-4 py-2 md:py-8 md:rounded-r-xl flex justify-center gap-4 items-center flex-col">
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
