module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web3/provider */ "./web3/provider.js");
/* harmony import */ var _web3_artifacts_Roulette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web3/artifacts/Roulette */ "./web3/artifacts/Roulette.json");
var _web3_artifacts_Roulette__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../web3/artifacts/Roulette */ "./web3/artifacts/Roulette.json", 1);
/* harmony import */ var _web3_roulette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../web3/roulette */ "./web3/roulette.js");
/* harmony import */ var _web3_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../web3/List */ "./web3/List.js");

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "random",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var storage, temp, winner;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_web3_roulette__WEBPACK_IMPORTED_MODULE_4__["generateRandom"])();

            case 2:
              _context.next = 4;
              return Object(_web3_provider__WEBPACK_IMPORTED_MODULE_2__["getInstance"])(_web3_artifacts_Roulette__WEBPACK_IMPORTED_MODULE_3__);

            case 4:
              storage = _context.sent;
              _context.next = 7;
              return storage.winner.call();

            case 7:
              temp = _context.sent;
              _context.next = 10;
              return temp.toNumber();

            case 10:
              winner = _context.sent;
              console.log("random number : ", winner);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "users",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var users, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_web3_roulette__WEBPACK_IMPORTED_MODULE_4__["viewUsers"])();

            case 2:
              users = _context2.sent;
              _context2.next = 5;
              return users.toNumber();

            case 5:
              result = _context2.sent;
              console.log(result);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "result",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var winner_result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(_web3_roulette__WEBPACK_IMPORTED_MODULE_4__["viewResult"])();

            case 2:
              winner_result = _context3.sent;
              console.log("winner name : ", winner_result);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addUser",
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(user) {
        var _ref5, members, nextId;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this.state;

              case 2:
                _ref5 = _context4.sent;
                members = _ref5.members;
                nextId = _ref5.nextId;

                _this.setState({
                  members: _toConsumableArray(members).concat([{
                    id: nextId + 1,
                    name: user
                  }]),
                  nextId: nextId + 1
                });

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x) {
        return _ref4.apply(this, arguments);
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


  _createClass(IndexPage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var addresses;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _web3_provider__WEBPACK_IMPORTED_MODULE_2__["eth"].getAccounts();

              case 2:
                addresses = _context5.sent;
                console.log("Your address : ", addresses);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Roulette on Ethereum"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Please push buttons from the top"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_web3_roulette__WEBPACK_IMPORTED_MODULE_4__["GetOwnerInfo"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_web3_roulette__WEBPACK_IMPORTED_MODULE_4__["GetDeployrInfo"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_web3_roulette__WEBPACK_IMPORTED_MODULE_4__["SetUserInfo"], {
        addUser: this.addUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_web3_List__WEBPACK_IMPORTED_MODULE_5__["List"], {
        members: this.state.members,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.users,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Get Users Number")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.random,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Make random number")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.result,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Show result"))));
    }
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./web3/List.js":
/*!**********************!*\
  !*** ./web3/List.js ***!
  \**********************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider */ "./web3/provider.js");
/* harmony import */ var _web3_artifacts_Roulette_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web3/artifacts/Roulette.json */ "./web3/artifacts/Roulette.json");
var _web3_artifacts_Roulette_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../web3/artifacts/Roulette.json */ "./web3/artifacts/Roulette.json", 1);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
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
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: user.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, "#", user.id, " ", user.name);
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Member List"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, list));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./web3/artifacts/Roulette.json":
/*!**************************************!*\
  !*** ./web3/artifacts/Roulette.json ***!
  \**************************************/
