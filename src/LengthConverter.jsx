import React, { useState } from "react";
import { calculateLength } from "./helpers/calculateLength";

const LengthConverter = () => {
  const [fromLength, setFromLength] = useState("m");
  const [toLength, setToLength] = useState("cm");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleLengthCalculation = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);

    const value = e.target.value;

    let outputValue = calculateLength(fromLength, toLength, value);
    setResult(outputValue);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold pb-4">Length Converter</h1>
      <div className="flex flex-col justify-center items-center">
        <div>
          <label htmlFor="from" className="font-bold m-2"></label>

          <select
            name="from"
            id="unitInitial"
            onChange={(e) => {
              setFromLength(e.target.value);
            }}
            defaultValue={fromLength}
          >
            <option value="m">Meter</option>
            <option value="cm">Centimeter</option>
            <option value="km">Kilometer</option>
          </select>

          <input
            type="number"
            name=""
            id=""
            className="border rounded-lg m-4 p-2 text-center"
            onChange={handleLengthCalculation}
            value={inputValue}
            placeholder="Enter the Value..."
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
          />
        </svg>

        <div>
          <label htmlFor="to" className="font-bold m-2"></label>

          <select
            name="to"
            id="unit"
            onChange={(e) => {
              setToLength(e.target.value);
            }}
            defaultValue={toLength}
          >
            <option value="m">Meter</option>
            <option value="cm">Centimeter</option>
            <option value="km">Kilometer</option>
          </select>

          <input
            type="number"
            name=""
            id=""
            className=" m-4 p-2 text-center border-2 rounded-lg"
            placeholder="Centimeter"
            readOnly
            value={result}
          />
        </div>
      </div>
      <button
        type="button"
        className="border py-2 px-5 rounded-lg bg-[red] text-white hover:bg-red-500"
        onClick={() => {
          setFromLength("");
          setInputValue("");
          setToLength("");
          setResult("");
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default LengthConverter;
