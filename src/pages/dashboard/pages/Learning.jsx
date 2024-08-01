import { Link, useLocation, useNavigate } from "react-router-dom";
const onClickLearning= (path)=>{
  console.log("hi");
  const navigate = useNavigate()
  const {state} = useLocation()
  navigate("/dashboard-home")

  
}
const NavigateButton = (props) => {
  return (
    
      <button className="px-32 py-6 rounded-lg background hover:scale-105 duration-200 cursor-pointer">
        <h1 onClick={onClickLearning(props.path)} className="text-3xl cursor-pointer">{props.text}</h1>
      </button>
   
  );
};

const Learning = () => {
  return (
    <section>
      <div className="py-36 mx-4 px-32  flex flex-col items-center justify-center gap-8 ">
        <NavigateButton path="/dashboard/learning-courses" text="Dourous" />
        <NavigateButton path="/dashboard/learning-exc" text="Exercices" />
        
      </div>
    </section>
  );
};
export default Learning;
