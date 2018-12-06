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
              console.log(winner);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "result",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var winner_result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Object(_web3_roulette__WEBPACK_IMPORTED_MODULE_4__["viewResult"])();

            case 2:
              winner_result = _context4.sent;
              console.log(winner_result);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    })));

    return _this;
  }

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
                console.log(addresses); // console.log("aaa")
                // const storage = await getInstance(Roulette)
                // console.log("storage:", storage)

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
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.owner,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Get Owner address"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.deploy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Get deploy time"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_web3_roulette__WEBPACK_IMPORTED_MODULE_4__["SetUserInfo"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.random,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "set random number"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.result,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Get result"));
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

module.exports = {"contractName":"Roulette","abi":[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userNames","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"deployTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ownerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"makeRandomNumberTimes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"winner","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"name":"_userNames","type":"string"}],"name":"setUserName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"generateRandomNumber","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"viewResult","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}],"bytecode":"0x6080604052600060015534801561001557600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060008282540192505081905550610a52806100b56000396000f300608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632b5914fe1461009e5780633cff0380146100c75780634ebd3aea146100f2578063773a11541461012f5780637a40624b146101465780639c675eaa14610171578063bf6cb85a1461019c578063dfbf53ae146101d9578063f2fde38b14610204575b600080fd5b3480156100aa57600080fd5b506100c560048036036100c09190810190610794565b61022d565b005b3480156100d357600080fd5b506100dc6102ca565b6040516100e991906108c5565b60405180910390f35b3480156100fe57600080fd5b50610119600480360361011491908101906107d5565b610385565b60405161012691906108a3565b60405180910390f35b34801561013b57600080fd5b50610144610440565b005b34801561015257600080fd5b5061015b6104ca565b60405161016891906108e7565b60405180910390f35b34801561017d57600080fd5b506101866104d0565b6040516101939190610888565b60405180910390f35b3480156101a857600080fd5b506101c360048036036101be919081019061076b565b6104f5565b6040516101d091906108e7565b60405180910390f35b3480156101e557600080fd5b506101ee61050d565b6040516101fb91906108e7565b60405180910390f35b34801561021057600080fd5b5061022b6004803603610226919081019061076b565b610513565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561028857600080fd5b60028190806001815401808255809150509060018203906000526020600020016000909192909190915090805190602001906102c5929190610648565b505050565b606060026003548154811015156102dd57fe5b906000526020600020018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561037b5780601f106103505761010080835404028352916020019161037b565b820191906000526020600020905b81548152906001019060200180831161035e57829003601f168201915b5050505050905090565b60028181548110151561039457fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104385780601f1061040d57610100808354040283529160200191610438565b820191906000526020600020905b81548152906001019060200180831161041b57829003601f168201915b505050505081565b6000806000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555060028054905092506001430340915060018301826001900463ffffffff168115156104bb57fe5b06905080600381905550505050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915090505481565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561056e57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105c957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561060557600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061068957805160ff19168380011785556106b7565b828001600101855582156106b7579182015b828111156106b657825182559160200191906001019061069b565b5b5090506106c491906106c8565b5090565b6106ea91905b808211156106e65760008160009055506001016106ce565b5090565b90565b60006106f9823561099b565b905092915050565b600082601f830112151561071457600080fd5b81356107276107228261092f565b610902565b9150808252602083016020830185838301111561074357600080fd5b61074e8382846109c5565b50505092915050565b600061076382356109bb565b905092915050565b60006020828403121561077d57600080fd5b600061078b848285016106ed565b91505092915050565b6000602082840312156107a657600080fd5b600082013567ffffffffffffffff8111156107c057600080fd5b6107cc84828501610701565b91505092915050565b6000602082840312156107e757600080fd5b60006107f584828501610757565b91505092915050565b61080781610971565b82525050565b600061081882610966565b80845261082c8160208601602086016109d4565b61083581610a07565b602085010191505092915050565b600061084e8261095b565b8084526108628160208601602086016109d4565b61086b81610a07565b602085010191505092915050565b61088281610991565b82525050565b600060208201905061089d60008301846107fe565b92915050565b600060208201905081810360008301526108bd8184610843565b905092915050565b600060208201905081810360008301526108df818461080d565b905092915050565b60006020820190506108fc6000830184610879565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561092557600080fd5b8060405250919050565b600067ffffffffffffffff82111561094657600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156109f25780820151818401526020810190506109d7565b83811115610a01576000848401525b50505050565b6000601f19601f83011690509190505600a265627a7a72305820e3942c4fff7bce663c623cf3917ae2f538d16ccca0f1eafa76ced4728ff55c566c6578706572696d656e74616cf50037","deployedBytecode":"0x608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632b5914fe1461009e5780633cff0380146100c75780634ebd3aea146100f2578063773a11541461012f5780637a40624b146101465780639c675eaa14610171578063bf6cb85a1461019c578063dfbf53ae146101d9578063f2fde38b14610204575b600080fd5b3480156100aa57600080fd5b506100c560048036036100c09190810190610794565b61022d565b005b3480156100d357600080fd5b506100dc6102ca565b6040516100e991906108c5565b60405180910390f35b3480156100fe57600080fd5b50610119600480360361011491908101906107d5565b610385565b60405161012691906108a3565b60405180910390f35b34801561013b57600080fd5b50610144610440565b005b34801561015257600080fd5b5061015b6104ca565b60405161016891906108e7565b60405180910390f35b34801561017d57600080fd5b506101866104d0565b6040516101939190610888565b60405180910390f35b3480156101a857600080fd5b506101c360048036036101be919081019061076b565b6104f5565b6040516101d091906108e7565b60405180910390f35b3480156101e557600080fd5b506101ee61050d565b6040516101fb91906108e7565b60405180910390f35b34801561021057600080fd5b5061022b6004803603610226919081019061076b565b610513565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561028857600080fd5b60028190806001815401808255809150509060018203906000526020600020016000909192909190915090805190602001906102c5929190610648565b505050565b606060026003548154811015156102dd57fe5b906000526020600020018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561037b5780601f106103505761010080835404028352916020019161037b565b820191906000526020600020905b81548152906001019060200180831161035e57829003601f168201915b5050505050905090565b60028181548110151561039457fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104385780601f1061040d57610100808354040283529160200191610438565b820191906000526020600020905b81548152906001019060200180831161041b57829003601f168201915b505050505081565b6000806000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555060028054905092506001430340915060018301826001900463ffffffff168115156104bb57fe5b06905080600381905550505050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915090505481565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561056e57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105c957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561060557600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061068957805160ff19168380011785556106b7565b828001600101855582156106b7579182015b828111156106b657825182559160200191906001019061069b565b5b5090506106c491906106c8565b5090565b6106ea91905b808211156106e65760008160009055506001016106ce565b5090565b90565b60006106f9823561099b565b905092915050565b600082601f830112151561071457600080fd5b81356107276107228261092f565b610902565b9150808252602083016020830185838301111561074357600080fd5b61074e8382846109c5565b50505092915050565b600061076382356109bb565b905092915050565b60006020828403121561077d57600080fd5b600061078b848285016106ed565b91505092915050565b6000602082840312156107a657600080fd5b600082013567ffffffffffffffff8111156107c057600080fd5b6107cc84828501610701565b91505092915050565b6000602082840312156107e757600080fd5b60006107f584828501610757565b91505092915050565b61080781610971565b82525050565b600061081882610966565b80845261082c8160208601602086016109d4565b61083581610a07565b602085010191505092915050565b600061084e8261095b565b8084526108628160208601602086016109d4565b61086b81610a07565b602085010191505092915050565b61088281610991565b82525050565b600060208201905061089d60008301846107fe565b92915050565b600060208201905081810360008301526108bd8184610843565b905092915050565b600060208201905081810360008301526108df818461080d565b905092915050565b60006020820190506108fc6000830184610879565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561092557600080fd5b8060405250919050565b600067ffffffffffffffff82111561094657600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156109f25780820151818401526020810190506109d7565b83811115610a01576000848401525b50505050565b6000601f19601f83011690509190505600a265627a7a72305820e3942c4fff7bce663c623cf3917ae2f538d16ccca0f1eafa76ced4728ff55c566c6578706572696d656e74616cf50037","sourceMap":"82:1380:1:-;;;182:1;157:26;;190:77;8:9:-1;5:2;;;30:1;27;20:12;5:2;190:77:1;231:10:0;219:9;;:22;;;;;;;;;;;;;;;;;;225:10:1;213:9;;:22;;;;;;;;;;;;;;;;;;259:1;245:10;;:15;;;;;;;;;;;82:1380;;;;;;","deployedSourceMap":"82:1380:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;683:100;;8:9:-1;5:2;;;30:1;27;20:12;5:2;683:100:1;;;;;;;;;;;;;;;;;;;1369:90;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1369:90:1;;;;;;;;;;;;;;;;;;;;366:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;366:25:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;855:482;;8:9:-1;5:2;;;30:1;27;20:12;5:2;855:482:1;;;;;;157:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;157:26:1;;;;;;;;;;;;;;;;;;;;47:24:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;47:24:0;;;;;;;;;;;;;;;;;;;;539:54:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;539:54:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;421:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;421:18:1;;;;;;;;;;;;;;;;;;;;254:288:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;254:288:0;;;;;;;;;;;;;;;;;;;683:100:1;130:9:0;;;;;;;;;;;116:23;;:10;:23;;;108:32;;;;;;;;750:9:1;765:10;750:26;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;750:26:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;683:100;:::o;1369:90::-;1411:6;1435:9;1445:6;;1435:17;;;;;;;;;;;;;;;;;1428:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1369:90;:::o;366:25::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;855:482::-;1042:15;1086:17;1149:13;996:21;:33;1018:10;996:33;;;;;;;;;;;;;;;;:35;;;;;;;;;;;;;1060:9;:16;;;;1042:34;;1137:1;1122:12;:16;1106:33;1086:53;;1197:1;1186:10;:12;1172:9;1165:17;;;:34;;;;;;;;;;1149:50;;1321:8;1312:6;:17;;;;855:482;;;:::o;157:26::-;;;;:::o;47:24:0:-;;;;;;;;;;;;;:::o;539:54:1:-;;;;;;;;;;;;;;;;;:::o;421:18::-;;;;:::o;254:288:0:-;130:9;;;;;;;;;;;116:23;;:10;:23;;;108:32;;;;;;;;407:9;;;;;;;;;;;393:23;;:10;:23;;;385:32;;;;;;;;500:1;479:23;;:9;:23;;;;471:32;;;;;;;;526:9;514;;:21;;;;;;;;;;;;;;;;;;254:288;:::o;82:1380:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5:118:-1:-;;72:46;110:6;97:20;72:46;;;63:55;;57:66;;;;;131:442;;233:3;226:4;218:6;214:17;210:27;203:35;200:2;;;251:1;248;241:12;200:2;288:6;275:20;310:65;325:49;367:6;325:49;;;310:65;;;301:74;;395:6;388:5;381:21;431:4;423:6;419:17;464:4;457:5;453:16;499:3;490:6;485:3;481:16;478:25;475:2;;;516:1;513;506:12;475:2;526:41;560:6;555:3;550;526:41;;;193:380;;;;;;;;581:118;;648:46;686:6;673:20;648:46;;;639:55;;633:66;;;;;706:241;;810:2;798:9;789:7;785:23;781:32;778:2;;;826:1;823;816:12;778:2;861:1;878:53;923:7;914:6;903:9;899:22;878:53;;;868:63;;840:97;772:175;;;;;954:347;;1068:2;1056:9;1047:7;1043:23;1039:32;1036:2;;;1084:1;1081;1074:12;1036:2;1147:1;1136:9;1132:17;1119:31;1170:18;1162:6;1159:30;1156:2;;;1202:1;1199;1192:12;1156:2;1222:63;1277:7;1268:6;1257:9;1253:22;1222:63;;;1212:73;;1098:193;1030:271;;;;;1308:241;;1412:2;1400:9;1391:7;1387:23;1383:32;1380:2;;;1428:1;1425;1418:12;1380:2;1463:1;1480:53;1525:7;1516:6;1505:9;1501:22;1480:53;;;1470:63;;1442:97;1374:175;;;;;1556:110;1629:31;1654:5;1629:31;;;1624:3;1617:44;1611:55;;;1673:300;;1775:39;1808:5;1775:39;;;1831:6;1826:3;1819:19;1843:63;1899:6;1892:4;1887:3;1883:14;1876:4;1869:5;1865:16;1843:63;;;1938:29;1960:6;1938:29;;;1931:4;1926:3;1922:14;1918:50;1911:57;;1755:218;;;;;;1980:292;;2078:35;2107:5;2078:35;;;2130:6;2125:3;2118:19;2142:63;2198:6;2191:4;2186:3;2182:14;2175:4;2168:5;2164:16;2142:63;;;2237:29;2259:6;2237:29;;;2230:4;2225:3;2221:14;2217:50;2210:57;;2058:214;;;;;;2279:110;2352:31;2377:5;2352:31;;;2347:3;2340:44;2334:55;;;2396:193;;2504:2;2493:9;2489:18;2481:26;;2518:61;2576:1;2565:9;2561:17;2552:6;2518:61;;;2475:114;;;;;2596:273;;2720:2;2709:9;2705:18;2697:26;;2770:9;2764:4;2760:20;2756:1;2745:9;2741:17;2734:47;2795:64;2854:4;2845:6;2795:64;;;2787:72;;2691:178;;;;;2876:281;;3004:2;2993:9;2989:18;2981:26;;3054:9;3048:4;3044:20;3040:1;3029:9;3025:17;3018:47;3079:68;3142:4;3133:6;3079:68;;;3071:76;;2975:182;;;;;3164:193;;3272:2;3261:9;3257:18;3249:26;;3286:61;3344:1;3333:9;3329:17;3320:6;3286:61;;;3243:114;;;;;3364:256;;3426:2;3420:9;3410:19;;3464:4;3456:6;3452:17;3563:6;3551:10;3548:22;3527:18;3515:10;3512:34;3509:62;3506:2;;;3584:1;3581;3574:12;3506:2;3604:10;3600:2;3593:22;3404:216;;;;;3627:259;;3771:18;3763:6;3760:30;3757:2;;;3803:1;3800;3793:12;3757:2;3847:4;3843:9;3836:4;3828:6;3824:17;3820:33;3812:41;;3876:4;3870;3866:15;3858:23;;3694:192;;;;3893:88;;3970:5;3964:12;3954:22;;3948:33;;;;3988:92;;4069:5;4063:12;4053:22;;4047:33;;;;4087:128;;4167:42;4160:5;4156:54;4145:65;;4139:76;;;;4222:79;;4291:5;4280:16;;4274:27;;;;4308:128;;4388:42;4381:5;4377:54;4366:65;;4360:76;;;;4443:79;;4512:5;4501:16;;4495:27;;;;4530:145;4611:6;4606:3;4601;4588:30;4667:1;4658:6;4653:3;4649:16;4642:27;4581:94;;;;4684:268;4749:1;4756:101;4770:6;4767:1;4764:13;4756:101;;;4846:1;4841:3;4837:11;4831:18;4827:1;4822:3;4818:11;4811:39;4792:2;4789:1;4785:10;4780:15;;4756:101;;;4872:6;4869:1;4866:13;4863:2;;;4937:1;4928:6;4923:3;4919:16;4912:27;4863:2;4733:219;;;;;4960:97;;5048:2;5044:7;5039:2;5032:5;5028:14;5024:28;5014:38;;5008:49;;;","source":"pragma solidity ^0.4.19;\npragma experimental ABIEncoderV2;\nimport \"./Owned.sol\";\n\ncontract Roulette is Owned{\n\n    // owner can deploy contract at once;\n    uint public deployTime = 0;\n\n    constructor(){\n        ownerAddr = msg.sender;\n        deployTime += 1;\n    }\n\n    modifier onlyOnce{\n        require(deployTime == 0);\n        _;\n    }\n\n    // candidates\n    string[] public userNames;\n\n    // roulette winner\n    uint public winner;\n\n    // userAddress => make Randome Number Times\n    // user can make random number only once\n    mapping(address => uint ) public makeRandomNumberTimes;\n\n    // set candidate\n    //TODO:あとでonlyOwnerとonlyOnceを付け足すこと\n    function setUserName(string _userNames) public onlyOwner {\n        userNames.push(_userNames);\n    }\n\n    // NOTE : this function uses blockhash and it is NOT secure !\n    function generateRandomNumber() public{\n        // require(makeRandomNumberTimes[msg.sender] == 0,\"you already make random number\");\n        makeRandomNumberTimes[msg.sender]++;\n\n        uint userNumber = userNames.length;\n        bytes32 blockhash = block.blockhash(block.number - 1);\n        uint mywinner = uint32(blockhash) % (userNumber+1);\n        //TODO:配列のあたいの値の入ってない部分がwinnerになるとエラーになる\n        winner = mywinner ;\n    }\n\n    // return wineer name\n    function viewResult() public view returns(string){\n        return userNames[winner];\n    }\n\n}","sourcePath":"/Users/andy/roulette-ethereum/contracts/Roulette.sol","ast":{"absolutePath":"/Users/andy/roulette-ethereum/contracts/Roulette.sol","exportedSymbols":{"Roulette":[157]},"id":158,"nodeType":"SourceUnit","nodes":[{"id":53,"literals":["solidity","^","0.4",".19"],"nodeType":"PragmaDirective","src":"0:24:1"},{"id":54,"literals":["experimental","ABIEncoderV2"],"nodeType":"PragmaDirective","src":"25:33:1"},{"absolutePath":"/Users/andy/roulette-ethereum/contracts/Owned.sol","file":"./Owned.sol","id":55,"nodeType":"ImportDirective","scope":158,"sourceUnit":52,"src":"59:21:1","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":56,"name":"Owned","nodeType":"UserDefinedTypeName","referencedDeclaration":51,"src":"103:5:1","typeDescriptions":{"typeIdentifier":"t_contract$_Owned_$51","typeString":"contract Owned"}},"id":57,"nodeType":"InheritanceSpecifier","src":"103:5:1"}],"contractDependencies":[51],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":157,"linearizedBaseContracts":[157,51],"name":"Roulette","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":60,"name":"deployTime","nodeType":"VariableDeclaration","scope":157,"src":"157:26:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":58,"name":"uint","nodeType":"ElementaryTypeName","src":"157:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":59,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"182:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"body":{"id":72,"nodeType":"Block","src":"203:64:1","statements":[{"expression":{"argumentTypes":null,"id":66,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":63,"name":"ownerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":3,"src":"213:9:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":64,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":172,"src":"225:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":65,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"225:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"213:22:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":67,"nodeType":"ExpressionStatement","src":"213:22:1"},{"expression":{"argumentTypes":null,"id":70,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":68,"name":"deployTime","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"245:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"hexValue":"31","id":69,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"259:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"245:15:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":71,"nodeType":"ExpressionStatement","src":"245:15:1"}]},"documentation":null,"id":73,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":61,"nodeType":"ParameterList","parameters":[],"src":"201:2:1"},"payable":false,"returnParameters":{"id":62,"nodeType":"ParameterList","parameters":[],"src":"203:0:1"},"scope":157,"src":"190:77:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":82,"nodeType":"Block","src":"290:52:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":78,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":76,"name":"deployTime","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"308:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":77,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"322:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"308:15:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":75,"name":"require","nodeType":"Identifier","overloadedDeclarations":[175,176],"referencedDeclaration":175,"src":"300:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":79,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"300:24:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":80,"nodeType":"ExpressionStatement","src":"300:24:1"},{"id":81,"nodeType":"PlaceholderStatement","src":"334:1:1"}]},"documentation":null,"id":83,"name":"onlyOnce","nodeType":"ModifierDefinition","parameters":{"id":74,"nodeType":"ParameterList","parameters":[],"src":"290:0:1"},"src":"273:69:1","visibility":"internal"},{"constant":false,"id":86,"name":"userNames","nodeType":"VariableDeclaration","scope":157,"src":"366:25:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string[]"},"typeName":{"baseType":{"id":84,"name":"string","nodeType":"ElementaryTypeName","src":"366:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"id":85,"length":null,"nodeType":"ArrayTypeName","src":"366:8:1","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage_ptr","typeString":"string[]"}},"value":null,"visibility":"public"},{"constant":false,"id":88,"name":"winner","nodeType":"VariableDeclaration","scope":157,"src":"421:18:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":87,"name":"uint","nodeType":"ElementaryTypeName","src":"421:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"constant":false,"id":92,"name":"makeRandomNumberTimes","nodeType":"VariableDeclaration","scope":157,"src":"539:54:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":91,"keyType":{"id":89,"name":"address","nodeType":"ElementaryTypeName","src":"547:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"539:25:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":90,"name":"uint","nodeType":"ElementaryTypeName","src":"558:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"body":{"id":105,"nodeType":"Block","src":"740:43:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":102,"name":"_userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":94,"src":"765:10:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"expression":{"argumentTypes":null,"id":99,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":86,"src":"750:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":101,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"750:14:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_string_storage_$returns$_t_uint256_$","typeString":"function (string storage ref) returns (uint256)"}},"id":103,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"750:26:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":104,"nodeType":"ExpressionStatement","src":"750:26:1"}]},"documentation":null,"id":106,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":null,"id":97,"modifierName":{"argumentTypes":null,"id":96,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":14,"src":"730:9:1","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"730:9:1"}],"name":"setUserName","nodeType":"FunctionDefinition","parameters":{"id":95,"nodeType":"ParameterList","parameters":[{"constant":false,"id":94,"name":"_userNames","nodeType":"VariableDeclaration","scope":106,"src":"704:17:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":93,"name":"string","nodeType":"ElementaryTypeName","src":"704:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"703:19:1"},"payable":false,"returnParameters":{"id":98,"nodeType":"ParameterList","parameters":[],"src":"740:0:1"},"scope":157,"src":"683:100:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":145,"nodeType":"Block","src":"893:444:1","statements":[{"expression":{"argumentTypes":null,"id":113,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"996:35:1","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":109,"name":"makeRandomNumberTimes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":92,"src":"996:21:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":112,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":110,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":172,"src":"1018:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":111,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1018:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"996:33:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":114,"nodeType":"ExpressionStatement","src":"996:35:1"},{"assignments":[116],"declarations":[{"constant":false,"id":116,"name":"userNumber","nodeType":"VariableDeclaration","scope":146,"src":"1042:15:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":115,"name":"uint","nodeType":"ElementaryTypeName","src":"1042:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":119,"initialValue":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":117,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":86,"src":"1060:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":118,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1060:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1042:34:1"},{"assignments":[121],"declarations":[{"constant":false,"id":121,"name":"blockhash","nodeType":"VariableDeclaration","scope":146,"src":"1086:17:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":120,"name":"bytes32","nodeType":"ElementaryTypeName","src":"1086:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"}],"id":129,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":127,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":124,"name":"block","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":162,"src":"1122:5:1","typeDescriptions":{"typeIdentifier":"t_magic_block","typeString":"block"}},"id":125,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"number","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1122:12:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"argumentTypes":null,"hexValue":"31","id":126,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1137:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1122:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":122,"name":"block","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":162,"src":"1106:5:1","typeDescriptions":{"typeIdentifier":"t_magic_block","typeString":"block"}},"id":123,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"blockhash","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1106:15:1","typeDescriptions":{"typeIdentifier":"t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$","typeString":"function (uint256) view returns (bytes32)"}},"id":128,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1106:33:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"nodeType":"VariableDeclarationStatement","src":"1086:53:1"},{"assignments":[131],"declarations":[{"constant":false,"id":131,"name":"mywinner","nodeType":"VariableDeclaration","scope":146,"src":"1149:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":130,"name":"uint","nodeType":"ElementaryTypeName","src":"1149:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":140,"initialValue":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":139,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":133,"name":"blockhash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":121,"src":"1172:9:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes32","typeString":"bytes32"}],"id":132,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"1165:6:1","typeDescriptions":{"typeIdentifier":"t_type$_t_uint32_$","typeString":"type(uint32)"},"typeName":"uint32"},"id":134,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1165:17:1","typeDescriptions":{"typeIdentifier":"t_uint32","typeString":"uint32"}},"nodeType":"BinaryOperation","operator":"%","rightExpression":{"argumentTypes":null,"components":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":137,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":135,"name":"userNumber","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":116,"src":"1186:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"+","rightExpression":{"argumentTypes":null,"hexValue":"31","id":136,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1197:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1186:12:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"id":138,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"1185:14:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1165:34:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1149:50:1"},{"expression":{"argumentTypes":null,"id":143,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":141,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":88,"src":"1312:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":142,"name":"mywinner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":131,"src":"1321:8:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1312:17:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":144,"nodeType":"ExpressionStatement","src":"1312:17:1"}]},"documentation":null,"id":146,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"generateRandomNumber","nodeType":"FunctionDefinition","parameters":{"id":107,"nodeType":"ParameterList","parameters":[],"src":"884:2:1"},"payable":false,"returnParameters":{"id":108,"nodeType":"ParameterList","parameters":[],"src":"893:0:1"},"scope":157,"src":"855:482:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":155,"nodeType":"Block","src":"1418:41:1","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":151,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":86,"src":"1435:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":153,"indexExpression":{"argumentTypes":null,"id":152,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":88,"src":"1445:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1435:17:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"functionReturnParameters":150,"id":154,"nodeType":"Return","src":"1428:24:1"}]},"documentation":null,"id":156,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"viewResult","nodeType":"FunctionDefinition","parameters":{"id":147,"nodeType":"ParameterList","parameters":[],"src":"1388:2:1"},"payable":false,"returnParameters":{"id":150,"nodeType":"ParameterList","parameters":[{"constant":false,"id":149,"name":"","nodeType":"VariableDeclaration","scope":156,"src":"1411:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":148,"name":"string","nodeType":"ElementaryTypeName","src":"1411:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"1410:8:1"},"scope":157,"src":"1369:90:1","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":158,"src":"82:1380:1"}],"src":"0:1462:1"},"legacyAST":{"absolutePath":"/Users/andy/roulette-ethereum/contracts/Roulette.sol","exportedSymbols":{"Roulette":[157]},"id":158,"nodeType":"SourceUnit","nodes":[{"id":53,"literals":["solidity","^","0.4",".19"],"nodeType":"PragmaDirective","src":"0:24:1"},{"id":54,"literals":["experimental","ABIEncoderV2"],"nodeType":"PragmaDirective","src":"25:33:1"},{"absolutePath":"/Users/andy/roulette-ethereum/contracts/Owned.sol","file":"./Owned.sol","id":55,"nodeType":"ImportDirective","scope":158,"sourceUnit":52,"src":"59:21:1","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":56,"name":"Owned","nodeType":"UserDefinedTypeName","referencedDeclaration":51,"src":"103:5:1","typeDescriptions":{"typeIdentifier":"t_contract$_Owned_$51","typeString":"contract Owned"}},"id":57,"nodeType":"InheritanceSpecifier","src":"103:5:1"}],"contractDependencies":[51],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":157,"linearizedBaseContracts":[157,51],"name":"Roulette","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":60,"name":"deployTime","nodeType":"VariableDeclaration","scope":157,"src":"157:26:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":58,"name":"uint","nodeType":"ElementaryTypeName","src":"157:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":59,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"182:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"body":{"id":72,"nodeType":"Block","src":"203:64:1","statements":[{"expression":{"argumentTypes":null,"id":66,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":63,"name":"ownerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":3,"src":"213:9:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":64,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":172,"src":"225:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":65,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"225:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"213:22:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":67,"nodeType":"ExpressionStatement","src":"213:22:1"},{"expression":{"argumentTypes":null,"id":70,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":68,"name":"deployTime","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"245:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"hexValue":"31","id":69,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"259:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"245:15:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":71,"nodeType":"ExpressionStatement","src":"245:15:1"}]},"documentation":null,"id":73,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":61,"nodeType":"ParameterList","parameters":[],"src":"201:2:1"},"payable":false,"returnParameters":{"id":62,"nodeType":"ParameterList","parameters":[],"src":"203:0:1"},"scope":157,"src":"190:77:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":82,"nodeType":"Block","src":"290:52:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":78,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":76,"name":"deployTime","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"308:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":77,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"322:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"308:15:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":75,"name":"require","nodeType":"Identifier","overloadedDeclarations":[175,176],"referencedDeclaration":175,"src":"300:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":79,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"300:24:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":80,"nodeType":"ExpressionStatement","src":"300:24:1"},{"id":81,"nodeType":"PlaceholderStatement","src":"334:1:1"}]},"documentation":null,"id":83,"name":"onlyOnce","nodeType":"ModifierDefinition","parameters":{"id":74,"nodeType":"ParameterList","parameters":[],"src":"290:0:1"},"src":"273:69:1","visibility":"internal"},{"constant":false,"id":86,"name":"userNames","nodeType":"VariableDeclaration","scope":157,"src":"366:25:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string[]"},"typeName":{"baseType":{"id":84,"name":"string","nodeType":"ElementaryTypeName","src":"366:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"id":85,"length":null,"nodeType":"ArrayTypeName","src":"366:8:1","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage_ptr","typeString":"string[]"}},"value":null,"visibility":"public"},{"constant":false,"id":88,"name":"winner","nodeType":"VariableDeclaration","scope":157,"src":"421:18:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":87,"name":"uint","nodeType":"ElementaryTypeName","src":"421:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"constant":false,"id":92,"name":"makeRandomNumberTimes","nodeType":"VariableDeclaration","scope":157,"src":"539:54:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":91,"keyType":{"id":89,"name":"address","nodeType":"ElementaryTypeName","src":"547:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"539:25:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":90,"name":"uint","nodeType":"ElementaryTypeName","src":"558:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"body":{"id":105,"nodeType":"Block","src":"740:43:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":102,"name":"_userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":94,"src":"765:10:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"expression":{"argumentTypes":null,"id":99,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":86,"src":"750:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":101,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"750:14:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_string_storage_$returns$_t_uint256_$","typeString":"function (string storage ref) returns (uint256)"}},"id":103,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"750:26:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":104,"nodeType":"ExpressionStatement","src":"750:26:1"}]},"documentation":null,"id":106,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":null,"id":97,"modifierName":{"argumentTypes":null,"id":96,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":14,"src":"730:9:1","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"730:9:1"}],"name":"setUserName","nodeType":"FunctionDefinition","parameters":{"id":95,"nodeType":"ParameterList","parameters":[{"constant":false,"id":94,"name":"_userNames","nodeType":"VariableDeclaration","scope":106,"src":"704:17:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":93,"name":"string","nodeType":"ElementaryTypeName","src":"704:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"703:19:1"},"payable":false,"returnParameters":{"id":98,"nodeType":"ParameterList","parameters":[],"src":"740:0:1"},"scope":157,"src":"683:100:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":145,"nodeType":"Block","src":"893:444:1","statements":[{"expression":{"argumentTypes":null,"id":113,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"996:35:1","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":109,"name":"makeRandomNumberTimes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":92,"src":"996:21:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":112,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":110,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":172,"src":"1018:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":111,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1018:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"996:33:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":114,"nodeType":"ExpressionStatement","src":"996:35:1"},{"assignments":[116],"declarations":[{"constant":false,"id":116,"name":"userNumber","nodeType":"VariableDeclaration","scope":146,"src":"1042:15:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":115,"name":"uint","nodeType":"ElementaryTypeName","src":"1042:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":119,"initialValue":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":117,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":86,"src":"1060:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":118,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1060:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1042:34:1"},{"assignments":[121],"declarations":[{"constant":false,"id":121,"name":"blockhash","nodeType":"VariableDeclaration","scope":146,"src":"1086:17:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":120,"name":"bytes32","nodeType":"ElementaryTypeName","src":"1086:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"}],"id":129,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":127,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":124,"name":"block","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":162,"src":"1122:5:1","typeDescriptions":{"typeIdentifier":"t_magic_block","typeString":"block"}},"id":125,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"number","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1122:12:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"argumentTypes":null,"hexValue":"31","id":126,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1137:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1122:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":122,"name":"block","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":162,"src":"1106:5:1","typeDescriptions":{"typeIdentifier":"t_magic_block","typeString":"block"}},"id":123,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"blockhash","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1106:15:1","typeDescriptions":{"typeIdentifier":"t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$","typeString":"function (uint256) view returns (bytes32)"}},"id":128,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1106:33:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"nodeType":"VariableDeclarationStatement","src":"1086:53:1"},{"assignments":[131],"declarations":[{"constant":false,"id":131,"name":"mywinner","nodeType":"VariableDeclaration","scope":146,"src":"1149:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":130,"name":"uint","nodeType":"ElementaryTypeName","src":"1149:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":140,"initialValue":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":139,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":133,"name":"blockhash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":121,"src":"1172:9:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes32","typeString":"bytes32"}],"id":132,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"1165:6:1","typeDescriptions":{"typeIdentifier":"t_type$_t_uint32_$","typeString":"type(uint32)"},"typeName":"uint32"},"id":134,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1165:17:1","typeDescriptions":{"typeIdentifier":"t_uint32","typeString":"uint32"}},"nodeType":"BinaryOperation","operator":"%","rightExpression":{"argumentTypes":null,"components":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":137,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":135,"name":"userNumber","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":116,"src":"1186:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"+","rightExpression":{"argumentTypes":null,"hexValue":"31","id":136,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1197:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1186:12:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"id":138,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"1185:14:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1165:34:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1149:50:1"},{"expression":{"argumentTypes":null,"id":143,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":141,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":88,"src":"1312:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":142,"name":"mywinner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":131,"src":"1321:8:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1312:17:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":144,"nodeType":"ExpressionStatement","src":"1312:17:1"}]},"documentation":null,"id":146,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"generateRandomNumber","nodeType":"FunctionDefinition","parameters":{"id":107,"nodeType":"ParameterList","parameters":[],"src":"884:2:1"},"payable":false,"returnParameters":{"id":108,"nodeType":"ParameterList","parameters":[],"src":"893:0:1"},"scope":157,"src":"855:482:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":155,"nodeType":"Block","src":"1418:41:1","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":151,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":86,"src":"1435:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":153,"indexExpression":{"argumentTypes":null,"id":152,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":88,"src":"1445:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1435:17:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"functionReturnParameters":150,"id":154,"nodeType":"Return","src":"1428:24:1"}]},"documentation":null,"id":156,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"viewResult","nodeType":"FunctionDefinition","parameters":{"id":147,"nodeType":"ParameterList","parameters":[],"src":"1388:2:1"},"payable":false,"returnParameters":{"id":150,"nodeType":"ParameterList","parameters":[{"constant":false,"id":149,"name":"","nodeType":"VariableDeclaration","scope":156,"src":"1411:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":148,"name":"string","nodeType":"ElementaryTypeName","src":"1411:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"1410:8:1"},"scope":157,"src":"1369:90:1","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":158,"src":"82:1380:1"}],"src":"0:1462:1"},"compiler":{"name":"solc","version":"0.4.24+commit.e67f0147.Emscripten.clang"},"networks":{"5777":{"events":{},"links":{},"address":"0xc413cbab4b95e9d3cca683c7094fd9867dd36f2b","transactionHash":"0x63834fd043e22c460503e2043b56f14f8c4484ba5dfab70bd96d77e778882039"}},"schemaVersion":"2.0.1","updatedAt":"2018-12-06T06:13:54.818Z"};

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
/*! exports provided: getOwnerInfo, getDeployrInfo, setName, SetUserInfo, generateRandom, viewResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnerInfo", function() { return getOwnerInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeployrInfo", function() { return getDeployrInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setName", function() { return setName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserInfo", function() { return SetUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandom", function() { return generateRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewResult", function() { return viewResult; });
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