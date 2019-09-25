import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import { countries } from "./data";
import ListItem from "./ListItem";
import styles from "./styles.module.scss";

const getLastElement = a => a[a.length - 1];
const filterColors = inputValue =>
  countries.filter(i =>
    i.name.toLowerCase().includes(inputValue.toLowerCase())
  );

const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

const SelectCities = ({
  onChange,
  inputValue,
  onInputChange,
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
    <>
      <AsyncSelect
        backspaceRemovesValue={false}
        isClearable={false}
        styles={{
          multiValue: () => ({ display: "none" }),
          multiValueRemove: base => ({ ...base, display: "none" })
        }}
        getOptionLabel={country => country.name}
        getOptionValue={country => country._id}
        loadOptions={promiseOptions}
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
      <ul className={styles.list}>
        {currentSelectedValues && renderCountriesList()}
      </ul>
    </>
  );
};

export default SelectCities;
