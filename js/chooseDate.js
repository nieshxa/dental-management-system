$(document).ready(function () {
  $("#calendar").fullCalendar({
    eventRender: function (event, element) {
      element.find(".fc-time").hide();
    },
    dayRender: function (date, cell) {
      var events = $("#calendar").fullCalendar(
        "clientEvents",
        function (event) {
          return moment(date).isSame(event.start, "day");
        }
      );

      if (events.length > 0) {
        var eventNames = events.map(function (event) {
          return event.title;
        });
        cell.append(
          '<div class="event-names">' + eventNames.join("<br>") + "</div>"
        );
      }
    },

    contentHeight: "auto",
    dayClick: function (date) {
      var currentDate = moment().startOf("day");
      var selectedDate = moment(date).startOf("day");

      if (selectedDate.isSameOrBefore(currentDate)) {
        alert("This date is not available for selection.");
      } else {
        $(".fc-day").removeClass("active");
        $(this).addClass("active");

        var inputText = selectedDate.format("MMMM Do YYYY, dddd");
        $("#eventdetails-modal").val(inputText);
      }
    },
  });
});
