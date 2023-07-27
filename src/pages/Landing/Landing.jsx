import Navbar from "../../components/Navbar";
import Btn from "../../components/Atomic/Btn";
import Footer from "../../components/Footer";
// import img12 from "../../images/landingPic.png";


const Landing = () => {
  return (
    <>
      <Navbar />

      <section className="flex items-center -mx-3 font-sans px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md pb-20 mt-8">
        <div className="px-3 w-full lg:w-2/5">
          <div className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
            <h2 className="mb-4 text-3xl font-bold text-left lg:text-5xl">
              Exclusive Agency For
              <span style={{ color: "#61faaf" }} className="text-5xl ">
                <div className=""></div>Technology
              </span>
              .Provide Solution
            </h2>

            <p className="visible mx-0 mt-3 mb-0 text-sm leading-relaxed text-left text-slate-400">
              Helping you maximize operations management with digitization
            </p>
          </div>
          
          <div className="text-center lg:text-left">
            <Btn value="Key Features" />

            <button className="text-black font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 px-4 ml-4">
              how do we work !!
            </button>
          </div>
        </div>
      </section>

      <section className="flex justify-between items-center p-4 mx-24 h-92 gap-4">
        <div className="borders border-2 rounded-3xl flex flex-col justify-start items-start w-1/2 h-96 gap-6 p-4 ">
          <h1 className="text-2xl underline">Why choose us !!!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            veritatis quos recusandae et, voluptas harum nam tempore expedita
            sed dolorum. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Fuga iste accusantium dolorem quasi a doloremque nesciunt,
            repellendus est dicta officiis obcaecati soluta veritatis quod nulla
            incidunt harum quisquam vitae auto
          </p>
          <Btn value="learn more" />
        </div>

        <div className=" w-1/2 h-96">
          <img
            className="w-full  h-full  rounded-3xl border-2  borders"
            src="https://images.pexels.com/photos/3728084/pexels-photo-3728084.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
          />
        </div>
      </section>

      <section>
        <h1>what is our mission</h1>
        <div>
          <div className="">
            <img className="" src="" alt="" />
            <h1 className="">understand all your lessons in one platform</h1>
          </div>

          <div className="">
            <img className="" src="" alt="" />
            <h1 className="">practisce what did you learned</h1>
          </div>

          <div className="">
            <img className="" src="" alt="" />
            <h1 className="">get the highest mark in your exams</h1>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-4 p-4 mx-28 my-4 border-2 borders rounded-3xl">
        <h1 className="text-3xl texts">Want to know something????</h1>
        <h1 className="text-2xl"> E-mail US now: </h1>
        <h1 className="text-black hover:underline hover:texts cursor-pointer">
          XXXXXXX@example.com
        </h1>
      </section>

      <section>
        <h1>our team</h1>

        <div>
          <img src="" alt="" />
          <h1></h1>
          <p></p>
        </div>

        <div>
          <img src="" alt="" />
          <h1></h1>
          <p></p>
        </div>

        <div>
          <img src="" alt="" />
          <h1></h1>
          <p></p>
        </div>
        <Btn value="see more" />
      </section>

      {/* <section>
        <h1>what people sad about us </h1> //! check the drawed paper // check american institute website 
        <div></div>
      </section> */}

      <Footer />
    </>
  );
};

export default Landing;
