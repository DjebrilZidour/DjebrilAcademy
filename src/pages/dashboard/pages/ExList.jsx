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
      <section className="w-full">
        <div className=" w-full px-4 my-4">
          <div className="  w-full flex md:flex-row flex-col md:justify-between mb-16 items-center h-16 drop-shadow-xl">

            <div
              style={{ backgroundImage: `url(${moduleData.imgUrl})` }}
              className="text-5xl text-white font-bold bg-cover py-4 md:w-3/5  w-64 h-full px-4 py-8 md:rounded-l-xl  flex md:justify-start justify-center items-center"
            >
              <h1 className="capitalize md:text-left text-center">
                {t(moduleName)}
              </h1>
            </div>

            <div className="flex justify-between items-center bg-green-100  md:w-2/5 w-64 h-16 p-2 md:rounded-r-xl ">

              <h1 className="text-md capitalize">{t(trans)}</h1>

              <h1 className="text-xl uppercase background border-black border-2 px-1 py-3 m-4 rounded-full">
                {grade} AS
              </h1>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};
export default ExList;
