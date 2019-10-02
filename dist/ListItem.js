"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = function ListItem(_ref) {
  var name = _ref.name,
      type = _ref.type,
      _id = _ref._id,
      code = _ref.code,
      parent_id = _ref.parent_id,
      regions = _ref.regions,
      cities = _ref.cities,
      onRemoveItem = _ref.onRemoveItem;
  return _react.default.createElement("li", {
    className: "listItem"
  }, name, _react.default.createElement("span", null, "(", type, ")"), _react.default.createElement("div", {
    onClick: function onClick() {
      onRemoveItem(_id);
    }
  }, "X"));
};

var _default = ListItem;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJMaXN0SXRlbSIsIm5hbWUiLCJ0eXBlIiwiX2lkIiwiY29kZSIsInBhcmVudF9pZCIsInJlZ2lvbnMiLCJjaXRpZXMiLCJvblJlbW92ZUl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXlFO0FBQUEsTUFBdEVDLElBQXNFLFFBQXRFQSxJQUFzRTtBQUFBLE1BQWhFQyxJQUFnRSxRQUFoRUEsSUFBZ0U7QUFBQSxNQUExREMsR0FBMEQsUUFBMURBLEdBQTBEO0FBQUEsTUFBckRDLElBQXFELFFBQXJEQSxJQUFxRDtBQUFBLE1BQS9DQyxTQUErQyxRQUEvQ0EsU0FBK0M7QUFBQSxNQUFwQ0MsT0FBb0MsUUFBcENBLE9BQW9DO0FBQUEsTUFBM0JDLE1BQTJCLFFBQTNCQSxNQUEyQjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7QUFDeEYsU0FDRTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsS0FDR1AsSUFESCxFQUVFLGdEQUFRQyxJQUFSLE1BRkYsRUFHRTtBQUNFLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2JNLE1BQUFBLFlBQVksQ0FBQ0wsR0FBRCxDQUFaO0FBQ0Q7QUFISCxTQUhGLENBREY7QUFhRCxDQWREOztlQWdCZUgsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5jb25zdCBMaXN0SXRlbSA9ICh7IG5hbWUsIHR5cGUsIF9pZCwgY29kZSwgcGFyZW50X2lkLCByZWdpb25zLCBjaXRpZXMsIG9uUmVtb3ZlSXRlbSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cImxpc3RJdGVtXCI+XG4gICAgICB7bmFtZX1cbiAgICAgIDxzcGFuPih7dHlwZX0pPC9zcGFuPlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgb25SZW1vdmVJdGVtKF9pZCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFhcbiAgICAgIDwvZGl2PlxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbTtcbiJdfQ==