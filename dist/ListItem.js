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
  }, props.item[props.labelOption] || props.item['name'], props.item[props.typeOption] ? _react.default.createElement("span", null, "(", props.item[props.typeOption], ")") : null, _react.default.createElement("div", {
    onClick: function onClick() {
      props.onRemoveItem(props.item[props.valueOption]);
    }
  }, "X"));
};

var _default = ListItem;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJMaXN0SXRlbSIsInByb3BzIiwiaXRlbSIsImxhYmVsT3B0aW9uIiwidHlwZU9wdGlvbiIsIm9uUmVtb3ZlSXRlbSIsInZhbHVlT3B0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUIsU0FDRTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsS0FDR0EsS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQ0UsV0FBakIsS0FBaUNGLEtBQUssQ0FBQ0MsSUFBTixDQUFXLE1BQVgsQ0FEcEMsRUFFR0QsS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQ0csVUFBakIsSUFBK0IsZ0RBQVFILEtBQUssQ0FBQ0MsSUFBTixDQUFXRCxLQUFLLENBQUNHLFVBQWpCLENBQVIsTUFBL0IsR0FBK0UsSUFGbEYsRUFHRTtBQUNFLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2JILE1BQUFBLEtBQUssQ0FBQ0ksWUFBTixDQUFtQkosS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQ0ssV0FBakIsQ0FBbkI7QUFDRDtBQUhILFNBSEYsQ0FERjtBQWFELENBZEQ7O2VBZ0JlTixRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmNvbnN0IExpc3RJdGVtID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cImxpc3RJdGVtXCI+XG4gICAgICB7cHJvcHMuaXRlbVtwcm9wcy5sYWJlbE9wdGlvbl0gfHwgcHJvcHMuaXRlbVsnbmFtZSddfVxuICAgICAge3Byb3BzLml0ZW1bcHJvcHMudHlwZU9wdGlvbl0gPyA8c3Bhbj4oe3Byb3BzLml0ZW1bcHJvcHMudHlwZU9wdGlvbl19KTwvc3Bhbj4gOiBudWxsfVxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgcHJvcHMub25SZW1vdmVJdGVtKHByb3BzLml0ZW1bcHJvcHMudmFsdWVPcHRpb25dKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgWFxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtO1xuIl19