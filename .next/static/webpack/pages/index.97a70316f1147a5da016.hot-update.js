/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Views/FontSizes/index.jsx":
/*!**********************************************!*\
  !*** ./components/Views/FontSizes/index.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FontSizes\": function() { return /* binding */ FontSizes; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Text */ \"./components/Text/index.jsx\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Box */ \"./components/Box/index.jsx\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Button */ \"./components/Button/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/mikeharvey/Documents/projects/next/next-js-colors/components/Views/FontSizes/index.jsx\",\n    _this = undefined;\n\n\n\n\nvar FontSizes = function FontSizes(_ref) {\n  var addToJson = _ref.addToJson;\n\n  function fontSizes(num) {\n    var obj = {\n      0: 0\n    };\n\n    for (var i = 0; i <= 9; i++) {\n      if (i === 0) {\n        obj[i + 1] = \"\".concat(Math.ceil(num), \"px\");\n      } else {\n        num *= 1.2;\n        obj[i + 1] = \"\".concat(Math.ceil(num), \"px\");\n      }\n    }\n\n    return obj;\n  }\n\n  var data = fontSizes(12);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Box__WEBPACK_IMPORTED_MODULE_2__.Box, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Text__WEBPACK_IMPORTED_MODULE_1__.Text, {\n      as: \"h1\",\n      children: \"Font Sizes\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n      bg: \"indigo\",\n      as: \"button\",\n      onClick: function onClick() {\n        addToJson(data, 'fontSizes');\n      },\n      children: \"Add fontSizes\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Box__WEBPACK_IMPORTED_MODULE_2__.Box, {\n      children: Object.values(data).map(function (item, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Box__WEBPACK_IMPORTED_MODULE_2__.Box, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Text__WEBPACK_IMPORTED_MODULE_1__.Text, {\n            css: {\n              fontWeight: \"$\".concat(index),\n              lineHeight: item,\n              color: '$slate10',\n              fontSize: item,\n              marginTop: '10px',\n              display: 'inline-block'\n            },\n            children: [\"Almost before we knew it, we had left the ground. \", item]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, _this);\n};\n_c = FontSizes;\n\nvar _c;\n\n$RefreshReg$(_c, \"FontSizes\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaWV3cy9Gb250U2l6ZXMvaW5kZXguanN4PzllN2QiXSwibmFtZXMiOlsiRm9udFNpemVzIiwiYWRkVG9Kc29uIiwiZm9udFNpemVzIiwibnVtIiwib2JqIiwiaSIsIk1hdGgiLCJjZWlsIiwiZGF0YSIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJmb250U2l6ZSIsIm1hcmdpblRvcCIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQW1CO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFDMUMsV0FBU0MsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0I7QUFDdEIsUUFBTUMsR0FBRyxHQUFHO0FBQUUsU0FBRztBQUFMLEtBQVo7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJLENBQXJCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQzNCLFVBQUlBLENBQUMsS0FBSyxDQUFWLEVBQWE7QUFDWEQsV0FBRyxDQUFDQyxDQUFDLEdBQUcsQ0FBTCxDQUFILGFBQWdCQyxJQUFJLENBQUNDLElBQUwsQ0FBVUosR0FBVixDQUFoQjtBQUNELE9BRkQsTUFFTztBQUNMQSxXQUFHLElBQUksR0FBUDtBQUNBQyxXQUFHLENBQUNDLENBQUMsR0FBRyxDQUFMLENBQUgsYUFBZ0JDLElBQUksQ0FBQ0MsSUFBTCxDQUFVSixHQUFWLENBQWhCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPQyxHQUFQO0FBQ0Q7O0FBRUQsTUFBTUksSUFBSSxHQUFHTixTQUFTLENBQUMsRUFBRCxDQUF0QjtBQUVBLHNCQUNFLDhEQUFDLHFDQUFEO0FBQUEsNEJBQ0UsOERBQUMsdUNBQUQ7QUFBTSxRQUFFLEVBQUMsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsMkNBQUQ7QUFDRSxRQUFFLEVBQUMsUUFETDtBQUVFLFFBQUUsRUFBQyxRQUZMO0FBR0UsYUFBTyxFQUFFLG1CQUFNO0FBQ2JELGlCQUFTLENBQUNPLElBQUQsRUFBTyxXQUFQLENBQVQ7QUFDRCxPQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFXRSw4REFBQyxxQ0FBRDtBQUFBLGdCQUVHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0YsSUFBZCxFQUFvQkcsR0FBcEIsQ0FBd0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsNEJBQ3ZCLDhEQUFDLHFDQUFEO0FBQUEsaUNBRUUsOERBQUMsdUNBQUQ7QUFBTSxlQUFHLEVBQUU7QUFDVEMsd0JBQVUsYUFBTUQsS0FBTixDQUREO0FBRVRFLHdCQUFVLEVBQUVILElBRkg7QUFHVEksbUJBQUssRUFBRSxVQUhFO0FBSVRDLHNCQUFRLEVBQUVMLElBSkQ7QUFLVE0sdUJBQVMsRUFBRSxNQUxGO0FBTVRDLHFCQUFPLEVBQUU7QUFOQSxhQUFYO0FBQUEsNkVBU3FEUCxJQVRyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUR1QjtBQUFBLE9BQXhCO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0NELENBbkRNO0tBQU1aLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZXdzL0ZvbnRTaXplcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vVGV4dCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9Cb3gnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vQnV0dG9uJztcblxuZXhwb3J0IGNvbnN0IEZvbnRTaXplcyA9ICh7IGFkZFRvSnNvbiB9KSA9PiB7XG4gIGZ1bmN0aW9uIGZvbnRTaXplcyhudW0pIHtcbiAgICBjb25zdCBvYmogPSB7IDA6IDAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA5OyBpKyspIHtcbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIG9ialtpICsgMV0gPSBgJHtNYXRoLmNlaWwobnVtKX1weGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBudW0gKj0gMS4yO1xuICAgICAgICBvYmpbaSArIDFdID0gYCR7TWF0aC5jZWlsKG51bSl9cHhgO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBjb25zdCBkYXRhID0gZm9udFNpemVzKDEyKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8VGV4dCBhcz1cImgxXCI+Rm9udCBTaXplczwvVGV4dD5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgYmc9XCJpbmRpZ29cIlxuICAgICAgICBhcz1cImJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBhZGRUb0pzb24oZGF0YSwgJ2ZvbnRTaXplcycpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBBZGQgZm9udFNpemVzXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCb3g+XG5cbiAgICAgICAge09iamVjdC52YWx1ZXMoZGF0YSkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxCb3g+XG5cbiAgICAgICAgICAgIDxUZXh0IGNzcz17e1xuICAgICAgICAgICAgICBmb250V2VpZ2h0OiBgJCR7aW5kZXh9YCxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogaXRlbSxcbiAgICAgICAgICAgICAgY29sb3I6ICckc2xhdGUxMCcsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBpdGVtLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxMHB4JyxcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBbG1vc3QgYmVmb3JlIHdlIGtuZXcgaXQsIHdlIGhhZCBsZWZ0IHRoZSBncm91bmQuIHtpdGVtfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApKX1cbiAgICAgIDwvQm94PlxuXG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Views/FontSizes/index.jsx\n");

/***/ })

});