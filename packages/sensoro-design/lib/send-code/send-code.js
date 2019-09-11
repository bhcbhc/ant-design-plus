"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _button = _interopRequireDefault(require("antd/es/button"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var SendCode =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SendCode, _React$Component);

  function SendCode(props) {
    var _this;

    _classCallCheck(this, SendCode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SendCode).call(this, props));
    _this.timer = null;
    _this.lastSecond = 0;
    _this.state = {
      buttonText: _this.props.initText,
      start: false,
      loading: false
    };

    _this.startCountdown = function () {
      var runText = _this.props.runText;
      var second = _this.lastSecond ? _this.lastSecond : _this.props.second;

      _this.setState({
        start: true
      });

      if (!_this.lastSecond) {
        _this.setState({
          buttonText: (0, _utils.getTemplateText)(runText, second)
        });
      }

      _this.timer = setInterval(function () {
        second -= 1;

        _this.setState({
          buttonText: (0, _utils.getTemplateText)(runText, second)
        });

        if (second <= 0) {
          _this.timeout();
        }
      }, 1000);
    };

    _this.timeout = function () {
      var _this$props = _this.props,
          resetText = _this$props.resetText,
          onEnd = _this$props.onEnd; // 设置为运行结束后文本

      _this.setState({
        buttonText: resetText,
        start: false
      });

      if (_this.timer) {
        clearInterval(_this.timer);
      } // 发出倒计时结束事件


      onEnd && onEnd();
    };

    return _this;
  }

  _createClass(SendCode, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.start) {
        this.startCountdown();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          start = _a.start,
          second = _a.second,
          initText = _a.initText,
          resetText = _a.resetText,
          runText = _a.runText,
          onEnd = _a.onEnd,
          rest = __rest(_a, ["start", "second", "initText", "resetText", "runText", "onEnd"]);

      var _this$state = this.state,
          loading = _this$state.loading,
          buttonText = _this$state.buttonText;
      return _react["default"].createElement(_button["default"], _extends({
        loading: loading,
        disabled: this.state.start
      }, rest), buttonText);
    }
  }]);

  return SendCode;
}(_react["default"].Component);

SendCode.defaultProps = {
  start: false,
  second: 60,
  initText: '获取验证码',
  runText: '{%s}秒后重新获取',
  resetText: '重新获取验证码'
};
var _default = SendCode;
exports["default"] = _default;
//# sourceMappingURL=send-code.js.map
