"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FitText =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FitText, _React$Component);

  function FitText() {
    var _this;

    _classCallCheck(this, FitText);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FitText).apply(this, arguments));
    _this.updateQueued = false;
    _this.nodes = new Map();

    _this.updateElementStyle = function (element, options, width) {
      element.style.fontSize = "".concat(Math.min(Math.max(width / (options.compressor * 10), options.minFontSize), options.maxFontSize), "px");
    };

    _this.handleBodyResize = function () {
      _this.updateQueued = true;
      var widths = [];

      _this.nodes.forEach(function (options, element) {
        widths.push(element.offsetWidth);
      });

      var i = 0;

      _this.nodes.forEach(function (options, element) {
        _this.updateElementStyle(element, options, widths[i]);

        i += 1;
      });
    };

    _this._renderChildren = function () {
      var children = _this.props.children;
      return _react["default"].Children.map(children, function (child) {
        return _react["default"].cloneElement(child, {
          ref: function ref(c) {
            if (c) {
              _this.nodes.set(c, _this.props);
            }

            _this._childRef = c;
          }
        });
      });
    };

    return _this;
  }

  _createClass(FitText, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!this.updateQueued) {
        window.requestAnimationFrame(this.handleBodyResize);
      }

      window.addEventListener('resize', this.handleBodyResize);
      window.addEventListener('load', this.handleBodyResize);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.handleBodyResize();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleBodyResize);
      window.removeEventListener('load', this.handleBodyResize);
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderChildren()[0];
    }
  }]);

  return FitText;
}(_react["default"].Component);

FitText.defaultProps = {
  compressor: 1,
  minFontSize: Number.NEGATIVE_INFINITY,
  maxFontSize: Number.POSITIVE_INFINITY
};
var _default = FitText;
exports["default"] = _default;
//# sourceMappingURL=fit-text.js.map
