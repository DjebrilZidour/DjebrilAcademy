import { useParams, useLocation } from "react-router-dom";
import { fetchSemesterDetail } from "../../../api";
import PdfPreview from "../components/PdfPreview";
import { useTranslation } from "react-i18next";
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

const CoursePreview = () => {
  const {t}= useTranslation()
  const { moduleName, semesterNumber, idx, grade } = useParams(); // Extract from URL
  const trans = "trimester_" + semesterNumber;
  const { state } = useLocation(); // Retrieve optional state data like imgUrl
 // Use a fallback if state.imgUrl is not available
 const moduleData = modules.find((element) => element.moduleName === moduleName);
  const courseData = fetchSemesterDetail(
    moduleName.toLowerCase(),
    semesterNumber - 1,grade
  );
  const course = courseData[idx];

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full px-4 my-4">
        <div className="rounded-tl-xl w-full flex md:flex-row flex-col justify-between items-center h-64 drop-shadow-xl">
          <div
            style={{ backgroundImage: `url(${moduleData.imgUrl})` }}
            className="text-5xl text-white font-bold bg-cover py-4 w-4/5 h-full px-4 py-8 rounded-tl-xl flex md:justify-start justify-center items-center"
          >
            <h1 className="capitalize md:text-left text-center">{t(moduleName)}</h1>
          </div>

          <div className="text-2xl font-bold bg-green-100 px-4 w-4/5 md:w-2/6 md:h-full px-4 py-2 md:py-8 rounded-tr-xl flex justify-center gap-4 items-center flex-col">
            <h1 className="text-md capitalize">{t(trans)}</h1>
            <h1 className="text-3xl uppercase background border-black border-2 px-2 py-5 cursor-pointer rounded-full">
              {grade}AS
            </h1>
          </div>
        </div>
        <div className="flex justify-center w-4/5 items-center bg-red-100 rounded-b-3xl shadow-xl md:w-full">
          <h1 className="md:text-5xl text-4xl text-center py-4 capitalize">
            {course.courseTitle}
          </h1>
        </div>
      </div>

      <div className="w-full my-12">
        <PdfPreview pdfUrl={course.pdfUrl} pdfId={course.pdfId} />
      </div>
    </>
  );
};

export default CoursePreview;
