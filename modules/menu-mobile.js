import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menulist = document.querySelector('[data-menu="list"]');

  if (menuButton) {
    function openMenu(event) {
      menulist.classList.add("active");
      menuButton.classList.add("active");
      outsideClick(menulist, ["touchstart", "click"], () => {
        menulist.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }

    ["touchstart", "click"].forEach((user) => {
      menuButton.addEventListener(user, openMenu);
    });
  }
}
