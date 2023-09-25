import { useLocation } from "react-router";
import { fetchSemesterDetail } from "../../../api";

const CourseDetail = (props) => {
  const { title, course } = props;

  return (
    <div>
      <h2 className="text-xl underline capitalize">{title}</h2>

      <p>{course}</p>
    </div>
  );
};

const SemesterDetail = () => {
  const { state } = useLocation();
  const { moduleName, semesterNumber } = state;
  const courses = fetchSemesterDetail(
    moduleName.toLowerCase(),
    semesterNumber - 1
  );

  return (
    <div className="w-full">

      <div className="  border-gray border-2 w-full rounded-xl flex justify-between items-center h-16 mb-16">
        <h1 className="text-2xl background  py-4 w-4/5 h-full px-4 py-8">{state.moduleName}</h1>
        <h1 className="text-lg bg-green-100 px-4 w-1/5 h-full px-4 py-8">
          Semester {state.semesterNumber}
        </h1>
      </div>

      {courses.length > 0 ? (
        courses.map((singleCourse, idx) => {
          return (
            <CourseDetail
              key={idx}
              title={singleCourse.courseTitle}
              course={singleCourse.courseDetail}
            />
          );
        })
      ) : (
        <p className="text-red-400 ">no content</p>
      )}
    </div>
  );
};

export default SemesterDetail;
