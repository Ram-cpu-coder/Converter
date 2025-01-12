import React, { useState } from "react";
import CurrencyList from "./CurrencyList";

const CurrencyConverter = () => {
  const dataList = {
    ADA: {
      code: "ADA",
      value: 0.9268621256,
    },
    AED: {
      code: "AED",
      value: 3.6724106328,
    },
    AFN: {
      code: "AFN",
      value: 67.9569382546,
    },
    ALL: {
      code: "ALL",
      value: 92.5572394152,
    },
    AMD: {
      code: "AMD",
      value: 392.7355219814,
    },
    ANG: {
      code: "ANG",
      value: 1.7848002816,
    },
  };

  let codeDataList = "";
  let valueDataList = 0;
  Object.keys(dataList).map((item) => {
    codeDataList = item;
    valueDataList = dataList[item].value;
  });

  const [input, setInput] = useState("0");
  const [code, setCode] = useState("");
  const [currencyValues, setCurrencyValues] = useState([
    { code: "USD", value: 1.0 },
    { code: "EUR", value: 0.93 },
    { code: "GBP", value: 0.81 },
    { code: "JPY", value: 148.62 },
    { code: "AUD", value: 1.55 },
    { code: "CAD", value: 1.37 },
    { code: "CHF", value: 0.89 },
    { code: "CNY", value: 7.15 },
    { code: "INR", value: 83.45 },
    { code: "BRL", value: 5.17 },
  ]);

  const handleInputValue = (e) => {
    setInput(e.target.value);
  };
  const conversion = () => {
    const tempCurrencyList = Object.keys(dataList).map((item) => {
      return {
        code: item,
        value: ((dataList[code].value * input) / dataList[item].value).toFixed(
          2
        ),
      };
    });

    setCurrencyValues(tempCurrencyList);
  };

  const handleOnCurrencySelection = (e) => {
    const value = e.target.value;
    setCode(value);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center border">
        <div className="flex md:flex-row sm:flex-row flex-col md:justify-center md:items-center justify-center items-center w-[100%] p-5 h-[auto] min-h-[90vh]">
          <div className="flex flex-col justify-center items-center gap-2 w-[auto]">
            <h1 className="text-5xl font-bold text-center">
              Currency Converter
            </h1>
            <div className="">
              <input
                type="number"
                name=""
                id="inputField"
                placeholder="Amount"
                className="text-center border rounded py-2 px-3 m-3"
                onChange={handleInputValue}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <select
                name="currency"
                className="rounded px-3 py-1 bg-sky-500 text-white"
                onChange={handleOnCurrencySelection}
              >
                {Object.keys(dataList).map((item) => {
                  return (
                    <option
                      value={dataList[item].code}
                      key={dataList[item].code}
                    >
                      {item}
                    </option>
                  );
                })}
              </select>
              <button
                className="bg-blue-400 text-white rounded px-3 py-1 m-2"
                onClick={conversion}
              >
                Convert
              </button>
            </div>
            <hr />
          </div>
          <CurrencyList currencyValues={currencyValues} />
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
