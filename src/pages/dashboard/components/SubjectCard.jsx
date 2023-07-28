import Btn from "../../../components/Atomic/Btn";
const SubjectCard = (props) => {

  return (
    <>
      <div className="flex flex-col justify-between items-center rounded-3xl border-4 w-1/3 gap-4 pb-4 h-92">
        <img
          className="rounded-3xl max-h-52 w-full"
          src={props.imageUrl}
          alt="subject-picture"
        />
        <h1 className="text-3xl text-black ">
          {props.subName}
        </h1>
        <Btn value={props.subName}/>
      </div>
    </>
  );
};
export default SubjectCard
