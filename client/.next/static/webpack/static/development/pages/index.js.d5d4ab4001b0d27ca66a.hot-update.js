webpackHotUpdate("static/development/pages/index.js",{

/***/ "./web3/roulette.js":
/*!**************************!*\
  !*** ./web3/roulette.js ***!
  \**************************/
/*! exports provided: GetOwnerInfo, GetDeployrInfo, setName, SetUserInfo, generateRandom, GenerateRandomNumber, viewResult, viewUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOwnerInfo", function() { return GetOwnerInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDeployrInfo", function() { return GetDeployrInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setName", function() { return setName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserInfo", function() { return SetUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandom", function() { return generateRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateRandomNumber", function() { return GenerateRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewResult", function() { return viewResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewUsers", function() { return viewUsers; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./provider */ "./web3/provider.js");
/* harmony import */ var _web3_artifacts_Roulette_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../web3/artifacts/Roulette.json */ "./web3/artifacts/Roulette.json");
var _web3_artifacts_Roulette_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../web3/artifacts/Roulette.json */ "./web3/artifacts/Roulette.json", 1);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ "../node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/andy/roulette-ethereum/client/web3/roulette.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var hexToString = web3__WEBPACK_IMPORTED_MODULE_5___default.a.utils.hexToString; // export const getOwnerInfo = async()  => {
//   const storage = await getInstance(Roulette)
//   const ownerProfile = await storage.ownerAddr.call()
//   return ownerProfile
// }

var GetOwnerInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GetOwnerInfo, _React$Component);

  function GetOwnerInfo(props) {
    var _this;

    _classCallCheck(this, GetOwnerInfo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GetOwnerInfo).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnClick",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var storage, ownerProfile;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_provider__WEBPACK_IMPORTED_MODULE_3__["getInstance"])(_web3_artifacts_Roulette_json__WEBPACK_IMPORTED_MODULE_4__);

            case 2:
              storage = _context.sent;
              _context.next = 5;
              return storage.ownerAddr.call();

            case 5:
              ownerProfile = _context.sent;
              // console.log(ownerProfile)
              console.log(_this.state.address);

              _this.setState({
                address: ownerProfile
              });

              console.log(_this.state.address);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _this.state = {
      address: ""
    };
    _this.handleOnClick = _this.handleOnClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(GetOwnerInfo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2233314958",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        onClick: this.handleOnClick,
        className: "jsx-2233314958",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Get Owner Address"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
        className: "jsx-2233314958",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Owner Address is : ", this.state.address), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2233314958",
        css: "h5.jsx-2233314958{font-size:15px;}button.jsx-2233314958{font-size:100%;}button.jsx-2233314958:hover,button.jsx-2233314958:focus{background:#0053ba;}button.jsx-2233314958:focus{outline:1px solid #fff;outline-offset:-4px;}button.jsx-2233314958:active{-webkit-transform:scale(0.99);-ms-transform:scale(0.99);transform:scale(0.99);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5L3JvdWxldHRlLWV0aGVyZXVtL2NsaWVudC93ZWIzL3JvdWxldHRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCNEIsQUFHdUMsQUFLbkIsQUFJdUIsQUFJSyxBQUtELGVBakIxQixBQUlBLElBS0EsSUFJd0Isb0JBQ3hCLG1DQUlBIiwiZmlsZSI6Ii9Vc2Vycy9hbmR5L3JvdWxldHRlLWV0aGVyZXVtL2NsaWVudC93ZWIzL3JvdWxldHRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoLCBnZXRJbnN0YW5jZSB9IGZyb20gJy4vcHJvdmlkZXInXG5pbXBvcnQgUm91bGV0dGUgZnJvbSBcIi4uL3dlYjMvYXJ0aWZhY3RzL1JvdWxldHRlLmpzb25cIlxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIlxuXG5jb25zdCB7XG4gIHV0aWxzOiB7XG4gICAgaGV4VG9TdHJpbmcsXG4gIH0sXG59ID0gV2ViM1xuXG4vLyBleHBvcnQgY29uc3QgZ2V0T3duZXJJbmZvID0gYXN5bmMoKSAgPT4ge1xuLy8gICBjb25zdCBzdG9yYWdlID0gYXdhaXQgZ2V0SW5zdGFuY2UoUm91bGV0dGUpXG4vLyAgIGNvbnN0IG93bmVyUHJvZmlsZSA9IGF3YWl0IHN0b3JhZ2Uub3duZXJBZGRyLmNhbGwoKVxuLy8gICByZXR1cm4gb3duZXJQcm9maWxlXG4vLyB9XG5cbmV4cG9ydCBjbGFzcyBHZXRPd25lckluZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICB7YWRkcmVzcyA6IFwiXCJ9XG4gICAgICAgIHRoaXMuaGFuZGxlT25DbGljayA9IHRoaXMuaGFuZGxlT25DbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlT25DbGlja30+R2V0IE93bmVyIEFkZHJlc3M8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8aDU+T3duZXIgQWRkcmVzcyBpcyA6IHt0aGlzLnN0YXRlLmFkZHJlc3N9PC9oNT5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEwMCVcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpob3ZlcixcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojMDA1M2JhO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC00cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBidXR0b246YWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGhhbmRsZU9uQ2xpY2sgPSBhc3luYygpID0+IHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IGdldEluc3RhbmNlKFJvdWxldHRlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdG9yYWdlKVxuICAgICAgICBjb25zdCBvd25lclByb2ZpbGUgPSBhd2FpdCBzdG9yYWdlLm93bmVyQWRkci5jYWxsKClcbiAgICAgICAgLy8gY29uc29sZS5sb2cob3duZXJQcm9maWxlKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmFkZHJlc3MpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FkZHJlc3MgOiBvd25lclByb2ZpbGV9KVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmFkZHJlc3MpXG5cbiAgICB9XG59XG5cbi8vIGV4cG9ydCBjb25zdCBnZXREZXBsb3lySW5mbyA9IGFzeW5jKCkgID0+IHtcbi8vICAgICBjb25zdCBzdG9yYWdlID0gYXdhaXQgZ2V0SW5zdGFuY2UoUm91bGV0dGUpXG4vLyAgICAgY29uc3QgZGVwbG95VGltZSA9IGF3YWl0IHN0b3JhZ2UuZGVwbG95VGltZS5jYWxsKClcbi8vICAgICBjb25zdCByZXN1bHQgPSBkZXBsb3lUaW1lLnRvTnVtYmVyKClcbi8vICAgICByZXR1cm4gcmVzdWx0XG4vLyB9XG5cbmV4cG9ydCBjbGFzcyBHZXREZXBsb3lySW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0gIHt0aW1lIDogXCJcIn1cbiAgICAgICAgdGhpcy5oYW5kbGVPbkNsaWNrID0gdGhpcy5oYW5kbGVPbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVPbkNsaWNrfT5HZXQgRGVwbG95IFRpbWU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8aDU+RGVwbG95ZWQgVGltZSBpcyA6IHt0aGlzLnN0YXRlLnRpbWV9PC9oNT5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBidXR0b246aG92ZXIsXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzAwNTNiYTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmUtb2Zmc2V0OiAtNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBoYW5kbGVPbkNsaWNrID0gYXN5bmMoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCBnZXRJbnN0YW5jZShSb3VsZXR0ZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RvcmFnZSlcbiAgICAgICAgY29uc3QgZGVwbG95VGltZSA9IGF3YWl0IHN0b3JhZ2UuZGVwbG95VGltZS5jYWxsKClcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZGVwbG95VGltZS50b051bWJlcigpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG93bmVyUHJvZmlsZSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS50aW1lKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0aW1lIDogcmVzdWx0fSlcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXROYW1lID0gYXN5bmMobmFtZSkgPT57XG4gICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IGdldEluc3RhbmNlKFJvdWxldHRlKVxuICAgIGNvbnN0IGFkZHJlc3NlcyA9IGF3YWl0IGV0aC5nZXRBY2NvdW50cygpXG4gICAgYXdhaXQgc3RvcmFnZS5zZXRVc2VyTmFtZShuYW1lLHtmcm9tOmFkZHJlc3Nlc1swXX0pXG59XG5cblxuZXhwb3J0IGNsYXNzIFNldFVzZXJJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge3ZhbHVlOicnfTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuc2V0TmFtZSA9IHRoaXMuc2V0TmFtZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIHNldE5hbWUgPSBhc3luYyhuYW1lKSA9PntcbiAgICAvLyAgICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IGdldEluc3RhbmNlKFJvdWxldHRlKVxuICAgIC8vICAgICBjb25zdCBhZGRyZXNzZXMgPSBhd2FpdCBldGguZ2V0QWNjb3VudHMoKVxuICAgIC8vICAgICBhd2FpdCBzdG9yYWdlLnNldFVzZXJOYW1lKG5hbWUse2Zyb206YWRkcmVzc2VzWzBdfSlcbiAgICAvLyB9XG5cbiAgICBhc3luYyBoYW5kbGVDaGFuZ2UoZXZlbnQpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTpldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVTdWJtaXQoZXZlbnQpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgd2FzIENyZWF0ZWQ6XCIgKyB0aGlzLnN0YXRlLnZhbHVlKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYXdhaXQgc2V0TmFtZSh0aGlzLnN0YXRlLnZhbHVlKVxuICAgICAgICB0aGlzLnByb3BzLmFkZFVzZXIodGhpcy5zdGF0ZS52YWx1ZSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWUgOiBcIlwifSlcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGlucHV0IGNhbmRpY2F0ZXM6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImNvbnRlbnQtc3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICB7Lyoge3RoaXMuc3RhdGUudmFsdWV9ICovfVxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LXN1Ym1pdCB7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVJhbmRvbSA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCBnZXRJbnN0YW5jZShSb3VsZXR0ZSlcbiAgICBjb25zdCBhZGRyZXNzZXMgPSBhd2FpdCBldGguZ2V0QWNjb3VudHMoKVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN0b3JhZ2UuZ2VuZXJhdGVSYW5kb21OdW1iZXIoe2Zyb206YWRkcmVzc2VzWzBdfSlcbiAgICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBjbGFzcyBHZW5lcmF0ZVJhbmRvbU51bWJlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtudW1iZXIgOiBcIlwiLCB3aW5uZXIgOiBcIlwifTtcbiAgICAgICAgdGhpcy5oYW5kbGVPbkNsaWNrID0gdGhpcy5oYW5kbGVPbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlT25DbGljayA9IGFzeW5jKCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm51bWJlcilcbiAgICAgICAgYXdhaXQgZ2VuZXJhdGVSYW5kb20oKTtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IGdldEluc3RhbmNlKFJvdWxldHRlKVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdG9yYWdlLndpbm5lci5jYWxsKClcbiAgICAgICAgY29uc3Qgd2luTnVtYmVyID0gYXdhaXQgcmVzdWx0LnRvTnVtYmVyKClcbiAgICAgICAgLy8w55Wq55uu44GL44KJ5aeL44G+44Gj44Gm44GE44KL44Gu44Gn6Kq/5pW0XG4gICAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoe251bWJlciA6IHdpbk51bWJlciArIDF9KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm51bWJlcilcblxuICAgICAgICBjb25zdCB3aW5uZXJOYW1lID0gYXdhaXQgc3RvcmFnZS52aWV3UmVzdWx0KClcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7d2lubmVyIDogd2lubmVyTmFtZX0pXG4gICAgICAgIGNvbnNvbGUubG9nKHdpbm5lck5hbWUpXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgTGV0J3Mgc3RhcnQgUm91bGV0dGUgOiBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlT25DbGlja30+R2V0IFJhbmRvbSBOdW1iZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8aDU+UmFuZG9tIE51bWJlciA6IHt0aGlzLnN0YXRlLm51bWJlcn08L2g1PlxuICAgICAgICAgICAgICAgIDxoNT5TbyAuLi4gV2lubmVyIDoge3RoaXMuc3RhdGUud2lubmVyfTwvaDU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHZpZXdSZXN1bHQgPSBhc3luYygpID0+IHtcbiAgICBjb25zdCBzdG9yYWdlID0gYXdhaXQgZ2V0SW5zdGFuY2UoUm91bGV0dGUpXG4gICAgY29uc3QgYWRkcmVzc2VzID0gYXdhaXQgZXRoLmdldEFjY291bnRzKClcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdG9yYWdlLnZpZXdSZXN1bHQoe2Zyb206YWRkcmVzc2VzWzBdfSlcbiAgICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBjb25zdCB2aWV3VXNlcnMgPSBhc3luYygpID0+IHtcbiAgICBjb25zdCBzdG9yYWdlID0gYXdhaXQgZ2V0SW5zdGFuY2UoUm91bGV0dGUpXG4gICAgY29uc3QgYWRkcmVzc2VzID0gYXdhaXQgZXRoLmdldEFjY291bnRzKClcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdG9yYWdlLnZpZXdVc2Vycyh7ZnJvbTphZGRyZXNzZXNbMF19KVxuICAgIHJldHVybiByZXN1bHRcbn0iXX0= */\n/*@ sourceURL=/Users/andy/roulette-ethereum/client/web3/roulette.js */",
        __self: this
      }));
    }
  }]);

  return GetOwnerInfo;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component); // export const getDeployrInfo = async()  => {
