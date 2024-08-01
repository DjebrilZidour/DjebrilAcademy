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
    <section className="flex flex-col ">
      <h1>welcome to Grade selector</h1>
      <button className="p-4" onClick={()=>{
        
        navigate("/dashboard/learning-welcome", {
            state: {
              grade:1,
            },
          })
      }}>1as</button>
      <button className="p-4" onClick={()=>{
       
        navigate("/dashboard/learning-welcome", {
            state: {
              grade:2,
            },
          })
      }}>2as</button>
      <button className="p-4"  onClick={()=>{
    
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
