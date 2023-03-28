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

/***/ "./src/style/styles.css":
/*!******************************!*\
  !*** ./src/style/styles.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab-07/./src/style/styles.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_inicio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/inicio.js */ \"./src/script/inicio.js\");\n/* harmony import */ var _script_inicio_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script_inicio_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _script_new_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/new.js */ \"./src/script/new.js\");\n/* harmony import */ var _script_new_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_script_new_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _script_popular_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/popular.js */ \"./src/script/popular.js\");\n/* harmony import */ var _script_popular_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_script_popular_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/styles.css */ \"./src/style/styles.css\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://lab-07/./src/index.js?");

/***/ }),

/***/ "./src/script/inicio.js":
/*!******************************!*\
  !*** ./src/script/inicio.js ***!
  \******************************/
/***/ (() => {

eval("if(document.getElementById('index') != null){\r\n    window.onload = () => {\r\n        createHeader();\r\n        createContent();\r\n        createFooter();\r\n    }\r\n    \r\n    function createHeader(){\r\n        let nav = document.createElement(\"nav\");\r\n        nav.className = \"navbar navbar-expand-md navbar-light\";\r\n        console.log(nav)\r\n        document.body.appendChild(nav);\r\n    \r\n        let div1 = document.createElement(\"div\");\r\n        div1.className = \"container-fluid mx-auto text-center\";\r\n        nav.appendChild(div1);\r\n    \r\n        let div2 = document.createElement(\"div\");\r\n        div2.className = \"collapse navbar-collapse\";\r\n        div1.appendChild(div2);\r\n    \r\n        let ul = document.createElement(\"ul\");\r\n        ul.className = \"navbar-nav mx-auto\";\r\n        div2.appendChild(ul);\r\n    \r\n        let liIndex = document.createElement(\"li\");\r\n        liIndex.className = \"nav-item\";\r\n        ul.appendChild(liIndex);\r\n        let aIndex = document.createElement(\"a\");\r\n        aIndex.className = \"nav-link\";\r\n        aIndex.setAttribute('href', \"index.html\");\r\n        aIndex.innerText = \"Inicio\";\r\n        liIndex.appendChild(aIndex);\r\n    \r\n        let liPopular = document.createElement(\"li\");\r\n        liPopular.className = \"nav-item\";\r\n        ul.appendChild(liPopular);\r\n        let aPopular = document.createElement(\"a\");\r\n        aPopular.className = \"nav-link\";\r\n        aPopular.setAttribute('href', \"libros-populares.html\");\r\n        aPopular.innerText = \"Libros Populares\";\r\n        liPopular.appendChild(aPopular);\r\n    \r\n        let liNew = document.createElement(\"li\");\r\n        liNew.className = \"nav-item\";\r\n        ul.appendChild(liNew);\r\n        let aNew = document.createElement(\"a\");\r\n        aNew.className = \"nav-link\";\r\n        aNew.setAttribute('href', \"nuevos-lanzamientos.html\");\r\n        aNew.innerText = \"Nuevos Lanzamientos\";\r\n        liNew.appendChild(aNew); \r\n       \r\n        let header = document.createElement(\"header\");\r\n        console.log(header)\r\n        document.body.appendChild(header);\r\n        let h1Title = document.createElement(\"h1\");\r\n        h1Title.innerText = \"¡Bienvenid@ a la Biblioteca de Fer!\"\r\n        header.appendChild(h1Title);\r\n    }\r\n    \r\n    function createContent(){\r\n        let imgCat = document.createElement(\"img\");\r\n        imgCat.className = \"catAnimation\"\r\n        imgCat.setAttribute('src', \"https://images.vexels.com/media/users/3/205195/isolated/preview/1c2ccc57f033c7b2612f1cce2b6eb7f2-bookshelf-sleeping-cat-illustration.png\");\r\n        imgCat.width = \"256\";\r\n        imgCat.height = \"256\";\r\n        document.body.appendChild(imgCat);\r\n    \r\n        let h2Subtitle = document.createElement(\"h2\");\r\n        //ㅤ --> espacio\r\n        h2Subtitle.innerText = \"ㅤ¿Que deseas ver hoy?\"\r\n        document.body.appendChild(h2Subtitle);\r\n    \r\n        let ulPages = document.createElement(\"ul\");\r\n        document.body.appendChild(ulPages);\r\n    \r\n        let liPopular = document.createElement(\"li\");\r\n        ulPages.appendChild(liPopular);\r\n        let aPopular = document.createElement(\"a\");\r\n        aPopular.innerText = \"Libros Populares\";\r\n        aPopular.setAttribute('href', \"libros-populares.html\");\r\n        liPopular.appendChild(aPopular);\r\n    \r\n        let liNew = document.createElement(\"li\");\r\n        ulPages.appendChild(liNew);\r\n        let aNew = document.createElement(\"a\");\r\n        aNew.innerText = \"Nuevos Lanzamientos\";\r\n        aNew.setAttribute('href', \"nuevos-lanzamientos.html\");\r\n        liNew.appendChild(aNew);\r\n    }\r\n    \r\n    function createFooter(){\r\n        let footer = document.createElement(\"footer\");\r\n        console.log(footer)\r\n        document.body.appendChild(footer);\r\n    \r\n        let hr = document.createElement(\"hr\");\r\n        footer.appendChild(hr);\r\n    \r\n        let progressBar = document.createElement(\"progress\");\r\n        progressBar.value = \"50\";\r\n        progressBar.max = \"100\";\r\n        footer.appendChild(progressBar);\r\n    \r\n        let iPage = document.createElement(\"i\");\r\n        iPage.className = \"footerText\";\r\n        iPage.innerText = \"~ Página 1 ~\"\r\n        footer.appendChild(iPage);\r\n        \r\n        let br = document.createElement(\"br\");\r\n        footer.appendChild(br);\r\n    }   \r\n}\n\n//# sourceURL=webpack://lab-07/./src/script/inicio.js?");

/***/ }),

