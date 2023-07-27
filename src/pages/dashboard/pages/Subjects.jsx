import Navbar from "../../../components/Navbar";
import DashboardSideBar from "../components/DashboardSideBar";

const Subjects = () => {
  return (
    <>
    <Navbar />
      <section>
        <DashboardSideBar />
      </section>
      <section>
        <div className="flex flex-col justify-center items-center rounded-3xl border-2 border-black">
            <img className="rounded-3xl h-1/2" src="" alt="subject-picture" />
            <h1 className="text-3xl text-black">
                Mathemathics
            </h1>
        </div>
        <div className="flex flex-col justify-center items-center rounded-3xl border-2 border-black">
            <img className="rounded-3xl h-1/2" src="" alt="subject-picture" />
            <h1 className="text-3xl text-black">
                Arabic
            </h1>
        </div>
        <div className="flex flex-col justify-center items-center rounded-3xl border-2 border-black">
            <img className="rounded-3xl h-1/2" src="" alt="subject-picture" />
            <h1 className="text-3xl text-black">
                English
            </h1>
        </div>
        <div className="flex flex-col justify-center items-center rounded-3xl border-2 border-black">
            <img className="rounded-3xl h-1/2" src="" alt="subject-picture" />
            <h1 className="text-3xl text-black">
                French
            </h1>
        </div>
        <div className="flex flex-col justify-center items-center rounded-3xl border-2 border-black">
            <img className="rounded-3xl h-1/2" src="" alt="subject-picture" />
            <h1 className="text-3xl text-black">
                Science
            </h1>
        </div>
        <div className="flex flex-col justify-center items-center rounded-3xl border-2 border-black">
            <img className="rounded-3xl h-1/2" src="" alt="subject-picture" />
            <h1 className="text-3xl text-black">
                Phisics
            </h1>
        </div>
        <div className="flex flex-col justify-center items-center rounded-3xl border-2 border-black">
            <img className="rounded-3xl h-1/2" src="" alt="subject-picture" />
            <h1 className="text-3xl text-black">
                History and Geography
            </h1>
        </div>
        <div className="flex flex-col justify-center items-center rounded-3xl border-2 border-black">
            <img className="rounded-3xl h-1/2" src="" alt="subject-picture" />
            <h1 className="text-3xl text-black">
                Islamics
            </h1>
        </div>
        <div className="flex flex-col justify-center items-center rounded-3xl border-2 border-black">
            <img className="rounded-3xl h-1/2" src="" alt="subject-picture" />
            <h1 className="text-3xl text-black">
                Civils
            </h1>
        </div>
      </section>
    </>
  );
};

export default Subjects;
