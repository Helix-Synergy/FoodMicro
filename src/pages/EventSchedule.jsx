import React from "react";
import EventSchedule from "../components/EventSchedule";
import { banner_style } from "../Styles/styles";

const Schedule = () => {
  return (
    <div className="container mx-auto ">
      <section className="container w-[90%] mx-auto flex flex-col items-center justify-center">
      <div
  className={`${banner_style} schedule-banner`}
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1551135049-8a33b5883817?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBkaXNjdXNzaW9ufGVufDB8fDB8fHww')",
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
