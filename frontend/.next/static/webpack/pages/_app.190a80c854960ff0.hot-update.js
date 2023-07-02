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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst { Item  } = antd__WEBPACK_IMPORTED_MODULE_6__.Menu;\nconst TopNav = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    // State Management\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.Context);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n         true && setCurrent(window.location.pathname);\n        console.log(window.location.pathname);\n    }, [\n         true && window.location.pathname\n    ]);\n    // Logout State\n    const logout = async ()=>{\n        dispatch({\n            type: \"LOGOUT\"\n        });\n        window.localStorage.removeItem(\"user\");\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"/api/logout\");\n        (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(data.message);\n        await router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu, {\n        mode: \"horizontal\",\n        selectedKeys: [\n            current\n        ],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: (e)=>setCurrent(e.key),\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.AppstoreOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, undefined)\n            }, \"/\", false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: (e)=>setCurrent(e.key),\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.LoginOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/login\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, undefined)\n            }, \"/login\", false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: (e)=>setCurrent(e.key),\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.UserAddOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/register\",\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, undefined)\n            }, \"/register\", false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: logout(),\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.LogoutOutlined, {}, void 0, false, void 0, void 0)\n            }, \"/logout\", false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\wamp64\\\\www\\\\elearning-marketplace-react-next-node\\\\frontend\\\\components\\\\TopNav.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TopNav, \"UUWFF4xaeyG9S+D1MNUMjZUhsQI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = TopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcE5hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBRTVCO0FBTUM7QUFFUTtBQUVOO0FBQ0g7QUFDVztBQUNDO0FBRXRDLE1BQU0sRUFBQ2EsS0FBSSxFQUFDLEdBQUdWLHNDQUFJQTtBQUNuQixNQUFNVyxTQUFTOztJQUVYLE1BQU1DLFNBQVNILHNEQUFTQTtJQUV4QixtQkFBbUI7SUFDbkIsTUFBTSxDQUFDSSxTQUFTQyxXQUFXLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLEVBQUNrQixNQUFLLEVBQUVDLFNBQVEsRUFBQyxHQUFHakIsaURBQVVBLENBQUNNLDZDQUFPQTtJQUU1Q1AsZ0RBQVNBLENBQUM7UUFDTm1CLEtBQWVDLElBQUlKLFdBQVdLLE9BQU9DLFNBQVNDO1FBQzlDQyxRQUFRQyxJQUFJSixPQUFPQyxTQUFTQztJQUNoQyxHQUFHO1FBQUNKLEtBQWVDLElBQUlDLE9BQU9DLFNBQVNDO0tBQVM7SUFFaEQsZUFBZTtJQUNmLE1BQU1HLFNBQVM7UUFDWFIsU0FBUztZQUNMUyxNQUFNO1FBQ1Y7UUFDQU4sT0FBT08sYUFBYUMsV0FBVztRQUMvQixNQUFNLEVBQUNDLEtBQUksRUFBQyxHQUFHLE1BQU1yQixpREFBU3NCLENBQUM7UUFDL0JyQixxREFBS0EsQ0FBQ29CLEtBQUtFO1FBQ1gsTUFBTWxCLE9BQU9tQixLQUFLO0lBQ3RCO0lBRUEscUJBQ0ksOERBQUMvQixzQ0FBSUE7UUFBQ2dDLE1BQUs7UUFBYUMsY0FBYztZQUFDcEI7U0FBUTs7MEJBQzNDLDhEQUFDSDtnQkFDR3dCLFNBQVMsQ0FBQ0MsSUFBTXJCLFdBQVdxQixFQUFFQztnQkFDN0JDLG9CQUFNLDhEQUFDcEMsK0RBQWdCQTswQkFFdkIsNEVBQUNLLGtEQUFJQTtvQkFBQ2dDLE1BQUs7OEJBQUk7Ozs7OztlQUpUOzs7OzswQkFTViw4REFBQzVCO2dCQUNLd0IsU0FBUyxDQUFDQyxJQUFNckIsV0FBV3FCLEVBQUVDO2dCQUM3QkMsb0JBQU0sOERBQUNuQyw0REFBYUE7MEJBQ3RCLDRFQUFDSSxrREFBSUE7b0JBQUNnQyxNQUFLOzhCQUFTOzs7Ozs7ZUFIZDs7Ozs7MEJBUVYsOERBQUM1QjtnQkFDS3dCLFNBQVMsQ0FBQ0MsSUFBTXJCLFdBQVdxQixFQUFFQztnQkFDN0JDLG9CQUFNLDhEQUFDbEMsOERBQWVBOzBCQUN4Qiw0RUFBQ0csa0RBQUlBO29CQUFDZ0MsTUFBSzs4QkFBWTs7Ozs7O2VBSGpCOzs7OzswQkFRViw4REFBQzVCO2dCQUNLd0IsU0FBU1Y7Z0JBQ1RhLG9CQUFNLDhEQUFDakMsNkRBQWNBO2VBRmpCOzs7Ozs7Ozs7OztBQU10QjtHQXpETU87O1FBRWFGLGtEQUFTQTs7O0tBRnRCRTtBQTJETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvcE5hdi5qcz85ZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQge01lbnV9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7XHJcbiAgICBBcHBzdG9yZU91dGxpbmVkLFxyXG4gICAgTG9naW5PdXRsaW5lZCxcclxuICAgIFVzZXJBZGRPdXRsaW5lZCxcclxuICAgIExvZ291dE91dGxpbmVkXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuaW1wb3J0IHtDb250ZXh0fSBmcm9tIFwiLi4vY29udGV4dFwiO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7dG9hc3R9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCB7SXRlbX0gPSBNZW51O1xyXG5jb25zdCBUb3BOYXYgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy8gU3RhdGUgTWFuYWdlbWVudFxyXG4gICAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCB7c3RhdGUsIGRpc3BhdGNofSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwcm9jZXNzLmJyb3dzZXIgJiYgc2V0Q3VycmVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXHJcbiAgICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgIH0sIFtwcm9jZXNzLmJyb3dzZXIgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXSk7XHJcblxyXG4gICAgLy8gTG9nb3V0IFN0YXRlXHJcbiAgICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkxPR09VVFwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2xvZ291dFwiKTtcclxuICAgICAgICB0b2FzdChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgIGF3YWl0IHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNZW51IG1vZGU9XCJob3Jpem9udGFsXCIgc2VsZWN0ZWRLZXlzPXtbY3VycmVudF19PlxyXG4gICAgICAgICAgICA8SXRlbSBrZXk9XCIvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZXRDdXJyZW50KGUua2V5KX1cclxuICAgICAgICAgICAgICAgIGljb249ezxBcHBzdG9yZU91dGxpbmVkLz59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0l0ZW0+XHJcblxyXG4gICAgICAgICAgICA8SXRlbSBrZXk9XCIvbG9naW5cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0Q3VycmVudChlLmtleSl9XHJcbiAgICAgICAgICAgICAgICAgIGljb249ezxMb2dpbk91dGxpbmVkLz59PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvSXRlbT5cclxuXHJcbiAgICAgICAgICAgIDxJdGVtIGtleT1cIi9yZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZXRDdXJyZW50KGUua2V5KX1cclxuICAgICAgICAgICAgICAgICAgaWNvbj17PFVzZXJBZGRPdXRsaW5lZC8+fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0l0ZW0+XHJcblxyXG4gICAgICAgICAgICA8SXRlbSBrZXk9XCIvbG9nb3V0XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9nb3V0KCl9XHJcbiAgICAgICAgICAgICAgICAgIGljb249ezxMb2dvdXRPdXRsaW5lZC8+fT5cclxuICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgIDwvTWVudT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BOYXY7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIk1lbnUiLCJBcHBzdG9yZU91dGxpbmVkIiwiTG9naW5PdXRsaW5lZCIsIlVzZXJBZGRPdXRsaW5lZCIsIkxvZ291dE91dGxpbmVkIiwiQ29udGV4dCIsIkxpbmsiLCJheGlvcyIsInRvYXN0IiwidXNlUm91dGVyIiwiSXRlbSIsIlRvcE5hdiIsInJvdXRlciIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwic3RhdGUiLCJkaXNwYXRjaCIsInByb2Nlc3MiLCJicm93c2VyIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImNvbnNvbGUiLCJsb2ciLCJsb2dvdXQiLCJ0eXBlIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImRhdGEiLCJnZXQiLCJtZXNzYWdlIiwicHVzaCIsIm1vZGUiLCJzZWxlY3RlZEtleXMiLCJvbkNsaWNrIiwiZSIsImtleSIsImljb24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TopNav.js\n"));

/***/ })

});