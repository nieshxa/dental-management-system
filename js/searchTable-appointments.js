$("#search-appt").keyup(function () {
  var searchValue = $(this).val().toLowerCase();
  var $tableRows = $(".appt-sched.active table tbody tr");

  $tableRows.hide();

  $tableRows.each(function () {
    var $secondColumn = $(this).find("td:nth-child(2)");
    var $fourthColumn = $(this).find("td:nth-child(4)");

    if (
      $secondColumn.text().toLowerCase().includes(searchValue) ||
      $fourthColumn.text().toLowerCase().includes(searchValue)
    ) {
      $(this).show();
    }
  });

  var $visibleRows = $(".appt-sched.active table tbody tr:visible");

  if ($visibleRows.length === 0) {
    $(".appt-sched.active table tbody").append(
      '<tr class="no-matches"><td colspan="6">No rows matched.</td></tr>'
    );
  } else {
    $(".no-matches").remove();
  }
});
$(".clear-search").click(function () {
  $("#search-appt").val("");

  $(".appt-sched.active table tbody tr").show();
  $(".no-matches").remove();
});
