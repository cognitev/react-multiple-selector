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
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      props = _objectWithoutProperties(_ref, ["onChange", "inputValue", "onInputChange", "loadOptions", "maxSelectedItems", "labelOption", "valueOption", "typeOption", "customType", "debounceTime", "defaultValue", "placeholder", "value"]);

  (0, _react.useEffect)(function () {
    debouncedOnChange = (0, _lodash.default)(loadOptions, debounceTime);
    renderCountriesList();
  }, []);

  var renderCountriesList = function renderCountriesList() {
    return value.map(function (country) {
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
    isMulti: true
  }), _react.default.createElement("ul", {
    className: "list"
  }, value && renderCountriesList()));
};

var _default = SelectCities;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWJvdW5jZWRPbkNoYW5nZSIsIlNlbGVjdENpdGllcyIsIm9uQ2hhbmdlIiwiaW5wdXRWYWx1ZSIsIm9uSW5wdXRDaGFuZ2UiLCJsb2FkT3B0aW9ucyIsIm1heFNlbGVjdGVkSXRlbXMiLCJJbmZpbml0eSIsImxhYmVsT3B0aW9uIiwidmFsdWVPcHRpb24iLCJ0eXBlT3B0aW9uIiwiY3VzdG9tVHlwZSIsImRlYm91bmNlVGltZSIsImRlZmF1bHRWYWx1ZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJwcm9wcyIsInJlbmRlckNvdW50cmllc0xpc3QiLCJtYXAiLCJjb3VudHJ5IiwiaWQiLCJuZXdJdGVtcyIsImZpbHRlciIsIm11bHRpVmFsdWUiLCJkaXNwbGF5IiwibXVsdGlWYWx1ZVJlbW92ZSIsImJhc2UiLCJvcHRpb24iLCJjdXJyZW50VmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsaUJBQUo7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FlZjtBQUFBLE1BZEpDLFNBY0ksUUFkSkEsUUFjSTtBQUFBLE1BYkpDLFVBYUksUUFiSkEsVUFhSTtBQUFBLE1BWkpDLGFBWUksUUFaSkEsYUFZSTtBQUFBLE1BWEpDLFdBV0ksUUFYSkEsV0FXSTtBQUFBLG1DQVZKQyxnQkFVSTtBQUFBLE1BVkpBLGdCQVVJLHNDQVZlQyxRQVVmO0FBQUEsOEJBVEpDLFdBU0k7QUFBQSxNQVRKQSxXQVNJLGlDQVRVLE1BU1Y7QUFBQSw4QkFSSkMsV0FRSTtBQUFBLE1BUkpBLFdBUUksaUNBUlUsS0FRVjtBQUFBLDZCQVBKQyxVQU9JO0FBQUEsTUFQSkEsVUFPSSxnQ0FQUyxNQU9UO0FBQUEsNkJBTkpDLFVBTUk7QUFBQSxNQU5KQSxVQU1JLGdDQU5TLFNBTVQ7QUFBQSwrQkFMSkMsWUFLSTtBQUFBLE1BTEpBLFlBS0ksa0NBTFcsR0FLWDtBQUFBLCtCQUpKQyxZQUlJO0FBQUEsTUFKSkEsWUFJSSxrQ0FKVyxFQUlYO0FBQUEsOEJBSEpDLFdBR0k7QUFBQSxNQUhKQSxXQUdJLGlDQUhRLFdBR1I7QUFBQSx3QkFGSkMsS0FFSTtBQUFBLE1BRkpBLEtBRUksMkJBRkksRUFFSjtBQUFBLE1BRERDLEtBQ0M7O0FBQ0osd0JBQVUsWUFBTTtBQUNkaEIsSUFBQUEsaUJBQWlCLEdBQUcscUJBQVNLLFdBQVQsRUFBc0JPLFlBQXRCLENBQXBCO0FBQ0FLLElBQUFBLG1CQUFtQjtBQUNwQixHQUhELEVBR0csRUFISDs7QUFLQSxNQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDaEMsV0FBT0YsS0FBSyxDQUFDRyxHQUFOLENBQVUsVUFBQUMsT0FBTztBQUFBLGFBQ3RCLDZCQUFDLGlCQUFEO0FBQ0UsUUFBQSxJQUFJLEVBQUVBLE9BRFI7QUFFRSxRQUFBLFlBQVksRUFBRSxzQkFBQUMsRUFBRSxFQUFJO0FBQ2xCLGNBQU1DLFFBQVEsR0FBR04sS0FBSyxDQUFDTyxNQUFOLENBQ2YsVUFBQUgsT0FBTztBQUFBLG1CQUFJQSxPQUFPLENBQUNWLFdBQUQsQ0FBUCxLQUF5QlcsRUFBN0I7QUFBQSxXQURRLENBQWpCOztBQUdBbEIsVUFBQUEsU0FBUSxDQUFDbUIsUUFBRCxDQUFSO0FBQ0QsU0FQSDtBQVFFLFFBQUEsV0FBVyxFQUFFWixXQVJmO0FBU0UsUUFBQSxXQUFXLEVBQUVELFdBVGY7QUFVRSxRQUFBLFVBQVUsRUFBRUUsVUFWZDtBQVdFLFFBQUEsVUFBVSxFQUFFQztBQVhkLFFBRHNCO0FBQUEsS0FBakIsQ0FBUDtBQWVELEdBaEJEOztBQWtCQSxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUF1Q0ssS0FBdkMsR0FDRSw2QkFBQyxjQUFEO0FBQ0UsSUFBQSxxQkFBcUIsRUFBRSxLQUR6QjtBQUVFLElBQUEsV0FBVyxFQUFFLEtBRmY7QUFHRSxJQUFBLE1BQU0sRUFBRTtBQUNOTyxNQUFBQSxVQUFVLEVBQUU7QUFBQSxlQUFPO0FBQUVDLFVBQUFBLE9BQU8sRUFBRTtBQUFYLFNBQVA7QUFBQSxPQUROO0FBRU5DLE1BQUFBLGdCQUFnQixFQUFFLDBCQUFBQyxJQUFJO0FBQUEsaUNBQVVBLElBQVY7QUFBZ0JGLFVBQUFBLE9BQU8sRUFBRTtBQUF6QjtBQUFBO0FBRmhCLEtBSFY7QUFPRSxJQUFBLGNBQWMsRUFBRSx3QkFBQUcsTUFBTTtBQUFBLGFBQUlBLE1BQU0sQ0FBQ25CLFdBQUQsQ0FBVjtBQUFBLEtBUHhCO0FBUUUsSUFBQSxjQUFjLEVBQUUsd0JBQUFtQixNQUFNO0FBQUEsYUFBSUEsTUFBTSxDQUFDbEIsV0FBRCxDQUFWO0FBQUEsS0FSeEI7QUFTRSxJQUFBLFdBQVcsRUFBRVQsaUJBVGY7QUFVRSxJQUFBLGFBQWEsRUFBRUksYUFWakI7QUFXRSxJQUFBLEtBQUssRUFBRVcsS0FYVDtBQVlFLElBQUEsUUFBUSxFQUFFLGtCQUFDYSxhQUFELEVBQW1CO0FBQUUxQixNQUFBQSxTQUFRLENBQUMwQixhQUFELENBQVI7QUFBMEIsS0FaM0Q7QUFhRSxJQUFBLFVBQVUsRUFBRXpCLFVBYmQ7QUFjRSxJQUFBLFlBQVksRUFBRVUsWUFkaEI7QUFlRSxJQUFBLFdBQVcsRUFBRUMsV0FmZjtBQWdCRSxJQUFBLE9BQU87QUFoQlQsSUFERixFQW1CRTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsS0FDR0MsS0FBSyxJQUFJRSxtQkFBbUIsRUFEL0IsQ0FuQkYsQ0FERjtBQXlCRCxDQWhFRDs7ZUFrRWVoQixZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBc3luY1NlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0L2FzeW5jXCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4vTGlzdEl0ZW1cIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSc7XG5cbmxldCBkZWJvdW5jZWRPbkNoYW5nZTsgXG5cbmNvbnN0IFNlbGVjdENpdGllcyA9ICh7XG4gIG9uQ2hhbmdlLFxuICBpbnB1dFZhbHVlLFxuICBvbklucHV0Q2hhbmdlLFxuICBsb2FkT3B0aW9ucyxcbiAgbWF4U2VsZWN0ZWRJdGVtcyA9IEluZmluaXR5LFxuICBsYWJlbE9wdGlvbiA9ICduYW1lJyxcbiAgdmFsdWVPcHRpb24gPSAnX2lkJyxcbiAgdHlwZU9wdGlvbiA9ICd0eXBlJyxcbiAgY3VzdG9tVHlwZSA9ICdjb3VudHJ5JyxcbiAgZGVib3VuY2VUaW1lID0gMzAwLFxuICBkZWZhdWx0VmFsdWUgPSBbXSxcbiAgcGxhY2Vob2xkZXI9J1NlbGVjdC4uLicsXG4gIHZhbHVlID0gW10sXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGVib3VuY2VkT25DaGFuZ2UgPSBkZWJvdW5jZShsb2FkT3B0aW9ucywgZGVib3VuY2VUaW1lKTtcbiAgICByZW5kZXJDb3VudHJpZXNMaXN0KCk7XG4gIH0sIFtdKVxuXG4gIGNvbnN0IHJlbmRlckNvdW50cmllc0xpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlLm1hcChjb3VudHJ5ID0+IChcbiAgICAgIDxMaXN0SXRlbVxuICAgICAgICBpdGVtPXtjb3VudHJ5fVxuICAgICAgICBvblJlbW92ZUl0ZW09e2lkID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdJdGVtcyA9IHZhbHVlLmZpbHRlcihcbiAgICAgICAgICAgIGNvdW50cnkgPT4gY291bnRyeVt2YWx1ZU9wdGlvbl0gIT09IGlkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBvbkNoYW5nZShuZXdJdGVtcyk7XG4gICAgICAgIH19XG4gICAgICAgIHZhbHVlT3B0aW9uPXt2YWx1ZU9wdGlvbn1cbiAgICAgICAgbGFiZWxPcHRpb249e2xhYmVsT3B0aW9ufVxuICAgICAgICB0eXBlT3B0aW9uPXt0eXBlT3B0aW9ufVxuICAgICAgICBjdXN0b21UeXBlPXtjdXN0b21UeXBlfVxuICAgICAgLz5cbiAgICApKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdFNlbGVjdENpdGllc1wiIHsuLi5wcm9wc30+XG4gICAgICA8QXN5bmNTZWxlY3RcbiAgICAgICAgYmFja3NwYWNlUmVtb3Zlc1ZhbHVlPXtmYWxzZX1cbiAgICAgICAgaXNDbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICBzdHlsZXM9e3tcbiAgICAgICAgICBtdWx0aVZhbHVlOiAoKSA9PiAoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KSxcbiAgICAgICAgICBtdWx0aVZhbHVlUmVtb3ZlOiBiYXNlID0+ICh7IC4uLmJhc2UsIGRpc3BsYXk6IFwibm9uZVwiIH0pXG4gICAgICAgIH19XG4gICAgICAgIGdldE9wdGlvbkxhYmVsPXtvcHRpb24gPT4gb3B0aW9uW2xhYmVsT3B0aW9uXX1cbiAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e29wdGlvbiA9PiBvcHRpb25bdmFsdWVPcHRpb25dfVxuICAgICAgICBsb2FkT3B0aW9ucz17ZGVib3VuY2VkT25DaGFuZ2V9XG4gICAgICAgIG9uSW5wdXRDaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9eyhjdXJyZW50VmFsdWVzKSA9PiB7IG9uQ2hhbmdlKGN1cnJlbnRWYWx1ZXMpOyB9fVxuICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBpc011bHRpXG4gICAgICAvPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAge3ZhbHVlICYmIHJlbmRlckNvdW50cmllc0xpc3QoKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RDaXRpZXM7XG4iXX0=