import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar";
import Btn from "../../components/Atomic/Btn";
import Footer from "../../components/Footer";
import TeamCard from "../dashboard/components/TeamCard";
import { Link, useNavigate } from "react-router-dom";
import i18n from "../../i18n"; // Make sure i18n is imported

let langue = true;
const Landing = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  console.log(langue);
  const langDirection = i18n.language === 'ar' ? 'row-reverse' : 'row';
  const textAlign = i18n.language === 'ar' ? 'right' : 'left';
  const displayNoneAr = i18n.language === 'ar' ? 'none' : 'flex'; // Changed to 'none'
  const displayYesAr = i18n.language === 'ar' ? 'flex' : 'none'; // Changed to 'none'

  return (
    <>
      <Navbar />

      {/* Language Switch Buttons */}
      <div className="flex justify-end m-4">
        <button
          className="px-4 py-2"
          onClick={() => {
            changeLanguage("en");
            langue = false;
          }}
        >
          English
        </button>
        <button
          className="px-4 py-2"
          onClick={() => {
            changeLanguage("fr");
            langue = false;
          }}
        >
          Français
        </button>
        <button
          className="px-4 py-2"
          onClick={() => {
            changeLanguage("ar");
            langue = true;
          }}
        >
          العربية
        </button>
      </div>

      {/* Hero Section */}
      <section className="flex items-center justify-center font-sans w-full py-12 my-16 ">
        <div
          style={{flexDirection: langDirection}}
          className="w-full flex items-center justify-center gap-16 md:flex-row flex-col md:mx-48"
        >
          <div className="md:w-1/2">
            <div style={{textAlign: textAlign}} className="mb-8 text-center lg:mx-0 md:text-left ">
              <h2 className="capitalize md:text-4xl text-2xl md:w-92 text-center md:text-start">
                {t("welcome")} <br />
                <span  className="text-green-400 text-4xl ">
                  {t("welcomeName")}
                </span>{" "}
                <span style={{ display: displayYesAr }} className="text-3xl">{t("des2")}</span>
                
                <span style={{ display: displayYesAr }} className="text-red-400 text-3xl">{t("problems")}</span>
                {t("platform_desc")}{" "}
               
                <span style={{ display: displayNoneAr }} className="text-red-400 text-3xl">{t("problems")}</span>
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

      {/* Mission Section */}
      <section className="my-10 py-16">
        <h1 className="text-5xl font-semibold text-center capitalize p-4">
          {t("our_mission")}
        </h1>
        <div className="flex justify-between items-center mx-12 lg:mx-28 my-2 flex-col md:flex-row gap-4 md:gap-0">
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-20"
              src="https://cdn-icons-png.flaticon.com/512/9831/9831318.png"
              alt=""
            />
            <h1 className="text-xl w-40 text-center capitalize">
              {t("understand_lessons")}
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
            <h1 className="text-xl w-40 text-center capitalize">
              {t("practice_learned")}
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
            <h1 className="text-xl w-40 text-center capitalize">
              {t("highest_mark")}
            </h1>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-4 my-12 mx-2">
        <h1 className="text-5xl font-semibold text-center  capitalize">
          our ceo
        </h1>
        <div className="flex justify-center items-center w-full md:flex-row flex-col gap-8 my-8 md:px-32  ">
          <div className="flex flex-col  items-center md:items-start md:w-1/2 md:p-4 gap-8">
            <h1 className="text-3xl md:text-5xl font-semi-bold">
              Zidour Djebril
            </h1>
            <p className="text-lg md:text-xl text-center md:text-start ">
              "To me, self-improvement is a journey that demands both
              intelligence and hard work, but above all, discipline. Without
              discipline, even the best intentions fall short."
            </p>
            <p className="text-lg md:text-xl text-center md:text-start ">
              "بالنسبة لي، تحسين الذات هو رحلة تتطلب الذكاء والعمل الجاد، ولكن
              الأهم من ذلك هو الانضباط. بدون الانضباط، حتى أفضل النوايا لا تحقق
              النجاح."
            </p>

            <div className="flex gap-8">
              <a href="https://github.com/DjebrilZidour" target="new">
                <img
                  className="w-12"
                  src="https://cdn-icons-png.flaticon.com/128/25/25231.png"
                  alt=""
                />
              </a>
              <a href="mailto:djebril.zidour.pro@gmail.com" target="new">
                <img
                  className="w-12"
                  src="https://cdn-icons-png.flaticon.com/128/542/542689.png"
                  alt=""
                />
              </a>
              <a href="https://djebril.pages.dev/" target="new">
                <img
                  className="w-12"
                  src="https://cdn-icons-png.flaticon.com/128/5891/5891729.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 w-4/5 flex justify-center items-center">
            <img
              class
              src="https://i.ibb.co/9WyBmLY/Design-sans-titre-1.png"
              alt=""
            />
          </div>
        </div>
        <h1 className="text-5xl font-semibold text-center  capitalize p-4">
          our Team
        </h1>
        <div className="flex justify-center items-center md:gap-4 flex-col md:flex-row mx-4">
          <TeamCard
            name="Prof1 "
            description="description prof 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi labore doloribus deleniti repudiandae ."
            img="https://images.pexels.com/photos/8720598/pexels-photo-8720598.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <TeamCard
            name="Prof2"
            description="description prof 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi labore doloribus deleniti repudiandae ."
            img="https://images.pexels.com/photos/8720598/pexels-photo-8720598.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <TeamCard
            name="Prof3"
            description="description prof 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi labore doloribus deleniti repudiandae ."
            img="https://images.pexels.com/photos/8720598/pexels-photo-8720598.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      <button onClick={() => i18n.changeLanguage("fr")}>FR</button>
      <button onClick={() => i18n.changeLanguage("ar")}>AR</button>

      <Footer />
    </>
  );
};

export default Landing;
