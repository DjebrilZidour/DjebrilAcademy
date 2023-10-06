import { useLocation } from "react-router";
import { fetchSemesterDetail } from "../../../api";
import Btn from "../../../components/Atomic/Btn"

const CourseDetail = (props) => {
  const { title, course } = props;

  return (
    <div className="flex justify-center items-center flex-col w-full  my-4 border-2 border-gray rounded-xl pb-4 ">

      <div className=" text-white font-bold  p-4 w-full rounded-xl background ">
        <h1 className="text-xl capitalize">{title}</h1>
      </div>

      <div className="mb-16 px-8 py-4    flex items-center justify-between ">

        <div>
          <p>{course}</p>
        </div>

        <div>
          <img
            src="https://images.pexels.com/photos/5913510/pexels-photo-5913510.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            className="w-88"
            alt=""
          />
        </div>

      </div>

      <div>

        <Btn value="check PDF file" />
        <button>
          <a href="https://drive.google.com/drive/u/1/my-drive?q=type:pdf%20parent:0AEIPBoVGzKUGUk9PVA"> check pdf file</a>
        </button>
      </div>
    </div>
  );
};

const SemesterDetail = () => {
  const { state } = useLocation();
  const { moduleName, semesterNumber, imgUrl } = state;
  const courses = fetchSemesterDetail(
    moduleName.toLowerCase(),
    semesterNumber - 1
  );
  console.log(typeof imgUrl);
  const officialLink = imgUrl;
  console.log(officialLink);

  return (
    <div className="w-full">
      <div className=" rounded-xl w-full rounded-xl flex justify-between items-center h-16 mb-16 drop-shadow-xl">
        <div
          style={{ backgroundImage: `url(${officialLink})` }}
          className="text-2xl text-white font-bold bg-cover  py-4 w-4/5 h-full px-4 py-8  rounded-l-xl flex justify-start items-center"
        >
          {" "}
          <h1> {state.moduleName} </h1>
        </div>
        <div className="text-lg bg-green-100 px-4 w-1/5 h-full px-4 py-8  rounded-r-xl flex justify-start items-center">
          {" "}
          <h1> Semester {state.semesterNumber} </h1>
        </div>
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
