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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n    constructor(elements) {\n        this.elements = document.querySelectorAll(elements);\n        this.activeClass = 'ativo'\n    }\n    \n    // adiciona a classe ativo nos elementos\n    show(element) {\n        element.classList.toggle(this.activeClass);\n        element.nextElementSibling.classList.toggle(this.activeClass);\n        \n        // Acessibilidade\n        const ariaControl = element.getAttribute('aria-controls');\n        const resposta = document.getElementById(ariaControl);\n        if (resposta.classList.contains('ativo')) {\n            element.setAttribute('aria-expanded', true);\n        }   else {\n            element.setAttribute('aria-expanded', false);\n        }\n    }\n\n    // Inicia a classe e adiciona o evento de clique nos elementos\n    init() {\n        // verifica se há elementos\n        if (this.elements.length) {\n            this.show(this.elements[0]) // deixa a primeira resposta ativa\n            this.elements.forEach((element) => {\n                element.addEventListener('click', () => this.show(element))\n            });\n        };\n        return this;\n    }\n}\n\n\n//# sourceURL=webpack://animais/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/animais-fetch.js":
/*!*************************************!*\
  !*** ./js/modules/animais-fetch.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaisFetch)\n/* harmony export */ });\n/* harmony import */ var _anime_number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anime-number.js */ \"./js/modules/anime-number.js\");\n\n\nfunction initAnimaisFetch() {\n    const gridNumeros = document.querySelector('.grid-numeros');\n\n    async function animaisFetch(){\n        try {\n            const animaisJSON = await ( await fetch('../../animaisapi.json') ).json();\n            animaisJSON.forEach(animal => {\n                createAnimal(animal);\n            });\n            (0,_anime_number_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        } catch(erro) {\n            console.log(erro);\n        }\n    }\n    function createAnimal(animal) {\n        const newAnimal = document.createElement('li');\n        newAnimal.classList.add('card-animal');\n        newAnimal.innerHTML = `<h3>${animal.especie}</h3><span data-anime=\"numeros\">${animal.total}</span>`;\n        gridNumeros.appendChild(newAnimal);\n        return newAnimal;\n    }\n    animaisFetch();\n}\n\n\n//# sourceURL=webpack://animais/./js/modules/animais-fetch.js?");

/***/ }),

/***/ "./js/modules/anime-number.js":
/*!************************************!*\
  !*** ./js/modules/anime-number.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumber)\n/* harmony export */ });\nfunction initAnimaNumber() {\n    const numeros = document.querySelectorAll('[data-anime=\"numeros\"]');\n    const containerNumeros = document.getElementById('numeros');\n    \n    const observer = new MutationObserver(handleAnimaNumber);\n    observer.observe(containerNumeros, {attributes: true});\n\n    function handleAnimaNumber(mutation) {\n        if (mutation[0].target.classList.contains('ativo')) {\n            observer.disconnect;\n            animaNumber()\n        }\n    }\n\n    function animaNumber() {\n        numeros.forEach(numero => {\n            const total = +numero.innerText;\n            const incrementador = total / 70\n            let start = 0\n            const contador = setInterval(() => {\n                start = Math.floor(start + incrementador);\n                numero.innerText = start;\n                if (start > total) {\n                    numero.innerHTML = total;\n                    clearInterval(contador)\n                }\n            }, 20 * Math.random())\n        })\n    }\n}\n\n//# sourceURL=webpack://animais/./js/modules/anime-number.js?");

/***/ }),

/***/ "./js/modules/bitcoin-fetch.js":
/*!*************************************!*\
  !*** ./js/modules/bitcoin-fetch.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initBitcoinFetch)\n/* harmony export */ });\nfunction initBitcoinFetch() {\n    const bitcoinDisplay = document.querySelector('[data-bitcoin=\"value\"]')\n\n    async function bitcoinFetch() {\n        try {\n            const bitcoinValueJSON = await (await fetch('https://blockchain.info/ticker')).json();\n            const bitcoinValue = 100 / bitcoinValueJSON.BRL.buy\n            bitcoinDisplay.innerText = bitcoinValue.toFixed(6)\n        } catch(erro) {\n            console.log(erro)\n        }\n    }\n    \n    bitcoinFetch()\n}\n\n//# sourceURL=webpack://animais/./js/modules/bitcoin-fetch.js?");

