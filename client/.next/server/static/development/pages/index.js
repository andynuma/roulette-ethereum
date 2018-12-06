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

var _jsxFileName = "/Users/andy/roulette-ethereum/client/pages/index.js";


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





var IndexPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndexPage, _React$Component);

  function IndexPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IndexPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IndexPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "owner",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var ownerInfo;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_web3_roulette__WEBPACK_IMPORTED_MODULE_4__["getOwnerInfo"])();

            case 2:
              ownerInfo = _context.sent;
              console.log(ownerInfo);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "deploy",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var deployInfo;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_web3_roulette__WEBPACK_IMPORTED_MODULE_4__["getDeployrInfo"])();

            case 2:
              deployInfo = _context2.sent;
              console.log(deployInfo);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "random",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var storage, temp, winner;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(_web3_roulette__WEBPACK_IMPORTED_MODULE_4__["generateRandom"])();

            case 2:
              _context3.next = 4;
              return Object(_web3_provider__WEBPACK_IMPORTED_MODULE_2__["getInstance"])(_web3_artifacts_Roulette__WEBPACK_IMPORTED_MODULE_3__);

            case 4:
              storage = _context3.sent;
              _context3.next = 7;
              return storage.winner.call();

            case 7:
              temp = _context3.sent;
              _context3.next = 10;
              return temp.toNumber();

            case 10:
              winner = _context3.sent;
              console.log("random number : ", winner); // const array = await storage.userNames.call()
              // console.log(array)

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "users",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var users, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Object(_web3_roulette__WEBPACK_IMPORTED_MODULE_4__["viewUsers"])();

            case 2:
              users = _context4.sent;
              _context4.next = 5;
              return users.toNumber();

            case 5:
              result = _context4.sent;
              console.log(result);

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "result",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      var winner_result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return Object(_web3_roulette__WEBPACK_IMPORTED_MODULE_4__["viewResult"])();

            case 2:
              winner_result = _context5.sent;
              console.log("winner name : ", winner_result);

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    })));

    return _this;
  }

  _createClass(IndexPage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var addresses;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _web3_provider__WEBPACK_IMPORTED_MODULE_2__["eth"].getAccounts();

              case 2:
                addresses = _context6.sent;
                console.log("Your address : ", addresses); // const array = await storage.userNames.call()
                // console.log(array)
                // console.log("aaa")
                // const storage = await getInstance(Roulette)
                // console.log("storage:", storage)

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
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
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Roulette on Ethereum"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Please push buttons from the top"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.owner,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Get Owner address")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.deploy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Get deploy time")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_web3_roulette__WEBPACK_IMPORTED_MODULE_4__["SetUserInfo"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.users,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Get Users Number")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.random,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Make random number")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.result,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Show result"))));
    }
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./web3/artifacts/Roulette.json":
/*!**************************************!*\
  !*** ./web3/artifacts/Roulette.json ***!
  \**************************************/