/***/ "./src/script/new.js":
/*!***************************!*\
  !*** ./src/script/new.js ***!
  \***************************/
/***/ (() => {

eval("if(document.getElementById('nuevos') != null){\r\n    window.onload = () => {\r\n        createHeader();\r\n        createContent();\r\n        createFooter();\r\n    }\r\n    \r\n    function createHeader(){\r\n        let nav = document.createElement(\"nav\");\r\n        nav.className = \"navbar navbar-expand-md navbar-light\";\r\n        console.log(nav)\r\n        document.body.appendChild(nav);\r\n    \r\n        let div1 = document.createElement(\"div\");\r\n        div1.className = \"container-fluid mx-auto text-center\";\r\n        nav.appendChild(div1);\r\n    \r\n        let div2 = document.createElement(\"div\");\r\n        div2.className = \"collapse navbar-collapse\";\r\n        div1.appendChild(div2);\r\n    \r\n        let ul = document.createElement(\"ul\");\r\n        ul.className = \"navbar-nav mx-auto\";\r\n        div2.appendChild(ul);\r\n    \r\n        let liIndex = document.createElement(\"li\");\r\n        liIndex.className = \"nav-item\";\r\n        ul.appendChild(liIndex);\r\n        let aIndex = document.createElement(\"a\");\r\n        aIndex.className = \"nav-link\";\r\n        aIndex.setAttribute('href', \"index.html\");\r\n        aIndex.innerText = \"Inicio\";\r\n        liIndex.appendChild(aIndex);\r\n    \r\n        let liPopular = document.createElement(\"li\");\r\n        liPopular.className = \"nav-item\";\r\n        ul.appendChild(liPopular);\r\n        let aPopular = document.createElement(\"a\");\r\n        aPopular.className = \"nav-link\";\r\n        aPopular.setAttribute('href', \"libros-populares.html\");\r\n        aPopular.innerText = \"Libros Populares\";\r\n        liPopular.appendChild(aPopular);\r\n    \r\n        let liNew = document.createElement(\"li\");\r\n        liNew.className = \"nav-item\";\r\n        ul.appendChild(liNew);\r\n        let aNew = document.createElement(\"a\");\r\n        aNew.className = \"nav-link\";\r\n        aNew.setAttribute('href', \"nuevos-lanzamientos.html\");\r\n        aNew.innerText = \"Nuevos Lanzamientos\";\r\n        liNew.appendChild(aNew); \r\n    \r\n        let header = document.createElement(\"header\");\r\n        console.log(header)\r\n        document.body.appendChild(header);\r\n        let h1Title = document.createElement(\"h1\");\r\n        h1Title.innerText = \"Nuevos Lanzamientos\"\r\n        header.appendChild(h1Title);\r\n    \r\n        let hr = document.createElement(\"hr\");\r\n        header.appendChild(hr);\r\n    }\r\n    \r\n    function createContent(){\r\n        let h2Subtitle = document.createElement(\"h2\");\r\n        h2Subtitle.innerText = \"ㅤEstos son nuestros más recientes lanzamientos:\"\r\n        document.body.appendChild(h2Subtitle);\r\n    \r\n        let divContainer = document.createElement(\"div\");\r\n        console.log(divContainer);\r\n        divContainer.className = \"container\";\r\n        document.body.appendChild(divContainer);\r\n    \r\n        let tableBooks = document.createElement(\"table\");\r\n        tableBooks.cellPadding = \"10\";\r\n        divContainer.appendChild(tableBooks);\r\n    \r\n        let td1 = document.createElement(\"td\");\r\n        tableBooks.appendChild(td1);\r\n    \r\n        let a2 = document.createElement(\"a\");\r\n        a2.setAttribute('href', \"/src/story/pick-a-pill.html\");\r\n        td1.appendChild(a2);\r\n        let img1 = document.createElement(\"img\");\r\n        img1.setAttribute('src', \"https://bookcart.azurewebsites.net/Upload/Default_image.jpg\");\r\n        img1.width = \"140\";\r\n        img1.height = \"211\";\r\n        a2.appendChild(img1);\r\n        let b1 = document.createElement(\"b\");\r\n        td1.appendChild(b1);\r\n        let a1 = document.createElement(\"a\");\r\n        a1.innerText = \"ʞooᙠ ɓuıssıW ǝɥ⊥\";\r\n        a1.setAttribute('href', \"/src/story/pick-a-pill.html\");\r\n        b1.appendChild(a1);\r\n        let i1 = document.createElement(\"i\");\r\n        i1.innerText = \"F̸̝̠̎û̸̪͈̠͌̂̚m̵̩̳̈ḯ̴̧̤̻͚͂͐k̴̯̱͓̅̉̚̕ở̸͙̹̮̓͂̿ ̸̛̟̱̙̰̟̆͗̈́K̵̢̙̜̜͊͂̋̃͘i̴̧̮͇̾̒m̶͔̩̰͚̾͊͒͗ų̷̺̉r̶̖̝͎̾̔͛͝a̶̡͍͙̾ \";\r\n        td1.appendChild(i1);\r\n    \r\n        let td2 = document.createElement(\"td\");\r\n        tableBooks.appendChild(td2);\r\n        let img2 = document.createElement(\"img\");\r\n        img2.setAttribute('src', \"https://m.media-amazon.com/images/I/31cMyZVk5vL._AC_SY400_.jpg\");\r\n        img2.width = \"140\";\r\n        img2.height = \"211\";\r\n        td2.appendChild(img2);\r\n        let b2 = document.createElement(\"b\");\r\n        b2.innerText = \"Japanese Gothic Tales\";\r\n        td2.appendChild(b2);\r\n        let i2 = document.createElement(\"i\");\r\n        i2.innerText = \"Kyōka Izumi\";\r\n        td2.appendChild(i2);\r\n    \r\n        let td3 = document.createElement(\"td\");\r\n        tableBooks.appendChild(td3);\r\n        let img3 = document.createElement(\"img\");\r\n        img3.setAttribute('src', \"https://m.media-amazon.com/images/I/51CeZrpS61L._AC_SY1000_.jpg\");\r\n        img3.width = \"140\";\r\n        img3.height = \"211\";\r\n        td3.appendChild(img3);\r\n        let b3 = document.createElement(\"b\");\r\n        b3.innerText = \"I Am a Cat\";\r\n        td3.appendChild(b3);\r\n        let i3 = document.createElement(\"i\");\r\n        i3.innerText = \"Natsume Sōseki\";\r\n        td3.appendChild(i3);\r\n    \r\n        let td4 = document.createElement(\"td\");\r\n        tableBooks.appendChild(td4);\r\n        let img4 = document.createElement(\"img\");\r\n        img4.setAttribute('src', \"https://m.media-amazon.com/images/I/51EENZHH8JL._AC_SY400_.jpg\");\r\n        img4.width = \"140\";\r\n        img4.height = \"211\";\r\n        td4.appendChild(img4);\r\n        let b4 = document.createElement(\"b\");\r\n        b4.innerText = \"Night of the Milky Way Railway\";\r\n        td4.appendChild(b4);\r\n        let i4 = document.createElement(\"i\");\r\n        i4.innerText = \"Kenji Miyazawa\";\r\n        td4.appendChild(i4);\r\n    \r\n    }\r\n    \r\n    function createFooter(){\r\n        let footer = document.createElement(\"footer\");\r\n        console.log(footer)\r\n        document.body.appendChild(footer);\r\n    \r\n        let hr = document.createElement(\"hr\");\r\n        footer.appendChild(hr);\r\n    \r\n        let progressBar = document.createElement(\"progress\");\r\n        progressBar.value = \"100\";\r\n        progressBar.max = \"100\";\r\n        footer.appendChild(progressBar);\r\n    \r\n        let iPage = document.createElement(\"i\");\r\n        iPage.className = \"footerText\";\r\n        iPage.innerText = \"~ Página 2 ~\"\r\n        footer.appendChild(iPage);\r\n        \r\n        let br = document.createElement(\"br\");\r\n        footer.appendChild(br);\r\n    }\r\n}\n\n//# sourceURL=webpack://lab-07/./src/script/new.js?");

/***/ }),

