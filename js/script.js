import ScrollAnimate from "./modules/scroll-animate.js";
import MobileMenu from "./modules/mobile-menu.js";

const scrollAnimate = new ScrollAnimate('[data-animate= "scroll"]');
scrollAnimate.init();

const mobileMenu = new MobileMenu('[data-menu="hamburguer"]', '[data-menu="lista"]');
mobileMenu.init();