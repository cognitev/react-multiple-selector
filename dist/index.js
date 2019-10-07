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

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      currentSelectedValues = _useState2[0],
      selectValues = _useState2[1];

  (0, _react.useEffect)(function () {
    debouncedOnChange = (0, _lodash.default)(loadOptions, debounceTime);
    renderCountriesList();
  }, []);

  var renderCountriesList = function renderCountriesList() {
    var values = currentSelectedValues.length === 0 ? _toConsumableArray(value) : _toConsumableArray(currentSelectedValues);
    return values.map(function (country) {
      return _react.default.createElement(_ListItem.default, {
        item: country,
        onRemoveItem: function onRemoveItem(id) {
          var newItems = values.filter(function (country) {
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
    value: currentSelectedValues.length === 0 ? value : currentSelectedValues,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWJvdW5jZWRPbkNoYW5nZSIsIlNlbGVjdENpdGllcyIsIm9uQ2hhbmdlIiwiaW5wdXRWYWx1ZSIsIm9uSW5wdXRDaGFuZ2UiLCJsb2FkT3B0aW9ucyIsIm1heFNlbGVjdGVkSXRlbXMiLCJsYWJlbE9wdGlvbiIsInZhbHVlT3B0aW9uIiwidHlwZU9wdGlvbiIsImN1c3RvbVR5cGUiLCJkZWJvdW5jZVRpbWUiLCJkZWZhdWx0VmFsdWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwicHJvcHMiLCJjdXJyZW50U2VsZWN0ZWRWYWx1ZXMiLCJzZWxlY3RWYWx1ZXMiLCJyZW5kZXJDb3VudHJpZXNMaXN0IiwidmFsdWVzIiwibGVuZ3RoIiwibWFwIiwiY291bnRyeSIsImlkIiwibmV3SXRlbXMiLCJmaWx0ZXIiLCJnZXRMYXN0RWxlbWVudCIsImFyciIsImNoZWNrQ291bnRyaWVzIiwiY3VycmVudFZhbHVlcyIsImFjdGlvbiIsIm51bWJlck9mQ291bnRyaWVzIiwicmVkdWNlIiwiYWNjIiwiTnVtYmVyIiwibGFzdEVsZW1lbnQiLCJtdWx0aVZhbHVlIiwiZGlzcGxheSIsIm11bHRpVmFsdWVSZW1vdmUiLCJiYXNlIiwib3B0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLGlCQUFKOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BZWY7QUFBQSxNQWRKQyxRQWNJLFFBZEpBLFFBY0k7QUFBQSxNQWJKQyxVQWFJLFFBYkpBLFVBYUk7QUFBQSxNQVpKQyxhQVlJLFFBWkpBLGFBWUk7QUFBQSxNQVhKQyxXQVdJLFFBWEpBLFdBV0k7QUFBQSxNQVZKQyxnQkFVSSxRQVZKQSxnQkFVSTtBQUFBLDhCQVRKQyxXQVNJO0FBQUEsTUFUSkEsV0FTSSxpQ0FUVSxNQVNWO0FBQUEs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LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBc3luY1NlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0L2FzeW5jXCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4vTGlzdEl0ZW1cIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSc7XG5cbmxldCBkZWJvdW5jZWRPbkNoYW5nZTsgXG5cbmNvbnN0IFNlbGVjdENpdGllcyA9ICh7XG4gIG9uQ2hhbmdlLFxuICBpbnB1dFZhbHVlLFxuICBvbklucHV0Q2hhbmdlLFxuICBsb2FkT3B0aW9ucyxcbiAgbWF4U2VsZWN0ZWRJdGVtcyxcbiAgbGFiZWxPcHRpb24gPSAnbmFtZScsXG4gIHZhbHVlT3B0aW9uID0gJ19pZCcsXG4gIHR5cGVPcHRpb24gPSAndHlwZScsXG4gIGN1c3RvbVR5cGUgPSAnY291bnRyeScsXG4gIGRlYm91bmNlVGltZSA9IDMwMCxcbiAgZGVmYXVsdFZhbHVlID0gW10sXG4gIHBsYWNlaG9sZGVyPSdTZWxlY3QuLi4nLFxuICB2YWx1ZSA9IFtdLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBbY3VycmVudFNlbGVjdGVkVmFsdWVzLCBzZWxlY3RWYWx1ZXNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRlYm91bmNlZE9uQ2hhbmdlID0gZGVib3VuY2UobG9hZE9wdGlvbnMsIGRlYm91bmNlVGltZSk7XG4gICAgcmVuZGVyQ291bnRyaWVzTGlzdCgpO1xuICB9LCBbXSlcbiAgY29uc3QgcmVuZGVyQ291bnRyaWVzTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCB2YWx1ZXMgPSBjdXJyZW50U2VsZWN0ZWRWYWx1ZXMubGVuZ3RoID09PSAwID8gWy4uLnZhbHVlXSA6IFsuLi5jdXJyZW50U2VsZWN0ZWRWYWx1ZXNdO1xuICAgIHJldHVybiB2YWx1ZXMubWFwKGNvdW50cnkgPT4gKFxuICAgICAgPExpc3RJdGVtXG4gICAgICAgIGl0ZW09e2NvdW50cnl9XG4gICAgICAgIG9uUmVtb3ZlSXRlbT17aWQgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gdmFsdWVzLmZpbHRlcihcbiAgICAgICAgICAgIGNvdW50cnkgPT4gY291bnRyeVt2YWx1ZU9wdGlvbl0gIT09IGlkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZWxlY3RWYWx1ZXMobmV3SXRlbXMpO1xuICAgICAgICB9fVxuICAgICAgICB2YWx1ZU9wdGlvbj17dmFsdWVPcHRpb259XG4gICAgICAgIGxhYmVsT3B0aW9uPXtsYWJlbE9wdGlvbn1cbiAgICAgICAgdHlwZU9wdGlvbj17dHlwZU9wdGlvbn1cbiAgICAgICAgY3VzdG9tVHlwZT17Y3VzdG9tVHlwZX1cbiAgICAgIC8+XG4gICAgKSk7XG4gIH1cblxuICBjb25zdCBnZXRMYXN0RWxlbWVudCA9IGFyciA9PiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICBjb25zdCBjaGVja0NvdW50cmllcyA9IChjdXJyZW50VmFsdWVzLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBudW1iZXJPZkNvdW50cmllcyA9IGN1cnJlbnRWYWx1ZXMucmVkdWNlKFxuICAgICAgKGFjYywgY291bnRyeSkgPT4gKGFjYyArPSBOdW1iZXIoY291bnRyeVt0eXBlT3B0aW9uXSA9PT0gY3VzdG9tVHlwZSkpLFxuICAgICAgMFxuICAgICk7XG4gICAgaWYgKG51bWJlck9mQ291bnRyaWVzID4gbWF4U2VsZWN0ZWRJdGVtcykge1xuICAgICAgY29uc3QgbGFzdEVsZW1lbnQgPSBnZXRMYXN0RWxlbWVudChjdXJyZW50VmFsdWVzKTtcbiAgICAgIGlmIChsYXN0RWxlbWVudFt0eXBlT3B0aW9uXSAhPT0gY3VzdG9tVHlwZSkge1xuICAgICAgICBvbkNoYW5nZShjdXJyZW50VmFsdWVzLCBhY3Rpb24pO1xuICAgICAgICBzZWxlY3RWYWx1ZXMoY3VycmVudFZhbHVlcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uQ2hhbmdlKGN1cnJlbnRWYWx1ZXMsIGFjdGlvbik7XG4gICAgICBzZWxlY3RWYWx1ZXMoY3VycmVudFZhbHVlcyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdFNlbGVjdENpdGllc1wiIHsuLi5wcm9wc30+XG4gICAgICA8QXN5bmNTZWxlY3RcbiAgICAgICAgYmFja3NwYWNlUmVtb3Zlc1ZhbHVlPXtmYWxzZX1cbiAgICAgICAgaXNDbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICBzdHlsZXM9e3tcbiAgICAgICAgICBtdWx0aVZhbHVlOiAoKSA9PiAoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KSxcbiAgICAgICAgICBtdWx0aVZhbHVlUmVtb3ZlOiBiYXNlID0+ICh7IC4uLmJhc2UsIGRpc3BsYXk6IFwibm9uZVwiIH0pXG4gICAgICAgIH19XG4gICAgICAgIGdldE9wdGlvbkxhYmVsPXtvcHRpb24gPT4gb3B0aW9uW2xhYmVsT3B0aW9uXX1cbiAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e29wdGlvbiA9PiBvcHRpb25bdmFsdWVPcHRpb25dfVxuICAgICAgICBsb2FkT3B0aW9ucz17ZGVib3VuY2VkT25DaGFuZ2V9XG4gICAgICAgIG9uSW5wdXRDaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgIHZhbHVlPXtjdXJyZW50U2VsZWN0ZWRWYWx1ZXMubGVuZ3RoID09PSAwID8gdmFsdWUgOiBjdXJyZW50U2VsZWN0ZWRWYWx1ZXN9XG4gICAgICAgIG9uQ2hhbmdlPXsoY3VycmVudFZhbHVlcywgYWN0aW9uKSA9PiB7IGNoZWNrQ291bnRyaWVzKGN1cnJlbnRWYWx1ZXMsIGFjdGlvbik7IH19XG4gICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIGlzTXVsdGlcbiAgICAgIC8+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICB7Y3VycmVudFNlbGVjdGVkVmFsdWVzICYmIHJlbmRlckNvdW50cmllc0xpc3QoKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RDaXRpZXM7XG4iXX0=