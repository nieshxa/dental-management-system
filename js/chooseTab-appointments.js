$(document).ready(function () {
  $("#divSelector").on("change", function () {
    var selectedDiv = $(this).val();
    $(".appt-sched").removeClass("active").hide();
    $("#div" + selectedDiv)
      .addClass("active")
      .show();  
  });
});