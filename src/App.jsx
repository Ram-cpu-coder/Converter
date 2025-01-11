import { useState } from "react";
import "./App.css";
import "flowbite/dist/flowbite.css"; // Import Flowbite CSS here
import { Route, Routes } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";

import CurrencyConverter from "./CurrencyConverter";
import NotToDoList from "./NotToDoList";
import LengthConverter from "./LengthConverter";
import MassCalculator from "./MassCalculator";
import TemperatureConverter from "./TemperatureConverter";
import Calculator from "./Calculator";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <div className="min-h-[90vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          <Route path="/lengthConverter" element={<LengthConverter />} />
          <Route path="/massCalculator" element={<MassCalculator />} />
          <Route
            path="/temperatureConverter"
            element={<TemperatureConverter />}
          />
          <Route path="/currencyConverter" element={<CurrencyConverter />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/notToDoList" element={<NotToDoList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
