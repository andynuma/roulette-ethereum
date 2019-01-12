webpackHotUpdate("static/development/pages/index.js",{

/***/ "./web3/List.js":
/*!**********************!*\
  !*** ./web3/List.js ***!
  \**********************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider */ "./web3/provider.js");
/* harmony import */ var _web3_artifacts_Roulette_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web3/artifacts/Roulette.json */ "./web3/artifacts/Roulette.json");
var _web3_artifacts_Roulette_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../web3/artifacts/Roulette.json */ "./web3/artifacts/Roulette.json", 1);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "../node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/andy/roulette-ethereum/client/web3/List.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var List =
/*#__PURE__*/
function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props) {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, _getPrototypeOf(List).call(this, props));
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var list = this.props.members.map(function (user) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: user.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, "#", user.id, " ", user.name);
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2077261517",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Member List is here", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-2077261517",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, list), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2077261517",
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5L3JvdWxldHRlLWV0aGVyZXVtL2NsaWVudC93ZWIzL0xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUI0QiIsImZpbGUiOiIvVXNlcnMvYW5keS9yb3VsZXR0ZS1ldGhlcmV1bS9jbGllbnQvd2ViMy9MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoLCBnZXRJbnN0YW5jZSB9IGZyb20gJy4vcHJvdmlkZXInXG5pbXBvcnQgUm91bGV0dGUgZnJvbSBcIi4uL3dlYjMvYXJ0aWZhY3RzL1JvdWxldHRlLmpzb25cIlxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIlxuXG5leHBvcnQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMucHJvcHMubWVtYmVycy5tYXAodXNlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e3VzZXIuaWR9PlxuICAgICAgICAgICAgICAgICAgICAje3VzZXIuaWR9IHt1c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBNZW1iZXIgTGlzdCBpcyBoZXJlXG4gICAgICAgICAgICAgICAgPHVsPntsaXN0fTwvdWw+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59Il19 */\n/*@ sourceURL=/Users/andy/roulette-ethereum/client/web3/List.js */",
        __self: this
      }));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/***/ })

})
//# sourceMappingURL=index.js.213d4902b4d39aa9bc8e.hot-update.js.map