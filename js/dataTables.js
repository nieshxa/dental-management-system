$(document).ready(function () {
  $("#treatment-plan-table").DataTable({
    paging: true,
    lengthMenu: [[5], [5]],
    lengthChange: false,
    searching: true,
    info: true,
    language: {
      search: "",
      searchPlaceholder: "Search",
    },
  });
});
