webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web3_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web3/provider */ "./web3/provider.js");
/* harmony import */ var _web3_artifacts_Roulette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../web3/artifacts/Roulette */ "./web3/artifacts/Roulette.json");
var _web3_artifacts_Roulette__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../web3/artifacts/Roulette */ "./web3/artifacts/Roulette.json", 1);
/* harmony import */ var _web3_roulette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../web3/roulette */ "./web3/roulette.js");
/* harmony import */ var _web3_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../web3/List */ "./web3/List.js");

var _jsxFileName = "/Users/andy/roulette-ethereum/client/pages/index.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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






var IndexPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndexPage, _React$Component);

  function IndexPage(props) {
    var _this;

    _classCallCheck(this, IndexPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndexPage).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "users",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var users, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_web3_roulette__WEBPACK_IMPORTED_MODULE_5__["viewUsers"])();

            case 2:
              users = _context.sent;
              _context.next = 5;
              return users.toNumber();

            case 5:
              result = _context.sent;
              console.log(result);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "result",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var winner_result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_web3_roulette__WEBPACK_IMPORTED_MODULE_5__["viewResult"])();

            case 2:
              winner_result = _context2.sent;
              console.log("winner name : ", winner_result);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addUser",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(user) {
        var _ref4, members, nextId;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this.state;

              case 2:
                _ref4 = _context3.sent;
                members = _ref4.members;
                nextId = _ref4.nextId;

                _this.setState({
                  members: _toConsumableArray(members).concat([{
                    id: nextId + 1,
                    name: user
                  }]),
                  nextId: nextId + 1
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    _this.state = {
      members: [],
      nextId: 0
    };
    return _this;
  } // owner = async () => {
  //     const ownerInfo = await getOwnerInfo()
  //     console.log(ownerInfo)
  // }
  // deploy = async() => {
  //     const deployInfo = await getDeployrInfo()
  //     console.log(deployInfo)
  // }
  // random = async() => {
  //     await generateRandom()
  //     const storage = await getInstance(Roulette)
  //     const temp = await storage.winner.call()
  //     const winner = await temp.toNumber()
  //     console.log("random number : ",winner)
  // }


  _createClass(IndexPage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var addresses;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _web3_provider__WEBPACK_IMPORTED_MODULE_3__["eth"].getAccounts();

              case 2:
                addresses = _context4.sent;
                console.log("Your address : ", addresses);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Roulette on Ethereum"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Please push buttons from the top"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        className: "jsx-1880137831",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        className: "jsx-1880137831",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_web3_roulette__WEBPACK_IMPORTED_MODULE_5__["GetOwnerInfo"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        className: "jsx-1880137831",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_web3_roulette__WEBPACK_IMPORTED_MODULE_5__["GetDeployrInfo"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        className: "jsx-1880137831",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_web3_roulette__WEBPACK_IMPORTED_MODULE_5__["SetUserInfo"], {
        addUser: this.addUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_web3_List__WEBPACK_IMPORTED_MODULE_6__["List"], {
        members: this.state.members,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        className: "jsx-1880137831",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_web3_roulette__WEBPACK_IMPORTED_MODULE_5__["GenerateRandomNumber"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "1880137831",
        css: ".title.jsx-1880137831{font-size:100px;color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5L3JvdWxldHRlLWV0aGVyZXVtL2NsaWVudC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRmlDLEFBR3dDLGdCQUNMLFdBQ2QiLCJmaWxlIjoiL1VzZXJzL2FuZHkvcm91bGV0dGUtZXRoZXJldW0vY2xpZW50L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtldGgsZ2V0SW5zdGFuY2V9IGZyb20gXCIuLi93ZWIzL3Byb3ZpZGVyXCJcbmltcG9ydCBSb3VsZXR0ZSBmcm9tIFwiLi4vd2ViMy9hcnRpZmFjdHMvUm91bGV0dGVcIlxuaW1wb3J0IHtHZW5lcmF0ZVJhbmRvbU51bWJlcixHZXRPd25lckluZm8sIGdldERlcGxveXJJbmZvLCBTZXRVc2VySW5mbywgdmlld1Jlc3VsdCwgZ2VuZXJhdGVSYW5kb20sIHZpZXdVc2VycywgR2V0RGVwbG95ckluZm99IGZyb20gXCIuLi93ZWIzL3JvdWxldHRlXCJcbmltcG9ydCB7TGlzdH0gZnJvbSBcIi4uL3dlYjMvTGlzdFwiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgbWVtYmVycyA6IFtdLCBuZXh0SWQgOiAwfVxuICAgIH1cblxuICAgIC8vIG93bmVyID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBvd25lckluZm8gPSBhd2FpdCBnZXRPd25lckluZm8oKVxuICAgIC8vICAgICBjb25zb2xlLmxvZyhvd25lckluZm8pXG4gICAgLy8gfVxuXG4gICAgLy8gZGVwbG95ID0gYXN5bmMoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGRlcGxveUluZm8gPSBhd2FpdCBnZXREZXBsb3lySW5mbygpXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGRlcGxveUluZm8pXG4gICAgLy8gfVxuXG4gICAgLy8gcmFuZG9tID0gYXN5bmMoKSA9PiB7XG4gICAgLy8gICAgIGF3YWl0IGdlbmVyYXRlUmFuZG9tKClcbiAgICAvLyAgICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IGdldEluc3RhbmNlKFJvdWxldHRlKVxuICAgIC8vICAgICBjb25zdCB0ZW1wID0gYXdhaXQgc3RvcmFnZS53aW5uZXIuY2FsbCgpXG4gICAgLy8gICAgIGNvbnN0IHdpbm5lciA9IGF3YWl0IHRlbXAudG9OdW1iZXIoKVxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcInJhbmRvbSBudW1iZXIgOiBcIix3aW5uZXIpXG4gICAgLy8gfVxuXG4gICAgdXNlcnMgPSBhc3luYygpID0+IHtcbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCB2aWV3VXNlcnMoKVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1c2Vycy50b051bWJlcigpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICB9XG5cbiAgICByZXN1bHQgPSBhc3luYygpID0+IHtcbiAgICAgICAgY29uc3Qgd2lubmVyX3Jlc3VsdCA9IGF3YWl0IHZpZXdSZXN1bHQoKVxuICAgICAgICBjb25zb2xlLmxvZyhcIndpbm5lciBuYW1lIDogXCIsd2lubmVyX3Jlc3VsdClcbiAgICB9XG5cbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgYWRkcmVzc2VzID0gYXdhaXQgZXRoLmdldEFjY291bnRzKClcbiAgICAgICAgY29uc29sZS5sb2coXCJZb3VyIGFkZHJlc3MgOiBcIixhZGRyZXNzZXMpXG4gICAgfVxuXG4gICAgYWRkVXNlciA9IGFzeW5jKHVzZXIpID0+IHtcbiAgICAgICAgY29uc3Qge21lbWJlcnMsIG5leHRJZH0gPSBhd2FpdCB0aGlzLnN0YXRlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1lbWJlcnMgOiBbLi4ubWVtYmVycyx7aWQgOiBuZXh0SWQgKyAxLCBuYW1lIDogdXNlcn1dLFxuICAgICAgICAgICAgbmV4dElkIDogbmV4dElkICsgMVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlJvdWxldHRlIG9uIEV0aGVyZXVtPC9oMT5cbiAgICAgICAgICAgICAgICA8aDM+UGxlYXNlIHB1c2ggYnV0dG9ucyBmcm9tIHRoZSB0b3A8L2gzPlxuICAgICAgICAgICAgICAgIDx1bD5cblxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R2V0T3duZXJJbmZvIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICA8R2V0RGVwbG95ckluZm8gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2V0VXNlckluZm8gYWRkVXNlcj17dGhpcy5hZGRVc2VyfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgbWVtYmVycz17dGhpcy5zdGF0ZS5tZW1iZXJzfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHZW5lcmF0ZVJhbmRvbU51bWJlciAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICB7LyogPGxpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudXNlcnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3cgbnVtYmVyIG9mIHVzZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuIH0iXX0= */\n/*@ sourceURL=/Users/andy/roulette-ethereum/client/pages/index.js */",
        __self: this
      })));
    }
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.fc338cfd8a8a6ff64354.hot-update.js.map