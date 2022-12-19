/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\r\n    const perguntas = document.querySelectorAll('[data-anime=\"accordion\"] dt');\r\n    const classeAtivo = 'ativo';\r\n    \r\n    if (perguntas.length) {\r\n        perguntas[0].classList.add(classeAtivo);\r\n        perguntas[0].nextElementSibling.classList.add(classeAtivo);\r\n        function mostrarResposta() {\r\n            this.classList.toggle(classeAtivo);\r\n            this.nextElementSibling.classList.toggle(classeAtivo); // this equivale ao elemento pergunta\r\n            \r\n            // Acessibilidade\r\n            const ariaControl = this.getAttribute('aria-controls');\r\n            const resposta = document.getElementById(ariaControl);\r\n            if (resposta.classList.contains('ativo')) {\r\n                this.setAttribute('aria-expanded', true)\r\n            }   else {\r\n                this.setAttribute('aria-expanded', false)\r\n            }\r\n       }\r\n\r\n        perguntas.forEach((pergunta) => {\r\n            pergunta.addEventListener('click', mostrarResposta)\r\n        });\r\n    }\r\n}\r\n\r\nconsole.log('oi')\n\n//# sourceURL=webpack://animais/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/animais-fetch.js":
/*!*************************************!*\
  !*** ./js/modules/animais-fetch.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaisFetch)\n/* harmony export */ });\n/* harmony import */ var _anime_number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anime-number.js */ \"./js/modules/anime-number.js\");\n\r\n\r\nfunction initAnimaisFetch() {\r\n    const gridNumeros = document.querySelector('.grid-numeros');\r\n\r\n    async function animaisFetch(){\r\n        try {\r\n            const animaisJSON = await ( await fetch('../../animaisapi.json') ).json();\r\n            animaisJSON.forEach(animal => {\r\n                createAnimal(animal);\r\n            });\r\n            (0,_anime_number_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n        } catch(erro) {\r\n            console.log(erro);\r\n        }\r\n    }\r\n    function createAnimal(animal) {\r\n        const newAnimal = document.createElement('li');\r\n        newAnimal.classList.add('card-animal');\r\n        newAnimal.innerHTML = `<h3>${animal.especie}</h3><span data-anime=\"numeros\">${animal.total}</span>`;\r\n        gridNumeros.appendChild(newAnimal);\r\n        return newAnimal;\r\n    }\r\n    animaisFetch();\r\n}\r\n\n\n//# sourceURL=webpack://animais/./js/modules/animais-fetch.js?");

/***/ }),

/***/ "./js/modules/anime-number.js":
/*!************************************!*\
  !*** ./js/modules/anime-number.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumber)\n/* harmony export */ });\nfunction initAnimaNumber() {\r\n    const numeros = document.querySelectorAll('[data-anime=\"numeros\"]');\r\n    const containerNumeros = document.getElementById('numeros');\r\n    \r\n    const observer = new MutationObserver(handleAnimaNumber);\r\n    observer.observe(containerNumeros, {attributes: true});\r\n\r\n    function handleAnimaNumber(mutation) {\r\n        if (mutation[0].target.classList.contains('ativo')) {\r\n            observer.disconnect;\r\n            animaNumber()\r\n        }\r\n    }\r\n\r\n    function animaNumber() {\r\n        numeros.forEach(numero => {\r\n            const total = +numero.innerText;\r\n            const incrementador = total / 70\r\n            let start = 0\r\n            const contador = setInterval(() => {\r\n                start = Math.floor(start + incrementador);\r\n                numero.innerText = start;\r\n                if (start > total) {\r\n                    numero.innerHTML = total;\r\n                    clearInterval(contador)\r\n                }\r\n            }, 20 * Math.random())\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://animais/./js/modules/anime-number.js?");

/***/ }),

/***/ "./js/modules/bitcoin-fetch.js":
/*!*************************************!*\
  !*** ./js/modules/bitcoin-fetch.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initBitcoinFetch)\n/* harmony export */ });\nfunction initBitcoinFetch() {\r\n    const bitcoinDisplay = document.querySelector('[data-bitcoin=\"value\"]')\r\n\r\n    async function bitcoinFetch() {\r\n        try {\r\n            const bitcoinValueJSON = await (await fetch('https://blockchain.info/ticker')).json();\r\n            const bitcoinValue = 100 / bitcoinValueJSON.BRL.buy\r\n            bitcoinDisplay.innerText = bitcoinValue.toFixed(6)\r\n        } catch(erro) {\r\n            console.log(erro)\r\n        }\r\n    }\r\n    \r\n    bitcoinFetch()\r\n}\n\n//# sourceURL=webpack://animais/./js/modules/bitcoin-fetch.js?");

