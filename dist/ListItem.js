"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = function ListItem(props) {
  return _react.default.createElement("li", {
    className: "listItem"
  }, props.item[props.labelOption], props.item[props.typeOption] ? _react.default.createElement("span", null, "(", props.item[props.typeOption], ")") : null, _react.default.createElement("div", {
    onClick: function onClick() {
      props.onRemoveItem(props.item[props.valueOption]);
    }
  }, "X"));
};

var _default = ListItem;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJMaXN0SXRlbSIsInByb3BzIiwiaXRlbSIsImxhYmVsT3B0aW9uIiwidHlwZU9wdGlvbiIsIm9uUmVtb3ZlSXRlbSIsInZhbHVlT3B0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUIsU0FDRTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsS0FDR0EsS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQ0UsV0FBakIsQ0FESCxFQUVHRixLQUFLLENBQUNDLElBQU4sQ0FBV0QsS0FBSyxDQUFDRyxVQUFqQixJQUErQixnREFBUUgsS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQ0csVUFBakIsQ0FBUixNQUEvQixHQUErRSxJQUZsRixFQUdFO0FBQ0UsSUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYkgsTUFBQUEsS0FBSyxDQUFDSSxZQUFOLENBQW1CSixLQUFLLENBQUNDLElBQU4sQ0FBV0QsS0FBSyxDQUFDSyxXQUFqQixDQUFuQjtBQUNEO0FBSEgsU0FIRixDQURGO0FBYUQsQ0FkRDs7ZUFnQmVOLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuY29uc3QgTGlzdEl0ZW0gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPVwibGlzdEl0ZW1cIj5cbiAgICAgIHtwcm9wcy5pdGVtW3Byb3BzLmxhYmVsT3B0aW9uXX1cbiAgICAgIHtwcm9wcy5pdGVtW3Byb3BzLnR5cGVPcHRpb25dID8gPHNwYW4+KHtwcm9wcy5pdGVtW3Byb3BzLnR5cGVPcHRpb25dfSk8L3NwYW4+IDogbnVsbH1cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHByb3BzLm9uUmVtb3ZlSXRlbShwcm9wcy5pdGVtW3Byb3BzLnZhbHVlT3B0aW9uXSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFhcbiAgICAgIDwvZGl2PlxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbTtcbiJdfQ==