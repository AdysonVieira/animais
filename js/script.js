import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-nav.js";
import initScrollReveal from "./modules/scroll-reveal.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdown from "./modules/dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initAnimaisFetch from "./modules/animais-fetch.js";
import initBitcoinFetch from "./modules/bitcoin-fetch.js";

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] div')
tabNav.init();

initScrollReveal();
initModal();
initTooltip();
initDropdown();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();
initBitcoinFetch();