/*! exports provided: contractName, abi, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = {"contractName":"Roulette","abi":[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userNames","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x4ebd3aea"},{"constant":true,"inputs":[],"name":"deployTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x7a40624b"},{"constant":true,"inputs":[],"name":"ownerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x9c675eaa"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"makeRandomNumberTimes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xbf6cb85a"},{"constant":true,"inputs":[],"name":"winner","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xdfbf53ae"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"constant":false,"inputs":[{"name":"_userNames","type":"string"}],"name":"setUserName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x2b5914fe"},{"constant":false,"inputs":[],"name":"generateRandomNumber","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x773a1154"},{"constant":true,"inputs":[],"name":"viewResult","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3cff0380"},{"constant":true,"inputs":[],"name":"viewUsers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x14ebdb79"}],"bytecode":"0x6080604052600060015534801561001557600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060008282540192505081905550610b14806100b56000396000f3fe6080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806314ebdb79146100a95780632b5914fe146100d45780633cff0380146100fd5780634ebd3aea14610128578063773a1154146101655780637a40624b1461017c5780639c675eaa146101a7578063bf6cb85a146101d2578063dfbf53ae1461020f578063f2fde38b1461023a575b600080fd5b3480156100b557600080fd5b506100be610263565b6040516100cb91906109a5565b60405180910390f35b3480156100e057600080fd5b506100fb60048036036100f691908101906107fb565b610270565b005b34801561010957600080fd5b506101126102b2565b60405161011f9190610963565b60405180910390f35b34801561013457600080fd5b5061014f600480360361014a919081019061083c565b61036d565b60405161015c9190610941565b60405180910390f35b34801561017157600080fd5b5061017a610428565b005b34801561018857600080fd5b50610191610531565b60405161019e91906109a5565b60405180910390f35b3480156101b357600080fd5b506101bc610537565b6040516101c99190610926565b60405180910390f35b3480156101de57600080fd5b506101f960048036036101f491908101906107d2565b61055c565b60405161020691906109a5565b60405180910390f35b34801561021b57600080fd5b50610224610574565b60405161023191906109a5565b60405180910390f35b34801561024657600080fd5b50610261600480360361025c91908101906107d2565b61057a565b005b6000600280549050905090565b60028190806001815401808255809150509060018203906000526020600020016000909192909190915090805190602001906102ad9291906106af565b505050565b606060026003548154811015156102c557fe5b906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103635780601f1061033857610100808354040283529160200191610363565b820191906000526020600020905b81548152906001019060200180831161034657829003601f168201915b5050505050905090565b60028181548110151561037c57fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104205780601f106103f557610100808354040283529160200191610420565b820191906000526020600020905b81548152906001019060200180831161040357829003601f168201915b505050505081565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415156104ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104a390610985565b60405180910390fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555060006002805490509050600060014303409050600060018301826001900481151561052257fe5b06905080600381905550505050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915090505481565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105d557600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561063057600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561066c57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106106f057805160ff191683800117855561071e565b8280016001018555821561071e579182015b8281111561071d578251825591602001919060010190610702565b5b50905061072b919061072f565b5090565b61075191905b8082111561074d576000816000905550600101610735565b5090565b90565b60006107608235610a6b565b905092915050565b600082601f830112151561077b57600080fd5b813561078e610789826109ed565b6109c0565b915080825260208301602083018583830111156107aa57600080fd5b6107b5838284610a87565b50505092915050565b60006107ca8235610a7d565b905092915050565b6000602082840312156107e457600080fd5b60006107f284828501610754565b91505092915050565b60006020828403121561080d57600080fd5b600082013567ffffffffffffffff81111561082757600080fd5b61083384828501610768565b91505092915050565b60006020828403121561084e57600080fd5b600061085c848285016107be565b91505092915050565b61086e81610a2f565b82525050565b600061087f82610a24565b808452610893816020860160208601610a96565b61089c81610ac9565b602085010191505092915050565b60006108b582610a19565b8084526108c9816020860160208601610a96565b6108d281610ac9565b602085010191505092915050565b6000601e82527f796f7520616c7265616479206d616b652072616e646f6d206e756d62657200006020830152604082019050919050565b61092081610a61565b82525050565b600060208201905061093b6000830184610865565b92915050565b6000602082019050818103600083015261095b81846108aa565b905092915050565b6000602082019050818103600083015261097d8184610874565b905092915050565b6000602082019050818103600083015261099e816108e0565b9050919050565b60006020820190506109ba6000830184610917565b92915050565b6000604051905081810181811067ffffffffffffffff821117156109e357600080fd5b8060405250919050565b600067ffffffffffffffff821115610a0457600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b6000610a3a82610a41565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a7682610a41565b9050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610ab4578082015181840152602081019050610a99565b83811115610ac3576000848401525b50505050565b6000601f19601f830116905091905056fea265627a7a72305820cf250f8afc21790cba9b50b37720abe7cdf8ee4a78dd90db7b71725bf7902bc66c6578706572696d656e74616cf50037","deployedBytecode":"0x6080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806314ebdb79146100a95780632b5914fe146100d45780633cff0380146100fd5780634ebd3aea14610128578063773a1154146101655780637a40624b1461017c5780639c675eaa146101a7578063bf6cb85a146101d2578063dfbf53ae1461020f578063f2fde38b1461023a575b600080fd5b3480156100b557600080fd5b506100be610263565b6040516100cb91906109a5565b60405180910390f35b3480156100e057600080fd5b506100fb60048036036100f691908101906107fb565b610270565b005b34801561010957600080fd5b506101126102b2565b60405161011f9190610963565b60405180910390f35b34801561013457600080fd5b5061014f600480360361014a919081019061083c565b61036d565b60405161015c9190610941565b60405180910390f35b34801561017157600080fd5b5061017a610428565b005b34801561018857600080fd5b50610191610531565b60405161019e91906109a5565b60405180910390f35b3480156101b357600080fd5b506101bc610537565b6040516101c99190610926565b60405180910390f35b3480156101de57600080fd5b506101f960048036036101f491908101906107d2565b61055c565b60405161020691906109a5565b60405180910390f35b34801561021b57600080fd5b50610224610574565b60405161023191906109a5565b60405180910390f35b34801561024657600080fd5b50610261600480360361025c91908101906107d2565b61057a565b005b6000600280549050905090565b60028190806001815401808255809150509060018203906000526020600020016000909192909190915090805190602001906102ad9291906106af565b505050565b606060026003548154811015156102c557fe5b906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103635780601f1061033857610100808354040283529160200191610363565b820191906000526020600020905b81548152906001019060200180831161034657829003601f168201915b5050505050905090565b60028181548110151561037c57fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104205780601f106103f557610100808354040283529160200191610420565b820191906000526020600020905b81548152906001019060200180831161040357829003601f168201915b505050505081565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415156104ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104a390610985565b60405180910390fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555060006002805490509050600060014303409050600060018301826001900481151561052257fe5b06905080600381905550505050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915090505481565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105d557600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561063057600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561066c57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106106f057805160ff191683800117855561071e565b8280016001018555821561071e579182015b8281111561071d578251825591602001919060010190610702565b5b50905061072b919061072f565b5090565b61075191905b8082111561074d576000816000905550600101610735565b5090565b90565b60006107608235610a6b565b905092915050565b600082601f830112151561077b57600080fd5b813561078e610789826109ed565b6109c0565b915080825260208301602083018583830111156107aa57600080fd5b6107b5838284610a87565b50505092915050565b60006107ca8235610a7d565b905092915050565b6000602082840312156107e457600080fd5b60006107f284828501610754565b91505092915050565b60006020828403121561080d57600080fd5b600082013567ffffffffffffffff81111561082757600080fd5b61083384828501610768565b91505092915050565b60006020828403121561084e57600080fd5b600061085c848285016107be565b91505092915050565b61086e81610a2f565b82525050565b600061087f82610a24565b808452610893816020860160208601610a96565b61089c81610ac9565b602085010191505092915050565b60006108b582610a19565b8084526108c9816020860160208601610a96565b6108d281610ac9565b602085010191505092915050565b6000601e82527f796f7520616c7265616479206d616b652072616e646f6d206e756d62657200006020830152604082019050919050565b61092081610a61565b82525050565b600060208201905061093b6000830184610865565b92915050565b6000602082019050818103600083015261095b81846108aa565b905092915050565b6000602082019050818103600083015261097d8184610874565b905092915050565b6000602082019050818103600083015261099e816108e0565b9050919050565b60006020820190506109ba6000830184610917565b92915050565b6000604051905081810181811067ffffffffffffffff821117156109e357600080fd5b8060405250919050565b600067ffffffffffffffff821115610a0457600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b6000610a3a82610a41565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a7682610a41565b9050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610ab4578082015181840152602081019050610a99565b83811115610ac3576000848401525b50505050565b6000601f19601f830116905091905056fea265627a7a72305820cf250f8afc21790cba9b50b37720abe7cdf8ee4a78dd90db7b71725bf7902bc66c6578706572696d656e74616cf50037","sourceMap":"89:1513:2:-;;;189:1;164:26;;197:84;8:9:-1;5:2;;;30:1;27;20:12;5:2;197:84:2;238:10:1;226:9;;:22;;;;;;;;;;;;;;;;;;239:10:2;227:9;;:22;;;;;;;;;;;;;;;;;;273:1;259:10;;:15;;;;;;;;;;;89:1513;;;;;;","deployedSourceMap":"89:1513:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1514:86;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1514:86:2;;;;;;;;;;;;;;;;;;;;671:97;;8:9:-1;5:2;;;30:1;27;20:12;5:2;671:97:2;;;;;;;;;;;;;;;;;;;1411;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1411:97:2;;;;;;;;;;;;;;;;;;;;380:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;380:25:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;840:539;;8:9:-1;5:2;;;30:1;27;20:12;5:2;840:539:2;;;;;;164:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;164:26:2;;;;;;;;;;;;;;;;;;;;54:24:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;54:24:1;;;;;;;;;;;;;;;;;;;;553:54:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;553:54:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;435:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;435:18:2;;;;;;;;;;;;;;;;;;;;261:288:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;261:288:1;;;;;;;;;;;;;;;;;;;1514:86:2;1555:4;1577:9;:16;;;;1570:23;;1514:86;:::o;671:97::-;735:9;750:10;735:26;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;735:26:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;671:97;:::o;1411:::-;1453:13;1484:9;1494:6;;1484:17;;;;;;;;;;;;;;;;;1477:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1411:97;:::o;380:25::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;840:539::-;1001:1;964:21;:33;986:10;964:33;;;;;;;;;;;;;;;;:38;956:80;;;;;;;;;;;;;;;;;;;;;;;;1046:21;:33;1068:10;1046:33;;;;;;;;;;;;;;;;:35;;;;;;;;;;;;;1092:15;1110:9;:16;;;;1092:34;;1136:17;1181:1;1166:12;:16;1156:27;1136:47;;1193:13;1239:1;1228:10;:12;1214:9;1209:15;;;:32;;;;;;;;1193:48;;1363:8;1354:6;:17;;;;840:539;;;:::o;164:26::-;;;;:::o;54:24:1:-;;;;;;;;;;;;;:::o;553:54:2:-;;;;;;;;;;;;;;;;;:::o;435:18::-;;;;:::o;261:288:1:-;137:9;;;;;;;;;;;123:23;;:10;:23;;;115:32;;;;;;;;414:9;;;;;;;;;;;400:23;;:10;:23;;;392:32;;;;;;;;507:1;486:23;;:9;:23;;;;478:32;;;;;;;;533:9;521;;:21;;;;;;;;;;;;;;;;;;261:288;:::o;89:1513:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5:118:-1:-;;72:46;110:6;97:20;72:46;;;63:55;;57:66;;;;;131:442;;233:3;226:4;218:6;214:17;210:27;203:35;200:2;;;251:1;248;241:12;200:2;288:6;275:20;310:65;325:49;367:6;325:49;;;310:65;;;301:74;;395:6;388:5;381:21;431:4;423:6;419:17;464:4;457:5;453:16;499:3;490:6;485:3;481:16;478:25;475:2;;;516:1;513;506:12;475:2;526:41;560:6;555:3;550;526:41;;;193:380;;;;;;;;581:118;;648:46;686:6;673:20;648:46;;;639:55;;633:66;;;;;706:241;;810:2;798:9;789:7;785:23;781:32;778:2;;;826:1;823;816:12;778:2;861:1;878:53;923:7;914:6;903:9;899:22;878:53;;;868:63;;840:97;772:175;;;;;954:347;;1068:2;1056:9;1047:7;1043:23;1039:32;1036:2;;;1084:1;1081;1074:12;1036:2;1147:1;1136:9;1132:17;1119:31;1170:18;1162:6;1159:30;1156:2;;;1202:1;1199;1192:12;1156:2;1222:63;1277:7;1268:6;1257:9;1253:22;1222:63;;;1212:73;;1098:193;1030:271;;;;;1308:241;;1412:2;1400:9;1391:7;1387:23;1383:32;1380:2;;;1428:1;1425;1418:12;1380:2;1463:1;1480:53;1525:7;1516:6;1505:9;1501:22;1480:53;;;1470:63;;1442:97;1374:175;;;;;1556:110;1629:31;1654:5;1629:31;;;1624:3;1617:44;1611:55;;;1673:300;;1775:39;1808:5;1775:39;;;1831:6;1826:3;1819:19;1843:63;1899:6;1892:4;1887:3;1883:14;1876:4;1869:5;1865:16;1843:63;;;1938:29;1960:6;1938:29;;;1931:4;1926:3;1922:14;1918:50;1911:57;;1755:218;;;;;;1980:292;;2078:35;2107:5;2078:35;;;2130:6;2125:3;2118:19;2142:63;2198:6;2191:4;2186:3;2182:14;2175:4;2168:5;2164:16;2142:63;;;2237:29;2259:6;2237:29;;;2230:4;2225:3;2221:14;2217:50;2210:57;;2058:214;;;;;;2280:296;;2435:2;2430:3;2423:15;2472:66;2467:2;2462:3;2458:12;2451:88;2567:2;2562:3;2558:12;2551:19;;2416:160;;;;2584:110;2657:31;2682:5;2657:31;;;2652:3;2645:44;2639:55;;;2701:193;;2809:2;2798:9;2794:18;2786:26;;2823:61;2881:1;2870:9;2866:17;2857:6;2823:61;;;2780:114;;;;;2901:273;;3025:2;3014:9;3010:18;3002:26;;3075:9;3069:4;3065:20;3061:1;3050:9;3046:17;3039:47;3100:64;3159:4;3150:6;3100:64;;;3092:72;;2996:178;;;;;3181:281;;3309:2;3298:9;3294:18;3286:26;;3359:9;3353:4;3349:20;3345:1;3334:9;3330:17;3323:47;3384:68;3447:4;3438:6;3384:68;;;3376:76;;3280:182;;;;;3469:387;;3650:2;3639:9;3635:18;3627:26;;3700:9;3694:4;3690:20;3686:1;3675:9;3671:17;3664:47;3725:121;3841:4;3725:121;;;3717:129;;3621:235;;;;3863:193;;3971:2;3960:9;3956:18;3948:26;;3985:61;4043:1;4032:9;4028:17;4019:6;3985:61;;;3942:114;;;;;4063:256;;4125:2;4119:9;4109:19;;4163:4;4155:6;4151:17;4262:6;4250:10;4247:22;4226:18;4214:10;4211:34;4208:62;4205:2;;;4283:1;4280;4273:12;4205:2;4303:10;4299:2;4292:22;4103:216;;;;;4326:259;;4470:18;4462:6;4459:30;4456:2;;;4502:1;4499;4492:12;4456:2;4546:4;4542:9;4535:4;4527:6;4523:17;4519:33;4511:41;;4575:4;4569;4565:15;4557:23;;4393:192;;;;4592:88;;4669:5;4663:12;4653:22;;4647:33;;;;4687:92;;4768:5;4762:12;4752:22;;4746:33;;;;4786:105;;4855:31;4880:5;4855:31;;;4844:42;;4838:53;;;;4898:128;;4978:42;4971:5;4967:54;4956:65;;4950:76;;;;5033:79;;5102:5;5091:16;;5085:27;;;;5119:105;;5188:31;5213:5;5188:31;;;5177:42;;5171:53;;;;5231:79;;5300:5;5289:16;;5283:27;;;;5318:145;5399:6;5394:3;5389;5376:30;5455:1;5446:6;5441:3;5437:16;5430:27;5369:94;;;;5472:268;5537:1;5544:101;5558:6;5555:1;5552:13;5544:101;;;5634:1;5629:3;5625:11;5619:18;5615:1;5610:3;5606:11;5599:39;5580:2;5577:1;5573:10;5568:15;;5544:101;;;5660:6;5657:1;5654:13;5651:2;;;5725:1;5716:6;5711:3;5707:16;5700:27;5651:2;5521:219;;;;;5748:97;;5836:2;5832:7;5827:2;5820:5;5816:14;5812:28;5802:38;;5796:49;;;","source":"pragma solidity >0.4.99 <0.6.0;\npragma experimental ABIEncoderV2;\nimport \"./Owned.sol\";\n\ncontract Roulette is Owned{\n\n    // owner can deploy contract at once;\n    uint public deployTime = 0;\n\n    constructor() public{\n        ownerAddr = msg.sender;\n        deployTime += 1;\n    }\n\n    modifier onlyOnce{\n        require(deployTime == 0);\n        _;\n    }\n\n    // candidates\n    string[] public userNames;\n\n    // roulette winner\n    uint public winner;\n\n    // userAddress => make Randome Number Times\n    // user can make random number only once\n    mapping(address => uint ) public makeRandomNumberTimes;\n\n    // set candidate\n    //TODO:onlyOwnerを消すこと\n    function setUserName(string memory _userNames) public {\n        userNames.push(_userNames);\n    }\n\n    // NOTE : this function uses blockhash and it is NOT secure !\n    function generateRandomNumber() public{\n        //TODO:テストのためにrequireをコメントアウト\n        require(makeRandomNumberTimes[msg.sender] == 0,\"you already make random number\");\n        makeRandomNumberTimes[msg.sender]++;\n\n        uint userNumber = userNames.length;\n        bytes32 blockhash = blockhash(block.number - 1);\n        uint mywinner = uint(blockhash) % (userNumber+1);\n        //TODO:配列のあたいの値の入ってない部分がwinnerになるとエラーになる\n        winner = mywinner ;\n    }\n\n    // return wineer name\n    function viewResult() public view returns(string memory){\n        return userNames[winner];\n    }\n\n    function viewUsers() public view returns(uint){\n        return userNames.length;\n    }\n}","sourcePath":"/Users/andy/roulette-ethereum/contracts/Roulette.sol","ast":{"absolutePath":"/Users/andy/roulette-ethereum/contracts/Roulette.sol","exportedSymbols":{"Roulette":[230]},"id":231,"nodeType":"SourceUnit","nodes":[{"id":110,"literals":["solidity",">","0.4",".99","<","0.6",".0"],"nodeType":"PragmaDirective","src":"0:31:2"},{"id":111,"literals":["experimental","ABIEncoderV2"],"nodeType":"PragmaDirective","src":"32:33:2"},{"absolutePath":"/Users/andy/roulette-ethereum/contracts/Owned.sol","file":"./Owned.sol","id":112,"nodeType":"ImportDirective","scope":231,"sourceUnit":109,"src":"66:21:2","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":113,"name":"Owned","nodeType":"UserDefinedTypeName","referencedDeclaration":108,"src":"110:5:2","typeDescriptions":{"typeIdentifier":"t_contract$_Owned_$108","typeString":"contract Owned"}},"id":114,"nodeType":"InheritanceSpecifier","src":"110:5:2"}],"contractDependencies":[108],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":230,"linearizedBaseContracts":[230,108],"name":"Roulette","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":117,"name":"deployTime","nodeType":"VariableDeclaration","scope":230,"src":"164:26:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":115,"name":"uint","nodeType":"ElementaryTypeName","src":"164:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":116,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"189:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"body":{"id":129,"nodeType":"Block","src":"217:64:2","statements":[{"expression":{"argumentTypes":null,"id":123,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":120,"name":"ownerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"227:9:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":121,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":245,"src":"239:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":122,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"239:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"227:22:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":124,"nodeType":"ExpressionStatement","src":"227:22:2"},{"expression":{"argumentTypes":null,"id":127,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":125,"name":"deployTime","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":117,"src":"259:10:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"hexValue":"31","id":126,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"273:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"259:15:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":128,"nodeType":"ExpressionStatement","src":"259:15:2"}]},"documentation":null,"id":130,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":118,"nodeType":"ParameterList","parameters":[],"src":"208:2:2"},"returnParameters":{"id":119,"nodeType":"ParameterList","parameters":[],"src":"217:0:2"},"scope":230,"src":"197:84:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":139,"nodeType":"Block","src":"304:52:2","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":135,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":133,"name":"deployTime","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":117,"src":"322:10:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":134,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"336:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"322:15:2","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":132,"name":"require","nodeType":"Identifier","overloadedDeclarations":[248,249],"referencedDeclaration":248,"src":"314:7:2","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":136,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"314:24:2","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":137,"nodeType":"ExpressionStatement","src":"314:24:2"},{"id":138,"nodeType":"PlaceholderStatement","src":"348:1:2"}]},"documentation":null,"id":140,"name":"onlyOnce","nodeType":"ModifierDefinition","parameters":{"id":131,"nodeType":"ParameterList","parameters":[],"src":"304:0:2"},"src":"287:69:2","visibility":"internal"},{"constant":false,"id":143,"name":"userNames","nodeType":"VariableDeclaration","scope":230,"src":"380:25:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string[]"},"typeName":{"baseType":{"id":141,"name":"string","nodeType":"ElementaryTypeName","src":"380:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"id":142,"length":null,"nodeType":"ArrayTypeName","src":"380:8:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage_ptr","typeString":"string[]"}},"value":null,"visibility":"public"},{"constant":false,"id":145,"name":"winner","nodeType":"VariableDeclaration","scope":230,"src":"435:18:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":144,"name":"uint","nodeType":"ElementaryTypeName","src":"435:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"constant":false,"id":149,"name":"makeRandomNumberTimes","nodeType":"VariableDeclaration","scope":230,"src":"553:54:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":148,"keyType":{"id":146,"name":"address","nodeType":"ElementaryTypeName","src":"561:7:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"553:25:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":147,"name":"uint","nodeType":"ElementaryTypeName","src":"572:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"body":{"id":160,"nodeType":"Block","src":"725:43:2","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":157,"name":"_userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":151,"src":"750:10:2","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"expression":{"argumentTypes":null,"id":154,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"735:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":156,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"735:14:2","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_string_storage_$returns$_t_uint256_$","typeString":"function (string storage ref) returns (uint256)"}},"id":158,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"735:26:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":159,"nodeType":"ExpressionStatement","src":"735:26:2"}]},"documentation":null,"id":161,"implemented":true,"kind":"function","modifiers":[],"name":"setUserName","nodeType":"FunctionDefinition","parameters":{"id":152,"nodeType":"ParameterList","parameters":[{"constant":false,"id":151,"name":"_userNames","nodeType":"VariableDeclaration","scope":161,"src":"692:24:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":150,"name":"string","nodeType":"ElementaryTypeName","src":"692:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"691:26:2"},"returnParameters":{"id":153,"nodeType":"ParameterList","parameters":[],"src":"725:0:2"},"scope":230,"src":"671:97:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":209,"nodeType":"Block","src":"878:501:2","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":170,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":165,"name":"makeRandomNumberTimes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":149,"src":"964:21:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":168,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":166,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":245,"src":"986:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":167,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"986:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"964:33:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":169,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1001:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"964:38:2","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"796f7520616c7265616479206d616b652072616e646f6d206e756d626572","id":171,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"1003:32:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_1305ce81bcbf59c3b6e958d61a071eb5ab9684e6977f0af6d91f2cecefddf5ef","typeString":"literal_string \"you already make random number\""},"value":"you already make random number"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_1305ce81bcbf59c3b6e958d61a071eb5ab9684e6977f0af6d91f2cecefddf5ef","typeString":"literal_string \"you already make random number\""}],"id":164,"name":"require","nodeType":"Identifier","overloadedDeclarations":[248,249],"referencedDeclaration":249,"src":"956:7:2","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":172,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"956:80:2","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":173,"nodeType":"ExpressionStatement","src":"956:80:2"},{"expression":{"argumentTypes":null,"id":178,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"1046:35:2","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":174,"name":"makeRandomNumberTimes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":149,"src":"1046:21:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":177,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":175,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":245,"src":"1068:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":176,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1068:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1046:33:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":179,"nodeType":"ExpressionStatement","src":"1046:35:2"},{"assignments":[181],"declarations":[{"constant":false,"id":181,"name":"userNumber","nodeType":"VariableDeclaration","scope":209,"src":"1092:15:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":180,"name":"uint","nodeType":"ElementaryTypeName","src":"1092:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":184,"initialValue":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":182,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"1110:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":183,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1110:16:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1092:34:2"},{"assignments":[186],"declarations":[{"constant":false,"id":186,"name":"blockhash","nodeType":"VariableDeclaration","scope":209,"src":"1136:17:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":185,"name":"bytes32","nodeType":"ElementaryTypeName","src":"1136:7:2","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"}],"id":193,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":191,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":188,"name":"block","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":235,"src":"1166:5:2","typeDescriptions":{"typeIdentifier":"t_magic_block","typeString":"block"}},"id":189,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"number","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1166:12:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"argumentTypes":null,"hexValue":"31","id":190,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1181:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1166:16:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":187,"name":"blockhash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":236,"src":"1156:9:2","typeDescriptions":{"typeIdentifier":"t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$","typeString":"function (uint256) view returns (bytes32)"}},"id":192,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1156:27:2","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"nodeType":"VariableDeclarationStatement","src":"1136:47:2"},{"assignments":[195],"declarations":[{"constant":false,"id":195,"name":"mywinner","nodeType":"VariableDeclaration","scope":209,"src":"1193:13:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":194,"name":"uint","nodeType":"ElementaryTypeName","src":"1193:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":204,"initialValue":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":203,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":197,"name":"blockhash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":186,"src":"1214:9:2","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes32","typeString":"bytes32"}],"id":196,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"1209:4:2","typeDescriptions":{"typeIdentifier":"t_type$_t_uint256_$","typeString":"type(uint256)"},"typeName":"uint"},"id":198,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1209:15:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"%","rightExpression":{"argumentTypes":null,"components":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":201,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":199,"name":"userNumber","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":181,"src":"1228:10:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"+","rightExpression":{"argumentTypes":null,"hexValue":"31","id":200,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1239:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1228:12:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"id":202,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"1227:14:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1209:32:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1193:48:2"},{"expression":{"argumentTypes":null,"id":207,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":205,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":145,"src":"1354:6:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":206,"name":"mywinner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":195,"src":"1363:8:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1354:17:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":208,"nodeType":"ExpressionStatement","src":"1354:17:2"}]},"documentation":null,"id":210,"implemented":true,"kind":"function","modifiers":[],"name":"generateRandomNumber","nodeType":"FunctionDefinition","parameters":{"id":162,"nodeType":"ParameterList","parameters":[],"src":"869:2:2"},"returnParameters":{"id":163,"nodeType":"ParameterList","parameters":[],"src":"878:0:2"},"scope":230,"src":"840:539:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":219,"nodeType":"Block","src":"1467:41:2","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":215,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"1484:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":217,"indexExpression":{"argumentTypes":null,"id":216,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":145,"src":"1494:6:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1484:17:2","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"functionReturnParameters":214,"id":218,"nodeType":"Return","src":"1477:24:2"}]},"documentation":null,"id":220,"implemented":true,"kind":"function","modifiers":[],"name":"viewResult","nodeType":"FunctionDefinition","parameters":{"id":211,"nodeType":"ParameterList","parameters":[],"src":"1430:2:2"},"returnParameters":{"id":214,"nodeType":"ParameterList","parameters":[{"constant":false,"id":213,"name":"","nodeType":"VariableDeclaration","scope":220,"src":"1453:13:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":212,"name":"string","nodeType":"ElementaryTypeName","src":"1453:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"1452:15:2"},"scope":230,"src":"1411:97:2","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":228,"nodeType":"Block","src":"1560:40:2","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":225,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"1577:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":226,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1577:16:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":224,"id":227,"nodeType":"Return","src":"1570:23:2"}]},"documentation":null,"id":229,"implemented":true,"kind":"function","modifiers":[],"name":"viewUsers","nodeType":"FunctionDefinition","parameters":{"id":221,"nodeType":"ParameterList","parameters":[],"src":"1532:2:2"},"returnParameters":{"id":224,"nodeType":"ParameterList","parameters":[{"constant":false,"id":223,"name":"","nodeType":"VariableDeclaration","scope":229,"src":"1555:4:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":222,"name":"uint","nodeType":"ElementaryTypeName","src":"1555:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1554:6:2"},"scope":230,"src":"1514:86:2","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":231,"src":"89:1513:2"}],"src":"0:1602:2"},"legacyAST":{"absolutePath":"/Users/andy/roulette-ethereum/contracts/Roulette.sol","exportedSymbols":{"Roulette":[230]},"id":231,"nodeType":"SourceUnit","nodes":[{"id":110,"literals":["solidity",">","0.4",".99","<","0.6",".0"],"nodeType":"PragmaDirective","src":"0:31:2"},{"id":111,"literals":["experimental","ABIEncoderV2"],"nodeType":"PragmaDirective","src":"32:33:2"},{"absolutePath":"/Users/andy/roulette-ethereum/contracts/Owned.sol","file":"./Owned.sol","id":112,"nodeType":"ImportDirective","scope":231,"sourceUnit":109,"src":"66:21:2","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":113,"name":"Owned","nodeType":"UserDefinedTypeName","referencedDeclaration":108,"src":"110:5:2","typeDescriptions":{"typeIdentifier":"t_contract$_Owned_$108","typeString":"contract Owned"}},"id":114,"nodeType":"InheritanceSpecifier","src":"110:5:2"}],"contractDependencies":[108],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":230,"linearizedBaseContracts":[230,108],"name":"Roulette","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":117,"name":"deployTime","nodeType":"VariableDeclaration","scope":230,"src":"164:26:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":115,"name":"uint","nodeType":"ElementaryTypeName","src":"164:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":116,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"189:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"body":{"id":129,"nodeType":"Block","src":"217:64:2","statements":[{"expression":{"argumentTypes":null,"id":123,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":120,"name":"ownerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"227:9:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":121,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":245,"src":"239:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":122,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"239:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"227:22:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":124,"nodeType":"ExpressionStatement","src":"227:22:2"},{"expression":{"argumentTypes":null,"id":127,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":125,"name":"deployTime","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":117,"src":"259:10:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"hexValue":"31","id":126,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"273:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"259:15:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":128,"nodeType":"ExpressionStatement","src":"259:15:2"}]},"documentation":null,"id":130,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":118,"nodeType":"ParameterList","parameters":[],"src":"208:2:2"},"returnParameters":{"id":119,"nodeType":"ParameterList","parameters":[],"src":"217:0:2"},"scope":230,"src":"197:84:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":139,"nodeType":"Block","src":"304:52:2","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":135,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":133,"name":"deployTime","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":117,"src":"322:10:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":134,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"336:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"322:15:2","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":132,"name":"require","nodeType":"Identifier","overloadedDeclarations":[248,249],"referencedDeclaration":248,"src":"314:7:2","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":136,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"314:24:2","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":137,"nodeType":"ExpressionStatement","src":"314:24:2"},{"id":138,"nodeType":"PlaceholderStatement","src":"348:1:2"}]},"documentation":null,"id":140,"name":"onlyOnce","nodeType":"ModifierDefinition","parameters":{"id":131,"nodeType":"ParameterList","parameters":[],"src":"304:0:2"},"src":"287:69:2","visibility":"internal"},{"constant":false,"id":143,"name":"userNames","nodeType":"VariableDeclaration","scope":230,"src":"380:25:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string[]"},"typeName":{"baseType":{"id":141,"name":"string","nodeType":"ElementaryTypeName","src":"380:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"id":142,"length":null,"nodeType":"ArrayTypeName","src":"380:8:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage_ptr","typeString":"string[]"}},"value":null,"visibility":"public"},{"constant":false,"id":145,"name":"winner","nodeType":"VariableDeclaration","scope":230,"src":"435:18:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":144,"name":"uint","nodeType":"ElementaryTypeName","src":"435:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"constant":false,"id":149,"name":"makeRandomNumberTimes","nodeType":"VariableDeclaration","scope":230,"src":"553:54:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":148,"keyType":{"id":146,"name":"address","nodeType":"ElementaryTypeName","src":"561:7:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"553:25:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":147,"name":"uint","nodeType":"ElementaryTypeName","src":"572:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"body":{"id":160,"nodeType":"Block","src":"725:43:2","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":157,"name":"_userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":151,"src":"750:10:2","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"expression":{"argumentTypes":null,"id":154,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"735:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":156,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"735:14:2","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_string_storage_$returns$_t_uint256_$","typeString":"function (string storage ref) returns (uint256)"}},"id":158,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"735:26:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":159,"nodeType":"ExpressionStatement","src":"735:26:2"}]},"documentation":null,"id":161,"implemented":true,"kind":"function","modifiers":[],"name":"setUserName","nodeType":"FunctionDefinition","parameters":{"id":152,"nodeType":"ParameterList","parameters":[{"constant":false,"id":151,"name":"_userNames","nodeType":"VariableDeclaration","scope":161,"src":"692:24:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":150,"name":"string","nodeType":"ElementaryTypeName","src":"692:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"691:26:2"},"returnParameters":{"id":153,"nodeType":"ParameterList","parameters":[],"src":"725:0:2"},"scope":230,"src":"671:97:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":209,"nodeType":"Block","src":"878:501:2","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":170,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":165,"name":"makeRandomNumberTimes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":149,"src":"964:21:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":168,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":166,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":245,"src":"986:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":167,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"986:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"964:33:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":169,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1001:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"964:38:2","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"796f7520616c7265616479206d616b652072616e646f6d206e756d626572","id":171,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"1003:32:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_1305ce81bcbf59c3b6e958d61a071eb5ab9684e6977f0af6d91f2cecefddf5ef","typeString":"literal_string \"you already make random number\""},"value":"you already make random number"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_1305ce81bcbf59c3b6e958d61a071eb5ab9684e6977f0af6d91f2cecefddf5ef","typeString":"literal_string \"you already make random number\""}],"id":164,"name":"require","nodeType":"Identifier","overloadedDeclarations":[248,249],"referencedDeclaration":249,"src":"956:7:2","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":172,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"956:80:2","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":173,"nodeType":"ExpressionStatement","src":"956:80:2"},{"expression":{"argumentTypes":null,"id":178,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"1046:35:2","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":174,"name":"makeRandomNumberTimes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":149,"src":"1046:21:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":177,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":175,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":245,"src":"1068:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":176,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1068:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1046:33:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":179,"nodeType":"ExpressionStatement","src":"1046:35:2"},{"assignments":[181],"declarations":[{"constant":false,"id":181,"name":"userNumber","nodeType":"VariableDeclaration","scope":209,"src":"1092:15:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":180,"name":"uint","nodeType":"ElementaryTypeName","src":"1092:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":184,"initialValue":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":182,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"1110:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":183,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1110:16:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1092:34:2"},{"assignments":[186],"declarations":[{"constant":false,"id":186,"name":"blockhash","nodeType":"VariableDeclaration","scope":209,"src":"1136:17:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":185,"name":"bytes32","nodeType":"ElementaryTypeName","src":"1136:7:2","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"}],"id":193,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":191,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":188,"name":"block","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":235,"src":"1166:5:2","typeDescriptions":{"typeIdentifier":"t_magic_block","typeString":"block"}},"id":189,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"number","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1166:12:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"argumentTypes":null,"hexValue":"31","id":190,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1181:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1166:16:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":187,"name":"blockhash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":236,"src":"1156:9:2","typeDescriptions":{"typeIdentifier":"t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$","typeString":"function (uint256) view returns (bytes32)"}},"id":192,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1156:27:2","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"nodeType":"VariableDeclarationStatement","src":"1136:47:2"},{"assignments":[195],"declarations":[{"constant":false,"id":195,"name":"mywinner","nodeType":"VariableDeclaration","scope":209,"src":"1193:13:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":194,"name":"uint","nodeType":"ElementaryTypeName","src":"1193:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":204,"initialValue":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":203,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":197,"name":"blockhash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":186,"src":"1214:9:2","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes32","typeString":"bytes32"}],"id":196,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"1209:4:2","typeDescriptions":{"typeIdentifier":"t_type$_t_uint256_$","typeString":"type(uint256)"},"typeName":"uint"},"id":198,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1209:15:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"%","rightExpression":{"argumentTypes":null,"components":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":201,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":199,"name":"userNumber","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":181,"src":"1228:10:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"+","rightExpression":{"argumentTypes":null,"hexValue":"31","id":200,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1239:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1228:12:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"id":202,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"1227:14:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1209:32:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1193:48:2"},{"expression":{"argumentTypes":null,"id":207,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":205,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":145,"src":"1354:6:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":206,"name":"mywinner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":195,"src":"1363:8:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1354:17:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":208,"nodeType":"ExpressionStatement","src":"1354:17:2"}]},"documentation":null,"id":210,"implemented":true,"kind":"function","modifiers":[],"name":"generateRandomNumber","nodeType":"FunctionDefinition","parameters":{"id":162,"nodeType":"ParameterList","parameters":[],"src":"869:2:2"},"returnParameters":{"id":163,"nodeType":"ParameterList","parameters":[],"src":"878:0:2"},"scope":230,"src":"840:539:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":219,"nodeType":"Block","src":"1467:41:2","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":215,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"1484:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":217,"indexExpression":{"argumentTypes":null,"id":216,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":145,"src":"1494:6:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1484:17:2","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"functionReturnParameters":214,"id":218,"nodeType":"Return","src":"1477:24:2"}]},"documentation":null,"id":220,"implemented":true,"kind":"function","modifiers":[],"name":"viewResult","nodeType":"FunctionDefinition","parameters":{"id":211,"nodeType":"ParameterList","parameters":[],"src":"1430:2:2"},"returnParameters":{"id":214,"nodeType":"ParameterList","parameters":[{"constant":false,"id":213,"name":"","nodeType":"VariableDeclaration","scope":220,"src":"1453:13:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":212,"name":"string","nodeType":"ElementaryTypeName","src":"1453:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"1452:15:2"},"scope":230,"src":"1411:97:2","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":228,"nodeType":"Block","src":"1560:40:2","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":225,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"1577:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":226,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1577:16:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":224,"id":227,"nodeType":"Return","src":"1570:23:2"}]},"documentation":null,"id":229,"implemented":true,"kind":"function","modifiers":[],"name":"viewUsers","nodeType":"FunctionDefinition","parameters":{"id":221,"nodeType":"ParameterList","parameters":[],"src":"1532:2:2"},"returnParameters":{"id":224,"nodeType":"ParameterList","parameters":[{"constant":false,"id":223,"name":"","nodeType":"VariableDeclaration","scope":229,"src":"1555:4:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":222,"name":"uint","nodeType":"ElementaryTypeName","src":"1555:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1554:6:2"},"scope":230,"src":"1514:86:2","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":231,"src":"89:1513:2"}],"src":"0:1602:2"},"compiler":{"name":"solc","version":"0.5.0+commit.1d4f565a.Emscripten.clang"},"networks":{"5777":{"events":{},"links":{},"address":"0xB2897f7d5604c8a2672F8E609CbA1045288D7434","transactionHash":"0x30436d59ab8017587a601056eadc03a4f6d5c4f04c353f0c953de2b2dd4ca0e9"}},"schemaVersion":"3.0.0","updatedAt":"2018-12-29T01:58:47.894Z","devdoc":{"methods":{}},"userdoc":{"methods":{}}};

/***/ }),

