import { useState } from "react";
import "./App.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CurrencyConverter from "./CurrencyConverter";

import LengthConverter from "./LengthConverter";
import TemperatureConverter from "./TemperatureConverter";
import Calculator from "./Calculator";

function App() {
  const [application, setApplication] = useState("");
  return (
    <>
      <button>Length Converter</button>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="lengthConverter" title="Length Converter">
          <div className="h-[100vh] flex flex-col justify-center items-center gap-4">
            <LengthConverter />
          </div>
        </Tab>

        <Tab eventKey="temperatureConverter" title="Temperature Converter">
          <div className="h-[100vh] flex flex-col justify-center items-center gap-4">
            <TemperatureConverter />
          </div>
        </Tab>

        <Tab eventKey="currencyConverter" title="Currency Converter">
          <div className="h-[100vh] flex flex-col justify-center items-center gap-4">
            <CurrencyConverter />
          </div>
        </Tab>

        <Tab eventKey="Calculator" title="Calculator">
          <div className="h-[100vh] flex flex-col justify-center items-center gap-4">
            <Calculator />
          </div>
        </Tab>
      </Tabs>
    </>
  );
}
export default App;
