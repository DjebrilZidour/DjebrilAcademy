import {useNavigate, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next";



const Learning = () => {
const {t}= useTranslation()
  const navigate = useNavigate();
  const { grade } = useParams(); // Get grade from route parameters

  const onClickType = (type) => {
    const path = `/dashboard/learning/${grade}/${type}/subjects`;
    navigate(path);
  };

  return (
    <>
      <div className="flex justify-end w-full">
        <h1 className="text-3xl mr-4 uppercase background border-black border-2 px-2 py-5 cursor-pointer rounded-full">
          {grade} AS
        </h1>
      </div>
      <section>
        <div className="py-36 lg:mx-4 lg:px-32 flex flex-col items-center justify-center gap-8">
          <button
            onClick={() => onClickType("co")}
            className="px-28 py-6 rounded-lg background hover:scale-105 duration-200"
          >
            <h1 className="text-3xl cursor-pointer">{t("courses")}</h1>
          </button>
          <button
            onClick={() => onClickType("ex")}
            className="px-28 py-6 rounded-lg background hover:scale-105 duration-200"
          >
            <h1 className="text-3xl cursor-pointer">{t("exercices")}</h1>
        
          </button>
        </div>
      </section>
    </>
  );
};
export default Learning;
