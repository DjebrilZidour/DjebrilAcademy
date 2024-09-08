import { useLocation } from "react-router-dom";
import { fetchSemesterDetail } from "../../../api";
import Btn from "../../../components/Atomic/Btn";
import CoursePreview from "./CoursePreview";
import { useParams } from "react-router-dom";

const CourseDetail = (props) => {
  const { title, course, courseImage, courseLink } = props;

  return (
    <div className="w-full my-4 border-2 border-gray rounded-xl pb-4">
      <div className="font-bold p-4 w-full rounded-t-xl background">
        <h1 className="text-xl capitalize">{title}</h1>
      </div>

      <div className="mb-16 px-8 py-4 flex justify-between gap-32">
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
        <Btn
          value="check PDF file"
          onClick={() => window.open(courseLink, "_blank")}
        />
      </div>
    </div>
  );
};

const SemesterDetail = () => {
  const { grade, type, moduleName, imgUrl, semesterNumber } = useParams();
  const courses = fetchSemesterDetail(
    moduleName.toLowerCase(),
    semesterNumber - 1
  );

  return (
    <div className="w-full">
      <div className="rounded-xl w-full rounded-xl flex md:flex-row flex-col justify-between items-center h-64 mb-16 drop-shadow-xl">
        <div
          style={{ backgroundImage: `url(${imgUrl})` }}
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
            <CourseDetail
              key={idx}
              title={singleCourse.courseTitle}
              course={singleCourse.courseDetail}
              courseImage={singleCourse.courseImage}
              courseLink={singleCourse.courseLink}
            />
          ))
        ) : (
          <p className="text-red-400">no content</p>
        )}
      </div>
    </div>
  );
};

export default SemesterDetail;
