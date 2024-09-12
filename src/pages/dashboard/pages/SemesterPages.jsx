import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

const SemesterPage = () => {
  const { t } = useTranslation(); // Add useTranslation hook
  const { state } = useLocation();
  const navigate = useNavigate();
  const { grade, type, moduleName } = useParams();

  const onClickSemester = (semesterNumber) => {
    if (type === "co") {
      navigate(`/dashboard/semester-detail/${moduleName}/${type}/${semesterNumber}/${grade}`, {
        state: {
          moduleName: moduleName,
          semesterNumber: semesterNumber,
          imgUrl: state.imgUrl, // Use imgUrl from the state
          grade: grade,
        },
      });
    } else {
      navigate(`/dashboard/exercice-preview/${moduleName}/${semesterNumber}/${grade}`, {
        state: {
          moduleName: moduleName,
          semesterNumber: semesterNumber,
          grade: grade,
        },
      });
    }
  };

  // Check if parameters are available
  if (!grade || !type || !moduleName) {
    return <div>Error: Missing required parameters</div>;
  }

  return (
    <>
      <div className="flex justify-end w-full">
        <h1 className="text-3xl uppercase background border-black border-2 px-2 py-5 cursor-pointer rounded-full mr-4">
          {grade} AS
        </h1>
      </div>
      <section className="flex flex-col items-center justify-center gap-4 pb-12">
        <h1 className="text-4xl">{t(moduleName)}</h1>
        <h2 className="text-md md:text-xl capitalize py-4">
          {t('select_trimester')}
        </h2>

        <h1
          onClick={() => onClickSemester(1)}
          className="w-full text-md text-center md:text-2xl capitalize background px-32 py-4 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200"
        >
          {t('trimester_1')}
        </h1>

        <h1
          onClick={() => onClickSemester(2)}
          className="w-full text-md text-center md:text-2xl capitalize background px-32 py-4 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200"
        >
          {t('trimester_2')}
        </h1>

        <h1
          onClick={() => onClickSemester(3)}
          className="w-full text-md text-center md:text-2xl capitalize background px-32 py-4 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200"
        >
          {t('trimester_3')}
        </h1>
      </section>
    </>
  );
};

export default SemesterPage;