/***/ "./src/script/popular.js":
/*!*******************************!*\
  !*** ./src/script/popular.js ***!
  \*******************************/
/***/ (() => {

eval("if(document.getElementById('populares') != null){\r\n    window.onload = () => {\r\n        createHeader();\r\n        createContent();\r\n        createFooter();\r\n    }\r\n    \r\n    function createHeader(){\r\n        let nav = document.createElement(\"nav\");\r\n        nav.className = \"navbar navbar-expand-md navbar-light\";\r\n        console.log(nav)\r\n        document.body.appendChild(nav);\r\n    \r\n        let div1 = document.createElement(\"div\");\r\n        div1.className = \"container-fluid mx-auto text-center\";\r\n        nav.appendChild(div1);\r\n    \r\n        let div2 = document.createElement(\"div\");\r\n        div2.className = \"collapse navbar-collapse\";\r\n        div1.appendChild(div2);\r\n    \r\n        let ul = document.createElement(\"ul\");\r\n        ul.className = \"navbar-nav mx-auto\";\r\n        div2.appendChild(ul);\r\n    \r\n        let liIndex = document.createElement(\"li\");\r\n        liIndex.className = \"nav-item\";\r\n        ul.appendChild(liIndex);\r\n        let aIndex = document.createElement(\"a\");\r\n        aIndex.className = \"nav-link\";\r\n        aIndex.setAttribute('href', \"index.html\");\r\n        aIndex.innerText = \"Inicio\";\r\n        liIndex.appendChild(aIndex);\r\n    \r\n        let liPopular = document.createElement(\"li\");\r\n        liPopular.className = \"nav-item\";\r\n        ul.appendChild(liPopular);\r\n        let aPopular = document.createElement(\"a\");\r\n        aPopular.className = \"nav-link\";\r\n        aPopular.setAttribute('href', \"libros-populares.html\");\r\n        aPopular.innerText = \"Libros Populares\";\r\n        liPopular.appendChild(aPopular);\r\n    \r\n        let liNew = document.createElement(\"li\");\r\n        liNew.className = \"nav-item\";\r\n        ul.appendChild(liNew);\r\n        let aNew = document.createElement(\"a\");\r\n        aNew.className = \"nav-link\";\r\n        aNew.setAttribute('href', \"nuevos-lanzamientos.html\");\r\n        aNew.innerText = \"Nuevos Lanzamientos\";\r\n        liNew.appendChild(aNew); \r\n    \r\n        let header = document.createElement(\"header\");\r\n        console.log(header)\r\n        document.body.appendChild(header);\r\n        let h1Title = document.createElement(\"h1\");\r\n        h1Title.innerText = \"Libros populares\"\r\n        header.appendChild(h1Title);\r\n    \r\n        let hr = document.createElement(\"hr\");\r\n        header.appendChild(hr);\r\n    }\r\n    \r\n    function createContent(){\r\n        let h2Subtitle = document.createElement(\"h2\");\r\n        h2Subtitle.innerText = \"ㅤEstos son nuestros lanzamientos más populares:\"\r\n        document.body.appendChild(h2Subtitle);\r\n    \r\n        let divContainer = document.createElement(\"div\");\r\n        console.log(divContainer);\r\n        divContainer.className = \"container\";\r\n        document.body.appendChild(divContainer);\r\n    \r\n        let tableBooks = document.createElement(\"table\");\r\n        tableBooks.cellPadding = \"10\";\r\n        divContainer.appendChild(tableBooks);\r\n    \r\n        let td1 = document.createElement(\"td\");\r\n        tableBooks.appendChild(td1);\r\n        let img1 = document.createElement(\"img\");\r\n        img1.setAttribute('src', \"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328774498i/9811918.jpg\");\r\n        img1.width = \"140\";\r\n        img1.height = \"211\";\r\n        td1.appendChild(img1);\r\n        let b1 = document.createElement(\"b\");\r\n        b1.innerText = \"The Moon Over The Mountain\";\r\n        td1.appendChild(b1);\r\n        let i1 = document.createElement(\"i\");\r\n        i1.innerText = \"Atsushi Nakajima\";\r\n        td1.appendChild(i1);\r\n    \r\n        let td2 = document.createElement(\"td\");\r\n        tableBooks.appendChild(td2);\r\n        let img2 = document.createElement(\"img\");\r\n        img2.setAttribute('src', \"https://tienda.sophosenlinea.com/imagenes/9780811/978081120481.GIF\");\r\n        img2.width = \"140\";\r\n        img2.height = \"211\";\r\n        td2.appendChild(img2);\r\n        let b2 = document.createElement(\"b\");\r\n        b2.innerText = \"No Longer Human\";\r\n        td2.appendChild(b2);\r\n        let i2 = document.createElement(\"i\");\r\n        i2.innerText = \"Dazai Osamu\";\r\n        td2.appendChild(i2);\r\n    \r\n        let td3 = document.createElement(\"td\");\r\n        tableBooks.appendChild(td3);\r\n        let img3 = document.createElement(\"img\");\r\n        img3.setAttribute('src', \"https://cdn2.wwnorton.com/wwnproducts/LIVERT/1/3/9780871401731/9780871401731_300.jpeg\");\r\n        img3.width = \"140\";\r\n        img3.height = \"211\";\r\n        td3.appendChild(img3);\r\n        let b3 = document.createElement(\"b\");\r\n        b3.innerText = \"Rashōmon and Other Stories\";\r\n        td3.appendChild(b3);\r\n        let i3 = document.createElement(\"i\");\r\n        i3.innerText = \"Ryūnosuke Akutagawa\";\r\n        td3.appendChild(i3);\r\n    \r\n        let td4 = document.createElement(\"td\");\r\n        tableBooks.appendChild(td4);\r\n        let img4 = document.createElement(\"img\");\r\n        img4.setAttribute('src', \"https://m.media-amazon.com/images/I/512hJqrk5fL.jpg\");\r\n        img4.width = \"140\";\r\n        img4.height = \"211\";\r\n        td4.appendChild(img4);\r\n        let b4 = document.createElement(\"b\");\r\n        b4.innerText = \"The Poems of Nakahara Chuya\";\r\n        td4.appendChild(b4);\r\n        let i4 = document.createElement(\"i\");\r\n        i4.innerText = \"Chūya Nakahara\";\r\n        td4.appendChild(i4);\r\n    \r\n    }\r\n    \r\n    function createFooter(){\r\n        let footer = document.createElement(\"footer\");\r\n        console.log(footer)\r\n        document.body.appendChild(footer);\r\n    \r\n        let hr = document.createElement(\"hr\");\r\n        footer.appendChild(hr);\r\n    \r\n        let progressBar = document.createElement(\"progress\");\r\n        progressBar.value = \"100\";\r\n        progressBar.max = \"100\";\r\n        footer.appendChild(progressBar);\r\n    \r\n        let iPage = document.createElement(\"i\");\r\n        iPage.className = \"footerText\";\r\n        iPage.innerText = \"~ Página 2 ~\"\r\n        footer.appendChild(iPage);\r\n        \r\n        let br = document.createElement(\"br\");\r\n        footer.appendChild(br);\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://lab-07/./src/script/popular.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;