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

/***/ "./Context/StateContext.js":
/*!*********************************!*\
  !*** ./Context/StateContext.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; },\n/* harmony export */   \"useStateContext\": function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst StateContext = (param)=>{\n    let { children  } = param;\n    _s();\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [totalQuantities, setTotalQuantities] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [qty, setQty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const onAdd = (product, quantity)=>{\n        const checkProductInCart = cartItems.find((items)=>items._id === product._id);\n        setTotalPrice((prevTotalPrice)=>prevTotalPrice + product.price * quantity);\n        setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities + quantity);\n        if (checkProductInCart) {\n            const updateCartItems = cartItems.map((cartProduct)=>{\n                if (cartProduct._id === product._id) return {\n                    ...cartProduct,\n                    quantity: cartProduct.quantity + quantity\n                };\n            });\n            setCartItems(updateCartItems);\n        }\n        //         else{\n        // //           // setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);\n        // //           // setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);\n        // product.quantity =quantity;\n        //           SetCartItems([...cartItems,{...product}]);\n        // }\n        // toast.sucess(`${qty} ${products.name} added to cart`);\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {}, void 0, false, {\n            fileName: \"D:\\\\WebDev\\\\FrontEnd\\\\Sanity-Ecommerce\\\\Sanity-Ecommerce\\\\Next-frontend\\\\Context\\\\StateContext.js\",\n            lineNumber: 54,\n            columnNumber: 1\n        }, undefined);\n    };\n    //   const checkProductInCart = cartItems.find((item) => item._id === product._id);\n    //   setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);\n    //   setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);\n    //   if(checkProductInCart) {\n    //     const updatedCartItems = cartItems.map((cartProduct) => {\n    //       if(cartProduct._id === product._id) return {\n    //         ...cartProduct,\n    //         quantity: cartProduct.quantity + quantity\n    //       }\n    //     })\n    //     setCartItems(updatedCartItems);\n    //   } else {\n    //     product.quantity = quantity;\n    //     setCartItems([...cartItems, { ...product }]);\n    //   }\n    //   toast.success(`${qty} ${product.name} added to the cart.`);\n    // } \n    const incQty = ()=>{\n        setQty((prevQty)=>prevQty + 1);\n    };\n    const decQty = ()=>{\n        setQty((prevQty)=>{\n            if (prevQty - 1 < 1) return 1;\n            return prevQty - 1;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            qty,\n            incQty,\n            decQty,\n            totalPrice,\n            totalQuantities,\n            cartItems,\n            onAdd\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\WebDev\\\\FrontEnd\\\\Sanity-Ecommerce\\\\Sanity-Ecommerce\\\\Next-frontend\\\\Context\\\\StateContext.js\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StateContext, \"7/MgxSDezlTbs+avhwz0EbgSTfg=\");\n_c = StateContext;\nconst useStateContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);\n};\n_s1(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"StateContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db250ZXh0L1N0YXRlQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUU4RTtBQUN2QjtBQUNSO0FBRS9DLE1BQU1PLHdCQUFVTixvREFBYUE7QUFFdEIsTUFBTU8sZUFBZSxTQUFrQjtRQUFqQixFQUFDQyxTQUFRLEVBQUM7O0lBR3JDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzdDLE1BQU0sQ0FBQ1MsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNXLGlCQUFpQkMsbUJBQW1CLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ2EsS0FBS0MsT0FBTyxHQUFHZCwrQ0FBUUEsQ0FBQztJQVNoQyxNQUFNZSxRQUFNLENBQUNDLFNBQVFDLFdBQVc7UUFDOUIsTUFBTUMscUJBQXFCWCxVQUFVWSxJQUFJLENBQUMsQ0FBQ0MsUUFBUUEsTUFBTUMsR0FBRyxLQUFLTCxRQUFRSyxHQUFHO1FBRzVFWCxjQUFjLENBQUNZLGlCQUFtQkEsaUJBQWlCTixRQUFRTyxLQUFLLEdBQUdOO1FBQ25FTCxtQkFBbUIsQ0FBQ1ksc0JBQXdCQSxzQkFBc0JQO1FBQ2xFLElBQUdDLG9CQUFtQjtZQUVwQixNQUFNTyxrQkFBaUJsQixVQUFVbUIsR0FBRyxDQUFDLENBQUNDLGNBQWM7Z0JBR2xELElBQUlBLFlBQVlOLEdBQUcsS0FBS0wsUUFBUUssR0FBRyxFQUFFLE9BQU07b0JBQ3pDLEdBQUdNLFdBQVc7b0JBQ2RWLFVBQVNVLFlBQVlWLFFBQVEsR0FBQ0E7Z0JBQzlCO1lBQUU7WUFFQ1QsYUFBYWlCO1FBR2YsQ0FBQztRQUNULGdCQUFnQjtRQUNoQixnR0FBZ0c7UUFDaEcsK0ZBQStGO1FBRy9GLDhCQUE4QjtRQUM5Qix1REFBdUQ7UUFFdkQsSUFBSTtRQUNOLHlEQUF5RDtzQkFDekQsOERBQUN2QiwwREFBY0E7Ozs7O0lBRWQ7SUFHRCxtRkFBbUY7SUFFbkYsa0ZBQWtGO0lBQ2xGLGlGQUFpRjtJQUVqRiw2QkFBNkI7SUFDN0IsZ0VBQWdFO0lBQ2hFLHFEQUFxRDtJQUNyRCwwQkFBMEI7SUFDMUIsb0RBQW9EO0lBQ3BELFVBQVU7SUFDVixTQUFTO0lBRVQsc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYixtQ0FBbUM7SUFFbkMsb0RBQW9EO0lBQ3BELE1BQU07SUFFTixnRUFBZ0U7SUFDaEUsS0FBSztJQUlILE1BQU0wQixTQUFTLElBQU07UUFDbkJkLE9BQU8sQ0FBQ2UsVUFBWUEsVUFBVTtJQUNoQztJQUVBLE1BQU1DLFNBQVMsSUFBTTtRQUNuQmhCLE9BQU8sQ0FBQ2UsVUFBWTtZQUNsQixJQUFHQSxVQUFVLElBQUksR0FBRyxPQUFPO1lBRTNCLE9BQU9BLFVBQVU7UUFDbkI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDekIsUUFBUTJCLFFBQVE7UUFDZkMsT0FBTztZQUVMbkI7WUFDQWU7WUFDQUU7WUFDQXJCO1lBQ0FFO1lBQ0FKO1lBQ0FRO1FBSUY7a0JBRUNUOzs7Ozs7QUFHUCxFQUFDO0dBMUdZRDtLQUFBQTtBQTRHTixNQUFNNEIsa0JBQWtCLElBQU1sQzs7SUFBQUEsT0FBQUEsaURBQVVBLENBQUNLO0FBQU8sRUFBRTtJQUE1QzZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbnRleHQvU3RhdGVDb250ZXh0LmpzP2E2YTUiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5cclxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTdGF0ZUNvbnRleHQgPSAoe2NoaWxkcmVufSAgKSA9PiB7XHJcblxyXG4gXHJcbiAgY29uc3QgW2NhcnRJdGVtcywgc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdG90YWxQcmljZSwgc2V0VG90YWxQcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdG90YWxRdWFudGl0aWVzLCBzZXRUb3RhbFF1YW50aXRpZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3F0eSwgc2V0UXR5XSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuIFxyXG5cclxuXHJcbiAgXHJcbiBcclxuXHJcblxyXG4gY29uc3Qgb25BZGQ9KHByb2R1Y3QscXVhbnRpdHkpPT57XHJcbiAgIGNvbnN0IGNoZWNrUHJvZHVjdEluQ2FydCA9IGNhcnRJdGVtcy5maW5kKChpdGVtcyk9Pml0ZW1zLl9pZCA9PT0gcHJvZHVjdC5faWQpO1xyXG4gICBcclxuICAgXHJcbiAgIHNldFRvdGFsUHJpY2UoKHByZXZUb3RhbFByaWNlKSA9PiBwcmV2VG90YWxQcmljZSArIHByb2R1Y3QucHJpY2UgKiBxdWFudGl0eSk7XHJcbiAgIHNldFRvdGFsUXVhbnRpdGllcygocHJldlRvdGFsUXVhbnRpdGllcykgPT4gcHJldlRvdGFsUXVhbnRpdGllcyArIHF1YW50aXR5KTtcclxuICAgaWYoY2hlY2tQcm9kdWN0SW5DYXJ0KXtcclxuICAgICBcclxuICAgICBjb25zdCB1cGRhdGVDYXJ0SXRlbXMgPWNhcnRJdGVtcy5tYXAoKGNhcnRQcm9kdWN0KT0+e1xyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIGlmIChjYXJ0UHJvZHVjdC5faWQgPT09IHByb2R1Y3QuX2lkKSByZXR1cm57XHJcbiAgICAgICAgIC4uLmNhcnRQcm9kdWN0LFxyXG4gICAgICAgICBxdWFudGl0eTpjYXJ0UHJvZHVjdC5xdWFudGl0eStxdWFudGl0eVxyXG4gICAgICAgICB9IH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRDYXJ0SXRlbXModXBkYXRlQ2FydEl0ZW1zKTtcclxuXHJcblxyXG4gICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgZWxzZXtcclxuICAvLyAvLyAgICAgICAgICAgLy8gc2V0VG90YWxQcmljZSgocHJldlRvdGFsUHJpY2UpID0+IHByZXZUb3RhbFByaWNlICsgcHJvZHVjdC5wcmljZSAqIHF1YW50aXR5KTtcclxuICAvLyAvLyAgICAgICAgICAgLy8gc2V0VG90YWxRdWFudGl0aWVzKChwcmV2VG90YWxRdWFudGl0aWVzKSA9PiBwcmV2VG90YWxRdWFudGl0aWVzICsgcXVhbnRpdHkpO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgLy8gcHJvZHVjdC5xdWFudGl0eSA9cXVhbnRpdHk7XHJcbiAgLy8gICAgICAgICAgIFNldENhcnRJdGVtcyhbLi4uY2FydEl0ZW1zLHsuLi5wcm9kdWN0fV0pO1xyXG5cclxuICAvLyB9XHJcbi8vIHRvYXN0LnN1Y2VzcyhgJHtxdHl9ICR7cHJvZHVjdHMubmFtZX0gYWRkZWQgdG8gY2FydGApO1xyXG48VG9hc3RDb250YWluZXIgLz5cclxuXHJcbiB9XHJcblxyXG5cclxuLy8gICBjb25zdCBjaGVja1Byb2R1Y3RJbkNhcnQgPSBjYXJ0SXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQgPT09IHByb2R1Y3QuX2lkKTtcclxuICBcclxuLy8gICBzZXRUb3RhbFByaWNlKChwcmV2VG90YWxQcmljZSkgPT4gcHJldlRvdGFsUHJpY2UgKyBwcm9kdWN0LnByaWNlICogcXVhbnRpdHkpO1xyXG4vLyAgIHNldFRvdGFsUXVhbnRpdGllcygocHJldlRvdGFsUXVhbnRpdGllcykgPT4gcHJldlRvdGFsUXVhbnRpdGllcyArIHF1YW50aXR5KTtcclxuICBcclxuLy8gICBpZihjaGVja1Byb2R1Y3RJbkNhcnQpIHtcclxuLy8gICAgIGNvbnN0IHVwZGF0ZWRDYXJ0SXRlbXMgPSBjYXJ0SXRlbXMubWFwKChjYXJ0UHJvZHVjdCkgPT4ge1xyXG4vLyAgICAgICBpZihjYXJ0UHJvZHVjdC5faWQgPT09IHByb2R1Y3QuX2lkKSByZXR1cm4ge1xyXG4vLyAgICAgICAgIC4uLmNhcnRQcm9kdWN0LFxyXG4vLyAgICAgICAgIHF1YW50aXR5OiBjYXJ0UHJvZHVjdC5xdWFudGl0eSArIHF1YW50aXR5XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0pXHJcblxyXG4vLyAgICAgc2V0Q2FydEl0ZW1zKHVwZGF0ZWRDYXJ0SXRlbXMpO1xyXG4vLyAgIH0gZWxzZSB7XHJcbi8vICAgICBwcm9kdWN0LnF1YW50aXR5ID0gcXVhbnRpdHk7XHJcbiAgICBcclxuLy8gICAgIHNldENhcnRJdGVtcyhbLi4uY2FydEl0ZW1zLCB7IC4uLnByb2R1Y3QgfV0pO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgdG9hc3Quc3VjY2VzcyhgJHtxdHl9ICR7cHJvZHVjdC5uYW1lfSBhZGRlZCB0byB0aGUgY2FydC5gKTtcclxuLy8gfSBcclxuXHJcbiAgXHJcblxyXG4gIGNvbnN0IGluY1F0eSA9ICgpID0+IHtcclxuICAgIHNldFF0eSgocHJldlF0eSkgPT4gcHJldlF0eSArIDEpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGVjUXR5ID0gKCkgPT4ge1xyXG4gICAgc2V0UXR5KChwcmV2UXR5KSA9PiB7XHJcbiAgICAgIGlmKHByZXZRdHkgLSAxIDwgMSkgcmV0dXJuIDE7XHJcbiAgICAgXHJcbiAgICAgIHJldHVybiBwcmV2UXR5IC0gMTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcXR5LFxyXG4gICAgICAgIGluY1F0eSxcclxuICAgICAgICBkZWNRdHksXHJcbiAgICAgICAgdG90YWxQcmljZSxcclxuICAgICAgICB0b3RhbFF1YW50aXRpZXMsXHJcbiAgICAgICAgY2FydEl0ZW1zLFxyXG4gICAgICAgIG9uQWRkXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTdGF0ZUNvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KENvbnRleHQpO1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJDb250ZXh0IiwiU3RhdGVDb250ZXh0IiwiY2hpbGRyZW4iLCJjYXJ0SXRlbXMiLCJzZXRDYXJ0SXRlbXMiLCJ0b3RhbFByaWNlIiwic2V0VG90YWxQcmljZSIsInRvdGFsUXVhbnRpdGllcyIsInNldFRvdGFsUXVhbnRpdGllcyIsInF0eSIsInNldFF0eSIsIm9uQWRkIiwicHJvZHVjdCIsInF1YW50aXR5IiwiY2hlY2tQcm9kdWN0SW5DYXJ0IiwiZmluZCIsIml0ZW1zIiwiX2lkIiwicHJldlRvdGFsUHJpY2UiLCJwcmljZSIsInByZXZUb3RhbFF1YW50aXRpZXMiLCJ1cGRhdGVDYXJ0SXRlbXMiLCJtYXAiLCJjYXJ0UHJvZHVjdCIsImluY1F0eSIsInByZXZRdHkiLCJkZWNRdHkiLCJQcm92aWRlciIsInZhbHVlIiwidXNlU3RhdGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Context/StateContext.js\n"));

/***/ })

});