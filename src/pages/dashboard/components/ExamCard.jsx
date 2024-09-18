import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const ExamCard = (props)=>{

    const navigate = useNavigate()
    const {examTitle , exYear, idx, moduleName, grade, semesterNumber} = props
    const {t} = useTranslation()
    return(
        <>
        <div onClick={()=>{ navigate(
                `/dashboard/exam-preview/${moduleName}/${semesterNumber}/${idx}/${grade}`
              );}} className="rounded-lg w-36 bg-yellow-200 flex flex-col justify-center items-center cursor-pointer">
            <p>{exYear}</p>
            <h1 className="capitalize"> Examen {examTitle}</h1>
            
        </div>
        </>
    )
}
export default ExamCard