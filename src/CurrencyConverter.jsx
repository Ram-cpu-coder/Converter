import React from "react";
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

  return (
    <div>
      <h1>Currency Converter</h1>
      <div className="">
        <input type="number" name="" id="inputField" placeholder="Amount" />
      </div>
      <div>
        <select name="currency">
          {Object.keys(dataList).map((item) => {
            return (
              <option value={dataList[item].code} key={dataList[item].code}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <button>Convert</button>
      <hr />

      <CurrencyList dataList={dataList} />
    </div>
  );
};

export default CurrencyConverter;
