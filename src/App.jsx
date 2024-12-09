import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import LengthConverter from "./LengthConverter";
import TemperatureConverter from "./TemperatureConverter";

function App() {
  return (
    <>
      <div className="h-[100vh] flex flex-col justify-center items-center gap-4">
        <LengthConverter />
      </div>
      <div className="h-[100vh] flex flex-col justify-center items-center gap-4">
        <TemperatureConverter />
      </div>
    </>
  );
}

export default App;
