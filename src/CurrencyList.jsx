import React from "react";
import "./currency.css";

const CurrencyList = ({ currencyValues }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[30vh] h-[auto] w-full">
      <h1 className="text-3xl m-3 font-bold">Currencies And their Values</h1>
      <table className="w-[500px] h-[auto] min-w-[400px] snap-y">
        <thead className="font-bold">
          <tr>
            <td className="">Code</td>
            <td>Value in USD</td>
          </tr>
        </thead>
        <tbody>
          {currencyValues.map((item) => {
            return (
              <tr>
                <td>{item.code}</td>
                <td>{item.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyList;
