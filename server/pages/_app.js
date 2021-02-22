module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./node_modules/tailwindcss/tailwind.css
var tailwind = __webpack_require__("uXJ4");

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__("zPlV");

// CONCATENATED MODULE: ./layouts/BaseLayout.js



/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable react/jsx-filename-extension */

/* eslint-disable react/react-in-jsx-scope */

/* eslint-disable react/prop-types */

/* eslint-disable import/no-extraneous-dependencies */
function BasicLayout({
  children
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minHeight: '100%'
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        position: 'sticky',
        top: '0px',
        right: '0px',
        left: '0px',
        zIndex: '5',
        backgroundColor: 'rgb(33, 33, 39)'
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          boxSizing: 'border-box'
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            paddingRight: '24px',
            width: '100%',
            margin: '0 auto',
            padding: '0 16px',
            maxWidth: 'calc(1256px)'
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: 'repeat(3, max-content) 1fr',
              alignItems: 'center',
              height: '60px'
            },
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "/",
              style: {
                textDecoration: 'none',
                backgroundColor: 'transparent'
              },
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/static/img/top-shot-logo-horizontal-white.svg",
                alt: "NBA Top Shot",
                style: {
                  display: 'block',
                  width: '120px'
                }
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 'auto',
                marginBottom: 'auto',
                marginLeft: '1ch',
                padding: '2px 5px',
                width: 'fit-content',
                maxHeight: '20px',
                color: 'rgb(255, 255, 255)',
                fontFamily: 'Shapiro, sans-serif',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '2.2px',
                textTransform: 'uppercase',
                whiteSpace: 'pre',
                backgroundColor: 'rgb(50, 94, 255)'
              },
              children: "BETA"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                flex: '1 1 0%',
                margin: '0 32px 0 0',
                height: '100%'
              },
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                style: {
                  paddingRight: '16px',
                  paddingLeft: '27px',
                  width: 'fit-content',
                  height: '100%',
                  cursor: 'pointer'
                },
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  href: "/",
                  style: {
                    fontFamily: 'Shapiro, sans-serif',
                    fontWeight: '700',
                    fontSize: '11px',
                    letterSpacing: '2.2px',
                    lineHeight: '13px',
                    textTransform: 'uppercase',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    width: 'fit-content',
                    height: '100%',
                    color: 'rgb(255, 255, 255)',
                    cursor: 'pointer'
                  },
                  children: "packs"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                style: {
                  paddingRight: '16px',
                  paddingLeft: '27px',
                  width: 'fit-content',
                  height: '100%',
                  cursor: 'pointer'
                },
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  href: "/",
                  style: {
                    fontFamily: 'Shapiro, sans-serif',
                    fontWeight: '700',
                    fontSize: '11px',
                    letterSpacing: '2.2px',
                    lineHeight: '13px',
                    textTransform: 'uppercase',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    width: 'fit-content',
                    height: '100%',
                    color: 'rgb(255, 255, 255)',
                    cursor: 'pointer'
                  },
                  children: "marketplace"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                style: {
                  paddingRight: '16px',
                  paddingLeft: '27px',
                  width: 'fit-content',
                  height: '100%',
                  cursor: 'pointer'
                },
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  href: "/",
                  style: {
                    fontFamily: 'Shapiro, sans-serif',
                    fontWeight: '700',
                    fontSize: '11px',
                    letterSpacing: '2.2px',
                    lineHeight: '13px',
                    textTransform: 'uppercase',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    width: 'fit-content',
                    height: '100%',
                    color: 'rgb(255, 255, 255)',
                    cursor: 'pointer'
                  },
                  children: "community"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                style: {
                  paddingRight: '16px',
                  paddingLeft: '27px',
                  width: 'fit-content',
                  height: '100%',
                  cursor: 'pointer'
                },
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  href: "/",
                  style: {
                    fontFamily: 'Shapiro, sans-serif',
                    fontWeight: '700',
                    fontSize: '11px',
                    letterSpacing: '2.2px',
                    lineHeight: '13px',
                    textTransform: 'uppercase',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    width: 'fit-content',
                    height: '100%',
                    color: 'rgb(255, 255, 255)',
                    cursor: 'pointer'
                  },
                  children: "collection"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                style: {
                  paddingRight: '16px',
                  paddingLeft: '27px',
                  width: 'fit-content',
                  height: '100%',
                  cursor: 'pointer'
                },
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  href: "/",
                  style: {
                    fontFamily: 'Shapiro, sans-serif',
                    fontWeight: '700',
                    fontSize: '11px',
                    letterSpacing: '2.2px',
                    lineHeight: '13px',
                    textTransform: 'uppercase',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    width: 'fit-content',
                    height: '100%',
                    color: 'rgb(255, 255, 255)',
                    cursor: 'pointer'
                  },
                  children: "support"
                })
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "bg-black h-screen w-screen text-white",
      style: {
        padding: '32px',
        paddingTop: '0px',
        fontFamily: 'Shapiro, sans-serif'
      },
      children: children
    })]
  });
}

/* harmony default export */ var BaseLayout = (BasicLayout);
// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable react/jsx-filename-extension */

/* eslint-disable react/react-in-jsx-scope */

/* eslint-disable react/prop-types */

/* eslint-disable import/no-extraneous-dependencies */




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(BaseLayout, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "uXJ4":
/***/ (function(module, exports) {



/***/ }),

/***/ "zPlV":
/***/ (function(module, exports) {



/***/ })

/******/ });