"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _async = _interopRequireDefault(require("react-select/async"));

var _reactSelect = require("react-select");

var _ListItem = _interopRequireDefault(require("./ListItem"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _reactVirtualized = require("react-virtualized");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var debouncedOnSearch;

var MultiSelect = function MultiSelect(_ref) {
  var onSelect = _ref.onSelect,
      _ref$onSearch = _ref.onSearch,
      onSearch = _ref$onSearch === void 0 ? function () {} : _ref$onSearch,
      _ref$labelOption = _ref.labelOption,
      labelOption = _ref$labelOption === void 0 ? 'name' : _ref$labelOption,
      _ref$valueOption = _ref.valueOption,
      valueOption = _ref$valueOption === void 0 ? 'value' : _ref$valueOption,
      _ref$typeOption = _ref.typeOption,
      typeOption = _ref$typeOption === void 0 ? 'type' : _ref$typeOption,
      _ref$debounceTime = _ref.debounceTime,
      debounceTime = _ref$debounceTime === void 0 ? 300 : _ref$debounceTime,
      _ref$defaultSelectedO = _ref.defaultSelectedOptions,
      defaultSelectedOptions = _ref$defaultSelectedO === void 0 ? [] : _ref$defaultSelectedO,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
      _ref$noOptionsMessage = _ref.noOptionsMessage,
      _noOptionsMessage = _ref$noOptionsMessage === void 0 ? 'Start Typing to view options' : _ref$noOptionsMessage,
      _ref$selectedOptions = _ref.selectedOptions,
      selectedOptions = _ref$selectedOptions === void 0 ? [] : _ref$selectedOptions,
      className = _ref.className,
      mainColor = _ref.mainColor;

  (0, _react.useEffect)(function () {
    var loadOptions = function loadOptions(inputValue, callback) {
      return onSearch(inputValue, callback);
    };

    debouncedOnSearch = (0, _lodash.default)(loadOptions, debounceTime);
  }, []);

  var renderOptionsList = function renderOptionsList() {
    return Array.isArray(selectedOptions) && selectedOptions.map(function (option) {
      return _react.default.createElement(_ListItem.default, {
        item: option,
        onRemoveItem: function onRemoveItem(id) {
          var newItems = selectedOptions.filter(function (item) {
            return item[valueOption] !== id;
          });
          onSelect(newItems);
        },
        valueOption: valueOption,
        labelOption: labelOption,
        typeOption: typeOption
      });
    });
  };

  var customStyles = {
    multiValue: function multiValue() {
      return {
        display: "none"
      };
    },
    multiValueRemove: function multiValueRemove(base) {
      return _objectSpread({}, base, {
        display: "none"
      });
    },
    option: function option(provided, state) {
      return _objectSpread({}, provided, {
        height: '32px',
        padding: '0 10px',
        lineHeight: '32px'
      });
    },
    control: function control(provided, state) {
      return _objectSpread({}, provided, {
        height: '32px',
        borderRadius: 0,
        padding: 0,
        margin: 0,
        minHeight: "32px",
        lineHeight: 'initial'
      }, mainColor && (state.isFocused || state.isSelected) ? {
        borderColor: mainColor,
        boxShadow: 'none',
        '&:hover': {
          borderColor: mainColor
        }
      } : {}, {
        '&:hover': {
          borderColor: mainColor
        }
      });
    },
    menu: function menu(provided) {
      return _objectSpread({}, provided, {
        borderRadius: 0
      });
    },
    noOptionsMessage: function noOptionsMessage(provided) {
      return _objectSpread({}, provided, {
        padding: '10px',
        textAlign: 'center'
      });
    },
    indicatorsContainer: function indicatorsContainer(provided) {
      return _objectSpread({}, provided, {
        display: 'none'
      });
    }
  };
  return _react.default.createElement("div", {
    className: className
  }, _react.default.createElement(_async.default, {
    isMulti: true,
    noOptionsMessage: function noOptionsMessage() {
      return _noOptionsMessage;
    },
    backspaceRemovesValue: false,
    isClearable: false,
    getOptionLabel: function getOptionLabel(option) {
      return option[labelOption];
    },
    getOptionValue: function getOptionValue(option) {
      return option[valueOption];
    },
    loadOptions: function loadOptions(input, callback) {
      return debouncedOnSearch(input, callback);
    },
    value: selectedOptions,
    defaultValue: defaultSelectedOptions,
    placeholder: placeholder,
    onChange: function onChange(currentValues) {
      onSelect(currentValues);
    },
    styles: customStyles,
    components: {
      DropdownIndicator: function DropdownIndicator() {
        return null;
      },
      MenuList: function MenuList(props) {
        return _react.default.createElement(_reactSelect.components.MenuList, props, props.children.length ? _react.default.createElement(_reactVirtualized.List, {
          width: 900,
          height: 200,
          rowHeight: 32,
          style: {
            width: '100%'
          },
          rowRenderer: function rowRenderer(_ref2) {
            var index = _ref2.index,
                key = _ref2.key,
                style = _ref2.style;
            return _react.default.createElement("li", {
              style: _objectSpread({}, style, {
                width: '100%'
              }),
              key: key
            }, props.children[index]);
          },
          rowCount: props.children.length
        }) : props.children);
      }
    }
  }), _react.default.createElement("ul", {
    className: "list"
  }, selectedOptions && renderOptionsList()));
};

var _default = MultiSelect;
exports.default = _default;