import React from "react";
import "./calculator.css";

const CalculatorButton = ({ calculation }) => {
  const handleOnClick = (event) => {
    calculation(event.target.innerHTML);
  };

  return (
    <div className="grid gap-4 grid-cols-4 grid-rows-5 text-xl">
      <button
        onClick={handleOnClick}
        className="box-shadow py-2.5 px-3 rounded-[50%] border"
      >
        AC
      </button>
      <button
        onClick={handleOnClick}
        className="box-shadow py-2.5 px-3 rounded-[50%] border"
      >
        C
      </button>
      <button
        onClick={handleOnClick}
        className="box-shadow py-2.5 px-3 rounded-[50%] border"
      >
        %
      </button>
      <button
        onClick={handleOnClick}
        className="box-shadow py-2.5 px-3 rounded-[50%] border"
      >
        /
      </button>
      <button
        onClick={handleOnClick}
        className="box-shadow py-2.5 px-3 rounded-[50%] border"
      >
        7
      </button>
      <button
        onClick={handleOnClick}
        className="box-shadow py-2.5 px-3 rounded-[50%] border"
      >
        8
      </button>
      <button
        onClick={handleOnClick}
        className="box-shadow py-2.5 px-3 rounded-[50%] border"
      >
        9
      </button>
      <button
        onClick={handleOnClick}
        className="box-shadow py-2.5 px-3 rounded-[50%] border"
      >
        X
      </button>
      <button
        onClick={handleOnClick}
        className="box-shadow py-2.5 px-3 rounded-[50%] border"
      >
        4
      </button>
      <button
        onClick={handleOnClick}
        className="box-shadow py-2.5 px-3 rounded-[50%] border"
      >
        5
      </button>
      <button
        onClick={handleOnClick}
        className="box-shadow py-2.5 px-3 rounded-[50%] border"
      >
        6
      </button>
      <button
        onClick={handleOnClick}
        className="box-shadow py-2.5 px-3 rounded-[50%] border"
      >
        -
      </button>
      <button
        onClick={handleOnClick}
        className="box-shadow py-2.5 px-3 rounded-[50%] border"
      >
        1
      </button>
      <button
        onClick={handleOnClick}
        className="box-shadow py-2.5 px-3 rounded-[50%] border"
      >
        2
      </button>
      <button
        onClick={handleOnClick}
        className="box-shadow py-2.5 px-3 rounded-[50%] border"
      >
        3
      </button>
      <button
        onClick={handleOnClick}
        className="box-shadow py-2.5 px-3 rounded-[50%] border"
      >
        +
      </button>
      <button
        onClick={handleOnClick}
        className="box-shadow py-2.5 px-3 rounded-[50%] border"
      >
        00
      </button>
      <button
        onClick={handleOnClick}
        className="box-shadow py-2.5 px-3 rounded-[50%] border"
      >
        0
      </button>
      <button
        onClick={handleOnClick}
        className="box-shadow py-2.5 px-3 rounded-[50%] border"
      >
        .
      </button>
      <button
        onClick={handleOnClick}
        className="box-shadow py-2.5 px-3 rounded-[50%] border"
      >
        =
      </button>
    </div>
  );
};
export default CalculatorButton;
