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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var debouncedOnSearch;

var MultiSelect = function MultiSelect(_ref) {
  var onSelect = _ref.onSelect,
      inputValue = _ref.inputValue,
      onInputChange = _ref.onInputChange,
      _ref$onSearch = _ref.onSearch,
      onSearch = _ref$onSearch === void 0 ? function () {} : _ref$onSearch,
      _ref$maxSelectedItems = _ref.maxSelectedItems,
      maxSelectedItems = _ref$maxSelectedItems === void 0 ? Infinity : _ref$maxSelectedItems,
      _ref$labelOption = _ref.labelOption,
      labelOption = _ref$labelOption === void 0 ? 'name' : _ref$labelOption,
      _ref$valueOption = _ref.valueOption,
      valueOption = _ref$valueOption === void 0 ? 'value' : _ref$valueOption,
      _ref$typeOption = _ref.typeOption,
      typeOption = _ref$typeOption === void 0 ? 'type' : _ref$typeOption,
      _ref$customType = _ref.customType,
      customType = _ref$customType === void 0 ? 'customType' : _ref$customType,
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
      className = _ref.className;

  (0, _react.useEffect)(function () {
    var loadOptions = function loadOptions(inputValue) {
      return onSearch(inputValue);
    };

    debouncedOnSearch = (0, _lodash.default)(loadOptions, debounceTime);
    renderOptionsList();
  }, []);

  var renderOptionsList = function renderOptionsList() {
    return Array.isArray(selectedOptions) && selectedOptions.map(function (country) {
      return _react.default.createElement(_ListItem.default, {
        item: country,
        onRemoveItem: function onRemoveItem(id) {
          var newItems = selectedOptions.filter(function (country) {
            return country[valueOption] !== id;
          });
          onSelect(newItems);
        },
        valueOption: valueOption,
        labelOption: labelOption,
        typeOption: typeOption,
        customType: customType
      });
    });
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
    loadOptions: function loadOptions(input) {
      return debouncedOnSearch(input);
    },
    value: selectedOptions,
    defaultValue: defaultSelectedOptions,
    placeholder: placeholder,
    onChange: function onChange(currentValues) {
      onSelect(currentValues);
    },
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
    }
  }), _react.default.createElement("ul", {
    className: "list"
  }, selectedOptions && renderOptionsList()));
};

