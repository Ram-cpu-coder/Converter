import React, { useState } from "react";
import { calculateLength } from "./helpers/calculateLength";

const LengthConverter = () => {
  const [fromLength, setFromLength] = useState("cm");
  const [toLength, setToLength] = useState("m");
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
        <label for="from" className="font-bold m-2">
          From:
        </label>

        <select
          name="from"
          id="unitInitial"
          onChange={(e) => {
            setFromLength(e.target.value);
          }}
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
        />

        <label for="to" className="font-bold m-2">
          To:
        </label>

        <select
          name="to"
          id="unit"
          onChange={(e) => {
            setToLength(e.target.value);
          }}
        >
          <option value="m">Meter</option>
          <option value="cm">Centimeter</option>
          <option value="km">Kilometer</option>
        </select>

        <input
          type="number"
          name=""
          id=""
          className="rounded-lg m-4 p-2 text-center"
          readOnly
          value={result}
        />
      </div>
      <button
        type="button"
        className="border py-2 px-5 rounded-lg bg-[red] text-white hover:bg-red-500"
      >
        Reset
      </button>
    </div>
  );
};

export default LengthConverter;
