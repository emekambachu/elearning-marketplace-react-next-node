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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst { Item  } = antd__WEBPACK_IMPORTED_MODULE_6__.Menu;\nconst TopNav = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    // State Management\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.Context);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n         true && setCurrent(window.location.pathname);\n        console.log(window.location.pathname);\n    }, [\n         true && window.location.pathname\n    ]);\n    // Logout State\n    const logout = async ()=>{\n        dispatch({\n            type: \"LOGOUT\"\n        });\n        localStorage.removeItem(\"user\");\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"/api/logout\");\n        (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(data.message);\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu, {\n        mode: \"horizontal\",\n        selectedKeys: [\n            current\n        ],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: (e)=>setCurrent(e.key),\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.AppstoreOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, undefined)\n            }, \"/\", false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: (e)=>setCurrent(e.key),\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.LoginOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/login\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, undefined)\n            }, \"/login\", false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: (e)=>setCurrent(e.key),\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.UserAddOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/register\",\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, undefined)\n            }, \"/register\", false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: logout(),\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.LogoutOutlined, {}, void 0, false, void 0, void 0),\n                className: \"float-right\",\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TopNav, \"UUWFF4xaeyG9S+D1MNUMjZUhsQI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = TopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcE5hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBRTVCO0FBTUM7QUFFUTtBQUVOO0FBQ0g7QUFDVztBQUNDO0FBRXRDLE1BQU0sRUFBQ2EsS0FBSSxFQUFDLEdBQUdWLHNDQUFJQTtBQUNuQixNQUFNVyxTQUFTOztJQUVYLE1BQU1DLFNBQVNILHNEQUFTQTtJQUV4QixtQkFBbUI7SUFDbkIsTUFBTSxDQUFDSSxTQUFTQyxXQUFXLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLEVBQUNrQixNQUFLLEVBQUVDLFNBQVEsRUFBQyxHQUFHakIsaURBQVVBLENBQUNNLDZDQUFPQTtJQUU1Q1AsZ0RBQVNBLENBQUM7UUFDTm1CLEtBQWVDLElBQUlKLFdBQVdLLE9BQU9DLFNBQVNDO1FBQzlDQyxRQUFRQyxJQUFJSixPQUFPQyxTQUFTQztJQUNoQyxHQUFHO1FBQUNKLEtBQWVDLElBQUlDLE9BQU9DLFNBQVNDO0tBQVM7SUFFaEQsZUFBZTtJQUNmLE1BQU1HLFNBQVM7UUFDWFIsU0FBUztZQUNMUyxNQUFNO1FBQ1Y7UUFDQUMsYUFBYUMsV0FBVztRQUN4QixNQUFNLEVBQUNDLEtBQUksRUFBQyxHQUFHLE1BQU1yQixpREFBU3NCLENBQUM7UUFDL0JyQixxREFBS0EsQ0FBQ29CLEtBQUtFO1FBQ1hsQixPQUFPbUIsS0FBSztJQUNoQjtJQUVBLHFCQUNJLDhEQUFDL0Isc0NBQUlBO1FBQUNnQyxNQUFLO1FBQWFDLGNBQWM7WUFBQ3BCO1NBQVE7OzBCQUMzQyw4REFBQ0g7Z0JBQ0d3QixTQUFTLENBQUNDLElBQU1yQixXQUFXcUIsRUFBRUM7Z0JBQzdCQyxvQkFBTSw4REFBQ3BDLCtEQUFnQkE7MEJBRXZCLDRFQUFDSyxrREFBSUE7b0JBQUNnQyxNQUFLOzhCQUFJOzs7Ozs7ZUFKVDs7Ozs7MEJBU1YsOERBQUM1QjtnQkFDS3dCLFNBQVMsQ0FBQ0MsSUFBTXJCLFdBQVdxQixFQUFFQztnQkFDN0JDLG9CQUFNLDhEQUFDbkMsNERBQWFBOzBCQUN0Qiw0RUFBQ0ksa0RBQUlBO29CQUFDZ0MsTUFBSzs4QkFBUzs7Ozs7O2VBSGQ7Ozs7OzBCQVFWLDhEQUFDNUI7Z0JBQ0t3QixTQUFTLENBQUNDLElBQU1yQixXQUFXcUIsRUFBRUM7Z0JBQzdCQyxvQkFBTSw4REFBQ2xDLDhEQUFlQTswQkFDeEIsNEVBQUNHLGtEQUFJQTtvQkFBQ2dDLE1BQUs7OEJBQVk7Ozs7OztlQUhqQjs7Ozs7MEJBUVYsOERBQUM1QjtnQkFBS3dCLFNBQVNWO2dCQUNUYSxvQkFBTSw4REFBQ2pDLDZEQUFjQTtnQkFDckJtQyxXQUFXOzBCQUNoQjs7Ozs7Ozs7Ozs7O0FBS2I7R0EzRE01Qjs7UUFFYUYsa0RBQVNBOzs7S0FGdEJFO0FBNkROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9wTmF2LmpzPzllOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7TWVudX0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHtcclxuICAgIEFwcHN0b3JlT3V0bGluZWQsXHJcbiAgICBMb2dpbk91dGxpbmVkLFxyXG4gICAgVXNlckFkZE91dGxpbmVkLFxyXG4gICAgTG9nb3V0T3V0bGluZWRcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5pbXBvcnQge0NvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0XCI7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHt0b2FzdH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IHtJdGVtfSA9IE1lbnU7XHJcbmNvbnN0IFRvcE5hdiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICAvLyBTdGF0ZSBNYW5hZ2VtZW50XHJcbiAgICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IHtzdGF0ZSwgZGlzcGF0Y2h9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHByb2Nlc3MuYnJvd3NlciAmJiBzZXRDdXJyZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcclxuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgfSwgW3Byb2Nlc3MuYnJvd3NlciAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVdKTtcclxuXHJcbiAgICAvLyBMb2dvdXQgU3RhdGVcclxuICAgIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiTE9HT1VUXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XHJcbiAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9sb2dvdXRcIik7XHJcbiAgICAgICAgdG9hc3QoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiIHNlbGVjdGVkS2V5cz17W2N1cnJlbnRdfT5cclxuICAgICAgICAgICAgPEl0ZW0ga2V5PVwiL1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0Q3VycmVudChlLmtleSl9XHJcbiAgICAgICAgICAgICAgICBpY29uPXs8QXBwc3RvcmVPdXRsaW5lZC8+fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9JdGVtPlxyXG5cclxuICAgICAgICAgICAgPEl0ZW0ga2V5PVwiL2xvZ2luXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEN1cnJlbnQoZS5rZXkpfVxyXG4gICAgICAgICAgICAgICAgICBpY29uPXs8TG9naW5PdXRsaW5lZC8+fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0l0ZW0+XHJcblxyXG4gICAgICAgICAgICA8SXRlbSBrZXk9XCIvcmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0Q3VycmVudChlLmtleSl9XHJcbiAgICAgICAgICAgICAgICAgIGljb249ezxVc2VyQWRkT3V0bGluZWQvPn0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9JdGVtPlxyXG5cclxuICAgICAgICAgICAgPEl0ZW0gb25DbGljaz17bG9nb3V0KCl9XHJcbiAgICAgICAgICAgICAgICAgIGljb249ezxMb2dvdXRPdXRsaW5lZC8+fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZmxvYXQtcmlnaHRcIn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICA8L01lbnU+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wTmF2OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJNZW51IiwiQXBwc3RvcmVPdXRsaW5lZCIsIkxvZ2luT3V0bGluZWQiLCJVc2VyQWRkT3V0bGluZWQiLCJMb2dvdXRPdXRsaW5lZCIsIkNvbnRleHQiLCJMaW5rIiwiYXhpb3MiLCJ0b2FzdCIsInVzZVJvdXRlciIsIkl0ZW0iLCJUb3BOYXYiLCJyb3V0ZXIiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsInN0YXRlIiwiZGlzcGF0Y2giLCJwcm9jZXNzIiwiYnJvd3NlciIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwibG9nb3V0IiwidHlwZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJkYXRhIiwiZ2V0IiwibWVzc2FnZSIsInB1c2giLCJtb2RlIiwic2VsZWN0ZWRLZXlzIiwib25DbGljayIsImUiLCJrZXkiLCJpY29uIiwiaHJlZiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TopNav.js\n"));

/***/ })

});