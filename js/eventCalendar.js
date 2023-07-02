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
    dayClick: function (date, jsEvent, view) {
      $(".fc-day").removeClass("active");
      $(this).addClass("active");

      $("#event-details").empty();

      var events = $("#calendar").fullCalendar(
        "clientEvents",
        function (event) {
          return moment(date).isSame(event.start, "day");
        }
      );

      var dateHtml =
        "<h3>" + moment(date).format("MMMM Do YYYY, dddd") + "</h3>";
      $("#event-details").html(dateHtml);

      if (events.length > 0) {
        for (var i = 0; i < events.length; i++) {
          var event = events[i];
          var eventHtml =
            '<div class="event-details-container"><div class="date-event-details">' +
            event.title +
            '</div><div class="date-event-details">' +
            moment(event.start).format("h:mm a") +
            "</div></div>";
          $("#event-details").append(eventHtml);
        }
      } else {
        $("#event-details").append("<p>No events for this date.</p>");
      }
    },
    contentHeight: "auto",
    viewRender: function (view, element) {
      $(".fc-day").removeClass("active");

      var currentDate = moment().format("YYYY-MM-DD");
      $('.fc-day[data-date="' + currentDate + '"]').addClass("active");

      var events = $("#calendar").fullCalendar(
        "clientEvents",
        function (event) {
          return moment(currentDate).isSame(event.start, "day");
        }
      );

      var dateHtml =
        "<h3>" + moment(currentDate).format("MMMM Do YYYY, dddd") + "</h3>";
      $("#event-details").html(dateHtml);

      if (events.length > 0) {
        for (var i = 0; i < events.length; i++) {
          var event = events[i];
          var eventHtml =
            '<div class="event-details-container"><div class="date-event-details">' +
            event.title +
            '</div><div class="date-event-details">' +
            moment(event.start).format("h:mm a") +
            "</div></div>";
          $("#event-details").append(eventHtml);
        }
      } else {
        var dentalConsultationEvent = {
          title: "Dental Consultation",
          start: currentDate + "T10:00:00",
          allDay: false,
        };
        $("#calendar").fullCalendar(
          "renderEvent",
          dentalConsultationEvent,
          true
        );

        $("#event-details").append(
          '<div class="event-details-container"><div class="date-event-details">' +
            dentalConsultationEvent.title +
            '</div><div class="date-event-details">' +
            moment(dentalConsultationEvent.start).format("h:mm a") +
            "</div></div>"
        );
      }
    },
  });
});
