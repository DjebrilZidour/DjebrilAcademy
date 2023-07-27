import DashboardSideBar from "../components/DashboardSideBar";

const Learning = () => {
  <>
    <div>
      <DashboardSideBar />
    </div>

    <section className="flex flex-col justify-center items-center gap-4">
      <div className="p-12 border-2 border-black rounded-3xl ">
        <h1 className="text-3xl">
            DOUROUS
        </h1>
      </div>
      <div className="p-12 border-2 border-black rounded-3xl ">
        <h1 className="text-3xl">
            Exercices
        </h1>
      </div>
    </section>
  </>;
};
export default Learning;
