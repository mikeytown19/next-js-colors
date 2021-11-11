"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2971);
/* harmony import */ var _theme_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8961);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__, _theme_globals__WEBPACK_IMPORTED_MODULE_3__]);
([_theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__, _theme_globals__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




(0,_theme_globals__WEBPACK_IMPORTED_MODULE_3__/* .globalStyles */ .W)();
function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
        disableTransitionOnChange: true,
        attribute: "class",
        value: {
            light: 'light-theme',
            dark: _theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__/* .darkTheme.className */ .$_.className
        },
        defaultTheme: "system",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

});

/***/ }),

/***/ 8961:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ globalStyles)
/* harmony export */ });
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2971);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stitches_config__WEBPACK_IMPORTED_MODULE_0__]);
_stitches_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

const globalStyles = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .globalCss */ .zY)({
    html: {
        m: 0,
        p: 0
    },
    body: {
        m: 0,
        p: 0,
        fontFamily: '$body'
    },
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },
    h1: {
        fontSize: '$8',
        lineHeight: '$8',
        fontWeight: '900',
        '@bp1': {
            fontSize: '$10',
            lineHeight: '$10',
            fontWeight: '900'
        }
    },
    h2: {
        fontSize: '$7',
        lineHeight: '$7',
        fontWeight: '800',
        '@bp1': {
            fontSize: '$8',
            lineHeight: '$8'
        }
    },
    h3: {
        fontSize: '$6',
        lineHeight: '$6',
        fontWeight: '700',
        '@bp1': {
            fontSize: '$7',
            lineHeight: '$7'
        }
    },
    h4: {
        fontSize: '$5',
        lineHeight: '$5',
        fontWeight: '$bold',
        '@bp1': {
            fontSize: '$6',
            lineHeight: '$6'
        }
    },
    h5: {
        fontSize: '$5',
        lineHeight: '$5',
        fontWeight: '$bold'
    },
    'i,p': {
        fontSize: '$4',
        lineHeight: '$4',
        fontWeight: '$normal'
    }
});

});

/***/ }),

/***/ 6366:
/***/ ((module) => {

module.exports = require("@radix-ui/colors");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = import("@stitches/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [971], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();