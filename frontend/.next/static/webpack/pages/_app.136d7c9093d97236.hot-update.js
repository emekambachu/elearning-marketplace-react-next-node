"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/TopNav.js":
/*!******************************!*\
  !*** ./components/TopNav.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst { Item  } = antd__WEBPACK_IMPORTED_MODULE_6__.Menu;\nconst TopNav = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    // State Management\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.Context);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n         true && setCurrent(window.location.pathname);\n        console.log(window.location.pathname);\n    }, [\n         true && window.location.pathname\n    ]);\n    // Logout State\n    // const logout = async () => {\n    //     dispatch({\n    //         type: \"LOGOUT\"\n    //     });\n    //     window.localStorage.removeItem(\"user\");\n    //     const {data} = await axios.get(\"/api/logout\");\n    //     toast(data.message);\n    //     router.push(\"/login\");\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu, {\n        mode: \"horizontal\",\n        selectedKeys: [\n            current\n        ],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: (e)=>setCurrent(e.key),\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.AppstoreOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, undefined)\n            }, \"/\", false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: (e)=>setCurrent(e.key),\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.LoginOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/login\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, undefined)\n            }, \"/login\", false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: (e)=>setCurrent(e.key),\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.UserAddOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/register\",\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, undefined)\n            }, \"/register\", false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TopNav, \"UUWFF4xaeyG9S+D1MNUMjZUhsQI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = TopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcE5hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFFNUI7QUFNQztBQUVRO0FBRU47QUFDSDtBQUNXO0FBQ0M7QUFFdEMsTUFBTSxFQUFDYSxLQUFJLEVBQUMsR0FBR1Ysc0NBQUlBO0FBQ25CLE1BQU1XLFNBQVM7O0lBRVgsTUFBTUMsU0FBU0gsc0RBQVNBO0lBRXhCLG1CQUFtQjtJQUNuQixNQUFNLENBQUNJLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sRUFBQ2tCLE1BQUssRUFBRUMsU0FBUSxFQUFDLEdBQUdqQixpREFBVUEsQ0FBQ00sNkNBQU9BO0lBRTVDUCxnREFBU0EsQ0FBQztRQUNObUIsS0FBZUMsSUFBSUosV0FBV0ssT0FBT0MsU0FBU0M7UUFDOUNDLFFBQVFDLElBQUlKLE9BQU9DLFNBQVNDO0lBQ2hDLEdBQUc7UUFBQ0osS0FBZUMsSUFBSUMsT0FBT0MsU0FBU0M7S0FBUztJQUVoRCxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLDhDQUE4QztJQUM5QyxxREFBcUQ7SUFDckQsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixLQUFLO0lBRUwscUJBQ0ksOERBQUNyQixzQ0FBSUE7UUFBQ3dCLE1BQUs7UUFBYUMsY0FBYztZQUFDWjtTQUFROzswQkFDM0MsOERBQUNIO2dCQUNHZ0IsU0FBUyxDQUFDQyxJQUFNYixXQUFXYSxFQUFFQztnQkFDN0JDLG9CQUFNLDhEQUFDNUIsK0RBQWdCQTswQkFFdkIsNEVBQUNLLGtEQUFJQTtvQkFBQ3dCLE1BQUs7OEJBQUk7Ozs7OztlQUpUOzs7OzswQkFTViw4REFBQ3BCO2dCQUNLZ0IsU0FBUyxDQUFDQyxJQUFNYixXQUFXYSxFQUFFQztnQkFDN0JDLG9CQUFNLDhEQUFDM0IsNERBQWFBOzBCQUN0Qiw0RUFBQ0ksa0RBQUlBO29CQUFDd0IsTUFBSzs4QkFBUzs7Ozs7O2VBSGQ7Ozs7OzBCQVFWLDhEQUFDcEI7Z0JBQ0tnQixTQUFTLENBQUNDLElBQU1iLFdBQVdhLEVBQUVDO2dCQUM3QkMsb0JBQU0sOERBQUMxQiw4REFBZUE7MEJBQ3hCLDRFQUFDRyxrREFBSUE7b0JBQUN3QixNQUFLOzhCQUFZOzs7Ozs7ZUFIakI7Ozs7Ozs7Ozs7O0FBZ0J0QjtHQTNETW5COztRQUVhRixrREFBU0E7OztLQUZ0QkU7QUE2RE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub3BOYXYuanM/OWU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtNZW51fSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG4gICAgQXBwc3RvcmVPdXRsaW5lZCxcclxuICAgIExvZ2luT3V0bGluZWQsXHJcbiAgICBVc2VyQWRkT3V0bGluZWQsXHJcbiAgICBMb2dvdXRPdXRsaW5lZFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCB7Q29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge3RvYXN0fSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3Qge0l0ZW19ID0gTWVudTtcclxuY29uc3QgVG9wTmF2ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIC8vIFN0YXRlIE1hbmFnZW1lbnRcclxuICAgIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3Qge3N0YXRlLCBkaXNwYXRjaH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcHJvY2Vzcy5icm93c2VyICYmIHNldEN1cnJlbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICB9LCBbcHJvY2Vzcy5icm93c2VyICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZV0pO1xyXG5cclxuICAgIC8vIExvZ291dCBTdGF0ZVxyXG4gICAgLy8gY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gICAgIGRpc3BhdGNoKHtcclxuICAgIC8vICAgICAgICAgdHlwZTogXCJMT0dPVVRcIlxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XHJcbiAgICAvLyAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9sb2dvdXRcIik7XHJcbiAgICAvLyAgICAgdG9hc3QoZGF0YS5tZXNzYWdlKTtcclxuICAgIC8vICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgIC8vIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiIHNlbGVjdGVkS2V5cz17W2N1cnJlbnRdfT5cclxuICAgICAgICAgICAgPEl0ZW0ga2V5PVwiL1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0Q3VycmVudChlLmtleSl9XHJcbiAgICAgICAgICAgICAgICBpY29uPXs8QXBwc3RvcmVPdXRsaW5lZC8+fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9JdGVtPlxyXG5cclxuICAgICAgICAgICAgPEl0ZW0ga2V5PVwiL2xvZ2luXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEN1cnJlbnQoZS5rZXkpfVxyXG4gICAgICAgICAgICAgICAgICBpY29uPXs8TG9naW5PdXRsaW5lZC8+fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0l0ZW0+XHJcblxyXG4gICAgICAgICAgICA8SXRlbSBrZXk9XCIvcmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0Q3VycmVudChlLmtleSl9XHJcbiAgICAgICAgICAgICAgICAgIGljb249ezxVc2VyQWRkT3V0bGluZWQvPn0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9JdGVtPlxyXG5cclxuICAgICAgICAgICAgey8qPEl0ZW0gb25DbGljaz17bG9nb3V0KCl9Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICAgIGljb249ezxMb2dvdXRPdXRsaW5lZC8+fSovfVxyXG4gICAgICAgICAgICB7LyogICAgICBjbGFzc05hbWU9e1wiZmxvYXQtcmlnaHRcIn0qL31cclxuICAgICAgICAgICAgey8qPiovfVxyXG4gICAgICAgICAgICB7LyogICAgTG9nb3V0Ki99XHJcbiAgICAgICAgICAgIHsvKjwvSXRlbT4qL31cclxuICAgICAgICA8L01lbnU+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wTmF2OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJNZW51IiwiQXBwc3RvcmVPdXRsaW5lZCIsIkxvZ2luT3V0bGluZWQiLCJVc2VyQWRkT3V0bGluZWQiLCJMb2dvdXRPdXRsaW5lZCIsIkNvbnRleHQiLCJMaW5rIiwiYXhpb3MiLCJ0b2FzdCIsInVzZVJvdXRlciIsIkl0ZW0iLCJUb3BOYXYiLCJyb3V0ZXIiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsInN0YXRlIiwiZGlzcGF0Y2giLCJwcm9jZXNzIiwiYnJvd3NlciIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwibW9kZSIsInNlbGVjdGVkS2V5cyIsIm9uQ2xpY2siLCJlIiwia2V5IiwiaWNvbiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TopNav.js\n"));

/***/ })

});