import Navbar from "../../components/Navbar";
import Btn from "../../components/Atomic/Btn";
import Footer from "../../components/Footer";
// import img12 from "../../images/landingPic.png";
import TeamCard from "../dashboard/components/TeamCard";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <Navbar />

      <section className="flex items-center -mx-3 font-sans px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md pb-20 mt-8">
        <div className="px-3 w-full flex items-center justify-between gap-16 md:flex-row flex-col">
          <div> 
            <div className="mx-auto mb-8 max-w-lg text-center lg:mx-0  lg:text-left">
              <h2 className="capitalize text-4xl w-96 text-center md:text-start px-8">
                welcome to <br /> <span className="text-green-400">Djebril Academy</span> <br />
                your first platform to fix your mathemathics and phisics <span className="text-red-400">problems</span> 
              </h2>

              <p className="text-center md:text-start visible mx-0 mt-3 mb-0 text-sm leading-relaxed text-left text-slate-400">
                this platform is special for MATHELEM
              </p>
            </div>

            <div className="text-center md:text-left ">
              <Btn
                value="Get Course/Exersice"
                onClick={() => {
                  navigate("/dashboard/learning-grade");
                }}
              />
              <Link to="/about">
                <button className="text-black font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 px-4 ml-4">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
     
           <div>
            <img className="rounded-3xl" src="https://plus.unsplash.com/premium_photo-1671069848005-7231fc25703f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0dWR5aW5nfGVufDB8fDB8fHww" alt="" />
           </div>
        </div>
      </section>

      {/* <section className="flex justify-between items-center p-4 mx-24 h-92 gap-4">
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
      </section> */}

      <section className="my-10 py-2">
        <h1 className="text-3xl font-semibold text-center ">
          what is our mission
        </h1>
        <div className="flex justify-between items-center mx-12 lg:mx-28 my-2 flex-col md:flex-row gap-4 md:gap-0">
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-20"
              src="https://cdn-icons-png.flaticon.com/512/9831/9831318.png"
              alt=""
            />
            <h1 className="text-xl w-40 text-center">
              understand all your lessons in one platform
            </h1>
          </div>
          <img
            className="w-12 md:w-20"
            src="https://cdn-icons-png.flaticon.com/128/1294/1294758.png"
            alt=""
          />
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-20"
              src="https://cdn-icons-png.flaticon.com/512/10266/10266372.png"
              alt=""
            />
            <h1 className="text-xl w-40 text-center">
              practisce what did you learned
            </h1>
          </div>
          <img
            className="w-12 md:w-20"
            src="https://cdn-icons-png.flaticon.com/128/1294/1294758.png"
            alt=""
          />
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-20"
              src="https://cdn-icons-png.flaticon.com/512/5243/5243421.png"
              alt=""
            />
            <h1 className="text-xl w-40 text-center">
              get the highest mark in your exams
            </h1>
          </div>
        </div>
      </section>

      {/* <section className="flex flex-col justify-center items-center gap-4 p-4 mx-28 my-4 border-2 borders rounded-3xl">
        <h1 className="text-3xl texts">Want to know something????</h1>
        <h1 className="text-2xl"> E-mail US now: </h1>
        <h1 className="text-black hover:underline hover:texts cursor-pointer">
          XXXXXXX@example.com
        </h1>
      </section> */}

      <section className="flex flex-col justify-center items-center gap-4 my-12 mx-2">
        <h1 className="text-3xl">Our ceo</h1>
        <div className="flex justify-center items-center md:gap-4 flex-col md:flex-row">
          <TeamCard
            name="ZIDOUR Djebril"
            description="DJEBRIl ZIDOUR the founder of this ambicious platform "
          />
          <TeamCard
            name="ZIDOUR Djebril"
            description="DJEBRIl ZIDOUR the founder of this ambicious platform "
          />
          <TeamCard
            name="ZIDOUR Djebril"
            description="DJEBRIl ZIDOUR the founder of this ambicious platform "
          />
        </div>
        <Link to="/team">
          <Btn value="See more" />
        </Link>
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
