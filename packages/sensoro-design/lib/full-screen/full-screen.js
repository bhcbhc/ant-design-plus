"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useToggle3 = _interopRequireDefault(require("react-use/esm/useToggle"));

var _useFullscreen = _interopRequireDefault(require("react-use/esm/useFullscreen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FullScreen = function FullScreen(props) {
  var prefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      children = props.children,
      onChange = props.onChange,
      isBody = props.isBody,
      targetRef = props.targetRef;
  var rootRef = (0, _react.useRef)(null);

  var _useToggle = (0, _useToggle3["default"])(false),
      _useToggle2 = _slicedToArray(_useToggle, 2),
      status = _useToggle2[0],
      toggle = _useToggle2[1];

  var _useState = (0, _react.useState)({
    current: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      domRef = _useState2[0],
      setDomRef = _useState2[1];

  var isFullScreen = (0, _useFullscreen["default"])(domRef, status, {
    onClose: function onClose() {
      return toggle(false);
    }
  });
  (0, _react.useEffect)(function () {
    if (isBody) {
      setDomRef({
        current: document.documentElement
      });
    } else if (targetRef) {
      setDomRef(targetRef);
    } else {
      setDomRef(rootRef);
    }
  }, [props.isBody, props.targetRef]);

  var changeFullScreen = function changeFullScreen() {
    toggle();
    onChange && onChange(isFullScreen);
  };

  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])(className, _defineProperty({}, "".concat(prefixCls), true)),
    ref: rootRef,
    style: style,
    onClick: changeFullScreen
  }, children);
};

FullScreen.defaultProps = {
  prefixCls: 'ant-plus-full-screen',
  isBody: false
};
var _default = FullScreen;
exports["default"] = _default;
//# sourceMappingURL=full-screen.js.map
