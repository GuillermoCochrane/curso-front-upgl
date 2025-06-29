// assets/js/menu.js
window.addEventListener("load" , () => {
  const toggleBtn = document.querySelector("#menu-toggle");
  const sidebar = document.querySelector("#sidebar");
  const menuOpenIcon = document.querySelector("#menu-open-icon");
  const menuCloseIcon = document.querySelector("#menu-close-icon");

  toggleBtn?.addEventListener("click", () => {
    sidebar?.classList.toggle("hidden");
    menuOpenIcon?.classList.toggle("unseen");
    menuCloseIcon?.classList.toggle("unseen");
  });
});