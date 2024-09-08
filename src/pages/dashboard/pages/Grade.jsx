import { useNavigate } from "react-router-dom";

const Grade = () => {
  const navigate = useNavigate();

  const onClickGrade = (grade) => {
    navigate(`/dashboard/learning/${grade}/choose`);
  };

  return (
    <section className="flex flex-col justify-center items-center gap-8 py-12">
      <h1 className="text-4xl mt-4 text-center">S.V.P Selectionne Votre Niveaux scolaire</h1>
      <button
        className="text-3xl uppercase background p-3 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200"
        onClick={() => onClickGrade(1)}
      >
        1as
      </button>
      <button
        className="text-3xl uppercase background p-3 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200"
        onClick={() => onClickGrade(2)}
      >
        2as
      </button>
      <button
        className="text-3xl uppercase background p-3 cursor-pointer rounded-tl-md rounded-tr-md rounded-br-3xl rounded-bl-md hover:scale-105 cursor-pointer duration-200 w-min"
        onClick={() => onClickGrade(3)}
      >
        3as
      </button>
    </section>
  );
};

export default Grade;
