/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/intervals",{

/***/ "./pages/intervals.js":
/*!****************************!*\
  !*** ./pages/intervals.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Intervals; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_huixie_source_jazzy_ears_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ \"./pages/layout.js\");\n/* harmony import */ var _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Layout.module.scss */ \"./styles/Layout.module.scss\");\n/* harmony import */ var _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_Intervals_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Intervals.module.scss */ \"./styles/Intervals.module.scss\");\n/* harmony import */ var _styles_Intervals_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Intervals_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var sharp11__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sharp11 */ \"./node_modules/sharp11/index.js\");\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n/* harmony import */ var _constants_intervals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/intervals */ \"./constants/intervals.js\");\n/* harmony import */ var _constants_notes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/notes */ \"./constants/notes.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/huixie/source/jazzy-ears/pages/intervals.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar MAX_NOTES_COUNT = 5;\nvar ASC = '↑';\nvar DSC = '↓';\n\nvar getRandomInterval = function getRandomInterval() {\n  var interval = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.pickRandomly)([ASC, DSC]) + (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.pickRandomly)(_constants_intervals__WEBPACK_IMPORTED_MODULE_7__.INTERVALS.keys);\n  console.log(interval);\n  return interval;\n};\n\nvar isDesc = function isDesc(interval) {\n  if (interval[0] === DSC) {\n    return true;\n  } else {\n    return false;\n  }\n};\n\nvar isNoteWithinRange = function isNoteWithinRange(note) {\n  return note.lowerThan(_constants_notes__WEBPACK_IMPORTED_MODULE_8__.RANGE[1]) && note.higherThan(_constants_notes__WEBPACK_IMPORTED_MODULE_8__.RANGE[0]);\n};\n\nfunction Intervals() {\n  _s();\n\n  //create a synth and connect it to the main output (your speakers)\n  var synth = new tone__WEBPACK_IMPORTED_MODULE_5__.Synth().toDestination();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(['C4']),\n      notes = _useState[0],\n      setNotes = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      intervals = _useState2[0],\n      setIntervals = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      keyPressed = _useState3[0],\n      setKeyPressed = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),\n      offset = _useState4[0],\n      setOffset = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    window.addEventListener('keydown', handleKeyDown);\n    window.addEventListener('keyup', handleKeyUp);\n\n    switch (keyPressed) {\n      case 13: // space\n\n      case 32:\n        // enter, play sound\n        handleCheck();\n        break;\n\n      case 39:\n        // right arrow\n        handleNext();\n        break;\n\n      case 37:\n        // left arrow, go back\n        handlePrev();\n        break;\n\n      default:\n        break;\n    }\n\n    return function () {\n      window.removeEventListener('keydown', handleKeyDown);\n      window.removeEventListener('keyup', handleKeyUp);\n    };\n  }, [keyPressed]);\n\n  var handlePrev = function handlePrev() {\n    console.log('prev');\n    setOffset(offset + 1);\n  };\n\n  var handleNext = function handleNext() {\n    if (offset !== 0) {\n      setOffset(offset - 1);\n      return null;\n    }\n\n    var interval = getRandomInterval();\n    var nextNote = sharp11__WEBPACK_IMPORTED_MODULE_4__.note.create(notes[notes.length - 1]).transpose(interval.substring(1), isDesc(interval)).clean();\n\n    if (isNoteWithinRange(nextNote)) {\n      setNotes([].concat((0,_Users_huixie_source_jazzy_ears_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(notes.slice(Math.max(0, notes.length - MAX_NOTES_COUNT + 1))), [nextNote.fullName]));\n      setIntervals([].concat((0,_Users_huixie_source_jazzy_ears_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(intervals.slice(Math.max(0, intervals.length - MAX_NOTES_COUNT + 2))), [interval]));\n      setOffset(0);\n      return null;\n    } else {\n      return handleNext();\n    }\n  };\n\n  var handleCheck = function handleCheck() {\n    console.log('check');\n    synth.triggerAttack(notes[Math.max(0, notes.length - offset - 1)], '+0.0', 0.5);\n  };\n\n  var handleKeyDown = function handleKeyDown(_ref) {\n    var keyCode = _ref.keyCode;\n    console.log('keyDown', keyCode);\n\n    if (!keyPressed) {\n      setKeyPressed(keyCode);\n    }\n  };\n\n  var handleKeyUp = function handleKeyUp() {\n    console.log('keyUp');\n\n    if (keyPressed) {\n      setKeyPressed(null);\n    }\n\n    synth.triggerRelease();\n  };\n\n  var showIntervalOrNotes = function showIntervalOrNotes() {\n    var scaleDegree = _constants_notes__WEBPACK_IMPORTED_MODULE_8__.HALF_STEPS_TO_SCALE_DEGREE[intervals.length === 0 ? 0 : sharp11__WEBPACK_IMPORTED_MODULE_4__.interval.create(intervals[intervals.length - 1]).halfSteps()];\n    var note = notes.length - offset - 1 <= 0 || keyPressed === 13 || keyPressed === 32 ? notes[Math.max(0, notes.length - offset - 1)] : intervals[Math.max(0, intervals.length - offset - 1)];\n    return \"\".concat(note, \" (\").concat(scaleDegree, \")\");\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Intervals_module_scss__WEBPACK_IMPORTED_MODULE_9___default().viewPanel),\n      children: showIntervalOrNotes()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Intervals_module_scss__WEBPACK_IMPORTED_MODULE_9___default().controlPanel),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return handlePrev();\n        },\n        className: (_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default().button),\n        children: \"Previous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onMouseDown: function onMouseDown() {\n          return handleCheck(notes[notes.length - 1]);\n        },\n        onMouseUp: function onMouseUp() {\n          return handleKeyUp();\n        },\n        className: (_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default().button),\n        children: \"Check\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return handleNext();\n        },\n        className: (_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default().button),\n        children: \"Next\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 145,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 132,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Intervals, \"ZUI39FVxddA1opmItC9fxvX7vbs=\");\n\n_c = Intervals;\n\nvar _c;\n\n$RefreshReg$(_c, \"Intervals\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW50ZXJ2YWxzLmpzP2NiY2EiXSwibmFtZXMiOlsiTUFYX05PVEVTX0NPVU5UIiwiQVNDIiwiRFNDIiwiZ2V0UmFuZG9tSW50ZXJ2YWwiLCJpbnRlcnZhbCIsInBpY2tSYW5kb21seSIsIklOVEVSVkFMUyIsImNvbnNvbGUiLCJsb2ciLCJpc0Rlc2MiLCJpc05vdGVXaXRoaW5SYW5nZSIsIm5vdGUiLCJsb3dlclRoYW4iLCJSQU5HRSIsImhpZ2hlclRoYW4iLCJJbnRlcnZhbHMiLCJzeW50aCIsIlRvbmUiLCJ0b0Rlc3RpbmF0aW9uIiwidXNlU3RhdGUiLCJub3RlcyIsInNldE5vdGVzIiwiaW50ZXJ2YWxzIiwic2V0SW50ZXJ2YWxzIiwia2V5UHJlc3NlZCIsInNldEtleVByZXNzZWQiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZUtleVVwIiwiaGFuZGxlQ2hlY2siLCJoYW5kbGVOZXh0IiwiaGFuZGxlUHJldiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuZXh0Tm90ZSIsIk5vdGUiLCJsZW5ndGgiLCJ0cmFuc3Bvc2UiLCJzdWJzdHJpbmciLCJjbGVhbiIsInNsaWNlIiwiTWF0aCIsIm1heCIsImZ1bGxOYW1lIiwidHJpZ2dlckF0dGFjayIsImtleUNvZGUiLCJ0cmlnZ2VyUmVsZWFzZSIsInNob3dJbnRlcnZhbE9yTm90ZXMiLCJzY2FsZURlZ3JlZSIsIkhBTEZfU1RFUFNfVE9fU0NBTEVfREVHUkVFIiwiSW50ZXJ2YWwiLCJoYWxmU3RlcHMiLCJzdHlsZXMiLCJsYXlvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHLENBQXhCO0FBQ0EsSUFBTUMsR0FBRyxH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QUFBQSxpQkFBTXBCLFVBQVUsRUFBaEI7QUFBQSxTQUFqQjtBQUFxQyxpQkFBUyxFQUFFcUIsMkVBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUNFLG1CQUFXLEVBQUU7QUFBQSxpQkFBTXZCLFdBQVcsQ0FBQ2IsS0FBSyxDQUFDQSxLQUFLLENBQUNtQixNQUFOLEdBQWUsQ0FBaEIsQ0FBTixDQUFqQjtBQUFBLFNBRGY7QUFFRSxpQkFBUyxFQUFFO0FBQUEsaUJBQU1QLFdBQVcsRUFBakI7QUFBQSxTQUZiO0FBR0UsaUJBQVMsRUFBRXdCLDJFQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFXRTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNdEIsVUFBVSxFQUFoQjtBQUFBLFNBQWpCO0FBQXFDLGlCQUFTLEVBQUVzQiwyRUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRDs7R0F0SHVCekMsUzs7S0FBQUEsUyIsImZpbGUiOiIuL3BhZ2VzL2ludGVydmFscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xuaW1wb3J0IGxheW91dCBmcm9tICcuLi9zdHlsZXMvTGF5b3V0Lm1vZHVsZS5zY3NzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0ludGVydmFscy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm90ZSBhcyBOb3RlLCBpbnRlcnZhbCBhcyBJbnRlcnZhbCB9IGZyb20gJ3NoYXJwMTEnO1xuaW1wb3J0ICogYXMgVG9uZSBmcm9tICd0b25lJztcbmltcG9ydCB7IHBpY2tSYW5kb21seSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IElOVEVSVkFMUyB9IGZyb20gJy4uL2NvbnN0YW50cy9pbnRlcnZhbHMnO1xuaW1wb3J0IHsgSEFMRl9TVEVQU19UT19TQ0FMRV9ERUdSRUUsIFJBTkdFIH0gZnJvbSAnLi4vY29uc3RhbnRzL25vdGVzJztcblxuY29uc3QgTUFYX05PVEVTX0NPVU5UID0gNTtcbmNvbnN0IEFTQyA9ICfihpEnO1xuY29uc3QgRFNDID0gJ+KGkyc7XG5cbmNvbnN0IGdldFJhbmRvbUludGVydmFsID0gKCkgPT4ge1xuICBjb25zdCBpbnRlcnZhbCA9IHBpY2tSYW5kb21seShbQVNDLCBEU0NdKSArIHBpY2tSYW5kb21seShJTlRFUlZBTFNbJ2tleXMnXSk7XG4gIGNvbnNvbGUubG9nKGludGVydmFsKTtcbiAgcmV0dXJuIGludGVydmFsO1xufTtcblxuY29uc3QgaXNEZXNjID0gKGludGVydmFsKSA9PiB7XG4gIGlmIChpbnRlcnZhbFswXSA9PT0gRFNDKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5jb25zdCBpc05vdGVXaXRoaW5SYW5nZSA9IChub3RlKSA9PiB7XG4gIHJldHVybiBub3RlLmxvd2VyVGhhbihSQU5HRVsxXSkgJiYgbm90ZS5oaWdoZXJUaGFuKFJBTkdFWzBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludGVydmFscygpIHtcbiAgLy9jcmVhdGUgYSBzeW50aCBhbmQgY29ubmVjdCBpdCB0byB0aGUgbWFpbiBvdXRwdXQgKHlvdXIgc3BlYWtlcnMpXG4gIGNvbnN0IHN5bnRoID0gbmV3IFRvbmUuU3ludGgoKS50b0Rlc3RpbmF0aW9uKCk7XG4gIGNvbnN0IFtub3Rlcywgc2V0Tm90ZXNdID0gdXNlU3RhdGUoWydDNCddKTtcbiAgY29uc3QgW2ludGVydmFscywgc2V0SW50ZXJ2YWxzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2tleVByZXNzZWQsIHNldEtleVByZXNzZWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgaGFuZGxlS2V5VXApO1xuICAgIHN3aXRjaCAoa2V5UHJlc3NlZCkge1xuICAgICAgY2FzZSAxMzogLy8gc3BhY2VcbiAgICAgIGNhc2UgMzI6IC8vIGVudGVyLCBwbGF5IHNvdW5kXG4gICAgICAgIGhhbmRsZUNoZWNrKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOTogLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgaGFuZGxlTmV4dCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzc6XG4gICAgICAgIC8vIGxlZnQgYXJyb3csIGdvIGJhY2tcbiAgICAgICAgaGFuZGxlUHJldigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGhhbmRsZUtleVVwKTtcbiAgICB9O1xuICB9LCBba2V5UHJlc3NlZF0pO1xuXG4gIGNvbnN0IGhhbmRsZVByZXYgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3ByZXYnKTtcbiAgICBzZXRPZmZzZXQob2Zmc2V0ICsgMSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBpZiAob2Zmc2V0ICE9PSAwKSB7XG4gICAgICBzZXRPZmZzZXQob2Zmc2V0IC0gMSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBnZXRSYW5kb21JbnRlcnZhbCgpO1xuICAgIGNvbnN0IG5leHROb3RlID0gTm90ZS5jcmVhdGUobm90ZXNbbm90ZXMubGVuZ3RoIC0gMV0pXG4gICAgICAudHJhbnNwb3NlKGludGVydmFsLnN1YnN0cmluZygxKSwgaXNEZXNjKGludGVydmFsKSlcbiAgICAgIC5jbGVhbigpO1xuICAgIGlmIChpc05vdGVXaXRoaW5SYW5nZShuZXh0Tm90ZSkpIHtcbiAgICAgIHNldE5vdGVzKFtcbiAgICAgICAgLi4ubm90ZXMuc2xpY2UoTWF0aC5tYXgoMCwgbm90ZXMubGVuZ3RoIC0gTUFYX05PVEVTX0NPVU5UICsgMSkpLFxuICAgICAgICBuZXh0Tm90ZS5mdWxsTmFtZSxcbiAgICAgIF0pO1xuICAgICAgc2V0SW50ZXJ2YWxzKFtcbiAgICAgICAgLi4uaW50ZXJ2YWxzLnNsaWNlKE1hdGgubWF4KDAsIGludGVydmFscy5sZW5ndGggLSBNQVhfTk9URVNfQ09VTlQgKyAyKSksXG4gICAgICAgIGludGVydmFsLFxuICAgICAgXSk7XG4gICAgICBzZXRPZmZzZXQoMCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGhhbmRsZU5leHQoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2sgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2NoZWNrJyk7XG4gICAgc3ludGgudHJpZ2dlckF0dGFjayhcbiAgICAgIG5vdGVzW01hdGgubWF4KDAsIG5vdGVzLmxlbmd0aCAtIG9mZnNldCAtIDEpXSxcbiAgICAgICcrMC4wJyxcbiAgICAgIDAuNVxuICAgICk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoeyBrZXlDb2RlIH0pID0+IHtcbiAgICBjb25zb2xlLmxvZygna2V5RG93bicsIGtleUNvZGUpO1xuICAgIGlmICgha2V5UHJlc3NlZCkge1xuICAgICAgc2V0S2V5UHJlc3NlZChrZXlDb2RlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhhbmRsZUtleVVwID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdrZXlVcCcpO1xuICAgIGlmIChrZXlQcmVzc2VkKSB7XG4gICAgICBzZXRLZXlQcmVzc2VkKG51bGwpO1xuICAgIH1cbiAgICBzeW50aC50cmlnZ2VyUmVsZWFzZSgpO1xuICB9O1xuICBjb25zdCBzaG93SW50ZXJ2YWxPck5vdGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNjYWxlRGVncmVlID1cbiAgICAgIEhBTEZfU1RFUFNfVE9fU0NBTEVfREVHUkVFW1xuICAgICAgICBpbnRlcnZhbHMubGVuZ3RoID09PSAwXG4gICAgICAgICAgPyAwXG4gICAgICAgICAgOiBJbnRlcnZhbC5jcmVhdGUoaW50ZXJ2YWxzW2ludGVydmFscy5sZW5ndGggLSAxXSkuaGFsZlN0ZXBzKClcbiAgICAgIF07XG4gICAgY29uc3Qgbm90ZSA9XG4gICAgICBub3Rlcy5sZW5ndGggLSBvZmZzZXQgLSAxIDw9IDAgfHwga2V5UHJlc3NlZCA9PT0gMTMgfHwga2V5UHJlc3NlZCA9PT0gMzJcbiAgICAgICAgPyBub3Rlc1tNYXRoLm1heCgwLCBub3Rlcy5sZW5ndGggLSBvZmZzZXQgLSAxKV1cbiAgICAgICAgOiBpbnRlcnZhbHNbTWF0aC5tYXgoMCwgaW50ZXJ2YWxzLmxlbmd0aCAtIG9mZnNldCAtIDEpXTtcblxuICAgIHJldHVybiBgJHtub3RlfSAoJHtzY2FsZURlZ3JlZX0pYDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdQYW5lbH0+e3Nob3dJbnRlcnZhbE9yTm90ZXMoKX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbFBhbmVsfT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcmV2KCl9IGNsYXNzTmFtZT17bGF5b3V0LmJ1dHRvbn0+XG4gICAgICAgICAgUHJldmlvdXNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbk1vdXNlRG93bj17KCkgPT4gaGFuZGxlQ2hlY2sobm90ZXNbbm90ZXMubGVuZ3RoIC0gMV0pfVxuICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4gaGFuZGxlS2V5VXAoKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2xheW91dC5idXR0b259XG4gICAgICAgID5cbiAgICAgICAgICBDaGVja1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOZXh0KCl9IGNsYXNzTmFtZT17bGF5b3V0LmJ1dHRvbn0+XG4gICAgICAgICAgTmV4dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/intervals.js\n");

/***/ })

});