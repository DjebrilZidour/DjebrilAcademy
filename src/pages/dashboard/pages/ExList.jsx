import { fetchExDetail } from "../../../api/ex"
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ExList = ()=>{
    const {moduleName, semesterNumber, grade}=useParams()
    const exercices = fetchSemesterDetail(
        moduleName.toLowerCase(),
        semesterNumber - 1,
        grade
      );
      console.log(exercices);
    return(
        <>
        <section>
            you need to fetch the things ok 
        </section>
        </>

    )
}
export default ExList