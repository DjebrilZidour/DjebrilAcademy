import { useParams } from "react-router-dom";
import { fetchSemesterDetail } from "../../../api";
import PdfPreview from "../components/PdfPreview";

const CoursePreview = () => {
    // Extract from URL
  const { moduleName, semesterNumber, idx, grade, type, encodedImgUrl } = useParams();
  const decodedImgUrl = decodeURIComponent(encodedImgUrl); // Decode the imgUrl

  console.log(decodedImgUrl);
  const courseData = fetchSemesterDetail(moduleName.toLowerCase(), semesterNumber - 1);
  const course = courseData[idx];

  return (
    <>
      <div className="rounded-xl w-full flex justify-between items-center h-64">
        <div
          style={{ backgroundImage: `url(${decodedImgUrl})` }}
          className="text-5xl text-white font-bold bg-cover py-4 w-4/5 h-full px-4 rounded-tl-xl"
        >
          <h1>{moduleName}</h1>
        </div>

        <div className="text-2xl font-bold bg-green-100 px-4 w-4/5 md:w-2/6 h-full flex justify-center items-center gap-4">
          <h1>Triméstre {semesterNumber}</h1>
          <h1 className="text-3xl uppercase border-2 px-2 py-2">{grade} AS</h1>
        </div>
      </div>
      <div className="flex justify-center items-center bg-red-100 shadow-xl">
        <h1 className="text-5xl py-4 capitalize">{course.courseTitle}</h1>
      </div>
      <div className="w-full my-12">
        <PdfPreview pdfUrl={course.pdfUrl} pdfId={course.pdfId} />
      </div>
    </>
  );
};

export default CoursePreview;
