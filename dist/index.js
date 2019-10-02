"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _async = _interopRequireDefault(require("react-select/async"));

var _ListItem = _interopRequireDefault(require("./ListItem"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SelectCities = function SelectCities(_ref) {
  var _onChange = _ref.onChange,
      inputValue = _ref.inputValue,
      onInputChange = _ref.onInputChange,
      loadOptions = _ref.loadOptions,
      maxCountriesNumber = _ref.maxCountriesNumber;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      currentSelectedValues = _useState2[0],
      selectValues = _useState2[1];

  var renderCountriesList = function renderCountriesList() {
    return currentSelectedValues.map(function (country) {
      return _react.default.createElement(_ListItem.default, _extends({}, country, {
        onRemoveItem: function onRemoveItem(id) {
          var newItems = currentSelectedValues.filter(function (country) {
            return country._id !== id;
          });
          selectValues(newItems);
        }
      }));
    });
  };

  return _react.default.createElement("div", {
    className: "reactSelectCities"
  }, _react.default.createElement(_async.default, {
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
    getOptionLabel: function getOptionLabel(country) {
      return country.name;
    },
    getOptionValue: function getOptionValue(country) {
      return country._id;
    },
    loadOptions: loadOptions,
    onInputChange: onInputChange,
    value: currentSelectedValues,
    onChange: function onChange(currentValues, action) {
      var numberOfCountries = currentValues.reduce(function (acc, country) {
        return acc += Number(country.type === "country");
      }, 0);

      if (numberOfCountries > maxCountriesNumber) {
        var lastElement = getLastElement(currentValues);

        if (lastElement.type !== "country") {
          _onChange(currentValues, action);

          selectValues(currentValues);
        }
      } else {
        _onChange(currentValues, action);

        selectValues(currentValues);
      }
    },
    inputValue: inputValue,
    isMulti: true
  }), _react.default.createElement("ul", {
    className: "list"
  }, currentSelectedValues && renderCountriesList()));
};

var _default = SelectCities;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJTZWxlY3RDaXRpZXMiLCJvbkNoYW5nZSIsImlucHV0VmFsdWUiLCJvbklucHV0Q2hhbmdlIiwibG9hZE9wdGlvbnMiLCJtYXhDb3VudHJpZXNOdW1iZXIiLCJjdXJyZW50U2VsZWN0ZWRWYWx1ZXMiLCJzZWxlY3RWYWx1ZXMiLCJyZW5kZXJDb3VudHJpZXNMaXN0IiwibWFwIiwiY291bnRyeSIsImlkIiwibmV3SXRlbXMiLCJmaWx0ZXIiLCJfaWQiLCJtdWx0aVZhbHVlIiwiZGlzcGxheSIsIm11bHRpVmFsdWVSZW1vdmUiLCJiYXNlIiwibmFtZSIsImN1cnJlbnRWYWx1ZXMiLCJhY3Rpb24iLCJudW1iZXJPZkNvdW50cmllcyIsInJlZHVjZSIsImFjYyIsIk51bWJlciIsInR5cGUiLCJsYXN0RWxlbWVudCIsImdldExhc3RFbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BTWY7QUFBQSxNQUxKQyxTQUtJLFFBTEpBLFFBS0k7QUFBQSxNQUpKQyxVQUlJLFFBSkpBLFVBSUk7QUFBQSxNQUhKQyxhQUdJLFFBSEpBLGFBR0k7QUFBQSxNQUZKQyxXQUVJLFFBRkpBLFdBRUk7QUFBQSxNQURKQyxrQkFDSSxRQURKQSxrQkFDSTs7QUFBQSxrQkFDMEMscUJBQVMsRUFBVCxDQUQxQztBQUFBO0FBQUEsTUFDR0MscUJBREg7QUFBQSxNQUMwQkMsWUFEMUI7O0FBR0osTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQjtBQUFBLFdBQzFCRixxQkFBcUIsQ0FBQ0csR0FBdEIsQ0FBMEIsVUFBQUMsT0FBTztBQUFBLGFBQy9CLDZCQUFDLGlCQUFELGVBQ01BLE9BRE47QUFFRSxRQUFBLFlBQVksRUFBRSxzQkFBQUMsRUFBRSxFQUFJO0FBQ2xCLGNBQU1DLFFBQVEsR0FBR04scUJBQXFCLENBQUNPLE1BQXRCLENBQ2YsVUFBQUgsT0FBTztBQUFBLG1CQUFJQSxPQUFPLENBQUNJLEdBQVIsS0FBZ0JILEVBQXBCO0FBQUEsV0FEUSxDQUFqQjtBQUdBSixVQUFBQSxZQUFZLENBQUNLLFFBQUQsQ0FBWjtBQUNEO0FBUEgsU0FEK0I7QUFBQSxLQUFqQyxDQUQwQjtBQUFBLEdBQTVCOztBQWFBLFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0UsNkJBQUMsY0FBRDtBQUNFLElBQUEscUJBQXFCLEVBQUUsS0FEekI7QUFFRSxJQUFBLFdBQVcsRUFBRSxLQUZmO0FBR0UsSUFBQSxNQUFNLEVBQUU7QUFDTkcsTUFBQUEsVUFBVSxFQUFFO0FBQUEsZUFBTztBQUFFQyxVQUFBQSxPQUFPLEVBQUU7QUFBWCxTQUFQO0FBQUEsT0FETjtBQUVOQyxNQUFBQSxnQkFBZ0IsRUFBRSwwQkFBQUMsSUFBSTtBQUFBLGlDQUFVQSxJQUFWO0FBQWdCRixVQUFBQSxPQUFPLEVBQUU7QUFBekI7QUFBQTtBQUZoQixLQUhWO0FBT0UsSUFBQSxjQUFjLEVBQUUsd0JBQUFOLE9BQU87QUFBQSxhQUFJQSxPQUFPLENBQUNTLElBQVo7QUFBQSxLQVB6QjtBQVFFLElBQUEsY0FBYyxFQUFFLHdCQUFBVCxPQUFPO0FBQUEsYUFBSUEsT0FBTyxDQUFDSSxHQUFaO0FBQUEsS0FSekI7QUFTRSxJQUFBLFdBQVcsRUFBRVYsV0FUZjtBQVVFLElBQUEsYUFBYSxFQUFFRCxhQVZqQjtBQVdFLElBQUEsS0FBSyxFQUFFRyxxQkFYVDtBQVlFLElBQUEsUUFBUSxFQUFFLGtCQUFDYyxhQUFELEVBQWdCQyxNQUFoQixFQUEyQjtBQUNuQyxVQUFNQyxpQkFBaUIsR0FBR0YsYUFBYSxDQUFDRyxNQUFkLENBQ3hCLFVBQUNDLEdBQUQsRUFBTWQsT0FBTjtBQUFBLGVBQW1CYyxHQUFHLElBQUlDLE1BQU0sQ0FBQ2YsT0FBTyxDQUFDZ0IsSUFBUixLQUFpQixTQUFsQixDQUFoQztBQUFBLE9BRHdCLEVBRXhCLENBRndCLENBQTFCOztBQUlBLFVBQUlKLGlCQUFpQixHQUFHakIsa0JBQXhCLEVBQTRDO0FBQzFDLFlBQU1zQixXQUFXLEdBQUdDLGNBQWMsQ0FBQ1IsYUFBRCxDQUFsQzs7QUFDQSxZQUFJTyxXQUFXLENBQUNELElBQVosS0FBcUIsU0FBekIsRUFBb0M7QUFDbEN6QixVQUFBQSxTQUFRLENBQUNtQixhQUFELEVBQWdCQyxNQUFoQixDQUFSOztBQUNBZCxVQUFBQSxZQUFZLENBQUNhLGFBQUQsQ0FBWjtBQUNEO0FBQ0YsT0FORCxNQU1PO0FBQ0xuQixRQUFBQSxTQUFRLENBQUNtQixhQUFELEVBQWdCQyxNQUFoQixDQUFSOztBQUNBZCxRQUFBQSxZQUFZLENBQUNhLGFBQUQsQ0FBWjtBQUNEO0FBQ0YsS0EzQkg7QUE0QkUsSUFBQSxVQUFVLEVBQUVsQixVQTVCZDtBQTZCRSxJQUFBLE9BQU87QUE3QlQsSUFERixFQWdDRTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsS0FDR0kscUJBQXFCLElBQUlFLG1CQUFtQixFQUQvQyxDQWhDRixDQURGO0FBc0NELENBNUREOztlQThEZVIsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXN5bmNTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdC9hc3luY1wiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuL0xpc3RJdGVtXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuY29uc3QgU2VsZWN0Q2l0aWVzID0gKHtcbiAgb25DaGFuZ2UsXG4gIGlucHV0VmFsdWUsXG4gIG9uSW5wdXRDaGFuZ2UsXG4gIGxvYWRPcHRpb25zLFxuICBtYXhDb3VudHJpZXNOdW1iZXJcbn0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRTZWxlY3RlZFZhbHVlcywgc2VsZWN0VmFsdWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCByZW5kZXJDb3VudHJpZXNMaXN0ID0gKCkgPT5cbiAgICBjdXJyZW50U2VsZWN0ZWRWYWx1ZXMubWFwKGNvdW50cnkgPT4gKFxuICAgICAgPExpc3RJdGVtXG4gICAgICAgIHsuLi5jb3VudHJ5fVxuICAgICAgICBvblJlbW92ZUl0ZW09e2lkID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdJdGVtcyA9IGN1cnJlbnRTZWxlY3RlZFZhbHVlcy5maWx0ZXIoXG4gICAgICAgICAgICBjb3VudHJ5ID0+IGNvdW50cnkuX2lkICE9PSBpZFxuICAgICAgICAgICk7XG4gICAgICAgICAgc2VsZWN0VmFsdWVzKG5ld0l0ZW1zKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0U2VsZWN0Q2l0aWVzXCI+XG4gICAgICA8QXN5bmNTZWxlY3RcbiAgICAgICAgYmFja3NwYWNlUmVtb3Zlc1ZhbHVlPXtmYWxzZX1cbiAgICAgICAgaXNDbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICBzdHlsZXM9e3tcbiAgICAgICAgICBtdWx0aVZhbHVlOiAoKSA9PiAoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KSxcbiAgICAgICAgICBtdWx0aVZhbHVlUmVtb3ZlOiBiYXNlID0+ICh7IC4uLmJhc2UsIGRpc3BsYXk6IFwibm9uZVwiIH0pXG4gICAgICAgIH19XG4gICAgICAgIGdldE9wdGlvbkxhYmVsPXtjb3VudHJ5ID0+IGNvdW50cnkubmFtZX1cbiAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e2NvdW50cnkgPT4gY291bnRyeS5faWR9XG4gICAgICAgIGxvYWRPcHRpb25zPXtsb2FkT3B0aW9uc31cbiAgICAgICAgb25JbnB1dENoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgdmFsdWU9e2N1cnJlbnRTZWxlY3RlZFZhbHVlc31cbiAgICAgICAgb25DaGFuZ2U9eyhjdXJyZW50VmFsdWVzLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBudW1iZXJPZkNvdW50cmllcyA9IGN1cnJlbnRWYWx1ZXMucmVkdWNlKFxuICAgICAgICAgICAgKGFjYywgY291bnRyeSkgPT4gKGFjYyArPSBOdW1iZXIoY291bnRyeS50eXBlID09PSBcImNvdW50cnlcIikpLFxuICAgICAgICAgICAgMFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKG51bWJlck9mQ291bnRyaWVzID4gbWF4Q291bnRyaWVzTnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0RWxlbWVudCA9IGdldExhc3RFbGVtZW50KGN1cnJlbnRWYWx1ZXMpO1xuICAgICAgICAgICAgaWYgKGxhc3RFbGVtZW50LnR5cGUgIT09IFwiY291bnRyeVwiKSB7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKGN1cnJlbnRWYWx1ZXMsIGFjdGlvbik7XG4gICAgICAgICAgICAgIHNlbGVjdFZhbHVlcyhjdXJyZW50VmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb25DaGFuZ2UoY3VycmVudFZhbHVlcywgYWN0aW9uKTtcbiAgICAgICAgICAgIHNlbGVjdFZhbHVlcyhjdXJyZW50VmFsdWVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgIGlzTXVsdGlcbiAgICAgIC8+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICB7Y3VycmVudFNlbGVjdGVkVmFsdWVzICYmIHJlbmRlckNvdW50cmllc0xpc3QoKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RDaXRpZXM7XG4iXX0=