//     const storage = await getInstance(Roulette)
//     const deployTime = await storage.deployTime.call()
//     const result = deployTime.toNumber()
//     return result
// }

var GetDeployrInfo =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(GetDeployrInfo, _React$Component2);

  function GetDeployrInfo(props) {
    var _this2;

    _classCallCheck(this, GetDeployrInfo);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(GetDeployrInfo).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "handleOnClick",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var storage, deployTime, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_provider__WEBPACK_IMPORTED_MODULE_3__["getInstance"])(_web3_artifacts_Roulette_json__WEBPACK_IMPORTED_MODULE_4__);

            case 2:
              storage = _context2.sent;
              _context2.next = 5;
              return storage.deployTime.call();

            case 5:
              deployTime = _context2.sent;
              result = deployTime.toNumber(); // console.log(ownerProfile)

              console.log(_this2.state.time);

              _this2.setState({
                time: result
              });

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _this2.state = {
      time: ""
    };
    _this2.handleOnClick = _this2.handleOnClick.bind(_assertThisInitialized(_assertThisInitialized(_this2)));
    return _this2;
  }

  _createClass(GetDeployrInfo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2496632589",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        onClick: this.handleOnClick,
        className: "jsx-2496632589",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Get Deploy Time"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
        className: "jsx-2496632589",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Deployed Time is : ", this.state.time), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2496632589",
        css: "h5.jsx-2496632589{font-size:15px;}button.jsx-2496632589{font-size:100%;}button.jsx-2496632589:hover,button.jsx-2496632589:focus{background:#0053ba;}button.jsx-2496632589:focus{outline:1px solid #fff;outline-offset:-4px;}button.jsx-2496632589:active{-webkit-transform:scale(0.99);-ms-transform:scale(0.99);transform:scale(0.99);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5L3JvdWxldHRlLWV0aGVyZXVtL2NsaWVudC93ZWIzL3JvdWxldHRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGNEIsQUFHdUMsQUFJQSxBQUtJLEFBSUssQUFLRCxlQWpCMUIsQUFJQSxJQUtBLElBSXdCLG9CQUN4QixtQ0FJQSIsImZpbGUiOiIvVXNlcnMvYW5keS9yb3VsZXR0ZS1ldGhlcmV1bS9jbGllbnQvd2ViMy9yb3VsZXR0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aCwgZ2V0SW5zdGFuY2UgfSBmcm9tICcuL3Byb3ZpZGVyJ1xuaW1wb3J0IFJvdWxldHRlIGZyb20gXCIuLi93ZWIzL2FydGlmYWN0cy9Sb3VsZXR0ZS5qc29uXCJcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCJcblxuY29uc3Qge1xuICB1dGlsczoge1xuICAgIGhleFRvU3RyaW5nLFxuICB9LFxufSA9IFdlYjNcblxuLy8gZXhwb3J0IGNvbnN0IGdldE93bmVySW5mbyA9IGFzeW5jKCkgID0+IHtcbi8vICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IGdldEluc3RhbmNlKFJvdWxldHRlKVxuLy8gICBjb25zdCBvd25lclByb2ZpbGUgPSBhd2FpdCBzdG9yYWdlLm93bmVyQWRkci5jYWxsKClcbi8vICAgcmV0dXJuIG93bmVyUHJvZmlsZVxuLy8gfVxuXG5leHBvcnQgY2xhc3MgR2V0T3duZXJJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSAge2FkZHJlc3MgOiBcIlwifVxuICAgICAgICB0aGlzLmhhbmRsZU9uQ2xpY2sgPSB0aGlzLmhhbmRsZU9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZU9uQ2xpY2t9PkdldCBPd25lciBBZGRyZXNzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGg1Pk93bmVyIEFkZHJlc3MgaXMgOiB7dGhpcy5zdGF0ZS5hZGRyZXNzfTwvaDU+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxMDAlXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBidXR0b246aG92ZXIsXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzAwNTNiYTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmUtb2Zmc2V0OiAtNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBoYW5kbGVPbkNsaWNrID0gYXN5bmMoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCBnZXRJbnN0YW5jZShSb3VsZXR0ZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RvcmFnZSlcbiAgICAgICAgY29uc3Qgb3duZXJQcm9maWxlID0gYXdhaXQgc3RvcmFnZS5vd25lckFkZHIuY2FsbCgpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG93bmVyUHJvZmlsZSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hZGRyZXNzKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHthZGRyZXNzIDogb3duZXJQcm9maWxlfSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hZGRyZXNzKVxuXG4gICAgfVxufVxuXG4vLyBleHBvcnQgY29uc3QgZ2V0RGVwbG95ckluZm8gPSBhc3luYygpICA9PiB7XG4vLyAgICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IGdldEluc3RhbmNlKFJvdWxldHRlKVxuLy8gICAgIGNvbnN0IGRlcGxveVRpbWUgPSBhd2FpdCBzdG9yYWdlLmRlcGxveVRpbWUuY2FsbCgpXG4vLyAgICAgY29uc3QgcmVzdWx0ID0gZGVwbG95VGltZS50b051bWJlcigpXG4vLyAgICAgcmV0dXJuIHJlc3VsdFxuLy8gfVxuXG5leHBvcnQgY2xhc3MgR2V0RGVwbG95ckluZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICB7dGltZSA6IFwiXCJ9XG4gICAgICAgIHRoaXMuaGFuZGxlT25DbGljayA9IHRoaXMuaGFuZGxlT25DbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlT25DbGlja30+R2V0IERlcGxveSBUaW1lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGg1PkRlcGxveWVkIFRpbWUgaXMgOiB7dGhpcy5zdGF0ZS50aW1lfTwvaDU+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uOmhvdmVyLFxuICAgICAgICAgICAgICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMwMDUzYmE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lLW9mZnNldDogLTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgaGFuZGxlT25DbGljayA9IGFzeW5jKCkgPT4ge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gYXdhaXQgZ2V0SW5zdGFuY2UoUm91bGV0dGUpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0b3JhZ2UpXG4gICAgICAgIGNvbnN0IGRlcGxveVRpbWUgPSBhd2FpdCBzdG9yYWdlLmRlcGxveVRpbWUuY2FsbCgpXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRlcGxveVRpbWUudG9OdW1iZXIoKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvd25lclByb2ZpbGUpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudGltZSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZSA6IHJlc3VsdH0pXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0TmFtZSA9IGFzeW5jKG5hbWUpID0+e1xuICAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCBnZXRJbnN0YW5jZShSb3VsZXR0ZSlcbiAgICBjb25zdCBhZGRyZXNzZXMgPSBhd2FpdCBldGguZ2V0QWNjb3VudHMoKVxuICAgIGF3YWl0IHN0b3JhZ2Uuc2V0VXNlck5hbWUobmFtZSx7ZnJvbTphZGRyZXNzZXNbMF19KVxufVxuXG5cbmV4cG9ydCBjbGFzcyBTZXRVc2VySW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt2YWx1ZTonJ307XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLnNldE5hbWUgPSB0aGlzLnNldE5hbWUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBzZXROYW1lID0gYXN5bmMobmFtZSkgPT57XG4gICAgLy8gICAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCBnZXRJbnN0YW5jZShSb3VsZXR0ZSlcbiAgICAvLyAgICAgY29uc3QgYWRkcmVzc2VzID0gYXdhaXQgZXRoLmdldEFjY291bnRzKClcbiAgICAvLyAgICAgYXdhaXQgc3RvcmFnZS5zZXRVc2VyTmFtZShuYW1lLHtmcm9tOmFkZHJlc3Nlc1swXX0pXG4gICAgLy8gfVxuXG4gICAgYXN5bmMgaGFuZGxlQ2hhbmdlKGV2ZW50KXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6ZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlU3VibWl0KGV2ZW50KXtcbiAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIHdhcyBDcmVhdGVkOlwiICsgdGhpcy5zdGF0ZS52YWx1ZSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGF3YWl0IHNldE5hbWUodGhpcy5zdGF0ZS52YWx1ZSlcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRVc2VyKHRoaXMuc3RhdGUudmFsdWUpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlIDogXCJcIn0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIFBsZWFzZSBpbnB1dCBjYW5kaWNhdGVzOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJjb250ZW50LXN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgey8qIHt0aGlzLnN0YXRlLnZhbHVlfSAqL31cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1zdWJtaXQge1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVSYW5kb20gPSBhc3luYygpID0+IHtcbiAgICBjb25zdCBzdG9yYWdlID0gYXdhaXQgZ2V0SW5zdGFuY2UoUm91bGV0dGUpXG4gICAgY29uc3QgYWRkcmVzc2VzID0gYXdhaXQgZXRoLmdldEFjY291bnRzKClcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdG9yYWdlLmdlbmVyYXRlUmFuZG9tTnVtYmVyKHtmcm9tOmFkZHJlc3Nlc1swXX0pXG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgY2xhc3MgR2VuZXJhdGVSYW5kb21OdW1iZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7bnVtYmVyIDogXCJcIiwgd2lubmVyIDogXCJcIn07XG4gICAgICAgIHRoaXMuaGFuZGxlT25DbGljayA9IHRoaXMuaGFuZGxlT25DbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZU9uQ2xpY2sgPSBhc3luYygpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5udW1iZXIpXG4gICAgICAgIGF3YWl0IGdlbmVyYXRlUmFuZG9tKCk7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCBnZXRJbnN0YW5jZShSb3VsZXR0ZSlcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3RvcmFnZS53aW5uZXIuY2FsbCgpXG4gICAgICAgIGNvbnN0IHdpbk51bWJlciA9IGF3YWl0IHJlc3VsdC50b051bWJlcigpXG4gICAgICAgIC8vMOeVquebruOBi+OCieWni+OBvuOBo+OBpuOBhOOCi+OBruOBp+iqv+aVtFxuICAgICAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHtudW1iZXIgOiB3aW5OdW1iZXIgKyAxfSlcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5udW1iZXIpXG5cbiAgICAgICAgY29uc3Qgd2lubmVyTmFtZSA9IGF3YWl0IHN0b3JhZ2Uudmlld1Jlc3VsdCgpXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoe3dpbm5lciA6IHdpbm5lck5hbWV9KVxuICAgICAgICBjb25zb2xlLmxvZyh3aW5uZXJOYW1lKVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIExldCdzIHN0YXJ0IFJvdWxldHRlIDogXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZU9uQ2xpY2t9PkdldCBSYW5kb20gTnVtYmVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGg1PlJhbmRvbSBOdW1iZXIgOiB7dGhpcy5zdGF0ZS5udW1iZXJ9PC9oNT5cbiAgICAgICAgICAgICAgICA8aDU+U28gLi4uIFdpbm5lciA6IHt0aGlzLnN0YXRlLndpbm5lcn08L2g1PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB2aWV3UmVzdWx0ID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IGdldEluc3RhbmNlKFJvdWxldHRlKVxuICAgIGNvbnN0IGFkZHJlc3NlcyA9IGF3YWl0IGV0aC5nZXRBY2NvdW50cygpXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3RvcmFnZS52aWV3UmVzdWx0KHtmcm9tOmFkZHJlc3Nlc1swXX0pXG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgY29uc3Qgdmlld1VzZXJzID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IGdldEluc3RhbmNlKFJvdWxldHRlKVxuICAgIGNvbnN0IGFkZHJlc3NlcyA9IGF3YWl0IGV0aC5nZXRBY2NvdW50cygpXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3RvcmFnZS52aWV3VXNlcnMoe2Zyb206YWRkcmVzc2VzWzBdfSlcbiAgICByZXR1cm4gcmVzdWx0XG59Il19 */\n/*@ sourceURL=/Users/andy/roulette-ethereum/client/web3/roulette.js */",
        __self: this
      }));
    }
  }]);

  return GetDeployrInfo;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);
