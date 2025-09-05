// assets/js/menu.js
window.addEventListener("load" , () => {
  const toggleBtn = document.querySelector("#menu-toggle");
  const sidebar = document.querySelector("#sidebar");
  const indexbar = document.querySelector("#indexbar");
  const menu = document.querySelector("#menu");
  const menuOpenIcon = document.querySelector("#menu-open-icon");
  const menuCloseIcon = document.querySelector("#menu-close-icon");
  const lightMode = document.querySelector("#light-mode");
  const darkMode = document.querySelector("#dark-mode");
  const themeSwitcher = document.querySelector("#theme-switcher");

  themeSwitcher?.addEventListener("change", () => {
    if (themeSwitcher.checked) {
      lightMode.classList.add("unseen");
      darkMode.classList.remove("unseen");
    } else {
      darkMode.classList.add("unseen");
      lightMode.classList.remove("unseen");
    }
  });
  
  toggleBtn?.addEventListener("click", () => {

    menuOpenIcon?.classList.toggle("unseen");
    menuCloseIcon?.classList.toggle("unseen");
    if (window.innerWidth < 1200) {      // si el viewport es menor a 1200px
      menu?.classList.toggle("hidden");
      indexbar?.classList.toggle("hidden");
    }
    if (window.innerWidth >= 1200) {      // si el viewport es mayor a 1200px
    sidebar?.classList.toggle("hidden");
    }
  });
});