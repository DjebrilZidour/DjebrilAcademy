import { useNavigate } from "react-router-dom";
import Btn from "../../../components/Atomic/Btn";

const SubjectCard = (props) => {
  const navigate = useNavigate();

  const onClick = () => {
    const { grade, type, subName } = props;
    navigate(`/dashboard/learning/${grade}/${type}/subjects/${subName.toLowerCase()}/trimesters`);
  };

  return (
    <div className="flex flex-col justify-between items-center cursor-pointer duration-200 shadow rounded-xl border-2 border-black gap-4 pb-4 bg-white">
      <img
        className="rounded-xl h-92 w-full"
        src={props.imageUrl}
        alt="subject-picture"
      />
      <h1 className="text-3xl text-black capitalize">{props.subName}</h1>
      <Btn onClick={onClick} value={"Start Learning"} />
    </div>
  );
};

export default SubjectCard;
