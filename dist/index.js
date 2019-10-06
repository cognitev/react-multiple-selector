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
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? [] : _ref$defaultValue,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Select...' : _ref$placeholder,
      props = _objectWithoutProperties(_ref, ["onChange", "inputValue", "onInputChange", "loadOptions", "maxSelectedItems", "labelOption", "valueOption", "typeOption", "customType", "debounceTime", "defaultValue", "placeholder"]);

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
    defaultOptions: defaultValue,
    placeholder: placeholder,
    isMulti: true
  }), _react.default.createElement("ul", {
    className: "list"
  }, currentSelectedValues && renderCountriesList()));
};

var _default = SelectCities;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWJvdW5jZWRPbkNoYW5nZSIsIlNlbGVjdENpdGllcyIsIm9uQ2hhbmdlIiwiaW5wdXRWYWx1ZSIsIm9uSW5wdXRDaGFuZ2UiLCJsb2FkT3B0aW9ucyIsIm1heFNlbGVjdGVkSXRlbXMiLCJsYWJlbE9wdGlvbiIsInZhbHVlT3B0aW9uIiwidHlwZU9wdGlvbiIsImN1c3RvbVR5cGUiLCJkZWJvdW5jZVRpbWUiLCJkZWZhdWx0VmFsdWUiLCJwbGFjZWhvbGRlciIsInByb3BzIiwiY3VycmVudFNlbGVjdGVkVmFsdWVzIiwic2VsZWN0VmFsdWVzIiwicmVuZGVyQ291bnRyaWVzTGlzdCIsIm1hcCIsImNvdW50cnkiLCJpZCIsIm5ld0l0ZW1zIiwiZmlsdGVyIiwiZ2V0TGFzdEVsZW1lbnQiLCJhcnIiLCJsZW5ndGgiLCJjaGVja0NvdW50cmllcyIsImN1cnJlbnRWYWx1ZXMiLCJhY3Rpb24iLCJudW1iZXJPZkNvdW50cmllcyIsInJlZHVjZSIsImFjYyIsIk51bWJlciIsImxhc3RFbGVtZW50IiwibXVsdGlWYWx1ZSIsImRpc3BsYXkiLCJtdWx0aVZhbHVlUmVtb3ZlIiwiYmFzZSIsIm9wdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsaUJBQUo7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FjZjtBQUFBLE1BYkpDLFFBYUksUUFiSkEsUUFhSTtBQUFBLE1BWkpDLFVBWUksUUFaSkEsVUFZSTtBQUFBLE1BWEpDLGFBV0ksUUFYSkEsYUFXSTtBQUFBLE1BVkpDLFdBVUksUUFWSkEsV0FVSTtBQUFBLE1BVEpDLGdCQVNJLFFBVEpBLGdCQVNJO0FBQUEsOEJBUkpDLFdBUUk7QUFBQSxNQVJKQSxXQVFJLGlDQVJVLE1BUVY7QUFBQSw4QkFQSkMsV0FPSTtBQUFBLE1BUEpBLFdB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QixFQUFFLDBCQUFBQyxJQUFJO0FBQUEsaUNBQVVBLElBQVY7QUFBZ0JGLFVBQUFBLE9BQU8sRUFBRTtBQUF6QjtBQUFBO0FBRmhCLEtBSFY7QUFPRSxJQUFBLGNBQWMsRUFBRSx3QkFBQUcsTUFBTTtBQUFBLGFBQUlBLE1BQU0sQ0FBQy9CLFdBQUQsQ0FBVjtBQUFBLEtBUHhCO0FBUUUsSUFBQSxjQUFjLEVBQUUsd0JBQUErQixNQUFNO0FBQUEsYUFBSUEsTUFBTSxDQUFDOUIsV0FBRCxDQUFWO0FBQUEsS0FSeEI7QUFTRSxJQUFBLFdBQVcsRUFBRVIsaUJBVGY7QUFVRSxJQUFBLGFBQWEsRUFBRUksYUFWakI7QUFXRSxJQUFBLEtBQUssRUFBRVcscUJBWFQ7QUFZRSxJQUFBLFFBQVEsRUFBRSxrQkFBQ1ksYUFBRCxFQUFnQkMsTUFBaEIsRUFBMkI7QUFBRUYsTUFBQUEsY0FBYyxDQUFDQyxhQUFELEVBQWdCQyxNQUFoQixDQUFkO0FBQXdDLEtBWmpGO0FBYUUsSUFBQSxVQUFVLEVBQUV6QixVQWJkO0FBY0UsSUFBQSxjQUFjLEVBQUVTLFlBZGxCO0FBZUUsSUFBQSxXQUFXLEVBQUVDLFdBZmY7QUFnQkUsSUFBQSxPQUFPO0FBaEJULElBREYsRUFtQkU7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLEtBQ0dFLHFCQUFxQixJQUFJRSxtQkFBbUIsRUFEL0MsQ0FuQkYsQ0FERjtBQXlCRCxDQWhGRDs7ZUFrRmVoQixZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBc3luY1NlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0L2FzeW5jXCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4vTGlzdEl0ZW1cIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSc7XG5cbmxldCBkZWJvdW5jZWRPbkNoYW5nZTsgXG5cbmNvbnN0IFNlbGVjdENpdGllcyA9ICh7XG4gIG9uQ2hhbmdlLFxuICBpbnB1dFZhbHVlLFxuICBvbklucHV0Q2hhbmdlLFxuICBsb2FkT3B0aW9ucyxcbiAgbWF4U2VsZWN0ZWRJdGVtcyxcbiAgbGFiZWxPcHRpb24gPSAnbmFtZScsXG4gIHZhbHVlT3B0aW9uID0gJ19pZCcsXG4gIHR5cGVPcHRpb24gPSAndHlwZScsXG4gIGN1c3RvbVR5cGUgPSAnY291bnRyeScsXG4gIGRlYm91bmNlVGltZSA9IDMwMCxcbiAgZGVmYXVsdFZhbHVlID0gW10sXG4gIHBsYWNlaG9sZGVyPSdTZWxlY3QuLi4nLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRlYm91bmNlZE9uQ2hhbmdlID0gZGVib3VuY2UobG9hZE9wdGlvbnMsIGRlYm91bmNlVGltZSk7XG4gIH0sIFtdKVxuICBcbiAgY29uc3QgW2N1cnJlbnRTZWxlY3RlZFZhbHVlcywgc2VsZWN0VmFsdWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgcmVuZGVyQ291bnRyaWVzTGlzdCA9ICgpID0+XG4gICAgY3VycmVudFNlbGVjdGVkVmFsdWVzLm1hcChjb3VudHJ5ID0+IChcbiAgICAgIDxMaXN0SXRlbVxuICAgICAgICBpdGVtPXtjb3VudHJ5fVxuICAgICAgICBvblJlbW92ZUl0ZW09e2lkID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdJdGVtcyA9IGN1cnJlbnRTZWxlY3RlZFZhbHVlcy5maWx0ZXIoXG4gICAgICAgICAgICBjb3VudHJ5ID0+IGNvdW50cnlbdmFsdWVPcHRpb25dICE9PSBpZFxuICAgICAgICAgICk7XG4gICAgICAgICAgc2VsZWN0VmFsdWVzKG5ld0l0ZW1zKTtcbiAgICAgICAgfX1cbiAgICAgICAgdmFsdWVPcHRpb249e3ZhbHVlT3B0aW9ufVxuICAgICAgICBsYWJlbE9wdGlvbj17bGFiZWxPcHRpb259XG4gICAgICAgIHR5cGVPcHRpb249e3R5cGVPcHRpb259XG4gICAgICAgIGN1c3RvbVR5cGU9e2N1c3RvbVR5cGV9XG4gICAgICAvPlxuICAgICkpO1xuXG4gIGNvbnN0IGdldExhc3RFbGVtZW50ID0gYXJyID0+IGFyclthcnIubGVuZ3RoIC0gMV07XG4gIGNvbnN0IGNoZWNrQ291bnRyaWVzID0gKGN1cnJlbnRWYWx1ZXMsIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IG51bWJlck9mQ291bnRyaWVzID0gY3VycmVudFZhbHVlcy5yZWR1Y2UoXG4gICAgICAoYWNjLCBjb3VudHJ5KSA9PiAoYWNjICs9IE51bWJlcihjb3VudHJ5W3R5cGVPcHRpb25dID09PSBjdXN0b21UeXBlKSksXG4gICAgICAwXG4gICAgKTtcbiAgICBpZiAobnVtYmVyT2ZDb3VudHJpZXMgPiBtYXhTZWxlY3RlZEl0ZW1zKSB7XG4gICAgICBjb25zdCBsYXN0RWxlbWVudCA9IGdldExhc3RFbGVtZW50KGN1cnJlbnRWYWx1ZXMpO1xuICAgICAgaWYgKGxhc3RFbGVtZW50W3R5cGVPcHRpb25dICE9PSBjdXN0b21UeXBlKSB7XG4gICAgICAgIG9uQ2hhbmdlKGN1cnJlbnRWYWx1ZXMsIGFjdGlvbik7XG4gICAgICAgIHNlbGVjdFZhbHVlcyhjdXJyZW50VmFsdWVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb25DaGFuZ2UoY3VycmVudFZhbHVlcywgYWN0aW9uKTtcbiAgICAgIHNlbGVjdFZhbHVlcyhjdXJyZW50VmFsdWVzKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0U2VsZWN0Q2l0aWVzXCIgey4uLnByb3BzfT5cbiAgICAgIDxBc3luY1NlbGVjdFxuICAgICAgICBiYWNrc3BhY2VSZW1vdmVzVmFsdWU9e2ZhbHNlfVxuICAgICAgICBpc0NsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgIHN0eWxlcz17e1xuICAgICAgICAgIG11bHRpVmFsdWU6ICgpID0+ICh7IGRpc3BsYXk6IFwibm9uZVwiIH0pLFxuICAgICAgICAgIG11bHRpVmFsdWVSZW1vdmU6IGJhc2UgPT4gKHsgLi4uYmFzZSwgZGlzcGxheTogXCJub25lXCIgfSlcbiAgICAgICAgfX1cbiAgICAgICAgZ2V0T3B0aW9uTGFiZWw9e29wdGlvbiA9PiBvcHRpb25bbGFiZWxPcHRpb25dfVxuICAgICAgICBnZXRPcHRpb25WYWx1ZT17b3B0aW9uID0+IG9wdGlvblt2YWx1ZU9wdGlvbl19XG4gICAgICAgIGxvYWRPcHRpb25zPXtkZWJvdW5jZWRPbkNoYW5nZX1cbiAgICAgICAgb25JbnB1dENoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgdmFsdWU9e2N1cnJlbnRTZWxlY3RlZFZhbHVlc31cbiAgICAgICAgb25DaGFuZ2U9eyhjdXJyZW50VmFsdWVzLCBhY3Rpb24pID0+IHsgY2hlY2tDb3VudHJpZXMoY3VycmVudFZhbHVlcywgYWN0aW9uKTsgfX1cbiAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgZGVmYXVsdE9wdGlvbnM9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBpc011bHRpXG4gICAgICAvPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAge2N1cnJlbnRTZWxlY3RlZFZhbHVlcyAmJiByZW5kZXJDb3VudHJpZXNMaXN0KCl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0Q2l0aWVzO1xuIl19