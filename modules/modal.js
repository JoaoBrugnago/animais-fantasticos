export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    }

    function cliqueFora(event) {
      //if (Array.from(event.target.classList).includes('modal-container')) {
      //  fecharModal(event);
      //}
      if (event.target === this) {
        // This é o próprio container, pois é o container que chama essa função. Se o event.target (local clicado) for no container, quero que feche
        toggleModal(event);
      }
    }

    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueFora);
  }
}
