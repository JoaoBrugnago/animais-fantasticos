import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menulist, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menulist = document.querySelector(menulist);
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
    this.activeClass = "active";
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menulist.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menulist, this.events, () => {
      this.menulist.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((event) => {
      this.menuButton.addEventListener(event, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menulist) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
