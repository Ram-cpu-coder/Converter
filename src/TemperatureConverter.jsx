import React from "react";
import { useState } from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [kelvin, setKelvin] = useState("");
  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value !== "" ? ((value * 9) / 5 + 32).toFixed(2) : "");
    setKelvin(value !== "" ? (parseFloat(value) + 273.15).toFixed(2) : "");
  };
  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value !== "" ? (((value - 32) * 5) / 9).toFixed(2) : "");
    setKelvin(value !== "" ? ((5 / 9) * (value - 32) + 273.15).toFixed(2) : "");
  };
  const handleKelvinChange = (e) => {
    const { value } = e.target;
    setKelvin(value);
    setCelsius(value !== "" ? (value - 273.15).toFixed(2) : "");
    setFahrenheit(
      value !== "" ? ((9 / 5) * (value - 273.15) + 32).toFixed(2) : ""
    );
  };
  const resetFields = () => {
    setCelsius("");
    setFahrenheit("");
    setKelvin("");
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4 min-h-[90vh] w-[80vw]">
        <h2 className="font-bold text-5xl">Temperature Converter</h2>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-between gap-3 border p-3">
            <div className="flex justify-between items-center gap-3">
              <label htmlFor="celsius" className="">
                Celsius (°C)
              </label>
              <input
                type="number"
                id="celsius"
                className="text-center border-bottom"
                value={celsius}
                onChange={handleCelsiusChange}
                placeholder="Enter Celsius"
              />
            </div>
            <div className="flex justify-between items-center gap-3">
              <label htmlFor="fahrenheit" className="">
                Fahrenheit (°F)
              </label>
              <input
                type="number"
                id="fahrenheit"
                className="text-center border-bottom"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
                placeholder="Enter Fahrenheit"
              />
            </div>
            <div className="flex justify-between items-center gap-3">
              <label htmlFor="fahrenheit" className="">
                Kelvin (°K)
              </label>
              <input
                type="number"
                id="kelvin"
                className="text-center border-bottom"
                value={kelvin}
                onChange={handleKelvinChange}
                placeholder="Enter Kelvin"
              />
            </div>
            <button
              className="mt-3 border py-2 px-5 rounded-lg bg-[red] text-white hover:bg-red-500"
              onClick={resetFields}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;