/***/ }),

/***/ "./js/modules/clickout.js":
/*!********************************!*\
  !*** ./js/modules/clickout.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickOut)\n/* harmony export */ });\nfunction clickOut(element, callback) {\r\n    const html = document.documentElement;\r\n    \r\n    if (!element.hasAttribute('data-outside')) {\r\n        element.setAttribute('data-outside', '')\r\n        html.addEventListener('click', handleClickOut, event.stopPropagation())\r\n    }\r\n    \r\n    function handleClickOut(event) {\r\n        if (!element.contains(event.target)) {\r\n            element.removeAttribute('data-outside');\r\n            html.removeEventListener('click', handleClickOut, event.stopPropagation());\r\n            callback()\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://animais/./js/modules/clickout.js?");

/***/ }),

/***/ "./js/modules/dropdown.js":
/*!********************************!*\
  !*** ./js/modules/dropdown.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdown)\n/* harmony export */ });\n/* harmony import */ var _clickout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickout.js */ \"./js/modules/clickout.js\");\n\r\n\r\nfunction initDropdown() {\r\n    const dataDropdown = document.querySelectorAll('[data-dropdown]');\r\n    \r\n    dataDropdown.forEach(element => {\r\n        element.addEventListener('click', addActiveClick)\r\n    })\r\n    \r\n        \r\n    function addActiveClick(event) {\r\n        event.preventDefault(); // lembrar de remover essa linha quando adicionar links as páginas\r\n        event.stopPropagation();\r\n        this.classList.add('menu-active');\r\n        (0,_clickout_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, () => {\r\n            this.classList.remove('menu-active');\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://animais/./js/modules/dropdown.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\r\n    const funcionamento = document.querySelector('[data-dias]');\r\n    const horario = document.querySelector('[data-horas]')\r\n    const diasSemana = funcionamento.dataset.dias.split(',').map(Number)\r\n    const horasDia = horario.dataset.horas.split(',').map(Number)\r\n    const presenteDia = new Date()\r\n\r\n    function checkDia(dia, hora) {\r\n        if (diasSemana.includes(dia) && horasDia[0] <= hora && horasDia[1] > hora) {\r\n            funcionamento.classList.add('aberto')\r\n        } else {\r\n            funcionamento.classList.remove('aberto')\r\n        }\r\n    }\r\n    checkDia(presenteDia.getDay(), presenteDia.getHours())\r\n}\n\n//# sourceURL=webpack://animais/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _clickout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickout.js */ \"./js/modules/clickout.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n    const btnMenu = document.querySelector('[data-menu=\"button\"]');\r\n    const menu = document.querySelector('[data-menu=\"items\"]');\r\n    \r\n    btnMenu.addEventListener('click', addMobile);\r\n    \r\n    function addMobile() {\r\n        menu.classList.add('active')\r\n        btnMenu.classList.add('active')\r\n        ;(0,_clickout_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, () => {\r\n            this.classList.remove('active')\r\n        })\r\n        ;(0,_clickout_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menu, () => {\r\n            menu.classList.remove('active')\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://animais/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\r\n    const btnEntrar = document.querySelector('[data-modal=\"btn-entrar\"]');\r\n    const btnClose = document.querySelector('[data-modal=\"btn-close\"]')\r\n    const containerModal = document.querySelector('[data-modal=\"container\"')\r\n    \r\n    function toggleModal() {\r\n        containerModal.classList.toggle('ativo');\r\n    }\r\n\r\n    function closeClickModal(event) {\r\n        if(this === event.target) {\r\n            toggleModal()\r\n        }\r\n    }\r\n\r\n    function closeKeyModal(event) {\r\n        const modalActive = containerModal.classList.contains('ativo')\r\n        if(modalActive && event.key === 'Escape') {\r\n            toggleModal()\r\n        }\r\n    }\r\n    \r\n    btnEntrar.addEventListener('click', toggleModal)\r\n    btnClose.addEventListener('click', toggleModal)\r\n    containerModal.addEventListener('click', closeClickModal)\r\n    window.addEventListener('keydown', closeKeyModal)\r\n}\n\n//# sourceURL=webpack://animais/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/scroll-reveal.js":
