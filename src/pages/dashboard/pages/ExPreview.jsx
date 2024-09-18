import { useLocation } from "react-router";
import { fetchExDetail } from "../../../api/ex"
import { useParams } from "react-router";
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
const ExPreview = ()=>{
  const { moduleName, semesterNumber, idx, grade } = useParams(); // Extract from URL
  const trans = "trimester_" + semesterNumber;
  const moduleData = modules.find((element) => element.moduleName === moduleName);
  const examData = fetchExDetail(moduleName.toLowerCase(),
  semesterNumber - 1,grade)
 const exam = examData[idx]
return(
    <>
        <h1 className="text-5xl">exam{exam.examTitle}</h1>
    </>
)
}
export default ExPreview