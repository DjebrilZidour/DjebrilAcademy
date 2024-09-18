import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const TestCard = (props)=>{
    const navigate = useNavigate()
    const {exerciceTitle , idx, moduleName, grade, semesterNumber} = props
    const {t} = useTranslation()
    return (
        <>
        <div onClick={()=>{
             navigate(
                `/dashboard/test-preview/${moduleName}/${semesterNumber}/${idx}/${grade}`
              );
        }} className="rounded-lg w-36 bg-yellow-200 flex justify-center items-center cursor-pointer">
            <h1 className="capitalize"> {t("test")} {exerciceTitle}</h1>
        </div>
        </>
    )
}
export default TestCard