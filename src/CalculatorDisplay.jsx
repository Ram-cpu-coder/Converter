import React from "react";

const CalculatorDisplay = ({ output }) => {
  return (
    <div className="border text-right text-xl px-4 py-3 min-h-[60px] w-[300px] overflow-hidden">
      {output}
    </div>
  );
};

export default CalculatorDisplay;
