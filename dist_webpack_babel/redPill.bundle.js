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

/***/ "./src/script/story/redPill.js":
/*!*************************************!*\
  !*** ./src/script/story/redPill.js ***!
  \*************************************/
/***/ (() => {

eval("if (document.getElementById('redPill') != null) {\n  window.onload = function () {\n    createHeader();\n    createContent();\n    createFooter();\n  };\n  var createHeader = function createHeader() {\n    var header = document.createElement(\"header\");\n    console.log(header);\n    document.body.appendChild(header);\n    var tableNav = document.createElement(\"table\");\n    tableNav.cellPadding = \"10\";\n    tableNav.cellSpacing = \"5\";\n    header.appendChild(tableNav);\n    var thLeft = document.createElement(\"th\");\n    tableNav.appendChild(thLeft);\n    var h1Left = document.createElement(\"h1\");\n    thLeft.appendChild(h1Left);\n    var aLeft = document.createElement(\"a\");\n    aLeft.innerText = \"⇜\";\n    aLeft.setAttribute('href', \"pick-a-pill.html\");\n    h1Left.appendChild(aLeft);\n    var hr = document.createElement(\"hr\");\n    header.appendChild(hr);\n  };\n  var createContent = function createContent() {\n    var divContainer = document.createElement(\"div\");\n    console.log(divContainer);\n    divContainer.className = \"container\";\n    document.body.appendChild(divContainer);\n    var tableText = document.createElement(\"table\");\n    divContainer.appendChild(tableText);\n    var tr1 = document.createElement(\"tr\");\n    tableText.appendChild(tr1);\n    var th1 = document.createElement(\"th\");\n    th1.colSpan = \"2\";\n    tr1.appendChild(th1);\n    var img = document.createElement(\"img\");\n    img.setAttribute('src', \"https://i.pinimg.com/originals/7d/09/a4/7d09a485cb23ebed6cb999e0f4302dd6.gif\");\n    img.width = \"122\";\n    img.height = \"122\";\n    th1.appendChild(img);\n    var tr2 = document.createElement(\"tr\");\n    tableText.appendChild(tr2);\n    var th2 = document.createElement(\"th\");\n    th2.colSpan = \"2\";\n    tr2.appendChild(th2);\n    var h2 = document.createElement(\"h2\");\n    h2.innerText = \"Ahora tienes superpoderes\";\n    th2.appendChild(h2);\n    var h3 = document.createElement(\"h3\");\n    h3.innerText = \"¿Qué quieres hacer con ellos?\";\n    th2.appendChild(h3);\n    var td1 = document.createElement(\"td\");\n    tableText.appendChild(td1);\n    var h4One = document.createElement(\"h4\");\n    td1.appendChild(h4One);\n    var a1 = document.createElement(\"a\");\n    a1.setAttribute('href', \"you.html\");\n    a1.innerText = \"Usarlos para ti\";\n    h4One.appendChild(a1);\n    var td2 = document.createElement(\"td\");\n    tableText.appendChild(td2);\n    var h4Two = document.createElement(\"h4\");\n    td2.appendChild(h4Two);\n    var a2 = document.createElement(\"a\");\n    a2.setAttribute('href', \"everyone.html\");\n    a2.innerText = \"Usarlos para los demás\";\n    h4Two.appendChild(a2);\n    var br = document.createElement(\"br\");\n    divContainer.appendChild(br);\n  };\n  var createFooter = function createFooter() {\n    var footer = document.createElement(\"footer\");\n    console.log(footer);\n    document.body.appendChild(footer);\n    var hr = document.createElement(\"hr\");\n    footer.appendChild(hr);\n    var progressBar = document.createElement(\"progress\");\n    progressBar.value = \"20\";\n    progressBar.max = \"100\";\n    footer.appendChild(progressBar);\n    var iPage = document.createElement(\"i\");\n    iPage.className = \"footerText\";\n    iPage.innerText = \"~ 2 ~\";\n    footer.appendChild(iPage);\n    var br = document.createElement(\"br\");\n    footer.appendChild(br);\n  };\n}\n\n//# sourceURL=webpack://lab-07/./src/script/story/redPill.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script/story/redPill.js"]();
/******/ 	
/******/ })()
;