import ScrollAnimate from "./modules/scroll-animate.js";
import MobileMenu from "./modules/mobile-menu.js";
import FormMessage from "./modules/form-message.js";

const scrollAnimate = new ScrollAnimate('[data-animate= "scroll"]');
scrollAnimate.init();

const mobileMenu = new MobileMenu(
  '[data-menu="hamburguer"]',
  '[data-menu="lista"]'
);
mobileMenu.init();

const formMessage = new FormMessage({
  form: ".formjs",
  button: "#enviar",
  error:
    "<div id='form-error'><h2>Oops! Um erro ocorreu.</h2><p>Tente de novo ou envie um e-mail para contato@blueheaven.com</p></div>",
  success:
    "<div id='form-success'><h2>Mensagem enviada.</h2><p>Agradecemos o contato e retornaremos em breve</p></div>",
});
formMessage.init();
