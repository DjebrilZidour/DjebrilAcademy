import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
const Grade = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onClickGrade = (grade) => {
    navigate(`/dashboard/learning/${grade}/choose`);
  };

  return (
    <section className="flex flex-col justify-center items-center gap-8 py-12">
      <h1 className="text-4xl mt-4 text-center font-bold">{t("select")}</h1>
      <button
        className="md:text-3xl text-xl uppercase background px-8 py-3 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200 w-4/5"
        onClick={() => onClickGrade(1)}
      >
        {t("1as")}
      </button>
      <button
        className="md:text-3xl  text-xl uppercase background px-8 py-3 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200 w-4/5"
        onClick={() => onClickGrade(2)}
      >
         {t("2as")}
      </button>
      <button
        className="md:text-3xl  text-xl uppercase background px-8 py-3 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200 w-4/5"
        onClick={() => onClickGrade(3)}
      >
         {t("3as")}
      </button>
    </section>
  );
};

export default Grade;
