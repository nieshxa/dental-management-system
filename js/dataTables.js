$(document).ready(function () {
  $("#treatment-plan-table").DataTable({
    paging: true,
    lengthMenu: [[5], [5]],
    lengthChange: false,
    ordering: false,
    searching: true,
    info: true,
    language: {
      search: "",
      searchPlaceholder: "Search",
    },
  });

  $("#appointments").DataTable({
    paging: true,
    lengthChange: false, // Disable length change option
    searching: true,
    ordering: false,
    info: true,
    pageLength: 5, // Set the number of rows to 5
    language: {
      search: "",
      searchPlaceholder: "Search",
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tdTypeElements = document.querySelectorAll("td .type");

  tdTypeElements.forEach(function (tdType) {
    const type = tdType.textContent.trim(); // Get the text content and remove leading/trailing whitespace
    const parentTD = tdType.parentElement;
    switch (type) {
      case "CONFIRMED":
        parentTD.style.borderLeft = "1vh solid #6df38a";
        break;
      case "CANCELLED":
        parentTD.style.borderLeft = "1vh solid #f57373";
        break;
      case "PREVIOUS":
        parentTD.style.borderLeft = "1vh solid #818181";
        break;
      case "PENDING":
        parentTD.style.borderLeft = "1vh solid #f5cd73";
        break;
      default:
        // Handle other cases or leave it empty for no border
        break;
    }
    // Add padding-left of 0.5rem to the parent TD
    parentTD.style.paddingLeft = "0.5rem";
  });
});
