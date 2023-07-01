document.addEventListener("DOMContentLoaded", function () {
  var hamburgerIcon = document.querySelector(".hamburger .icon");
  var sidebar = document.querySelector(".sidebar");

  hamburgerIcon.addEventListener("click", function () {
    sidebar.classList.toggle("expanded");
  });
});
