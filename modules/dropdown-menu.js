import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenu = document.querySelectorAll(dropdownMenus);
    if (events === undefined) {
      this.events = ["touchstart", "click"]
    } else {
      this.events = events
    }
    this.activeClass = 'active'
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove('active');
    });
  }

  addDropdownMenusEvent() {
    this.dropdownMenu.forEach((item) => {
      this.events.forEach((user) => {
        item.addEventListener(user, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenu) {
      this.addDropdownMenusEvent()
    }
    return this;
  }
}
