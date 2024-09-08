import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import DashboardSideBar from "../components/DashboardSideBar";
import SubjectCard from "../components/SubjectCard";

const modules = [
  {
    moduleName: "Math",
    img: "https://images.pexels.com/photos/220301/pexels-photo-220301.jpeg?auto=compress&cs=tinysrgb&w=800",
    path: "/dashboard/learning/courses/math",
    imgUrl: "https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    moduleName: "Phisics",
    img: "https://images.pexels.com/photos/68173/flash-tesla-coil-experiment-faradayscher-cage-68173.jpeg?auto=compress&cs=tinysrgb&w=800",
    imgUrl: "https://media.istockphoto.com/id/953006834/photo/science-math-chemistry-equations.jpg?s=612x612&w=0&k=20&c=kF7XAjZlhC1QgUOEZS7A6p6tMYAS1oF4nFLG5XQQgbE=",
  },
];

const Subjects = ({ grade }) => {
  return (
    <>
      <div className="flex justify-end w-full">
        <h1 className="text-3xl uppercase background border-black border-2 px-2 py-5 cursor-pointer rounded-full mr-4">
          {grade} AS
        </h1>
      </div>
      <div className="py-4 px-8 flex flex-col md:flex-row gap-4 h-max">
        {modules.map((element) => (
          <Link
            key={element.moduleName}
            to={`/dashboard/learning/${grade}/courses/${element.moduleName.toLowerCase()}`}
          >
            <SubjectCard
              imageUrl={element.img}
              subName={element.moduleName}
              imgUrl={element.imgUrl}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Subjects;
