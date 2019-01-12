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
        className: "jsx-3184559248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        onClick: this.handleOnClick,
        className: "jsx-3184559248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Get Owner Address"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
        className: "jsx-3184559248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Owner Address is : ", this.state.address), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3184559248",
        css: "h5.jsx-3184559248{font-size:10px;}button.jsx-3184559248{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5L3JvdWxldHRlLWV0aGVyZXVtL2NsaWVudC93ZWIzL3JvdWxldHRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCNEIsQUFHdUMsQUFJSixXQUNkLElBSkEiLCJmaWxlIjoiL1VzZXJzL2FuZHkvcm91bGV0dGUtZXRoZXJldW0vY2xpZW50L3dlYjMvcm91bGV0dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGgsIGdldEluc3RhbmNlIH0gZnJvbSAnLi9wcm92aWRlcidcbmltcG9ydCBSb3VsZXR0ZSBmcm9tIFwiLi4vd2ViMy9hcnRpZmFjdHMvUm91bGV0dGUuanNvblwiXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiXG5cbmNvbnN0IHtcbiAgdXRpbHM6IHtcbiAgICBoZXhUb1N0cmluZyxcbiAgfSxcbn0gPSBXZWIzXG5cbi8vIGV4cG9ydCBjb25zdCBnZXRPd25lckluZm8gPSBhc3luYygpICA9PiB7XG4vLyAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCBnZXRJbnN0YW5jZShSb3VsZXR0ZSlcbi8vICAgY29uc3Qgb3duZXJQcm9maWxlID0gYXdhaXQgc3RvcmFnZS5vd25lckFkZHIuY2FsbCgpXG4vLyAgIHJldHVybiBvd25lclByb2ZpbGVcbi8vIH1cblxuZXhwb3J0IGNsYXNzIEdldE93bmVySW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0gIHthZGRyZXNzIDogXCJcIn1cbiAgICAgICAgdGhpcy5oYW5kbGVPbkNsaWNrID0gdGhpcy5oYW5kbGVPbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVPbkNsaWNrfT5HZXQgT3duZXIgQWRkcmVzczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxoNT5Pd25lciBBZGRyZXNzIGlzIDoge3RoaXMuc3RhdGUuYWRkcmVzc308L2g1PlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBoYW5kbGVPbkNsaWNrID0gYXN5bmMoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCBnZXRJbnN0YW5jZShSb3VsZXR0ZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RvcmFnZSlcbiAgICAgICAgY29uc3Qgb3duZXJQcm9maWxlID0gYXdhaXQgc3RvcmFnZS5vd25lckFkZHIuY2FsbCgpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG93bmVyUHJvZmlsZSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hZGRyZXNzKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHthZGRyZXNzIDogb3duZXJQcm9maWxlfSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hZGRyZXNzKVxuXG4gICAgfVxufVxuXG4vLyBleHBvcnQgY29uc3QgZ2V0RGVwbG95ckluZm8gPSBhc3luYygpICA9PiB7XG4vLyAgICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IGdldEluc3RhbmNlKFJvdWxldHRlKVxuLy8gICAgIGNvbnN0IGRlcGxveVRpbWUgPSBhd2FpdCBzdG9yYWdlLmRlcGxveVRpbWUuY2FsbCgpXG4vLyAgICAgY29uc3QgcmVzdWx0ID0gZGVwbG95VGltZS50b051bWJlcigpXG4vLyAgICAgcmV0dXJuIHJlc3VsdFxuLy8gfVxuXG5leHBvcnQgY2xhc3MgR2V0RGVwbG95ckluZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICB7dGltZSA6IFwiXCJ9XG4gICAgICAgIHRoaXMuaGFuZGxlT25DbGljayA9IHRoaXMuaGFuZGxlT25DbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlT25DbGlja30+R2V0IERlcGxveSBUaW1lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGg1PkRlcGxveWVkIFRpbWUgaXMgOiB7dGhpcy5zdGF0ZS50aW1lfTwvaDU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGhhbmRsZU9uQ2xpY2sgPSBhc3luYygpID0+IHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IGdldEluc3RhbmNlKFJvdWxldHRlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdG9yYWdlKVxuICAgICAgICBjb25zdCBkZXBsb3lUaW1lID0gYXdhaXQgc3RvcmFnZS5kZXBsb3lUaW1lLmNhbGwoKVxuICAgICAgICBjb25zdCByZXN1bHQgPSBkZXBsb3lUaW1lLnRvTnVtYmVyKClcbiAgICAgICAgLy8gY29uc29sZS5sb2cob3duZXJQcm9maWxlKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRpbWUpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWUgOiByZXN1bHR9KVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldE5hbWUgPSBhc3luYyhuYW1lKSA9PntcbiAgICBjb25zdCBzdG9yYWdlID0gYXdhaXQgZ2V0SW5zdGFuY2UoUm91bGV0dGUpXG4gICAgY29uc3QgYWRkcmVzc2VzID0gYXdhaXQgZXRoLmdldEFjY291bnRzKClcbiAgICBhd2FpdCBzdG9yYWdlLnNldFVzZXJOYW1lKG5hbWUse2Zyb206YWRkcmVzc2VzWzBdfSlcbn1cblxuXG5leHBvcnQgY2xhc3MgU2V0VXNlckluZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7dmFsdWU6Jyd9O1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5zZXROYW1lID0gdGhpcy5zZXROYW1lLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gc2V0TmFtZSA9IGFzeW5jKG5hbWUpID0+e1xuICAgIC8vICAgICBjb25zdCBzdG9yYWdlID0gYXdhaXQgZ2V0SW5zdGFuY2UoUm91bGV0dGUpXG4gICAgLy8gICAgIGNvbnN0IGFkZHJlc3NlcyA9IGF3YWl0IGV0aC5nZXRBY2NvdW50cygpXG4gICAgLy8gICAgIGF3YWl0IHN0b3JhZ2Uuc2V0VXNlck5hbWUobmFtZSx7ZnJvbTphZGRyZXNzZXNbMF19KVxuICAgIC8vIH1cblxuICAgIGFzeW5jIGhhbmRsZUNoYW5nZShldmVudCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOmV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZVN1Ym1pdChldmVudCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciB3YXMgQ3JlYXRlZDpcIiArIHRoaXMuc3RhdGUudmFsdWUpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhd2FpdCBzZXROYW1lKHRoaXMuc3RhdGUudmFsdWUpXG4gICAgICAgIHRoaXMucHJvcHMuYWRkVXNlcih0aGlzLnN0YXRlLnZhbHVlKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZSA6IFwiXCJ9KVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgaW5wdXQgY2FuZGljYXRlczpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgey8qIHt0aGlzLnN0YXRlLnZhbHVlfSAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVSYW5kb20gPSBhc3luYygpID0+IHtcbiAgICBjb25zdCBzdG9yYWdlID0gYXdhaXQgZ2V0SW5zdGFuY2UoUm91bGV0dGUpXG4gICAgY29uc3QgYWRkcmVzc2VzID0gYXdhaXQgZXRoLmdldEFjY291bnRzKClcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdG9yYWdlLmdlbmVyYXRlUmFuZG9tTnVtYmVyKHtmcm9tOmFkZHJlc3Nlc1swXX0pXG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgY2xhc3MgR2VuZXJhdGVSYW5kb21OdW1iZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7bnVtYmVyIDogXCJcIiwgd2lubmVyIDogXCJcIn07XG4gICAgICAgIHRoaXMuaGFuZGxlT25DbGljayA9IHRoaXMuaGFuZGxlT25DbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZU9uQ2xpY2sgPSBhc3luYygpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5udW1iZXIpXG4gICAgICAgIGF3YWl0IGdlbmVyYXRlUmFuZG9tKCk7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCBnZXRJbnN0YW5jZShSb3VsZXR0ZSlcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3RvcmFnZS53aW5uZXIuY2FsbCgpXG4gICAgICAgIGNvbnN0IHdpbk51bWJlciA9IGF3YWl0IHJlc3VsdC50b051bWJlcigpXG4gICAgICAgIC8vMOeVquebruOBi+OCieWni+OBvuOBo+OBpuOBhOOCi+OBruOBp+iqv+aVtFxuICAgICAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHtudW1iZXIgOiB3aW5OdW1iZXIgKyAxfSlcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5udW1iZXIpXG5cbiAgICAgICAgY29uc3Qgd2lubmVyTmFtZSA9IGF3YWl0IHN0b3JhZ2Uudmlld1Jlc3VsdCgpXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoe3dpbm5lciA6IHdpbm5lck5hbWV9KVxuICAgICAgICBjb25zb2xlLmxvZyh3aW5uZXJOYW1lKVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIExldCdzIHN0YXJ0IFJvdWxldHRlIDogXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZU9uQ2xpY2t9PkdldCBSYW5kb20gTnVtYmVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGg1PlJhbmRvbSBOdW1iZXIgOiB7dGhpcy5zdGF0ZS5udW1iZXJ9PC9oNT5cbiAgICAgICAgICAgICAgICA8aDU+U28gLi4uIFdpbm5lciA6IHt0aGlzLnN0YXRlLndpbm5lcn08L2g1PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB2aWV3UmVzdWx0ID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IGdldEluc3RhbmNlKFJvdWxldHRlKVxuICAgIGNvbnN0IGFkZHJlc3NlcyA9IGF3YWl0IGV0aC5nZXRBY2NvdW50cygpXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3RvcmFnZS52aWV3UmVzdWx0KHtmcm9tOmFkZHJlc3Nlc1swXX0pXG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgY29uc3Qgdmlld1VzZXJzID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IGdldEluc3RhbmNlKFJvdWxldHRlKVxuICAgIGNvbnN0IGFkZHJlc3NlcyA9IGF3YWl0IGV0aC5nZXRBY2NvdW50cygpXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3RvcmFnZS52aWV3VXNlcnMoe2Zyb206YWRkcmVzc2VzWzBdfSlcbiAgICByZXR1cm4gcmVzdWx0XG59Il19 */\n/*@ sourceURL=/Users/andy/roulette-ethereum/client/web3/roulette.js */",
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        onClick: this.handleOnClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Get Deploy Time"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Deployed Time is : ", this.state.time));
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "Please input candicates:", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        value: this.state.value,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      })));
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
          lineNumber: 170
        },
        __self: this
      }, "Let's start Roulette :", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        onClick: this.handleOnClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "Get Random Number"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "Random Number : ", this.state.number), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
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
//# sourceMappingURL=index.js.e4b573ba3ac86b115283.hot-update.js.map