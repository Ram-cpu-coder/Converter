import React, { useState } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButton from "./CalculatorButton";

const Calculator = () => {
  const [output, setOutput] = useState("0.00");
  let lastOperator = "";
  const operators = "%/*-+";

  const removeLastChar = () => {
    setOutput((prev) => prev.slice(0, -1));
  };

  const calculation = (val) => {
    switch (val) {
      case operators.includes(val):
        const lastChar = output[output.length - 1];
        lastOperator = val;
        if (operators.includes(lastChar)) {
          removeLastChar();
        }
      case "=":
        setOutput(eval(output));
        break;
      case "AC":
        setOutput("0.00");
        break;
      case "C":
        removeLastChar();
        break;
      case ".":
        const indexOfLastOperator = output.lastIndexOf(lastOperator);
        const lastNumberSet = output.slice(indexOfLastOperator);

        //when there is operator
        if (lastNumberSet.includes(".")) return;
        //when there is no operator
        if (!lastOperator && output.includes(".")) {
          return;
        }

      default:
        setOutput((prev) => {
          if (parseInt(prev) == 0) {
            return val;
          } else {
            return prev + val;
          }
        });
        break;
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <CalculatorDisplay output={output} />
      <CalculatorButton calculation={calculation} />
    </div>
  );
};
export default Calculator;
