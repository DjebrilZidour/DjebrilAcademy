import Navbar from "../../../components/Navbar";
import DashboardSideBar from "../components/DashboardSideBar";
import SubjectCard from "../components/SubjectCard";

const modules = [
  {
    moduleName: "Arabic",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQflY6FbCbbRtAWx9H6RaiCtOUAYC4keIEQ&usqp=CAU",
  },
  {
    moduleName: "English",
    img: "https://images.pexels.com/photos/221166/pexels-photo-221166.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    moduleName: "French",
    img: "https://images.pexels.com/photos/5781917/pexels-photo-5781917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    moduleName: "Math",
    img: "https://images.pexels.com/photos/220301/pexels-photo-220301.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    moduleName: "science",
    img: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    moduleName: "Phisics",
    img: "https://images.pexels.com/photos/68173/flash-tesla-coil-experiment-faradayscher-cage-68173.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    moduleName: "Islamic",
    img: "https://images.pexels.com/photos/4346403/pexels-photo-4346403.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    moduleName: "History and geo",
    img: "https://images.pexels.com/photos/2952871/pexels-photo-2952871.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    moduleName: "civil",
    img: "https://images.pexels.com/photos/5191376/pexels-photo-5191376.jpeg?auto=compress&cs=tinysrgb&w=800 ",
  },
  
  

];

const Subjects = () => {
  return (
    <>
      <section className="flex">
        <div className="my-6 mx-2 p-2 border-2 rounded-3xl flex flex-col items-center justify-center gap-4 ">
          <div className="grid grid-cols-3 justify-center items-center gap-4 w-full">
            {modules.map((element) => {
              return (
                <SubjectCard
                  key={element.moduleName}
                  imageUrl={element.img}
                  subName={element.moduleName}
                />
              );
            })}
            {/* 
            

           
          

            <SubjectCard
              imageUrl="https://images.pexels.com/photos/68173/flash-tesla-coil-experiment-faradayscher-cage-68173.jpeg?auto=compress&cs=tinysrgb&w=800"
              subName="phisics"
            />

            <SubjectCard
              imageUrl="https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=800"
              subName="French"
            />
            <SubjectCard
              imageUrl="https://images.pexels.com/photos/541484/sun-flower-blossom-bloom-pollen-541484.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              subName="google"
            />

            <SubjectCard
              imageUrl="https://images.pexels.com/photos/541484/sun-flower-blossom-bloom-pollen-541484.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              subName="google"
            />

            <SubjectCard
              imageUrl="https://images.pexels.com/photos/2952871/pexels-photo-2952871.jpeg?auto=compress&cs=tinysrgb&w=800"
              subName="History and geo"
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Subjects;
