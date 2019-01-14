module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/web3/App.js":
/*!***************************!*\
  !*** ./pages/web3/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/List */ "./pages/web3/components/List.js");
/* harmony import */ var _components_getOwnerInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/getOwnerInfo */ "./pages/web3/components/getOwnerInfo.js");
/* harmony import */ var _components_getDeployInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/getDeployInfo */ "./pages/web3/components/getDeployInfo.js");
/* harmony import */ var _components_generateRandomNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/generateRandomNumber */ "./pages/web3/components/generateRandomNumber.js");
/* harmony import */ var _components_setUserInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/setUserInfo */ "./pages/web3/components/setUserInfo.js");

var _jsxFileName = "/Users/andy/roulette-ethereum/client/pages/web3/App.js";


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







var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addUser",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(user) {
        var _ref2, members, nextId;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.state;

              case 2:
                _ref2 = _context.sent;
                members = _ref2.members;
                nextId = _ref2.nextId;

                _this.setState({
                  members: _toConsumableArray(members).concat([{
                    id: nextId + 1,
                    name: user
                  }]),
                  nextId: nextId + 1
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.state = {
      members: [],
      nextId: 0
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Roulette on Ethereum"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Please push buttons from the top"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
        type: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_getOwnerInfo__WEBPACK_IMPORTED_MODULE_3__["GetOwnerInfo"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_getDeployInfo__WEBPACK_IMPORTED_MODULE_4__["GetDeployInfo"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_setUserInfo__WEBPACK_IMPORTED_MODULE_6__["SetUserInfo"], {
        addUser: this.addUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_2__["List"], {
        members: this.state.members,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_generateRandomNumber__WEBPACK_IMPORTED_MODULE_5__["GenerateRandomNumber"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component); // export defalut App;




/***/ }),

/***/ "./pages/web3/artifacts/Roulette.json":
/*!********************************************!*\
  !*** ./pages/web3/artifacts/Roulette.json ***!
  \********************************************/
/*! exports provided: contractName, abi, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = {"contractName":"Roulette","abi":[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userNames","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x4ebd3aea"},{"constant":true,"inputs":[],"name":"deployTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x7a40624b"},{"constant":true,"inputs":[],"name":"ownerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x9c675eaa"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"makeRandomNumberTimes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xbf6cb85a"},{"constant":true,"inputs":[],"name":"winner","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xdfbf53ae"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"constant":false,"inputs":[{"name":"_userNames","type":"string"}],"name":"setUserName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x2b5914fe"},{"constant":false,"inputs":[],"name":"generateRandomNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x773a1154"},{"constant":true,"inputs":[],"name":"viewResult","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3cff0380"},{"constant":true,"inputs":[],"name":"viewUsers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x14ebdb79"}],"bytecode":"0x6080604052600060015534801561001557600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060008282540192505081905550610a50806100b56000396000f3fe6080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806314ebdb79146100a95780632b5914fe146100d45780633cff0380146100fd5780634ebd3aea14610128578063773a1154146101655780637a40624b146101905780639c675eaa146101bb578063bf6cb85a146101e6578063dfbf53ae14610223578063f2fde38b1461024e575b600080fd5b3480156100b557600080fd5b506100be610277565b6040516100cb91906108e1565b60405180910390f35b3480156100e057600080fd5b506100fb60048036036100f6919081019061078e565b610284565b005b34801561010957600080fd5b506101126102c6565b60405161011f91906108bf565b60405180910390f35b34801561013457600080fd5b5061014f600480360361014a91908101906107cf565b610381565b60405161015c919061089d565b60405180910390f35b34801561017157600080fd5b5061017a61043c565b60405161018791906108e1565b60405180910390f35b34801561019c57600080fd5b506101a56104c4565b6040516101b291906108e1565b60405180910390f35b3480156101c757600080fd5b506101d06104ca565b6040516101dd9190610882565b60405180910390f35b3480156101f257600080fd5b5061020d60048036036102089190810190610765565b6104ef565b60405161021a91906108e1565b60405180910390f35b34801561022f57600080fd5b50610238610507565b60405161024591906108e1565b60405180910390f35b34801561025a57600080fd5b5061027560048036036102709190810190610765565b61050d565b005b6000600280549050905090565b60028190806001815401808255809150509060018203906000526020600020016000909192909190915090805190602001906102c1929190610642565b505050565b606060026003548154811015156102d957fe5b906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103775780601f1061034c57610100808354040283529160200191610377565b820191906000526020600020905b81548152906001019060200180831161035a57829003601f168201915b5050505050905090565b60028181548110151561039057fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104345780601f1061040957610100808354040283529160200191610434565b820191906000526020600020905b81548152906001019060200180831161041757829003601f168201915b505050505081565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919060010191905055506000600280549050905060006001430340905060006001830182600190048115156104b457fe5b0690508060038190555050505090565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915090505481565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561056857600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105c357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156105ff57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061068357805160ff19168380011785556106b1565b828001600101855582156106b1579182015b828111156106b0578251825591602001919060010190610695565b5b5090506106be91906106c2565b5090565b6106e491905b808211156106e05760008160009055506001016106c8565b5090565b90565b60006106f382356109a7565b905092915050565b600082601f830112151561070e57600080fd5b813561072161071c82610929565b6108fc565b9150808252602083016020830185838301111561073d57600080fd5b6107488382846109c3565b50505092915050565b600061075d82356109b9565b905092915050565b60006020828403121561077757600080fd5b6000610785848285016106e7565b91505092915050565b6000602082840312156107a057600080fd5b600082013567ffffffffffffffff8111156107ba57600080fd5b6107c6848285016106fb565b91505092915050565b6000602082840312156107e157600080fd5b60006107ef84828501610751565b91505092915050565b6108018161096b565b82525050565b600061081282610960565b8084526108268160208601602086016109d2565b61082f81610a05565b602085010191505092915050565b600061084882610955565b80845261085c8160208601602086016109d2565b61086581610a05565b602085010191505092915050565b61087c8161099d565b82525050565b600060208201905061089760008301846107f8565b92915050565b600060208201905081810360008301526108b7818461083d565b905092915050565b600060208201905081810360008301526108d98184610807565b905092915050565b60006020820190506108f66000830184610873565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561091f57600080fd5b8060405250919050565b600067ffffffffffffffff82111561094057600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b60006109768261097d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006109b28261097d565b9050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156109f05780820151818401526020810190506109d5565b838111156109ff576000848401525b50505050565b6000601f19601f830116905091905056fea265627a7a72305820b1014dca74fec8a59cae338c406af5a6d0dd93a92e852d70b52d5536220431f56c6578706572696d656e74616cf50037","deployedBytecode":"0x6080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806314ebdb79146100a95780632b5914fe146100d45780633cff0380146100fd5780634ebd3aea14610128578063773a1154146101655780637a40624b146101905780639c675eaa146101bb578063bf6cb85a146101e6578063dfbf53ae14610223578063f2fde38b1461024e575b600080fd5b3480156100b557600080fd5b506100be610277565b6040516100cb91906108e1565b60405180910390f35b3480156100e057600080fd5b506100fb60048036036100f6919081019061078e565b610284565b005b34801561010957600080fd5b506101126102c6565b60405161011f91906108bf565b60405180910390f35b34801561013457600080fd5b5061014f600480360361014a91908101906107cf565b610381565b60405161015c919061089d565b60405180910390f35b34801561017157600080fd5b5061017a61043c565b60405161018791906108e1565b60405180910390f35b34801561019c57600080fd5b506101a56104c4565b6040516101b291906108e1565b60405180910390f35b3480156101c757600080fd5b506101d06104ca565b6040516101dd9190610882565b60405180910390f35b3480156101f257600080fd5b5061020d60048036036102089190810190610765565b6104ef565b60405161021a91906108e1565b60405180910390f35b34801561022f57600080fd5b50610238610507565b60405161024591906108e1565b60405180910390f35b34801561025a57600080fd5b5061027560048036036102709190810190610765565b61050d565b005b6000600280549050905090565b60028190806001815401808255809150509060018203906000526020600020016000909192909190915090805190602001906102c1929190610642565b505050565b606060026003548154811015156102d957fe5b906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103775780601f1061034c57610100808354040283529160200191610377565b820191906000526020600020905b81548152906001019060200180831161035a57829003601f168201915b5050505050905090565b60028181548110151561039057fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104345780601f1061040957610100808354040283529160200191610434565b820191906000526020600020905b81548152906001019060200180831161041757829003601f168201915b505050505081565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919060010191905055506000600280549050905060006001430340905060006001830182600190048115156104b457fe5b0690508060038190555050505090565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915090505481565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561056857600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105c357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156105ff57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061068357805160ff19168380011785556106b1565b828001600101855582156106b1579182015b828111156106b0578251825591602001919060010190610695565b5b5090506106be91906106c2565b5090565b6106e491905b808211156106e05760008160009055506001016106c8565b5090565b90565b60006106f382356109a7565b905092915050565b600082601f830112151561070e57600080fd5b813561072161071c82610929565b6108fc565b9150808252602083016020830185838301111561073d57600080fd5b6107488382846109c3565b50505092915050565b600061075d82356109b9565b905092915050565b60006020828403121561077757600080fd5b6000610785848285016106e7565b91505092915050565b6000602082840312156107a057600080fd5b600082013567ffffffffffffffff8111156107ba57600080fd5b6107c6848285016106fb565b91505092915050565b6000602082840312156107e157600080fd5b60006107ef84828501610751565b91505092915050565b6108018161096b565b82525050565b600061081282610960565b8084526108268160208601602086016109d2565b61082f81610a05565b602085010191505092915050565b600061084882610955565b80845261085c8160208601602086016109d2565b61086581610a05565b602085010191505092915050565b61087c8161099d565b82525050565b600060208201905061089760008301846107f8565b92915050565b600060208201905081810360008301526108b7818461083d565b905092915050565b600060208201905081810360008301526108d98184610807565b905092915050565b60006020820190506108f66000830184610873565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561091f57600080fd5b8060405250919050565b600067ffffffffffffffff82111561094057600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b60006109768261097d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006109b28261097d565b9050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156109f05780820151818401526020810190506109d5565b838111156109ff576000848401525b50505050565b6000601f19601f830116905091905056fea265627a7a72305820b1014dca74fec8a59cae338c406af5a6d0dd93a92e852d70b52d5536220431f56c6578706572696d656e74616cf50037","sourceMap":"89:1556:2:-;;;189:1;164:26;;197:84;8:9:-1;5:2;;;30:1;27;20:12;5:2;197:84:2;238:10:1;226:9;;:22;;;;;;;;;;;;;;;;;;239:10:2;227:9;;:22;;;;;;;;;;;;;;;;;;273:1;259:10;;:15;;;;;;;;;;;89:1556;;;;;;","deployedSourceMap":"89:1556:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1557:86;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1557:86:2;;;;;;;;;;;;;;;;;;;;671:97;;8:9:-1;5:2;;;30:1;27;20:12;5:2;671:97:2;;;;;;;;;;;;;;;;;;;1454;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1454:97:2;;;;;;;;;;;;;;;;;;;;380:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;380:25:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;840:582;;8:9:-1;5:2;;;30:1;27;20:12;5:2;840:582:2;;;;;;;;;;;;;;;;;;;;164:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;164:26:2;;;;;;;;;;;;;;;;;;;;54:24:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;54:24:1;;;;;;;;;;;;;;;;;;;;553:54:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;553:54:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;435:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;435:18:2;;;;;;;;;;;;;;;;;;;;261:288:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;261:288:1;;;;;;;;;;;;;;;;;;;1557:86:2;1598:4;1620:9;:16;;;;1613:23;;1557:86;:::o;671:97::-;735:9;750:10;735:26;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;735:26:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;671:97;:::o;1454:::-;1496:13;1527:9;1537:6;;1527:17;;;;;;;;;;;;;;;;;1520:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1454:97;:::o;380:25::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;840:582::-;887:4;1090:21;:33;1112:10;1090:33;;;;;;;;;;;;;;;;:35;;;;;;;;;;;;;1136:15;1154:9;:16;;;;1136:34;;1180:17;1225:1;1210:12;:16;1200:27;1180:47;;1237:13;1283:1;1272:10;:12;1258:9;1253:15;;;:32;;;;;;;;1237:48;;1407:8;1398:6;:17;;;;840:582;;;;:::o;164:26::-;;;;:::o;54:24:1:-;;;;;;;;;;;;;:::o;553:54:2:-;;;;;;;;;;;;;;;;;:::o;435:18::-;;;;:::o;261:288:1:-;137:9;;;;;;;;;;;123:23;;:10;:23;;;115:32;;;;;;;;414:9;;;;;;;;;;;400:23;;:10;:23;;;392:32;;;;;;;;507:1;486:23;;:9;:23;;;;478:32;;;;;;;;533:9;521;;:21;;;;;;;;;;;;;;;;;;261:288;:::o;89:1556:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5:118:-1:-;;72:46;110:6;97:20;72:46;;;63:55;;57:66;;;;;131:442;;233:3;226:4;218:6;214:17;210:27;203:35;200:2;;;251:1;248;241:12;200:2;288:6;275:20;310:65;325:49;367:6;325:49;;;310:65;;;301:74;;395:6;388:5;381:21;431:4;423:6;419:17;464:4;457:5;453:16;499:3;490:6;485:3;481:16;478:25;475:2;;;516:1;513;506:12;475:2;526:41;560:6;555:3;550;526:41;;;193:380;;;;;;;;581:118;;648:46;686:6;673:20;648:46;;;639:55;;633:66;;;;;706:241;;810:2;798:9;789:7;785:23;781:32;778:2;;;826:1;823;816:12;778:2;861:1;878:53;923:7;914:6;903:9;899:22;878:53;;;868:63;;840:97;772:175;;;;;954:347;;1068:2;1056:9;1047:7;1043:23;1039:32;1036:2;;;1084:1;1081;1074:12;1036:2;1147:1;1136:9;1132:17;1119:31;1170:18;1162:6;1159:30;1156:2;;;1202:1;1199;1192:12;1156:2;1222:63;1277:7;1268:6;1257:9;1253:22;1222:63;;;1212:73;;1098:193;1030:271;;;;;1308:241;;1412:2;1400:9;1391:7;1387:23;1383:32;1380:2;;;1428:1;1425;1418:12;1380:2;1463:1;1480:53;1525:7;1516:6;1505:9;1501:22;1480:53;;;1470:63;;1442:97;1374:175;;;;;1556:110;1629:31;1654:5;1629:31;;;1624:3;1617:44;1611:55;;;1673:300;;1775:39;1808:5;1775:39;;;1831:6;1826:3;1819:19;1843:63;1899:6;1892:4;1887:3;1883:14;1876:4;1869:5;1865:16;1843:63;;;1938:29;1960:6;1938:29;;;1931:4;1926:3;1922:14;1918:50;1911:57;;1755:218;;;;;;1980:292;;2078:35;2107:5;2078:35;;;2130:6;2125:3;2118:19;2142:63;2198:6;2191:4;2186:3;2182:14;2175:4;2168:5;2164:16;2142:63;;;2237:29;2259:6;2237:29;;;2230:4;2225:3;2221:14;2217:50;2210:57;;2058:214;;;;;;2279:110;2352:31;2377:5;2352:31;;;2347:3;2340:44;2334:55;;;2396:193;;2504:2;2493:9;2489:18;2481:26;;2518:61;2576:1;2565:9;2561:17;2552:6;2518:61;;;2475:114;;;;;2596:273;;2720:2;2709:9;2705:18;2697:26;;2770:9;2764:4;2760:20;2756:1;2745:9;2741:17;2734:47;2795:64;2854:4;2845:6;2795:64;;;2787:72;;2691:178;;;;;2876:281;;3004:2;2993:9;2989:18;2981:26;;3054:9;3048:4;3044:20;3040:1;3029:9;3025:17;3018:47;3079:68;3142:4;3133:6;3079:68;;;3071:76;;2975:182;;;;;3164:193;;3272:2;3261:9;3257:18;3249:26;;3286:61;3344:1;3333:9;3329:17;3320:6;3286:61;;;3243:114;;;;;3364:256;;3426:2;3420:9;3410:19;;3464:4;3456:6;3452:17;3563:6;3551:10;3548:22;3527:18;3515:10;3512:34;3509:62;3506:2;;;3584:1;3581;3574:12;3506:2;3604:10;3600:2;3593:22;3404:216;;;;;3627:259;;3771:18;3763:6;3760:30;3757:2;;;3803:1;3800;3793:12;3757:2;3847:4;3843:9;3836:4;3828:6;3824:17;3820:33;3812:41;;3876:4;3870;3866:15;3858:23;;3694:192;;;;3893:88;;3970:5;3964:12;3954:22;;3948:33;;;;3988:92;;4069:5;4063:12;4053:22;;4047:33;;;;4087:105;;4156:31;4181:5;4156:31;;;4145:42;;4139:53;;;;4199:128;;4279:42;4272:5;4268:54;4257:65;;4251:76;;;;4334:79;;4403:5;4392:16;;4386:27;;;;4420:105;;4489:31;4514:5;4489:31;;;4478:42;;4472:53;;;;4532:79;;4601:5;4590:16;;4584:27;;;;4619:145;4700:6;4695:3;4690;4677:30;4756:1;4747:6;4742:3;4738:16;4731:27;4670:94;;;;4773:268;4838:1;4845:101;4859:6;4856:1;4853:13;4845:101;;;4935:1;4930:3;4926:11;4920:18;4916:1;4911:3;4907:11;4900:39;4881:2;4878:1;4874:10;4869:15;;4845:101;;;4961:6;4958:1;4955:13;4952:2;;;5026:1;5017:6;5012:3;5008:16;5001:27;4952:2;4822:219;;;;;5049:97;;5137:2;5133:7;5128:2;5121:5;5117:14;5113:28;5103:38;;5097:49;;;","source":"pragma solidity >0.4.99 <0.6.0;\npragma experimental ABIEncoderV2;\nimport \"./Owned.sol\";\n\ncontract Roulette is Owned{\n\n    // owner can deploy contract at once;\n    uint public deployTime = 0;\n\n    constructor() public{\n        ownerAddr = msg.sender;\n        deployTime += 1;\n    }\n\n    modifier onlyOnce{\n        require(deployTime == 0);\n        _;\n    }\n\n    // candidates\n    string[] public userNames;\n\n    // roulette winner\n    uint public winner;\n\n    // userAddress => make Randome Number Times\n    // user can make random number only once\n    mapping(address => uint ) public makeRandomNumberTimes;\n\n    // set candidate\n    //TODO:onlyOwnerを消すこと\n    function setUserName(string memory _userNames) public {\n        userNames.push(_userNames);\n    }\n\n    // NOTE : this function uses blockhash and it is NOT secure !\n    function generateRandomNumber() public returns(uint){\n        //TODO:テストのためにrequireをコメントアウトしているので戻す事\n        // require(makeRandomNumberTimes[msg.sender] == 0,\"you already make random number\");\n        makeRandomNumberTimes[msg.sender]++;\n\n        uint userNumber = userNames.length;\n        bytes32 blockhash = blockhash(block.number - 1);\n        uint myWinner = uint(blockhash) % (userNumber+1);\n        //TODO:配列のあたいの値の入ってない部分がwinnerになるとエラーになる\n        winner = myWinner;\n    }\n\n    // return wineer name\n    function viewResult() public view returns(string memory){\n        return userNames[winner];\n    }\n\n    function viewUsers() public view returns(uint){\n        return userNames.length;\n    }\n}","sourcePath":"/Users/andy/roulette-ethereum/contracts/Roulette.sol","ast":{"absolutePath":"/Users/andy/roulette-ethereum/contracts/Roulette.sol","exportedSymbols":{"Roulette":[222]},"id":223,"nodeType":"SourceUnit","nodes":[{"id":110,"literals":["solidity",">","0.4",".99","<","0.6",".0"],"nodeType":"PragmaDirective","src":"0:31:2"},{"id":111,"literals":["experimental","ABIEncoderV2"],"nodeType":"PragmaDirective","src":"32:33:2"},{"absolutePath":"/Users/andy/roulette-ethereum/contracts/Owned.sol","file":"./Owned.sol","id":112,"nodeType":"ImportDirective","scope":223,"sourceUnit":109,"src":"66:21:2","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":113,"name":"Owned","nodeType":"UserDefinedTypeName","referencedDeclaration":108,"src":"110:5:2","typeDescriptions":{"typeIdentifier":"t_contract$_Owned_$108","typeString":"contract Owned"}},"id":114,"nodeType":"InheritanceSpecifier","src":"110:5:2"}],"contractDependencies":[108],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":222,"linearizedBaseContracts":[222,108],"name":"Roulette","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":117,"name":"deployTime","nodeType":"VariableDeclaration","scope":222,"src":"164:26:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":115,"name":"uint","nodeType":"ElementaryTypeName","src":"164:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":116,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"189:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"body":{"id":129,"nodeType":"Block","src":"217:64:2","statements":[{"expression":{"argumentTypes":null,"id":123,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":120,"name":"ownerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"227:9:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":121,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":237,"src":"239:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":122,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"239:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"227:22:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":124,"nodeType":"ExpressionStatement","src":"227:22:2"},{"expression":{"argumentTypes":null,"id":127,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":125,"name":"deployTime","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":117,"src":"259:10:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"hexValue":"31","id":126,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"273:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"259:15:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":128,"nodeType":"ExpressionStatement","src":"259:15:2"}]},"documentation":null,"id":130,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":118,"nodeType":"ParameterList","parameters":[],"src":"208:2:2"},"returnParameters":{"id":119,"nodeType":"ParameterList","parameters":[],"src":"217:0:2"},"scope":222,"src":"197:84:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":139,"nodeType":"Block","src":"304:52:2","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":135,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":133,"name":"deployTime","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":117,"src":"322:10:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":134,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"336:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"322:15:2","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":132,"name":"require","nodeType":"Identifier","overloadedDeclarations":[240,241],"referencedDeclaration":240,"src":"314:7:2","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":136,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"314:24:2","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":137,"nodeType":"ExpressionStatement","src":"314:24:2"},{"id":138,"nodeType":"PlaceholderStatement","src":"348:1:2"}]},"documentation":null,"id":140,"name":"onlyOnce","nodeType":"ModifierDefinition","parameters":{"id":131,"nodeType":"ParameterList","parameters":[],"src":"304:0:2"},"src":"287:69:2","visibility":"internal"},{"constant":false,"id":143,"name":"userNames","nodeType":"VariableDeclaration","scope":222,"src":"380:25:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string[]"},"typeName":{"baseType":{"id":141,"name":"string","nodeType":"ElementaryTypeName","src":"380:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"id":142,"length":null,"nodeType":"ArrayTypeName","src":"380:8:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage_ptr","typeString":"string[]"}},"value":null,"visibility":"public"},{"constant":false,"id":145,"name":"winner","nodeType":"VariableDeclaration","scope":222,"src":"435:18:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":144,"name":"uint","nodeType":"ElementaryTypeName","src":"435:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"constant":false,"id":149,"name":"makeRandomNumberTimes","nodeType":"VariableDeclaration","scope":222,"src":"553:54:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":148,"keyType":{"id":146,"name":"address","nodeType":"ElementaryTypeName","src":"561:7:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"553:25:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":147,"name":"uint","nodeType":"ElementaryTypeName","src":"572:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"body":{"id":160,"nodeType":"Block","src":"725:43:2","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":157,"name":"_userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":151,"src":"750:10:2","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"expression":{"argumentTypes":null,"id":154,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"735:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":156,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"735:14:2","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_string_storage_$returns$_t_uint256_$","typeString":"function (string storage ref) returns (uint256)"}},"id":158,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"735:26:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":159,"nodeType":"ExpressionStatement","src":"735:26:2"}]},"documentation":null,"id":161,"implemented":true,"kind":"function","modifiers":[],"name":"setUserName","nodeType":"FunctionDefinition","parameters":{"id":152,"nodeType":"ParameterList","parameters":[{"constant":false,"id":151,"name":"_userNames","nodeType":"VariableDeclaration","scope":161,"src":"692:24:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":150,"name":"string","nodeType":"ElementaryTypeName","src":"692:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"691:26:2"},"returnParameters":{"id":153,"nodeType":"ParameterList","parameters":[],"src":"725:0:2"},"scope":222,"src":"671:97:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":201,"nodeType":"Block","src":"892:530:2","statements":[{"expression":{"argumentTypes":null,"id":170,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"1090:35:2","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":166,"name":"makeRandomNumberTimes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":149,"src":"1090:21:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":169,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":167,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":237,"src":"1112:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":168,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1112:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1090:33:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":171,"nodeType":"ExpressionStatement","src":"1090:35:2"},{"assignments":[173],"declarations":[{"constant":false,"id":173,"name":"userNumber","nodeType":"VariableDeclaration","scope":201,"src":"1136:15:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":172,"name":"uint","nodeType":"ElementaryTypeName","src":"1136:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":176,"initialValue":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":174,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"1154:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":175,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1154:16:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1136:34:2"},{"assignments":[178],"declarations":[{"constant":false,"id":178,"name":"blockhash","nodeType":"VariableDeclaration","scope":201,"src":"1180:17:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":177,"name":"bytes32","nodeType":"ElementaryTypeName","src":"1180:7:2","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"}],"id":185,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":183,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":180,"name":"block","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":227,"src":"1210:5:2","typeDescriptions":{"typeIdentifier":"t_magic_block","typeString":"block"}},"id":181,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"number","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1210:12:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"argumentTypes":null,"hexValue":"31","id":182,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1225:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1210:16:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":179,"name":"blockhash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":228,"src":"1200:9:2","typeDescriptions":{"typeIdentifier":"t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$","typeString":"function (uint256) view returns (bytes32)"}},"id":184,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1200:27:2","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"nodeType":"VariableDeclarationStatement","src":"1180:47:2"},{"assignments":[187],"declarations":[{"constant":false,"id":187,"name":"myWinner","nodeType":"VariableDeclaration","scope":201,"src":"1237:13:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":186,"name":"uint","nodeType":"ElementaryTypeName","src":"1237:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":196,"initialValue":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":195,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":189,"name":"blockhash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":178,"src":"1258:9:2","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes32","typeString":"bytes32"}],"id":188,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"1253:4:2","typeDescriptions":{"typeIdentifier":"t_type$_t_uint256_$","typeString":"type(uint256)"},"typeName":"uint"},"id":190,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1253:15:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"%","rightExpression":{"argumentTypes":null,"components":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":193,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":191,"name":"userNumber","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":173,"src":"1272:10:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"+","rightExpression":{"argumentTypes":null,"hexValue":"31","id":192,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1283:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1272:12:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"id":194,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"1271:14:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1253:32:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1237:48:2"},{"expression":{"argumentTypes":null,"id":199,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":197,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":145,"src":"1398:6:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":198,"name":"myWinner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"1407:8:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1398:17:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":200,"nodeType":"ExpressionStatement","src":"1398:17:2"}]},"documentation":null,"id":202,"implemented":true,"kind":"function","modifiers":[],"name":"generateRandomNumber","nodeType":"FunctionDefinition","parameters":{"id":162,"nodeType":"ParameterList","parameters":[],"src":"869:2:2"},"returnParameters":{"id":165,"nodeType":"ParameterList","parameters":[{"constant":false,"id":164,"name":"","nodeType":"VariableDeclaration","scope":202,"src":"887:4:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":163,"name":"uint","nodeType":"ElementaryTypeName","src":"887:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"886:6:2"},"scope":222,"src":"840:582:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":211,"nodeType":"Block","src":"1510:41:2","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":207,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"1527:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":209,"indexExpression":{"argumentTypes":null,"id":208,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":145,"src":"1537:6:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1527:17:2","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"functionReturnParameters":206,"id":210,"nodeType":"Return","src":"1520:24:2"}]},"documentation":null,"id":212,"implemented":true,"kind":"function","modifiers":[],"name":"viewResult","nodeType":"FunctionDefinition","parameters":{"id":203,"nodeType":"ParameterList","parameters":[],"src":"1473:2:2"},"returnParameters":{"id":206,"nodeType":"ParameterList","parameters":[{"constant":false,"id":205,"name":"","nodeType":"VariableDeclaration","scope":212,"src":"1496:13:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":204,"name":"string","nodeType":"ElementaryTypeName","src":"1496:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"1495:15:2"},"scope":222,"src":"1454:97:2","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":220,"nodeType":"Block","src":"1603:40:2","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":217,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"1620:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":218,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1620:16:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":216,"id":219,"nodeType":"Return","src":"1613:23:2"}]},"documentation":null,"id":221,"implemented":true,"kind":"function","modifiers":[],"name":"viewUsers","nodeType":"FunctionDefinition","parameters":{"id":213,"nodeType":"ParameterList","parameters":[],"src":"1575:2:2"},"returnParameters":{"id":216,"nodeType":"ParameterList","parameters":[{"constant":false,"id":215,"name":"","nodeType":"VariableDeclaration","scope":221,"src":"1598:4:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":214,"name":"uint","nodeType":"ElementaryTypeName","src":"1598:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1597:6:2"},"scope":222,"src":"1557:86:2","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":223,"src":"89:1556:2"}],"src":"0:1645:2"},"legacyAST":{"absolutePath":"/Users/andy/roulette-ethereum/contracts/Roulette.sol","exportedSymbols":{"Roulette":[222]},"id":223,"nodeType":"SourceUnit","nodes":[{"id":110,"literals":["solidity",">","0.4",".99","<","0.6",".0"],"nodeType":"PragmaDirective","src":"0:31:2"},{"id":111,"literals":["experimental","ABIEncoderV2"],"nodeType":"PragmaDirective","src":"32:33:2"},{"absolutePath":"/Users/andy/roulette-ethereum/contracts/Owned.sol","file":"./Owned.sol","id":112,"nodeType":"ImportDirective","scope":223,"sourceUnit":109,"src":"66:21:2","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":113,"name":"Owned","nodeType":"UserDefinedTypeName","referencedDeclaration":108,"src":"110:5:2","typeDescriptions":{"typeIdentifier":"t_contract$_Owned_$108","typeString":"contract Owned"}},"id":114,"nodeType":"InheritanceSpecifier","src":"110:5:2"}],"contractDependencies":[108],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":222,"linearizedBaseContracts":[222,108],"name":"Roulette","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":117,"name":"deployTime","nodeType":"VariableDeclaration","scope":222,"src":"164:26:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":115,"name":"uint","nodeType":"ElementaryTypeName","src":"164:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":116,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"189:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"body":{"id":129,"nodeType":"Block","src":"217:64:2","statements":[{"expression":{"argumentTypes":null,"id":123,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":120,"name":"ownerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"227:9:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":121,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":237,"src":"239:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":122,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"239:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"227:22:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":124,"nodeType":"ExpressionStatement","src":"227:22:2"},{"expression":{"argumentTypes":null,"id":127,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":125,"name":"deployTime","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":117,"src":"259:10:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"hexValue":"31","id":126,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"273:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"259:15:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":128,"nodeType":"ExpressionStatement","src":"259:15:2"}]},"documentation":null,"id":130,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":118,"nodeType":"ParameterList","parameters":[],"src":"208:2:2"},"returnParameters":{"id":119,"nodeType":"ParameterList","parameters":[],"src":"217:0:2"},"scope":222,"src":"197:84:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":139,"nodeType":"Block","src":"304:52:2","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":135,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":133,"name":"deployTime","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":117,"src":"322:10:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":134,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"336:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"322:15:2","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":132,"name":"require","nodeType":"Identifier","overloadedDeclarations":[240,241],"referencedDeclaration":240,"src":"314:7:2","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":136,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"314:24:2","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":137,"nodeType":"ExpressionStatement","src":"314:24:2"},{"id":138,"nodeType":"PlaceholderStatement","src":"348:1:2"}]},"documentation":null,"id":140,"name":"onlyOnce","nodeType":"ModifierDefinition","parameters":{"id":131,"nodeType":"ParameterList","parameters":[],"src":"304:0:2"},"src":"287:69:2","visibility":"internal"},{"constant":false,"id":143,"name":"userNames","nodeType":"VariableDeclaration","scope":222,"src":"380:25:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string[]"},"typeName":{"baseType":{"id":141,"name":"string","nodeType":"ElementaryTypeName","src":"380:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"id":142,"length":null,"nodeType":"ArrayTypeName","src":"380:8:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage_ptr","typeString":"string[]"}},"value":null,"visibility":"public"},{"constant":false,"id":145,"name":"winner","nodeType":"VariableDeclaration","scope":222,"src":"435:18:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":144,"name":"uint","nodeType":"ElementaryTypeName","src":"435:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"constant":false,"id":149,"name":"makeRandomNumberTimes","nodeType":"VariableDeclaration","scope":222,"src":"553:54:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":148,"keyType":{"id":146,"name":"address","nodeType":"ElementaryTypeName","src":"561:7:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"553:25:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":147,"name":"uint","nodeType":"ElementaryTypeName","src":"572:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"body":{"id":160,"nodeType":"Block","src":"725:43:2","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":157,"name":"_userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":151,"src":"750:10:2","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"expression":{"argumentTypes":null,"id":154,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"735:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":156,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"735:14:2","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_string_storage_$returns$_t_uint256_$","typeString":"function (string storage ref) returns (uint256)"}},"id":158,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"735:26:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":159,"nodeType":"ExpressionStatement","src":"735:26:2"}]},"documentation":null,"id":161,"implemented":true,"kind":"function","modifiers":[],"name":"setUserName","nodeType":"FunctionDefinition","parameters":{"id":152,"nodeType":"ParameterList","parameters":[{"constant":false,"id":151,"name":"_userNames","nodeType":"VariableDeclaration","scope":161,"src":"692:24:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":150,"name":"string","nodeType":"ElementaryTypeName","src":"692:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"691:26:2"},"returnParameters":{"id":153,"nodeType":"ParameterList","parameters":[],"src":"725:0:2"},"scope":222,"src":"671:97:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":201,"nodeType":"Block","src":"892:530:2","statements":[{"expression":{"argumentTypes":null,"id":170,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"1090:35:2","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":166,"name":"makeRandomNumberTimes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":149,"src":"1090:21:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":169,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":167,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":237,"src":"1112:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":168,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1112:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1090:33:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":171,"nodeType":"ExpressionStatement","src":"1090:35:2"},{"assignments":[173],"declarations":[{"constant":false,"id":173,"name":"userNumber","nodeType":"VariableDeclaration","scope":201,"src":"1136:15:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":172,"name":"uint","nodeType":"ElementaryTypeName","src":"1136:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":176,"initialValue":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":174,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"1154:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":175,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1154:16:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1136:34:2"},{"assignments":[178],"declarations":[{"constant":false,"id":178,"name":"blockhash","nodeType":"VariableDeclaration","scope":201,"src":"1180:17:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":177,"name":"bytes32","nodeType":"ElementaryTypeName","src":"1180:7:2","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"}],"id":185,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":183,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":180,"name":"block","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":227,"src":"1210:5:2","typeDescriptions":{"typeIdentifier":"t_magic_block","typeString":"block"}},"id":181,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"number","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1210:12:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"argumentTypes":null,"hexValue":"31","id":182,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1225:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1210:16:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":179,"name":"blockhash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":228,"src":"1200:9:2","typeDescriptions":{"typeIdentifier":"t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$","typeString":"function (uint256) view returns (bytes32)"}},"id":184,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1200:27:2","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"nodeType":"VariableDeclarationStatement","src":"1180:47:2"},{"assignments":[187],"declarations":[{"constant":false,"id":187,"name":"myWinner","nodeType":"VariableDeclaration","scope":201,"src":"1237:13:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":186,"name":"uint","nodeType":"ElementaryTypeName","src":"1237:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":196,"initialValue":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":195,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":189,"name":"blockhash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":178,"src":"1258:9:2","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes32","typeString":"bytes32"}],"id":188,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"1253:4:2","typeDescriptions":{"typeIdentifier":"t_type$_t_uint256_$","typeString":"type(uint256)"},"typeName":"uint"},"id":190,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1253:15:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"%","rightExpression":{"argumentTypes":null,"components":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":193,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":191,"name":"userNumber","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":173,"src":"1272:10:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"+","rightExpression":{"argumentTypes":null,"hexValue":"31","id":192,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1283:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1272:12:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"id":194,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"1271:14:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1253:32:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1237:48:2"},{"expression":{"argumentTypes":null,"id":199,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":197,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":145,"src":"1398:6:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":198,"name":"myWinner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"1407:8:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1398:17:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":200,"nodeType":"ExpressionStatement","src":"1398:17:2"}]},"documentation":null,"id":202,"implemented":true,"kind":"function","modifiers":[],"name":"generateRandomNumber","nodeType":"FunctionDefinition","parameters":{"id":162,"nodeType":"ParameterList","parameters":[],"src":"869:2:2"},"returnParameters":{"id":165,"nodeType":"ParameterList","parameters":[{"constant":false,"id":164,"name":"","nodeType":"VariableDeclaration","scope":202,"src":"887:4:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":163,"name":"uint","nodeType":"ElementaryTypeName","src":"887:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"886:6:2"},"scope":222,"src":"840:582:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":211,"nodeType":"Block","src":"1510:41:2","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":207,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"1527:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":209,"indexExpression":{"argumentTypes":null,"id":208,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":145,"src":"1537:6:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1527:17:2","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"functionReturnParameters":206,"id":210,"nodeType":"Return","src":"1520:24:2"}]},"documentation":null,"id":212,"implemented":true,"kind":"function","modifiers":[],"name":"viewResult","nodeType":"FunctionDefinition","parameters":{"id":203,"nodeType":"ParameterList","parameters":[],"src":"1473:2:2"},"returnParameters":{"id":206,"nodeType":"ParameterList","parameters":[{"constant":false,"id":205,"name":"","nodeType":"VariableDeclaration","scope":212,"src":"1496:13:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":204,"name":"string","nodeType":"ElementaryTypeName","src":"1496:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"1495:15:2"},"scope":222,"src":"1454:97:2","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":220,"nodeType":"Block","src":"1603:40:2","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":217,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"1620:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":218,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1620:16:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":216,"id":219,"nodeType":"Return","src":"1613:23:2"}]},"documentation":null,"id":221,"implemented":true,"kind":"function","modifiers":[],"name":"viewUsers","nodeType":"FunctionDefinition","parameters":{"id":213,"nodeType":"ParameterList","parameters":[],"src":"1575:2:2"},"returnParameters":{"id":216,"nodeType":"ParameterList","parameters":[{"constant":false,"id":215,"name":"","nodeType":"VariableDeclaration","scope":221,"src":"1598:4:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":214,"name":"uint","nodeType":"ElementaryTypeName","src":"1598:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1597:6:2"},"scope":222,"src":"1557:86:2","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":223,"src":"89:1556:2"}],"src":"0:1645:2"},"compiler":{"name":"solc","version":"0.5.0+commit.1d4f565a.Emscripten.clang"},"networks":{"3":{"events":{},"links":{},"address":"0x106136eE5e6C8e975FF301481d49469C7D3681a1","transactionHash":"0xce0b55cf84847f92972cf8b639c53c9289a4bd507145925d9c0e73cd8fc39338"},"5777":{"events":{},"links":{},"address":"0x1Edd9270D7A823225fb10e22053a875500F2edf9","transactionHash":"0x8db834ec8f2fdd5067484eb55d2c5063cdaa8104fe59901fdb64bc82be7c3d5f"}},"schemaVersion":"3.0.0","updatedAt":"2019-01-14T15:26:48.159Z","devdoc":{"methods":{}},"userdoc":{"methods":{}}};

/***/ }),

/***/ "./pages/web3/components/List.js":
/*!***************************************!*\
  !*** ./pages/web3/components/List.js ***!
  \***************************************/
/*! exports provided: List, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/andy/roulette-ethereum/client/pages/web3/components/List.js";



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
            lineNumber: 8
          },
          __self: this
        }, "#", user.id, " ", user.name);
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2077261517",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Members", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-2077261517",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, list), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2077261517",
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5L3JvdWxldHRlLWV0aGVyZXVtL2NsaWVudC9wYWdlcy93ZWIzL2NvbXBvbmVudHMvTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQjRCIiwiZmlsZSI6Ii9Vc2Vycy9hbmR5L3JvdWxldHRlLWV0aGVyZXVtL2NsaWVudC9wYWdlcy93ZWIzL2NvbXBvbmVudHMvTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5wcm9wcy5tZW1iZXJzLm1hcCh1c2VyID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17dXNlci5pZH0+XG4gICAgICAgICAgICAgICAgICAgICN7dXNlci5pZH0ge3VzZXIubmFtZX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIE1lbWJlcnNcbiAgICAgICAgICAgICAgICA8dWw+e2xpc3R9PC91bD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdDsiXX0= */\n/*@ sourceURL=/Users/andy/roulette-ethereum/client/pages/web3/components/List.js */",
        __self: this
      }));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./pages/web3/components/generateRandomNumber.js":
