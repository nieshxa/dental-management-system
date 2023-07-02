function openModal(title, description) {
  var modal = document.getElementById("modal");
  var modalTitle = document.getElementById("modal-title");
  var modalDescription = document.getElementById("modal-description");

  modalTitle.innerText = title;
  modalDescription.innerText = description;

  modal.style.display = "flex";
}

window.onclick = function (event) {
  var modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
