import React, {useEffect} from "react";
import AsyncSelect from "react-select/async";
import {components} from 'react-select';
import ListItem from "./ListItem";
import debounce from 'lodash.debounce';
import {List} from "react-virtualized";

let debouncedOnSearch;

const MultiSelect = ({
                       onSelect,
                       onSearch = () => {
                       },
                       labelOption = 'name',
                       valueOption = 'value',
                       typeOption = 'type',
                       debounceTime = 300,
                       defaultSelectedOptions = [],
                       placeholder = '',
                       noOptionsMessage = 'Start Typing to view options',
                       selectedOptions = [],
                       className,
                       mainColor,
                     }) => {
  useEffect(() => {
    const loadOptions = (inputValue, callback) => onSearch(inputValue, callback);
    debouncedOnSearch = debounce(loadOptions, debounceTime);
    renderOptionsList();
  }, []);

  const renderOptionsList = () => {
    return Array.isArray(selectedOptions) && selectedOptions.map(option => <ListItem
      item={option}
      onRemoveItem={id => {
        const newItems = selectedOptions.filter(
          item => item[valueOption] !== id
        );
        onSelect(newItems);
      }}
      valueOption={valueOption}
      labelOption={labelOption}
      typeOption={typeOption}
      key={`item-${valueOption}`}
    />);
  };

  const customStyles = {
    multiValue: () => ({display: "none"}),
    multiValueRemove: base => ({...base, display: "none"}),
    option: (provided, state) => ({
      ...provided,
      height: '32px',
      padding: '0 10px',
      lineHeight: '32px',
    }),
    control: (provided, state) => ({
      ...provided,
      height: '32px',
      borderRadius: 0,
      padding: 0,
      margin: 0,
      minHeight: "32px",
      lineHeight: 'initial',
      ...(mainColor && (state.isFocused || state.isSelected) ? {
        borderColor: mainColor,
        boxShadow: 'none',
        '&:hover': {
          borderColor: mainColor
        }
      } : {}),
      '&:hover': {
        borderColor: mainColor
      }
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: 0,
    }),
    noOptionsMessage: (provided) => ({
      ...provided,
      padding: '10px',
      textAlign: 'center',
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      display: 'none'
    })
  }

  return (
    <div className={className}>
      <AsyncSelect
        isMulti
        noOptionsMessage={() => noOptionsMessage}
        backspaceRemovesValue={false}
        isClearable={false}
        getOptionLabel={option => option[labelOption]}
        getOptionValue={option => option[valueOption]}
        loadOptions={(input, callback) => debouncedOnSearch(input, callback)}
        value={selectedOptions}
        defaultValue={defaultSelectedOptions}
        placeholder={placeholder}
        onChange={(currentValues) => {
          onSelect(currentValues);
        }}
        styles={customStyles}
        components={{
          DropdownIndicator: () => null, MenuList: (props) =>
            <components.MenuList {...props}>
              {props.children.length
                ? <List
                  width={900}
                  height={200}
                  rowHeight={32}
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
