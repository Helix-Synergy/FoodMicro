import React from "react";
import EventSchedule from "../components/EventSchedule";
import { banner_style } from "../Styles/styles";
import Sche from "../assets/Images1/Sche.png"
const Schedule = () => {
  return (
    <div className="container mx-auto ">
      <section className="container w-[90%] mx-auto flex flex-col items-center justify-center">
      <div
  className={`${banner_style} schedule-banner`}
  style={{
    backgroundImage: `url(${Sche})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold px-4">
           FOODMICRO - 2026
          </h1>
        </div>
        <EventSchedule
          height={"auto"}
          name={"Download"}
          link={"/pharmaTech_schedule.pdf"}
        />

      
      </section>
    </div>
  );
};

export default Schedule;
