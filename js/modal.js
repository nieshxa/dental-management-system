function openModal(title, description) {
  var modal = document.getElementById("modal");
  var modalTitle = document.getElementById("modal-title");
  var modalDescription = document.getElementById("modal-description");
  var closeButton = document.getElementsByClassName("close")[0]; // Get the closing button element

  modalTitle.innerText = title;
  modalDescription.innerText = description;

  modal.style.display = "flex";

  // Add an event listener to the closing button
  closeButton.onclick = function () {
    modal.style.display = "none";
  };
}

window.onclick = function (event) {
  var modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