/***/ }),

/***/ "./js/modules/clickout.js":
/*!********************************!*\
  !*** ./js/modules/clickout.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickOut)\n/* harmony export */ });\nfunction clickOut(element, callback) {\n    const html = document.documentElement;\n    \n    if (!element.hasAttribute('data-outside')) {\n        element.setAttribute('data-outside', '')\n        html.addEventListener('click', handleClickOut, event.stopPropagation())\n    }\n    \n    function handleClickOut(event) {\n        if (!element.contains(event.target)) {\n            element.removeAttribute('data-outside');\n            html.removeEventListener('click', handleClickOut, event.stopPropagation());\n            callback()\n        }\n    }\n}\n\n//# sourceURL=webpack://animais/./js/modules/clickout.js?");

/***/ }),

/***/ "./js/modules/dropdown.js":
/*!********************************!*\
  !*** ./js/modules/dropdown.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdown)\n/* harmony export */ });\n/* harmony import */ var _clickout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickout.js */ \"./js/modules/clickout.js\");\n\n\nfunction initDropdown() {\n    const dataDropdown = document.querySelectorAll('[data-dropdown]');\n    \n    dataDropdown.forEach(element => {\n        element.addEventListener('click', addActiveClick)\n    })\n    \n        \n    function addActiveClick(event) {\n        event.preventDefault(); // lembrar de remover essa linha quando adicionar links as páginas\n        event.stopPropagation();\n        this.classList.add('menu-active');\n        (0,_clickout_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, () => {\n            this.classList.remove('menu-active');\n        })\n    }\n}\n\n//# sourceURL=webpack://animais/./js/modules/dropdown.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n    const funcionamento = document.querySelector('[data-dias]');\n    const horario = document.querySelector('[data-horas]')\n    const diasSemana = funcionamento.dataset.dias.split(',').map(Number)\n    const horasDia = horario.dataset.horas.split(',').map(Number)\n    const presenteDia = new Date()\n\n    function checkDia(dia, hora) {\n        if (diasSemana.includes(dia) && horasDia[0] <= hora && horasDia[1] > hora) {\n            funcionamento.classList.add('aberto')\n        } else {\n            funcionamento.classList.remove('aberto')\n        }\n    }\n    checkDia(presenteDia.getDay(), presenteDia.getHours())\n}\n\n//# sourceURL=webpack://animais/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _clickout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickout.js */ \"./js/modules/clickout.js\");\n\n\nfunction initMenuMobile() {\n    const btnMenu = document.querySelector('[data-menu=\"button\"]');\n    const menu = document.querySelector('[data-menu=\"items\"]');\n    \n    btnMenu.addEventListener('click', addMobile);\n    \n    function addMobile() {\n        menu.classList.add('active')\n        btnMenu.classList.add('active')\n        ;(0,_clickout_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, () => {\n            this.classList.remove('active')\n        })\n        ;(0,_clickout_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menu, () => {\n            menu.classList.remove('active')\n        })\n    }\n}\n\n//# sourceURL=webpack://animais/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n    constructor(btnOpenModal, btnCloseModal, container) {\n        this.btnOpenModal = document.querySelector(btnOpenModal);\n        this.btnCloseModal = document.querySelector(btnCloseModal);\n        this.container = document.querySelector(container);\n\n        // fazendo o bind do callback this.btnOpenModal e this.btnCloseModal para fazer referência ao this Modal (class)\n        this.eventToggleModal = this.eventToggleModal.bind(this);\n        this.closeClickModal = this.closeClickModal.bind(this);\n        this.closeKeyModal = this.closeKeyModal.bind(this);\n    }\n    // adiciona e remove a classe ativo do Modal\n    toggleModal() {\n        this.container.classList.toggle( 'ativo' );\n    }\n\n    eventToggleModal( event ) {\n        event.preventDefault();\n        this.toggleModal();\n    }\n\n    // adiciona os eventos aos elementos\n    addModalEvents() {\n        this.btnOpenModal.addEventListener( 'click', this.eventToggleModal ); // o this no callback faz referência a propriedade this.btnOpenModal, precisa fazer o bind para o this Modal\n        this.btnCloseModal.addEventListener( 'click', this.eventToggleModal ); // se não fizer o bind a função será chamada this.propriedade.eventToggleModal(), o que dá erro\n        this.container.addEventListener( 'click', this.closeClickModal );\n        window.addEventListener('keydown', this.closeKeyModal );\n    }\n    \n    // fecha o modal se for clicado no container\n    closeClickModal( event ) {\n        if ( this.container === event.target ) {\n            this.toggleModal();\n        };\n    }\n\n    // fecha o modal se a tecla ESC for pressionada\n    closeKeyModal( event ) {\n        const modalActive = this.container.classList.contains( 'ativo' )\n        if ( modalActive && event.key === 'Escape' ) {\n            this.toggleModal();\n        };\n    }\n    \n    // verifica se as propriedades existem e inicia a classe\n    init() {\n        if ( this.btnOpenModal && this.btnCloseModal && this.container ) {\n            this.addModalEvents();\n        };\n        return this;\n    }\n}\n\n\n//# sourceURL=webpack://animais/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/scroll-reveal.js":
