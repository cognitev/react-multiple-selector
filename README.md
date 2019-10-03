# react-multiple-selector

This package built on [`react-select`](https://www.npmjs.com/package/react-select) to select cities, countries, regions, ..etc.

## Installation and usage

[![NPM](https://nodei.co/npm/react-multiple-selector.png)](https://nodei.co/npm/react-multiple-selector/)

You can install it using `npm`

`npm install react-multiple-selector`

then use it in your app like this: 

```js
import React, { useState } from 'react';
import ReactSelect from 'react-multiple-selector';

function App() {
  const [inputValue, setValue] = useState("");

  return (
    <div className="App">
        <ReactSelect
          maxSelectedItems={5}
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

export default App;
```

## Props

Prop | Type | Usage | Note
------------ | ------------- | ------------- | ------------------------------------------
`maxSelectedItems` | Number | The maximum number of countries you can select. | you can select any number of cities/regions/zipcode under those countries, but you can't add another country.
`onInputChange` | Function | fires when you change the input value. | (inputValue) => { return inputValue;}
`inputValue` | String | The input value you entered | you can manage it using state
`onChange` | Function | Fires when the value of cities changed | (currentSelectedCities, lastAction) => {}
`loadOptions` | Function | Fires to load options to select | (value, callback) => ...
`labelOption` | String | Label Option to show in options list or when selected | default = 'name'
`valueOption` | String | Unique value option to select | default = '_id'
`typeOption` | String | Property to set maximum selected items on it | default = 'type'
`customType` | String | Previous Property value to apply the maximum on it | default = 'country' 
`debounceTime` | Number | Debounce time applied to `onChange` function so the function doesn't fire before your last keyboard click and this time | default = 300

