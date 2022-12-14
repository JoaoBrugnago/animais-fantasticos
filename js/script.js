import ScrollSuave from "./Modules/scroll-suave.js";
import animacaoScroll from "./Modules/animacao-scroll.js";
import initAccordion from "./Modules/accordion.js";
import initTabNav from "./Modules/TabNav.js";
import initModal from "./Modules/modal.js";
import initTooltip from "./Modules/tooltip.js";
import initDropdownMenu from "./Modules/dropdown-menu.js";
import initFuncionamento from "./Modules/funcionamento.js";
import initFetchAnimais from "./Modules/fetch-animais.js";
import initFetchBitcoin from "./Modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave("[data-menu='suave'] a[href^='#']");
scrollSuave.init();

animacaoScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();