/*! exports provided: contractName, abi, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, default */
/***/ (function(module) {

module.exports = {"contractName":"Roulette","abi":[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userNames","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"deployTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ownerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"makeRandomNumberTimes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"winner","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"name":"_userNames","type":"string"}],"name":"setUserName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"generateRandomNumber","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"viewResult","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewUsers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],"bytecode":"0x6080604052600060015534801561001557600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060008282540192505081905550610b6f806100b56000396000f3006080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806314ebdb79146100a95780632b5914fe146100d45780633cff0380146100fd5780634ebd3aea14610128578063773a1154146101655780637a40624b1461017c5780639c675eaa146101a7578063bf6cb85a146101d2578063dfbf53ae1461020f578063f2fde38b1461023a575b600080fd5b3480156100b557600080fd5b506100be610263565b6040516100cb9190610a04565b60405180910390f35b3480156100e057600080fd5b506100fb60048036036100f6919081019061085a565b610270565b005b34801561010957600080fd5b5061011261030d565b60405161011f91906109c2565b60405180910390f35b34801561013457600080fd5b5061014f600480360361014a919081019061089b565b6103c8565b60405161015c91906109a0565b60405180910390f35b34801561017157600080fd5b5061017a610483565b005b34801561018857600080fd5b50610191610590565b60405161019e9190610a04565b60405180910390f35b3480156101b357600080fd5b506101bc610596565b6040516101c99190610985565b60405180910390f35b3480156101de57600080fd5b506101f960048036036101f49190810190610831565b6105bb565b6040516102069190610a04565b60405180910390f35b34801561021b57600080fd5b506102246105d3565b6040516102319190610a04565b60405180910390f35b34801561024657600080fd5b50610261600480360361025c9190810190610831565b6105d9565b005b6000600280549050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156102cb57600080fd5b600281908060018154018082558091505090600182039060005260206000200160009091929091909150908051906020019061030892919061070e565b505050565b6060600260035481548110151561032057fe5b906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103be5780601f10610393576101008083540402835291602001916103be565b820191906000526020600020905b8154815290600101906020018083116103a157829003601f168201915b5050505050905090565b6002818154811015156103d757fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561047b5780601f106104505761010080835404028352916020019161047b565b820191906000526020600020905b81548152906001019060200180831161045e57829003601f168201915b505050505081565b600080600080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414151561050b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610502906109e4565b60405180910390fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555060028054905092506001430340915060018301826001900463ffffffff1681151561058157fe5b06905080600381905550505050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915090505481565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561063457600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561068f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156106cb57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061074f57805160ff191683800117855561077d565b8280016001018555821561077d579182015b8281111561077c578251825591602001919060010190610761565b5b50905061078a919061078e565b5090565b6107b091905b808211156107ac576000816000905550600101610794565b5090565b90565b60006107bf8235610ab8565b905092915050565b600082601f83011215156107da57600080fd5b81356107ed6107e882610a4c565b610a1f565b9150808252602083016020830185838301111561080957600080fd5b610814838284610ae2565b50505092915050565b60006108298235610ad8565b905092915050565b60006020828403121561084357600080fd5b6000610851848285016107b3565b91505092915050565b60006020828403121561086c57600080fd5b600082013567ffffffffffffffff81111561088657600080fd5b610892848285016107c7565b91505092915050565b6000602082840312156108ad57600080fd5b60006108bb8482850161081d565b91505092915050565b6108cd81610a8e565b82525050565b60006108de82610a83565b8084526108f2816020860160208601610af1565b6108fb81610b24565b602085010191505092915050565b600061091482610a78565b808452610928816020860160208601610af1565b61093181610b24565b602085010191505092915050565b6000601e82527f796f7520616c7265616479206d616b652072616e646f6d206e756d62657200006020830152604082019050919050565b61097f81610aae565b82525050565b600060208201905061099a60008301846108c4565b92915050565b600060208201905081810360008301526109ba8184610909565b905092915050565b600060208201905081810360008301526109dc81846108d3565b905092915050565b600060208201905081810360008301526109fd8161093f565b9050919050565b6000602082019050610a196000830184610976565b92915050565b6000604051905081810181811067ffffffffffffffff82111715610a4257600080fd5b8060405250919050565b600067ffffffffffffffff821115610a6357600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610b0f578082015181840152602081019050610af4565b83811115610b1e576000848401525b50505050565b6000601f19601f83011690509190505600a265627a7a72305820235083084220f77a2b7bed6c5aa58d7b4bf5ac79cb100bfd404c485ee75dd6bb6c6578706572696d656e74616cf50037","deployedBytecode":"0x6080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806314ebdb79146100a95780632b5914fe146100d45780633cff0380146100fd5780634ebd3aea14610128578063773a1154146101655780637a40624b1461017c5780639c675eaa146101a7578063bf6cb85a146101d2578063dfbf53ae1461020f578063f2fde38b1461023a575b600080fd5b3480156100b557600080fd5b506100be610263565b6040516100cb9190610a04565b60405180910390f35b3480156100e057600080fd5b506100fb60048036036100f6919081019061085a565b610270565b005b34801561010957600080fd5b5061011261030d565b60405161011f91906109c2565b60405180910390f35b34801561013457600080fd5b5061014f600480360361014a919081019061089b565b6103c8565b60405161015c91906109a0565b60405180910390f35b34801561017157600080fd5b5061017a610483565b005b34801561018857600080fd5b50610191610590565b60405161019e9190610a04565b60405180910390f35b3480156101b357600080fd5b506101bc610596565b6040516101c99190610985565b60405180910390f35b3480156101de57600080fd5b506101f960048036036101f49190810190610831565b6105bb565b6040516102069190610a04565b60405180910390f35b34801561021b57600080fd5b506102246105d3565b6040516102319190610a04565b60405180910390f35b34801561024657600080fd5b50610261600480360361025c9190810190610831565b6105d9565b005b6000600280549050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156102cb57600080fd5b600281908060018154018082558091505090600182039060005260206000200160009091929091909150908051906020019061030892919061070e565b505050565b6060600260035481548110151561032057fe5b906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103be5780601f10610393576101008083540402835291602001916103be565b820191906000526020600020905b8154815290600101906020018083116103a157829003601f168201915b5050505050905090565b6002818154811015156103d757fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561047b5780601f106104505761010080835404028352916020019161047b565b820191906000526020600020905b81548152906001019060200180831161045e57829003601f168201915b505050505081565b600080600080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414151561050b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610502906109e4565b60405180910390fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555060028054905092506001430340915060018301826001900463ffffffff1681151561058157fe5b06905080600381905550505050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915090505481565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561063457600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561068f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156106cb57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061074f57805160ff191683800117855561077d565b8280016001018555821561077d579182015b8281111561077c578251825591602001919060010190610761565b5b50905061078a919061078e565b5090565b6107b091905b808211156107ac576000816000905550600101610794565b5090565b90565b60006107bf8235610ab8565b905092915050565b600082601f83011215156107da57600080fd5b81356107ed6107e882610a4c565b610a1f565b9150808252602083016020830185838301111561080957600080fd5b610814838284610ae2565b50505092915050565b60006108298235610ad8565b905092915050565b60006020828403121561084357600080fd5b6000610851848285016107b3565b91505092915050565b60006020828403121561086c57600080fd5b600082013567ffffffffffffffff81111561088657600080fd5b610892848285016107c7565b91505092915050565b6000602082840312156108ad57600080fd5b60006108bb8482850161081d565b91505092915050565b6108cd81610a8e565b82525050565b60006108de82610a83565b8084526108f2816020860160208601610af1565b6108fb81610b24565b602085010191505092915050565b600061091482610a78565b808452610928816020860160208601610af1565b61093181610b24565b602085010191505092915050565b6000601e82527f796f7520616c7265616479206d616b652072616e646f6d206e756d62657200006020830152604082019050919050565b61097f81610aae565b82525050565b600060208201905061099a60008301846108c4565b92915050565b600060208201905081810360008301526109ba8184610909565b905092915050565b600060208201905081810360008301526109dc81846108d3565b905092915050565b600060208201905081810360008301526109fd8161093f565b9050919050565b6000602082019050610a196000830184610976565b92915050565b6000604051905081810181811067ffffffffffffffff82111715610a4257600080fd5b8060405250919050565b600067ffffffffffffffff821115610a6357600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610b0f578082015181840152602081019050610af4565b83811115610b1e576000848401525b50505050565b6000601f19601f83011690509190505600a265627a7a72305820235083084220f77a2b7bed6c5aa58d7b4bf5ac79cb100bfd404c485ee75dd6bb6c6578706572696d656e74616cf50037","sourceMap":"82:1561:1:-;;;182:1;157:26;;190:77;8:9:-1;5:2;;;30:1;27;20:12;5:2;190:77:1;231:10:0;219:9;;:22;;;;;;;;;;;;;;;;;;225:10:1;213:9;;:22;;;;;;;;;;;;;;;;;;259:1;245:10;;:15;;;;;;;;;;;82:1561;;;;;;","deployedSourceMap":"82:1561:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1554:86;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1554:86:1;;;;;;;;;;;;;;;;;;;;683:100;;8:9:-1;5:2;;;30:1;27;20:12;5:2;683:100:1;;;;;;;;;;;;;;;;;;;1458:90;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1458:90:1;;;;;;;;;;;;;;;;;;;;366:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;366:25:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;855:571;;8:9:-1;5:2;;;30:1;27;20:12;5:2;855:571:1;;;;;;157:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;157:26:1;;;;;;;;;;;;;;;;;;;;47:24:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;47:24:0;;;;;;;;;;;;;;;;;;;;539:54:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;539:54:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;421:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;421:18:1;;;;;;;;;;;;;;;;;;;;254:288:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;254:288:0;;;;;;;;;;;;;;;;;;;1554:86:1;1595:4;1617:9;:16;;;;1610:23;;1554:86;:::o;683:100::-;130:9:0;;;;;;;;;;;116:23;;:10;:23;;;108:32;;;;;;;;750:9:1;765:10;750:26;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;750:26:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;683:100;:::o;1458:90::-;1500:6;1524:9;1534:6;;1524:17;;;;;;;;;;;;;;;;;1517:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1458:90;:::o;366:25::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;855:571::-;1131:15;1175:17;1238:13;1040:1;1003:21;:33;1025:10;1003:33;;;;;;;;;;;;;;;;:38;995:80;;;;;;;;;;;;;;;;;;;;;;;;1085:21;:33;1107:10;1085:33;;;;;;;;;;;;;;;;:35;;;;;;;;;;;;;1149:9;:16;;;;1131:34;;1226:1;1211:12;:16;1195:33;1175:53;;1286:1;1275:10;:12;1261:9;1254:17;;;:34;;;;;;;;;;1238:50;;1410:8;1401:6;:17;;;;855:571;;;:::o;157:26::-;;;;:::o;47:24:0:-;;;;;;;;;;;;;:::o;539:54:1:-;;;;;;;;;;;;;;;;;:::o;421:18::-;;;;:::o;254:288:0:-;130:9;;;;;;;;;;;116:23;;:10;:23;;;108:32;;;;;;;;407:9;;;;;;;;;;;393:23;;:10;:23;;;385:32;;;;;;;;500:1;479:23;;:9;:23;;;;471:32;;;;;;;;526:9;514;;:21;;;;;;;;;;;;;;;;;;254:288;:::o;82:1561:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5:118:-1:-;;72:46;110:6;97:20;72:46;;;63:55;;57:66;;;;;131:442;;233:3;226:4;218:6;214:17;210:27;203:35;200:2;;;251:1;248;241:12;200:2;288:6;275:20;310:65;325:49;367:6;325:49;;;310:65;;;301:74;;395:6;388:5;381:21;431:4;423:6;419:17;464:4;457:5;453:16;499:3;490:6;485:3;481:16;478:25;475:2;;;516:1;513;506:12;475:2;526:41;560:6;555:3;550;526:41;;;193:380;;;;;;;;581:118;;648:46;686:6;673:20;648:46;;;639:55;;633:66;;;;;706:241;;810:2;798:9;789:7;785:23;781:32;778:2;;;826:1;823;816:12;778:2;861:1;878:53;923:7;914:6;903:9;899:22;878:53;;;868:63;;840:97;772:175;;;;;954:347;;1068:2;1056:9;1047:7;1043:23;1039:32;1036:2;;;1084:1;1081;1074:12;1036:2;1147:1;1136:9;1132:17;1119:31;1170:18;1162:6;1159:30;1156:2;;;1202:1;1199;1192:12;1156:2;1222:63;1277:7;1268:6;1257:9;1253:22;1222:63;;;1212:73;;1098:193;1030:271;;;;;1308:241;;1412:2;1400:9;1391:7;1387:23;1383:32;1380:2;;;1428:1;1425;1418:12;1380:2;1463:1;1480:53;1525:7;1516:6;1505:9;1501:22;1480:53;;;1470:63;;1442:97;1374:175;;;;;1556:110;1629:31;1654:5;1629:31;;;1624:3;1617:44;1611:55;;;1673:300;;1775:39;1808:5;1775:39;;;1831:6;1826:3;1819:19;1843:63;1899:6;1892:4;1887:3;1883:14;1876:4;1869:5;1865:16;1843:63;;;1938:29;1960:6;1938:29;;;1931:4;1926:3;1922:14;1918:50;1911:57;;1755:218;;;;;;1980:292;;2078:35;2107:5;2078:35;;;2130:6;2125:3;2118:19;2142:63;2198:6;2191:4;2186:3;2182:14;2175:4;2168:5;2164:16;2142:63;;;2237:29;2259:6;2237:29;;;2230:4;2225:3;2221:14;2217:50;2210:57;;2058:214;;;;;;2280:296;;2435:2;2430:3;2423:15;2472:66;2467:2;2462:3;2458:12;2451:88;2567:2;2562:3;2558:12;2551:19;;2416:160;;;;2584:110;2657:31;2682:5;2657:31;;;2652:3;2645:44;2639:55;;;2701:193;;2809:2;2798:9;2794:18;2786:26;;2823:61;2881:1;2870:9;2866:17;2857:6;2823:61;;;2780:114;;;;;2901:273;;3025:2;3014:9;3010:18;3002:26;;3075:9;3069:4;3065:20;3061:1;3050:9;3046:17;3039:47;3100:64;3159:4;3150:6;3100:64;;;3092:72;;2996:178;;;;;3181:281;;3309:2;3298:9;3294:18;3286:26;;3359:9;3353:4;3349:20;3345:1;3334:9;3330:17;3323:47;3384:68;3447:4;3438:6;3384:68;;;3376:76;;3280:182;;;;;3469:387;;3650:2;3639:9;3635:18;3627:26;;3700:9;3694:4;3690:20;3686:1;3675:9;3671:17;3664:47;3725:121;3841:4;3725:121;;;3717:129;;3621:235;;;;3863:193;;3971:2;3960:9;3956:18;3948:26;;3985:61;4043:1;4032:9;4028:17;4019:6;3985:61;;;3942:114;;;;;4063:256;;4125:2;4119:9;4109:19;;4163:4;4155:6;4151:17;4262:6;4250:10;4247:22;4226:18;4214:10;4211:34;4208:62;4205:2;;;4283:1;4280;4273:12;4205:2;4303:10;4299:2;4292:22;4103:216;;;;;4326:259;;4470:18;4462:6;4459:30;4456:2;;;4502:1;4499;4492:12;4456:2;4546:4;4542:9;4535:4;4527:6;4523:17;4519:33;4511:41;;4575:4;4569;4565:15;4557:23;;4393:192;;;;4592:88;;4669:5;4663:12;4653:22;;4647:33;;;;4687:92;;4768:5;4762:12;4752:22;;4746:33;;;;4786:128;;4866:42;4859:5;4855:54;4844:65;;4838:76;;;;4921:79;;4990:5;4979:16;;4973:27;;;;5007:128;;5087:42;5080:5;5076:54;5065:65;;5059:76;;;;5142:79;;5211:5;5200:16;;5194:27;;;;5229:145;5310:6;5305:3;5300;5287:30;5366:1;5357:6;5352:3;5348:16;5341:27;5280:94;;;;5383:268;5448:1;5455:101;5469:6;5466:1;5463:13;5455:101;;;5545:1;5540:3;5536:11;5530:18;5526:1;5521:3;5517:11;5510:39;5491:2;5488:1;5484:10;5479:15;;5455:101;;;5571:6;5568:1;5565:13;5562:2;;;5636:1;5627:6;5622:3;5618:16;5611:27;5562:2;5432:219;;;;;5659:97;;5747:2;5743:7;5738:2;5731:5;5727:14;5723:28;5713:38;;5707:49;;;","source":"pragma solidity ^0.4.19;\npragma experimental ABIEncoderV2;\nimport \"./Owned.sol\";\n\ncontract Roulette is Owned{\n\n    // owner can deploy contract at once;\n    uint public deployTime = 0;\n\n    constructor(){\n        ownerAddr = msg.sender;\n        deployTime += 1;\n    }\n\n    modifier onlyOnce{\n        require(deployTime == 0);\n        _;\n    }\n\n    // candidates\n    string[] public userNames;\n\n    // roulette winner\n    uint public winner;\n\n    // userAddress => make Randome Number Times\n    // user can make random number only once\n    mapping(address => uint ) public makeRandomNumberTimes;\n\n    // set candidate\n    //TODO:あとでonlyOwnerとonlyOnceを付け足すこと\n    function setUserName(string _userNames) public onlyOwner {\n        userNames.push(_userNames);\n    }\n\n    // NOTE : this function uses blockhash and it is NOT secure !\n    function generateRandomNumber() public{\n        //TODO:テストのためにrequireをコメントアウトしているので注意\n        require(makeRandomNumberTimes[msg.sender] == 0,\"you already make random number\");\n        makeRandomNumberTimes[msg.sender]++;\n\n        uint userNumber = userNames.length;\n        bytes32 blockhash = block.blockhash(block.number - 1);\n        uint mywinner = uint32(blockhash) % (userNumber+1);\n        //TODO:配列のあたいの値の入ってない部分がwinnerになるとエラーになる\n        winner = mywinner ;\n    }\n\n    // return wineer name\n    function viewResult() public view returns(string){\n        return userNames[winner];\n    }\n\n    function viewUsers() public view returns(uint){\n        return userNames.length;\n    }\n\n}","sourcePath":"/Users/andy/roulette-ethereum/contracts/Roulette.sol","ast":{"absolutePath":"/Users/andy/roulette-ethereum/contracts/Roulette.sol","exportedSymbols":{"Roulette":[176]},"id":177,"nodeType":"SourceUnit","nodes":[{"id":53,"literals":["solidity","^","0.4",".19"],"nodeType":"PragmaDirective","src":"0:24:1"},{"id":54,"literals":["experimental","ABIEncoderV2"],"nodeType":"PragmaDirective","src":"25:33:1"},{"absolutePath":"/Users/andy/roulette-ethereum/contracts/Owned.sol","file":"./Owned.sol","id":55,"nodeType":"ImportDirective","scope":177,"sourceUnit":52,"src":"59:21:1","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":56,"name":"Owned","nodeType":"UserDefinedTypeName","referencedDeclaration":51,"src":"103:5:1","typeDescriptions":{"typeIdentifier":"t_contract$_Owned_$51","typeString":"contract Owned"}},"id":57,"nodeType":"InheritanceSpecifier","src":"103:5:1"}],"contractDependencies":[51],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":176,"linearizedBaseContracts":[176,51],"name":"Roulette","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":60,"name":"deployTime","nodeType":"VariableDeclaration","scope":176,"src":"157:26:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":58,"name":"uint","nodeType":"ElementaryTypeName","src":"157:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":59,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"182:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"body":{"id":72,"nodeType":"Block","src":"203:64:1","statements":[{"expression":{"argumentTypes":null,"id":66,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":63,"name":"ownerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":3,"src":"213:9:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":64,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":191,"src":"225:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":65,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"225:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"213:22:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":67,"nodeType":"ExpressionStatement","src":"213:22:1"},{"expression":{"argumentTypes":null,"id":70,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":68,"name":"deployTime","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"245:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"hexValue":"31","id":69,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"259:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"245:15:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":71,"nodeType":"ExpressionStatement","src":"245:15:1"}]},"documentation":null,"id":73,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":61,"nodeType":"ParameterList","parameters":[],"src":"201:2:1"},"payable":false,"returnParameters":{"id":62,"nodeType":"ParameterList","parameters":[],"src":"203:0:1"},"scope":176,"src":"190:77:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":82,"nodeType":"Block","src":"290:52:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":78,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":76,"name":"deployTime","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"308:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":77,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"322:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"308:15:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":75,"name":"require","nodeType":"Identifier","overloadedDeclarations":[194,195],"referencedDeclaration":194,"src":"300:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":79,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"300:24:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":80,"nodeType":"ExpressionStatement","src":"300:24:1"},{"id":81,"nodeType":"PlaceholderStatement","src":"334:1:1"}]},"documentation":null,"id":83,"name":"onlyOnce","nodeType":"ModifierDefinition","parameters":{"id":74,"nodeType":"ParameterList","parameters":[],"src":"290:0:1"},"src":"273:69:1","visibility":"internal"},{"constant":false,"id":86,"name":"userNames","nodeType":"VariableDeclaration","scope":176,"src":"366:25:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string[]"},"typeName":{"baseType":{"id":84,"name":"string","nodeType":"ElementaryTypeName","src":"366:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"id":85,"length":null,"nodeType":"ArrayTypeName","src":"366:8:1","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage_ptr","typeString":"string[]"}},"value":null,"visibility":"public"},{"constant":false,"id":88,"name":"winner","nodeType":"VariableDeclaration","scope":176,"src":"421:18:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":87,"name":"uint","nodeType":"ElementaryTypeName","src":"421:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"constant":false,"id":92,"name":"makeRandomNumberTimes","nodeType":"VariableDeclaration","scope":176,"src":"539:54:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":91,"keyType":{"id":89,"name":"address","nodeType":"ElementaryTypeName","src":"547:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"539:25:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":90,"name":"uint","nodeType":"ElementaryTypeName","src":"558:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"body":{"id":105,"nodeType":"Block","src":"740:43:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":102,"name":"_userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":94,"src":"765:10:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"expression":{"argumentTypes":null,"id":99,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":86,"src":"750:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":101,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"750:14:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_string_storage_$returns$_t_uint256_$","typeString":"function (string storage ref) returns (uint256)"}},"id":103,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"750:26:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":104,"nodeType":"ExpressionStatement","src":"750:26:1"}]},"documentation":null,"id":106,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":null,"id":97,"modifierName":{"argumentTypes":null,"id":96,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":14,"src":"730:9:1","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"730:9:1"}],"name":"setUserName","nodeType":"FunctionDefinition","parameters":{"id":95,"nodeType":"ParameterList","parameters":[{"constant":false,"id":94,"name":"_userNames","nodeType":"VariableDeclaration","scope":106,"src":"704:17:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":93,"name":"string","nodeType":"ElementaryTypeName","src":"704:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"703:19:1"},"payable":false,"returnParameters":{"id":98,"nodeType":"ParameterList","parameters":[],"src":"740:0:1"},"scope":176,"src":"683:100:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":155,"nodeType":"Block","src":"893:533:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":115,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":110,"name":"makeRandomNumberTimes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":92,"src":"1003:21:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":113,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":111,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":191,"src":"1025:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":112,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1025:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1003:33:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":114,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1040:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"1003:38:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"796f7520616c7265616479206d616b652072616e646f6d206e756d626572","id":116,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"1042:32:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_1305ce81bcbf59c3b6e958d61a071eb5ab9684e6977f0af6d91f2cecefddf5ef","typeString":"literal_string \"you already make random number\""},"value":"you already make random number"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_1305ce81bcbf59c3b6e958d61a071eb5ab9684e6977f0af6d91f2cecefddf5ef","typeString":"literal_string \"you already make random number\""}],"id":109,"name":"require","nodeType":"Identifier","overloadedDeclarations":[194,195],"referencedDeclaration":195,"src":"995:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":117,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"995:80:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":118,"nodeType":"ExpressionStatement","src":"995:80:1"},{"expression":{"argumentTypes":null,"id":123,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"1085:35:1","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":119,"name":"makeRandomNumberTimes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":92,"src":"1085:21:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":122,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":120,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":191,"src":"1107:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":121,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1107:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1085:33:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":124,"nodeType":"ExpressionStatement","src":"1085:35:1"},{"assignments":[126],"declarations":[{"constant":false,"id":126,"name":"userNumber","nodeType":"VariableDeclaration","scope":156,"src":"1131:15:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":125,"name":"uint","nodeType":"ElementaryTypeName","src":"1131:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":129,"initialValue":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":127,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":86,"src":"1149:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":128,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1149:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1131:34:1"},{"assignments":[131],"declarations":[{"constant":false,"id":131,"name":"blockhash","nodeType":"VariableDeclaration","scope":156,"src":"1175:17:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":130,"name":"bytes32","nodeType":"ElementaryTypeName","src":"1175:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"}],"id":139,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":137,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":134,"name":"block","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":181,"src":"1211:5:1","typeDescriptions":{"typeIdentifier":"t_magic_block","typeString":"block"}},"id":135,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"number","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1211:12:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"argumentTypes":null,"hexValue":"31","id":136,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1226:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1211:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":132,"name":"block","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":181,"src":"1195:5:1","typeDescriptions":{"typeIdentifier":"t_magic_block","typeString":"block"}},"id":133,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"blockhash","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1195:15:1","typeDescriptions":{"typeIdentifier":"t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$","typeString":"function (uint256) view returns (bytes32)"}},"id":138,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1195:33:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"nodeType":"VariableDeclarationStatement","src":"1175:53:1"},{"assignments":[141],"declarations":[{"constant":false,"id":141,"name":"mywinner","nodeType":"VariableDeclaration","scope":156,"src":"1238:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":140,"name":"uint","nodeType":"ElementaryTypeName","src":"1238:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":150,"initialValue":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":149,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":143,"name":"blockhash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":131,"src":"1261:9:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes32","typeString":"bytes32"}],"id":142,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"1254:6:1","typeDescriptions":{"typeIdentifier":"t_type$_t_uint32_$","typeString":"type(uint32)"},"typeName":"uint32"},"id":144,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1254:17:1","typeDescriptions":{"typeIdentifier":"t_uint32","typeString":"uint32"}},"nodeType":"BinaryOperation","operator":"%","rightExpression":{"argumentTypes":null,"components":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":147,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":145,"name":"userNumber","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":126,"src":"1275:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"+","rightExpression":{"argumentTypes":null,"hexValue":"31","id":146,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1286:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1275:12:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"id":148,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"1274:14:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1254:34:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1238:50:1"},{"expression":{"argumentTypes":null,"id":153,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":151,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":88,"src":"1401:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":152,"name":"mywinner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":141,"src":"1410:8:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1401:17:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":154,"nodeType":"ExpressionStatement","src":"1401:17:1"}]},"documentation":null,"id":156,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"generateRandomNumber","nodeType":"FunctionDefinition","parameters":{"id":107,"nodeType":"ParameterList","parameters":[],"src":"884:2:1"},"payable":false,"returnParameters":{"id":108,"nodeType":"ParameterList","parameters":[],"src":"893:0:1"},"scope":176,"src":"855:571:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":165,"nodeType":"Block","src":"1507:41:1","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":161,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":86,"src":"1524:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":163,"indexExpression":{"argumentTypes":null,"id":162,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":88,"src":"1534:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1524:17:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"functionReturnParameters":160,"id":164,"nodeType":"Return","src":"1517:24:1"}]},"documentation":null,"id":166,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"viewResult","nodeType":"FunctionDefinition","parameters":{"id":157,"nodeType":"ParameterList","parameters":[],"src":"1477:2:1"},"payable":false,"returnParameters":{"id":160,"nodeType":"ParameterList","parameters":[{"constant":false,"id":159,"name":"","nodeType":"VariableDeclaration","scope":166,"src":"1500:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":158,"name":"string","nodeType":"ElementaryTypeName","src":"1500:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"1499:8:1"},"scope":176,"src":"1458:90:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":174,"nodeType":"Block","src":"1600:40:1","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":171,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":86,"src":"1617:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":172,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1617:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":170,"id":173,"nodeType":"Return","src":"1610:23:1"}]},"documentation":null,"id":175,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"viewUsers","nodeType":"FunctionDefinition","parameters":{"id":167,"nodeType":"ParameterList","parameters":[],"src":"1572:2:1"},"payable":false,"returnParameters":{"id":170,"nodeType":"ParameterList","parameters":[{"constant":false,"id":169,"name":"","nodeType":"VariableDeclaration","scope":175,"src":"1595:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":168,"name":"uint","nodeType":"ElementaryTypeName","src":"1595:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1594:6:1"},"scope":176,"src":"1554:86:1","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":177,"src":"82:1561:1"}],"src":"0:1643:1"},"legacyAST":{"absolutePath":"/Users/andy/roulette-ethereum/contracts/Roulette.sol","exportedSymbols":{"Roulette":[176]},"id":177,"nodeType":"SourceUnit","nodes":[{"id":53,"literals":["solidity","^","0.4",".19"],"nodeType":"PragmaDirective","src":"0:24:1"},{"id":54,"literals":["experimental","ABIEncoderV2"],"nodeType":"PragmaDirective","src":"25:33:1"},{"absolutePath":"/Users/andy/roulette-ethereum/contracts/Owned.sol","file":"./Owned.sol","id":55,"nodeType":"ImportDirective","scope":177,"sourceUnit":52,"src":"59:21:1","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":56,"name":"Owned","nodeType":"UserDefinedTypeName","referencedDeclaration":51,"src":"103:5:1","typeDescriptions":{"typeIdentifier":"t_contract$_Owned_$51","typeString":"contract Owned"}},"id":57,"nodeType":"InheritanceSpecifier","src":"103:5:1"}],"contractDependencies":[51],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":176,"linearizedBaseContracts":[176,51],"name":"Roulette","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":60,"name":"deployTime","nodeType":"VariableDeclaration","scope":176,"src":"157:26:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":58,"name":"uint","nodeType":"ElementaryTypeName","src":"157:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":59,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"182:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"body":{"id":72,"nodeType":"Block","src":"203:64:1","statements":[{"expression":{"argumentTypes":null,"id":66,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":63,"name":"ownerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":3,"src":"213:9:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":64,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":191,"src":"225:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":65,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"225:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"213:22:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":67,"nodeType":"ExpressionStatement","src":"213:22:1"},{"expression":{"argumentTypes":null,"id":70,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":68,"name":"deployTime","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"245:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"hexValue":"31","id":69,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"259:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"245:15:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":71,"nodeType":"ExpressionStatement","src":"245:15:1"}]},"documentation":null,"id":73,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":61,"nodeType":"ParameterList","parameters":[],"src":"201:2:1"},"payable":false,"returnParameters":{"id":62,"nodeType":"ParameterList","parameters":[],"src":"203:0:1"},"scope":176,"src":"190:77:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":82,"nodeType":"Block","src":"290:52:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":78,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":76,"name":"deployTime","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"308:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":77,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"322:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"308:15:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":75,"name":"require","nodeType":"Identifier","overloadedDeclarations":[194,195],"referencedDeclaration":194,"src":"300:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":79,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"300:24:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":80,"nodeType":"ExpressionStatement","src":"300:24:1"},{"id":81,"nodeType":"PlaceholderStatement","src":"334:1:1"}]},"documentation":null,"id":83,"name":"onlyOnce","nodeType":"ModifierDefinition","parameters":{"id":74,"nodeType":"ParameterList","parameters":[],"src":"290:0:1"},"src":"273:69:1","visibility":"internal"},{"constant":false,"id":86,"name":"userNames","nodeType":"VariableDeclaration","scope":176,"src":"366:25:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string[]"},"typeName":{"baseType":{"id":84,"name":"string","nodeType":"ElementaryTypeName","src":"366:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"id":85,"length":null,"nodeType":"ArrayTypeName","src":"366:8:1","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage_ptr","typeString":"string[]"}},"value":null,"visibility":"public"},{"constant":false,"id":88,"name":"winner","nodeType":"VariableDeclaration","scope":176,"src":"421:18:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":87,"name":"uint","nodeType":"ElementaryTypeName","src":"421:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"constant":false,"id":92,"name":"makeRandomNumberTimes","nodeType":"VariableDeclaration","scope":176,"src":"539:54:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":91,"keyType":{"id":89,"name":"address","nodeType":"ElementaryTypeName","src":"547:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"539:25:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":90,"name":"uint","nodeType":"ElementaryTypeName","src":"558:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"body":{"id":105,"nodeType":"Block","src":"740:43:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":102,"name":"_userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":94,"src":"765:10:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"expression":{"argumentTypes":null,"id":99,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":86,"src":"750:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":101,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"750:14:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_string_storage_$returns$_t_uint256_$","typeString":"function (string storage ref) returns (uint256)"}},"id":103,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"750:26:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":104,"nodeType":"ExpressionStatement","src":"750:26:1"}]},"documentation":null,"id":106,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":null,"id":97,"modifierName":{"argumentTypes":null,"id":96,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":14,"src":"730:9:1","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"730:9:1"}],"name":"setUserName","nodeType":"FunctionDefinition","parameters":{"id":95,"nodeType":"ParameterList","parameters":[{"constant":false,"id":94,"name":"_userNames","nodeType":"VariableDeclaration","scope":106,"src":"704:17:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":93,"name":"string","nodeType":"ElementaryTypeName","src":"704:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"703:19:1"},"payable":false,"returnParameters":{"id":98,"nodeType":"ParameterList","parameters":[],"src":"740:0:1"},"scope":176,"src":"683:100:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":155,"nodeType":"Block","src":"893:533:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":115,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":110,"name":"makeRandomNumberTimes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":92,"src":"1003:21:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":113,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":111,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":191,"src":"1025:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":112,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1025:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1003:33:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":114,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1040:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"1003:38:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"796f7520616c7265616479206d616b652072616e646f6d206e756d626572","id":116,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"1042:32:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_1305ce81bcbf59c3b6e958d61a071eb5ab9684e6977f0af6d91f2cecefddf5ef","typeString":"literal_string \"you already make random number\""},"value":"you already make random number"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_1305ce81bcbf59c3b6e958d61a071eb5ab9684e6977f0af6d91f2cecefddf5ef","typeString":"literal_string \"you already make random number\""}],"id":109,"name":"require","nodeType":"Identifier","overloadedDeclarations":[194,195],"referencedDeclaration":195,"src":"995:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":117,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"995:80:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":118,"nodeType":"ExpressionStatement","src":"995:80:1"},{"expression":{"argumentTypes":null,"id":123,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"1085:35:1","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":119,"name":"makeRandomNumberTimes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":92,"src":"1085:21:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":122,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":120,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":191,"src":"1107:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":121,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1107:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1085:33:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":124,"nodeType":"ExpressionStatement","src":"1085:35:1"},{"assignments":[126],"declarations":[{"constant":false,"id":126,"name":"userNumber","nodeType":"VariableDeclaration","scope":156,"src":"1131:15:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":125,"name":"uint","nodeType":"ElementaryTypeName","src":"1131:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":129,"initialValue":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":127,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":86,"src":"1149:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":128,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1149:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1131:34:1"},{"assignments":[131],"declarations":[{"constant":false,"id":131,"name":"blockhash","nodeType":"VariableDeclaration","scope":156,"src":"1175:17:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":130,"name":"bytes32","nodeType":"ElementaryTypeName","src":"1175:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"}],"id":139,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":137,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":134,"name":"block","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":181,"src":"1211:5:1","typeDescriptions":{"typeIdentifier":"t_magic_block","typeString":"block"}},"id":135,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"number","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1211:12:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"argumentTypes":null,"hexValue":"31","id":136,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1226:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1211:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":132,"name":"block","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":181,"src":"1195:5:1","typeDescriptions":{"typeIdentifier":"t_magic_block","typeString":"block"}},"id":133,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"blockhash","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1195:15:1","typeDescriptions":{"typeIdentifier":"t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$","typeString":"function (uint256) view returns (bytes32)"}},"id":138,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1195:33:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"nodeType":"VariableDeclarationStatement","src":"1175:53:1"},{"assignments":[141],"declarations":[{"constant":false,"id":141,"name":"mywinner","nodeType":"VariableDeclaration","scope":156,"src":"1238:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":140,"name":"uint","nodeType":"ElementaryTypeName","src":"1238:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":150,"initialValue":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":149,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":143,"name":"blockhash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":131,"src":"1261:9:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes32","typeString":"bytes32"}],"id":142,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"1254:6:1","typeDescriptions":{"typeIdentifier":"t_type$_t_uint32_$","typeString":"type(uint32)"},"typeName":"uint32"},"id":144,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1254:17:1","typeDescriptions":{"typeIdentifier":"t_uint32","typeString":"uint32"}},"nodeType":"BinaryOperation","operator":"%","rightExpression":{"argumentTypes":null,"components":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":147,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":145,"name":"userNumber","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":126,"src":"1275:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"+","rightExpression":{"argumentTypes":null,"hexValue":"31","id":146,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1286:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1275:12:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"id":148,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"1274:14:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1254:34:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1238:50:1"},{"expression":{"argumentTypes":null,"id":153,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":151,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":88,"src":"1401:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":152,"name":"mywinner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":141,"src":"1410:8:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1401:17:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":154,"nodeType":"ExpressionStatement","src":"1401:17:1"}]},"documentation":null,"id":156,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"generateRandomNumber","nodeType":"FunctionDefinition","parameters":{"id":107,"nodeType":"ParameterList","parameters":[],"src":"884:2:1"},"payable":false,"returnParameters":{"id":108,"nodeType":"ParameterList","parameters":[],"src":"893:0:1"},"scope":176,"src":"855:571:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":165,"nodeType":"Block","src":"1507:41:1","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":161,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":86,"src":"1524:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":163,"indexExpression":{"argumentTypes":null,"id":162,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":88,"src":"1534:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1524:17:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"functionReturnParameters":160,"id":164,"nodeType":"Return","src":"1517:24:1"}]},"documentation":null,"id":166,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"viewResult","nodeType":"FunctionDefinition","parameters":{"id":157,"nodeType":"ParameterList","parameters":[],"src":"1477:2:1"},"payable":false,"returnParameters":{"id":160,"nodeType":"ParameterList","parameters":[{"constant":false,"id":159,"name":"","nodeType":"VariableDeclaration","scope":166,"src":"1500:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":158,"name":"string","nodeType":"ElementaryTypeName","src":"1500:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"1499:8:1"},"scope":176,"src":"1458:90:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":174,"nodeType":"Block","src":"1600:40:1","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":171,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":86,"src":"1617:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":172,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1617:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":170,"id":173,"nodeType":"Return","src":"1610:23:1"}]},"documentation":null,"id":175,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"viewUsers","nodeType":"FunctionDefinition","parameters":{"id":167,"nodeType":"ParameterList","parameters":[],"src":"1572:2:1"},"payable":false,"returnParameters":{"id":170,"nodeType":"ParameterList","parameters":[{"constant":false,"id":169,"name":"","nodeType":"VariableDeclaration","scope":175,"src":"1595:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":168,"name":"uint","nodeType":"ElementaryTypeName","src":"1595:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1594:6:1"},"scope":176,"src":"1554:86:1","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":177,"src":"82:1561:1"}],"src":"0:1643:1"},"compiler":{"name":"solc","version":"0.4.24+commit.e67f0147.Emscripten.clang"},"networks":{"5777":{"events":{},"links":{},"address":"0xd0494623cdda487bac980469df65baab2e3b544f","transactionHash":"0x017bd19de24014bf1d43097ceee826fcae004e0173189764fc7bbdf15e4d38d3"}},"schemaVersion":"2.0.1","updatedAt":"2018-12-06T08:34:38.493Z"};

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
/*! exports provided: getOwnerInfo, getDeployrInfo, setName, SetUserInfo, generateRandom, viewResult, viewUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnerInfo", function() { return getOwnerInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeployrInfo", function() { return getDeployrInfo; });
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var hexToString = web3__WEBPACK_IMPORTED_MODULE_4___default.a.utils.hexToString;
var getOwnerInfo =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
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
            return _context.abrupt("return", ownerProfile);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getOwnerInfo() {
    return _ref.apply(this, arguments);
  };
}();
var getDeployrInfo =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
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
            result = deployTime.toNumber();
            return _context2.abrupt("return", result);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getDeployrInfo() {
    return _ref2.apply(this, arguments);
  };
}();
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
function (_React$Component) {
  _inherits(SetUserInfo, _React$Component);

  function SetUserInfo(props) {
    var _this;

    _classCallCheck(this, SetUserInfo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SetUserInfo).call(this, props));
    _this.state = {
      value: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Input user Name:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        value: this.state.value,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }));
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