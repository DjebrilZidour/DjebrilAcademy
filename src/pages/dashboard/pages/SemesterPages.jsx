import { useLocation, useNavigate } from "react-router";

const SemesterPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const onClickSemester = (semesterNumber) => {
    navigate("/dashboard/semester-detail", {
      state: { moduleName: state.moduleName, semesterNumber: semesterNumber },
    });
  };
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl "> {state.moduleName} </h1>

      <h1
        onClick={() => {
          onClickSemester(1);
        }}
        className="text-lg font-bold border-2 border-black px-8 py-4 cursor-pointer"
      >
        semster 1
      </h1>
      
      <h1
        onClick={() => {
          onClickSemester(2);
        }}
        className="text-lg font-bold border-2 border-black px-8 py-4 cursor-pointer"
      >
        semster 2
      </h1>

      <h1
        onClick={() => {
          onClickSemester(3);
        }}
        className="text-lg font-bold border-2 border-black px-8 py-4 cursor-pointer"
      >
        semster 3
      </h1>
    </section>
  );
};

export default SemesterPage;
