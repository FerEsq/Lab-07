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

/***/ "./src/script/story/lesson.js":
/*!************************************!*\
  !*** ./src/script/story/lesson.js ***!
  \************************************/
/***/ (() => {

eval("if (document.getElementById('lesson') != null) {\n  window.onload = function () {\n    createHeader();\n    createContent();\n    createFooter();\n  };\n  var createHeader = function createHeader() {\n    var nav = document.createElement(\"nav\");\n    nav.className = \"navbar navbar-expand-md navbar-light\";\n    console.log(nav);\n    document.body.appendChild(nav);\n    var div1 = document.createElement(\"div\");\n    div1.className = \"container-fluid mx-auto text-center\";\n    nav.appendChild(div1);\n    var div2 = document.createElement(\"div\");\n    div2.className = \"collapse navbar-collapse\";\n    div1.appendChild(div2);\n    var ul = document.createElement(\"ul\");\n    ul.className = \"navbar-nav mx-auto\";\n    div2.appendChild(ul);\n    var liIndex = document.createElement(\"li\");\n    liIndex.className = \"nav-item\";\n    ul.appendChild(liIndex);\n    var aIndex = document.createElement(\"a\");\n    aIndex.className = \"nav-link\";\n    aIndex.setAttribute('href', \"../nuevos-lanzamientos.html\");\n    aIndex.innerText = \"Volver al Inicio\";\n    liIndex.appendChild(aIndex);\n  };\n  var createContent = function createContent() {\n    var divContainer = document.createElement(\"div\");\n    console.log(divContainer);\n    divContainer.className = \"container\";\n    document.body.appendChild(divContainer);\n    var tableText = document.createElement(\"table\");\n    divContainer.appendChild(tableText);\n    var tr1 = document.createElement(\"tr\");\n    tableText.appendChild(tr1);\n    var th1 = document.createElement(\"th\");\n    tr1.appendChild(th1);\n    var h1 = document.createElement(\"h1\");\n    h1.innerText = \"Good stories had bad endings\";\n    th1.appendChild(h1);\n    var td = document.createElement(\"td\");\n    tableText.appendChild(td);\n    var img = document.createElement(\"img\");\n    img.setAttribute('src', \"https://i.pinimg.com/originals/73/69/6e/73696e022df7cd5cb3d999c6875361dd.gif\");\n    img.width = \"250\";\n    img.height = \"225\";\n    td.appendChild(img);\n    var br1 = document.createElement(\"br\");\n    divContainer.appendChild(br1);\n  };\n  var createFooter = function createFooter() {\n    var footer = document.createElement(\"footer\");\n    console.log(footer);\n    document.body.appendChild(footer);\n    var hr = document.createElement(\"hr\");\n    footer.appendChild(hr);\n    var progressBar = document.createElement(\"progress\");\n    progressBar.value = \"100\";\n    progressBar.max = \"100\";\n    footer.appendChild(progressBar);\n    var iPage = document.createElement(\"i\");\n    iPage.className = \"footerText\";\n    iPage.innerText = \"~ Fin ~\";\n    footer.appendChild(iPage);\n    var br = document.createElement(\"br\");\n    footer.appendChild(br);\n  };\n}\n\n//# sourceURL=webpack://lab-07/./src/script/story/lesson.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script/story/lesson.js"]();
/******/ 	
/******/ })()
;