import { useParams, useLocation } from "react-router-dom";
import { fetchSemesterDetail } from "../../../api";
import PdfPreview from "../components/PdfPreview";

const CoursePreview = () => {
  const { moduleName, semesterNumber, idx, grade } = useParams(); // Extract from URL
  const { state } = useLocation(); // Retrieve optional state data like imgUrl
  const imgUrl = state?.imgUrl || "defaultImageUrl"; // Use a fallback if state.imgUrl is not available

  const courseData = fetchSemesterDetail(
    moduleName.toLowerCase(),
    semesterNumber - 1
  );
  const course = courseData[idx];

  return (
    <>
    <div className="w-full px-4">
    <div className="rounded-tl-xl w-full flex md:flex-row flex-col justify-between items-center h-64 drop-shadow-xl">
        <div
          style={{ backgroundImage: `url(${state.imgUrl})` }}
          className="text-5xl text-white font-bold bg-cover py-4 w-4/5 h-full px-4 py-8 rounded-tl-xl flex justify-start items-center"
        >
          <h1>{moduleName}</h1>
        </div>

        <div className="text-2xl font-bold bg-green-100 px-4 w-4/5 md:w-2/6 md:h-full px-4 py-2 md:py-8 rounded-tr-xl flex justify-center gap-4 items-center flex-col">
          <h1 className="text-md">Triméstre {semesterNumber}</h1>
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
