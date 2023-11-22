export default function outsideClick(element, users, callback) {
  const html = document.documentElement;

  if (!element.hasAttribute("data-validacao")) {
    users.forEach((user) => {
      setTimeout(() => {
        html.addEventListener(user, handleOutside);
      });
    });
    element.setAttribute("data-validacao", "");
  }
  //Importante saber: Quando essa função outsideClick é chamada, o html.addEventListener é automaticamente criado e estará disponível a qualquer momento independente onde for o click, basta que seja dentro do html (por isso eu consigo fazer essa verificação se o click foi dentro ou fora do dropdownMenu, pois está ativa a qualquer momento). Mas ele é criado SEMPRE que essa função é chamada, ou seja, ele ocupa um espaço a mais na memória sempre que essa função é ativada. Mas para otimizar o código, é preferível que se crie essa função apenas um vez, independente de quantas vezes outsideClick é chamada. Para isso, vamos criar um data-validacao e adicioná-lo ao elemento, se não tiver, junto, adicionamos o evento. Se possuir o data-validacao, o evento não é criado novamente.

  function handleOutside(event) {
    if (!element.contains(event.target)) {
      callback();
      element.removeAttribute("data-validacao");
      users.forEach((user) => {
        html.removeEventListener(user, handleOutside);
      });
    }
  }
}
