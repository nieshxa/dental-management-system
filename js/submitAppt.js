document.querySelector(".submit").addEventListener("click", function (e) {
  e.preventDefault();

  var serviceOption = document.querySelector("#service-1 option:checked");
  var eventDetails = document.querySelector("#eventdetails-modal").value;
  var timeOption = document.querySelector("#time option:checked");

  if (serviceOption.disabled) {
    displayModal("Please select at least one service.");
  } else if (timeOption.disabled) {
    displayModal("Please choose a time.");
  } else if (eventDetails.trim() === "") {
    displayModal("Please choose a date.");
  } else {
    // Perform form submission or other actions
    // ...
  }
});
function displayModal(message) {
  var modal = document.getElementById("myModal");
  var modalMessage = document.getElementById("modalMessage");
  modalMessage.textContent = message;
  modal.style.display = "flex";

  var closeButton = document.getElementsByClassName("close")[0];
  closeButton.onclick = function () {
    modal.style.display = "none";
  };
}
