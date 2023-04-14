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

/***/ "./src/script/story/everyone.js":
/*!**************************************!*\
  !*** ./src/script/story/everyone.js ***!
  \**************************************/
/***/ (() => {

eval("if (document.getElementById('everyone') != null) {\n  window.onload = function () {\n    createHeader();\n    createContent();\n    createFooter();\n  };\n  var createHeader = function createHeader() {\n    var header = document.createElement(\"header\");\n    console.log(header);\n    document.body.appendChild(header);\n    var tableNav = document.createElement(\"table\");\n    tableNav.cellPadding = \"10\";\n    tableNav.cellSpacing = \"5\";\n    header.appendChild(tableNav);\n    var thLeft = document.createElement(\"th\");\n    tableNav.appendChild(thLeft);\n    var h1Left = document.createElement(\"h1\");\n    thLeft.appendChild(h1Left);\n    var aLeft = document.createElement(\"a\");\n    aLeft.innerText = \"⇜\";\n    aLeft.setAttribute('href', \"red-pill.html\");\n    h1Left.appendChild(aLeft);\n    var thRight = document.createElement(\"th\");\n    tableNav.appendChild(thRight);\n    var h1Right = document.createElement(\"h1\");\n    thRight.appendChild(h1Right);\n    var aRight = document.createElement(\"a\");\n    aRight.innerText = \"⇝\";\n    aRight.setAttribute('href', \"mistake.html\");\n    h1Right.appendChild(aRight);\n    var hr = document.createElement(\"hr\");\n    header.appendChild(hr);\n  };\n  var createContent = function createContent() {\n    var divContainer = document.createElement(\"div\");\n    console.log(divContainer);\n    divContainer.className = \"container\";\n    document.body.appendChild(divContainer);\n    var tableText = document.createElement(\"table\");\n    divContainer.appendChild(tableText);\n    var tr1 = document.createElement(\"tr\");\n    tableText.appendChild(tr1);\n    var th1 = document.createElement(\"th\");\n    tr1.appendChild(th1);\n    var h2 = document.createElement(\"h2\");\n    h2.innerText = \"La ciudad está muy feliz de tener tu ayuda\";\n    th1.appendChild(h2);\n    var tr2 = document.createElement(\"tr\");\n    tableText.appendChild(tr2);\n    var th2 = document.createElement(\"th\");\n    tr2.appendChild(th2);\n    var h3 = document.createElement(\"h3\");\n    h3.innerText = \"Pero ten cuidado, no puedes cometer errores\";\n    th2.appendChild(h3);\n    var td = document.createElement(\"td\");\n    tableText.appendChild(td);\n    var img = document.createElement(\"img\");\n    img.setAttribute('src', \"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6c68bd99-92a3-4476-8306-f5a95c1ade32/dbfl4pn-7e1b0c3d-117e-47da-bc20-3d71c719bf50.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZjNjhiZDk5LTkyYTMtNDQ3Ni04MzA2LWY1YTk1YzFhZGUzMlwvZGJmbDRwbi03ZTFiMGMzZC0xMTdlLTQ3ZGEtYmMyMC0zZDcxYzcxOWJmNTAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5OPofxQkKWr247epvmbXDvS0pq3Rpzuh3vIK8g3hR4I\");\n    img.width = \"326\";\n    img.height = \"185\";\n    td.appendChild(img);\n    var br = document.createElement(\"br\");\n    divContainer.appendChild(br);\n  };\n  var createFooter = function createFooter() {\n    var footer = document.createElement(\"footer\");\n    console.log(footer);\n    document.body.appendChild(footer);\n    var hr = document.createElement(\"hr\");\n    footer.appendChild(hr);\n    var progressBar = document.createElement(\"progress\");\n    progressBar.value = \"40\";\n    progressBar.max = \"100\";\n    footer.appendChild(progressBar);\n    var iPage = document.createElement(\"i\");\n    iPage.className = \"footerText\";\n    iPage.innerText = \"~ 3 ~\";\n    footer.appendChild(iPage);\n    var br = document.createElement(\"br\");\n    footer.appendChild(br);\n  };\n}\n\n//# sourceURL=webpack://lab-07/./src/script/story/everyone.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script/story/everyone.js"]();
/******/ 	
/******/ })()
;