var xValues = ["All", "Confirmed", "Previous", "Cancelled", "Pending"];
var yValues = [23, 8, 7, 5, 3];
var barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Appointments Graph",
    },
  },
});
