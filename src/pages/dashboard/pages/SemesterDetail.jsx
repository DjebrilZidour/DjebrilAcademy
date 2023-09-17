import { useLocation } from "react-router";
import { fetchSemesterDetail } from "../../../api";

const CourseDetail = (props) => {
  const { title, course } = props;

  return (
    <div>
      <p className="text-lg">{title}</p>
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
    <div>
      <h1 className="text-3xl ">
        {state.moduleName} Semester {state.semesterNumber}
      </h1>

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