var setName =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(name) {
    var storage, addresses;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Object(_provider__WEBPACK_IMPORTED_MODULE_3__["getInstance"])(_web3_artifacts_Roulette_json__WEBPACK_IMPORTED_MODULE_4__);

          case 2:
            storage = _context3.sent;
            _context3.next = 5;
            return _provider__WEBPACK_IMPORTED_MODULE_3__["eth"].getAccounts();

          case 5:
            addresses = _context3.sent;
            _context3.next = 8;
            return storage.setUserName(name, {
              from: addresses[0]
            });

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function setName(_x) {
    return _ref3.apply(this, arguments);
  };
}();
var SetUserInfo =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(SetUserInfo, _React$Component3);

  function SetUserInfo(props) {
    var _this3;

    _classCallCheck(this, SetUserInfo);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(SetUserInfo).call(this, props));
    _this3.state = {
      value: ''
    };
    _this3.handleChange = _this3.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this3)));
    _this3.handleSubmit = _this3.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this3))); // this.setName = this.setName.bind(this);

    return _this3;
  } // setName = async(name) =>{
  //     const storage = await getInstance(Roulette)
  //     const addresses = await eth.getAccounts()
  //     await storage.setUserName(name,{from:addresses[0]})
  // }


  _createClass(SetUserInfo, [{
    key: "handleChange",
    value: function () {
      var _handleChange = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.setState({
                  value: event.target.value
                });

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function handleChange(_x2) {
        return _handleChange.apply(this, arguments);
      }

      return handleChange;
    }()
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log("User was Created:" + this.state.value);
                event.preventDefault();
                _context5.next = 4;
                return setName(this.state.value);

              case 4:
                this.props.addUser(this.state.value);
                this.setState({
                  value: ""
                });

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function handleSubmit(_x3) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3893947117",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-3893947117",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "jsx-3893947117",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "Please input candicates:", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        value: this.state.value,
        onChange: this.handleChange,
        className: "jsx-3893947117",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        class: "content-submit",
        type: "submit",
        value: "Submit",
        className: "jsx-3893947117",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3893947117",
        css: "h5.jsx-3893947117{font-size:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5L3JvdWxldHRlLWV0aGVyZXVtL2NsaWVudC93ZWIzL3JvdWxldHRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRLNEIsQUFHdUMsZUFDbEIiLCJmaWxlIjoiL1VzZXJzL2FuZHkvcm91bGV0dGUtZXRoZXJldW0vY2xpZW50L3dlYjMvcm91bGV0dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGgsIGdldEluc3RhbmNlIH0gZnJvbSAnLi9wcm92aWRlcidcbmltcG9ydCBSb3VsZXR0ZSBmcm9tIFwiLi4vd2ViMy9hcnRpZmFjdHMvUm91bGV0dGUuanNvblwiXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiXG5cbmNvbnN0IHtcbiAgdXRpbHM6IHtcbiAgICBoZXhUb1N0cmluZyxcbiAgfSxcbn0gPSBXZWIzXG5cbi8vIGV4cG9ydCBjb25zdCBnZXRPd25lckluZm8gPSBhc3luYygpICA9PiB7XG4vLyAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCBnZXRJbnN0YW5jZShSb3VsZXR0ZSlcbi8vICAgY29uc3Qgb3duZXJQcm9maWxlID0gYXdhaXQgc3RvcmFnZS5vd25lckFkZHIuY2FsbCgpXG4vLyAgIHJldHVybiBvd25lclByb2ZpbGVcbi8vIH1cblxuZXhwb3J0IGNsYXNzIEdldE93bmVySW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0gIHthZGRyZXNzIDogXCJcIn1cbiAgICAgICAgdGhpcy5oYW5kbGVPbkNsaWNrID0gdGhpcy5oYW5kbGVPbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVPbkNsaWNrfT5HZXQgT3duZXIgQWRkcmVzczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxoNT5Pd25lciBBZGRyZXNzIGlzIDoge3RoaXMuc3RhdGUuYWRkcmVzc308L2g1PlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTAwJVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uOmhvdmVyLFxuICAgICAgICAgICAgICAgICAgICBidXR0b246Zm9jdXN7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMwMDUzYmE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lLW9mZnNldDogLTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgaGFuZGxlT25DbGljayA9IGFzeW5jKCkgPT4ge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gYXdhaXQgZ2V0SW5zdGFuY2UoUm91bGV0dGUpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0b3JhZ2UpXG4gICAgICAgIGNvbnN0IG93bmVyUHJvZmlsZSA9IGF3YWl0IHN0b3JhZ2Uub3duZXJBZGRyLmNhbGwoKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvd25lclByb2ZpbGUpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYWRkcmVzcylcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWRkcmVzcyA6IG93bmVyUHJvZmlsZX0pXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYWRkcmVzcylcblxuICAgIH1cbn1cblxuLy8gZXhwb3J0IGNvbnN0IGdldERlcGxveXJJbmZvID0gYXN5bmMoKSAgPT4ge1xuLy8gICAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCBnZXRJbnN0YW5jZShSb3VsZXR0ZSlcbi8vICAgICBjb25zdCBkZXBsb3lUaW1lID0gYXdhaXQgc3RvcmFnZS5kZXBsb3lUaW1lLmNhbGwoKVxuLy8gICAgIGNvbnN0IHJlc3VsdCA9IGRlcGxveVRpbWUudG9OdW1iZXIoKVxuLy8gICAgIHJldHVybiByZXN1bHRcbi8vIH1cblxuZXhwb3J0IGNsYXNzIEdldERlcGxveXJJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSAge3RpbWUgOiBcIlwifVxuICAgICAgICB0aGlzLmhhbmRsZU9uQ2xpY2sgPSB0aGlzLmhhbmRsZU9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZU9uQ2xpY2t9PkdldCBEZXBsb3kgVGltZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxoNT5EZXBsb3llZCBUaW1lIGlzIDoge3RoaXMuc3RhdGUudGltZX08L2g1PlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpob3ZlcixcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojMDA1M2JhO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC00cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBidXR0b246YWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGhhbmRsZU9uQ2xpY2sgPSBhc3luYygpID0+IHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IGdldEluc3RhbmNlKFJvdWxldHRlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdG9yYWdlKVxuICAgICAgICBjb25zdCBkZXBsb3lUaW1lID0gYXdhaXQgc3RvcmFnZS5kZXBsb3lUaW1lLmNhbGwoKVxuICAgICAgICBjb25zdCByZXN1bHQgPSBkZXBsb3lUaW1lLnRvTnVtYmVyKClcbiAgICAgICAgLy8gY29uc29sZS5sb2cob3duZXJQcm9maWxlKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRpbWUpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWUgOiByZXN1bHR9KVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldE5hbWUgPSBhc3luYyhuYW1lKSA9PntcbiAgICBjb25zdCBzdG9yYWdlID0gYXdhaXQgZ2V0SW5zdGFuY2UoUm91bGV0dGUpXG4gICAgY29uc3QgYWRkcmVzc2VzID0gYXdhaXQgZXRoLmdldEFjY291bnRzKClcbiAgICBhd2FpdCBzdG9yYWdlLnNldFVzZXJOYW1lKG5hbWUse2Zyb206YWRkcmVzc2VzWzBdfSlcbn1cblxuXG5leHBvcnQgY2xhc3MgU2V0VXNlckluZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7dmFsdWU6Jyd9O1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5zZXROYW1lID0gdGhpcy5zZXROYW1lLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gc2V0TmFtZSA9IGFzeW5jKG5hbWUpID0+e1xuICAgIC8vICAgICBjb25zdCBzdG9yYWdlID0gYXdhaXQgZ2V0SW5zdGFuY2UoUm91bGV0dGUpXG4gICAgLy8gICAgIGNvbnN0IGFkZHJlc3NlcyA9IGF3YWl0IGV0aC5nZXRBY2NvdW50cygpXG4gICAgLy8gICAgIGF3YWl0IHN0b3JhZ2Uuc2V0VXNlck5hbWUobmFtZSx7ZnJvbTphZGRyZXNzZXNbMF19KVxuICAgIC8vIH1cblxuICAgIGFzeW5jIGhhbmRsZUNoYW5nZShldmVudCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOmV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZVN1Ym1pdChldmVudCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciB3YXMgQ3JlYXRlZDpcIiArIHRoaXMuc3RhdGUudmFsdWUpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhd2FpdCBzZXROYW1lKHRoaXMuc3RhdGUudmFsdWUpXG4gICAgICAgIHRoaXMucHJvcHMuYWRkVXNlcih0aGlzLnN0YXRlLnZhbHVlKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZSA6IFwiXCJ9KVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgaW5wdXQgY2FuZGljYXRlczpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiY29udGVudC1zdWJtaXRcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIi8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIHsvKiB7dGhpcy5zdGF0ZS52YWx1ZX0gKi99XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQtc3VibWl0IHtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlUmFuZG9tID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IGdldEluc3RhbmNlKFJvdWxldHRlKVxuICAgIGNvbnN0IGFkZHJlc3NlcyA9IGF3YWl0IGV0aC5nZXRBY2NvdW50cygpXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3RvcmFnZS5nZW5lcmF0ZVJhbmRvbU51bWJlcih7ZnJvbTphZGRyZXNzZXNbMF19KVxuICAgIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGNsYXNzIEdlbmVyYXRlUmFuZG9tTnVtYmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge251bWJlciA6IFwiXCIsIHdpbm5lciA6IFwiXCJ9O1xuICAgICAgICB0aGlzLmhhbmRsZU9uQ2xpY2sgPSB0aGlzLmhhbmRsZU9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVPbkNsaWNrID0gYXN5bmMoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubnVtYmVyKVxuICAgICAgICBhd2FpdCBnZW5lcmF0ZVJhbmRvbSgpO1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gYXdhaXQgZ2V0SW5zdGFuY2UoUm91bGV0dGUpXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN0b3JhZ2Uud2lubmVyLmNhbGwoKVxuICAgICAgICBjb25zdCB3aW5OdW1iZXIgPSBhd2FpdCByZXN1bHQudG9OdW1iZXIoKVxuICAgICAgICAvLzDnlarnm67jgYvjgonlp4vjgb7jgaPjgabjgYTjgovjga7jgafoqr/mlbRcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7bnVtYmVyIDogd2luTnVtYmVyICsgMX0pXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubnVtYmVyKVxuXG4gICAgICAgIGNvbnN0IHdpbm5lck5hbWUgPSBhd2FpdCBzdG9yYWdlLnZpZXdSZXN1bHQoKVxuICAgICAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHt3aW5uZXIgOiB3aW5uZXJOYW1lfSlcbiAgICAgICAgY29uc29sZS5sb2cod2lubmVyTmFtZSlcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBMZXQncyBzdGFydCBSb3VsZXR0ZSA6IFxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVPbkNsaWNrfT5HZXQgUmFuZG9tIE51bWJlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxoNT5SYW5kb20gTnVtYmVyIDoge3RoaXMuc3RhdGUubnVtYmVyfTwvaDU+XG4gICAgICAgICAgICAgICAgPGg1PlNvIC4uLiBXaW5uZXIgOiB7dGhpcy5zdGF0ZS53aW5uZXJ9PC9oNT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgdmlld1Jlc3VsdCA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCBnZXRJbnN0YW5jZShSb3VsZXR0ZSlcbiAgICBjb25zdCBhZGRyZXNzZXMgPSBhd2FpdCBldGguZ2V0QWNjb3VudHMoKVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN0b3JhZ2Uudmlld1Jlc3VsdCh7ZnJvbTphZGRyZXNzZXNbMF19KVxuICAgIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGNvbnN0IHZpZXdVc2VycyA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCBnZXRJbnN0YW5jZShSb3VsZXR0ZSlcbiAgICBjb25zdCBhZGRyZXNzZXMgPSBhd2FpdCBldGguZ2V0QWNjb3VudHMoKVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN0b3JhZ2Uudmlld1VzZXJzKHtmcm9tOmFkZHJlc3Nlc1swXX0pXG4gICAgcmV0dXJuIHJlc3VsdFxufSJdfQ== */\n/*@ sourceURL=/Users/andy/roulette-ethereum/client/web3/roulette.js */",
        __self: this
      }));
    }
  }]);

  return SetUserInfo;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);
