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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var debouncedOnChange;

var SelectCities = function SelectCities(_ref) {
  var onChange = _ref.onChange,
      inputValue = _ref.inputValue,
      onInputChange = _ref.onInputChange,
      loadOptions = _ref.loadOptions,
      maxSelectedItems = _ref.maxSelectedItems,
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
      props = _objectWithoutProperties(_ref, ["onChange", "inputValue", "onInputChange", "loadOptions", "maxSelectedItems", "labelOption", "valueOption", "typeOption", "customType", "debounceTime"]);

  (0, _react.useEffect)(function () {
    debouncedOnChange = (0, _lodash.default)(loadOptions, debounceTime);
  }, []);

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      currentSelectedValues = _useState2[0],
      selectValues = _useState2[1];

  var renderCountriesList = function renderCountriesList() {
    return currentSelectedValues.map(function (country) {
      return _react.default.createElement(_ListItem.default, {
        item: country,
        onRemoveItem: function onRemoveItem(id) {
          var newItems = currentSelectedValues.filter(function (country) {
            return country[valueOption] !== id;
          });
          selectValues(newItems);
        },
        valueOption: valueOption,
        labelOption: labelOption,
        typeOption: typeOption,
        customType: customType
      });
    });
  };

  var getLastElement = function getLastElement(arr) {
    return arr[arr.length - 1];
  };

  var checkCountries = function checkCountries(currentValues, action) {
    var numberOfCountries = currentValues.reduce(function (acc, country) {
      return acc += Number(country[typeOption] === customType);
    }, 0);

    if (numberOfCountries > maxSelectedItems) {
      var lastElement = getLastElement(currentValues);

      if (lastElement[typeOption] !== customType) {
        onChange(currentValues, action);
        selectValues(currentValues);
      }
    } else {
      onChange(currentValues, action);
      selectValues(currentValues);
    }
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
    value: currentSelectedValues,
    onChange: function onChange(currentValues, action) {
      checkCountries(currentValues, action);
    },
    inputValue: inputValue,
    isMulti: true
  }), _react.default.createElement("ul", {
    className: "list"
  }, currentSelectedValues && renderCountriesList()));
};

