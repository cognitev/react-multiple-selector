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
    components: {
      DropdownIndicator: function DropdownIndicator() {
        return null;
      }
    },
    isMulti: true
  }), _react.default.createElement("ul", {
    className: "list"
  }, value && renderCountriesList()));
};

var _default = SelectCities;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWJvdW5jZWRPbkNoYW5nZSIsIlNlbGVjdENpdGllcyIsIm9uQ2hhbmdlIiwiaW5wdXRWYWx1ZSIsIm9uSW5wdXRDaGFuZ2UiLCJsb2FkT3B0aW9ucyIsIm1heFNlbGVjdGVkSXRlbXMiLCJJbmZpbml0eSIsImxhYmVsT3B0aW9uIiwidmFsdWVPcHRpb24iLCJ0eXBlT3B0aW9uIiwiY3VzdG9tVHlwZSIsImRlYm91bmNlVGltZSIsImRlZmF1bHRWYWx1ZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJwcm9wcyIsInJlbmRlckNvdW50cmllc0xpc3QiLCJtYXAiLCJjb3VudHJ5IiwiaWQiLCJuZXdJdGVtcyIsImZpbHRlciIsIm11bHRpVmFsdWUiLCJkaXNwbGF5IiwibXVsdGlWYWx1ZVJlbW92ZSIsImJhc2UiLCJvcHRpb24iLCJjdXJyZW50VmFsdWVzIiwiRHJvcGRvd25JbmRpY2F0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxpQkFBSjs7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQWVmO0FBQUEsTUFkSkMsU0FjSSxRQWRKQSxRQWNJO0FBQUEsTUFiSkMsVUFhSSxRQWJKQSxVQWFJO0FBQUEsTUFaSkMsYUFZSSxRQVpKQSxhQVlJO0FBQUEsTUFYSkMsV0FXSSxRQVhKQSxXQVdJO0FBQUEsbUNBVkpDLGdCQVVJO0FBQUEsTUFWSkEsZ0JBVUksc0NBVmVDLFFBVWY7QUFBQSw4QkFUSkMsV0FTSTtBQUFBLE1BVEpBLFdBU0ksaUNBVFUsTUFTVjtBQUFBLDhCQVJKQyxXQVFJO0FBQUEsTUFSSkEsV0FRSSxpQ0FSVSxLQVFWO0FBQUEsNkJBUEpDLFVBT0k7QUFBQSxNQVBKQSxVQU9JLGdDQVBTLE1BT1Q7QUFBQSw2QkFOSkMsVUFNSTtBQUFBLE1BTkpBLFVBTUksZ0NBTlMsU0FNVDtBQUFBLCtCQUxKQyxZQUtJO0FBQUEsTUFMSkEsWUFLSSxrQ0FMVyxHQUtYO0FBQUEsK0JBSkpDLFlBSUk7QUFBQSxNQUpKQSxZQUlJLGtDQUpXLEVBSVg7QUFBQSw4QkFISkMsV0FHSTtBQUFBLE1BSEpBLFdBR0ksaUNBSFEsV0FHUjtBQUFBLHdCQUZKQyxLQUVJO0FBQUEsTUFGSkEsS0FFSSwyQkFGSSxFQUVKO0FBQUEsTUFEREMsS0FDQzs7QUFDSix3QkFBVSxZQUFNO0FBQ2RoQixJQUFBQSxpQkFBaUIsR0FBRyxxQkFBU0ssV0FBVCxFQUFzQk8sWUFBdEIsQ0FBcEI7QUFDQUssSUFBQUEsbUJBQW1CO0FBQ3BCLEdBSEQsRUFHRyxFQUhIOztBQUtBLE1BQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNoQyxXQUFPRixLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFBQyxPQUFPO0FBQUEsYUFDdEIsNkJBQUMsaUJBQUQ7QUFDRSxRQUFBLElBQUksRUFBRUEsT0FEUjtBQUVFLFFBQUEsWUFBWSxFQUFFLHNCQUFBQyxFQUFFLEVBQUk7QUFDbEIsY0FBTUMsUUFBUSxHQUFHTixLQUFLLENBQUNPLE1BQU4sQ0FDZixVQUFBSCxPQUFPO0FBQUEsbUJBQUlBLE9BQU8sQ0FBQ1YsV0FBRCxDQUFQLEtBQXlCVyxFQUE3QjtBQUFBLFdBRFEsQ0FBakI7O0FBR0FsQixVQUFBQSxTQUFRLENBQUNtQixRQUFELENBQVI7QUFDRCxTQVBIO0FBUUUsUUFBQSxXQUFXLEVBQUVaLFdBUmY7QUFTRSxRQUFBLFdBQVcsRUFBRUQsV0FUZjtBQVVFLFFBQUEsVUFBVSxFQUFFRSxVQVZkO0FBV0UsUUFBQSxVQUFVLEVBQUVDO0FBWGQsUUFEc0I7QUFBQSxLQUFqQixDQUFQO0FBZUQsR0FoQkQ7O0FBa0JBLFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQXVDSyxLQUF2QyxHQUNFLDZCQUFDLGNBQUQ7QUFDRSxJQUFBLHFCQUFxQixFQUFFLEtBRHpCO0FBRUUsSUFBQSxXQUFXLEVBQUUsS0FGZjtBQUdFLElBQUEsTUFBTSxFQUFFO0FBQ05PLE1BQUFBLFVBQVUsRUFBRTtBQUFBLGVBQU87QUFBRUMsVUFBQUEsT0FBTyxFQUFFO0FBQVgsU0FBUDtBQUFBLE9BRE47QUFFTkMsTUFBQUEsZ0JBQWdCLEVBQUUsMEJBQUFDLElBQUk7QUFBQSxpQ0FBVUEsSUFBVjtBQUFnQkYsVUFBQUEsT0FBTyxFQUFFO0FBQXpCO0FBQUE7QUFGaEIsS0FIVjtBQU9FLElBQUEsY0FBYyxFQUFFLHdCQUFBRyxNQUFNO0FBQUEsYUFBSUEsTUFBTSxDQUFDbkIsV0FBRCxDQUFWO0FBQUEsS0FQeEI7QUFRRSxJQUFBLGNBQWMsRUFBRSx3QkFBQW1CLE1BQU07QUFBQSxhQUFJQSxNQUFNLENBQUNsQixXQUFELENBQVY7QUFBQSxLQVJ4QjtBQVNFLElBQUEsV0FBVyxFQUFFVCxpQkFUZjtBQVVFLElBQUEsYUFBYSxFQUFFSSxhQVZqQjtBQVdFLElBQUEsS0FBSyxFQUFFVyxLQVhUO0FBWUUsSUFBQSxRQUFRLEVBQUUsa0JBQUNhLGFBQUQsRUFBbUI7QUFBRTFCLE1BQUFBLFNBQVEsQ0FBQzBCLGFBQUQsQ0FBUjtBQUEwQixLQVozRDtBQWFFLElBQUEsVUFBVSxFQUFFekIsVUFiZDtBQWNFLElBQUEsWUFBWSxFQUFFVSxZQWRoQjtBQWVFLElBQUEsV0FBVyxFQUFFQyxXQWZmO0FBZ0JFLElBQUEsVUFBVSxFQUFFO0FBQUVlLE1BQUFBLGlCQUFpQixFQUFDO0FBQUEsZUFBTSxJQUFOO0FBQUE7QUFBcEIsS0FoQmQ7QUFpQkUsSUFBQSxPQUFPO0FBakJULElBREYsRUFvQkU7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLEtBQ0dkLEtBQUssSUFBSUUsbUJBQW1CLEVBRC9CLENBcEJGLENBREY7QUEwQkQsQ0FqRUQ7O2VBbUVlaEIsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXN5bmNTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdC9hc3luY1wiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuL0xpc3RJdGVtXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xuXG5sZXQgZGVib3VuY2VkT25DaGFuZ2U7IFxuXG5jb25zdCBTZWxlY3RDaXRpZXMgPSAoe1xuICBvbkNoYW5nZSxcbiAgaW5wdXRWYWx1ZSxcbiAgb25JbnB1dENoYW5nZSxcbiAgbG9hZE9wdGlvbnMsXG4gIG1heFNlbGVjdGVkSXRlbXMgPSBJbmZpbml0eSxcbiAgbGFiZWxPcHRpb24gPSAnbmFtZScsXG4gIHZhbHVlT3B0aW9uID0gJ19pZCcsXG4gIHR5cGVPcHRpb24gPSAndHlwZScsXG4gIGN1c3RvbVR5cGUgPSAnY291bnRyeScsXG4gIGRlYm91bmNlVGltZSA9IDMwMCxcbiAgZGVmYXVsdFZhbHVlID0gW10sXG4gIHBsYWNlaG9sZGVyPSdTZWxlY3QuLi4nLFxuICB2YWx1ZSA9IFtdLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRlYm91bmNlZE9uQ2hhbmdlID0gZGVib3VuY2UobG9hZE9wdGlvbnMsIGRlYm91bmNlVGltZSk7XG4gICAgcmVuZGVyQ291bnRyaWVzTGlzdCgpO1xuICB9LCBbXSlcblxuICBjb25zdCByZW5kZXJDb3VudHJpZXNMaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiB2YWx1ZS5tYXAoY291bnRyeSA9PiAoXG4gICAgICA8TGlzdEl0ZW1cbiAgICAgICAgaXRlbT17Y291bnRyeX1cbiAgICAgICAgb25SZW1vdmVJdGVtPXtpZCA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3SXRlbXMgPSB2YWx1ZS5maWx0ZXIoXG4gICAgICAgICAgICBjb3VudHJ5ID0+IGNvdW50cnlbdmFsdWVPcHRpb25dICE9PSBpZFxuICAgICAgICAgICk7XG4gICAgICAgICAgb25DaGFuZ2UobmV3SXRlbXMpO1xuICAgICAgICB9fVxuICAgICAgICB2YWx1ZU9wdGlvbj17dmFsdWVPcHRpb259XG4gICAgICAgIGxhYmVsT3B0aW9uPXtsYWJlbE9wdGlvbn1cbiAgICAgICAgdHlwZU9wdGlvbj17dHlwZU9wdGlvbn1cbiAgICAgICAgY3VzdG9tVHlwZT17Y3VzdG9tVHlwZX1cbiAgICAgIC8+XG4gICAgKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3RTZWxlY3RDaXRpZXNcIiB7Li4ucHJvcHN9PlxuICAgICAgPEFzeW5jU2VsZWN0XG4gICAgICAgIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZT17ZmFsc2V9XG4gICAgICAgIGlzQ2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgc3R5bGVzPXt7XG4gICAgICAgICAgbXVsdGlWYWx1ZTogKCkgPT4gKHsgZGlzcGxheTogXCJub25lXCIgfSksXG4gICAgICAgICAgbXVsdGlWYWx1ZVJlbW92ZTogYmFzZSA9PiAoeyAuLi5iYXNlLCBkaXNwbGF5OiBcIm5vbmVcIiB9KVxuICAgICAgICB9fVxuICAgICAgICBnZXRPcHRpb25MYWJlbD17b3B0aW9uID0+IG9wdGlvbltsYWJlbE9wdGlvbl19XG4gICAgICAgIGdldE9wdGlvblZhbHVlPXtvcHRpb24gPT4gb3B0aW9uW3ZhbHVlT3B0aW9uXX1cbiAgICAgICAgbG9hZE9wdGlvbnM9e2RlYm91bmNlZE9uQ2hhbmdlfVxuICAgICAgICBvbklucHV0Q2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoY3VycmVudFZhbHVlcykgPT4geyBvbkNoYW5nZShjdXJyZW50VmFsdWVzKTsgfX1cbiAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgY29tcG9uZW50cz17eyBEcm9wZG93bkluZGljYXRvcjooKSA9PiBudWxsIH19XG4gICAgICAgIGlzTXVsdGlcbiAgICAgIC8+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICB7dmFsdWUgJiYgcmVuZGVyQ291bnRyaWVzTGlzdCgpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdENpdGllcztcbiJdfQ==