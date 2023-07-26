const searchApptInput = document.getElementById("search-appt");
const paginationElement = document.querySelector(".pagination");

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
        displayed = true;
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

document.querySelector(".clear-search").addEventListener("click", function () {
  const paginationElement = document.querySelector(".pagination");

  paginationElement.style.display = "flex"; // Show pagination

  var input = document.getElementById("search-appt");
  input.value = "";
  input.dispatchEvent(new Event("keyup"));

  $("table").each(function (index) {
    var tableId = "table" + (index + 1);
    var paginationId = "pagination" + (index + 1);
    var table = $("#" + tableId);
    var tbody = table.find("tbody");
    var rowsPerPage = 2;
    var rows = tbody.find("tr");
    var pageCount = Math.ceil(rows.length / rowsPerPage);

    function displayRows(page) {
      var start = (page - 1) * rowsPerPage;
      var end = start + rowsPerPage;

      rows.hide();
      rows.slice(start, end).show();
    }

    var pagination = $("#" + paginationId);
    pagination.empty(); // Clear the existing pagination

    for (var i = 1; i <= pageCount; i++) {
      var activeClass = i === 1 ? "active" : "";
      pagination.append(
        '<li class="page-item ' +
          activeClass +
          '"><a class="page-link" href="#">' +
          i +
          "</a></li>"
      );
    }

    displayRows(1);

    pagination.on("click", ".page-link", function (e) {
      e.preventDefault();

      pagination.find("li").removeClass("active");

      var page = parseInt($(this).text());
      displayRows(page);

      $(this).parent().addClass("active");
    });
  });
});
document.getElementById("divSelector").addEventListener("change", function () {
  var input = document.getElementById("search-appt");
  input.value = "";
  input.dispatchEvent(new Event("keyup"));

  $("table").each(function (index) {
    var tableId = "table" + (index + 1);
    var paginationId = "pagination" + (index + 1);
    var table = $("#" + tableId);
    var tbody = table.find("tbody");
    var rowsPerPage = 2;
    var rows = tbody.find("tr");
    var pageCount = Math.ceil(rows.length / rowsPerPage);

    function displayRows(page) {
      var start = (page - 1) * rowsPerPage;
      var end = start + rowsPerPage;

      rows.hide();
      rows.slice(start, end).show();
    }

    var pagination = $("#" + paginationId);
    pagination.empty(); // Clear the existing pagination

    for (var i = 1; i <= pageCount; i++) {
      var activeClass = i === 1 ? "active" : "";
      pagination.append(
        '<li class="page-item ' +
          activeClass +
          '"><a class="page-link" href="#">' +
          i +
          "</a></li>"
      );
    }

    displayRows(1);

    pagination.on("click", ".page-link", function (e) {
      e.preventDefault();

      pagination.find("li").removeClass("active");

      var page = parseInt($(this).text());
      displayRows(page);

      $(this).parent().addClass("active");
    });
  });
  if (searchApptInput.value.trim() !== "") {
    paginationElement.style.display = "none"; // Hide pagination
  } else {
    paginationElement.style.display = "flex"; // Show pagination
  }
});

searchApptInput.addEventListener("input", function () {
  if (searchApptInput.value.trim() !== "") {
    paginationElement.style.display = "none"; // Hide pagination
  } else {
    paginationElement.style.display = "flex"; // Show pagination
  }
});
