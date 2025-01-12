import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center min-h-[90vh] w-[80vw]">
        <h1 className="font-bold text-5xl m-3 mb-5">Converters</h1>
        <div className="flex flex-wrap justify-center items-center  gap-4 ">
          <ServiceCard title={"Length Converter"} link={"/lengthConverter"} />
          <ServiceCard title={"Mass Converter"} link={"/massCalculator"} />
          <ServiceCard
            title={"Temperature Converter"}
            link={"/temperatureConverter"}
          />
          <ServiceCard
            title={"Currency Converter"}
            link={"/currencyConverter"}
          />
          <ServiceCard title={"Calculator"} link={"/calculator"} />
          <ServiceCard title={"Not To Do List"} link={"/notToDoList"} />
        </div>
      </div>
    </div>
  );
};

export default Services;
