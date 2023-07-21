import Navbar from "../../../components/Navbar";

const DashboardSideBar = () => {
  return (
    <>
      <Navbar />
      <section
        id="dashboard-side-bar"
        className="shadow-2xl rounded-2xl p-4 w-80 border-2 my-4 mx-4"
      >
        <div className="flex items-center justify-start">
          <img
            className="w-8 m-4"
            src="https://cdn-icons-png.flaticon.com/128/3917/3917711.png"
            alt=""
          />

          <h1  className="text-3xl my-4">Dashboard</h1>
        </div>
        <div className="m-4 cursor-pointer">
          <h2>Learning program</h2>
        </div>
        <div className="m-4 cursor-pointer">
          <img src="" alt="" />
          <h2>Lessons detailed</h2>
        </div>
        <div className="m-4 cursor-pointer">
          <img src="" alt="" />
          <h2>Quizs</h2>
        </div>
        <div className="m-4 cursor-pointer">
          <img src="" alt="" />
          <h2>Exercices</h2>
        </div>
        {/* <div></div> */}
        <div className="m-4 cursor-pointer">
          <img src="" alt="" />
          <h2>Settings</h2>
        </div>

        <div className="my-10 cursor-pointer">
          <div>
            <img src="" alt="" />
            <h3></h3>
          </div>
          <div>
            <img src="" alt="" />
            <h3></h3>
          </div>
          <div>
            <img src="" alt="" />
            <h3></h3>
          </div>
        </div>

        <div className="m-4">
          <img src="" alt="" />
          <h1>log out</h1>
        </div>
      </section>
    </>
  );
};

export default DashboardSideBar;
