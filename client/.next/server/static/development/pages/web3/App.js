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
                  members: [].concat(_toConsumableArray(members), [{
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

module.exports = {"contractName":"Roulette","abi":[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userNames","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x4ebd3aea"},{"constant":true,"inputs":[],"name":"deployTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x7a40624b"},{"constant":true,"inputs":[],"name":"ownerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x9c675eaa"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"makeRandomNumberTimes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xbf6cb85a"},{"constant":true,"inputs":[],"name":"winner","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xdfbf53ae"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"constant":false,"inputs":[{"name":"_userNames","type":"string"}],"name":"setUserName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x2b5914fe"},{"constant":false,"inputs":[],"name":"generateRandomNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x773a1154"},{"constant":true,"inputs":[],"name":"viewResult","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3cff0380"},{"constant":true,"inputs":[],"name":"viewUsers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x14ebdb79"}],"bytecode":"0x6080604052600060015534801561001557600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060008282540192505081905550610b2a806100b56000396000f3fe6080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806314ebdb79146100a95780632b5914fe146100d45780633cff0380146100fd5780634ebd3aea14610128578063773a1154146101655780637a40624b146101905780639c675eaa146101bb578063bf6cb85a146101e6578063dfbf53ae14610223578063f2fde38b1461024e575b600080fd5b3480156100b557600080fd5b506100be610277565b6040516100cb91906109bb565b60405180910390f35b3480156100e057600080fd5b506100fb60048036036100f69190810190610811565b610284565b005b34801561010957600080fd5b506101126102c6565b60405161011f9190610979565b60405180910390f35b34801561013457600080fd5b5061014f600480360361014a9190810190610852565b610381565b60405161015c9190610957565b60405180910390f35b34801561017157600080fd5b5061017a61043c565b60405161018791906109bb565b60405180910390f35b34801561019c57600080fd5b506101a5610547565b6040516101b291906109bb565b60405180910390f35b3480156101c757600080fd5b506101d061054d565b6040516101dd919061093c565b60405180910390f35b3480156101f257600080fd5b5061020d600480360361020891908101906107e8565b610572565b60405161021a91906109bb565b60405180910390f35b34801561022f57600080fd5b5061023861058a565b60405161024591906109bb565b60405180910390f35b34801561025a57600080fd5b50610275600480360361027091908101906107e8565b610590565b005b6000600280549050905090565b60028190806001815401808255809150509060018203906000526020600020016000909192909190915090805190602001906102c19291906106c5565b505050565b606060026003548154811015156102d957fe5b906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103775780601f1061034c57610100808354040283529160200191610377565b820191906000526020600020905b81548152906001019060200180831161035a57829003601f168201915b5050505050905090565b60028181548110151561039057fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104345780601f1061040957610100808354040283529160200191610434565b820191906000526020600020905b81548152906001019060200180831161041757829003601f168201915b505050505081565b600080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415156104c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b89061099b565b60405180910390fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555060006002805490509050600060014303409050600060018301826001900481151561053757fe5b0690508060038190555050505090565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915090505481565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105eb57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561064657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561068257600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061070657805160ff1916838001178555610734565b82800160010185558215610734579182015b82811115610733578251825591602001919060010190610718565b5b5090506107419190610745565b5090565b61076791905b8082111561076357600081600090555060010161074b565b5090565b90565b60006107768235610a81565b905092915050565b600082601f830112151561079157600080fd5b81356107a461079f82610a03565b6109d6565b915080825260208301602083018583830111156107c057600080fd5b6107cb838284610a9d565b50505092915050565b60006107e08235610a93565b905092915050565b6000602082840312156107fa57600080fd5b60006108088482850161076a565b91505092915050565b60006020828403121561082357600080fd5b600082013567ffffffffffffffff81111561083d57600080fd5b6108498482850161077e565b91505092915050565b60006020828403121561086457600080fd5b6000610872848285016107d4565b91505092915050565b61088481610a45565b82525050565b600061089582610a3a565b8084526108a9816020860160208601610aac565b6108b281610adf565b602085010191505092915050565b60006108cb82610a2f565b8084526108df816020860160208601610aac565b6108e881610adf565b602085010191505092915050565b6000601e82527f796f7520616c7265616479206d616b652072616e646f6d206e756d62657200006020830152604082019050919050565b61093681610a77565b82525050565b6000602082019050610951600083018461087b565b92915050565b6000602082019050818103600083015261097181846108c0565b905092915050565b60006020820190508181036000830152610993818461088a565b905092915050565b600060208201905081810360008301526109b4816108f6565b9050919050565b60006020820190506109d0600083018461092d565b92915050565b6000604051905081810181811067ffffffffffffffff821117156109f957600080fd5b8060405250919050565b600067ffffffffffffffff821115610a1a57600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b6000610a5082610a57565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a8c82610a57565b9050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610aca578082015181840152602081019050610aaf565b83811115610ad9576000848401525b50505050565b6000601f19601f830116905091905056fea265627a7a723058205db6a8424c337929fd058020a11d6fe92c839a98ae85e53c00ef9729e262d7fa6c6578706572696d656e74616cf50037","deployedBytecode":"0x6080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806314ebdb79146100a95780632b5914fe146100d45780633cff0380146100fd5780634ebd3aea14610128578063773a1154146101655780637a40624b146101905780639c675eaa146101bb578063bf6cb85a146101e6578063dfbf53ae14610223578063f2fde38b1461024e575b600080fd5b3480156100b557600080fd5b506100be610277565b6040516100cb91906109bb565b60405180910390f35b3480156100e057600080fd5b506100fb60048036036100f69190810190610811565b610284565b005b34801561010957600080fd5b506101126102c6565b60405161011f9190610979565b60405180910390f35b34801561013457600080fd5b5061014f600480360361014a9190810190610852565b610381565b60405161015c9190610957565b60405180910390f35b34801561017157600080fd5b5061017a61043c565b60405161018791906109bb565b60405180910390f35b34801561019c57600080fd5b506101a5610547565b6040516101b291906109bb565b60405180910390f35b3480156101c757600080fd5b506101d061054d565b6040516101dd919061093c565b60405180910390f35b3480156101f257600080fd5b5061020d600480360361020891908101906107e8565b610572565b60405161021a91906109bb565b60405180910390f35b34801561022f57600080fd5b5061023861058a565b60405161024591906109bb565b60405180910390f35b34801561025a57600080fd5b50610275600480360361027091908101906107e8565b610590565b005b6000600280549050905090565b60028190806001815401808255809150509060018203906000526020600020016000909192909190915090805190602001906102c19291906106c5565b505050565b606060026003548154811015156102d957fe5b906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103775780601f1061034c57610100808354040283529160200191610377565b820191906000526020600020905b81548152906001019060200180831161035a57829003601f168201915b5050505050905090565b60028181548110151561039057fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104345780601f1061040957610100808354040283529160200191610434565b820191906000526020600020905b81548152906001019060200180831161041757829003601f168201915b505050505081565b600080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415156104c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b89061099b565b60405180910390fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555060006002805490509050600060014303409050600060018301826001900481151561053757fe5b0690508060038190555050505090565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915090505481565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105eb57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561064657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561068257600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061070657805160ff1916838001178555610734565b82800160010185558215610734579182015b82811115610733578251825591602001919060010190610718565b5b5090506107419190610745565b5090565b61076791905b8082111561076357600081600090555060010161074b565b5090565b90565b60006107768235610a81565b905092915050565b600082601f830112151561079157600080fd5b81356107a461079f82610a03565b6109d6565b915080825260208301602083018583830111156107c057600080fd5b6107cb838284610a9d565b50505092915050565b60006107e08235610a93565b905092915050565b6000602082840312156107fa57600080fd5b60006108088482850161076a565b91505092915050565b60006020828403121561082357600080fd5b600082013567ffffffffffffffff81111561083d57600080fd5b6108498482850161077e565b91505092915050565b60006020828403121561086457600080fd5b6000610872848285016107d4565b91505092915050565b61088481610a45565b82525050565b600061089582610a3a565b8084526108a9816020860160208601610aac565b6108b281610adf565b602085010191505092915050565b60006108cb82610a2f565b8084526108df816020860160208601610aac565b6108e881610adf565b602085010191505092915050565b6000601e82527f796f7520616c7265616479206d616b652072616e646f6d206e756d62657200006020830152604082019050919050565b61093681610a77565b82525050565b6000602082019050610951600083018461087b565b92915050565b6000602082019050818103600083015261097181846108c0565b905092915050565b60006020820190508181036000830152610993818461088a565b905092915050565b600060208201905081810360008301526109b4816108f6565b9050919050565b60006020820190506109d0600083018461092d565b92915050565b6000604051905081810181811067ffffffffffffffff821117156109f957600080fd5b8060405250919050565b600067ffffffffffffffff821115610a1a57600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b6000610a5082610a57565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a8c82610a57565b9050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610aca578082015181840152602081019050610aaf565b83811115610ad9576000848401525b50505050565b6000601f19601f830116905091905056fea265627a7a723058205db6a8424c337929fd058020a11d6fe92c839a98ae85e53c00ef9729e262d7fa6c6578706572696d656e74616cf50037","sourceMap":"89:1553:2:-;;;189:1;164:26;;197:84;8:9:-1;5:2;;;30:1;27;20:12;5:2;197:84:2;238:10:1;226:9;;:22;;;;;;;;;;;;;;;;;;239:10:2;227:9;;:22;;;;;;;;;;;;;;;;;;273:1;259:10;;:15;;;;;;;;;;;89:1553;;;;;;","deployedSourceMap":"89:1553:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1554:86;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1554:86:2;;;;;;;;;;;;;;;;;;;;671:97;;8:9:-1;5:2;;;30:1;27;20:12;5:2;671:97:2;;;;;;;;;;;;;;;;;;;1451;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1451:97:2;;;;;;;;;;;;;;;;;;;;380:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;380:25:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;840:579;;8:9:-1;5:2;;;30:1;27;20:12;5:2;840:579:2;;;;;;;;;;;;;;;;;;;;164:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;164:26:2;;;;;;;;;;;;;;;;;;;;54:24:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;54:24:1;;;;;;;;;;;;;;;;;;;;553:54:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;553:54:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;435:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;435:18:2;;;;;;;;;;;;;;;;;;;;261:288:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;261:288:1;;;;;;;;;;;;;;;;;;;1554:86:2;1595:4;1617:9;:16;;;;1610:23;;1554:86;:::o;671:97::-;735:9;750:10;735:26;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;735:26:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;671:97;:::o;1451:::-;1493:13;1524:9;1534:6;;1524:17;;;;;;;;;;;;;;;;;1517:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1451:97;:::o;380:25::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;840:579::-;887:4;1042:1;1005:21;:33;1027:10;1005:33;;;;;;;;;;;;;;;;:38;997:80;;;;;;;;;;;;;;;;;;;;;;;;1087:21;:33;1109:10;1087:33;;;;;;;;;;;;;;;;:35;;;;;;;;;;;;;1133:15;1151:9;:16;;;;1133:34;;1177:17;1222:1;1207:12;:16;1197:27;1177:47;;1234:13;1280:1;1269:10;:12;1255:9;1250:15;;;:32;;;;;;;;1234:48;;1404:8;1395:6;:17;;;;840:579;;;;:::o;164:26::-;;;;:::o;54:24:1:-;;;;;;;;;;;;;:::o;553:54:2:-;;;;;;;;;;;;;;;;;:::o;435:18::-;;;;:::o;261:288:1:-;137:9;;;;;;;;;;;123:23;;:10;:23;;;115:32;;;;;;;;414:9;;;;;;;;;;;400:23;;:10;:23;;;392:32;;;;;;;;507:1;486:23;;:9;:23;;;;478:32;;;;;;;;533:9;521;;:21;;;;;;;;;;;;;;;;;;261:288;:::o;89:1553:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5:118:-1:-;;72:46;110:6;97:20;72:46;;;63:55;;57:66;;;;;131:442;;233:3;226:4;218:6;214:17;210:27;203:35;200:2;;;251:1;248;241:12;200:2;288:6;275:20;310:65;325:49;367:6;325:49;;;310:65;;;301:74;;395:6;388:5;381:21;431:4;423:6;419:17;464:4;457:5;453:16;499:3;490:6;485:3;481:16;478:25;475:2;;;516:1;513;506:12;475:2;526:41;560:6;555:3;550;526:41;;;193:380;;;;;;;;581:118;;648:46;686:6;673:20;648:46;;;639:55;;633:66;;;;;706:241;;810:2;798:9;789:7;785:23;781:32;778:2;;;826:1;823;816:12;778:2;861:1;878:53;923:7;914:6;903:9;899:22;878:53;;;868:63;;840:97;772:175;;;;;954:347;;1068:2;1056:9;1047:7;1043:23;1039:32;1036:2;;;1084:1;1081;1074:12;1036:2;1147:1;1136:9;1132:17;1119:31;1170:18;1162:6;1159:30;1156:2;;;1202:1;1199;1192:12;1156:2;1222:63;1277:7;1268:6;1257:9;1253:22;1222:63;;;1212:73;;1098:193;1030:271;;;;;1308:241;;1412:2;1400:9;1391:7;1387:23;1383:32;1380:2;;;1428:1;1425;1418:12;1380:2;1463:1;1480:53;1525:7;1516:6;1505:9;1501:22;1480:53;;;1470:63;;1442:97;1374:175;;;;;1556:110;1629:31;1654:5;1629:31;;;1624:3;1617:44;1611:55;;;1673:300;;1775:39;1808:5;1775:39;;;1831:6;1826:3;1819:19;1843:63;1899:6;1892:4;1887:3;1883:14;1876:4;1869:5;1865:16;1843:63;;;1938:29;1960:6;1938:29;;;1931:4;1926:3;1922:14;1918:50;1911:57;;1755:218;;;;;;1980:292;;2078:35;2107:5;2078:35;;;2130:6;2125:3;2118:19;2142:63;2198:6;2191:4;2186:3;2182:14;2175:4;2168:5;2164:16;2142:63;;;2237:29;2259:6;2237:29;;;2230:4;2225:3;2221:14;2217:50;2210:57;;2058:214;;;;;;2280:296;;2435:2;2430:3;2423:15;2472:66;2467:2;2462:3;2458:12;2451:88;2567:2;2562:3;2558:12;2551:19;;2416:160;;;;2584:110;2657:31;2682:5;2657:31;;;2652:3;2645:44;2639:55;;;2701:193;;2809:2;2798:9;2794:18;2786:26;;2823:61;2881:1;2870:9;2866:17;2857:6;2823:61;;;2780:114;;;;;2901:273;;3025:2;3014:9;3010:18;3002:26;;3075:9;3069:4;3065:20;3061:1;3050:9;3046:17;3039:47;3100:64;3159:4;3150:6;3100:64;;;3092:72;;2996:178;;;;;3181:281;;3309:2;3298:9;3294:18;3286:26;;3359:9;3353:4;3349:20;3345:1;3334:9;3330:17;3323:47;3384:68;3447:4;3438:6;3384:68;;;3376:76;;3280:182;;;;;3469:387;;3650:2;3639:9;3635:18;3627:26;;3700:9;3694:4;3690:20;3686:1;3675:9;3671:17;3664:47;3725:121;3841:4;3725:121;;;3717:129;;3621:235;;;;3863:193;;3971:2;3960:9;3956:18;3948:26;;3985:61;4043:1;4032:9;4028:17;4019:6;3985:61;;;3942:114;;;;;4063:256;;4125:2;4119:9;4109:19;;4163:4;4155:6;4151:17;4262:6;4250:10;4247:22;4226:18;4214:10;4211:34;4208:62;4205:2;;;4283:1;4280;4273:12;4205:2;4303:10;4299:2;4292:22;4103:216;;;;;4326:259;;4470:18;4462:6;4459:30;4456:2;;;4502:1;4499;4492:12;4456:2;4546:4;4542:9;4535:4;4527:6;4523:17;4519:33;4511:41;;4575:4;4569;4565:15;4557:23;;4393:192;;;;4592:88;;4669:5;4663:12;4653:22;;4647:33;;;;4687:92;;4768:5;4762:12;4752:22;;4746:33;;;;4786:105;;4855:31;4880:5;4855:31;;;4844:42;;4838:53;;;;4898:128;;4978:42;4971:5;4967:54;4956:65;;4950:76;;;;5033:79;;5102:5;5091:16;;5085:27;;;;5119:105;;5188:31;5213:5;5188:31;;;5177:42;;5171:53;;;;5231:79;;5300:5;5289:16;;5283:27;;;;5318:145;5399:6;5394:3;5389;5376:30;5455:1;5446:6;5441:3;5437:16;5430:27;5369:94;;;;5472:268;5537:1;5544:101;5558:6;5555:1;5552:13;5544:101;;;5634:1;5629:3;5625:11;5619:18;5615:1;5610:3;5606:11;5599:39;5580:2;5577:1;5573:10;5568:15;;5544:101;;;5660:6;5657:1;5654:13;5651:2;;;5725:1;5716:6;5711:3;5707:16;5700:27;5651:2;5521:219;;;;;5748:97;;5836:2;5832:7;5827:2;5820:5;5816:14;5812:28;5802:38;;5796:49;;;","source":"pragma solidity >0.4.99 <0.6.0;\npragma experimental ABIEncoderV2;\nimport \"./Owned.sol\";\n\ncontract Roulette is Owned{\n\n    // owner can deploy contract at once;\n    uint public deployTime = 0;\n\n    constructor() public{\n        ownerAddr = msg.sender;\n        deployTime += 1;\n    }\n\n    modifier onlyOnce{\n        require(deployTime == 0);\n        _;\n    }\n\n    // candidates\n    string[] public userNames;\n\n    // roulette winner\n    uint public winner;\n\n    // userAddress => make Randome Number Times\n    // user can make random number only once\n    mapping(address => uint ) public makeRandomNumberTimes;\n\n    // set candidate\n    //TODO:onlyOwnerを消すこと\n    function setUserName(string memory _userNames) public {\n        userNames.push(_userNames);\n    }\n\n    // NOTE : this function uses blockhash and it is NOT secure !\n    function generateRandomNumber() public returns(uint){\n        //TODO:テストのためにrequireをコメントアウトしているので戻す事\n        require(makeRandomNumberTimes[msg.sender] == 0,\"you already make random number\");\n        makeRandomNumberTimes[msg.sender]++;\n\n        uint userNumber = userNames.length;\n        bytes32 blockhash = blockhash(block.number - 1);\n        uint myWinner = uint(blockhash) % (userNumber+1);\n        //TODO:配列のあたいの値の入ってない部分がwinnerになるとエラーになる\n        winner = myWinner;\n    }\n\n    // return wineer name\n    function viewResult() public view returns(string memory){\n        return userNames[winner];\n    }\n\n    function viewUsers() public view returns(uint){\n        return userNames.length;\n    }\n}","sourcePath":"/Users/andy/roulette-ethereum/contracts/Roulette.sol","ast":{"absolutePath":"/Users/andy/roulette-ethereum/contracts/Roulette.sol","exportedSymbols":{"Roulette":[232]},"id":233,"nodeType":"SourceUnit","nodes":[{"id":110,"literals":["solidity",">","0.4",".99","<","0.6",".0"],"nodeType":"PragmaDirective","src":"0:31:2"},{"id":111,"literals":["experimental","ABIEncoderV2"],"nodeType":"PragmaDirective","src":"32:33:2"},{"absolutePath":"/Users/andy/roulette-ethereum/contracts/Owned.sol","file":"./Owned.sol","id":112,"nodeType":"ImportDirective","scope":233,"sourceUnit":109,"src":"66:21:2","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":113,"name":"Owned","nodeType":"UserDefinedTypeName","referencedDeclaration":108,"src":"110:5:2","typeDescriptions":{"typeIdentifier":"t_contract$_Owned_$108","typeString":"contract Owned"}},"id":114,"nodeType":"InheritanceSpecifier","src":"110:5:2"}],"contractDependencies":[108],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":232,"linearizedBaseContracts":[232,108],"name":"Roulette","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":117,"name":"deployTime","nodeType":"VariableDeclaration","scope":232,"src":"164:26:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":115,"name":"uint","nodeType":"ElementaryTypeName","src":"164:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":116,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"189:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"body":{"id":129,"nodeType":"Block","src":"217:64:2","statements":[{"expression":{"argumentTypes":null,"id":123,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":120,"name":"ownerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"227:9:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":121,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":247,"src":"239:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":122,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"239:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"227:22:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":124,"nodeType":"ExpressionStatement","src":"227:22:2"},{"expression":{"argumentTypes":null,"id":127,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":125,"name":"deployTime","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":117,"src":"259:10:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"hexValue":"31","id":126,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"273:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"259:15:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":128,"nodeType":"ExpressionStatement","src":"259:15:2"}]},"documentation":null,"id":130,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":118,"nodeType":"ParameterList","parameters":[],"src":"208:2:2"},"returnParameters":{"id":119,"nodeType":"ParameterList","parameters":[],"src":"217:0:2"},"scope":232,"src":"197:84:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":139,"nodeType":"Block","src":"304:52:2","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":135,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":133,"name":"deployTime","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":117,"src":"322:10:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":134,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"336:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"322:15:2","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":132,"name":"require","nodeType":"Identifier","overloadedDeclarations":[250,251],"referencedDeclaration":250,"src":"314:7:2","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":136,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"314:24:2","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":137,"nodeType":"ExpressionStatement","src":"314:24:2"},{"id":138,"nodeType":"PlaceholderStatement","src":"348:1:2"}]},"documentation":null,"id":140,"name":"onlyOnce","nodeType":"ModifierDefinition","parameters":{"id":131,"nodeType":"ParameterList","parameters":[],"src":"304:0:2"},"src":"287:69:2","visibility":"internal"},{"constant":false,"id":143,"name":"userNames","nodeType":"VariableDeclaration","scope":232,"src":"380:25:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string[]"},"typeName":{"baseType":{"id":141,"name":"string","nodeType":"ElementaryTypeName","src":"380:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"id":142,"length":null,"nodeType":"ArrayTypeName","src":"380:8:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage_ptr","typeString":"string[]"}},"value":null,"visibility":"public"},{"constant":false,"id":145,"name":"winner","nodeType":"VariableDeclaration","scope":232,"src":"435:18:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":144,"name":"uint","nodeType":"ElementaryTypeName","src":"435:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"constant":false,"id":149,"name":"makeRandomNumberTimes","nodeType":"VariableDeclaration","scope":232,"src":"553:54:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":148,"keyType":{"id":146,"name":"address","nodeType":"ElementaryTypeName","src":"561:7:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"553:25:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":147,"name":"uint","nodeType":"ElementaryTypeName","src":"572:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"body":{"id":160,"nodeType":"Block","src":"725:43:2","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":157,"name":"_userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":151,"src":"750:10:2","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"expression":{"argumentTypes":null,"id":154,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"735:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":156,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"735:14:2","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_string_storage_$returns$_t_uint256_$","typeString":"function (string storage ref) returns (uint256)"}},"id":158,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"735:26:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":159,"nodeType":"ExpressionStatement","src":"735:26:2"}]},"documentation":null,"id":161,"implemented":true,"kind":"function","modifiers":[],"name":"setUserName","nodeType":"FunctionDefinition","parameters":{"id":152,"nodeType":"ParameterList","parameters":[{"constant":false,"id":151,"name":"_userNames","nodeType":"VariableDeclaration","scope":161,"src":"692:24:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":150,"name":"string","nodeType":"ElementaryTypeName","src":"692:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"691:26:2"},"returnParameters":{"id":153,"nodeType":"ParameterList","parameters":[],"src":"725:0:2"},"scope":232,"src":"671:97:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":211,"nodeType":"Block","src":"892:527:2","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":172,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":167,"name":"makeRandomNumberTimes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":149,"src":"1005:21:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":170,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":168,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":247,"src":"1027:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":169,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1027:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1005:33:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":171,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1042:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"1005:38:2","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"796f7520616c7265616479206d616b652072616e646f6d206e756d626572","id":173,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"1044:32:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_1305ce81bcbf59c3b6e958d61a071eb5ab9684e6977f0af6d91f2cecefddf5ef","typeString":"literal_string \"you already make random number\""},"value":"you already make random number"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_1305ce81bcbf59c3b6e958d61a071eb5ab9684e6977f0af6d91f2cecefddf5ef","typeString":"literal_string \"you already make random number\""}],"id":166,"name":"require","nodeType":"Identifier","overloadedDeclarations":[250,251],"referencedDeclaration":251,"src":"997:7:2","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":174,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"997:80:2","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":175,"nodeType":"ExpressionStatement","src":"997:80:2"},{"expression":{"argumentTypes":null,"id":180,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"1087:35:2","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":176,"name":"makeRandomNumberTimes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":149,"src":"1087:21:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":179,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":177,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":247,"src":"1109:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":178,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1109:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1087:33:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":181,"nodeType":"ExpressionStatement","src":"1087:35:2"},{"assignments":[183],"declarations":[{"constant":false,"id":183,"name":"userNumber","nodeType":"VariableDeclaration","scope":211,"src":"1133:15:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":182,"name":"uint","nodeType":"ElementaryTypeName","src":"1133:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":186,"initialValue":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":184,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"1151:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":185,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1151:16:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1133:34:2"},{"assignments":[188],"declarations":[{"constant":false,"id":188,"name":"blockhash","nodeType":"VariableDeclaration","scope":211,"src":"1177:17:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":187,"name":"bytes32","nodeType":"ElementaryTypeName","src":"1177:7:2","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"}],"id":195,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":193,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":190,"name":"block","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":237,"src":"1207:5:2","typeDescriptions":{"typeIdentifier":"t_magic_block","typeString":"block"}},"id":191,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"number","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1207:12:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"argumentTypes":null,"hexValue":"31","id":192,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1222:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1207:16:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":189,"name":"blockhash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":238,"src":"1197:9:2","typeDescriptions":{"typeIdentifier":"t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$","typeString":"function (uint256) view returns (bytes32)"}},"id":194,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1197:27:2","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"nodeType":"VariableDeclarationStatement","src":"1177:47:2"},{"assignments":[197],"declarations":[{"constant":false,"id":197,"name":"myWinner","nodeType":"VariableDeclaration","scope":211,"src":"1234:13:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":196,"name":"uint","nodeType":"ElementaryTypeName","src":"1234:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":206,"initialValue":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":205,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":199,"name":"blockhash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":188,"src":"1255:9:2","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes32","typeString":"bytes32"}],"id":198,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"1250:4:2","typeDescriptions":{"typeIdentifier":"t_type$_t_uint256_$","typeString":"type(uint256)"},"typeName":"uint"},"id":200,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1250:15:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"%","rightExpression":{"argumentTypes":null,"components":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":203,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":201,"name":"userNumber","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":183,"src":"1269:10:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"+","rightExpression":{"argumentTypes":null,"hexValue":"31","id":202,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1280:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1269:12:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"id":204,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"1268:14:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1250:32:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1234:48:2"},{"expression":{"argumentTypes":null,"id":209,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":207,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":145,"src":"1395:6:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":208,"name":"myWinner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":197,"src":"1404:8:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1395:17:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":210,"nodeType":"ExpressionStatement","src":"1395:17:2"}]},"documentation":null,"id":212,"implemented":true,"kind":"function","modifiers":[],"name":"generateRandomNumber","nodeType":"FunctionDefinition","parameters":{"id":162,"nodeType":"ParameterList","parameters":[],"src":"869:2:2"},"returnParameters":{"id":165,"nodeType":"ParameterList","parameters":[{"constant":false,"id":164,"name":"","nodeType":"VariableDeclaration","scope":212,"src":"887:4:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":163,"name":"uint","nodeType":"ElementaryTypeName","src":"887:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"886:6:2"},"scope":232,"src":"840:579:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":221,"nodeType":"Block","src":"1507:41:2","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":217,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"1524:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":219,"indexExpression":{"argumentTypes":null,"id":218,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":145,"src":"1534:6:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1524:17:2","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"functionReturnParameters":216,"id":220,"nodeType":"Return","src":"1517:24:2"}]},"documentation":null,"id":222,"implemented":true,"kind":"function","modifiers":[],"name":"viewResult","nodeType":"FunctionDefinition","parameters":{"id":213,"nodeType":"ParameterList","parameters":[],"src":"1470:2:2"},"returnParameters":{"id":216,"nodeType":"ParameterList","parameters":[{"constant":false,"id":215,"name":"","nodeType":"VariableDeclaration","scope":222,"src":"1493:13:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":214,"name":"string","nodeType":"ElementaryTypeName","src":"1493:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"1492:15:2"},"scope":232,"src":"1451:97:2","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":230,"nodeType":"Block","src":"1600:40:2","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":227,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"1617:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":228,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1617:16:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":226,"id":229,"nodeType":"Return","src":"1610:23:2"}]},"documentation":null,"id":231,"implemented":true,"kind":"function","modifiers":[],"name":"viewUsers","nodeType":"FunctionDefinition","parameters":{"id":223,"nodeType":"ParameterList","parameters":[],"src":"1572:2:2"},"returnParameters":{"id":226,"nodeType":"ParameterList","parameters":[{"constant":false,"id":225,"name":"","nodeType":"VariableDeclaration","scope":231,"src":"1595:4:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":224,"name":"uint","nodeType":"ElementaryTypeName","src":"1595:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1594:6:2"},"scope":232,"src":"1554:86:2","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":233,"src":"89:1553:2"}],"src":"0:1642:2"},"legacyAST":{"absolutePath":"/Users/andy/roulette-ethereum/contracts/Roulette.sol","exportedSymbols":{"Roulette":[232]},"id":233,"nodeType":"SourceUnit","nodes":[{"id":110,"literals":["solidity",">","0.4",".99","<","0.6",".0"],"nodeType":"PragmaDirective","src":"0:31:2"},{"id":111,"literals":["experimental","ABIEncoderV2"],"nodeType":"PragmaDirective","src":"32:33:2"},{"absolutePath":"/Users/andy/roulette-ethereum/contracts/Owned.sol","file":"./Owned.sol","id":112,"nodeType":"ImportDirective","scope":233,"sourceUnit":109,"src":"66:21:2","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":113,"name":"Owned","nodeType":"UserDefinedTypeName","referencedDeclaration":108,"src":"110:5:2","typeDescriptions":{"typeIdentifier":"t_contract$_Owned_$108","typeString":"contract Owned"}},"id":114,"nodeType":"InheritanceSpecifier","src":"110:5:2"}],"contractDependencies":[108],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":232,"linearizedBaseContracts":[232,108],"name":"Roulette","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":117,"name":"deployTime","nodeType":"VariableDeclaration","scope":232,"src":"164:26:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":115,"name":"uint","nodeType":"ElementaryTypeName","src":"164:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":116,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"189:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"body":{"id":129,"nodeType":"Block","src":"217:64:2","statements":[{"expression":{"argumentTypes":null,"id":123,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":120,"name":"ownerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"227:9:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":121,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":247,"src":"239:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":122,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"239:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"227:22:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":124,"nodeType":"ExpressionStatement","src":"227:22:2"},{"expression":{"argumentTypes":null,"id":127,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":125,"name":"deployTime","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":117,"src":"259:10:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"hexValue":"31","id":126,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"273:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"259:15:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":128,"nodeType":"ExpressionStatement","src":"259:15:2"}]},"documentation":null,"id":130,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":118,"nodeType":"ParameterList","parameters":[],"src":"208:2:2"},"returnParameters":{"id":119,"nodeType":"ParameterList","parameters":[],"src":"217:0:2"},"scope":232,"src":"197:84:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":139,"nodeType":"Block","src":"304:52:2","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":135,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":133,"name":"deployTime","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":117,"src":"322:10:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":134,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"336:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"322:15:2","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":132,"name":"require","nodeType":"Identifier","overloadedDeclarations":[250,251],"referencedDeclaration":250,"src":"314:7:2","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":136,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"314:24:2","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":137,"nodeType":"ExpressionStatement","src":"314:24:2"},{"id":138,"nodeType":"PlaceholderStatement","src":"348:1:2"}]},"documentation":null,"id":140,"name":"onlyOnce","nodeType":"ModifierDefinition","parameters":{"id":131,"nodeType":"ParameterList","parameters":[],"src":"304:0:2"},"src":"287:69:2","visibility":"internal"},{"constant":false,"id":143,"name":"userNames","nodeType":"VariableDeclaration","scope":232,"src":"380:25:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string[]"},"typeName":{"baseType":{"id":141,"name":"string","nodeType":"ElementaryTypeName","src":"380:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"id":142,"length":null,"nodeType":"ArrayTypeName","src":"380:8:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage_ptr","typeString":"string[]"}},"value":null,"visibility":"public"},{"constant":false,"id":145,"name":"winner","nodeType":"VariableDeclaration","scope":232,"src":"435:18:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":144,"name":"uint","nodeType":"ElementaryTypeName","src":"435:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"constant":false,"id":149,"name":"makeRandomNumberTimes","nodeType":"VariableDeclaration","scope":232,"src":"553:54:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":148,"keyType":{"id":146,"name":"address","nodeType":"ElementaryTypeName","src":"561:7:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"553:25:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":147,"name":"uint","nodeType":"ElementaryTypeName","src":"572:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"body":{"id":160,"nodeType":"Block","src":"725:43:2","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":157,"name":"_userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":151,"src":"750:10:2","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"expression":{"argumentTypes":null,"id":154,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"735:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":156,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"735:14:2","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_string_storage_$returns$_t_uint256_$","typeString":"function (string storage ref) returns (uint256)"}},"id":158,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"735:26:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":159,"nodeType":"ExpressionStatement","src":"735:26:2"}]},"documentation":null,"id":161,"implemented":true,"kind":"function","modifiers":[],"name":"setUserName","nodeType":"FunctionDefinition","parameters":{"id":152,"nodeType":"ParameterList","parameters":[{"constant":false,"id":151,"name":"_userNames","nodeType":"VariableDeclaration","scope":161,"src":"692:24:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":150,"name":"string","nodeType":"ElementaryTypeName","src":"692:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"691:26:2"},"returnParameters":{"id":153,"nodeType":"ParameterList","parameters":[],"src":"725:0:2"},"scope":232,"src":"671:97:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":211,"nodeType":"Block","src":"892:527:2","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":172,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":167,"name":"makeRandomNumberTimes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":149,"src":"1005:21:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":170,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":168,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":247,"src":"1027:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":169,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1027:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1005:33:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":171,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1042:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"1005:38:2","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"796f7520616c7265616479206d616b652072616e646f6d206e756d626572","id":173,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"1044:32:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_1305ce81bcbf59c3b6e958d61a071eb5ab9684e6977f0af6d91f2cecefddf5ef","typeString":"literal_string \"you already make random number\""},"value":"you already make random number"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_1305ce81bcbf59c3b6e958d61a071eb5ab9684e6977f0af6d91f2cecefddf5ef","typeString":"literal_string \"you already make random number\""}],"id":166,"name":"require","nodeType":"Identifier","overloadedDeclarations":[250,251],"referencedDeclaration":251,"src":"997:7:2","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":174,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"997:80:2","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":175,"nodeType":"ExpressionStatement","src":"997:80:2"},{"expression":{"argumentTypes":null,"id":180,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"1087:35:2","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":176,"name":"makeRandomNumberTimes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":149,"src":"1087:21:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":179,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":177,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":247,"src":"1109:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":178,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1109:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1087:33:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":181,"nodeType":"ExpressionStatement","src":"1087:35:2"},{"assignments":[183],"declarations":[{"constant":false,"id":183,"name":"userNumber","nodeType":"VariableDeclaration","scope":211,"src":"1133:15:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":182,"name":"uint","nodeType":"ElementaryTypeName","src":"1133:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":186,"initialValue":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":184,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"1151:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":185,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1151:16:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1133:34:2"},{"assignments":[188],"declarations":[{"constant":false,"id":188,"name":"blockhash","nodeType":"VariableDeclaration","scope":211,"src":"1177:17:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":187,"name":"bytes32","nodeType":"ElementaryTypeName","src":"1177:7:2","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"}],"id":195,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":193,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":190,"name":"block","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":237,"src":"1207:5:2","typeDescriptions":{"typeIdentifier":"t_magic_block","typeString":"block"}},"id":191,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"number","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1207:12:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"argumentTypes":null,"hexValue":"31","id":192,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1222:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1207:16:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":189,"name":"blockhash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":238,"src":"1197:9:2","typeDescriptions":{"typeIdentifier":"t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$","typeString":"function (uint256) view returns (bytes32)"}},"id":194,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1197:27:2","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"nodeType":"VariableDeclarationStatement","src":"1177:47:2"},{"assignments":[197],"declarations":[{"constant":false,"id":197,"name":"myWinner","nodeType":"VariableDeclaration","scope":211,"src":"1234:13:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":196,"name":"uint","nodeType":"ElementaryTypeName","src":"1234:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":206,"initialValue":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":205,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":199,"name":"blockhash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":188,"src":"1255:9:2","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes32","typeString":"bytes32"}],"id":198,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"1250:4:2","typeDescriptions":{"typeIdentifier":"t_type$_t_uint256_$","typeString":"type(uint256)"},"typeName":"uint"},"id":200,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1250:15:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"%","rightExpression":{"argumentTypes":null,"components":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":203,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":201,"name":"userNumber","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":183,"src":"1269:10:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"+","rightExpression":{"argumentTypes":null,"hexValue":"31","id":202,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1280:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1269:12:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"id":204,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"1268:14:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1250:32:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"1234:48:2"},{"expression":{"argumentTypes":null,"id":209,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":207,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":145,"src":"1395:6:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":208,"name":"myWinner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":197,"src":"1404:8:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1395:17:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":210,"nodeType":"ExpressionStatement","src":"1395:17:2"}]},"documentation":null,"id":212,"implemented":true,"kind":"function","modifiers":[],"name":"generateRandomNumber","nodeType":"FunctionDefinition","parameters":{"id":162,"nodeType":"ParameterList","parameters":[],"src":"869:2:2"},"returnParameters":{"id":165,"nodeType":"ParameterList","parameters":[{"constant":false,"id":164,"name":"","nodeType":"VariableDeclaration","scope":212,"src":"887:4:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":163,"name":"uint","nodeType":"ElementaryTypeName","src":"887:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"886:6:2"},"scope":232,"src":"840:579:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":221,"nodeType":"Block","src":"1507:41:2","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":217,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"1524:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":219,"indexExpression":{"argumentTypes":null,"id":218,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":145,"src":"1534:6:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1524:17:2","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"functionReturnParameters":216,"id":220,"nodeType":"Return","src":"1517:24:2"}]},"documentation":null,"id":222,"implemented":true,"kind":"function","modifiers":[],"name":"viewResult","nodeType":"FunctionDefinition","parameters":{"id":213,"nodeType":"ParameterList","parameters":[],"src":"1470:2:2"},"returnParameters":{"id":216,"nodeType":"ParameterList","parameters":[{"constant":false,"id":215,"name":"","nodeType":"VariableDeclaration","scope":222,"src":"1493:13:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":214,"name":"string","nodeType":"ElementaryTypeName","src":"1493:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"1492:15:2"},"scope":232,"src":"1451:97:2","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":230,"nodeType":"Block","src":"1600:40:2","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":227,"name":"userNames","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":143,"src":"1617:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":228,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1617:16:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":226,"id":229,"nodeType":"Return","src":"1610:23:2"}]},"documentation":null,"id":231,"implemented":true,"kind":"function","modifiers":[],"name":"viewUsers","nodeType":"FunctionDefinition","parameters":{"id":223,"nodeType":"ParameterList","parameters":[],"src":"1572:2:2"},"returnParameters":{"id":226,"nodeType":"ParameterList","parameters":[{"constant":false,"id":225,"name":"","nodeType":"VariableDeclaration","scope":231,"src":"1595:4:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":224,"name":"uint","nodeType":"ElementaryTypeName","src":"1595:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1594:6:2"},"scope":232,"src":"1554:86:2","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":233,"src":"89:1553:2"}],"src":"0:1642:2"},"compiler":{"name":"solc","version":"0.5.0+commit.1d4f565a.Emscripten.clang"},"networks":{"3":{"events":{},"links":{},"address":"0x54dDEFcd7EC70405701F596856e6E5A64d5d7883","transactionHash":"0x15db64320d34f968cd1eb4899e24c6000f53987a6c837c0bc0209c29c23ee4a0"},"5777":{"events":{},"links":{},"address":"0xc6b11DB40a46F73C049cAC3E564e1Fd207f49a4f","transactionHash":"0xb5ebfb50eafa4d84fc84fc2726d39ee3fcd59607172f58381363c3e01285acbd"}},"schemaVersion":"3.0.0","updatedAt":"2019-01-15T12:47:22.557Z","devdoc":{"methods":{}},"userdoc":{"methods":{}}};

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