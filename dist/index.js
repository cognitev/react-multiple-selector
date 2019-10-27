"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _async = _interopRequireDefault(require("react-select/async"));

var _ListItem = _interopRequireDefault(require("./ListItem"));

require("./styles.css");

var _lodash = _interopRequireDefault(require("lodash.debounce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var debouncedOnChange;

var SelectCities = function SelectCities(_ref) {
  var _onChange = _ref.onChange,
      inputValue = _ref.inputValue,
      onInputChange = _ref.onInputChange,
      loadOptions = _ref.loadOptions,
      _ref$maxSelectedItems = _ref.maxSelectedItems,
      maxSelectedItems = _ref$maxSelectedItems === void 0 ? Infinity : _ref$maxSelectedItems,
      _ref$labelOption = _ref.labelOption,
      labelOption = _ref$labelOption === void 0 ? 'name' : _ref$labelOption,
      _ref$valueOption = _ref.valueOption,
      valueOption = _ref$valueOption === void 0 ? '_id' : _ref$valueOption,
      _ref$typeOption = _ref.typeOption,
      typeOption = _ref$typeOption === void 0 ? 'type' : _ref$typeOption,
      _ref$customType = _ref.customType,
      customType = _ref$customType === void 0 ? 'country' : _ref$customType,
      _ref$debounceTime = _ref.debounceTime,
      debounceTime = _ref$debounceTime === void 0 ? 300 : _ref$debounceTime,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? [] : _ref$defaultValue,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Select...' : _ref$placeholder,
      _ref$noOptionsMessage = _ref.noOptionsMessage,
      noOptionsMessage = _ref$noOptionsMessage === void 0 ? 'Start Writing to select...' : _ref$noOptionsMessage,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      props = _objectWithoutProperties(_ref, ["onChange", "inputValue", "onInputChange", "loadOptions", "maxSelectedItems", "labelOption", "valueOption", "typeOption", "customType", "debounceTime", "defaultValue", "placeholder", "noOptionsMessage", "value"]);

  (0, _react.useEffect)(function () {
    debouncedOnChange = (0, _lodash.default)(loadOptions, debounceTime);
    renderCountriesList();
  }, []);

  var renderCountriesList = function renderCountriesList() {
    return Array.isArray(value) && value.map(function (country) {
      return _react.default.createElement(_ListItem.default, {
        item: country,
        onRemoveItem: function onRemoveItem(id) {
          var newItems = value.filter(function (country) {
            return country[valueOption] !== id;
          });

          _onChange(newItems);
        },
        valueOption: valueOption,
        labelOption: labelOption,
        typeOption: typeOption,
        customType: customType
      });
    });
  };

  return _react.default.createElement("div", _extends({
    className: "reactSelectCities"
  }, props), _react.default.createElement(_async.default, {
    backspaceRemovesValue: false,
    isClearable: false,
    styles: {
      multiValue: function multiValue() {
        return {
          display: "none"
        };
      },
      multiValueRemove: function multiValueRemove(base) {
        return _objectSpread({}, base, {
          display: "none"
        });
      }
    },
    getOptionLabel: function getOptionLabel(option) {
      return option[labelOption];
    },
    getOptionValue: function getOptionValue(option) {
      return option[valueOption];
    },
    loadOptions: debouncedOnChange,
    onInputChange: onInputChange,
    value: value,
    onChange: function onChange(currentValues) {
      _onChange(currentValues);
    },
    inputValue: inputValue,
    defaultValue: defaultValue,
    placeholder: placeholder,
    components: {
      DropdownIndicator: function DropdownIndicator() {
        return null;
      }
    },
    noOptionsMessage: noOptionsMessage,
    isMulti: true
  }), _react.default.createElement("ul", {
    className: "list"
  }, value && renderCountriesList()));
};

var _default = SelectCities;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWJvdW5jZWRPbkNoYW5nZSIsIlNlbGVjdENpdGllcyIsIm9uQ2hhbmdlIiwiaW5wdXRWYWx1ZSIsIm9uSW5wdXRDaGFuZ2UiLCJsb2FkT3B0aW9ucyIsIm1heFNlbGVjdGVkSXRlbXMiLCJJbmZpbml0eSIsImxhYmVsT3B0aW9uIiwidmFsdWVPcHRpb24iLCJ0eXBlT3B0aW9uIiwiY3VzdG9tVHlwZSIsImRlYm91bmNlVGltZSIsImRlZmF1bHRWYWx1ZSIsInBsYWNlaG9sZGVyIiwibm9PcHRpb25zTWVzc2FnZSIsInZhbHVlIiwicHJvcHMiLCJyZW5kZXJDb3VudHJpZXNMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiY291bnRyeSIsImlkIiwibmV3SXRlbXMiLCJmaWx0ZXIiLCJtdWx0aVZhbHVlIiwiZGlzcGxheSIsIm11bHRpVmFsdWVSZW1vdmUiLCJiYXNlIiwib3B0aW9uIiwiY3VycmVudFZhbHVlcyIsIkRyb3Bkb3duSW5kaWNhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsaUJBQUo7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FnQmY7QUFBQSxNQWZKQyxTQWVJLFFBZkpBLFFBZUk7QUFBQSxNQWRKQyxVQWNJLFFBZEpBLFVBY0k7QUFBQSxNQWJKQyxhQWFJLFFBYkpBLGFBYUk7QUFBQSxNQVpKQyxXQVlJLFFBWkpBLFdBWUk7QUFBQSxtQ0FYSkMsZ0JBV0k7QUFBQSxNQVhKQSxnQkFXSSxzQ0FYZUMsUUFXZjtBQUFBLDhCQVZKQyxXQVVJO0FBQUEsTUFWSkEsV0FVSSxpQ0FWVSxNQVVWO0FBQUEsOEJBVEpDLFdBU0k7QUFBQSxNQVRKQSxXQVNJLGlDQVRVLEtBU1Y7QUFBQSw2QkFSSkMsVUFRSTtBQUFBLE1BUkpBLFVBUUksZ0NBUlMsTUFRVDtBQUFBLDZCQVBKQyxVQU9JO0FBQUEsTUFQSkEsVUFPSSxnQ0FQUyxTQU9UO0FBQUEsK0JBTkpDLFlBTUk7QUFBQSxNQU5KQSxZQU1JLGtDQU5XLEdBTVg7QUFBQSwrQkFMSkMsWUFLSTtBQUFBLE1BTEpBLFlBS0ksa0NBTFcsRUFLWDtBQUFBLDhCQUpKQyxXQUlJO0FBQUEsTUFKSkEsV0FJSSxpQ0FKUSxXQUlSO0FBQUEsbUNBSEpDLGdCQUdJO0FBQUEsTUFISkEsZ0JBR0ksc0NBSGEsNEJBR2I7QUFBQSx3QkFGSkMsS0FFSTtBQUFBLE1BRkpBLEtBRUksMkJBRkksRUFFSjtBQUFBLE1BRERDLEtBQ0M7O0FBQ0osd0JBQVUsWUFBTTtBQUNkakIsSUFBQUEsaUJBQWlCLEdBQUcscUJBQVNLLFdBQVQsRUFBc0JPLFlBQXRCLENBQXBCO0FBQ0FNLElBQUFBLG1CQUFtQjtBQUNwQixHQUhELEVBR0csRUFISDs7QUFLQSxNQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDaEMsV0FBT0MsS0FBSyxDQUFDQyxPQUFOLENBQWNKLEtBQWQsS0FBd0JBLEtBQUssQ0FBQ0ssR0FBTixDQUFVLFVBQUFDLE9BQU87QUFBQSxhQUM5Qyw2QkFBQyxpQkFBRDtBQUNFLFFBQUEsSUFBSSxFQUFFQSxPQURSO0FBRUUsUUFBQSxZQUFZLEVBQUUsc0JBQUFDLEVBQUUsRUFBSTtBQUNsQixjQUFNQyxRQUFRLEdBQUdSLEtBQUssQ0FBQ1MsTUFBTixDQUNmLFVBQUFILE9BQU87QUFBQSxtQkFBSUEsT0FBTyxDQUFDYixXQUFELENBQVAsS0FBeUJjLEVBQTdCO0FBQUEsV0FEUSxDQUFqQjs7QUFHQXJCLFVBQUFBLFNBQVEsQ0FBQ3NCLFFBQUQsQ0FBUjtBQUNELFNBUEg7QUFRRSxRQUFBLFdBQVcsRUFBRWYsV0FSZjtBQVNFLFFBQUEsV0FBVyxFQUFFRCxXQVRmO0FBVUUsUUFBQSxVQUFVLEVBQUVFLFVBVmQ7QUFXRSxRQUFBLFVBQVUsRUFBRUM7QUFYZCxRQUQ4QztBQUFBLEtBQWpCLENBQS9CO0FBZUQsR0FoQkQ7O0FBa0JBLFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQXVDTSxLQUF2QyxHQUNFLDZCQUFDLGNBQUQ7QUFDRSxJQUFBLHFCQUFxQixFQUFFLEtBRHpCO0FBRUUsSUFBQSxXQUFXLEVBQUUsS0FGZjtBQUdFLElBQUEsTUFBTSxFQUFFO0FBQ05TLE1BQUFBLFVBQVUsRUFBRTtBQUFBLGVBQU87QUFBRUMsVUFBQUEsT0FBTyxFQUFFO0FBQVgsU0FBUDtBQUFBLE9BRE47QUFFTkMsTUFBQUEsZ0JBQWdCLEVBQUUsMEJBQUFDLElBQUk7QUFBQSxpQ0FBVUEsSUFBVjtBQUFnQkYsVUFBQUEsT0FBTyxFQUFFO0FBQXpCO0FBQUE7QUFGaEIsS0FIVjtBQU9FLElBQUEsY0FBYyxFQUFFLHdCQUFBRyxNQUFNO0FBQUEsYUFBSUEsTUFBTSxDQUFDdEIsV0FBRCxDQUFWO0FBQUEsS0FQeEI7QUFRRSxJQUFBLGNBQWMsRUFBRSx3QkFBQXNCLE1BQU07QUFBQSxhQUFJQSxNQUFNLENBQUNyQixXQUFELENBQVY7QUFBQSxLQVJ4QjtBQVNFLElBQUEsV0FBVyxFQUFFVCxpQkFUZjtBQVVFLElBQUEsYUFBYSxFQUFFSSxhQVZqQjtBQVdFLElBQUEsS0FBSyxFQUFFWSxLQVhUO0FBWUUsSUFBQSxRQUFRLEVBQUUsa0JBQUNlLGFBQUQsRUFBbUI7QUFBRTdCLE1BQUFBLFNBQVEsQ0FBQzZCLGFBQUQsQ0FBUjtBQUEwQixLQVozRDtBQWFFLElBQUEsVUFBVSxFQUFFNUIsVUFiZDtBQWNFLElBQUEsWUFBWSxFQUFFVSxZQWRoQjtBQWVFLElBQUEsV0FBVyxFQUFFQyxXQWZmO0FBZ0JFLElBQUEsVUFBVSxFQUFFO0FBQUVrQixNQUFBQSxpQkFBaUIsRUFBQztBQUFBLGVBQU0sSUFBTjtBQUFBO0FBQXBCLEtBaEJkO0FBaUJFLElBQUEsZ0JBQWdCLEVBQUVqQixnQkFqQnBCO0FBa0JFLElBQUEsT0FBTztBQWxCVCxJQURGLEVBcUJFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxLQUNHQyxLQUFLLElBQUlFLG1CQUFtQixFQUQvQixDQXJCRixDQURGO0FBMkJELENBbkVEOztlQXFFZWpCLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFzeW5jU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3QvYXN5bmNcIjtcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiLi9MaXN0SXRlbVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJztcblxubGV0IGRlYm91bmNlZE9uQ2hhbmdlOyBcblxuY29uc3QgU2VsZWN0Q2l0aWVzID0gKHtcbiAgb25DaGFuZ2UsXG4gIGlucHV0VmFsdWUsXG4gIG9uSW5wdXRDaGFuZ2UsXG4gIGxvYWRPcHRpb25zLFxuICBtYXhTZWxlY3RlZEl0ZW1zID0gSW5maW5pdHksXG4gIGxhYmVsT3B0aW9uID0gJ25hbWUnLFxuICB2YWx1ZU9wdGlvbiA9ICdfaWQnLFxuICB0eXBlT3B0aW9uID0gJ3R5cGUnLFxuICBjdXN0b21UeXBlID0gJ2NvdW50cnknLFxuICBkZWJvdW5jZVRpbWUgPSAzMDAsXG4gIGRlZmF1bHRWYWx1ZSA9IFtdLFxuICBwbGFjZWhvbGRlcj0nU2VsZWN0Li4uJyxcbiAgbm9PcHRpb25zTWVzc2FnZT0nU3RhcnQgV3JpdGluZyB0byBzZWxlY3QuLi4nLFxuICB2YWx1ZSA9IFtdLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRlYm91bmNlZE9uQ2hhbmdlID0gZGVib3VuY2UobG9hZE9wdGlvbnMsIGRlYm91bmNlVGltZSk7XG4gICAgcmVuZGVyQ291bnRyaWVzTGlzdCgpO1xuICB9LCBbXSlcblxuICBjb25zdCByZW5kZXJDb3VudHJpZXNMaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5tYXAoY291bnRyeSA9PiAoXG4gICAgICA8TGlzdEl0ZW1cbiAgICAgICAgaXRlbT17Y291bnRyeX1cbiAgICAgICAgb25SZW1vdmVJdGVtPXtpZCA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3SXRlbXMgPSB2YWx1ZS5maWx0ZXIoXG4gICAgICAgICAgICBjb3VudHJ5ID0+IGNvdW50cnlbdmFsdWVPcHRpb25dICE9PSBpZFxuICAgICAgICAgICk7XG4gICAgICAgICAgb25DaGFuZ2UobmV3SXRlbXMpO1xuICAgICAgICB9fVxuICAgICAgICB2YWx1ZU9wdGlvbj17dmFsdWVPcHRpb259XG4gICAgICAgIGxhYmVsT3B0aW9uPXtsYWJlbE9wdGlvbn1cbiAgICAgICAgdHlwZU9wdGlvbj17dHlwZU9wdGlvbn1cbiAgICAgICAgY3VzdG9tVHlwZT17Y3VzdG9tVHlwZX1cbiAgICAgIC8+XG4gICAgKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3RTZWxlY3RDaXRpZXNcIiB7Li4ucHJvcHN9PlxuICAgICAgPEFzeW5jU2VsZWN0XG4gICAgICAgIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZT17ZmFsc2V9XG4gICAgICAgIGlzQ2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgc3R5bGVzPXt7XG4gICAgICAgICAgbXVsdGlWYWx1ZTogKCkgPT4gKHsgZGlzcGxheTogXCJub25lXCIgfSksXG4gICAgICAgICAgbXVsdGlWYWx1ZVJlbW92ZTogYmFzZSA9PiAoeyAuLi5iYXNlLCBkaXNwbGF5OiBcIm5vbmVcIiB9KVxuICAgICAgICB9fVxuICAgICAgICBnZXRPcHRpb25MYWJlbD17b3B0aW9uID0+IG9wdGlvbltsYWJlbE9wdGlvbl19XG4gICAgICAgIGdldE9wdGlvblZhbHVlPXtvcHRpb24gPT4gb3B0aW9uW3ZhbHVlT3B0aW9uXX1cbiAgICAgICAgbG9hZE9wdGlvbnM9e2RlYm91bmNlZE9uQ2hhbmdlfVxuICAgICAgICBvbklucHV0Q2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoY3VycmVudFZhbHVlcykgPT4geyBvbkNoYW5nZShjdXJyZW50VmFsdWVzKTsgfX1cbiAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgY29tcG9uZW50cz17eyBEcm9wZG93bkluZGljYXRvcjooKSA9PiBudWxsIH19XG4gICAgICAgIG5vT3B0aW9uc01lc3NhZ2U9e25vT3B0aW9uc01lc3NhZ2V9XG4gICAgICAgIGlzTXVsdGlcbiAgICAgIC8+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICB7dmFsdWUgJiYgcmVuZGVyQ291bnRyaWVzTGlzdCgpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdENpdGllcztcbiJdfQ==