import { Link } from "react-router-dom";

const NavigateButton = (props) => {
  return (
    <Link to={props.path} c="/dashboard/learning-courses">
      <button className="px-32 py-6 rounded-lg background hover:scale-125 duration-200">
        <h1 className="text-3xl cursor-pointer">{props.text}</h1>
      </button>
    </Link>
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