var _default = SelectCities;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWJvdW5jZWRPbkNoYW5nZSIsIlNlbGVjdENpdGllcyIsIm9uQ2hhbmdlIiwiaW5wdXRWYWx1ZSIsIm9uSW5wdXRDaGFuZ2UiLCJsb2FkT3B0aW9ucyIsIm1heFNlbGVjdGVkSXRlbXMiLCJsYWJlbE9wdGlvbiIsInZhbHVlT3B0aW9uIiwidHlwZU9wdGlvbiIsImN1c3RvbVR5cGUiLCJkZWJvdW5jZVRpbWUiLCJwcm9wcyIsImN1cnJlbnRTZWxlY3RlZFZhbHVlcyIsInNlbGVjdFZhbHVlcyIsInJlbmRlckNvdW50cmllc0xpc3QiLCJtYXAiLCJjb3VudHJ5IiwiaWQiLCJuZXdJdGVtcyIsImZpbHRlciIsImdldExhc3RFbGVtZW50IiwiYXJyIiwibGVuZ3RoIiwiY2hlY2tDb3VudHJpZXMiLCJjdXJyZW50VmFsdWVzIiwiYWN0aW9uIiwibnVtYmVyT2ZDb3VudHJpZXMiLCJyZWR1Y2UiLCJhY2MiLCJOdW1iZXIiLCJsYXN0RWxlbWVudCIsIm11bHRpVmFsdWUiLCJkaXNwbGF5IiwibXVsdGlWYWx1ZVJlbW92ZSIsImJhc2UiLCJvcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLGlCQUFKOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BWWY7QUFBQSxNQVhKQyxRQVdJLFFBWEpBLFFBV0k7QUFBQSxNQVZKQyxVQVVJLFFBVkpBLFVBVUk7QUFBQSxNQVRKQyxhQVNJLFFBVEpBLGFBU0k7QUFBQSxNQVJKQyxXQVFJLFFBUkpBLFdBUUk7QUFBQSxNQVBKQyxnQkFPSSxRQVBKQSxnQkFPSTtBQUFBLDhCQU5KQyxXQU1JO0FBQUEsTUFOSkEsV0FNSSxpQ0FOVSxNQU1WO0FBQUEsOEJBTEpDLFdBS0k7QUFBQSxNQUxKQSxXQUtJLGlDQUxVLEtBS1Y7QUFBQSw2QkFKSkMsVUFJ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LGFBQUlBLE1BQU0sQ0FBQzdCLFdBQUQsQ0FBVjtBQUFBLEtBUHhCO0FBUUUsSUFBQSxjQUFjLEVBQUUsd0JBQUE2QixNQUFNO0FBQUEsYUFBSUEsTUFBTSxDQUFDNUIsV0FBRCxDQUFWO0FBQUEsS0FSeEI7QUFTRSxJQUFBLFdBQVcsRUFBRVIsaUJBVGY7QUFVRSxJQUFBLGFBQWEsRUFBRUksYUFWakI7QUFXRSxJQUFBLEtBQUssRUFBRVMscUJBWFQ7QUFZRSxJQUFBLFFBQVEsRUFBRSxrQkFBQ1ksYUFBRCxFQUFnQkMsTUFBaEIsRUFBMkI7QUFBRUYsTUFBQUEsY0FBYyxDQUFDQyxhQUFELEVBQWdCQyxNQUFoQixDQUFkO0FBQXdDLEtBWmpGO0FBYUUsSUFBQSxVQUFVLEVBQUV2QixVQWJkO0FBY0UsSUFBQSxPQUFPO0FBZFQsSUFERixFQWlCRTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsS0FDR1UscUJBQXFCLElBQUlFLG1CQUFtQixFQUQvQyxDQWpCRixDQURGO0FBdUJELENBNUVEOztlQThFZWQsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXN5bmNTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdC9hc3luY1wiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuL0xpc3RJdGVtXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xuXG5sZXQgZGVib3VuY2VkT25DaGFuZ2U7IFxuXG5jb25zdCBTZWxlY3RDaXRpZXMgPSAoe1xuICBvbkNoYW5nZSxcbiAgaW5wdXRWYWx1ZSxcbiAgb25JbnB1dENoYW5nZSxcbiAgbG9hZE9wdGlvbnMsXG4gIG1heFNlbGVjdGVkSXRlbXMsXG4gIGxhYmVsT3B0aW9uID0gJ25hbWUnLFxuICB2YWx1ZU9wdGlvbiA9ICdfaWQnLFxuICB0eXBlT3B0aW9uID0gJ3R5cGUnLFxuICBjdXN0b21UeXBlID0gJ2NvdW50cnknLFxuICBkZWJvdW5jZVRpbWUgPSAzMDAsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGVib3VuY2VkT25DaGFuZ2UgPSBkZWJvdW5jZShsb2FkT3B0aW9ucywgZGVib3VuY2VUaW1lKTtcbiAgfSwgW10pXG4gIFxuICBjb25zdCBbY3VycmVudFNlbGVjdGVkVmFsdWVzLCBzZWxlY3RWYWx1ZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCByZW5kZXJDb3VudHJpZXNMaXN0ID0gKCkgPT5cbiAgICBjdXJyZW50U2VsZWN0ZWRWYWx1ZXMubWFwKGNvdW50cnkgPT4gKFxuICAgICAgPExpc3RJdGVtXG4gICAgICAgIGl0ZW09e2NvdW50cnl9XG4gICAgICAgIG9uUmVtb3ZlSXRlbT17aWQgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gY3VycmVudFNlbGVjdGVkVmFsdWVzLmZpbHRlcihcbiAgICAgICAgICAgIGNvdW50cnkgPT4gY291bnRyeVt2YWx1ZU9wdGlvbl0gIT09IGlkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZWxlY3RWYWx1ZXMobmV3SXRlbXMpO1xuICAgICAgICB9fVxuICAgICAgICB2YWx1ZU9wdGlvbj17dmFsdWVPcHRpb259XG4gICAgICAgIGxhYmVsT3B0aW9uPXtsYWJlbE9wdGlvbn1cbiAgICAgICAgdHlwZU9wdGlvbj17dHlwZU9wdGlvbn1cbiAgICAgICAgY3VzdG9tVHlwZT17Y3VzdG9tVHlwZX1cbiAgICAgIC8+XG4gICAgKSk7XG5cbiAgY29uc3QgZ2V0TGFzdEVsZW1lbnQgPSBhcnIgPT4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbiAgY29uc3QgY2hlY2tDb3VudHJpZXMgPSAoY3VycmVudFZhbHVlcywgYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgbnVtYmVyT2ZDb3VudHJpZXMgPSBjdXJyZW50VmFsdWVzLnJlZHVjZShcbiAgICAgIChhY2MsIGNvdW50cnkpID0+IChhY2MgKz0gTnVtYmVyKGNvdW50cnlbdHlwZU9wdGlvbl0gPT09IGN1c3RvbVR5cGUpKSxcbiAgICAgIDBcbiAgICApO1xuICAgIGlmIChudW1iZXJPZkNvdW50cmllcyA+IG1heFNlbGVjdGVkSXRlbXMpIHtcbiAgICAgIGNvbnN0IGxhc3RFbGVtZW50ID0gZ2V0TGFzdEVsZW1lbnQoY3VycmVudFZhbHVlcyk7XG4gICAgICBpZiAobGFzdEVsZW1lbnRbdHlwZU9wdGlvbl0gIT09IGN1c3RvbVR5cGUpIHtcbiAgICAgICAgb25DaGFuZ2UoY3VycmVudFZhbHVlcywgYWN0aW9uKTtcbiAgICAgICAgc2VsZWN0VmFsdWVzKGN1cnJlbnRWYWx1ZXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvbkNoYW5nZShjdXJyZW50VmFsdWVzLCBhY3Rpb24pO1xuICAgICAgc2VsZWN0VmFsdWVzKGN1cnJlbnRWYWx1ZXMpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3RTZWxlY3RDaXRpZXNcIiB7Li4ucHJvcHN9PlxuICAgICAgPEFzeW5jU2VsZWN0XG4gICAgICAgIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZT17ZmFsc2V9XG4gICAgICAgIGlzQ2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgc3R5bGVzPXt7XG4gICAgICAgICAgbXVsdGlWYWx1ZTogKCkgPT4gKHsgZGlzcGxheTogXCJub25lXCIgfSksXG4gICAgICAgICAgbXVsdGlWYWx1ZVJlbW92ZTogYmFzZSA9PiAoeyAuLi5iYXNlLCBkaXNwbGF5OiBcIm5vbmVcIiB9KVxuICAgICAgICB9fVxuICAgICAgICBnZXRPcHRpb25MYWJlbD17b3B0aW9uID0+IG9wdGlvbltsYWJlbE9wdGlvbl19XG4gICAgICAgIGdldE9wdGlvblZhbHVlPXtvcHRpb24gPT4gb3B0aW9uW3ZhbHVlT3B0aW9uXX1cbiAgICAgICAgbG9hZE9wdGlvbnM9e2RlYm91bmNlZE9uQ2hhbmdlfVxuICAgICAgICBvbklucHV0Q2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICB2YWx1ZT17Y3VycmVudFNlbGVjdGVkVmFsdWVzfVxuICAgICAgICBvbkNoYW5nZT17KGN1cnJlbnRWYWx1ZXMsIGFjdGlvbikgPT4geyBjaGVja0NvdW50cmllcyhjdXJyZW50VmFsdWVzLCBhY3Rpb24pOyB9fVxuICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICBpc011bHRpXG4gICAgICAvPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAge2N1cnJlbnRTZWxlY3RlZFZhbHVlcyAmJiByZW5kZXJDb3VudHJpZXNMaXN0KCl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0Q2l0aWVzO1xuIl19