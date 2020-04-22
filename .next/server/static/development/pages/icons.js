module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/icons.js": 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
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
/* harmony import */ var vyaguta_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vyaguta-icons/fi */ "vyaguta-icons/fi");
/* harmony import */ var vyaguta_icons_fi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vyaguta_icons_fi__WEBPACK_IMPORTED_MODULE_5__);
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
  }, __jsx(vyaguta_icons_fi__WEBPACK_IMPORTED_MODULE_5__["FiClipboard"], {
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

/***/ "./src/components/@core/icon/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/@core/icon/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cogo-toast */ "cogo-toast");
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cogo_toast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! copy-to-clipboard */ "copy-to-clipboard");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Prabesh/Desktop/bk/preview/src/components/@core/icon/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function Icon({
  icon,
  name
}) {
  const copyToClipboard = () => {
    copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()(name);
    cogo_toast__WEBPACK_IMPORTED_MODULE_0___default.a.success(`Copied '${name}' to clipboard`, {
      position: "bottom-center"
    });
  };

  return __jsx("div", {
    className: "item",
    tabIndex: 0,
    onClick: copyToClipboard,
    key: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "icon h2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, typeof icon === "function" && icon()), __jsx("div", {
    className: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, name));
}

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./src/components/pages/icons/iconset-import.tsx":
/*!*******************************************************!*\
  !*** ./src/components/pages/icons/iconset-import.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconSetImport; });
/* harmony import */ var _components_core_code_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/@core/code-block */ "./src/components/@core/code-block/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Prabesh/Desktop/bk/preview/src/components/pages/icons/iconset-import.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function IconSetImport({
  iconId
}) {
  const importCode = `import { IconName } from "vyaguta-icons/${iconId}";`;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Import"), __jsx(_components_core_code_block__WEBPACK_IMPORTED_MODULE_0__["default"], {
    code: importCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/pages/icons/iconset-info.tsx":
/*!*****************************************************!*\
  !*** ./src/components/pages/icons/iconset-info.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconSetInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Prabesh/Desktop/bk/preview/src/components/pages/icons/iconset-info.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function IconSetInfo({
  icon
}) {
  const {
    licenseUrl,
    license,
    projectUrl
  } = icon;
  return __jsx("table", {
    className: "iconset--info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "License"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: licenseUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, license))), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, "Project"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: projectUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, projectUrl)))));
}

/***/ }),

/***/ "./src/components/pages/icons/iconset-viewer.tsx":
/*!*******************************************************!*\
  !*** ./src/components/pages/icons/iconset-viewer.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconSetViewer; });
/* harmony import */ var _components_core_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/@core/icon */ "./src/components/@core/icon/index.tsx");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_getIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/getIcons */ "./src/utils/getIcons.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading */ "./src/components/pages/icons/loading.tsx");
var _jsxFileName = "/Users/Prabesh/Desktop/bk/preview/src/components/pages/icons/iconset-viewer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





function IconSetViewer({
  icon
}) {
  const IconSet = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default.a.lib(() => Object(_utils_getIcons__WEBPACK_IMPORTED_MODULE_2__["getIcons"])(icon.id));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "Icons"), __jsx(IconSet, {
    fallback: __jsx(_loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 26
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, ({
    default: icons
  }) => __jsx("div", {
    className: "icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, Object.keys(icons).map(name => __jsx(_components_core_icon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    key: name,
    icon: icons[name],
    name: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  })))));
}

/***/ }),

/***/ "./src/components/pages/icons/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/pages/icons/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconsPageComponent; });
/* harmony import */ var _components_core_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/@core/container */ "./src/components/@core/container/index.tsx");
/* harmony import */ var _utils_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/icon */ "./src/utils/icon.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconset_import__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iconset-import */ "./src/components/pages/icons/iconset-import.tsx");
/* harmony import */ var _iconset_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iconset-info */ "./src/components/pages/icons/iconset-info.tsx");
/* harmony import */ var _iconset_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iconset-viewer */ "./src/components/pages/icons/iconset-viewer.tsx");
var _jsxFileName = "/Users/Prabesh/Desktop/bk/preview/src/components/pages/icons/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