/***/ "./web3/provider.js":
/*!**************************!*\
  !*** ./web3/provider.js ***!
  \**************************/
/*! exports provided: getInstance, eth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstance", function() { return getInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eth", function() { return eth; });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! truffle-contract */ "truffle-contract");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(truffle_contract__WEBPACK_IMPORTED_MODULE_1__);
// client/web3/provider.js



var provider = function provider() {
  // If the user has MetaMask:
  if (typeof web3 !== 'undefined') {
    return web3.currentProvider;
  } else {
    console.error("You need to install MetaMask for this app to work!");
  }
};

var getInstance = function getInstance(artifact) {
  var contractObj = truffle_contract__WEBPACK_IMPORTED_MODULE_1___default()(artifact);
  contractObj.setProvider(provider());
  return contractObj.deployed();
};
var eth = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider()).eth;

/***/ }),

/***/ "./web3/roulette.js":
/*!**************************!*\
  !*** ./web3/roulette.js ***!
  \**************************/
/*! exports provided: GetOwnerInfo, GetDeployrInfo, setName, SetUserInfo, generateRandom, viewResult, viewUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOwnerInfo", function() { return GetOwnerInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDeployrInfo", function() { return GetDeployrInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setName", function() { return setName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserInfo", function() { return SetUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandom", function() { return generateRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewResult", function() { return viewResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewUsers", function() { return viewUsers; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider */ "./web3/provider.js");
/* harmony import */ var _web3_artifacts_Roulette_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web3/artifacts/Roulette.json */ "./web3/artifacts/Roulette.json");
var _web3_artifacts_Roulette_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../web3/artifacts/Roulette.json */ "./web3/artifacts/Roulette.json", 1);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);

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




