import { useLocation, useNavigate } from "react-router";

const Grade = () => {
  const navigate = useNavigate();
  const { state } = useLocation;
  const onClickGrade = (grade) => {
    console.log(grade);
    navigate("/dashboard/learning-welcome", {
      state: {
        grade:grade,
      },
    });
  };

  return (
    <section className="flex flex-col justify-center items-center gap-8 py-12">
      <h1 className="text-4xl mt-4 ">S.V.P Selectionne Votre Niveaux scolaire</h1>
      <button className="text-3xl uppercase background p-3 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200  " onClick={()=>{
        
        navigate("/dashboard/learning-welcome", {
            state: {
              grade:1,
            },
          })
      }}>1as</button>
      <button className="text-3xl uppercase background p-3 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200 " onClick={()=>{
       
        navigate("/dashboard/learning-welcome", {
            state: {
              grade:2,
            },
          })
      }}>2as</button>
      <button className="text-3xl uppercase background p-3 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200 w-min "  onClick={()=>{
    
        navigate("/dashboard/learning-welcome", {
            state: {
              grade:3,
            },
          })
      }}>3as</button>
    </section>
  );
};
export default Grade;