var generateRandom =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
    var storage, addresses, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return Object(_provider__WEBPACK_IMPORTED_MODULE_3__["getInstance"])(_web3_artifacts_Roulette_json__WEBPACK_IMPORTED_MODULE_4__);

          case 2:
            storage = _context6.sent;
            _context6.next = 5;
            return _provider__WEBPACK_IMPORTED_MODULE_3__["eth"].getAccounts();

          case 5:
            addresses = _context6.sent;
            _context6.next = 8;
            return storage.generateRandomNumber({
              from: addresses[0]
            });

          case 8:
            result = _context6.sent;
            return _context6.abrupt("return", result);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function generateRandom() {
    return _ref4.apply(this, arguments);
  };
}();
var GenerateRandomNumber =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(GenerateRandomNumber, _React$Component4);

  function GenerateRandomNumber(props) {
    var _this4;

    _classCallCheck(this, GenerateRandomNumber);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(GenerateRandomNumber).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "handleOnClick",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
      var storage, result, winNumber, winnerName;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return generateRandom();

            case 2:
              _context7.next = 4;
              return Object(_provider__WEBPACK_IMPORTED_MODULE_3__["getInstance"])(_web3_artifacts_Roulette_json__WEBPACK_IMPORTED_MODULE_4__);

            case 4:
              storage = _context7.sent;
              _context7.next = 7;
              return storage.winner.call();

            case 7:
              result = _context7.sent;
              _context7.next = 10;
              return result.toNumber();

            case 10:
              winNumber = _context7.sent;
              _context7.next = 13;
              return _this4.setState({
                number: winNumber + 1
              });

            case 13:
              _context7.next = 15;
              return storage.viewResult();

            case 15:
              winnerName = _context7.sent;
              _context7.next = 18;
              return _this4.setState({
                winner: winnerName
              });

            case 18:
              console.log(winnerName);

            case 19:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    })));

    _this4.state = {
      number: "",
      winner: ""
    };
    _this4.handleOnClick = _this4.handleOnClick.bind(_assertThisInitialized(_assertThisInitialized(_this4)));
    return _this4;
  }

  _createClass(GenerateRandomNumber, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "Let's start Roulette :", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        onClick: this.handleOnClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "Get Random Number"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, "Random Number : ", this.state.number), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "So ... Winner : ", this.state.winner));
    }
  }]);

  return GenerateRandomNumber;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);
