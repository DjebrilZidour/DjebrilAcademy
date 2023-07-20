import Navbar from "../../components/Navbar";

const NotAllowed = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center text-red-600 font-bold text-3xl h-screen ">
        <p>Not allowed</p>
      </div>
    </>
  );
};

export default NotAllowed;
