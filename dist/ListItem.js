"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

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