var hexToString = web3__WEBPACK_IMPORTED_MODULE_4___default.a.utils.hexToString; // export const getOwnerInfo = async()  => {
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
              return Object(_provider__WEBPACK_IMPORTED_MODULE_2__["getInstance"])(_web3_artifacts_Roulette_json__WEBPACK_IMPORTED_MODULE_3__);

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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.handleOnClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Get Owner Address"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), "Owner Address is : ", this.state.address);
    }
  }]);

  return GetOwnerInfo;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component); // export const getDeployrInfo = async()  => {
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
              return Object(_provider__WEBPACK_IMPORTED_MODULE_2__["getInstance"])(_web3_artifacts_Roulette_json__WEBPACK_IMPORTED_MODULE_3__);

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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.handleOnClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Get Deploy Time"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), "Deployed Time is : ", this.state.time);
    }
  }]);

  return GetDeployrInfo;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
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
            return Object(_provider__WEBPACK_IMPORTED_MODULE_2__["getInstance"])(_web3_artifacts_Roulette_json__WEBPACK_IMPORTED_MODULE_3__);

          case 2:
            storage = _context3.sent;
            _context3.next = 5;
            return _provider__WEBPACK_IMPORTED_MODULE_2__["eth"].getAccounts();

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

              case 5:
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Input user Name:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        value: this.state.value,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      })));
    }
  }]);

  return SetUserInfo;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
