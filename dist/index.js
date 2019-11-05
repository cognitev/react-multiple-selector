"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _async = _interopRequireDefault(require("react-select/async"));

var _reactSelect = require("react-select");

var _ListItem = _interopRequireDefault(require("./ListItem"));

require("./styles.css");

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _reactVirtualized = require("react-virtualized");

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
      _noOptionsMessage = _ref$noOptionsMessage === void 0 ? 'Enter a location to target' : _ref$noOptionsMessage,
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
      },
      MenuList: function MenuList(props) {
        return _react.default.createElement(_reactSelect.components.MenuList, props, props.children.length ? _react.default.createElement(_reactVirtualized.List, {
          width: 900,
          height: 200,
          rowHeight: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWJvdW5jZWRPbkNoYW5nZSIsIlNlbGVjdENpdGllcyIsIm9uQ2hhbmdlIiwiaW5wdXRWYWx1ZSIsIm9uSW5wdXRDaGFuZ2UiLCJsb2FkT3B0aW9ucyIsIm1heFNlbGVjdGVkSXRlbXMiLCJJbmZpbml0eSIsImxhYmVsT3B0aW9uIiwidmFsdWVPcHRpb24iLCJ0eXBlT3B0aW9uIiwiY3VzdG9tVHlwZSIsImRlYm91bmNlVGltZSIsImRlZmF1bHRWYWx1ZSIsInBsYWNlaG9sZGVyIiwibm9PcHRpb25zTWVzc2FnZSIsInZhbHVlIiwicHJvcHMiLCJyZW5kZXJDb3VudHJpZXNMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiY291bnRyeSIsImlkIiwibmV3SXRlbXMiLCJmaWx0ZXIiLCJtdWx0aVZhbHVlIiwiZGlzcGxheSIsIm11bHRpVmFsdWVSZW1vdmUiLCJiYXNlIiwib3B0aW9uIiwiY3VycmVudFZhbHVlcyIsIkRyb3Bkb3duSW5kaWNhdG9yIiwiTWVudUxpc3QiLCJjaGlsZHJlbiIsImxlbmd0aCIsIndpZHRoIiwiaW5kZXgiLCJrZXkiLCJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLGlCQUFKOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BZ0JmO0FBQUEsTUFmSkMsU0FlSSxRQWZKQSxRQWVJO0FBQUEsTUFkSkMsVUFjSSxRQWRKQSxVQWNJO0FBQUEsTUFiSkMsYUFhSSxRQWJKQSxhQWFJO0FBQUEsTUFaSkMsV0FZSSxRQVpKQSxXQVlJO0FBQUEsbUNBWEpDLGdCQVdJO0FBQUEsTUFYSkEsZ0JBV0ksc0NBWGVDLFFBV2Y7QUFBQSw4QkFWSkMsV0FVSTtBQUFBLE1BVkpBLFdBVUksaUNBVlUsTUFVVjtBQUFBLDhCQVRKQyxXQVNJO0FBQUEsTUFU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Q3JELDZCQUFDLHVCQUFELENBQVksUUFBWixFQUF5QkEsS0FBekIsRUFDR0EsS0FBSyxDQUFDaUIsUUFBTixDQUFlQyxNQUFmLEdBQ0csNkJBQUMsc0JBQUQ7QUFDRSxVQUFBLEtBQUssRUFBRSxHQURUO0FBRUUsVUFBQSxNQUFNLEVBQUUsR0FGVjtBQUdFLFVBQUEsU0FBUyxFQUFFLEVBSGI7QUFJRSxVQUFBLEtBQUssRUFBRTtBQUFFQyxZQUFBQSxLQUFLLEVBQUU7QUFBVCxXQUpUO0FBS0UsVUFBQSxXQUFXLEVBQUU7QUFBQSxnQkFBRUMsS0FBRixTQUFFQSxLQUFGO0FBQUEsZ0JBQVNDLEdBQVQsU0FBU0EsR0FBVDtBQUFBLGdCQUFjQyxLQUFkLFNBQWNBLEtBQWQ7QUFBQSxtQkFBeUI7QUFBSSxjQUFBLEtBQUssb0JBQU1BLEtBQU47QUFBYUgsZ0JBQUFBLEtBQUssRUFBRTtBQUFwQixnQkFBVDtBQUFzQyxjQUFBLEdBQUcsRUFBRUU7QUFBM0MsZUFBaURyQixLQUFLLENBQUNpQixRQUFOLENBQWVHLEtBQWYsQ0FBakQsQ0FBekI7QUFBQSxXQUxmO0FBTUUsVUFBQSxRQUFRLEVBQUVwQixLQUFLLENBQUNpQixRQUFOLENBQWVDO0FBTjNCLFVBREgsR0FTR2xCLEtBQUssQ0FBQ2lCLFFBVlosQ0FEcUQ7QUFBQTtBQUEzQyxLQWhCZDtBQStCRSxJQUFBLGdCQUFnQixFQUFFO0FBQUEsYUFBTW5CLGlCQUFOO0FBQUEsS0EvQnBCO0FBZ0NFLElBQUEsT0FBTztBQWhDVCxJQURGLEVBbUNJO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxLQUNHQyxLQUFLLElBQUlFLG1CQUFtQixFQUQvQixDQW5DSixDQURGO0FBeUNELENBL0VEOztlQWlGZWpCLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXN5bmNTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdC9hc3luY1wiO1xuaW1wb3J0IHsgY29tcG9uZW50cyB9IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4vTGlzdEl0ZW1cIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSc7XG5pbXBvcnQgeyBBdXRvU2l6ZXIsIExpc3QgfSBmcm9tIFwicmVhY3QtdmlydHVhbGl6ZWRcIjtcblxubGV0IGRlYm91bmNlZE9uQ2hhbmdlOyBcblxuY29uc3QgU2VsZWN0Q2l0aWVzID0gKHtcbiAgb25DaGFuZ2UsXG4gIGlucHV0VmFsdWUsXG4gIG9uSW5wdXRDaGFuZ2UsXG4gIGxvYWRPcHRpb25zLFxuICBtYXhTZWxlY3RlZEl0ZW1zID0gSW5maW5pdHksXG4gIGxhYmVsT3B0aW9uID0gJ25hbWUnLFxuICB2YWx1ZU9wdGlvbiA9ICdfaWQnLFxuICB0eXBlT3B0aW9uID0gJ3R5cGUnLFxuICBjdXN0b21UeXBlID0gJ2NvdW50cnknLFxuICBkZWJvdW5jZVRpbWUgPSAzMDAsXG4gIGRlZmF1bHRWYWx1ZSA9IFtdLFxuICBwbGFjZWhvbGRlcj0nU2VsZWN0Li4uJyxcbiAgbm9PcHRpb25zTWVzc2FnZT0nRW50ZXIgYSBsb2NhdGlvbiB0byB0YXJnZXQnLFxuICB2YWx1ZSA9IFtdLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRlYm91bmNlZE9uQ2hhbmdlID0gZGVib3VuY2UobG9hZE9wdGlvbnMsIGRlYm91bmNlVGltZSk7XG4gICAgcmVuZGVyQ291bnRyaWVzTGlzdCgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcmVuZGVyQ291bnRyaWVzTGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubWFwKGNvdW50cnkgPT4gPExpc3RJdGVtXG4gICAgICBpdGVtPXtjb3VudHJ5fVxuICAgICAgb25SZW1vdmVJdGVtPXtpZCA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gdmFsdWUuZmlsdGVyKFxuICAgICAgICAgIGNvdW50cnkgPT4gY291bnRyeVt2YWx1ZU9wdGlvbl0gIT09IGlkXG4gICAgICAgICk7XG4gICAgICAgIG9uQ2hhbmdlKG5ld0l0ZW1zKTtcbiAgICAgIH19XG4gICAgICB2YWx1ZU9wdGlvbj17dmFsdWVPcHRpb259XG4gICAgICBsYWJlbE9wdGlvbj17bGFiZWxPcHRpb259XG4gICAgICB0eXBlT3B0aW9uPXt0eXBlT3B0aW9ufVxuICAgICAgY3VzdG9tVHlwZT17Y3VzdG9tVHlwZX1cbiAgICAvPik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3RTZWxlY3RDaXRpZXNcIiB7Li4ucHJvcHN9PlxuICAgICAgPEFzeW5jU2VsZWN0XG4gICAgICAgIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZT17ZmFsc2V9XG4gICAgICAgIGlzQ2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgc3R5bGVzPXt7XG4gICAgICAgICAgbXVsdGlWYWx1ZTogKCkgPT4gKHsgZGlzcGxheTogXCJub25lXCIgfSksXG4gICAgICAgICAgbXVsdGlWYWx1ZVJlbW92ZTogYmFzZSA9PiAoeyAuLi5iYXNlLCBkaXNwbGF5OiBcIm5vbmVcIiB9KVxuICAgICAgICB9fVxuICAgICAgICBnZXRPcHRpb25MYWJlbD17b3B0aW9uID0+IG9wdGlvbltsYWJlbE9wdGlvbl19XG4gICAgICAgIGdldE9wdGlvblZhbHVlPXtvcHRpb24gPT4gb3B0aW9uW3ZhbHVlT3B0aW9uXX1cbiAgICAgICAgbG9hZE9wdGlvbnM9e2RlYm91bmNlZE9uQ2hhbmdlfVxuICAgICAgICBvbklucHV0Q2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoY3VycmVudFZhbHVlcykgPT4geyBvbkNoYW5nZShjdXJyZW50VmFsdWVzKTsgfX1cbiAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgY29tcG9uZW50cz17eyBEcm9wZG93bkluZGljYXRvcjogKCkgPT4gbnVsbCwgTWVudUxpc3Q6IChwcm9wcykgPT4gXG4gICAgICAgICAgPGNvbXBvbmVudHMuTWVudUxpc3Qgey4uLnByb3BzfT5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbi5sZW5ndGhcbiAgICAgICAgICAgICAgPyA8TGlzdFxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezkwMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgICAgICAgICAgICAgcm93SGVpZ2h0PXszNX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICAgIHJvd1JlbmRlcmVyPXsoe2luZGV4LCBrZXksIHN0eWxlfSkgPT4gPGxpIHN0eWxlPXt7Li4uc3R5bGUsIHdpZHRoOiAnMTAwJSd9fSBrZXk9e2tleX0+e3Byb3BzLmNoaWxkcmVuW2luZGV4XX08L2xpPn1cbiAgICAgICAgICAgICAgICAgIHJvd0NvdW50PXtwcm9wcy5jaGlsZHJlbi5sZW5ndGh9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgOiBwcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvY29tcG9uZW50cy5NZW51TGlzdD5cbiAgICAgICAgfX1cbiAgICAgICAgbm9PcHRpb25zTWVzc2FnZT17KCkgPT4gbm9PcHRpb25zTWVzc2FnZX1cbiAgICAgICAgaXNNdWx0aVxuICAgICAgLz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICB7dmFsdWUgJiYgcmVuZGVyQ291bnRyaWVzTGlzdCgpfVxuICAgICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0Q2l0aWVzO1xuIl19