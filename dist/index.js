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
      _noOptionsMessage = _ref$noOptionsMessage === void 0 ? 'Start Writing to select...' : _ref$noOptionsMessage,
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
    noOptionsMessage: function noOptionsMessage() {
      return _noOptionsMessage;
    },
    isMulti: true
  }), _react.default.createElement("ul", {
    className: "list"
  }, value && renderCountriesList()));
};

var _default = SelectCities;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWJvdW5jZWRPbkNoYW5nZSIsIlNlbGVjdENpdGllcyIsIm9uQ2hhbmdlIiwiaW5wdXRWYWx1ZSIsIm9uSW5wdXRDaGFuZ2UiLCJsb2FkT3B0aW9ucyIsIm1heFNlbGVjdGVkSXRlbXMiLCJJbmZpbml0eSIsImxhYmVsT3B0aW9uIiwidmFsdWVPcHRpb24iLCJ0eXBlT3B0aW9uIiwiY3VzdG9tVHlwZSIsImRlYm91bmNlVGltZSIsImRlZmF1bHRWYWx1ZSIsInBsYWNlaG9sZGVyIiwibm9PcHRpb25zTWVzc2FnZSIsInZhbHVlIiwicHJvcHMiLCJyZW5kZXJDb3VudHJpZXNMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiY291bnRyeSIsImlkIiwibmV3SXRlbXMiLCJmaWx0ZXIiLCJtdWx0aVZhbHVlIiwiZGlzcGxheSIsIm11bHRpVmFsdWVSZW1vdmUiLCJiYXNlIiwib3B0aW9uIiwiY3VycmVudFZhbHVlcyIsIkRyb3Bkb3duSW5kaWNhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsaUJBQUo7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FnQmY7QUFBQSxNQWZKQyxTQWVJLFFBZkpBLFFBZUk7QUFBQSxNQWRKQyxVQWNJLFFBZEpBLFVBY0k7QUFBQSxNQWJKQyxhQWFJLFFBYkpBLGFBYUk7QUFBQSxNQVpKQyxXQVlJLFFBWkpBLFdBWUk7QUFBQSxtQ0FYSkMsZ0JBV0k7QUFBQSxNQVhKQSxnQkFXSSxzQ0FYZUMsUUFXZjtBQUFBLDhCQVZKQyxXQVVJO0FBQUEsTUFWSkEsV0FVSSxpQ0FWVSxNQVVWO0FBQUEsOEJBVEpDLFdBU0k7QUFBQSxNQVRKQSxXQVNJLGlDQVRVLEtBU1Y7QUFBQSw2QkFSSkMsVUFRSTtBQUFBLE1BUkpBLFVBUUksZ0NBUlMsTUFRVDtBQUFBLDZCQVBK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QUssSUFBSUUsbUJBQW1CLEVBRC9CLENBckJGLENBREY7QUEyQkQsQ0FuRUQ7O2VBcUVlakIsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXN5bmNTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdC9hc3luY1wiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuL0xpc3RJdGVtXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xuXG5sZXQgZGVib3VuY2VkT25DaGFuZ2U7IFxuXG5jb25zdCBTZWxlY3RDaXRpZXMgPSAoe1xuICBvbkNoYW5nZSxcbiAgaW5wdXRWYWx1ZSxcbiAgb25JbnB1dENoYW5nZSxcbiAgbG9hZE9wdGlvbnMsXG4gIG1heFNlbGVjdGVkSXRlbXMgPSBJbmZpbml0eSxcbiAgbGFiZWxPcHRpb24gPSAnbmFtZScsXG4gIHZhbHVlT3B0aW9uID0gJ19pZCcsXG4gIHR5cGVPcHRpb24gPSAndHlwZScsXG4gIGN1c3RvbVR5cGUgPSAnY291bnRyeScsXG4gIGRlYm91bmNlVGltZSA9IDMwMCxcbiAgZGVmYXVsdFZhbHVlID0gW10sXG4gIHBsYWNlaG9sZGVyPSdTZWxlY3QuLi4nLFxuICBub09wdGlvbnNNZXNzYWdlPSdTdGFydCBXcml0aW5nIHRvIHNlbGVjdC4uLicsXG4gIHZhbHVlID0gW10sXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGVib3VuY2VkT25DaGFuZ2UgPSBkZWJvdW5jZShsb2FkT3B0aW9ucywgZGVib3VuY2VUaW1lKTtcbiAgICByZW5kZXJDb3VudHJpZXNMaXN0KCk7XG4gIH0sIFtdKVxuXG4gIGNvbnN0IHJlbmRlckNvdW50cmllc0xpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLm1hcChjb3VudHJ5ID0+IChcbiAgICAgIDxMaXN0SXRlbVxuICAgICAgICBpdGVtPXtjb3VudHJ5fVxuICAgICAgICBvblJlbW92ZUl0ZW09e2lkID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdJdGVtcyA9IHZhbHVlLmZpbHRlcihcbiAgICAgICAgICAgIGNvdW50cnkgPT4gY291bnRyeVt2YWx1ZU9wdGlvbl0gIT09IGlkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBvbkNoYW5nZShuZXdJdGVtcyk7XG4gICAgICAgIH19XG4gICAgICAgIHZhbHVlT3B0aW9uPXt2YWx1ZU9wdGlvbn1cbiAgICAgICAgbGFiZWxPcHRpb249e2xhYmVsT3B0aW9ufVxuICAgICAgICB0eXBlT3B0aW9uPXt0eXBlT3B0aW9ufVxuICAgICAgICBjdXN0b21UeXBlPXtjdXN0b21UeXBlfVxuICAgICAgLz5cbiAgICApKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdFNlbGVjdENpdGllc1wiIHsuLi5wcm9wc30+XG4gICAgICA8QXN5bmNTZWxlY3RcbiAgICAgICAgYmFja3NwYWNlUmVtb3Zlc1ZhbHVlPXtmYWxzZX1cbiAgICAgICAgaXNDbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICBzdHlsZXM9e3tcbiAgICAgICAgICBtdWx0aVZhbHVlOiAoKSA9PiAoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KSxcbiAgICAgICAgICBtdWx0aVZhbHVlUmVtb3ZlOiBiYXNlID0+ICh7IC4uLmJhc2UsIGRpc3BsYXk6IFwibm9uZVwiIH0pXG4gICAgICAgIH19XG4gICAgICAgIGdldE9wdGlvbkxhYmVsPXtvcHRpb24gPT4gb3B0aW9uW2xhYmVsT3B0aW9uXX1cbiAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e29wdGlvbiA9PiBvcHRpb25bdmFsdWVPcHRpb25dfVxuICAgICAgICBsb2FkT3B0aW9ucz17ZGVib3VuY2VkT25DaGFuZ2V9XG4gICAgICAgIG9uSW5wdXRDaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9eyhjdXJyZW50VmFsdWVzKSA9PiB7IG9uQ2hhbmdlKGN1cnJlbnRWYWx1ZXMpOyB9fVxuICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBjb21wb25lbnRzPXt7IERyb3Bkb3duSW5kaWNhdG9yOigpID0+IG51bGwgfX1cbiAgICAgICAgbm9PcHRpb25zTWVzc2FnZT17KCkgPT4gbm9PcHRpb25zTWVzc2FnZX1cbiAgICAgICAgaXNNdWx0aVxuICAgICAgLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgIHt2YWx1ZSAmJiByZW5kZXJDb3VudHJpZXNMaXN0KCl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0Q2l0aWVzO1xuIl19