"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _async = require("react-select/async");

var _async2 = _interopRequireDefault(_async);

var _data = require("./data");

var _ListItem = require("./ListItem");

var _ListItem2 = _interopRequireDefault(_ListItem);

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getLastElement = function getLastElement(a) {
  return a[a.length - 1];
};
var filterColors = function filterColors(inputValue) {
  return _data.countries.filter(function (i) {
    return i.name.toLowerCase().includes(inputValue.toLowerCase());
  });
};

var promiseOptions = function promiseOptions(inputValue) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(filterColors(inputValue));
    }, 1000);
  });
};

var SelectCities = function SelectCities(_ref) {
  var _onChange = _ref.onChange,
      inputValue = _ref.inputValue,
      onInputChange = _ref.onInputChange,
      maxCountriesNumber = _ref.maxCountriesNumber;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      currentSelectedValues = _useState2[0],
      selectValues = _useState2[1];

  var renderCountriesList = function renderCountriesList() {
    return currentSelectedValues.map(function (country) {
      return _react2.default.createElement(_ListItem2.default, _extends({}, country, {
        onRemoveItem: function onRemoveItem(id) {
          var newItems = currentSelectedValues.filter(function (country) {
            return country._id !== id;
          });
          selectValues(newItems);
        }
      }));
    });
  };

  return _react2.default.createElement(
    "div",
    { className: "reactSelectCities" },
    _react2.default.createElement(_async2.default, {
      backspaceRemovesValue: false,
      isClearable: false,
      styles: {
        multiValue: function multiValue() {
          return { display: "none" };
        },
        multiValueRemove: function multiValueRemove(base) {
          return _extends({}, base, { display: "none" });
        }
      },
      getOptionLabel: function getOptionLabel(country) {
        return country.name;
      },
      getOptionValue: function getOptionValue(country) {
        return country._id;
      },
      loadOptions: promiseOptions,
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
    }),
    _react2.default.createElement(
      "ul",
      { className: "list" },
      currentSelectedValues && renderCountriesList()
    )
  );
};

