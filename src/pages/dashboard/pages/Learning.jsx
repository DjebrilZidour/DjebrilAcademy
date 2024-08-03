import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const onClickType=(type)=>{

  if (type === "co") {
    navigate("/dashboard/learning-courses")
  }
}

const NavigateButton = (props) => {
  return (
    <Link to={props.path} c="/dashboard/learning-courses">
      <button className="px-32 py-6 rounded-lg background hover:scale-105 duration-200">
        <h1 className="text-3xl cursor-pointer">{props.text}</h1>
      </button>
    </Link>
  );
};

const Learning = () => {
  const navigate = useNavigate()
  const{state}= useLocation() 
 
  return (
    <>
      <div className="flex justify-end w-full">
        <h1 className="text-3xl uppercase background border-black border-2 px-2 py-5 cursor-pointer rounded-full ">{state.grade} AS</h1>
      </div>
    <section>
    
      <div className="py-36 mx-4 px-32  flex flex-col items-center justify-center gap-8 ">
      <button onClick={()=>{
        navigate("/dashboard/learning-courses",{state:{grade:state.grade}})
      }}className="px-32 py-6 rounded-lg background hover:scale-105 duration-200">
        <h1 className="text-3xl cursor-pointer">Dourous</h1>
      </button>
      <button className="px-32 py-6 rounded-lg background hover:scale-105 duration-200">
        <h1 onClick={()=>{
        navigate("/dashboard/exercice-preview",{state:{grade:state.grade}})
      }} className="text-3xl cursor-pointer">Exercices</h1>
      </button>
        {/* <NavigateButton path="" text="" />
        <NavigateButton path="/dashboard/learning-exc" text="" /> */}
      </div>
    </section>
    </>
  );
};
export default Learning;
