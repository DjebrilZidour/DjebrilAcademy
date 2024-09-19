import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ResponsiveSideBar = () => {
  const {t} = useTranslation
  return (
    <section className="w-full">
      <div className="flex justify-center items-center gap-4  m-4 bg-green-200 border-2 border-green-400 rounded-2xl py-4 px-4">
        <Link to="/dashboard/home">
          <img
            className="w-14 "
            src="https://cdn-icons-png.flaticon.com/128/3917/3917711.png"
            alt=""
          />
        </Link>

        <Link to="/dashboard/learning-grade">
          <img
            className="w-14 m-2"
            src="https://cdn-icons-png.flaticon.com/128/4185/4185218.png"
          />
        </Link>
        <Link to="/dashboard/vidéos">
          <img
            className="w-12 m-4"
            src="https://cdn-icons-png.flaticon.com/128/2991/2991195.png"
          />
        </Link>
        <Link to="/dashboard/educational-news">
          <img
            className="w-12 m-4"
            src="https://cdn-icons-png.flaticon.com/128/3208/3208799.png"
          />
        </Link>
      </div>
    </section>
  );
};
export default ResponsiveSideBar;
