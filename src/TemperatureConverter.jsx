import React from "react";
import { useState } from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [kelvin, setKelvin] = useState("");
  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value !== "" ? (value * 9) / 5 + 32 : "");
    setKelvin(value);
  };
  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value !== "" ? ((value - 32) * 5) / 9 : "");
    setKelvin(value);
  };
  const handleKelvinChange = (e) => {
    const { value } = e.target;
    setKelvin(value);
    setCelsius(value);
    setFahrenheit(value);
  };
  const resetFields = () => {
    setCelsius("");
    setFahrenheit("");
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center gap-4">
      <h2 className="font-bold text-2xl">Temperature Converter</h2>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex flex-col justify-center items-center">
            <label htmlFor="celsius" className="form-label">
              Celsius (°C)
            </label>
            <input
              type="number"
              id="celsius"
              className="text-center"
              value={celsius}
              onChange={handleCelsiusChange}
              placeholder="Enter Celsius"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label htmlFor="fahrenheit" className="form-label">
              Fahrenheit (°F)
            </label>
            <input
              type="number"
              id="fahrenheit"
              className="text-center"
              value={fahrenheit}
              onChange={handleFahrenheitChange}
              placeholder="Enter Fahrenheit"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label htmlFor="fahrenheit" className="form-label">
              Kelvin (°K)
            </label>
            <input
              type="number"
              id="kelvin"
              className="text-center"
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
  );
};

export default TemperatureConverter;
