const Footer = () => {
  return (
    <footer className="background px-8 py-16 mt-8 ">
      <section className="flex justify-between items-center p-4 mx-20 flex-col gap-8 md:flex-row md:gap-0">
        <div className=" flex flex-col justify-center items-start">
          <h1 className="hover:underline cursor-pointer">Home</h1>
          <h1 className="hover:underline cursor-pointer">about</h1>
          <h1 className="hover:underline cursor-pointer">start learning</h1>
          <h1 className="hover:underline cursor-pointer">dashboard</h1>
          <h1 className="hover:underline cursor-pointer">version</h1>
        </div>
        <div className=" flex flex-col justify-center items-start">
          <h1 className="hover:underline cursor-pointer">tests</h1>
          <h1 className="hover:underline cursor-pointer">exams</h1>
          <h1 className="hover:underline cursor-pointer">summaries</h1>
          <h1 className="hover:underline cursor-pointer">free classes</h1>
          <h1 className="hover:underline cursor-pointer">free resourses</h1>
        </div>
        <div className="flex flex-col items-start justify center">
          <h1 className="text-2xl">CONTACT</h1>
          <h1 className="text-lg">Tel: 05555555</h1>
          <h1 className="text-lg">E-mail: XXXXXX@gmail.com</h1>
          <h1 className="text-lg">Adress: XXXXXXXXXXXXXX</h1>
          <div className="flex justify-center gap-4">
            <img
              className="w-8"
              src="https://cdn-icons-png.flaticon.com/128/6422/6422200.png"
              alt=""
            />
            <img
              className="w-8"
              src="https://cdn-icons-png.flaticon.com/128/6422/6422199.png"
              alt=""
            />
            <img
              className="w-8"
              src="https://cdn-icons-png.flaticon.com/128/6422/6422213.png"
              alt=""
            />
            <img
              className="w-8"
              src="https://cdn-icons-png.flaticon.com/128/6422/6422206.png"
              alt=""
            />
            <img
              className="w-8"
              src="https://cdn-icons-png.flaticon.com/128/6422/6422210.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="text-center text-amber-700 mt-4">
        <h1>privarcy and terms of uses</h1>
        <h1>all copyrights 2023®s</h1>
      </section>
    </footer>
  );
};
export default Footer;

{
  /* <a href="#" className="hover:underline">
          Contact
        </a>
        <span className="mx-3">•</span>
        <a href="#" className="hover:underline">
          Privacy
        </a> */
}
