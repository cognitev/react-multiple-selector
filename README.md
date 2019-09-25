# React-Select-Cities

This package built on [`react-select`](https://www.npmjs.com/package/react-select) to select cities, countries, regions, ..etc.

## Installation and usage

You can install it using `npm`

`npm install react-select-cities`

then use it in your app like this: 

```js
import React, { useState } from 'react';
import ReactSelect from 'react-select-cities';

function App() {
  const [inputValue, setValue] = useState("");

  return (
    <div className="App">
        <ReactSelect
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

export default App;
```

## Props

Prop | Type | Usage | Note
------------ | ------------- | ------------- | ------------------------------------------
`maxCountriesNumber` | Number | The maximum number of countries you can select. | you can select any number of cities/regions/zipcode under those countries, but you can't add another country.
`onInputChange` | Function | fires when you change the input value. | (inputValue) => { return inputValue;}
`inputValue` | String | The input value you entered | you can manage it using state
`onChange` | Function | Fires when the value of cities changed | (currentSelectedCities, lastAction) => {}

All the previous props are required and you have to set them.