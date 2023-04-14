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

/***/ "./src/script/story/pickApill.js":
/*!***************************************!*\
  !*** ./src/script/story/pickApill.js ***!
  \***************************************/
/***/ (() => {

eval("if (document.getElementById('pickApill') != null) {\n  window.onload = function () {\n    createHeader();\n    createContent();\n    createFooter();\n  };\n  var createHeader = function createHeader() {\n    var header = document.createElement(\"header\");\n    console.log(header);\n    document.body.appendChild(header);\n    var tableNav = document.createElement(\"table\");\n    tableNav.cellPadding = \"10\";\n    tableNav.cellSpacing = \"5\";\n    header.appendChild(tableNav);\n    var thLeft = document.createElement(\"th\");\n    tableNav.appendChild(thLeft);\n    var h1Left = document.createElement(\"h1\");\n    thLeft.appendChild(h1Left);\n    var aLeft = document.createElement(\"a\");\n    aLeft.innerText = \"⇜\";\n    aLeft.setAttribute('href', \"../nuevos-lanzamientos.html\");\n    h1Left.appendChild(aLeft);\n    var hr = document.createElement(\"hr\");\n    header.appendChild(hr);\n  };\n  var createContent = function createContent() {\n    var divContainer = document.createElement(\"div\");\n    console.log(divContainer);\n    divContainer.className = \"container\";\n    document.body.appendChild(divContainer);\n    var tableText = document.createElement(\"table\");\n    divContainer.appendChild(tableText);\n    var tr1 = document.createElement(\"tr\");\n    tableText.appendChild(tr1);\n    var th1 = document.createElement(\"th\");\n    th1.colSpan = \"2\";\n    tr1.appendChild(th1);\n    var h1 = document.createElement(\"h1\");\n    h1.innerText = \"Escoge una píldora\";\n    th1.appendChild(h1);\n    var td1 = document.createElement(\"td\");\n    tableText.appendChild(td1);\n    var a1 = document.createElement(\"a\");\n    a1.setAttribute('href', \"red-pill.html\");\n    td1.appendChild(a1);\n    var imgRed = document.createElement(\"img\");\n    imgRed.setAttribute('src', \"https://i.ibb.co/DGTKX9S/red-pill.png\");\n    imgRed.width = \"115\";\n    imgRed.height = \"68\";\n    a1.appendChild(imgRed);\n    var td2 = document.createElement(\"td\");\n    tableText.appendChild(td2);\n    var a2 = document.createElement(\"a\");\n    a2.setAttribute('href', \"blue-pill.html\");\n    td2.appendChild(a2);\n    var imgBlue = document.createElement(\"img\");\n    imgBlue.setAttribute('src', \"https://i.ibb.co/4ZMhdPR/blue-pill.png\");\n    imgBlue.width = \"115\";\n    imgBlue.height = \"68\";\n    a2.appendChild(imgBlue);\n    var br1 = document.createElement(\"br\");\n    divContainer.appendChild(br1);\n  };\n  var createFooter = function createFooter() {\n    var footer = document.createElement(\"footer\");\n    console.log(footer);\n    document.body.appendChild(footer);\n    var hr = document.createElement(\"hr\");\n    footer.appendChild(hr);\n    var progressBar = document.createElement(\"progress\");\n    progressBar.value = \"0\";\n    progressBar.max = \"100\";\n    footer.appendChild(progressBar);\n    var iPage = document.createElement(\"i\");\n    iPage.className = \"footerText\";\n    iPage.innerText = \"~ 1 ~\";\n    footer.appendChild(iPage);\n    var br = document.createElement(\"br\");\n    footer.appendChild(br);\n  };\n}\n\n//# sourceURL=webpack://lab-07/./src/script/story/pickApill.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script/story/pickApill.js"]();
/******/ 	
/******/ })()
;