function IconsPageComponent({
  iconId
}) {
  const icon = Object(_utils_icon__WEBPACK_IMPORTED_MODULE_1__["getIconById"])(iconId);
  return __jsx(_components_core_container__WEBPACK_IMPORTED_MODULE_0__["default"], {
    title: icon.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_iconset_info__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx(_iconset_import__WEBPACK_IMPORTED_MODULE_3__["default"], {
    iconId: icon.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx(_iconset_viewer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/pages/icons/loading.tsx":
/*!************************************************!*\
  !*** ./src/components/pages/icons/loading.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconsPageLoading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tiny_skeleton_loader_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-skeleton-loader-react */ "tiny-skeleton-loader-react");
/* harmony import */ var tiny_skeleton_loader_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tiny_skeleton_loader_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Prabesh/Desktop/bk/preview/src/components/pages/icons/loading.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function IconsPageLoading() {
  return __jsx("div", {
    className: "icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, Array(100).fill(null).map((c, i) => __jsx("div", {
    className: "item",
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx(tiny_skeleton_loader_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: "60px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(tiny_skeleton_loader_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: "15px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  })))));
}

/***/ }),

/***/ "./src/pages/icons.tsx":
/*!*****************************!*\
  !*** ./src/pages/icons.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconsPage; });
/* harmony import */ var _components_pages_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/pages/icons */ "./src/components/pages/icons/index.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Prabesh/Desktop/bk/preview/src/pages/icons.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function IconsPage() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    name
  } = router.query;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, name && __jsx(_components_pages_icons__WEBPACK_IMPORTED_MODULE_0__["default"], {
    iconId: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }));
}

/***/ }),

/***/ "./src/utils/getIcons.ts":
/*!*******************************!*\
  !*** ./src/utils/getIcons.ts ***!
  \*******************************/
/*! exports provided: getIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIcons", function() { return getIcons; });
const fn = function (id) {
  switch (id) {
    case "fi":
      return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! vyaguta-icons/fi/index */ "vyaguta-icons/fi/index", 7));

    case "ui":
      return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! vyaguta-icons/ui/index */ "vyaguta-icons/ui/index", 7));
  }
};

function getIcons(iconsId) {
  /*
  Dynamic Import with improved performance.
  Macros are used to avoid bundling unnecessary modules.
   Similar to this code
  ```
  return import(`vyaguta-icons/${iconsId}/index`);
  ```
  */
  return fn(iconsId);
}

/***/ }),

/***/ "./src/utils/icon.tsx":
/*!****************************!*\
  !*** ./src/utils/icon.tsx ***!
  \****************************/
/*! exports provided: ALL_ICONS, getIconById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_ICONS", function() { return ALL_ICONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIconById", function() { return getIconById; });
/* harmony import */ var vyaguta_icons_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vyaguta-icons/lib */ "vyaguta-icons/lib");
/* harmony import */ var vyaguta_icons_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vyaguta_icons_lib__WEBPACK_IMPORTED_MODULE_0__);

const ALL_ICONS = vyaguta_icons_lib__WEBPACK_IMPORTED_MODULE_0__["IconsManifest"];
const getIconById = id => {
  return ALL_ICONS.find(i => i.id === id);
};

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./src/pages/icons.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Prabesh/Desktop/bk/preview/src/pages/icons.tsx */"./src/pages/icons.tsx");


/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@loadable/component");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "tiny-skeleton-loader-react":
/*!*********************************************!*\
  !*** external "tiny-skeleton-loader-react" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tiny-skeleton-loader-react");

/***/ }),

/***/ "vyaguta-icons/fi":
/*!***********************************!*\
  !*** external "vyaguta-icons/fi" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vyaguta-icons/fi");

/***/ }),

/***/ "vyaguta-icons/fi/index":
/*!*****************************************!*\
  !*** external "vyaguta-icons/fi/index" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vyaguta-icons/fi/index");

/***/ }),

/***/ "vyaguta-icons/lib":
/*!************************************!*\
  !*** external "vyaguta-icons/lib" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vyaguta-icons/lib");

/***/ }),

/***/ "vyaguta-icons/ui/index":
/*!*****************************************!*\
  !*** external "vyaguta-icons/ui/index" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vyaguta-icons/ui/index");

/***/ })

/******/ });
//# sourceMappingURL=icons.js.map