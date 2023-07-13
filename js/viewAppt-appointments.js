$(document).ready(function () {
  // When the "View" dropdown item is clicked
  $(".view-modal-appt").click(function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Get the content of the first and second columns
    var firstColumnContent = $(this)
      .closest("tr")
      .find("td:first-child")
      .html();
    var secondColumnContent = $(this)
      .closest("tr")
      .find("td:nth-child(2)")
      .html();

    // Create the content for the modal
    var modalContent =
      "<table>" +
      "<tr><td>" +
      firstColumnContent +
      "</td></tr>" +
      "<tr><td>" +
      secondColumnContent +
      "</td></tr>" +
      "</table>";

    // Display the content in the modal
    $("#modal-content").html(modalContent);

    // Open the modal
    $("#myModal").css("display", "flex");
  });

  // When the modal's close button is clicked
  $(".close").click(function () {
    // Close the modal
    $("#myModal").css("display", "none");
  });
});
