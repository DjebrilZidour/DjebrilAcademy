import { useLocation, useNavigate } from "react-router";

const Grade = () => {
  const navigate = useNavigate();
  const { state } = useLocation;
  const onClickGrade = (grade) => {
    navigate("/dashboard/learning-welcome", {
      state: {
        grade:grade
      },
    });
  };

  return (
    <section>
      <h1>welcome to Grade selector</h1>
      <button onClick={onClickGrade(1)}>1as</button>
      <button onClick={onClickGrade(2)}>2as</button>
      <button onClick={onClickGrade(3)}>3as</button>
    </section>
  );
};
export default Grade;
