import { fetchExDetail } from "../../../api/ex";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ExList = () => {
  const { t } = useTranslation();
  const { moduleName, semesterNumber, grade } = useParams();
  const exercices = fetchExDetail(
    moduleName.toLowerCase(),
    semesterNumber - 1,
    grade
  );
  console.log(exercices);
  const trans = "trimester_" + semesterNumber;
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
  // Extract params from URL
  const moduleData = modules.find(
    (element) => element.moduleName === moduleName
  );
  return (
    <>
      <section>
        <div className="w-full px-4 my-4">
        <div className="md:rounded-l-xl rounded-t-xl w-full flex md:flex-row flex-col justify-between mb-16 items-center h-64 drop-shadow-xl">
          <div
            style={{ backgroundImage: `url(${moduleData.imgUrl})` }}
            className="text-5xl text-white font-bold bg-cover py-4 w-4/5 h-full px-4 py-8 md:rounded-l-xl rounded-t-xl flex md:justify-start justify-center items-center"
          >
            <h1 className="capitalize md:text-left text-center">
              {t(moduleName)}
            </h1>
          </div>

          <div className="text-2xl bg-green-100 px-4 w-4/5 md:w-2/6 md:h-full px-4 py-2 md:py-8 md:rounded-r-xl flex justify-center gap-4 items-center flex-col">
            <h1 className="text-md capitalize">{t(trans)}</h1>
            <h1 className="text-3xl uppercase background border-black border-2 px-2 py-5 cursor-pointer rounded-full">
              {grade}AS
            </h1>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};
export default ExList;
