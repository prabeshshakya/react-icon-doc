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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/@core/code-block/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/@core/code-block/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CodeBlock; });
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cogo-toast */ "cogo-toast");
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cogo_toast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! copy-to-clipboard */ "copy-to-clipboard");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prism-react-renderer */ "prism-react-renderer");
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prism_react_renderer_themes_nightOwl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prism-react-renderer/themes/nightOwl */ "prism-react-renderer/themes/nightOwl");
/* harmony import */ var prism_react_renderer_themes_nightOwl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer_themes_nightOwl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/Prabesh/Desktop/bk/preview/src/components/@core/code-block/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function CodeBlock({
  code
}) {
  const copyToClipboard = () => {
    copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()(code);
    cogo_toast__WEBPACK_IMPORTED_MODULE_0___default.a.success(`Copied to clipboard`, {
      position: "bottom-center"
    });
  };

  return __jsx(prism_react_renderer__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__["defaultProps"], {
    theme: prism_react_renderer_themes_nightOwl__WEBPACK_IMPORTED_MODULE_3___default.a,
    code: code.trim(),
    language: "jsx",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), ({
    className,
    style,
    tokens,
    getLineProps,
    getTokenProps
  }) => __jsx("pre", {
    className: `${className} code`,
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("a", {
    onClick: copyToClipboard,
    className: "prism-code--copy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__["FiClipboard"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  })), tokens.map((line, i) => __jsx("div", _extends({}, getLineProps({
    line,
    key: i
  }), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), line.map((token, key) => __jsx("span", _extends({}, getTokenProps({
    token,
    key
  }), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  })))))));
}

/***/ }),

/***/ "./src/components/@core/container/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/@core/container/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Prabesh/Desktop/bk/preview/src/components/@core/container/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Container({
  children,
  title
}) {
  return __jsx("div", {
    className: "p3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, title), children);
}

/***/ }),

/***/ "./src/components/pages/home/badges.tsx":
/*!**********************************************!*\
  !*** ./src/components/pages/home/badges.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Prabesh/Desktop/bk/preview/src/components/pages/home/badges.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Badges() {
  return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "https://www.npmjs.com/package/react-icons",
    rel: "nofollow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "https://img.shields.io/npm/v/react-icons.svg",
    alt: "npm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  })), "\u2003", __jsx("a", {
    href: "https://travis-ci.com/react-icons/react-icons",
    rel: "nofollow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "https://travis-ci.com/react-icons/react-icons.svg?branch=master",
    alt: "travis ci",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Badges);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var _components_core_code_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/@core/code-block */ "./src/components/@core/code-block/index.tsx");
/* harmony import */ var _components_core_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/@core/container */ "./src/components/@core/container/index.tsx");
/* harmony import */ var _components_pages_home_badges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/pages/home/badges */ "./src/components/pages/home/badges.tsx");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/Prabesh/Desktop/bk/preview/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





function HomePage() {
  return __jsx(_components_core_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: _utils_constants__WEBPACK_IMPORTED_MODULE_3__["BRAND_TITLE"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_components_pages_home_badges__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using."), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, "Installation"), __jsx(_components_core_code_block__WEBPACK_IMPORTED_MODULE_0__["default"], {
    code: `npm install react-icons --save`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "Usage"), __jsx(_components_core_code_block__WEBPACK_IMPORTED_MODULE_0__["default"], {
    code: _utils_constants__WEBPACK_IMPORTED_MODULE_3__["HOME_USAGE"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, "More info"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://github.com/prabeshshakya/react-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "GitHub \u2197")));
}

/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/*! exports provided: BRAND_TITLE, BRAND_TITLE_MONO, BRAND_DESCRIPTION, BRAND_KEYWORDS, HOME_USAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRAND_TITLE", function() { return BRAND_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRAND_TITLE_MONO", function() { return BRAND_TITLE_MONO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRAND_DESCRIPTION", function() { return BRAND_DESCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRAND_KEYWORDS", function() { return BRAND_KEYWORDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_USAGE", function() { return HOME_USAGE; });
const BRAND_TITLE = "React Icons";
const BRAND_TITLE_MONO = "react-icons";
const BRAND_DESCRIPTION = "Include popular icons in your React projects easly with react-icons.";
const BRAND_KEYWORDS = "React, Icons, Tree Shaking, SVG";
const HOME_USAGE = `
import { UiAirplay } from 'react-icons/ui';

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <UiAirplay />? </h3>
  }
}`;

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Prabesh/Desktop/bk/preview/src/pages/index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "cogo-toast":
/*!*****************************!*\
  !*** external "cogo-toast" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cogo-toast");

/***/ }),

/***/ "copy-to-clipboard":
/*!************************************!*\
  !*** external "copy-to-clipboard" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("copy-to-clipboard");

/***/ }),

/***/ "prism-react-renderer":
/*!***************************************!*\
  !*** external "prism-react-renderer" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prism-react-renderer");

/***/ }),

/***/ "prism-react-renderer/themes/nightOwl":
/*!*******************************************************!*\
  !*** external "prism-react-renderer/themes/nightOwl" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prism-react-renderer/themes/nightOwl");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map