/*!*******************************************************!*\
  !*** ./pages/web3/components/generateRandomNumber.js ***!
  \*******************************************************/
/*! exports provided: GenerateRandomNumber, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateRandomNumber", function() { return GenerateRandomNumber; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../provider */ "./pages/web3/provider.js");
/* harmony import */ var _artifacts_Roulette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../artifacts/Roulette */ "./pages/web3/artifacts/Roulette.json");
var _artifacts_Roulette__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../artifacts/Roulette */ "./pages/web3/artifacts/Roulette.json", 1);

var _jsxFileName = "/Users/andy/roulette-ethereum/client/pages/web3/components/generateRandomNumber.js";



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



var GenerateRandomNumber =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GenerateRandomNumber, _React$Component);

  function GenerateRandomNumber(props) {
    var _this;

    _classCallCheck(this, GenerateRandomNumber);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GenerateRandomNumber).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnClick",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var storage, result, winNumber, winnerName;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.generateRandom();

            case 2:
              _context.next = 4;
              return Object(_provider__WEBPACK_IMPORTED_MODULE_3__["getInstance"])(_artifacts_Roulette__WEBPACK_IMPORTED_MODULE_4__);

            case 4:
              storage = _context.sent;
              _context.next = 7;
              return storage.winner.call();

            case 7:
              result = _context.sent;
              _context.next = 10;
              return result.toNumber();

            case 10:
              winNumber = _context.sent;
              _context.next = 13;
              return _this.setState({
                number: winNumber + 1
              });

            case 13:
              _context.next = 15;
              return storage.viewResult();

            case 15:
              winnerName = _context.sent;
              _context.next = 18;
              return _this.setState({
                winner: winnerName
              });

            case 18:
              console.log(winnerName);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "generateRandom",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var storage, addresses, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_provider__WEBPACK_IMPORTED_MODULE_3__["getInstance"])(_artifacts_Roulette__WEBPACK_IMPORTED_MODULE_4__);

            case 2:
              storage = _context2.sent;
              _context2.next = 5;
              return _provider__WEBPACK_IMPORTED_MODULE_3__["eth"].getAccounts();

            case 5:
              addresses = _context2.sent;
              _context2.next = 8;
              return storage.generateRandomNumber({
                from: addresses[0]
              });

            case 8:
              result = _context2.sent;
              return _context2.abrupt("return", result);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _this.state = {
      number: "",
      winner: ""
    };
    _this.handleOnClick = _this.handleOnClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(GenerateRandomNumber, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1045944001",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        className: "jsx-1045944001",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Let's start Roulette ! "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        onClick: this.handleOnClick,
        className: "jsx-1045944001",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Start"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
        className: "jsx-1045944001",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Random Number : ", this.state.number), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
        className: "jsx-1045944001",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "So ... Winner is :", this.state.winner), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "1045944001",
        css: "h2.jsx-1045944001{font-size:18px;margin-top:30px;}h5.jsx-1045944001{font-size:15px;}button.jsx-1045944001{font-size:100%;}button.jsx-1045944001:hover,button.jsx-1045944001:focus{background:#0053ba;}button.jsx-1045944001:focus{outline:1px solid #fff;outline-offset:-4px;}button.jsx-1045944001:active{-webkit-transform:scale(0.99);-ms-transform:scale(0.99);transform:scale(0.99);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5L3JvdWxldHRlLWV0aGVyZXVtL2NsaWVudC9wYWdlcy93ZWIzL2NvbXBvbmVudHMvZ2VuZXJhdGVSYW5kb21OdW1iZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0M0QixBQUl1QyxBQUtBLEFBSUEsQUFLSSxBQUlLLEFBS0QsZUF0QlAsQUFLbkIsQUFJQSxJQUtBLElBSXdCLFFBakJ4QixZQWtCQSxtQ0FJQSIsImZpbGUiOiIvVXNlcnMvYW5keS9yb3VsZXR0ZS1ldGhlcmV1bS9jbGllbnQvcGFnZXMvd2ViMy9jb21wb25lbnRzL2dlbmVyYXRlUmFuZG9tTnVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoLCBnZXRJbnN0YW5jZSB9IGZyb20gJy4uL3Byb3ZpZGVyJ1xuaW1wb3J0IFJvdWxldHRlIGZyb20gXCIuLi9hcnRpZmFjdHMvUm91bGV0dGVcIlxuXG5leHBvcnQgY2xhc3MgR2VuZXJhdGVSYW5kb21OdW1iZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7bnVtYmVyIDogXCJcIiwgd2lubmVyIDogXCJcIn07XG4gICAgICAgIHRoaXMuaGFuZGxlT25DbGljayA9IHRoaXMuaGFuZGxlT25DbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZU9uQ2xpY2sgPSBhc3luYygpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5udW1iZXIpXG4gICAgICAgIGF3YWl0IHRoaXMuZ2VuZXJhdGVSYW5kb20oKTtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IGdldEluc3RhbmNlKFJvdWxldHRlKVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdG9yYWdlLndpbm5lci5jYWxsKClcbiAgICAgICAgY29uc3Qgd2luTnVtYmVyID0gYXdhaXQgcmVzdWx0LnRvTnVtYmVyKClcbiAgICAgICAgLy8w55Wq55uu44GL44KJ5aeL44G+44Gj44Gm44GE44KL44Gu44Gn6Kq/5pW0XG4gICAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoe251bWJlciA6IHdpbk51bWJlciArIDF9KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm51bWJlcilcblxuICAgICAgICBjb25zdCB3aW5uZXJOYW1lID0gYXdhaXQgc3RvcmFnZS52aWV3UmVzdWx0KClcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7d2lubmVyIDogd2lubmVyTmFtZX0pXG4gICAgICAgIGNvbnNvbGUubG9nKHdpbm5lck5hbWUpXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVSYW5kb20gPSBhc3luYygpID0+IHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IGdldEluc3RhbmNlKFJvdWxldHRlKVxuICAgICAgICBjb25zdCBhZGRyZXNzZXMgPSBhd2FpdCBldGguZ2V0QWNjb3VudHMoKVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdG9yYWdlLmdlbmVyYXRlUmFuZG9tTnVtYmVyKHtmcm9tOmFkZHJlc3Nlc1swXX0pXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+TGV0J3Mgc3RhcnQgUm91bGV0dGUgISA8L2gyPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVPbkNsaWNrfT5TdGFydDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxoNT5SYW5kb20gTnVtYmVyIDoge3RoaXMuc3RhdGUubnVtYmVyfTwvaDU+XG4gICAgICAgICAgICAgICAgPGg1PlNvIC4uLiBXaW5uZXIgaXMgOnt0aGlzLnN0YXRlLndpbm5lcn08L2g1PlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBidXR0b246aG92ZXIsXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzAwNTNiYTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmUtb2Zmc2V0OiAtNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdlbmVyYXRlUmFuZG9tTnVtYmVyOyJdfQ== */\n/*@ sourceURL=/Users/andy/roulette-ethereum/client/pages/web3/components/generateRandomNumber.js */",
        __self: this
      }));
    }
  }]);

  return GenerateRandomNumber;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (GenerateRandomNumber);

