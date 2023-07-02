document.addEventListener("DOMContentLoaded", function () {
  var hamburgerIcon = document.querySelector(".hamburger .icon");
  var sidebar = document.querySelector(".sidebar");

  hamburgerIcon.addEventListener("click", function () {
    sidebar.classList.toggle("expanded");
  });
});
var sidebar = document.querySelector(".sidebar");
var windowWidth = window.innerWidth;

if (window.innerWidth <= 600 && sidebar.classList.contains("expanded")) {
  sidebar.classList.remove("expanded");
}