import { useLocation, useNavigate } from "react-router";

const SemesterPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const onClickSemester = (semesterNumber) => {
    if (state.type === "co") {
      navigate("/dashboard/semester-detail", {
        state: { moduleName: state.moduleName, semesterNumber: semesterNumber , imgUrl: state.imgUrl , courseLink: state.courseLink ,type:state.type, },
      });
    }else{
      navigate("/dashboard/exercice-preview", {
        state: { moduleName: state.moduleName, semesterNumber: semesterNumber , imgUrl: state.imgUrl , courseLink: state.courseLink ,type:state.type, },
      });
      
    }
   
  };
  
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 py-28">
      <h1 className="text-3xl "> {state.moduleName} </h1>

      <h1
        onClick={() => {
          onClickSemester(1);
        }}
        className="text-lg capitalize background px-32 py-4 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200"
      >
        semster 1
      </h1>

      <h1
        onClick={() => {
          onClickSemester(2);
        }}
        className="text-lg capitalize background px-32 py-4 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200"
      >
        semster 2
      </h1>

      <h1
        onClick={() => {
          onClickSemester(3);
        }}
        className="text-lg capitalize background px-32 py-4 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200"
      >
        semster 3
      </h1>
    </section>
  );
};

export default SemesterPage;
