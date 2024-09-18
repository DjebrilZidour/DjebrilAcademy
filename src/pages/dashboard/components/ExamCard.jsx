import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const ExamCard = (props)=>{

    const navigate = useNavigate()
    const {examTitle , exYear, idx, moduleName, grade, semesterNumber} = props
    const {t} = useTranslation()
    return(
        <>
      <div
  onClick={() => {
    navigate(
      `/dashboard/exam-preview/${moduleName}/${semesterNumber}/${idx}/${grade}`
    );
  }}
  className="w-36 rounded-lg cursor-pointer shadow-lg overflow-hidden"
>
  <div className="bg-indigo-500 text-white flex justify-center items-center p-2">
    <p>{exYear}</p>
  </div>
  <div className="bg-purple-200 text-center p-4">
    <h1 className="capitalize">Examen {examTitle}</h1>
  </div>
</div>
        </>
    )
}
export default ExamCard