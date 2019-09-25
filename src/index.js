import React, { useState } from "react";
import ReactDOM from "react-dom";
import SelectCities from "./SelectCities";
import "./styles.css";

function App() {
  const [inputValue, setValue] = useState("");
  return (
    <div className="react-select-cities">
      <SelectCities
        maxCountriesNumber={5}
        onInputChange={value => {
          const inputValue = value.replace(/\W/g, "");
          setValue(inputValue);
          return inputValue;
        }}
        inputValue={inputValue}
        onChange={(a, b) => {
          console.log("from Parent: ", a, b);
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