var generateRandom =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
    var storage, addresses;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return Object(_provider__WEBPACK_IMPORTED_MODULE_2__["getInstance"])(_web3_artifacts_Roulette_json__WEBPACK_IMPORTED_MODULE_3__);

          case 2:
            storage = _context6.sent;
            _context6.next = 5;
            return _provider__WEBPACK_IMPORTED_MODULE_2__["eth"].getAccounts();

          case 5:
            addresses = _context6.sent;
            _context6.next = 8;
            return storage.generateRandomNumber({
              from: addresses[0]
            });

          case 8:
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
var viewResult =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
    var storage, addresses, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return Object(_provider__WEBPACK_IMPORTED_MODULE_2__["getInstance"])(_web3_artifacts_Roulette_json__WEBPACK_IMPORTED_MODULE_3__);

          case 2:
            storage = _context7.sent;
            _context7.next = 5;
            return _provider__WEBPACK_IMPORTED_MODULE_2__["eth"].getAccounts();

          case 5:
            addresses = _context7.sent;
            _context7.next = 8;
            return storage.viewResult({
              from: addresses[0]
            });

          case 8:
            result = _context7.sent;
            return _context7.abrupt("return", result);

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function viewResult() {
    return _ref5.apply(this, arguments);
  };
}();
var viewUsers =
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
            return Object(_provider__WEBPACK_IMPORTED_MODULE_2__["getInstance"])(_web3_artifacts_Roulette_json__WEBPACK_IMPORTED_MODULE_3__);

          case 2:
            storage = _context8.sent;
            _context8.next = 5;
            return _provider__WEBPACK_IMPORTED_MODULE_2__["eth"].getAccounts();

          case 5:
            addresses = _context8.sent;
            _context8.next = 8;
            return storage.viewUsers({
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

  return function viewUsers() {
    return _ref6.apply(this, arguments);
  };
}();

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "truffle-contract":
/*!***********************************!*\
  !*** external "truffle-contract" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("truffle-contract");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map