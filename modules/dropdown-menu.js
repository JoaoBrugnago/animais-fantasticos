import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdownMenu = document.querySelectorAll("[data-dropdown]");

  function handleDropdown(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("ativo");
    });
  }

  dropdownMenu.forEach((item) => {
    ["touchstart", "click"].forEach((user) => {
      item.addEventListener(user, handleDropdown);
    });
  });
}
