import { useNavigate, useNavigation } from "react-router";
import Btn from "../../../components/Atomic/Btn";
const SubjectCard = (props) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/dashboard/semesters", { state: { moduleName: props.subName } });
  };
  return (
    <>
      <div className="flex flex-col justify-between items-center shadow rounded-xl border-4 w-1/3 gap-4 pb-4 w-72 h-96">
        <img
          className="rounded-xl max-h-52 w-full"
          src={props.imageUrl}
          alt="subject-picture"
        />
        <h1 className="text-3xl text-black ">{props.subName}</h1>

        <Btn onClick={onClick} value={"Start Learning"} />
      </div>
    </>
  );
};
export default SubjectCard;
