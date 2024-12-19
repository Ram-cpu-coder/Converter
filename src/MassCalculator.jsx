import React, { useRef, useState } from "react";

const MassCalculator = () => {
  const [toUnit, setToUnit] = useState("");
  const [fromInput, setFromInput] = useState("");
  const [fromUnit, setFromUnit] = useState("");
  const fromRef = useRef("");
  const toRef = useRef("");

  const handleFromUnitChange = () => {
    setFromUnit(fromRef.current.value);
  };
  const handleToUnitChange = () => {
    setToUnit(toRef.current.value);
  };
  console.log("From", fromRef.current.value);
  console.log("To", toRef.current.value);
  const handleSwapOnClick = () => {
    setToUnit(fromUnit);
    setFromUnit(toUnit);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mb-5">Mass Calculator</h1>
      <div className="from flex justify-center items-center gap-3 m-2">
        <label htmlFor="from">
          <select
            name="From"
            id="From"
            ref={fromRef}
            onChange={handleFromUnitChange}
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
          <select name="To" id="To" ref={toRef} onChange={handleToUnitChange}>
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
        />
      </div>
    </div>
  );
};

export default MassCalculator;
