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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? [] : _ref$defaultValue,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Select...' : _ref$placeholder,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      props = _objectWithoutProperties(_ref, ["onChange", "inputValue", "onInputChange", "loadOptions", "maxSelectedItems", "labelOption", "valueOption", "typeOption", "customType", "debounceTime", "defaultValue", "placeholder", "value"]);

  var _useState = (0, _react.useState)(_toConsumableArray(value)),
      _useState2 = _slicedToArray(_useState, 2),
      currentSelectedValues = _useState2[0],
      selectValues = _useState2[1];

  (0, _react.useEffect)(function () {
    debouncedOnChange = (0, _lodash.default)(loadOptions, debounceTime);
    renderCountriesList();
  }, []);

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

  var renderCountriesList = function renderCountriesList() {
    return currentSelectedValues.map(function (country) {
      return _react.default.createElement(_ListItem.default, {
        item: country,
        onRemoveItem: function onRemoveItem(id) {
          var newItems = currentSelectedValues.filter(function (country) {
            return country[valueOption] !== id;
          });
          selectValues(newItems);
          checkCountries(newItems, null);
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
    defaultValue: defaultValue,
    placeholder: placeholder,
    isMulti: true
  }), _react.default.createElement("ul", {
    className: "list"
  }, currentSelectedValues && renderCountriesList()));
};

var _default = SelectCities;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWJvdW5jZWRPbkNoYW5nZSIsIlNlbGVjdENpdGllcyIsIm9uQ2hhbmdlIiwiaW5wdXRWYWx1ZSIsIm9uSW5wdXRDaGFuZ2UiLCJsb2FkT3B0aW9ucyIsIm1heFNlbGVjdGVkSXRlbXMiLCJsYWJlbE9wdGlvbiIsInZhbHVlT3B0aW9uIiwidHlwZU9wdGlvbiIsImN1c3RvbVR5cGUiLCJkZWJvdW5jZVRpbWUiLCJkZWZhdWx0VmFsdWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwicHJvcHMiLCJjdXJyZW50U2VsZWN0ZWRWYWx1ZXMiLCJzZWxlY3RWYWx1ZXMiLCJyZW5kZXJDb3VudHJpZXNMaXN0IiwiY2hlY2tDb3VudHJpZXMiLCJjdXJyZW50VmFsdWVzIiwiYWN0aW9uIiwibnVtYmVyT2ZDb3VudHJpZXMiLCJyZWR1Y2UiLCJhY2MiLCJjb3VudHJ5IiwiTnVtYmVyIiwibGFzdEVsZW1lbnQiLCJnZXRMYXN0RWxlbWVudCIsIm1hcCIsImlkIiwibmV3SXRlbXMiLCJmaWx0ZXIiLCJhcnIiLCJsZW5ndGgiLCJtdWx0aVZhbHVlIiwiZGlzcGxheSIsIm11bHRpVmFsdWVSZW1vdmUiLCJiYXNlIiwib3B0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLGlCQUFKOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BZWY7QUFBQSxNQWRKQyxRQWNJLFFBZEpBLFFBY0k7QUFBQSxNQWJKQyxVQWFJLFFBYkpBLFVBYUk7QUFBQSxNQVpKQyxhQVlJLFFBWkpBLGFBWUk7QUFBQSxNQVhKQyxXQVdJLFFBWEpBLFdBV0k7QUFBQSxNQVZKQyxnQkFVSSxRQVZKQSxnQkFVSTtBQUFBLDhCQVRKQyxXQVNJO0FBQUEsTUFUSkEsV0FTSSxpQ0FUVSxNQVNWO0FBQUEsOEJBUkpDLFdB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QUVFLElBQUEsV0FBVyxFQUFFLEtBRmY7QUFHRSxJQUFBLE1BQU0sRUFBRTtBQUNOb0IsTUFBQUEsVUFBVSxFQUFFO0FBQUEsZUFBTztBQUFFQyxVQUFBQSxPQUFPLEVBQUU7QUFBWCxTQUFQO0FBQUEsT0FETjtBQUVOQyxNQUFBQSxnQkFBZ0IsRUFBRSwwQkFBQUMsSUFBSTtBQUFBLGlDQUFVQSxJQUFWO0FBQWdCRixVQUFBQSxPQUFPLEVBQUU7QUFBekI7QUFBQTtBQUZoQixLQUhWO0FBT0UsSUFBQSxjQUFjLEVBQUUsd0JBQUFHLE1BQU07QUFBQSxhQUFJQSxNQUFNLENBQUNoQyxXQUFELENBQVY7QUFBQSxLQVB4QjtBQVFFLElBQUEsY0FBYyxFQUFFLHdCQUFBZ0MsTUFBTTtBQUFBLGFBQUlBLE1BQU0sQ0FBQy9CLFdBQUQsQ0FBVjtBQUFBLEtBUnhCO0FBU0UsSUFBQSxXQUFXLEVBQUVSLGlCQVRmO0FBVUUsSUFBQSxhQUFhLEVBQUVJLGFBVmpCO0FBV0UsSUFBQSxLQUFLLEVBQUVZLHFCQVhUO0FBWUUsSUFBQSxRQUFRLEVBQUUsa0JBQUNJLGFBQUQsRUFBZ0JDLE1BQWhCLEVBQTJCO0FBQUVGLE1BQUFBLGNBQWMsQ0FBQ0MsYUFBRCxFQUFnQkMsTUFBaEIsQ0FBZDtBQUF3QyxLQVpqRjtBQWFFLElBQUEsVUFBVSxFQUFFbEIsVUFiZDtBQWNFLElBQUEsWUFBWSxFQUFFUyxZQWRoQjtBQWVFLElBQUEsV0FBVyxFQUFFQyxXQWZmO0FBZ0JFLElBQUEsT0FBTztBQWhCVCxJQURGLEVBbUJFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxLQUNHRyxxQkFBcUIsSUFBSUUsbUJBQW1CLEVBRC9DLENBbkJGLENBREY7QUF5QkQsQ0FwRkQ7O2VBc0ZlakIsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXN5bmNTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdC9hc3luY1wiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuL0xpc3RJdGVtXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xuXG5sZXQgZGVib3VuY2VkT25DaGFuZ2U7IFxuXG5jb25zdCBTZWxlY3RDaXRpZXMgPSAoe1xuICBvbkNoYW5nZSxcbiAgaW5wdXRWYWx1ZSxcbiAgb25JbnB1dENoYW5nZSxcbiAgbG9hZE9wdGlvbnMsXG4gIG1heFNlbGVjdGVkSXRlbXMsXG4gIGxhYmVsT3B0aW9uID0gJ25hbWUnLFxuICB2YWx1ZU9wdGlvbiA9ICdfaWQnLFxuICB0eXBlT3B0aW9uID0gJ3R5cGUnLFxuICBjdXN0b21UeXBlID0gJ2NvdW50cnknLFxuICBkZWJvdW5jZVRpbWUgPSAzMDAsXG4gIGRlZmF1bHRWYWx1ZSA9IFtdLFxuICBwbGFjZWhvbGRlcj0nU2VsZWN0Li4uJyxcbiAgdmFsdWUgPSBbXSxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRTZWxlY3RlZFZhbHVlcywgc2VsZWN0VmFsdWVzXSA9IHVzZVN0YXRlKFsuLi52YWx1ZV0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRlYm91bmNlZE9uQ2hhbmdlID0gZGVib3VuY2UobG9hZE9wdGlvbnMsIGRlYm91bmNlVGltZSk7XG4gICAgcmVuZGVyQ291bnRyaWVzTGlzdCgpO1xuICB9LCBbXSlcbiAgY29uc3QgY2hlY2tDb3VudHJpZXMgPSAoY3VycmVudFZhbHVlcywgYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgbnVtYmVyT2ZDb3VudHJpZXMgPSBjdXJyZW50VmFsdWVzLnJlZHVjZShcbiAgICAgIChhY2MsIGNvdW50cnkpID0+IChhY2MgKz0gTnVtYmVyKGNvdW50cnlbdHlwZU9wdGlvbl0gPT09IGN1c3RvbVR5cGUpKSxcbiAgICAgIDBcbiAgICApO1xuICAgIGlmIChudW1iZXJPZkNvdW50cmllcyA+IG1heFNlbGVjdGVkSXRlbXMpIHtcbiAgICAgIGNvbnN0IGxhc3RFbGVtZW50ID0gZ2V0TGFzdEVsZW1lbnQoY3VycmVudFZhbHVlcyk7XG4gICAgICBpZiAobGFzdEVsZW1lbnRbdHlwZU9wdGlvbl0gIT09IGN1c3RvbVR5cGUpIHtcbiAgICAgICAgb25DaGFuZ2UoY3VycmVudFZhbHVlcywgYWN0aW9uKTtcbiAgICAgICAgc2VsZWN0VmFsdWVzKGN1cnJlbnRWYWx1ZXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvbkNoYW5nZShjdXJyZW50VmFsdWVzLCBhY3Rpb24pO1xuICAgICAgc2VsZWN0VmFsdWVzKGN1cnJlbnRWYWx1ZXMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJDb3VudHJpZXNMaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiBjdXJyZW50U2VsZWN0ZWRWYWx1ZXMubWFwKGNvdW50cnkgPT4gKFxuICAgICAgPExpc3RJdGVtXG4gICAgICAgIGl0ZW09e2NvdW50cnl9XG4gICAgICAgIG9uUmVtb3ZlSXRlbT17aWQgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gY3VycmVudFNlbGVjdGVkVmFsdWVzLmZpbHRlcihcbiAgICAgICAgICAgIGNvdW50cnkgPT4gY291bnRyeVt2YWx1ZU9wdGlvbl0gIT09IGlkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZWxlY3RWYWx1ZXMobmV3SXRlbXMpO1xuICAgICAgICAgIGNoZWNrQ291bnRyaWVzKG5ld0l0ZW1zLCBudWxsKTtcbiAgICAgICAgfX1cbiAgICAgICAgdmFsdWVPcHRpb249e3ZhbHVlT3B0aW9ufVxuICAgICAgICBsYWJlbE9wdGlvbj17bGFiZWxPcHRpb259XG4gICAgICAgIHR5cGVPcHRpb249e3R5cGVPcHRpb259XG4gICAgICAgIGN1c3RvbVR5cGU9e2N1c3RvbVR5cGV9XG4gICAgICAvPlxuICAgICkpO1xuICB9XG5cbiAgY29uc3QgZ2V0TGFzdEVsZW1lbnQgPSBhcnIgPT4gYXJyW2Fyci5sZW5ndGggLSAxXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3RTZWxlY3RDaXRpZXNcIiB7Li4ucHJvcHN9PlxuICAgICAgPEFzeW5jU2VsZWN0XG4gICAgICAgIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZT17ZmFsc2V9XG4gICAgICAgIGlzQ2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgc3R5bGVzPXt7XG4gICAgICAgICAgbXVsdGlWYWx1ZTogKCkgPT4gKHsgZGlzcGxheTogXCJub25lXCIgfSksXG4gICAgICAgICAgbXVsdGlWYWx1ZVJlbW92ZTogYmFzZSA9PiAoeyAuLi5iYXNlLCBkaXNwbGF5OiBcIm5vbmVcIiB9KVxuICAgICAgICB9fVxuICAgICAgICBnZXRPcHRpb25MYWJlbD17b3B0aW9uID0+IG9wdGlvbltsYWJlbE9wdGlvbl19XG4gICAgICAgIGdldE9wdGlvblZhbHVlPXtvcHRpb24gPT4gb3B0aW9uW3ZhbHVlT3B0aW9uXX1cbiAgICAgICAgbG9hZE9wdGlvbnM9e2RlYm91bmNlZE9uQ2hhbmdlfVxuICAgICAgICBvbklucHV0Q2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICB2YWx1ZT17Y3VycmVudFNlbGVjdGVkVmFsdWVzfVxuICAgICAgICBvbkNoYW5nZT17KGN1cnJlbnRWYWx1ZXMsIGFjdGlvbikgPT4geyBjaGVja0NvdW50cmllcyhjdXJyZW50VmFsdWVzLCBhY3Rpb24pOyB9fVxuICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBpc011bHRpXG4gICAgICAvPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAge2N1cnJlbnRTZWxlY3RlZFZhbHVlcyAmJiByZW5kZXJDb3VudHJpZXNMaXN0KCl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0Q2l0aWVzO1xuIl19