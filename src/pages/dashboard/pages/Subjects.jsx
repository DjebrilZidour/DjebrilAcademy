import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SubjectCard from "../components/SubjectCard";

const modules = [
  {
    moduleName: "Math",
    img: "https://images.pexels.com/photos/220301/pexels-photo-220301.jpeg?auto=compress&cs=tinysrgb&w=800",
    imgUrl: "https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    moduleName: "Physics", // Fixed typo
    img: "https://images.pexels.com/photos/68173/flash-tesla-coil-experiment-faradayscher-cage-68173.jpeg?auto=compress&cs=tinysrgb&w=800",
    imgUrl: "https://media.istockphoto.com/id/953006834/photo/science-math-chemistry-equations.jpg?s=612x612&w=0&k=20&c=kF7XAjZlhC1QgUOEZS7A6p6tMYAS1oF4nFLG5XQQgbE=",
  },
];

const Subjects = () => {
  const { grade, choice } = useParams(); // Retrieve grade and choice (course or exercise) from the URL

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
            to={`/dashboard/learning/${grade}/${choice}/subjects/${element.moduleName.toLowerCase()}/trimesters`}
          >
            <SubjectCard
              imageUrl={element.img}
              subName={element.moduleName}
              imgUrl={element.imgUrl}
              grade={grade}
              type={choice} // Pass the course/exercise choice to SubjectCard
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Subjects;
