import { useLocation, useNavigate } from "react-router";

const SemesterPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const onClickSemester = (semesterNumber) => {
    if (state.type === "co") {
      navigate("/dashboard/semester-detail", {
        state: {
          moduleName: state.moduleName,
          semesterNumber: semesterNumber,
          imgUrl: state.imgUrl,
          courseLink: state.courseLink,
          type: state.type,
          grade: state.grade,
        },
      });
    } else {
      navigate("/dashboard/exercice-preview", {
        state: {
          moduleName: state.moduleName,
          semesterNumber: semesterNumber,
          imgUrl: state.imgUrl,
          courseLink: state.courseLink,
          type: state.type,
          grade: state.grade,
        },
      });
    }
  };

  return (
    <>
      <div className="flex justify-end w-full">
        <h1 className="text-3xl uppercase background border-black border-2 px-2 py-5 cursor-pointer rounded-full mr-4">
          {state.grade} AS
        </h1>
      </div>
      <section className="w-5/6 flex flex-col items-center justify-center gap-4 pb-12 ">
        <h1 className="text-4xl "> {state.moduleName} </h1>
        <h2 className="text-md md:text-xl capitalize py-4">
          {" "}
          merci de selectionner votre Triméstre !!
        </h2>

        <h1
          onClick={() => {
            onClickSemester(1);
          }}
          className="w-full text-md text-center md:text-2xl   capitalize background px-32 py-4 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200"
        >
          Triméstre 1
        </h1>

        <h1
          onClick={() => {
            onClickSemester(2);
          }}
          className="w-full text-md text-center md:text-2xl capitalize background px-32 py-4 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200"
        >
          Triméstre 2
        </h1>

        <h1
          onClick={() => {
            onClickSemester(3);
          }}
          className="w-full text-md text-center md:text-2xl capitalize background px-32 py-4 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200"
        >
          Triméstre 3
        </h1>
      </section>
    </>
  );
};

export default SemesterPage;
