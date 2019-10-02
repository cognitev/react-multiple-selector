import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import ListItem from "./ListItem";
import "./styles.css";

const SelectCities = ({
  onChange,
  inputValue,
  onInputChange,
  loadOptions,
  maxCountriesNumber
}) => {
  const [currentSelectedValues, selectValues] = useState([]);

  const renderCountriesList = () =>
    currentSelectedValues.map(country => (
      <ListItem
        {...country}
        onRemoveItem={id => {
          const newItems = currentSelectedValues.filter(
            country => country._id !== id
          );
          selectValues(newItems);
        }}
      />
    ));

  return (
    <div className="reactSelectCities">
      <AsyncSelect
        backspaceRemovesValue={false}
        isClearable={false}
        styles={{
          multiValue: () => ({ display: "none" }),
          multiValueRemove: base => ({ ...base, display: "none" })
        }}
        getOptionLabel={country => country.name}
        getOptionValue={country => country._id}
        loadOptions={loadOptions}
        onInputChange={onInputChange}
        value={currentSelectedValues}
        onChange={(currentValues, action) => {
          const numberOfCountries = currentValues.reduce(
            (acc, country) => (acc += Number(country.type === "country")),
            0
          );
          if (numberOfCountries > maxCountriesNumber) {
            const lastElement = getLastElement(currentValues);
            if (lastElement.type !== "country") {
              onChange(currentValues, action);
              selectValues(currentValues);
            }
          } else {
            onChange(currentValues, action);
            selectValues(currentValues);
          }
        }}
        inputValue={inputValue}
        isMulti
      />
      <ul className="list">
        {currentSelectedValues && renderCountriesList()}
      </ul>
    </div>
  );
};

export default SelectCities;