/***/ }),

/***/ "./pages/web3/components/getDeployInfo.js":
/*!************************************************!*\
  !*** ./pages/web3/components/getDeployInfo.js ***!
  \************************************************/
/*! exports provided: GetDeployInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDeployInfo", function() { return GetDeployInfo; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../provider */ "./pages/web3/provider.js");
/* harmony import */ var _artifacts_Roulette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../artifacts/Roulette */ "./pages/web3/artifacts/Roulette.json");
var _artifacts_Roulette__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../artifacts/Roulette */ "./pages/web3/artifacts/Roulette.json", 1);

var _jsxFileName = "/Users/andy/roulette-ethereum/client/pages/web3/components/getDeployInfo.js";



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



var GetDeployInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GetDeployInfo, _React$Component);

  function GetDeployInfo(props) {
    var _this;

    _classCallCheck(this, GetDeployInfo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GetDeployInfo).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnClick",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var storage, deployTime, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_provider__WEBPACK_IMPORTED_MODULE_3__["getInstance"])(_artifacts_Roulette__WEBPACK_IMPORTED_MODULE_4__);

            case 2:
              storage = _context.sent;
              _context.next = 5;
              return storage.deployTime.call();

            case 5:
              deployTime = _context.sent;
              result = deployTime.toNumber(); // console.log(ownerProfile)

              console.log(_this.state.time);

              _this.setState({
                time: result
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _this.state = {
      time: ""
    };
    _this.handleOnClick = _this.handleOnClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(GetDeployInfo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-667988292",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        onClick: this.handleOnClick,
        className: "jsx-667988292",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Get Deploy Time"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
        className: "jsx-667988292",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Deployed Time is : ", this.state.time), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "667988292",
        css: "h5.jsx-667988292{font-size:15px;}button.jsx-667988292{font-size:100%;margin-top:20px;}button.jsx-667988292:hover,button.jsx-667988292:focus{background:#0053ba;}button.jsx-667988292:focus{outline:1px solid #fff;outline-offset:-4px;}button.jsx-667988292:active{-webkit-transform:scale(0.99);-ms-transform:scale(0.99);transform:scale(0.99);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5L3JvdWxldHRlLWV0aGVyZXVtL2NsaWVudC9wYWdlcy93ZWIzL2NvbXBvbmVudHMvZ2V0RGVwbG95SW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQjRCLEFBR3VDLEFBSUEsQUFNSSxBQUlLLEFBS0QsZUFsQjFCLEFBSW1CLElBTW5CLElBSXdCLFFBVHhCLFlBVUEsbUNBSUEiLCJmaWxlIjoiL1VzZXJzL2FuZHkvcm91bGV0dGUtZXRoZXJldW0vY2xpZW50L3BhZ2VzL3dlYjMvY29tcG9uZW50cy9nZXREZXBsb3lJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoLCBnZXRJbnN0YW5jZSB9IGZyb20gJy4uL3Byb3ZpZGVyJ1xuaW1wb3J0IFJvdWxldHRlIGZyb20gXCIuLi9hcnRpZmFjdHMvUm91bGV0dGVcIlxuXG5leHBvcnQgY2xhc3MgR2V0RGVwbG95SW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0gIHt0aW1lIDogXCJcIn1cbiAgICAgICAgdGhpcy5oYW5kbGVPbkNsaWNrID0gdGhpcy5oYW5kbGVPbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVPbkNsaWNrfT5HZXQgRGVwbG95IFRpbWU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8aDU+RGVwbG95ZWQgVGltZSBpcyA6IHt0aGlzLnN0YXRlLnRpbWV9PC9oNT5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBidXR0b246aG92ZXIsXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzAwNTNiYTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmUtb2Zmc2V0OiAtNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBoYW5kbGVPbkNsaWNrID0gYXN5bmMoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCBnZXRJbnN0YW5jZShSb3VsZXR0ZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RvcmFnZSlcbiAgICAgICAgY29uc3QgZGVwbG95VGltZSA9IGF3YWl0IHN0b3JhZ2UuZGVwbG95VGltZS5jYWxsKClcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZGVwbG95VGltZS50b051bWJlcigpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG93bmVyUHJvZmlsZSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS50aW1lKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0aW1lIDogcmVzdWx0fSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdldERlcGxveUluZm87Il19 */\n/*@ sourceURL=/Users/andy/roulette-ethereum/client/pages/web3/components/getDeployInfo.js */",
        __self: this
      }));
    }
  }]);

  return GetDeployInfo;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (GetDeployInfo);

