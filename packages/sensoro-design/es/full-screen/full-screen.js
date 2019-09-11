function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import useToggle from 'react-use/esm/useToggle';
import useFullScreen from 'react-use/esm/useFullscreen';

var FullScreen = function FullScreen(props) {
  var prefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      children = props.children,
      onChange = props.onChange,
      isBody = props.isBody,
      targetRef = props.targetRef;
  var rootRef = useRef(null);

  var _useToggle = useToggle(false),
      _useToggle2 = _slicedToArray(_useToggle, 2),
      status = _useToggle2[0],
      toggle = _useToggle2[1];

  var _useState = useState({
    current: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      domRef = _useState2[0],
      setDomRef = _useState2[1];

  var isFullScreen = useFullScreen(domRef, status, {
    onClose: function onClose() {
      return toggle(false);
    }
  });
  useEffect(function () {
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

  return React.createElement("div", {
    className: classNames(className, _defineProperty({}, "".concat(prefixCls), true)),
    ref: rootRef,
    style: style,
    onClick: changeFullScreen
  }, children);
};

FullScreen.defaultProps = {
  prefixCls: 'ant-plus-full-screen',
  isBody: false
};
export default FullScreen;
//# sourceMappingURL=full-screen.js.map
