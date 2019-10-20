import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import ListItem from "./ListItem";
import "./styles.css";
import debounce from 'lodash.debounce';

let debouncedOnChange; 

const SelectCities = ({
  onChange,
  inputValue,
  onInputChange,
  loadOptions,
  maxSelectedItems = Infinity,
  labelOption = 'name',
  valueOption = '_id',
  typeOption = 'type',
  customType = 'country',
  debounceTime = 300,
  defaultValue = [],
  placeholder='Select...',
  value = [],
  ...props
}) => {
  const [currentSelectedValues, selectValues] = useState([...value]);
  useEffect(() => {
    debouncedOnChange = debounce(loadOptions, debounceTime);
    renderCountriesList();
  }, [])
  const checkCountries = (currentValues, action) => {
    const numberOfCountries = currentValues.reduce(
      (acc, country) => (acc += Number(country[typeOption] === customType)),
      0
    );
    if (numberOfCountries > maxSelectedItems) {
      const lastElement = getLastElement(currentValues);
      if (lastElement[typeOption] !== customType) {
        onChange(currentValues, action);
        selectValues(currentValues);
      }
    } else {
      onChange(currentValues, action);
      selectValues(currentValues);
    }
  };

  const renderCountriesList = () => {
    return currentSelectedValues.map(country => (
      <ListItem
        item={country}
        onRemoveItem={id => {
          const newItems = currentSelectedValues.filter(
            country => country[valueOption] !== id
          );
          selectValues(newItems);
          checkCountries(newItems, null);
        }}
        valueOption={valueOption}
        labelOption={labelOption}
        typeOption={typeOption}
        customType={customType}
      />
    ));
  }

  const getLastElement = arr => arr[arr.length - 1];

  return (
    <div className="reactSelectCities" {...props}>
      <AsyncSelect
        backspaceRemovesValue={false}
        isClearable={false}
        styles={{
          multiValue: () => ({ display: "none" }),
          multiValueRemove: base => ({ ...base, display: "none" })
        }}
        getOptionLabel={option => option[labelOption]}
        getOptionValue={option => option[valueOption]}
        loadOptions={debouncedOnChange}
        onInputChange={onInputChange}
        value={currentSelectedValues}
        onChange={(currentValues, action) => { checkCountries(currentValues, action); }}
        inputValue={inputValue}
        defaultValue={defaultValue}
        placeholder={placeholder}
        isMulti
      />
      <ul className="list">
        {currentSelectedValues && renderCountriesList()}
      </ul>
    </div>
  );
};

export default SelectCities;