/***/ }),

/***/ "./pages/web3/components/getOwnerInfo.js":
/*!***********************************************!*\
  !*** ./pages/web3/components/getOwnerInfo.js ***!
  \***********************************************/
/*! exports provided: GetOwnerInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOwnerInfo", function() { return GetOwnerInfo; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../provider */ "./pages/web3/provider.js");
/* harmony import */ var _artifacts_Roulette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../artifacts/Roulette */ "./pages/web3/artifacts/Roulette.json");
var _artifacts_Roulette__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../artifacts/Roulette */ "./pages/web3/artifacts/Roulette.json", 1);

var _jsxFileName = "/Users/andy/roulette-ethereum/client/pages/web3/components/getOwnerInfo.js";



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
              return Object(_provider__WEBPACK_IMPORTED_MODULE_3__["getInstance"])(_artifacts_Roulette__WEBPACK_IMPORTED_MODULE_4__);

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
        className: "jsx-3058222513",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        onClick: this.handleOnClick,
        className: "jsx-3058222513",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Get Owner Address"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
        className: "jsx-3058222513",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Owner Address is : ", this.state.address), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3058222513",
        css: "h5.jsx-3058222513{font-size:15px;}button.jsx-3058222513{font-size:100%;margin-top:40px;}button.jsx-3058222513:hover,button.jsx-3058222513:focus{background:#0053ba;}button.jsx-3058222513:focus{outline:1px solid #fff;outline-offset:-4px;}button.jsx-3058222513:active{-webkit-transform:scale(0.99);-ms-transform:scale(0.99);transform:scale(0.99);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5L3JvdWxldHRlLWV0aGVyZXVtL2NsaWVudC9wYWdlcy93ZWIzL2NvbXBvbmVudHMvZ2V0T3duZXJJbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCNEIsQUFHdUMsQUFNQSxBQU9JLEFBSUssQUFLRCxlQW5CMUIsQUFJbUIsSUFPbkIsSUFJd0IsUUFUeEIsWUFVQSxtQ0FJQSIsImZpbGUiOiIvVXNlcnMvYW5keS9yb3VsZXR0ZS1ldGhlcmV1bS9jbGllbnQvcGFnZXMvd2ViMy9jb21wb25lbnRzL2dldE93bmVySW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aCwgZ2V0SW5zdGFuY2UgfSBmcm9tICcuLi9wcm92aWRlcidcbmltcG9ydCBSb3VsZXR0ZSBmcm9tIFwiLi4vYXJ0aWZhY3RzL1JvdWxldHRlXCJcblxuZXhwb3J0IGNsYXNzIEdldE93bmVySW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0gIHthZGRyZXNzIDogXCJcIn1cbiAgICAgICAgdGhpcy5oYW5kbGVPbkNsaWNrID0gdGhpcy5oYW5kbGVPbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVPbkNsaWNrfT5HZXQgT3duZXIgQWRkcmVzczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxoNT5Pd25lciBBZGRyZXNzIGlzIDoge3RoaXMuc3RhdGUuYWRkcmVzc308L2g1PlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctYnV0dG9tOjEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBidXR0b246aG92ZXIsXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpmb2N1c3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzAwNTNiYTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmUtb2Zmc2V0OiAtNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBoYW5kbGVPbkNsaWNrID0gYXN5bmMoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCBnZXRJbnN0YW5jZShSb3VsZXR0ZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RvcmFnZSlcbiAgICAgICAgY29uc3Qgb3duZXJQcm9maWxlID0gYXdhaXQgc3RvcmFnZS5vd25lckFkZHIuY2FsbCgpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG93bmVyUHJvZmlsZSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hZGRyZXNzKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHthZGRyZXNzIDogb3duZXJQcm9maWxlfSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hZGRyZXNzKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2V0T3duZXJJbmZvOyJdfQ== */\n/*@ sourceURL=/Users/andy/roulette-ethereum/client/pages/web3/components/getOwnerInfo.js */",
        __self: this
      }));
    }
  }]);

  return GetOwnerInfo;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (GetOwnerInfo);

