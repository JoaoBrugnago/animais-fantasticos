export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo'
  }

  //-- Ativa a tab de acordo com o index da mesma
    activeTab(index) {
      this.tabContent.forEach((section) => {
        section.classList.remove(this.activeClass);
      });
      const direcao = this.tabContent[index].dataset.anime;
      this.tabContent[index].classList.add(this.activeClass, direcao);
    }

    //-- Adiciona os eventos as tabs
    addTabNavEvent() {
      this.tabMenu.forEach((item, index) => {
        item.addEventListener("click", () => this.activeTab(index));
      });
    }

    init() {
      if (this.tabMenu.length && this.tabContent.length) {
        //-- Ativar primeiro item
        this.activeTab(0)
        this.addTabNavEvent()
      }
    }
}

/* Código antigo
export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direcao);
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
*/