/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/story/bluePill.js":
/*!**************************************!*\
  !*** ./src/script/story/bluePill.js ***!
  \**************************************/
/***/ (() => {

eval("if (document.getElementById('bluePill') != null) {\n  window.onload = function () {\n    createHeader();\n    createContent();\n    createFooter();\n  };\n  var createHeader = function createHeader() {\n    var header = document.createElement(\"header\");\n    console.log(header);\n    document.body.appendChild(header);\n    var tableNav = document.createElement(\"table\");\n    tableNav.cellPadding = \"10\";\n    tableNav.cellSpacing = \"5\";\n    header.appendChild(tableNav);\n    var thLeft = document.createElement(\"th\");\n    tableNav.appendChild(thLeft);\n    var h1Left = document.createElement(\"h1\");\n    thLeft.appendChild(h1Left);\n    var aLeft = document.createElement(\"a\");\n    aLeft.innerText = \"⇜\";\n    aLeft.setAttribute('href', \"pick-a-pill.html\");\n    h1Left.appendChild(aLeft);\n    var thRight = document.createElement(\"th\");\n    tableNav.appendChild(thRight);\n    var h1Right = document.createElement(\"h1\");\n    thRight.appendChild(h1Right);\n    var aRight = document.createElement(\"a\");\n    aRight.innerText = \"⇝\";\n    aRight.setAttribute('href', \"blue-end.html\");\n    h1Right.appendChild(aRight);\n    var hr = document.createElement(\"hr\");\n    header.appendChild(hr);\n  };\n  var createContent = function createContent() {\n    var divContainer = document.createElement(\"div\");\n    console.log(divContainer);\n    divContainer.className = \"container\";\n    document.body.appendChild(divContainer);\n    var tableText = document.createElement(\"table\");\n    divContainer.appendChild(tableText);\n    var tr1 = document.createElement(\"tr\");\n    tableText.appendChild(tr1);\n    var th1 = document.createElement(\"th\");\n    tr1.appendChild(th1);\n    var h2 = document.createElement(\"h2\");\n    h2.innerText = \"¿No te sientes un poco maread@?\";\n    th1.appendChild(h2);\n    var td = document.createElement(\"td\");\n    tableText.appendChild(td);\n    var img = document.createElement(\"img\");\n    img.setAttribute('src', \"https://i.pinimg.com/originals/5a/4c/91/5a4c91599d1d921747c0a64e31eb2036.gif\");\n    img.width = \"300\";\n    img.height = \"206\";\n    td.appendChild(img);\n    var br = document.createElement(\"br\");\n    divContainer.appendChild(br);\n  };\n  var createFooter = function createFooter() {\n    var footer = document.createElement(\"footer\");\n    console.log(footer);\n    document.body.appendChild(footer);\n    var hr = document.createElement(\"hr\");\n    footer.appendChild(hr);\n    var progressBar = document.createElement(\"progress\");\n    progressBar.value = \"33\";\n    progressBar.max = \"100\";\n    footer.appendChild(progressBar);\n    var iPage = document.createElement(\"i\");\n    iPage.className = \"footerText\";\n    iPage.innerText = \"~ 2 ~\";\n    footer.appendChild(iPage);\n    var br = document.createElement(\"br\");\n    footer.appendChild(br);\n  };\n}\n\n//# sourceURL=webpack://lab-07/./src/script/story/bluePill.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script/story/bluePill.js"]();
/******/ 	
/******/ })()
;