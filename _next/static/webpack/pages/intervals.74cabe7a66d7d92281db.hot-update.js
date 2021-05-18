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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Intervals; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_huixie_source_jazzy_ears_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ \"./pages/layout.js\");\n/* harmony import */ var _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Layout.module.scss */ \"./styles/Layout.module.scss\");\n/* harmony import */ var _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_Intervals_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Intervals.module.scss */ \"./styles/Intervals.module.scss\");\n/* harmony import */ var _styles_Intervals_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Intervals_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var sharp11__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sharp11 */ \"./node_modules/sharp11/index.js\");\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n/* harmony import */ var _constants_intervals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/intervals */ \"./constants/intervals.js\");\n/* harmony import */ var _constants_notes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/notes */ \"./constants/notes.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/huixie/source/jazzy-ears/pages/intervals.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar MAX_NOTES_COUNT = 5;\nvar ASC = '↑';\nvar DSC = '↓';\n\nvar getRandomInterval = function getRandomInterval() {\n  var interval = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.pickRandomly)([ASC, DSC]) + (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.pickRandomly)(_constants_intervals__WEBPACK_IMPORTED_MODULE_7__.INTERVALS.keys);\n  return interval;\n};\n\nvar isDesc = function isDesc(interval) {\n  if (interval[0] === DSC) {\n    return true;\n  } else {\n    return false;\n  }\n};\n\nvar isNoteWithinRange = function isNoteWithinRange(note) {\n  return note.lowerThan(_constants_notes__WEBPACK_IMPORTED_MODULE_8__.RANGE[1]) && note.higherThan(_constants_notes__WEBPACK_IMPORTED_MODULE_8__.RANGE[0]);\n};\n\nfunction Intervals() {\n  _s();\n\n  //create a synth and connect it to the main output (your speakers)\n  var synth = new tone__WEBPACK_IMPORTED_MODULE_5__.Synth().toDestination();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(['C4']),\n      notes = _useState[0],\n      setNotes = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      intervals = _useState2[0],\n      setIntervals = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      keyPressed = _useState3[0],\n      setKeyPressed = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),\n      offset = _useState4[0],\n      setOffset = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    window.addEventListener('keydown', handleKeyDown);\n    window.addEventListener('keyup', handleKeyUp);\n\n    switch (keyPressed) {\n      case 13: // space\n\n      case 32:\n        // enter, play sound\n        handleCheck();\n        break;\n\n      case 39:\n        // right arrow\n        handleNext();\n        break;\n\n      case 37:\n        // left arrow, go back\n        handlePrev();\n        break;\n\n      default:\n        break;\n    }\n\n    return function () {\n      window.removeEventListener('keydown', handleKeyDown);\n      window.removeEventListener('keyup', handleKeyUp);\n    };\n  }, [keyPressed]);\n\n  var handlePrev = function handlePrev() {\n    setOffset(offset + 1);\n  };\n\n  var handleNext = function handleNext() {\n    if (offset !== 0) {\n      setOffset(offset - 1);\n      return null;\n    }\n\n    var interval = getRandomInterval();\n    var nextNote = sharp11__WEBPACK_IMPORTED_MODULE_4__.note.create(notes[notes.length - 1]).transpose(interval.substring(1), isDesc(interval)).clean();\n\n    if (isNoteWithinRange(nextNote)) {\n      setNotes([].concat((0,_Users_huixie_source_jazzy_ears_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(notes.slice(Math.max(0, notes.length - MAX_NOTES_COUNT + 1))), [nextNote.fullName]));\n      setIntervals([].concat((0,_Users_huixie_source_jazzy_ears_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(intervals.slice(Math.max(0, intervals.length - MAX_NOTES_COUNT + 2))), [interval]));\n      setOffset(0);\n      return null;\n    } else {\n      return handleNext();\n    }\n  };\n\n  var handleCheck = function handleCheck() {\n    synth.triggerAttack(notes[Math.max(0, notes.length - offset - 1)], '+0.0', 0.5);\n  };\n\n  var handleKeyDown = function handleKeyDown(_ref) {\n    var keyCode = _ref.keyCode;\n\n    if (!keyPressed) {\n      setKeyPressed(keyCode);\n    }\n  };\n\n  var handleKeyUp = function handleKeyUp() {\n    if (keyPressed) {\n      setKeyPressed(null);\n    }\n\n    synth.triggerRelease();\n  };\n\n  var showIntervalOrNotes = function showIntervalOrNotes() {\n    var note = notes.length - offset - 1 <= 0 || keyPressed === 13 || keyPressed === 32 ? notes[Math.max(0, notes.length - offset - 1)] : intervals[Math.max(0, intervals.length - offset - 1)];\n    return \"\".concat(note);\n  };\n\n  var getScaleDegree = function getScaleDegree() {\n    var curNote = sharp11__WEBPACK_IMPORTED_MODULE_4__.note.create(notes[Math.max(0, notes.length - offset - 1)]);\n    var rootNote = sharp11__WEBPACK_IMPORTED_MODULE_4__.note.create(notes[Math.max(0, notes.length - offset - 2)]);\n    var halfSteps = curNote.higherThan(rootNote) ? rootNote.getHalfSteps(curNote) : rootNote.transposeDown('P8').getHalfSteps(curNote);\n    var direction = curNote.equals(rootNote) ? '' : curNote.higherThan(rootNote) ? ASC : DSC;\n    return direction + direction && ' ' + _constants_notes__WEBPACK_IMPORTED_MODULE_8__.HALF_STEPS_TO_SCALE_DEGREE[halfSteps];\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Intervals_module_scss__WEBPACK_IMPORTED_MODULE_9___default().viewPanel),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Intervals_module_scss__WEBPACK_IMPORTED_MODULE_9___default().interval),\n        children: showIntervalOrNotes()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Intervals_module_scss__WEBPACK_IMPORTED_MODULE_9___default().scaleDegree),\n        children: getScaleDegree()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Intervals_module_scss__WEBPACK_IMPORTED_MODULE_9___default().controlPanel),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return handlePrev();\n        },\n        className: (_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default().button),\n        children: \"Previous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onMouseDown: function onMouseDown() {\n          return handleCheck(notes[notes.length - 1]);\n        },\n        onMouseUp: function onMouseUp() {\n          return handleKeyUp();\n        },\n        className: (_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default().button),\n        children: \"Check\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 145,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return handleNext();\n        },\n        className: (_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default().button),\n        children: \"Next\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 152,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 136,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Intervals, \"ZUI39FVxddA1opmItC9fxvX7vbs=\");\n\n_c = Intervals;\n\nvar _c;\n\n$RefreshReg$(_c, \"Intervals\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW50ZXJ2YWxzLmpzP2NiY2EiXSwibmFtZXMiOlsiTUFYX05PVEVTX0NPVU5UIiwiQVNDIiwiRFNDIiwiZ2V0UmFuZG9tSW50ZXJ2YWwiLCJpbnRlcnZhbCIsInBpY2tSYW5kb21seSIsIklOVEVSVkFMUyIsImlzRGVzYyIsImlzTm90ZVdpdGhpblJhbmdlIiwibm90ZSIsImxvd2VyVGhhbiIsIlJBTkdFIiwiaGlnaGVyVGhhbiIsIkludGVydmFscyIsInN5bnRoIiwiVG9uZSIsInRvRGVzdGluYXRpb24iLCJ1c2VTdGF0ZSIsIm5vdGVzIiwic2V0Tm90ZXMiLCJpbnRlcnZhbHMiLCJzZXRJbnRlcnZhbHMiLCJrZXlQcmVzc2VkIiwic2V0S2V5UHJlc3NlZCIsIm9mZnNldCIsInNldE9mZnNldCIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlS2V5VXAiLCJoYW5kbGVDaGVjayIsImhhbmRsZU5leHQiLCJoYW5kbGVQcmV2IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5leHROb3RlIiwiTm90ZSIsImxlbmd0aCIsInRyYW5zcG9zZSIsInN1YnN0cmluZyIsImNsZWFuIiwic2xpY2UiLCJNYXRoIiwibWF4IiwiZnVsbE5hbWUiLCJ0cmlnZ2VyQXR0YWNrIiwia2V5Q29kZSIsInRyaWdnZXJSZWxlYXNlIiwic2hvd0ludGVydmFsT3JOb3RlcyIsImdldFNjYWxlRGVncmVlIiwiY3VyTm90ZSIsInJvb3ROb3RlIiwiaGFsZlN0ZXBzIiwiZ2V0SGFsZlN0ZXBzIiwidHJhbnNwb3NlRG93biIsImRpcmVjdGlvbiIsImVxdWFscyIsIkhBTEZfU1RFUFNfVE9fU0NBTEVfREVHUkVFIiwic3R5bGVzIiwibGF5b3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1QkQ7O0dBOUh1QjlDLFM7O0tBQUFBLFMiLCJmaWxlIjoiLi9wYWdlcy9pbnRlcnZhbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0JztcbmltcG9ydCBsYXlvdXQgZnJvbSAnLi4vc3R5bGVzL0xheW91dC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9JbnRlcnZhbHMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vdGUgYXMgTm90ZSwgaW50ZXJ2YWwgYXMgSW50ZXJ2YWwgfSBmcm9tICdzaGFycDExJztcbmltcG9ydCAqIGFzIFRvbmUgZnJvbSAndG9uZSc7XG5pbXBvcnQgeyBwaWNrUmFuZG9tbHkgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBJTlRFUlZBTFMgfSBmcm9tICcuLi9jb25zdGFudHMvaW50ZXJ2YWxzJztcbmltcG9ydCB7IEhBTEZfU1RFUFNfVE9fU0NBTEVfREVHUkVFLCBSQU5HRSB9IGZyb20gJy4uL2NvbnN0YW50cy9ub3Rlcyc7XG5cbmNvbnN0IE1BWF9OT1RFU19DT1VOVCA9IDU7XG5jb25zdCBBU0MgPSAn4oaRJztcbmNvbnN0IERTQyA9ICfihpMnO1xuXG5jb25zdCBnZXRSYW5kb21JbnRlcnZhbCA9ICgpID0+IHtcbiAgY29uc3QgaW50ZXJ2YWwgPSBwaWNrUmFuZG9tbHkoW0FTQywgRFNDXSkgKyBwaWNrUmFuZG9tbHkoSU5URVJWQUxTWydrZXlzJ10pO1xuICByZXR1cm4gaW50ZXJ2YWw7XG59O1xuXG5jb25zdCBpc0Rlc2MgPSAoaW50ZXJ2YWwpID0+IHtcbiAgaWYgKGludGVydmFsWzBdID09PSBEU0MpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IGlzTm90ZVdpdGhpblJhbmdlID0gKG5vdGUpID0+IHtcbiAgcmV0dXJuIG5vdGUubG93ZXJUaGFuKFJBTkdFWzFdKSAmJiBub3RlLmhpZ2hlclRoYW4oUkFOR0VbMF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50ZXJ2YWxzKCkge1xuICAvL2NyZWF0ZSBhIHN5bnRoIGFuZCBjb25uZWN0IGl0IHRvIHRoZSBtYWluIG91dHB1dCAoeW91ciBzcGVha2VycylcbiAgY29uc3Qgc3ludGggPSBuZXcgVG9uZS5TeW50aCgpLnRvRGVzdGluYXRpb24oKTtcbiAgY29uc3QgW25vdGVzLCBzZXROb3Rlc10gPSB1c2VTdGF0ZShbJ0M0J10pO1xuICBjb25zdCBbaW50ZXJ2YWxzLCBzZXRJbnRlcnZhbHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBba2V5UHJlc3NlZCwgc2V0S2V5UHJlc3NlZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBoYW5kbGVLZXlVcCk7XG4gICAgc3dpdGNoIChrZXlQcmVzc2VkKSB7XG4gICAgICBjYXNlIDEzOiAvLyBzcGFjZVxuICAgICAgY2FzZSAzMjogLy8gZW50ZXIsIHBsYXkgc291bmRcbiAgICAgICAgaGFuZGxlQ2hlY2soKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM5OiAvLyByaWdodCBhcnJvd1xuICAgICAgICBoYW5kbGVOZXh0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzNzpcbiAgICAgICAgLy8gbGVmdCBhcnJvdywgZ28gYmFja1xuICAgICAgICBoYW5kbGVQcmV2KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgaGFuZGxlS2V5VXApO1xuICAgIH07XG4gIH0sIFtrZXlQcmVzc2VkXSk7XG5cbiAgY29uc3QgaGFuZGxlUHJldiA9ICgpID0+IHtcbiAgICBzZXRPZmZzZXQob2Zmc2V0ICsgMSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBpZiAob2Zmc2V0ICE9PSAwKSB7XG4gICAgICBzZXRPZmZzZXQob2Zmc2V0IC0gMSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBnZXRSYW5kb21JbnRlcnZhbCgpO1xuICAgIGNvbnN0IG5leHROb3RlID0gTm90ZS5jcmVhdGUobm90ZXNbbm90ZXMubGVuZ3RoIC0gMV0pXG4gICAgICAudHJhbnNwb3NlKGludGVydmFsLnN1YnN0cmluZygxKSwgaXNEZXNjKGludGVydmFsKSlcbiAgICAgIC5jbGVhbigpO1xuICAgIGlmIChpc05vdGVXaXRoaW5SYW5nZShuZXh0Tm90ZSkpIHtcbiAgICAgIHNldE5vdGVzKFtcbiAgICAgICAgLi4ubm90ZXMuc2xpY2UoTWF0aC5tYXgoMCwgbm90ZXMubGVuZ3RoIC0gTUFYX05PVEVTX0NPVU5UICsgMSkpLFxuICAgICAgICBuZXh0Tm90ZS5mdWxsTmFtZSxcbiAgICAgIF0pO1xuICAgICAgc2V0SW50ZXJ2YWxzKFtcbiAgICAgICAgLi4uaW50ZXJ2YWxzLnNsaWNlKE1hdGgubWF4KDAsIGludGVydmFscy5sZW5ndGggLSBNQVhfTk9URVNfQ09VTlQgKyAyKSksXG4gICAgICAgIGludGVydmFsLFxuICAgICAgXSk7XG4gICAgICBzZXRPZmZzZXQoMCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGhhbmRsZU5leHQoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2sgPSAoKSA9PiB7XG4gICAgc3ludGgudHJpZ2dlckF0dGFjayhcbiAgICAgIG5vdGVzW01hdGgubWF4KDAsIG5vdGVzLmxlbmd0aCAtIG9mZnNldCAtIDEpXSxcbiAgICAgICcrMC4wJyxcbiAgICAgIDAuNVxuICAgICk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoeyBrZXlDb2RlIH0pID0+IHtcbiAgICBpZiAoIWtleVByZXNzZWQpIHtcbiAgICAgIHNldEtleVByZXNzZWQoa2V5Q29kZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBoYW5kbGVLZXlVcCA9ICgpID0+IHtcbiAgICBpZiAoa2V5UHJlc3NlZCkge1xuICAgICAgc2V0S2V5UHJlc3NlZChudWxsKTtcbiAgICB9XG4gICAgc3ludGgudHJpZ2dlclJlbGVhc2UoKTtcbiAgfTtcbiAgY29uc3Qgc2hvd0ludGVydmFsT3JOb3RlcyA9ICgpID0+IHtcbiAgICBjb25zdCBub3RlID1cbiAgICAgIG5vdGVzLmxlbmd0aCAtIG9mZnNldCAtIDEgPD0gMCB8fCBrZXlQcmVzc2VkID09PSAxMyB8fCBrZXlQcmVzc2VkID09PSAzMlxuICAgICAgICA/IG5vdGVzW01hdGgubWF4KDAsIG5vdGVzLmxlbmd0aCAtIG9mZnNldCAtIDEpXVxuICAgICAgICA6IGludGVydmFsc1tNYXRoLm1heCgwLCBpbnRlcnZhbHMubGVuZ3RoIC0gb2Zmc2V0IC0gMSldO1xuXG4gICAgcmV0dXJuIGAke25vdGV9YDtcbiAgfTtcblxuICBjb25zdCBnZXRTY2FsZURlZ3JlZSA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJOb3RlID0gTm90ZS5jcmVhdGUobm90ZXNbTWF0aC5tYXgoMCwgbm90ZXMubGVuZ3RoIC0gb2Zmc2V0IC0gMSldKTtcbiAgICBjb25zdCByb290Tm90ZSA9IE5vdGUuY3JlYXRlKG5vdGVzW01hdGgubWF4KDAsIG5vdGVzLmxlbmd0aCAtIG9mZnNldCAtIDIpXSk7XG5cbiAgICBjb25zdCBoYWxmU3RlcHMgPSBjdXJOb3RlLmhpZ2hlclRoYW4ocm9vdE5vdGUpXG4gICAgICA/IHJvb3ROb3RlLmdldEhhbGZTdGVwcyhjdXJOb3RlKVxuICAgICAgOiByb290Tm90ZS50cmFuc3Bvc2VEb3duKCdQOCcpLmdldEhhbGZTdGVwcyhjdXJOb3RlKTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBjdXJOb3RlLmVxdWFscyhyb290Tm90ZSlcbiAgICAgID8gJydcbiAgICAgIDogY3VyTm90ZS5oaWdoZXJUaGFuKHJvb3ROb3RlKVxuICAgICAgPyBBU0NcbiAgICAgIDogRFNDO1xuICAgIHJldHVybiBkaXJlY3Rpb24gKyBkaXJlY3Rpb24gJiYgJyAnICsgSEFMRl9TVEVQU19UT19TQ0FMRV9ERUdSRUVbaGFsZlN0ZXBzXTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdQYW5lbH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW50ZXJ2YWx9PntzaG93SW50ZXJ2YWxPck5vdGVzKCl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2NhbGVEZWdyZWV9PntnZXRTY2FsZURlZ3JlZSgpfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRyb2xQYW5lbH0+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUHJldigpfSBjbGFzc05hbWU9e2xheW91dC5idXR0b259PlxuICAgICAgICAgIFByZXZpb3VzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25Nb3VzZURvd249eygpID0+IGhhbmRsZUNoZWNrKG5vdGVzW25vdGVzLmxlbmd0aCAtIDFdKX1cbiAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IGhhbmRsZUtleVVwKCl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtsYXlvdXQuYnV0dG9ufVxuICAgICAgICA+XG4gICAgICAgICAgQ2hlY2tcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlTmV4dCgpfSBjbGFzc05hbWU9e2xheW91dC5idXR0b259PlxuICAgICAgICAgIE5leHRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/intervals.js\n");

/***/ })

});