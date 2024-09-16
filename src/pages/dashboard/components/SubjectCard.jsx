import { useNavigate } from "react-router-dom";
import Btn from "../../../components/Atomic/Btn";
import { useTranslation } from "react-i18next";
const SubjectCard = (props) => {
  const navigate = useNavigate();
  const {t}= useTranslation()
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
      <h1 className="text-3xl text-black capitalize">{t(props.subName.toLowerCase())}</h1>
      <Btn onClick={onClick} value={t("start_now")} />
    </div>
  );
};

export default SubjectCard;