/*!*************************************!*\
  !*** ./js/modules/scroll-reveal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollReveal)\n/* harmony export */ });\nfunction initScrollReveal() {\r\n    const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\r\n\r\n    function ativaScroll() {\r\n        sections.forEach(section => {\r\n            const sectionTop = section.getBoundingClientRect().top;\r\n            const windowHeight = window.innerHeight * 0.5;\r\n            const eVisivel = (sectionTop - windowHeight) < 0;\r\n            if (eVisivel && !section.classList.contains('ativo')) {\r\n                section.classList.add('ativo');\r\n            }\r\n        })\r\n    }\r\n\r\n    ativaScroll()\r\n    window.addEventListener('scroll', ativaScroll)\r\n}\n\n//# sourceURL=webpack://animais/./js/modules/scroll-reveal.js?");

/***/ }),

/***/ "./js/modules/tab-nav.js":
/*!*******************************!*\
  !*** ./js/modules/tab-nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\r\n    const tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\r\n    const tabContent = document.querySelectorAll('[data-tab=\"content\"] div');\r\n\r\n    if (tabMenu && tabContent) {\r\n        ativaTab(0);\r\n\r\n        function ativaTab(index) {\r\n            const direcao = tabContent[index].dataset.anima;\r\n            tabContent.forEach(content => {\r\n                content.classList.remove('ativo', direcao);\r\n            });\r\n            tabContent[index].classList.add('ativo', direcao);\r\n        }\r\n\r\n        tabMenu.forEach((imagem, index) => {\r\n            imagem.addEventListener('click', () => {\r\n                return ativaTab(index);\r\n            });\r\n\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://animais/./js/modules/tab-nav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\r\n    const tooltips = document.querySelectorAll('[data-tooltip]');\r\n    \r\n    tooltips.forEach(tooltip => {\r\n        tooltip.addEventListener('mouseover', onMouseOver)\r\n    })\r\n    \r\n    function onMouseOver() {\r\n        const tooltipBox = createTooltipBox(this);\r\n        \r\n        onMouseLeave.tooltipBox = tooltipBox;\r\n        onMouseLeave.element = this;\r\n        this.addEventListener('mouseleave', onMouseLeave);\r\n        \r\n        onMouseMove.tooltipBox = tooltipBox;\r\n        onMouseMove.element = this;\r\n        this.addEventListener('mousemove', onMouseMove);\r\n    }\r\n\r\n    const onMouseLeave = {\r\n        tooltipBox: '',\r\n        element: '',\r\n        handleEvent() {\r\n            this.tooltipBox.remove();\r\n            this.element.removeEventListener('mouseleave', onMouseLeave)\r\n            this.element.removeEventListener('mousemove', onMouseMove)\r\n        }\r\n    }\r\n\r\n    const onMouseMove = {\r\n        tooltipBox: '',\r\n        element: '',\r\n        handleEvent(event) {\r\n            this.tooltipBox.style.top = event.pageY + 20 +'px';\r\n            this.tooltipBox.style.left = event.pageX + 20 + 'px';\r\n        }\r\n    }\r\n\r\n    function createTooltipBox(element) {\r\n        const tooltipBox = document.createElement('div');\r\n        const text = element.getAttribute('aria-label');\r\n        tooltipBox.classList.add('tooltip');\r\n        tooltipBox.innerHTML = text;\r\n        document.body.appendChild(tooltipBox)\r\n        return tooltipBox\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://animais/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./js/modules/tab-nav.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_scroll_reveal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll-reveal.js */ \"./js/modules/scroll-reveal.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropdown.js */ \"./js/modules/dropdown.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_animais_fetch_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/animais-fetch.js */ \"./js/modules/animais-fetch.js\");\n/* harmony import */ var _modules_bitcoin_fetch_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/bitcoin-fetch.js */ \"./js/modules/bitcoin-fetch.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_scroll_reveal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_dropdown_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_animais_fetch_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_bitcoin_fetch_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n\n\n//# sourceURL=webpack://animais/./js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;