export default function animacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowPerc = window.innerHeight * 0.6;
  sections[0].classList.add("ativo");
  
  function animaScroll() {
    sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowPerc) < 0;
      if(isSectionVisible) {
        item.classList.add("ativo");
      }
      else if(item.classList.contains("ativo")) {
        item.classList.remove("ativo");
      }
    })
  }
  window.addEventListener("scroll", animaScroll);
}
