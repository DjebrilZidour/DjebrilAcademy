import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const SemesterPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { grade, type, moduleName ,imgUrl} = useParams();
  const onClickSemester = (semesterNumber) => {
    if (type === "co") {
      navigate(`/dashboard/semester-detail/${moduleName}/${semesterNumber}/${imgUrl}/${grade}`, {
        state: {
          moduleName: moduleName,
          semesterNumber: semesterNumber,
          imgUrl: imgUrl,
          grade: grade,
        }
      });
    } else {
      navigate(`/dashboard/exercice-preview/${moduleName}/${semesterNumber}/${grade}`, {
        state: {
          moduleName: moduleName,
          semesterNumber: semesterNumber,
          grade: grade,
        }
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
        <h1 className="text-4xl">{moduleName}</h1>
        <h2 className="text-md md:text-xl capitalize py-4">
          merci de selectionner votre Triméstre !!
        </h2>

        <h1
          onClick={() => onClickSemester(1)}
          className="w-full text-md text-center md:text-2xl capitalize background px-32 py-4 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200"
        >
          Triméstre 1
        </h1>

        <h1
          onClick={() => onClickSemester(2)}
          className="w-full text-md text-center md:text-2xl capitalize background px-32 py-4 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200"
        >
          Triméstre 2
        </h1>

        <h1
          onClick={() => onClickSemester(3)}
          className="w-full text-md text-center md:text-2xl capitalize background px-32 py-4 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200"
        >
          Triméstre 3
        </h1>
      </section>
    </>
  );
};

export default SemesterPage;
