import React from "react";

const CurrencyList = ({ dataList }) => {
  return (
    <>
      <div>Currency And their Values</div>
      <table>
        <thead className="font-bold">
          <tr>
            <td className="italic">Currency Code</td>
            <td>Value in USD</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* ==================================== */}
            {}
            <td id="data"></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CurrencyList;