/*!*************************************!*\
  !*** ./js/modules/scroll-reveal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollReveal)\n/* harmony export */ });\nfunction initScrollReveal() {\n    const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\n\n    function ativaScroll() {\n        sections.forEach(section => {\n            const sectionTop = section.getBoundingClientRect().top;\n            const windowHeight = window.innerHeight * 0.5;\n            const eVisivel = (sectionTop - windowHeight) < 0;\n            if (eVisivel && !section.classList.contains('ativo')) {\n                section.classList.add('ativo');\n            }\n        })\n    }\n\n    ativaScroll()\n    window.addEventListener('scroll', ativaScroll)\n}\n\n//# sourceURL=webpack://animais/./js/modules/scroll-reveal.js?");

/***/ }),

/***/ "./js/modules/tab-nav.js":
/*!*******************************!*\
  !*** ./js/modules/tab-nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\n    constructor(menu, content) {\n        this.tabMenu = document.querySelectorAll(menu)\n        this.tabContent = document.querySelectorAll(content)\n    }\n    \n    // Ativa a tab de acordo com o index do mesmo valor\n    activeTab(index) {\n        const direcao = this.tabContent[index].dataset.anima;\n        this.tabContent.forEach(content => {\n            content.classList.remove('ativo', direcao);\n        });\n        this.tabContent[index].classList.add('ativo', direcao);\n        \n    }\n    \n    // Verifica se os elementos existem e adiciona os eventos nas tabs\n    init() {\n        if (this.tabMenu.length && this.tabContent.length) {\n            this.activeTab(0);\n            this.tabMenu.forEach((item, index) => {\n                item.addEventListener('click', () => this.activeTab(index));\n            });\n        };\n        return this;\n    }\n}\n\n\n//# sourceURL=webpack://animais/./js/modules/tab-nav.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./js/modules/tab-nav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_scroll_reveal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scroll-reveal.js */ \"./js/modules/scroll-reveal.js\");\n/* harmony import */ var _modules_dropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropdown.js */ \"./js/modules/dropdown.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_animais_fetch_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/animais-fetch.js */ \"./js/modules/animais-fetch.js\");\n/* harmony import */ var _modules_bitcoin_fetch_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/bitcoin-fetch.js */ \"./js/modules/bitcoin-fetch.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-anime=\"accordion\"] dt')\r\naccordion.init();\r\n\r\nconst tabNav = new _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] div')\r\ntabNav.init();\r\n\r\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-modal=\"btn-entrar\"]', '[data-modal=\"btn-close\"]', '[data-modal=\"container\"]')\r\nmodal.init();\r\n\r\n(0,_modules_scroll_reveal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_dropdown_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_animais_fetch_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_bitcoin_fetch_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n\n\n//# sourceURL=webpack://animais/./js/script.js?");

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