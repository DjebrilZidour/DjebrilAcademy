import { useParams } from "react-router";
import { fetchTestDetail } from "../../../api/ex"
const modules = [
    {
      moduleName: "math",
      imgUrl:
        "https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      moduleName: "physics",
      imgUrl:
        "https://media.istockphoto.com/id/953006834/photo/science-math-chemistry-equations.jpg?s=612x612&w=0&k=20&c=kF7XAjZlhC1QgUOEZS7A6p6tMYAS1oF4nFLG5XQQgbE=",
    },
  ];
const TePreview = ()=>{
    const { moduleName, semesterNumber, idx, grade } = useParams(); // Extract from URL
    const trans = "trimester_" + semesterNumber;
    const moduleData = modules.find((element) => element.moduleName === moduleName);
    const testData = fetchTestDetail(moduleName.toLowerCase(),
    semesterNumber - 1,grade)
    const test = testData[idx]
    return (
        <>
        <h1>test {test.exerciceTitle}</h1>
        </>
    )
}
export default TePreview