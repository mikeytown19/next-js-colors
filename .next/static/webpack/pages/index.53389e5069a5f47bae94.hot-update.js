/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Views/Space/index.jsx":
/*!******************************************!*\
  !*** ./components/Views/Space/index.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Space\": function() { return /* binding */ Space; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Text */ \"./components/Text/index.jsx\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Box */ \"./components/Box/index.jsx\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Button */ \"./components/Button/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/mikeharvey/Documents/projects/next/next-js-colors/components/Views/Space/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Space = function Space(_ref) {\n  _s();\n\n  var addToJson = _ref.addToJson;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),\n      sizes = _useState[0],\n      setSizes = _useState[1];\n\n  var handleClick = function handleClick() {\n    console.log('click');\n  };\n\n  function fontSizes(num) {\n    var obj = {};\n\n    for (var i = 0; i <= 7; i++) {\n      if (i === 0) {\n        obj[i] = 0;\n      } else {\n        num *= 2;\n        obj[i] = \"\".concat(num, \"px\");\n      }\n    }\n\n    return obj;\n  }\n\n  var spacing = function spacing() {\n    var sum = {};\n\n    for (var i = 0; i < 12; i++) {\n      sum[i] = i * i;\n    }\n\n    return sum;\n  };\n\n  var data = spacing(1);\n  var fucc = fontSizes(1);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Text__WEBPACK_IMPORTED_MODULE_2__.Text, {\n      as: \"h1\",\n      children: \"Space\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {\n      css: {\n        marginTop: '40px'\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n        bg: \"contrast\",\n        onClick: function onClick() {\n          return addToJson(data, 'space');\n        },\n        children: \"Kich Spacing\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        css: {\n          display: 'flex',\n          flexWrap: 'wrap'\n        },\n        children: Object.values(data).map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            css: {\n              bg: '$hiContrast',\n              px: item,\n              margin: '10px',\n              display: 'inline-block',\n              color: '$slate10'\n            },\n            children: item\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {\n      css: {\n        marginTop: '40px'\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n        bg: \"indigo\",\n        onClick: function onClick() {\n          return addToJson(fucc, 'space');\n        },\n        children: \"Fibonacci Spacing\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        css: {\n          display: 'flex',\n          flexWrap: 'wrap'\n        },\n        children: Object.values(fucc).map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            css: {\n              bg: '$blue7',\n              px: item,\n              margin: '10px',\n              display: 'inline-block'\n            },\n            children: item\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Space, \"wpwOiDoHk0pKRICgN6u/hsmbR1o=\");\n\n_c = Space;\n\nvar _c;\n\n$RefreshReg$(_c, \"Space\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaWV3cy9TcGFjZS9pbmRleC5qc3g/ODk5NiJdLCJuYW1lcyI6WyJTcGFjZSIsImFkZFRvSnNvbiIsInVzZVN0YXRlIiwic2l6ZXMiLCJzZXRTaXplcyIsImhhbmRsZUNsaWNrIiwiY29uc29sZSIsImxvZyIsImZvbnRTaXplcyIsIm51bSIsIm9iaiIsImkiLCJzcGFjaW5nIiwic3VtIiwiZGF0YSIsImZ1Y2MiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJpdGVtIiwiYmciLCJweCIsIm1hcmdpbiIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQW1CO0FBQUE7O0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFBQSxrQkFDWkMsK0NBQVEsQ0FBQyxFQUFELENBREk7QUFBQSxNQUMvQkMsS0FEK0I7QUFBQSxNQUN4QkMsUUFEd0I7O0FBRXRDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDRCxHQUZEOztBQUlBLFdBQVNDLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCO0FBQ3RCLFFBQU1DLEdBQUcsR0FBRyxFQUFaOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsSUFBSSxDQUFyQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUMzQixVQUFJQSxDQUFDLEtBQUssQ0FBVixFQUFhO0FBQ1hELFdBQUcsQ0FBQ0MsQ0FBRCxDQUFILEdBQVMsQ0FBVDtBQUNELE9BRkQsTUFFTztBQUNMRixXQUFHLElBQUksQ0FBUDtBQUNBQyxXQUFHLENBQUNDLENBQUQsQ0FBSCxhQUFZRixHQUFaO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPQyxHQUFQO0FBQ0Q7O0FBRUQsTUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixRQUFNQyxHQUFHLEdBQUcsRUFBWjs7QUFDQSxTQUFLLElBQUlGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDM0JFLFNBQUcsQ0FBQ0YsQ0FBRCxDQUFILEdBQVNBLENBQUMsR0FBR0EsQ0FBYjtBQUNEOztBQUNELFdBQU9FLEdBQVA7QUFDRCxHQU5EOztBQVFBLE1BQU1DLElBQUksR0FBR0YsT0FBTyxDQUFDLENBQUQsQ0FBcEI7QUFDQSxNQUFNRyxJQUFJLEdBQUdQLFNBQVMsQ0FBQyxDQUFELENBQXRCO0FBRUEsc0JBQ0UsOERBQUMscUNBQUQ7QUFBQSw0QkFDRSw4REFBQyx1Q0FBRDtBQUFNLFFBQUUsRUFBQyxJQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFHRSw4REFBQyxxQ0FBRDtBQUFLLFNBQUcsRUFBRTtBQUNSUSxpQkFBUyxFQUFFO0FBREgsT0FBVjtBQUFBLDhCQUlFLDhEQUFDLDJDQUFEO0FBQVEsVUFBRSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFFO0FBQUEsaUJBQU1mLFNBQVMsQ0FBQ2EsSUFBRCxFQUFPLE9BQVAsQ0FBZjtBQUFBLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFLRSw4REFBQyxxQ0FBRDtBQUFLLFdBQUcsRUFBRTtBQUNSRyxpQkFBTyxFQUFFLE1BREQ7QUFFUkMsa0JBQVEsRUFBRTtBQUZGLFNBQVY7QUFBQSxrQkFPR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNOLElBQWQsRUFBb0JPLEdBQXBCLENBQXdCLFVBQUNDLElBQUQ7QUFBQSw4QkFDdkIsOERBQUMscUNBQUQ7QUFBSyxlQUFHLEVBQUU7QUFDUkMsZ0JBQUUsRUFBRSxhQURJO0FBRVJDLGdCQUFFLEVBQUVGLElBRkk7QUFHUkcsb0JBQU0sRUFBRSxNQUhBO0FBSVJSLHFCQUFPLEVBQUUsY0FKRDtBQUtSUyxtQkFBSyxFQUFFO0FBTEMsYUFBVjtBQUFBLHNCQVNHSjtBQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHVCO0FBQUEsU0FBeEI7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUErQkUsOERBQUMscUNBQUQ7QUFBSyxTQUFHLEVBQUU7QUFDUk4saUJBQVMsRUFBRTtBQURILE9BQVY7QUFBQSw4QkFJRSw4REFBQywyQ0FBRDtBQUFRLFVBQUUsRUFBQyxRQUFYO0FBQW9CLGVBQU8sRUFBRTtBQUFBLGlCQUFNZixTQUFTLENBQUNjLElBQUQsRUFBTyxPQUFQLENBQWY7QUFBQSxTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBTUUsOERBQUMscUNBQUQ7QUFBSyxXQUFHLEVBQUU7QUFDUkUsaUJBQU8sRUFBRSxNQUREO0FBRVJDLGtCQUFRLEVBQUU7QUFGRixTQUFWO0FBQUEsa0JBT0dDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxJQUFkLEVBQW9CTSxHQUFwQixDQUF3QixVQUFDQyxJQUFEO0FBQUEsOEJBQ3ZCLDhEQUFDLHFDQUFEO0FBQUssZUFBRyxFQUFFO0FBQ1JDLGdCQUFFLEVBQUUsUUFESTtBQUVSQyxnQkFBRSxFQUFFRixJQUZJO0FBR1JHLG9CQUFNLEVBQUUsTUFIQTtBQUlSUixxQkFBTyxFQUFFO0FBSkQsYUFBVjtBQUFBLHNCQVFHSztBQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHVCO0FBQUEsU0FBeEI7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOERELENBN0ZNOztHQUFNdEIsSzs7S0FBQUEsSyIsImZpbGUiOiIuL2NvbXBvbmVudHMvVmlld3MvU3BhY2UvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vVGV4dCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9Cb3gnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vQnV0dG9uJztcblxuZXhwb3J0IGNvbnN0IFNwYWNlID0gKHsgYWRkVG9Kc29uIH0pID0+IHtcbiAgY29uc3QgW3NpemVzLCBzZXRTaXplc10gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGZvbnRTaXplcyhudW0pIHtcbiAgICBjb25zdCBvYmogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA3OyBpKyspIHtcbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIG9ialtpXSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBudW0gKj0gMjtcbiAgICAgICAgb2JqW2ldID0gYCR7bnVtfXB4YDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgY29uc3Qgc3BhY2luZyA9ICgpID0+IHtcbiAgICBjb25zdCBzdW0gPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIHN1bVtpXSA9IGkgKiBpO1xuICAgIH1cbiAgICByZXR1cm4gc3VtO1xuICB9O1xuXG4gIGNvbnN0IGRhdGEgPSBzcGFjaW5nKDEpO1xuICBjb25zdCBmdWNjID0gZm9udFNpemVzKDEpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxUZXh0IGFzPVwiaDFcIj5TcGFjZTwvVGV4dD5cblxuICAgICAgPEJveCBjc3M9e3tcbiAgICAgICAgbWFyZ2luVG9wOiAnNDBweCcsXG4gICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uIGJnPVwiY29udHJhc3RcIiBvbkNsaWNrPXsoKSA9PiBhZGRUb0pzb24oZGF0YSwgJ3NwYWNlJyl9PktpY2ggU3BhY2luZzwvQnV0dG9uPlxuICAgICAgICA8Qm94IGNzcz17e1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxuXG4gICAgICAgIH19XG4gICAgICAgID5cblxuICAgICAgICAgIHtPYmplY3QudmFsdWVzKGRhdGEpLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPEJveCBjc3M9e3tcbiAgICAgICAgICAgICAgYmc6ICckaGlDb250cmFzdCcsXG4gICAgICAgICAgICAgIHB4OiBpdGVtLFxuICAgICAgICAgICAgICBtYXJnaW46ICcxMHB4JyxcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgIGNvbG9yOiAnJHNsYXRlMTAnLFxuXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgIDwvQm94PikpfVxuXG4gICAgICAgIDwvQm94PlxuXG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggY3NzPXt7XG4gICAgICAgIG1hcmdpblRvcDogJzQwcHgnLFxuICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEJ1dHRvbiBiZz1cImluZGlnb1wiIG9uQ2xpY2s9eygpID0+IGFkZFRvSnNvbihmdWNjLCAnc3BhY2UnKX0+Rmlib25hY2NpIFNwYWNpbmc8L0J1dHRvbj5cblxuICAgICAgICA8Qm94IGNzcz17e1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxuXG4gICAgICAgIH19XG4gICAgICAgID5cblxuICAgICAgICAgIHtPYmplY3QudmFsdWVzKGZ1Y2MpLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPEJveCBjc3M9e3tcbiAgICAgICAgICAgICAgYmc6ICckYmx1ZTcnLFxuICAgICAgICAgICAgICBweDogaXRlbSxcbiAgICAgICAgICAgICAgbWFyZ2luOiAnMTBweCcsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgIDwvQm94PikpfVxuXG4gICAgICAgIDwvQm94PlxuXG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Views/Space/index.jsx\n");

/***/ })

});