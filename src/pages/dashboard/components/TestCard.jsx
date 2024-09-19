import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const TestCard = (props)=>{
    const navigate = useNavigate()
    const {exerciceTitle ,exYear, idx, moduleName, grade, semesterNumber} = props
    const {t} = useTranslation()
    return (
        <>
      <div
  onClick={() => {
    navigate(
      `/dashboard/test-preview/${moduleName}/${semesterNumber}/${idx}/${grade}`
    );
  }}
  className="w-36 rounded-lg cursor-pointer shadow-lg overflow-hidden"
>
  <div className="bg-blue-500 text-white flex justify-center items-center p-2">
    <h1 className="capitalize">{exYear}</h1>
  </div>
  <div className="bg-green-200 text-center p-4">
    <h1 className="capitalize text-xl">{t("test")} {exerciceTitle}</h1>
  </div>
</div>
        </>
    )
}
export default TestCard