exports.default = SelectCities;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRMYXN0RWxlbWVudCIsImEiLCJsZW5ndGgiLCJmaWx0ZXJDb2xvcnMiLCJjb3VudHJpZXMiLCJmaWx0ZXIiLCJpIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJpbnB1dFZhbHVlIiwicHJvbWlzZU9wdGlvbnMiLCJQcm9taXNlIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJTZWxlY3RDaXRpZXMiLCJvbkNoYW5nZSIsIm9uSW5wdXRDaGFuZ2UiLCJtYXhDb3VudHJpZXNOdW1iZXIiLCJjdXJyZW50U2VsZWN0ZWRWYWx1ZXMiLCJzZWxlY3RWYWx1ZXMiLCJyZW5kZXJDb3VudHJpZXNMaXN0IiwibWFwIiwiY291bnRyeSIsIm5ld0l0ZW1zIiwiX2lkIiwiaWQiLCJtdWx0aVZhbHVlIiwiZGlzcGxheSIsIm11bHRpVmFsdWVSZW1vdmUiLCJiYXNlIiwiY3VycmVudFZhbHVlcyIsImFjdGlvbiIsIm51bWJlck9mQ291bnRyaWVzIiwicmVkdWNlIiwiYWNjIiwiTnVtYmVyIiwidHlwZSIsImxhc3RFbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCO0FBQUEsU0FBS0MsRUFBRUEsRUFBRUMsTUFBRixHQUFXLENBQWIsQ0FBTDtBQUFBLENBQXZCO0FBQ0EsSUFBTUMsZUFBZSxTQUFmQSxZQUFlO0FBQUEsU0FDbkJDLGdCQUFVQyxNQUFWLENBQWlCO0FBQUEsV0FDZkMsRUFBRUMsSUFBRixDQUFPQyxXQUFQLEdBQXFCQyxRQUFyQixDQUE4QkMsV0FBV0YsV0FBWCxFQUE5QixDQURlO0FBQUEsR0FBakIsQ0FEbUI7QUFBQSxDQUFyQjs7QUFLQSxJQUFNRyxpQkFBaUIsU0FBakJBLGNBQWlCO0FBQUEsU0FDckIsSUFBSUMsT0FBSixDQUFZLG1CQUFXO0FBQ3JCQyxlQUFXLFlBQU07QUFDZkMsY0FBUVgsYUFBYU8sVUFBYixDQUFSO0FBQ0QsS0FGRCxFQUVHLElBRkg7QUFHRCxHQUpELENBRHFCO0FBQUEsQ0FBdkI7O0FBT0EsSUFBTUssZUFBZSxTQUFmQSxZQUFlLE9BS2Y7QUFBQSxNQUpKQyxTQUlJLFFBSkpBLFFBSUk7QUFBQSxNQUhKTixVQUdJLFFBSEpBLFVBR0k7QUFBQSxNQUZKTyxhQUVJLFFBRkpBLGFBRUk7QUFBQSxNQURKQyxrQkFDSSxRQURKQSxrQkFDSTs7QUFBQSxrQkFDMEMscUJBQVMsRUFBVCxDQUQxQztBQUFBO0FBQUEsTUFDR0MscUJBREg7QUFBQSxNQUMwQkMsWUFEMUI7O0FBR0osTUFBTUMsc0JBQXNCLFNBQXRCQSxtQkFBc0I7QUFBQSxXQUMxQkYsc0JBQXNCRyxHQUF0QixDQUEwQjtBQUFBLGFBQ3hCLDhCQUFDLGtCQUFELGVBQ01DLE9BRE47QUFFRSxzQkFBYywwQkFBTTtBQUNsQixjQUFNQyxXQUFXTCxzQkFBc0JkLE1BQXRCLENBQ2Y7QUFBQSxtQkFBV2tCLFFBQVFFLEdBQVIsS0FBZ0JDLEVBQTNCO0FBQUEsV0FEZSxDQUFqQjtBQUdBTix1QkFBYUksUUFBYjtBQUNEO0FBUEgsU0FEd0I7QUFBQSxLQUExQixDQUQwQjtBQUFBLEdBQTVCOztBQWFBLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxtQkFBZjtBQUNFLGtDQUFDLGVBQUQ7QUFDRSw2QkFBdUIsS0FEekI7QUFFRSxtQkFBYSxLQUZmO0FBR0UsY0FBUTtBQUNORyxvQkFBWTtBQUFBLGlCQUFPLEVBQUVDLFNBQVMsTUFBWCxFQUFQO0FBQUEsU0FETjtBQUVOQywwQkFBa0I7QUFBQSw4QkFBY0MsSUFBZCxJQUFvQkYsU0FBUyxNQUE3QjtBQUFBO0FBRlosT0FIVjtBQU9FLHNCQUFnQjtBQUFBLGVBQVdMLFFBQVFoQixJQUFuQjtBQUFBLE9BUGxCO0FBUUUsc0JBQWdCO0FBQUEsZUFBV2dCLFFBQVFFLEdBQW5CO0FBQUEsT0FSbEI7QUFTRSxtQkFBYWQsY0FUZjtBQVVFLHFCQUFlTSxhQVZqQjtBQVdFLGFBQU9FLHFCQVhUO0FBWUUsZ0JBQVUsa0JBQUNZLGFBQUQsRUFBZ0JDLE1BQWhCLEVBQTJCO0FBQ25DLFlBQU1DLG9CQUFvQkYsY0FBY0csTUFBZCxDQUN4QixVQUFDQyxHQUFELEVBQU1aLE9BQU47QUFBQSxpQkFBbUJZLE9BQU9DLE9BQU9iLFFBQVFjLElBQVIsS0FBaUIsU0FBeEIsQ0FBMUI7QUFBQSxTQUR3QixFQUV4QixDQUZ3QixDQUExQjtBQUlBLFlBQUlKLG9CQUFvQmYsa0JBQXhCLEVBQTRDO0FBQzFDLGNBQU1vQixjQUFjdEMsZUFBZStCLGFBQWYsQ0FBcEI7QUFDQSxjQUFJTyxZQUFZRCxJQUFaLEtBQXFCLFNBQXpCLEVBQW9DO0FBQ2xDckIsc0JBQVNlLGFBQVQsRUFBd0JDLE1BQXhCO0FBQ0FaLHlCQUFhVyxhQUFiO0FBQ0Q7QUFDRixTQU5ELE1BTU87QUFDTGYsb0JBQVNlLGFBQVQsRUFBd0JDLE1BQXhCO0FBQ0FaLHVCQUFhVyxhQUFiO0FBQ0Q7QUFDRixPQTNCSDtBQTRCRSxrQkFBWXJCLFVBNUJkO0FBNkJFO0FBN0JGLE1BREY7QUFnQ0U7QUFBQTtBQUFBLFFBQUksV0FBVSxNQUFkO0FBQ0dTLCtCQUF5QkU7QUFENUI7QUFoQ0YsR0FERjtBQXNDRCxDQTNERDs7a0JBNkRlTixZIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBc3luY1NlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0L2FzeW5jXCI7XG5pbXBvcnQgeyBjb3VudHJpZXMgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4vTGlzdEl0ZW1cIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5jb25zdCBnZXRMYXN0RWxlbWVudCA9IGEgPT4gYVthLmxlbmd0aCAtIDFdO1xuY29uc3QgZmlsdGVyQ29sb3JzID0gaW5wdXRWYWx1ZSA9PlxuICBjb3VudHJpZXMuZmlsdGVyKGkgPT5cbiAgICBpLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpXG4gICk7XG5cbmNvbnN0IHByb21pc2VPcHRpb25zID0gaW5wdXRWYWx1ZSA9PlxuICBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc29sdmUoZmlsdGVyQ29sb3JzKGlucHV0VmFsdWUpKTtcbiAgICB9LCAxMDAwKTtcbiAgfSk7XG5cbmNvbnN0IFNlbGVjdENpdGllcyA9ICh7XG4gIG9uQ2hhbmdlLFxuICBpbnB1dFZhbHVlLFxuICBvbklucHV0Q2hhbmdlLFxuICBtYXhDb3VudHJpZXNOdW1iZXJcbn0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRTZWxlY3RlZFZhbHVlcywgc2VsZWN0VmFsdWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCByZW5kZXJDb3VudHJpZXNMaXN0ID0gKCkgPT5cbiAgICBjdXJyZW50U2VsZWN0ZWRWYWx1ZXMubWFwKGNvdW50cnkgPT4gKFxuICAgICAgPExpc3RJdGVtXG4gICAgICAgIHsuLi5jb3VudHJ5fVxuICAgICAgICBvblJlbW92ZUl0ZW09e2lkID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdJdGVtcyA9IGN1cnJlbnRTZWxlY3RlZFZhbHVlcy5maWx0ZXIoXG4gICAgICAgICAgICBjb3VudHJ5ID0+IGNvdW50cnkuX2lkICE9PSBpZFxuICAgICAgICAgICk7XG4gICAgICAgICAgc2VsZWN0VmFsdWVzKG5ld0l0ZW1zKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0U2VsZWN0Q2l0aWVzXCI+XG4gICAgICA8QXN5bmNTZWxlY3RcbiAgICAgICAgYmFja3NwYWNlUmVtb3Zlc1ZhbHVlPXtmYWxzZX1cbiAgICAgICAgaXNDbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICBzdHlsZXM9e3tcbiAgICAgICAgICBtdWx0aVZhbHVlOiAoKSA9PiAoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KSxcbiAgICAgICAgICBtdWx0aVZhbHVlUmVtb3ZlOiBiYXNlID0+ICh7IC4uLmJhc2UsIGRpc3BsYXk6IFwibm9uZVwiIH0pXG4gICAgICAgIH19XG4gICAgICAgIGdldE9wdGlvbkxhYmVsPXtjb3VudHJ5ID0+IGNvdW50cnkubmFtZX1cbiAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e2NvdW50cnkgPT4gY291bnRyeS5faWR9XG4gICAgICAgIGxvYWRPcHRpb25zPXtwcm9taXNlT3B0aW9uc31cbiAgICAgICAgb25JbnB1dENoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgdmFsdWU9e2N1cnJlbnRTZWxlY3RlZFZhbHVlc31cbiAgICAgICAgb25DaGFuZ2U9eyhjdXJyZW50VmFsdWVzLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBudW1iZXJPZkNvdW50cmllcyA9IGN1cnJlbnRWYWx1ZXMucmVkdWNlKFxuICAgICAgICAgICAgKGFjYywgY291bnRyeSkgPT4gKGFjYyArPSBOdW1iZXIoY291bnRyeS50eXBlID09PSBcImNvdW50cnlcIikpLFxuICAgICAgICAgICAgMFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKG51bWJlck9mQ291bnRyaWVzID4gbWF4Q291bnRyaWVzTnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0RWxlbWVudCA9IGdldExhc3RFbGVtZW50KGN1cnJlbnRWYWx1ZXMpO1xuICAgICAgICAgICAgaWYgKGxhc3RFbGVtZW50LnR5cGUgIT09IFwiY291bnRyeVwiKSB7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKGN1cnJlbnRWYWx1ZXMsIGFjdGlvbik7XG4gICAgICAgICAgICAgIHNlbGVjdFZhbHVlcyhjdXJyZW50VmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb25DaGFuZ2UoY3VycmVudFZhbHVlcywgYWN0aW9uKTtcbiAgICAgICAgICAgIHNlbGVjdFZhbHVlcyhjdXJyZW50VmFsdWVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgIGlzTXVsdGlcbiAgICAgIC8+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICB7Y3VycmVudFNlbGVjdGVkVmFsdWVzICYmIHJlbmRlckNvdW50cmllc0xpc3QoKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RDaXRpZXM7XG4iXX0=