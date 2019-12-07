import React, {useEffect} from "react";
import AsyncSelect from "react-select/async";
import {components} from 'react-select';
import ListItem from "./ListItem";
import "./styles.css";
import debounce from 'lodash.debounce';
import {List} from "react-virtualized";

let debouncedOnSearch;

const MultiSelect = ({
                       onSelect,
                       onSearch = () => {},
                       labelOption = 'name',
                       valueOption = 'value',
                       typeOption = 'type',
                       debounceTime = 300,
                       defaultSelectedOptions = [],
                       placeholder = '',
                       noOptionsMessage = 'Start Typing to view options',
                       selectedOptions = [],
                       className,
                     }) => {
  useEffect(() => {
    const loadOptions = inputValue => onSearch(inputValue);
    debouncedOnSearch = debounce(loadOptions, debounceTime);
    renderOptionsList();
  }, []);

  const renderOptionsList = () => {
    return Array.isArray(selectedOptions) && selectedOptions.map(country => <ListItem
      item={country}
      onRemoveItem={id => {
        const newItems = selectedOptions.filter(
          country => country[valueOption] !== id
        );
        onSelect(newItems);
      }}
      valueOption={valueOption}
      labelOption={labelOption}
      typeOption={typeOption}
    />);
  };

  return (
    <div className={className}>
      <AsyncSelect
        isMulti
        noOptionsMessage={() => noOptionsMessage}
        backspaceRemovesValue={false}
        isClearable={false}
        getOptionLabel={option => option[labelOption]}
        getOptionValue={option => option[valueOption]}
        loadOptions={input => debouncedOnSearch(input)}
        value={selectedOptions}
        defaultValue={defaultSelectedOptions}
        placeholder={placeholder}
        onChange={(currentValues) => {
          onSelect(currentValues);
        }}
        styles={{
          multiValue: () => ({display: "none"}),
          multiValueRemove: base => ({...base, display: "none"})
        }}
        components={{
          DropdownIndicator: () => null, MenuList: (props) =>
            <components.MenuList {...props}>
              {props.children.length
                ? <List
                  width={900}
                  height={200}
                  rowHeight={35}
                  style={{width: '100%'}}
                  rowRenderer={({index, key, style}) =>
                    <li style={{...style, width: '100%'}}
                        key={key}>{props.children[index]}
                    </li>
                  }
                  rowCount={props.children.length}
                />
                : props.children
              }
            </components.MenuList>
        }}
      />
      <ul className="list">
        {selectedOptions && renderOptionsList()}
      </ul>
    </div>
  );
};

export default MultiSelect;
