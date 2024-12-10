import React from "react";
import "./currency.css";

const CurrencyList = ({ currencyValues }) => {
  return (
    <>
      <h1>Currency And their Values</h1>
      <table className="table">
        <thead className="font-bold">
          <tr>
            <td>Code</td>
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
    </>
  );
};

export default CurrencyList;
