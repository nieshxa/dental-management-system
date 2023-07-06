// FLOW
// if service1 option selected = disabled, hide service2
// disable option on service2 if it is already selected on service1
// if you select an option that is currently selected on service2 then
// service2 will reset (service1 is the priority dropdown)
// this way, unless you selected on first dd, you cannot choose to select on 2nd dd
// but still making sure that you will not select two of the same service

const service1Select = document.querySelector("#service-1");
const anotherServiceElement = document.querySelector(".another-service");

service1Select.addEventListener("change", function () {
  if (service1Select.options[service1Select.selectedIndex].disabled) {
    anotherServiceElement.style.display = "none"; // Hide the element
  } else {
    anotherServiceElement.style.display = "block"; // Show the element
  }
});

$(document).ready(function () {
  $("#service-1").change(function () {
    var selectedOption = $(this).val();

    if ($("#service-2").val() === selectedOption) {
      $("#service-2").val("");
    }
    $("#service-2 option").prop("disabled", false);
    $('#service-2 option[value="' + selectedOption + '"]').prop(
      "disabled",
      true
    );
  });
});
