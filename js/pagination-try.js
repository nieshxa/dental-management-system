$(document).ready(function () {
  var activeApptSched = $(".appt-sched.active");
  var pagination = $("#pagination");
  var rowsPerPage = 2;
  var activeTable = activeApptSched.find("table");
  var activeTBody = activeTable.find("tbody");
  var activeRows = activeTBody.find("tr");
  var pageCount = Math.ceil(activeRows.length / rowsPerPage);

  function displayRows(page) {
    var start = (page - 1) * rowsPerPage;
    var end = start + rowsPerPage;

    activeRows.hide();
    activeRows.slice(start, end).show();
  }

  function createPagination() {
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
  }

  createPagination();
  displayRows(1);

  pagination.on("click", ".page-link", function (e) {
    e.preventDefault();

    pagination.find("li").removeClass("active");
    $(this).parent().addClass("active");

    var page = parseInt($(this).text());
    displayRows(page);
  });
});
