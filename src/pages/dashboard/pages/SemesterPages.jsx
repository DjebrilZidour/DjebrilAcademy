import { useLocation, useNavigate } from "react-router";

const SemesterPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const onClickSemester = (semesterNumber) => {
    const path = state.type === "co"
      ? `/dashboard/semester-detail/${state.moduleName}/${semesterNumber}/${state.imgUrl}/${state.courseLink}/${state.grade}`
      : `/dashboard/exercice-preview/${state.moduleName}/${semesterNumber}/${state.imgUrl}/${state.courseLink}/${state.grade}`;
    
    navigate(path);
  };

  return (
    <>
      <div className="flex justify-end w-full">
        <h1 className="text-3xl uppercase background border-black border-2 px-2 py-5 cursor-pointer rounded-full mr-4">
          {state.grade} AS
        </h1>
      </div>
      <section className=" flex flex-col items-center justify-center gap-4 pb-12 ">
        <h1 className="text-4xl "> {state.moduleName} </h1>
        <h2 className="text-md md:text-xl capitalize py-4">
          {" "}
          Merci de sélectionner votre Trimestre !!
        </h2>

        <h1
          onClick={() => {
            onClickSemester(1);
          }}
          className="w-full text-md text-center md:text-2xl capitalize background px-32 py-4 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200"
        >
          Trimestre 1
        </h1>

        <h1
          onClick={() => {
            onClickSemester(2);
          }}
          className="w-full text-md text-center md:text-2xl capitalize background px-32 py-4 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200"
        >
          Trimestre 2
        </h1>

        <h1
          onClick={() => {
            onClickSemester(3);
          }}
          className="w-full text-md text-center md:text-2xl capitalize background px-32 py-4 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200"
        >
          Trimestre 3
        </h1>
      </section>
    </>
  );
};

export default SemesterPage;
