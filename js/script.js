import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initScrollReveal from "./modules/scroll-reveal.js";
import initDropdown from "./modules/dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initAnimaisFetch from "./modules/animais-fetch.js";
import initBitcoinFetch from "./modules/bitcoin-fetch.js";

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] div')
tabNav.init();

const modal = new Modal('[data-modal="btn-entrar"]', '[data-modal="btn-close"]', '[data-modal="container"]')
modal.init();

const tooltip = new Tooltip('[data-tooltip]')
tooltip.init();

initScrollReveal();
initDropdown();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();
initBitcoinFetch();
