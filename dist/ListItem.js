"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = function ListItem(_ref) {
  var name = _ref.name,
      type = _ref.type,
      _id = _ref._id,
      onRemoveItem = _ref.onRemoveItem;

  return _react2.default.createElement(
    "li",
    { className: "listItem" },
    name,
    _react2.default.createElement(
      "span",
      null,
      "(",
      type,
      ")"
    ),
    _react2.default.createElement(
      "div",
      {
        onClick: function onClick() {
          onRemoveItem(_id);
        }
      },
      "X"
    )
  );
};

exports.default = ListItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJMaXN0SXRlbSIsIm5hbWUiLCJ0eXBlIiwiX2lkIiwib25SZW1vdmVJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsV0FBVyxTQUFYQSxRQUFXLE9BQXVDO0FBQUEsTUFBcENDLElBQW9DLFFBQXBDQSxJQUFvQztBQUFBLE1BQTlCQyxJQUE4QixRQUE5QkEsSUFBOEI7QUFBQSxNQUF4QkMsR0FBd0IsUUFBeEJBLEdBQXdCO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjs7QUFDdEQsU0FDRTtBQUFBO0FBQUEsTUFBSSxXQUFVLFVBQWQ7QUFDR0gsUUFESDtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQVFDLFVBQVI7QUFBQTtBQUFBLEtBRkY7QUFHRTtBQUFBO0FBQUE7QUFDRSxpQkFBUyxtQkFBTTtBQUNiRSx1QkFBYUQsR0FBYjtBQUNEO0FBSEg7QUFBQTtBQUFBO0FBSEYsR0FERjtBQWFELENBZEQ7O2tCQWdCZUgsUSIsImZpbGUiOiJMaXN0SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5jb25zdCBMaXN0SXRlbSA9ICh7IG5hbWUsIHR5cGUsIF9pZCwgb25SZW1vdmVJdGVtIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPVwibGlzdEl0ZW1cIj5cbiAgICAgIHtuYW1lfVxuICAgICAgPHNwYW4+KHt0eXBlfSk8L3NwYW4+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBvblJlbW92ZUl0ZW0oX2lkKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgWFxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtO1xuIl19