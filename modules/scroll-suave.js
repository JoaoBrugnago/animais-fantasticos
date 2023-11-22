export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else this.options = options;
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    // FORMA PADRÃO
    //window.scrollTo({top: topo, behavior: 'smooth'})
    // FORMA ALTERNATIVA SEM PRECISAR VER A DISTÂNCIA ENTRE A SECTION E O TOPO
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.lenght) {
      this.addLinkEvent();
    }
    return this;
  }
}

/* Código antes de refatoração
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
*/
