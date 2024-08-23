import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <>
      <section className="flex flex-col justify-center items-center gap-2  border-2 px-4 py-2 rounded-3xl">
        <div className="flex justify-center items-center gap-2 ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="bg-gray-200 p-2 rounded-xl">{timeLeft.days}</h1>
          </div>

          <h1 className="text-3xl">:</h1>
          <div className="flex flex-col justify-center items-center">
            <h1 className="bg-gray-200 p-2 rounded-xl">{timeLeft.hours}</h1>
          </div>

          <h1 className="text-3xl">:</h1>

          <div className="flex flex-col justify-center items-center">
            <h1 className="bg-gray-200 p-2 rounded-xl">{timeLeft.minutes}</h1>
          </div>

          <h1 className="text-3xl">:</h1>
          <div className="flex flex-col justify-center items-center justify-center items-center">
            <h1 className="bg-gray-200 p-2 rounded-xl">{timeLeft.seconds}</h1>
          </div>
        </div>
        <div className="flex gap-4">
          <span>Days</span>
          <span>Hours</span>
          <span>Minutes</span>
          <span>Seconds</span>
        </div>
      </section>
    </>
  );
};

export default Countdown;
