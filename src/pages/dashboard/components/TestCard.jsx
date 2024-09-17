import { useTranslation } from "react-i18next";
const TestCard = (props)=>{
    const {exerciceTitle} = props
    const {t} = useTranslation()
    return (
        <>
        <div className="rounded-lg w-36 bg-yellow-200 flex justify-center items-center cursor-pointer">
            <h1> {t("test")} {exerciceTitle}</h1>
        </div>
        </>
    )
}
export default TestCard