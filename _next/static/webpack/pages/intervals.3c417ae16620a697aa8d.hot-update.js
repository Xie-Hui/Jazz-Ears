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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Intervals; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_huixie_source_jazzy_ears_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ \"./pages/layout.js\");\n/* harmony import */ var _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Layout.module.scss */ \"./styles/Layout.module.scss\");\n/* harmony import */ var _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_Intervals_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Intervals.module.scss */ \"./styles/Intervals.module.scss\");\n/* harmony import */ var _styles_Intervals_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Intervals_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var sharp11__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sharp11 */ \"./node_modules/sharp11/index.js\");\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n/* harmony import */ var _constants_intervals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/intervals */ \"./constants/intervals.js\");\n/* harmony import */ var _constants_notes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/notes */ \"./constants/notes.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/huixie/source/jazzy-ears/pages/intervals.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar MAX_NOTES_COUNT = 5;\n\nvar getRandomInterval = function getRandomInterval() {\n  var interval = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.pickRandomly)([_constants_intervals__WEBPACK_IMPORTED_MODULE_7__.ASC, _constants_intervals__WEBPACK_IMPORTED_MODULE_7__.DSC]) + (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.pickRandomly)(_constants_intervals__WEBPACK_IMPORTED_MODULE_7__.INTERVALS.keys);\n  return interval;\n};\n\nvar isDesc = function isDesc(interval) {\n  if (interval[0] === _constants_intervals__WEBPACK_IMPORTED_MODULE_7__.DSC) {\n    return true;\n  } else {\n    return false;\n  }\n};\n\nvar isNoteWithinRange = function isNoteWithinRange(note) {\n  return note.lowerThan(_constants_notes__WEBPACK_IMPORTED_MODULE_8__.RANGE[1]) && note.higherThan(_constants_notes__WEBPACK_IMPORTED_MODULE_8__.RANGE[0]);\n};\n\nfunction Intervals() {\n  _s();\n\n  //create a synth and connect it to the main output (your speakers)\n  var synth = new tone__WEBPACK_IMPORTED_MODULE_5__.Synth().toDestination();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(['C4']),\n      notes = _useState[0],\n      setNotes = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      intervals = _useState2[0],\n      setIntervals = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      keyPressed = _useState3[0],\n      setKeyPressed = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),\n      offset = _useState4[0],\n      setOffset = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    window.addEventListener('keydown', handleKeyDown);\n    window.addEventListener('keyup', handleKeyUp);\n\n    switch (keyPressed) {\n      case 13: // space\n\n      case 32:\n        // enter, play sound\n        handleCheck();\n        break;\n\n      case 39:\n        // right arrow\n        handleNext();\n        break;\n\n      case 37:\n        // left arrow, go back\n        handlePrev();\n        break;\n\n      default:\n        break;\n    }\n\n    return function () {\n      window.removeEventListener('keydown', handleKeyDown);\n      window.removeEventListener('keyup', handleKeyUp);\n    };\n  }, [keyPressed]);\n\n  var handlePrev = function handlePrev() {\n    setOffset(offset + 1);\n  };\n\n  var handleNext = function handleNext() {\n    if (offset !== 0) {\n      setOffset(offset - 1);\n      return null;\n    }\n\n    var interval = getRandomInterval();\n    var nextNote = sharp11__WEBPACK_IMPORTED_MODULE_4__.note.create(notes[notes.length - 1]).transpose(interval.substring(1), isDesc(interval)).clean();\n\n    if (isNoteWithinRange(nextNote)) {\n      setNotes([].concat((0,_Users_huixie_source_jazzy_ears_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(notes.slice(Math.max(0, notes.length - MAX_NOTES_COUNT + 1))), [nextNote.fullName]));\n      setIntervals([].concat((0,_Users_huixie_source_jazzy_ears_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(intervals.slice(Math.max(0, intervals.length - MAX_NOTES_COUNT + 2))), [interval]));\n      setOffset(0);\n      return null;\n    } else {\n      return handleNext();\n    }\n  };\n\n  var handleCheck = function handleCheck() {\n    synth.triggerAttack(notes[Math.max(0, notes.length - offset - 1)], '+0.0', 0.5);\n  };\n\n  var handleKeyDown = function handleKeyDown(_ref) {\n    var keyCode = _ref.keyCode;\n\n    if (!keyPressed) {\n      setKeyPressed(keyCode);\n    }\n  };\n\n  var handleKeyUp = function handleKeyUp() {\n    if (keyPressed) {\n      setKeyPressed(null);\n    }\n\n    synth.triggerRelease();\n  };\n\n  var showIntervalOrNotes = function showIntervalOrNotes() {\n    var note = notes.length - offset - 1 <= 0 || keyPressed === 13 || keyPressed === 32 ? notes[Math.max(0, notes.length - offset - 1)] : intervals[Math.max(0, intervals.length - offset - 1)];\n    return \"\".concat(note);\n  };\n\n  var getScaleDegree = function getScaleDegree() {\n    if (intervals.length === 0) {\n      return '1';\n    }\n\n    var signedInterval = intervals[Math.max(0, intervals.length - offset - 1)];\n    var direction = signedInterval.slice(0, 1);\n    var interval = signedInterval.slice(1);\n    var scaleDegree = _constants_intervals__WEBPACK_IMPORTED_MODULE_7__.INTERVALS[interval]['degree'][direction];\n    return direction + ' ' + scaleDegree;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Intervals_module_scss__WEBPACK_IMPORTED_MODULE_9___default().viewPanel),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Intervals_module_scss__WEBPACK_IMPORTED_MODULE_9___default().interval),\n        children: showIntervalOrNotes()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Intervals_module_scss__WEBPACK_IMPORTED_MODULE_9___default().scaleDegree),\n        children: getScaleDegree()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Intervals_module_scss__WEBPACK_IMPORTED_MODULE_9___default().controlPanel),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return handlePrev();\n        },\n        className: (_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default().button),\n        children: \"Previous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onMouseDown: function onMouseDown() {\n          return handleCheck(notes[notes.length - 1]);\n        },\n        onMouseUp: function onMouseUp() {\n          return handleKeyUp();\n        },\n        className: (_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default().button),\n        children: \"Check\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return handleNext();\n        },\n        className: (_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default().button),\n        children: \"Next\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 133,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Intervals, \"ZUI39FVxddA1opmItC9fxvX7vbs=\");\n\n_c = Intervals;\n\nvar _c;\n\n$RefreshReg$(_c, \"Intervals\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW50ZXJ2YWxzLmpzP2NiY2EiXSwibmFtZXMiOlsiTUFYX05PVEVTX0NPVU5UIiwiZ2V0UmFuZG9tSW50ZXJ2YWwiLCJpbnRlcnZhbCIsInBpY2tSYW5kb21seSIsIkFTQyIsIkRTQyIsIklOVEVSVkFMUyIsImlzRGVzYyIsImlzTm90ZVdpdGhpblJhbmdlIiwibm90ZSIsImxvd2VyVGhhbiIsIlJBTkdFIiwiaGlnaGVyVGhhbiIsIkludGVydmFscyIsInN5bnRoIiwiVG9uZSIsInRvRGVzdGluYXRpb24iLCJ1c2VTdGF0ZSIsIm5vdGVzIiwic2V0Tm90ZXMiLCJpbnRlcnZhbHMiLCJzZXRJbnRlcnZhbHMiLCJrZXlQcmVzc2VkIiwic2V0S2V5UHJlc3NlZCIsIm9mZnNldCIsInNldE9mZnNldCIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlS2V5VXAiLCJoYW5kbGVDaGVjayIsImhhbmRsZU5leHQiLCJoYW5kbGVQcmV2IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5leHROb3RlIiwiTm90ZSIsImxlbmd0aCIsInRyYW5zcG9zZSIsInN1YnN0cmluZyIsImNsZWFuIiwic2xpY2UiLCJNYXRoIiwibWF4IiwiZnVsbE5hbWUiLCJ0cmlnZ2VyQXR0YWNrIiwia2V5Q29kZSIsInRyaWdnZXJSZWxlYXNlIiwic2hvd0ludGVydmFsT3JOb3RlcyIsImdldFNjYWxlRGVncmVlIiwic2lnbmVkSW50ZXJ2YWwiLCJkaXJlY3Rpb24iLCJzY2FsZURlZ3JlZSIsInN0eWxlcyIsImxheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUcsQ0FBeEI7O0FBRUEsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixH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QjtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUVLLGtGQUFoQjtBQUFBLGtCQUFxQ0osY0FBYztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFLLGVBQVMsRUFBRUksbUZBQWhCO0FBQUEsOEJBQ0U7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTXBCLFVBQVUsRUFBaEI7QUFBQSxTQUFqQjtBQUFxQyxpQkFBUyxFQUFFcUIsMkVBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUNFLG1CQUFXLEVBQUU7QUFBQSxpQkFBTXZCLFdBQVcsQ0FBQ2IsS0FBSyxDQUFDQSxLQUFLLENBQUNtQixNQUFOLEdBQWUsQ0FBaEIsQ0FBTixDQUFqQjtBQUFBLFNBRGY7QUFFRSxpQkFBUyxFQUFFO0FBQUEsaUJBQU1QLFdBQVcsRUFBakI7QUFBQSxTQUZiO0FBR0UsaUJBQVMsRUFBRXdCLDJFQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFXRTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNdEIsVUFBVSxFQUFoQjtBQUFBLFNBQWpCO0FBQXFDLGlCQUFTLEVBQUVzQiwyRUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVCRDs7R0E3SHVCekMsUzs7S0FBQUEsUyIsImZpbGUiOiIuL3BhZ2VzL2ludGVydmFscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xuaW1wb3J0IGxheW91dCBmcm9tICcuLi9zdHlsZXMvTGF5b3V0Lm1vZHVsZS5zY3NzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0ludGVydmFscy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm90ZSBhcyBOb3RlIH0gZnJvbSAnc2hhcnAxMSc7XG5pbXBvcnQgKiBhcyBUb25lIGZyb20gJ3RvbmUnO1xuaW1wb3J0IHsgcGlja1JhbmRvbWx5IH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgQVNDLCBEU0MsIElOVEVSVkFMUyB9IGZyb20gJy4uL2NvbnN0YW50cy9pbnRlcnZhbHMnO1xuaW1wb3J0IHsgSEFMRl9TVEVQU19UT19TQ0FMRV9ERUdSRUUsIFJBTkdFIH0gZnJvbSAnLi4vY29uc3RhbnRzL25vdGVzJztcblxuY29uc3QgTUFYX05PVEVTX0NPVU5UID0gNTtcblxuY29uc3QgZ2V0UmFuZG9tSW50ZXJ2YWwgPSAoKSA9PiB7XG4gIGNvbnN0IGludGVydmFsID0gcGlja1JhbmRvbWx5KFtBU0MsIERTQ10pICsgcGlja1JhbmRvbWx5KElOVEVSVkFMU1sna2V5cyddKTtcbiAgcmV0dXJuIGludGVydmFsO1xufTtcblxuY29uc3QgaXNEZXNjID0gKGludGVydmFsKSA9PiB7XG4gIGlmIChpbnRlcnZhbFswXSA9PT0gRFNDKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5jb25zdCBpc05vdGVXaXRoaW5SYW5nZSA9IChub3RlKSA9PiB7XG4gIHJldHVybiBub3RlLmxvd2VyVGhhbihSQU5HRVsxXSkgJiYgbm90ZS5oaWdoZXJUaGFuKFJBTkdFWzBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludGVydmFscygpIHtcbiAgLy9jcmVhdGUgYSBzeW50aCBhbmQgY29ubmVjdCBpdCB0byB0aGUgbWFpbiBvdXRwdXQgKHlvdXIgc3BlYWtlcnMpXG4gIGNvbnN0IHN5bnRoID0gbmV3IFRvbmUuU3ludGgoKS50b0Rlc3RpbmF0aW9uKCk7XG4gIGNvbnN0IFtub3Rlcywgc2V0Tm90ZXNdID0gdXNlU3RhdGUoWydDNCddKTtcbiAgY29uc3QgW2ludGVydmFscywgc2V0SW50ZXJ2YWxzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2tleVByZXNzZWQsIHNldEtleVByZXNzZWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgaGFuZGxlS2V5VXApO1xuICAgIHN3aXRjaCAoa2V5UHJlc3NlZCkge1xuICAgICAgY2FzZSAxMzogLy8gc3BhY2VcbiAgICAgIGNhc2UgMzI6IC8vIGVudGVyLCBwbGF5IHNvdW5kXG4gICAgICAgIGhhbmRsZUNoZWNrKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOTogLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgaGFuZGxlTmV4dCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzc6XG4gICAgICAgIC8vIGxlZnQgYXJyb3csIGdvIGJhY2tcbiAgICAgICAgaGFuZGxlUHJldigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGhhbmRsZUtleVVwKTtcbiAgICB9O1xuICB9LCBba2V5UHJlc3NlZF0pO1xuXG4gIGNvbnN0IGhhbmRsZVByZXYgPSAoKSA9PiB7XG4gICAgc2V0T2Zmc2V0KG9mZnNldCArIDEpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgaWYgKG9mZnNldCAhPT0gMCkge1xuICAgICAgc2V0T2Zmc2V0KG9mZnNldCAtIDEpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGludGVydmFsID0gZ2V0UmFuZG9tSW50ZXJ2YWwoKTtcbiAgICBjb25zdCBuZXh0Tm90ZSA9IE5vdGUuY3JlYXRlKG5vdGVzW25vdGVzLmxlbmd0aCAtIDFdKVxuICAgICAgLnRyYW5zcG9zZShpbnRlcnZhbC5zdWJzdHJpbmcoMSksIGlzRGVzYyhpbnRlcnZhbCkpXG4gICAgICAuY2xlYW4oKTtcbiAgICBpZiAoaXNOb3RlV2l0aGluUmFuZ2UobmV4dE5vdGUpKSB7XG4gICAgICBzZXROb3RlcyhbXG4gICAgICAgIC4uLm5vdGVzLnNsaWNlKE1hdGgubWF4KDAsIG5vdGVzLmxlbmd0aCAtIE1BWF9OT1RFU19DT1VOVCArIDEpKSxcbiAgICAgICAgbmV4dE5vdGUuZnVsbE5hbWUsXG4gICAgICBdKTtcbiAgICAgIHNldEludGVydmFscyhbXG4gICAgICAgIC4uLmludGVydmFscy5zbGljZShNYXRoLm1heCgwLCBpbnRlcnZhbHMubGVuZ3RoIC0gTUFYX05PVEVTX0NPVU5UICsgMikpLFxuICAgICAgICBpbnRlcnZhbCxcbiAgICAgIF0pO1xuICAgICAgc2V0T2Zmc2V0KDApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBoYW5kbGVOZXh0KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoZWNrID0gKCkgPT4ge1xuICAgIHN5bnRoLnRyaWdnZXJBdHRhY2soXG4gICAgICBub3Rlc1tNYXRoLm1heCgwLCBub3Rlcy5sZW5ndGggLSBvZmZzZXQgLSAxKV0sXG4gICAgICAnKzAuMCcsXG4gICAgICAwLjVcbiAgICApO1xuICB9O1xuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKHsga2V5Q29kZSB9KSA9PiB7XG4gICAgaWYgKCFrZXlQcmVzc2VkKSB7XG4gICAgICBzZXRLZXlQcmVzc2VkKGtleUNvZGUpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlS2V5VXAgPSAoKSA9PiB7XG4gICAgaWYgKGtleVByZXNzZWQpIHtcbiAgICAgIHNldEtleVByZXNzZWQobnVsbCk7XG4gICAgfVxuICAgIHN5bnRoLnRyaWdnZXJSZWxlYXNlKCk7XG4gIH07XG4gIGNvbnN0IHNob3dJbnRlcnZhbE9yTm90ZXMgPSAoKSA9PiB7XG4gICAgY29uc3Qgbm90ZSA9XG4gICAgICBub3Rlcy5sZW5ndGggLSBvZmZzZXQgLSAxIDw9IDAgfHwga2V5UHJlc3NlZCA9PT0gMTMgfHwga2V5UHJlc3NlZCA9PT0gMzJcbiAgICAgICAgPyBub3Rlc1tNYXRoLm1heCgwLCBub3Rlcy5sZW5ndGggLSBvZmZzZXQgLSAxKV1cbiAgICAgICAgOiBpbnRlcnZhbHNbTWF0aC5tYXgoMCwgaW50ZXJ2YWxzLmxlbmd0aCAtIG9mZnNldCAtIDEpXTtcblxuICAgIHJldHVybiBgJHtub3RlfWA7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2NhbGVEZWdyZWUgPSAoKSA9PiB7XG4gICAgaWYgKGludGVydmFscy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAnMSc7XG4gICAgfVxuXG4gICAgY29uc3Qgc2lnbmVkSW50ZXJ2YWwgPVxuICAgICAgaW50ZXJ2YWxzW01hdGgubWF4KDAsIGludGVydmFscy5sZW5ndGggLSBvZmZzZXQgLSAxKV07XG4gICAgY29uc3QgZGlyZWN0aW9uID0gc2lnbmVkSW50ZXJ2YWwuc2xpY2UoMCwgMSk7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzaWduZWRJbnRlcnZhbC5zbGljZSgxKTtcbiAgICBjb25zdCBzY2FsZURlZ3JlZSA9IElOVEVSVkFMU1tpbnRlcnZhbF1bJ2RlZ3JlZSddW2RpcmVjdGlvbl07XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uICsgJyAnICsgc2NhbGVEZWdyZWU7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3UGFuZWx9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmludGVydmFsfT57c2hvd0ludGVydmFsT3JOb3RlcygpfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNjYWxlRGVncmVlfT57Z2V0U2NhbGVEZWdyZWUoKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sUGFuZWx9PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByZXYoKX0gY2xhc3NOYW1lPXtsYXlvdXQuYnV0dG9ufT5cbiAgICAgICAgICBQcmV2aW91c1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uTW91c2VEb3duPXsoKSA9PiBoYW5kbGVDaGVjayhub3Rlc1tub3Rlcy5sZW5ndGggLSAxXSl9XG4gICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiBoYW5kbGVLZXlVcCgpfVxuICAgICAgICAgIGNsYXNzTmFtZT17bGF5b3V0LmJ1dHRvbn1cbiAgICAgICAgPlxuICAgICAgICAgIENoZWNrXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU5leHQoKX0gY2xhc3NOYW1lPXtsYXlvdXQuYnV0dG9ufT5cbiAgICAgICAgICBOZXh0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/intervals.js\n");

/***/ })

});