import React, { useState } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButton from "./CalculatorButton";

const Calculator = () => {
  const [output, setOutput] = useState("0.00");
  let lastOperator = "";
  const operators = "%/*-+";

  const calculation = (val) => {
    try {
      if (val == "X") {
        val = "*";
      }
      switch (val) {
        case "+":
        case "-":
        case "/":
        case "*":
        case "%":
          const lastChar = output[output.length - 1];
          lastOperator = val;
          if (operators.includes(lastChar)) {
            setOutput((prev) => {
              return prev.slice(0, -1) + val;
            });
            break;
          }
          setOutput((prev) => {
            return prev + val;
          });
          break;

        case "=":
          setOutput(eval(output).toString());
          break;
        case "AC":
          setOutput("0.00");
          break;
        case "C":
          setOutput((prev) => prev.slice(0, -1));
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
    } catch (error) {
      setOutput("Error");
    }
  };
  return (
    <div className="flex flex-col gap-2 justify-center items-center p-3 h-[90vh]">
      <CalculatorDisplay output={output} />
      <CalculatorButton calculation={calculation} />
    </div>
  );
};
export default Calculator;
