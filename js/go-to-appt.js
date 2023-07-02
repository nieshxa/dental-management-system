const myAppt = document.querySelector(".my-appt");
myAppt.addEventListener("click", function () {
  window.location.href = "appointments.html";
});

const bookAppt = document.querySelector(".book-appt");
bookAppt.addEventListener("click", function () {
  window.location.href = "create-appt.html";
});
