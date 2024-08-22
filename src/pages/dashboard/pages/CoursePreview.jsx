import { useLocation } from "react-router";
import { fetchSemesterDetail } from "../../../api";
import Btn from "../../../components/Atomic/Btn";
import PdfPreview from "../components/PdfPreview";
import Preview from "../components/Preview";
const CoursePreview = () => {
  const { state } = useLocation();
  const { moduleName, semesterNumber } = state;
  console.log(state.idx);
  console.log(state.moduleName);
  console.log(state.semesterNumber);
  const courseData = fetchSemesterDetail(
    state.moduleName.toLowerCase(),
    state.semesterNumber - 1
  );
  console.log(courseData);
  const index = state.idx + 1;
  console.log(state.imgUrl);
  const course = courseData[state.idx];
console.log(courseData[0]);
  const pdfUrl = "https://www.ency-education.com/uploads/3/0/9/3/309326/french-2am20-1trim-d1.pdf"
  const drivePreviewUrl = "https://drive.google.com/file/d/1SyVIfAJ2LcfCKyaQ1dg7-bRPOA3p77YV/preview"
  return (
    <>
      <div className="rounded-xl w-full rounded-xl flex md:flex-row flex-col justify-between items-center h-64  drop-shadow-2xl">
        <div
          style={{ backgroundImage: `url(${state.imgUrl})` }}
          className="text-5xl text-white font-bold bg-cover  py-4 w-4/5 h-full px-4 py-8  rounded-tl-xl flex justify-start items-center"
        >
          {" "}
          <h1> {state.moduleName} </h1>
        </div>

        <div className="text-2xl font-bold bg-green-100 px-4 w-4/5 md:w-2/6 md:h-full px-4 py-2 md:py-8  rounded-b-xl flex justify-center  gap-4 items-center flex-col">
          {" "}
          <h1 className="text-md"> Triméstre {state.semesterNumber} </h1>
          <h1 className="text-3xl uppercase background border-black border-2 px-2 py-2 md:py-5 cursor-pointer rounded-full ">
            {state.grade}AS
          </h1>
        </div>
        
      </div>
      <div className="flex justify-center w-4/5 items-center bg-red-100 rounded-b-3xl shadow-xl md:w-full">
        <h1 className="md:text-5xl text-4xl text-center py-4 capitalize">{course.courseTitle}</h1>
      </div>
      <div className="  w-full   border-none rounded-xl my-8 flex justify-center items-center flex-col">
        <div className="flex-col md:flex-row justify-between items-center w-full">
          <div className="my-12 mx-2 flex flex-col justify-center items-start gap-4 w-1/2">
            <h1 className="text-6xl text-red-500 capitalize">
              Description de Cours
            </h1>
            <p className="w-5/6 text-lg">{course.courseDetail}</p>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2 gap-2">
            <img
              className="w-1/3"
              src="https://cdn-icons-png.flaticon.com/128/3792/3792702.png"
              alt=""
            />
            <h1 className="text-2xl text-red-700 font-bold">!!PDF PREVIEW</h1>
          </div>
        </div>
        <Btn value="GET PDF FILE" />
      </div>
      <Preview course={course}/>
      <div className="w-full my-12">
      <PdfPreview pdfUrl={pdfUrl} />
    </div>
    </>
  );
};

export default CoursePreview;
