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
  $("#prescription-table").DataTable({
    paging: true,
    lengthMenu: [[5], [5]],
    lengthChange: false,
    ordering: false,
    searching: true,
    info: false,
    language: {
      search: "",
      searchPlaceholder: "Search",
    },
  });
  var appointmentsTable = $("#appointments").DataTable({
    paging: true,
    lengthChange: false,
    searching: true,
    ordering: false,
    info: true,
    pageLength: 5,
    language: {
      search: "",
      searchPlaceholder: "Search",
    },
  });
  $("#filterClinic").on("change", function () {
    // Get the selected clinic value
    var selectedClinic = $(this).val();

    // Check if the selected clinic is "all"
    if (selectedClinic === "all") {
      // Remove the filter on column 2 and redraw the DataTable
      appointmentsTable.column(2).search("").draw();
    } else {
      // Apply a filter to column 2 based on the selected clinic and redraw the DataTable
      appointmentsTable.column(2).search(selectedClinic).draw();
    }
  });
  $("#filterStatus").on("change", function () {
    // Get the selected clinic value
    var selectedClinic = $(this).val();

    // Check if the selected clinic is "all"
    if (selectedClinic === "all") {
      // Remove the filter on column 2 and redraw the DataTable
      appointmentsTable.column(0).search("").draw();
    } else {
      // Apply a filter to column 2 based on the selected clinic and redraw the DataTable
      appointmentsTable.column(0).search(selectedClinic).draw();
    }
  });
});
