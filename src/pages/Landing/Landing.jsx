import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar";
import Btn from "../../components/Atomic/Btn";
import Footer from "../../components/Footer";
import TeamCard from "../dashboard/components/TeamCard";
import { Link, useNavigate } from "react-router-dom";
import i18n from "../../i18n";

const Landing = ({ language }) => {
  const [isMediumScreen, setIsMediumScreen] = useState(window.matchMedia("(min-width: 768px)").matches);
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language); // Set language based on route
  }, [language]);

  const navigate = useNavigate();

  useEffect(() => {
    const checkScreenSize = () => {
      const mediumScreen = window.matchMedia("(min-width: 768px)").matches;
      setIsMediumScreen(mediumScreen);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const langDirection = i18n.language === "ar" ? "row-reverse" : "row";
  const textAlign = i18n.language === "ar" ? "right" : "left";
  const displayNoneAr = i18n.language === "ar" ? "none" : "block";
  const displayYesAr = i18n.language === "ar" ? "block" : "none";

  const styles = {
    container: {
      display: 'flex',
      flexDirection: isMediumScreen ? langDirection : 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      padding: '10px',
    },
    item: {
      margin: '10px',
      padding: '10px',
      backgroundColor: 'lightgray',
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="flex items-center justify-center font-sans w-full py-12 my-16">
        <div
          style={styles.container}
          className=" flex items-center justify-center gap-16  md:mx-24 mx-8"
        >
          <div className="md:w-1/2">
            <div
              style={{ textAlign: textAlign }}
              className="mb-8 text-center lg:mx-0 md:text-left "
            >
              <h2 className="capitalize md:text-4xl text-2xl md:w-92 text-center md:text-start">
                {t("welcome")} <br />
                <span className="text-green-400 text-4xl">
                  {t("welcomeName")}
                </span> <br />
                <span style={{ display: displayYesAr }} className="text-3xl">
                  {t("des2")}
                </span>
                <span
                  style={{ display: displayYesAr }}
                  className="text-red-400 text-3xl"
                >
                  {t("problems")}
                </span>
                {t("platform_desc")}
                <span
                  style={{ display: displayNoneAr }}
                  className="text-red-400 md:text-4xl md:text-left text-center"
                >
                  {t("problems")}
                </span>
                <span style={{ display: displayNoneAr }} className="text-3xl">
                  {t("des2")}
                </span>
              
              </h2>
              <p className="text-center md:text-start visible mx-0 mt-3 mb-0 text-sm leading-relaxed text-left text-slate-400">
                PLATFORM FOR MATHELEM BRANCHE
              </p>
            </div>

            <div className="text-center md:text-left">
              <Btn
                value={t("get_course")}
                onClick={() => {
                  navigate("/dashboard/learning-grade");
                }}
              />
              <Link to="/about">
                <button className="text-black font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 px-4 ml-4">
                  {t("learn_more")}
                </button>
              </Link>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              className="rounded-3xl p-4 md:p-0 w-full"
              src="https://plus.unsplash.com/premium_photo-1671069848005-7231fc25703f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0dWR5aW5nfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* Other sections */}
    </>
  );
};

export default Landing;