/***/ }),

/***/ "./pages/web3/components/setUserInfo.js":
/*!**********************************************!*\
  !*** ./pages/web3/components/setUserInfo.js ***!
  \**********************************************/
/*! exports provided: SetUserInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserInfo", function() { return SetUserInfo; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../provider */ "./pages/web3/provider.js");
/* harmony import */ var _artifacts_Roulette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../artifacts/Roulette */ "./pages/web3/artifacts/Roulette.json");
var _artifacts_Roulette__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../artifacts/Roulette */ "./pages/web3/artifacts/Roulette.json", 1);

var _jsxFileName = "/Users/andy/roulette-ethereum/client/pages/web3/components/setUserInfo.js";



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



var SetUserInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SetUserInfo, _React$Component);

  function SetUserInfo(props) {
    var _this;

    _classCallCheck(this, SetUserInfo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SetUserInfo).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setName",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(name) {
        var storage, addresses;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_provider__WEBPACK_IMPORTED_MODULE_3__["getInstance"])(_artifacts_Roulette__WEBPACK_IMPORTED_MODULE_4__);

              case 2:
                storage = _context.sent;
                _context.next = 5;
                return _provider__WEBPACK_IMPORTED_MODULE_3__["eth"].getAccounts();

              case 5:
                addresses = _context.sent;
                _context.next = 8;
                return storage.setUserName(name, {
                  from: addresses[0]
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.state = {
      value: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setName = _this.setName.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SetUserInfo, [{
    key: "handleChange",
    value: function () {
      var _handleChange = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.setState({
                  value: event.target.value
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log("User was Created:" + this.state.value);
                event.preventDefault();
                _context3.next = 4;
                return this.setName(this.state.value);

              case 4:
                this.props.addUser(this.state.value);
                this.setState({
                  value: ""
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
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
        className: "jsx-3298938708",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-3298938708",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "jsx-3298938708" + " " + "content-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Please input candicates:", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        value: this.state.value,
        onChange: this.handleChange,
        className: "jsx-3298938708",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        className: "jsx-3298938708" + " " + "content-submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3298938708",
        css: "form.jsx-3298938708{margin-top:40px;}.content-title.jsx-3298938708{font-size:20px;}h5.jsx-3298938708{font-size:15px;}.content-submit.jsx-3298938708:hover,content.jsx-3298938708:focus{background:#0053ba;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5L3JvdWxldHRlLWV0aGVyZXVtL2NsaWVudC9wYWdlcy93ZWIzL2NvbXBvbmVudHMvc2V0VXNlckluZm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEM0QixBQUl3QyxBQUlELEFBSUEsQUFJSSxlQVB0QixBQUlBLENBUkEsR0FZQSIsImZpbGUiOiIvVXNlcnMvYW5keS9yb3VsZXR0ZS1ldGhlcmV1bS9jbGllbnQvcGFnZXMvd2ViMy9jb21wb25lbnRzL3NldFVzZXJJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoLCBnZXRJbnN0YW5jZSB9IGZyb20gJy4uL3Byb3ZpZGVyJ1xuaW1wb3J0IFJvdWxldHRlIGZyb20gXCIuLi9hcnRpZmFjdHMvUm91bGV0dGVcIlxuXG5leHBvcnQgY2xhc3MgU2V0VXNlckluZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7dmFsdWU6Jyd9O1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXROYW1lID0gdGhpcy5zZXROYW1lLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2V0TmFtZSA9IGFzeW5jKG5hbWUpID0+e1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gYXdhaXQgZ2V0SW5zdGFuY2UoUm91bGV0dGUpXG4gICAgICAgIGNvbnN0IGFkZHJlc3NlcyA9IGF3YWl0IGV0aC5nZXRBY2NvdW50cygpXG4gICAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0VXNlck5hbWUobmFtZSx7ZnJvbTphZGRyZXNzZXNbMF19KVxuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZUNoYW5nZShldmVudCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOmV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZVN1Ym1pdChldmVudCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciB3YXMgQ3JlYXRlZDpcIiArIHRoaXMuc3RhdGUudmFsdWUpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhd2FpdCB0aGlzLnNldE5hbWUodGhpcy5zdGF0ZS52YWx1ZSlcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRVc2VyKHRoaXMuc3RhdGUudmFsdWUpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlIDogXCJcIn0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRlbnQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSBpbnB1dCBjYW5kaWNhdGVzOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY29udGVudC1zdWJtaXRcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIi8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIHsvKiB7dGhpcy5zdGF0ZS52YWx1ZX0gKi99XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjQwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC10aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC1zdWJtaXQ6aG92ZXIsY29udGVudDpmb2N1c3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzAwNTNiYTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2V0VXNlckluZm87Il19 */\n/*@ sourceURL=/Users/andy/roulette-ethereum/client/pages/web3/components/setUserInfo.js */",
        __self: this
      }));
    }
  }]);

  return SetUserInfo;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (SetUserInfo);

/***/ }),

/***/ "./pages/web3/provider.js":
/*!********************************!*\
  !*** ./pages/web3/provider.js ***!
  \********************************/
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

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/web3/App.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/web3/App.js */"./pages/web3/App.js");


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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

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
//# sourceMappingURL=App.js.map