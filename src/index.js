import React, { useEffect } from "react";
import AsyncSelect from "react-select/async";
import { components } from 'react-select';
import ListItem from "./ListItem";
import "./styles.css";
import debounce from 'lodash.debounce';
import { AutoSizer, List } from "react-virtualized";

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
  noOptionsMessage='Enter a location to target',
  value = [],
  ...props
}) => {
  useEffect(() => {
    debouncedOnChange = debounce(loadOptions, debounceTime);
    renderCountriesList();
  }, []);

  const renderCountriesList = () => {
    return Array.isArray(value) && value.map(country => <ListItem
      item={country}
      onRemoveItem={id => {
        const newItems = value.filter(
          country => country[valueOption] !== id
        );
        onChange(newItems);
      }}
      valueOption={valueOption}
      labelOption={labelOption}
      typeOption={typeOption}
      customType={customType}
    />);
  }

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
        value={value}
        onChange={(currentValues) => { onChange(currentValues); }}
        inputValue={inputValue}
        defaultValue={defaultValue}
        placeholder={placeholder}
        components={{ DropdownIndicator: () => null, MenuList: (props) => 
          <components.MenuList {...props}>
            {props.children.length
              ? <List
                  width={900}
                  height={200}
                  rowHeight={35}
                  style={{ width: '100%' }}
                  rowRenderer={({index, key, style}) => <li style={{...style, width: '100%'}} key={key}>{props.children[index]}</li>}
                  rowCount={props.children.length}
                />
              : props.children
            }
          </components.MenuList>
        }}
        noOptionsMessage={() => noOptionsMessage}
        isMulti
      />
        <ul className="list">
          {value && renderCountriesList()}
        </ul>
    </div>
  );
};

export default SelectCities;
