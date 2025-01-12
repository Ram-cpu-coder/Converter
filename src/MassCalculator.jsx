import React, { useRef, useState } from "react";
import { massCalculatorOperation } from "./helpers/CalculateMass";

const MassCalculator = () => {
  const [toUnit, setToUnit] = useState("To");
  const [fromUnit, setFromUnit] = useState("From");
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");

  const fromRef = useRef("");
  const toRef = useRef("");

  const fromInputRef = useRef("");
  const toInputRef = useRef("");

  const handleFromChange = () => {
    setFromInput(fromInputRef.current.value);
    const value = fromInputRef.current.value;
    const output = massCalculatorOperation(fromUnit, toUnit, value);
    setToInput(output);
  };
  const handleSwapOnClick = () => {
    setToUnit(fromUnit);
    setFromUnit(toUnit);

    setToInput(fromInput);
    setFromInput(toInput);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center min-h-[90vh] w-[80vw]">
        <h1 className="mb-5 font-bold text-5xl text-center">Mass Calculator</h1>
        <div className="from flex justify-center items-center gap-3 m-2">
          <label htmlFor="from">
            <select
              name="From"
              id="From"
              ref={fromRef}
              onChange={() => {
                setFromUnit(fromRef.current.value);
              }}
              value={fromUnit}
            >
              <option value="">Choose Mass unit</option>
              <option value="kg">Kilogram</option>
              <option value="gm">Gram</option>
              <option value="mg">Milligram</option>
            </select>
          </label>
          <input
            type="number"
            name="from"
            id="from"
            className="border rounded-lg p-2"
            placeholder={fromUnit}
            ref={fromInputRef}
            onChange={handleFromChange}
            value={fromInput}
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 m-3"
          onClick={handleSwapOnClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
          />
        </svg>

        <div className="to flex justify-center items-center gap-3 m-2">
          <label htmlFor="to">
            <select
              name="To"
              id="To"
              ref={toRef}
              onChange={() => {
                setToUnit(toRef.current.value);
              }}
              value={toUnit}
            >
              <option value="">Choose Mass unit</option>
              <option value="kg">Kilogram</option>
              <option value="gm">Gram</option>
              <option value="mg">Milligram</option>
            </select>
          </label>
          <input
            type="number"
            name="to"
            id="to"
            className="border rounded-lg p-2"
            placeholder={toUnit}
            ref={toInputRef}
            onChange={() => {
              setToInput(toInputRef.current.value);
            }}
            value={toInput}
            readOnly
          />
        </div>
        <button
          className="border px-4 py-1 rounded-lg bg-[red] text-white m-3"
          onClick={() => {
            setFromInput("");
            setToInput("");
            setFromUnit("");
            setToUnit("");
          }}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default MassCalculator;
