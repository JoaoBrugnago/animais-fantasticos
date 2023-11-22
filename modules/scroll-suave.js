export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    // FORMA PADRÃO
    //window.scrollTo({top: topo, behavior: 'smooth'})
    // FORMA ALTERNATIVA SEM PRECISAR VER A DISTÂNCIA ENTRE A SECTION E O TOPO
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