var _default = MultiSelect;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWJvdW5jZWRPblNlYXJjaCIsIk11bHRpU2VsZWN0Iiwib25TZWxlY3QiLCJpbnB1dFZhbHVlIiwib25JbnB1dENoYW5nZSIsIm9uU2VhcmNoIiwibWF4U2VsZWN0ZWRJdGVtcyIsIkluZmluaXR5IiwibGFiZWxPcHRpb24iLCJ2YWx1ZU9wdGlvbiIsInR5cGVPcHRpb24iLCJjdXN0b21UeXBlIiwiZGVib3VuY2VUaW1lIiwiZGVmYXVsdFNlbGVjdGVkT3B0aW9ucyIsInBsYWNlaG9sZGVyIiwibm9PcHRpb25zTWVzc2FnZSIsInNlbGVjdGVkT3B0aW9ucyIsImNsYXNzTmFtZSIsImxvYWRPcHRpb25zIiwicmVuZGVyT3B0aW9uc0xpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJjb3VudHJ5IiwiaWQiLCJuZXdJdGVtcyIsImZpbHRlciIsIm9wdGlvbiIsImlucHV0IiwiY3VycmVudFZhbHVlcyIsIm11bHRpVmFsdWUiLCJkaXNwbGF5IiwibXVsdGlWYWx1ZVJlbW92ZSIsImJhc2UiLCJEcm9wZG93bkluZGljYXRvciIsIk1lbnVMaXN0IiwicHJvcHMiLCJjaGlsZHJlbiIsImxlbmd0aCIsIndpZHRoIiwiaW5kZXgiLCJrZXkiLCJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLGlCQUFKOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BZ0JPO0FBQUEsTUFmSkMsUUFlSSxRQWZKQSxRQWVJO0FBQUEsTUFkSkMsVUFjSSxRQWRKQSxVQWNJO0FBQUEsTUFiSkMsYUFhSSxRQWJKQSxhQWFJO0FBQUEsMkJBWkpDLFFBWUk7QUFBQSxNQVpKQSxRQVlJLDhCQVpPLFlBQU0sQ0FBRSxDQVlmO0FBQUEsbUNBWEpDLGdCQVdJO0FBQUEsTUFYSkEsZ0JBV0ksc0NBWGVDLFFBV2Y7QUFBQSw4QkFWSkMsV0FVSTtBQUFBLE1BVkpBLFdBVUksaUNBVlUsTUFVVjtBQUFBLDhCQVRKQyxXQVNJO0FBQUEsTUFUSkEsV0FTSSxpQ0FUVSxPQVNWO0FBQUEsNkJBUkpDLFVBUUk7QUFBQSxNQVJKQSxVQVFJLGdDQVJTLE1BUVQ7QUFBQSw2QkFQSkMsVUFPSTtBQUFBLE1BUEpBLFVBT0ksZ0NBUFMsWUFPVDtBQUFBLCtCQU5KQyxZQU1JO0FBQUEsTUFOSkEsWUFNSSxrQ0FOVyxHQU1YO0FBQUEsbUNBTEpDLHNCQUtJO0FBQUEsTUFMSkEsc0JBS0ksc0NBTHFCLEVBS3JCO0FBQUEsOEJBSkpDLFdBSUk7QUFBQSxNQUpKQSxXQUlJLGlDQUpVLEVBSVY7QUFBQSxtQ0FISkMsZ0JBR0k7QUFBQSxNQUhKQSxpQkFHSSxzQ0FIZSw4QkFHZjtBQUFBLGtDQUZKQyxlQUVJO0FBQUEsTUFGSkEsZUFFSSxxQ0FGYyxFQUVkO0FBQUEsTUFESkMsU0FDSSxRQURKQSxTQUNJOztBQUN6Qix3QkFBVSxZQUFNO0FBQ2QsUUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQWYsVUFBVTtBQUFBLGFBQUlFLFFBQVEsQ0FBQ0YsVUFBRCxDQUFaO0FBQUEsS0FBOUI7O0FBQ0FILElBQUFBLGlCQUFpQixHQUFHLHFCQUFTa0IsV0FBVCxFQUFzQk4sWUFBdEIsQ0FBcEI7QUFDQU8sSUFBQUEsaUJBQWlCO0FBQ2xCLEdBSkQsRUFJRyxFQUpIOztBQU1BLE1BQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QixXQUFPQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0wsZUFBZCxLQUFrQ0EsZUFBZSxDQUFDTSxHQUFoQixDQUFvQixVQUFBQyxPQUFPO0FBQUEsYUFBSSw2QkFBQyxpQkFBRDtBQUN0RSxRQUFBLElBQUksRUFBRUEsT0FEZ0U7QUFFdEUsUUFBQSxZQUFZLEVBQUUsc0JBQUFDLEVBQUUsRUFBSTtBQUNsQixjQUFNQyxRQUFRLEdBQUdULGVBQWUsQ0FBQ1UsTUFBaEIsQ0FDZixVQUFBSCxPQUFPO0FBQUEsbUJBQUlBLE9BQU8sQ0FBQ2QsV0FBRCxDQUFQLEtBQXlCZSxFQUE3QjtBQUFBLFdBRFEsQ0FBakI7QUFHQXRCLFVBQUFBLFFBQVEsQ0FBQ3VCLFFBQUQsQ0FBUjtBQUNELFNBUHFFO0FBUXRFLFFBQUEsV0FBVyxFQUFFaEIsV0FSeUQ7QUFTdEUsUUFBQSxXQUFXLEVBQUVELFdBVHlEO0FBVXRFLFFBQUEsVUFBVSxFQUFFRSxVQVYwRDtBQVd0RSxRQUFBLFVBQVUsRUFBRUM7QUFYMEQsUUFBSjtBQUFBLEtBQTNCLENBQXpDO0FBYUQsR0FkRDs7QUFnQkEsU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFTTtBQUFoQixLQUNFLDZCQUFDLGNBQUQ7QUFDRSxJQUFBLE9BQU8sTUFEVDtBQUVFLElBQUEsZ0JBQWdCLEVBQUU7QUFBQSxhQUFNRixpQkFBTjtBQUFBLEtBRnBCO0FBR0UsSUFBQSxxQkFBcUIsRUFBRSxLQUh6QjtBQUlFLElBQUEsV0FBVyxFQUFFLEtBSmY7QUFLRSxJQUFBLGNBQWMsRUFBRSx3QkFBQVksTUFBTTtBQUFBLGFBQUlBLE1BQU0sQ0FBQ25CLFdBQUQsQ0FBVjtBQUFBLEtBTHhCO0FBTUUsSUFBQSxjQUFjLEVBQUUsd0JBQUFtQixNQUFNO0FBQUEsYUFBSUEsTUFBTSxDQUFDbEIsV0FBRCxDQUFWO0FBQUEsS0FOeEI7QUFPRSxJQUFBLFdBQVcsRUFBRSxxQkFBQW1CLEtBQUs7QUFBQSxhQUFJNUIsaUJBQWlCLENBQUM0QixLQUFELENBQXJCO0FBQUEsS0FQcEI7QUFRRSxJQUFBLEtBQUssRUFBRVosZUFSVDtBQVNFLElBQUEsWUFBWSxFQUFFSCxzQkFUaEI7QUFVRSxJQUFBLFdBQVcsRUFBRUMsV0FWZjtBQVdFLElBQUEsUUFBUSxFQUFFLGtCQUFDZSxhQUFELEVBQW1CO0FBQzNCM0IsTUFBQUEsUUFBUSxDQUFDMkIsYUFBRCxDQUFSO0FBQ0QsS0FiSDtBQWNFLElBQUEsTUFBTSxFQUFFO0FBQ05DLE1BQUFBLFVBQVUsRUFBRTtBQUFBLGVBQU87QUFBQ0MsVUFBQUEsT0FBTyxFQUFFO0FBQVYsU0FBUDtBQUFBLE9BRE47QUFFTkMsTUFBQUEsZ0JBQWdCLEVBQUUsMEJBQUFDLElBQUk7QUFBQSxpQ0FBU0EsSUFBVDtBQUFlRixVQUFBQSxPQUFPLEVBQUU7QUFBeEI7QUFBQTtBQUZoQixLQWRWO0FBa0JFLElBQUEsVUFBVSxFQUFFO0FBQ1ZHLE1BQUFBLGlCQUFpQixFQUFFO0FBQUEsZUFBTSxJQUFOO0FBQUEsT0FEVDtBQUNxQkMsTUFBQUEsUUFBUSxFQUFFLGtCQUFDQyxLQUFEO0FBQUEsZUFDdkMsNkJBQUMsdUJBQUQsQ0FBWSxRQUFaLEVBQXlCQSxLQUF6QixFQUNHQSxLQUFLLENBQUNDLFFBQU4sQ0FBZUMsTUFBZixHQUNHLDZCQUFDLHNCQUFEO0FBQ0EsVUFBQSxLQUFLLEVBQUUsR0FEUDtBQUVBLFVBQUEsTUFBTSxFQUFFLEdBRlI7QUFHQSxVQUFBLFNBQVMsRUFBRSxFQUhYO0FBSUEsVUFBQSxLQUFLLEVBQUU7QUFBQ0MsWUFBQUEsS0FBSyxFQUFFO0FBQVIsV0FKUDtBQUtBLFVBQUEsV0FBVyxFQUFFO0FBQUEsZ0JBQUVDLEtBQUYsU0FBRUEsS0FBRjtBQUFBLGdCQUFTQyxHQUFULFNBQVNBLEdBQVQ7QUFBQSxnQkFBY0MsS0FBZCxTQUFjQSxLQUFkO0FBQUEsbUJBQ1g7QUFBSSxjQUFBLEtBQUssb0JBQU1BLEtBQU47QUFBYUgsZ0JBQUFBLEtBQUssRUFBRTtBQUFwQixnQkFBVDtBQUNJLGNBQUEsR0FBRyxFQUFFRTtBQURULGVBQ2VMLEtBQUssQ0FBQ0MsUUFBTixDQUFlRyxLQUFmLENBRGYsQ0FEVztBQUFBLFdBTGI7QUFVQSxVQUFBLFFBQVEsRUFBRUosS0FBSyxDQUFDQyxRQUFOLENBQWVDO0FBVnpCLFVBREgsR0FhR0YsS0FBSyxDQUFDQyxRQWRaLENBRHVDO0FBQUE7QUFEL0I7QUFsQmQsSUFERixFQXdDRTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsS0FDR3JCLGVBQWUsSUFBSUcsaUJBQWlCLEVBRHZDLENBeENGLENBREY7QUE4Q0QsQ0FyRkQ7O2VBdUZlbEIsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXN5bmNTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdC9hc3luY1wiO1xuaW1wb3J0IHtjb21wb25lbnRzfSBmcm9tICdyZWFjdC1zZWxlY3QnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuL0xpc3RJdGVtXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xuaW1wb3J0IHtMaXN0fSBmcm9tIFwicmVhY3QtdmlydHVhbGl6ZWRcIjtcblxubGV0IGRlYm91bmNlZE9uU2VhcmNoO1xuXG5jb25zdCBNdWx0aVNlbGVjdCA9ICh7XG4gICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICBvblNlYXJjaCA9ICgpID0+IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICBtYXhTZWxlY3RlZEl0ZW1zID0gSW5maW5pdHksXG4gICAgICAgICAgICAgICAgICAgICAgIGxhYmVsT3B0aW9uID0gJ25hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZU9wdGlvbiA9ICd2YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGVPcHRpb24gPSAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVR5cGUgPSAnY3VzdG9tVHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgIGRlYm91bmNlVGltZSA9IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFNlbGVjdGVkT3B0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICBub09wdGlvbnNNZXNzYWdlID0gJ1N0YXJ0IFR5cGluZyB0byB2aWV3IG9wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnMgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRPcHRpb25zID0gaW5wdXRWYWx1ZSA9PiBvblNlYXJjaChpbnB1dFZhbHVlKTtcbiAgICBkZWJvdW5jZWRPblNlYXJjaCA9IGRlYm91bmNlKGxvYWRPcHRpb25zLCBkZWJvdW5jZVRpbWUpO1xuICAgIHJlbmRlck9wdGlvbnNMaXN0KCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCByZW5kZXJPcHRpb25zTGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShzZWxlY3RlZE9wdGlvbnMpICYmIHNlbGVjdGVkT3B0aW9ucy5tYXAoY291bnRyeSA9PiA8TGlzdEl0ZW1cbiAgICAgIGl0ZW09e2NvdW50cnl9XG4gICAgICBvblJlbW92ZUl0ZW09e2lkID0+IHtcbiAgICAgICAgY29uc3QgbmV3SXRlbXMgPSBzZWxlY3RlZE9wdGlvbnMuZmlsdGVyKFxuICAgICAgICAgIGNvdW50cnkgPT4gY291bnRyeVt2YWx1ZU9wdGlvbl0gIT09IGlkXG4gICAgICAgICk7XG4gICAgICAgIG9uU2VsZWN0KG5ld0l0ZW1zKTtcbiAgICAgIH19XG4gICAgICB2YWx1ZU9wdGlvbj17dmFsdWVPcHRpb259XG4gICAgICBsYWJlbE9wdGlvbj17bGFiZWxPcHRpb259XG4gICAgICB0eXBlT3B0aW9uPXt0eXBlT3B0aW9ufVxuICAgICAgY3VzdG9tVHlwZT17Y3VzdG9tVHlwZX1cbiAgICAvPik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPEFzeW5jU2VsZWN0XG4gICAgICAgIGlzTXVsdGlcbiAgICAgICAgbm9PcHRpb25zTWVzc2FnZT17KCkgPT4gbm9PcHRpb25zTWVzc2FnZX1cbiAgICAgICAgYmFja3NwYWNlUmVtb3Zlc1ZhbHVlPXtmYWxzZX1cbiAgICAgICAgaXNDbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICBnZXRPcHRpb25MYWJlbD17b3B0aW9uID0+IG9wdGlvbltsYWJlbE9wdGlvbl19XG4gICAgICAgIGdldE9wdGlvblZhbHVlPXtvcHRpb24gPT4gb3B0aW9uW3ZhbHVlT3B0aW9uXX1cbiAgICAgICAgbG9hZE9wdGlvbnM9e2lucHV0ID0+IGRlYm91bmNlZE9uU2VhcmNoKGlucHV0KX1cbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9uc31cbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0U2VsZWN0ZWRPcHRpb25zfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIG9uQ2hhbmdlPXsoY3VycmVudFZhbHVlcykgPT4ge1xuICAgICAgICAgIG9uU2VsZWN0KGN1cnJlbnRWYWx1ZXMpO1xuICAgICAgICB9fVxuICAgICAgICBzdHlsZXM9e3tcbiAgICAgICAgICBtdWx0aVZhbHVlOiAoKSA9PiAoe2Rpc3BsYXk6IFwibm9uZVwifSksXG4gICAgICAgICAgbXVsdGlWYWx1ZVJlbW92ZTogYmFzZSA9PiAoey4uLmJhc2UsIGRpc3BsYXk6IFwibm9uZVwifSlcbiAgICAgICAgfX1cbiAgICAgICAgY29tcG9uZW50cz17e1xuICAgICAgICAgIERyb3Bkb3duSW5kaWNhdG9yOiAoKSA9PiBudWxsLCBNZW51TGlzdDogKHByb3BzKSA9PlxuICAgICAgICAgICAgPGNvbXBvbmVudHMuTWVudUxpc3Qgey4uLnByb3BzfT5cbiAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVuLmxlbmd0aFxuICAgICAgICAgICAgICAgID8gPExpc3RcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXs5MDB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgICAgICAgIHJvd0hlaWdodD17MzV9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fVxuICAgICAgICAgICAgICAgICAgcm93UmVuZGVyZXI9eyh7aW5kZXgsIGtleSwgc3R5bGV9KSA9PlxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3suLi5zdHlsZSwgd2lkdGg6ICcxMDAlJ319XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX0+e3Byb3BzLmNoaWxkcmVuW2luZGV4XX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJvd0NvdW50PXtwcm9wcy5jaGlsZHJlbi5sZW5ndGh9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA6IHByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvY29tcG9uZW50cy5NZW51TGlzdD5cbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICB7c2VsZWN0ZWRPcHRpb25zICYmIHJlbmRlck9wdGlvbnNMaXN0KCl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlTZWxlY3Q7XG4iXX0=