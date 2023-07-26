$(document).ready(function () {
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