var viewResult =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
    var storage, addresses, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return Object(_provider__WEBPACK_IMPORTED_MODULE_3__["getInstance"])(_web3_artifacts_Roulette_json__WEBPACK_IMPORTED_MODULE_4__);

          case 2:
            storage = _context8.sent;
            _context8.next = 5;
            return _provider__WEBPACK_IMPORTED_MODULE_3__["eth"].getAccounts();

          case 5:
            addresses = _context8.sent;
            _context8.next = 8;
            return storage.viewResult({
              from: addresses[0]
            });

          case 8:
            result = _context8.sent;
            return _context8.abrupt("return", result);

          case 10:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function viewResult() {
    return _ref6.apply(this, arguments);
  };
}();
var viewUsers =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
    var storage, addresses, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return Object(_provider__WEBPACK_IMPORTED_MODULE_3__["getInstance"])(_web3_artifacts_Roulette_json__WEBPACK_IMPORTED_MODULE_4__);

          case 2:
            storage = _context9.sent;
            _context9.next = 5;
            return _provider__WEBPACK_IMPORTED_MODULE_3__["eth"].getAccounts();

          case 5:
            addresses = _context9.sent;
            _context9.next = 8;
            return storage.viewUsers({
              from: addresses[0]
            });

          case 8:
            result = _context9.sent;
            return _context9.abrupt("return", result);

          case 10:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));

  return function viewUsers() {
    return _ref7.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=index.js.d5d4ab4001b0d27ca66a.hot-update.js.map