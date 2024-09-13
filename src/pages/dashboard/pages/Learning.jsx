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
            className="md:text-4xl text-xl uppercase background px-8 py-3 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200 md:w-96 w-48"
          >
            <h1 className="cursor-pointer">{t("courses")}</h1>
          </button>
          <button
            onClick={() => onClickType("ex")}
            className="md:text-4xl text-xl uppercase background px-8 py-3 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200 md:w-96 w-48"
          >
            <h1 className="cursor-pointer">{t("exercices")}</h1>
        
          </button>
        </div>
      </section>
    </>
  );
};
export default Learning;
