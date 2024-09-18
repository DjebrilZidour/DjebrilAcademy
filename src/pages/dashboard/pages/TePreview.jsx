import { useParams } from "react-router";
import { fetchTestDetail } from "../../../api/ex"
const TePreview = ()=>{
    const { moduleName, semesterNumber, idx, grade } = useParams(); // Extract from URL
    const trans = "trimester_" + semesterNumber;
    return (
        <>
        <h1>gg</h1>
        </>
    )
}
export default TePreview