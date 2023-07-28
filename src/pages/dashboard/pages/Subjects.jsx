import Navbar from "../../../components/Navbar";
import DashboardSideBar from "../components/DashboardSideBar";
import Btn from "../../../components/Atomic/Btn";
import SubjectCard from "../components/SubjectCard";

const Subjects = () => {
  return (
    <>
      <Navbar />
      <section className="flex">
        <div>
          <DashboardSideBar />
        </div>

        <div className="my-6 mx-2 p-2 border-2 rounded-3xl flex flex-col items-center justify-center gap-4 ">
          <div className="flex justify-center items-center gap-4 w-full">
            <SubjectCard
              imageUrl="https://images.pexels.com/photos/220301/pexels-photo-220301.jpeg?auto=compress&cs=tinysrgb&w=800"
              subName="Mathemathics"
            />

            <SubjectCard
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQflY6FbCbbRtAWx9H6RaiCtOUAYC4keIEQ&usqp=CAU"
              subName="Arabic"
            />

            <SubjectCard
              imageUrl="https://images.pexels.com/photos/221166/pexels-photo-221166.jpeg?auto=compress&cs=tinysrgb&w=800"
              subName="English"
            />
          </div>
          <div className="flex justify-center items-center gap-4 w-full">
            <SubjectCard
              imageUrl="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800"
              subName="Science"
            />

            <SubjectCard
              imageUrl="https://images.pexels.com/photos/68173/flash-tesla-coil-experiment-faradayscher-cage-68173.jpeg?auto=compress&cs=tinysrgb&w=800"
              subName="phisics"
            />

            <SubjectCard
              imageUrl="https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=800"
              subName="French"
            />
          </div>
          <div className="flex justify-center items-center gap-4 w-full">
            <SubjectCard
              imageUrl="https://images.pexels.com/photos/541484/sun-flower-blossom-bloom-pollen-541484.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              subName="google"
            />

            <SubjectCard
              imageUrl="https://images.pexels.com/photos/541484/sun-flower-blossom-bloom-pollen-541484.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              subName="google"
            />

            <SubjectCard
              imageUrl="https://images.pexels.com/photos/541484/sun-flower-blossom-bloom-pollen-541484.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              subName="History"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Subjects;
