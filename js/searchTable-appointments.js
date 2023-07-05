// clear search engine
$(".clear-search").click(function () {
  $("#search-appt").val("");

  $(".appt-sched.active table tbody tr").show();
  $(".no-matches").remove();
});

// search
document.getElementById("search-appt").addEventListener("keyup", function () {
  var input, filter, table, tr, serviceName, serviceDate, i, txtValue;
  input = document.getElementById("search-appt");
  filter = input.value.toUpperCase();
  table = document.querySelector(".appt-sched.active table");
  tr = table.getElementsByTagName("tr");

  var displayed = false; // Flag to track if any rows were displayed

  for (i = 0; i < tr.length; i++) {
    serviceName = tr[i].querySelector(".service-name");
    serviceDate = tr[i].querySelector(".service-date");

    if (serviceName && serviceDate) {
      txtValue = serviceName.textContent || serviceName.innerText;
      txtValue += serviceDate.textContent || serviceDate.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        displayed = true; // Set the flag to true if a row is displayed
      } else {
        tr[i].style.display = "none";
      }
    }
  }

  // Remove the "No matches found" row if it exists
  var noMatchRow = table.querySelector(".no-matches-row");
  if (noMatchRow) {
    table.removeChild(noMatchRow);
  }

  // Create a new row if no matches were found
  if (!displayed && filter !== "") {
    noMatchRow = document.createElement("tr");
    noMatchRow.classList.add("no-matches-row");
    var noMatchCell = document.createElement("td");
    noMatchCell.setAttribute("colspan", "2");
    noMatchCell.textContent = "No matches found.";
    noMatchRow.appendChild(noMatchCell);
    table.appendChild(noMatchRow);
  }
});
